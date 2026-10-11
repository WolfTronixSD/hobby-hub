(() => {
  const root = document.documentElement;
  const $ = (sel) => document.querySelector(sel);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const params = new URLSearchParams(location.hash.slice(1));
  let hobbyId = params.get("h") || store.get("hobby") || HOBBIES[0].id;
  let tab = params.get("t") || store.get("tab") || "podcasts";
  let subId = params.get("s") || store.get("sub") || "";
  let news = null;

  // Theme
  const savedTheme = store.get("theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  const syncThemeBtn = () => {
    const dark = (root.dataset.theme || "dark") === "dark";
    $("#themeBtn").textContent = dark ? "🌙" : "☀️";
  };
  $("#themeBtn").addEventListener("click", () => {
    const cur = root.dataset.theme || "dark";
    root.dataset.theme = cur === "dark" ? "light" : "dark";
    store.set("theme", root.dataset.theme);
    syncThemeBtn();
  });
  syncThemeBtn();

  // Hobby buttons
  const hobbyNav = $("#hobbyNav");
  hobbyNav.innerHTML = HOBBIES.map((h) => `
    <button class="hobby" data-id="${h.id}" style="--c:${h.accent}" title="${esc(h.tagline)}">
      <span class="emoji">${h.icon}</span><b>${esc(h.name)}</b>
    </button>`).join("");
  const nh = HOBBIES.length;
  hobbyNav.style.setProperty("--hcols", [8, 9, 7, 6].reduce((best, c) => ((c - nh % c) % c < (best - nh % best) % best ? c : best)));
  hobbyNav.addEventListener("click", (e) => {
    const b = e.target.closest(".hobby");
    if (b) {
      hobbyId = b.dataset.id;
      if (tab === "history") tab = "podcasts";
      render();
      const target = $("#subNav").hidden ? $("#tabNav") : $("#subNav");
      if (target.getBoundingClientRect().top > innerHeight * 0.6) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  $("#subNav").addEventListener("click", (e) => {
    const b = e.target.closest(".sub");
    if (b) { subId = b.dataset.id; if (tab === "history") tab = "podcasts"; render(); }
  });
  $("#tabNav").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-tab]");
    if (b) { tab = b.dataset.tab; render(); }
  });

  const podcastCard = (p, i) => {
    const q = encodeURIComponent(p.name);
    return `
    <div class="card podcast">
      <div class="rank">${i + 1}</div>
      <div class="body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="listen">
          <a href="https://podcasts.apple.com/us/search?term=${q}" target="_blank" rel="noopener">🎵 Apple</a>
          <a href="https://open.spotify.com/search/${q}/podcasts" target="_blank" rel="noopener">🟢 Spotify</a>
          <a href="${esc(p.url)}" target="_blank" rel="noopener">🌐 Website</a>
        </div>
      </div>
    </div>`;
  };

  const ytCard = (y, i) => `
    <a class="card yt" href="${esc(y.url)}" target="_blank" rel="noopener">
      <div class="rank">${i + 1}</div>
      <div class="body"><h3>${esc(y.name)}</h3><p>${esc(y.desc)}</p></div>
      <span class="go">›</span>
    </a>`;

  const timeAgo = (iso) => {
    const d = new Date(iso);
    if (isNaN(d)) return "";
    const mins = Math.round((Date.now() - d) / 60000);
    if (mins < 60) return `${Math.max(mins, 1)}m ago`;
    const hrs = Math.round(mins / 60);
    if (hrs < 48) return `${hrs}h ago`;
    return `${Math.round(hrs / 24)}d ago`;
  };

  const newsView = (h) => {
    const stale = !!(news && news.updated && Date.now() - new Date(news.updated) > 12 * 3600 * 1000);
    const items = news && news.topics && news.topics[h.id] ? news.topics[h.id] : [];
    const list = items.length
      ? `<div class="grid">${items.slice(0, 20).map((n) => `
          <a class="card news-item" href="${esc(n.link)}" target="_blank" rel="noopener">
            <div class="body">
              <div class="src">${esc(n.source)}${n.date ? " · " + timeAgo(n.date) : ""}</div>
              <h3>${esc(n.title)}</h3>
            </div>
            <span class="go">›</span>
          </a>`).join("")}</div>`
      : `<p class="empty">${news === null ? "Loading headlines…" : "Headlines will appear here after the first automatic update. Use the sources below meanwhile."}</p>`;
    return `
      <div class="section-title"><h2>Latest headlines</h2><span>${news && news.updated ? "Updated " + timeAgo(news.updated) : ""}</span></div>
      ${stale ? `<p class="notice">⚠️ These headlines are more than 12 hours old${navigator.onLine ? "" : " (you are offline)"}. Tap a source below for the latest.</p>` : ""}
      ${list}
      <div class="section-title"><h2>News sources</h2></div>
      <div class="sources">${h.newsSources.map((s) => `<a class="source" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join("")}</div>`;
  };

  // Weather: Open-Meteo (free, no key) plus an approximate location from the IP address
  const WX = {
    0: ["☀️", "Clear"], 1: ["🌤️", "Mostly clear"], 2: ["⛅", "Partly cloudy"], 3: ["☁️", "Cloudy"],
    45: ["🌫️", "Fog"], 48: ["🌫️", "Fog"], 51: ["🌦️", "Drizzle"], 53: ["🌦️", "Drizzle"], 55: ["🌦️", "Drizzle"],
    56: ["🌧️", "Freezing drizzle"], 57: ["🌧️", "Freezing drizzle"], 61: ["🌧️", "Light rain"], 63: ["🌧️", "Rain"],
    65: ["🌧️", "Heavy rain"], 66: ["🌧️", "Freezing rain"], 67: ["🌧️", "Freezing rain"], 71: ["🌨️", "Light snow"],
    73: ["🌨️", "Snow"], 75: ["❄️", "Heavy snow"], 77: ["🌨️", "Snow"], 80: ["🌦️", "Showers"], 81: ["🌧️", "Showers"],
    82: ["⛈️", "Heavy showers"], 85: ["🌨️", "Snow showers"], 86: ["🌨️", "Snow showers"], 95: ["⛈️", "Thunderstorm"],
    96: ["⛈️", "Thunderstorm, hail"], 99: ["⛈️", "Thunderstorm, hail"]
  };
  const wxIcon = (code, isDay = 1) => {
    const w = WX[code] || ["🌡️", ""];
    return code <= 1 && !isDay ? ["🌙", code === 0 ? "Clear night" : w[1]] : w;
  };
  const deg = (v) => (v == null ? "–" : Math.round(v) + "°");
  const cacheGet = (k, maxAge) => {
    try { const v = JSON.parse(store.get(k)); if (v && (maxAge == null || Date.now() - v.t < maxAge)) return v.d; } catch {}
    return null;
  };
  const cacheSet = (k, d) => store.set(k, JSON.stringify({ t: Date.now(), d }));
  const getJSON = (url, ms = 6000) => {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), ms);
    return fetch(url, { signal: ctl.signal })
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .finally(() => clearTimeout(timer));
  };

  async function ipLocation() {
    const hit = cacheGet("ipLoc", 6 * 3600e3);
    if (hit) return hit;
    const tries = [
      ["https://get.geojs.io/v1/ip/geo.json", (j) => ({ name: j.city || j.region, lat: +j.latitude, lon: +j.longitude })],
      ["https://ipapi.co/json/", (j) => ({ name: j.city || j.region, lat: +j.latitude, lon: +j.longitude })]
    ];
    for (const [url, pick] of tries) {
      try {
        const loc = pick(await getJSON(url));
        if (isFinite(loc.lat) && isFinite(loc.lon) && (loc.lat || loc.lon)) {
          loc.name = loc.name || "Your area";
          cacheSet("ipLoc", loc);
          return loc;
        }
      } catch {}
    }
    return cacheGet("ipLoc");
  }

  async function getWeather(lat, lon) {
    const key = `wx:${lat.toFixed(2)},${lon.toFixed(2)}`;
    const hit = cacheGet(key, 20 * 60e3);
    if (hit) return hit;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day" +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max" +
      "&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto&forecast_days=5";
    try {
      const d = await getJSON(url);
      if (!d.current || !d.daily) throw new Error("bad data");
      cacheSet(key, d);
      return d;
    } catch (e) {
      const old = cacheGet(key);
      if (old) return { ...old, stale: true };
      throw e;
    }
  }

  const forecastUrl = (w) => `https://forecast.weather.gov/MapClick.php?lat=${w.lat}&lon=${w.lon}`;

  async function homeWeather() {
    const bar = $("#wxBar");
    const loc = (await ipLocation()) || { name: "San Diego", lat: 32.7157, lon: -117.1611 };
    try {
      const d = await getWeather(loc.lat, loc.lon);
      const c = d.current, dy = d.daily;
      const [ic, txt] = wxIcon(c.weather_code, c.is_day);
      bar.href = forecastUrl(loc);
      bar.innerHTML = `<span class="wx-ic">${ic}</span><b class="wx-t">${deg(c.temperature_2m)}F</b>
        <span class="wx-txt"><b>${esc(loc.name)}</b> · ${esc(txt)}<small>H ${deg(dy.temperature_2m_max[0])} L ${deg(dy.temperature_2m_min[0])} · 💨 ${Math.round(c.wind_speed_10m)} mph${d.stale ? " · saved" : ""}</small></span>
        <span class="go">›</span>`;
      bar.setAttribute("aria-label", `Weather in ${loc.name}: ${Math.round(c.temperature_2m)} degrees, ${txt}. Open forecast`);
      bar.hidden = false;
    } catch {}
  }

  async function fillWxPanel(w) {
    const panel = () => { const el = $("#wxPanel"); return el && el.dataset.loc === w.name ? el : null; };
    try {
      const d = await getWeather(w.lat, w.lon);
      const el = panel();
      if (!el) return;
      const c = d.current, dy = d.daily;
      const [ic, txt] = wxIcon(c.weather_code, c.is_day);
      const uv = dy.uv_index_max && dy.uv_index_max[0] != null ? ` · UV ${Math.round(dy.uv_index_max[0])}` : "";
      const days = dy.time.map((t, i) => {
        const rain = dy.precipitation_probability_max ? dy.precipitation_probability_max[i] : 0;
        const name = i === 0 ? "Today" : new Date(t + "T12:00").toLocaleDateString(undefined, { weekday: "short" });
        return `<div class="wx-day"><span>${name}</span><span class="wx-dic">${wxIcon(dy.weather_code[i])[0]}</span>
          <b>${deg(dy.temperature_2m_max[i])}</b><small>${deg(dy.temperature_2m_min[i])}</small>${rain ? `<small>💧${rain}%</small>` : ""}</div>`;
      }).join("");
      el.innerHTML = `<a class="wx-now" href="${forecastUrl(w)}" target="_blank" rel="noopener">
          <span class="wx-big">${ic}</span>
          <div><div class="wx-temp">${deg(c.temperature_2m)}F <span>${esc(w.name)} · ${esc(txt)}</span></div>
          <small>Feels ${deg(c.apparent_temperature)} · 💧 ${c.relative_humidity_2m}% · 💨 ${Math.round(c.wind_speed_10m)} mph${uv}${d.stale ? " · saved copy" : ""}</small></div>
        </a><div class="wx-days">${days}</div>`;
    } catch {
      const el = panel();
      if (el) el.innerHTML = `<p class="empty">Live weather isn't available right now. Use the forecast links below.</p>`;
    }
  }

  function render() {
    const parent = HOBBIES.find((x) => x.id === hobbyId) || HOBBIES[0];
    hobbyId = parent.id;
    let h = parent;
    const subNav = $("#subNav");
    if (parent.subs) {
      h = parent.subs.find((x) => x.id === subId) || parent.subs[0];
      subId = h.id;
      store.set("sub", subId);
      subNav.hidden = false;
      const n = parent.subs.length;
      subNav.style.setProperty("--cols", [4, 5, 3, 2].find((c) => n % c === 0) || 4);
      subNav.innerHTML = parent.subs.map((x) => `
        <button class="sub" data-id="${x.id}" aria-pressed="${x.id === subId}">
          <span class="emoji">${x.icon}</span><b>${esc(x.name)}</b>
        </button>`).join("");
    } else {
      subNav.hidden = true;
      subNav.innerHTML = "";
    }
    if (!["podcasts", "youtube", "news", "history"].includes(tab)) tab = "podcasts";
    store.set("hobby", hobbyId);
    store.set("tab", tab);
    history.replaceState(null, "", `#h=${hobbyId}&t=${tab}` + (parent.subs ? `&s=${subId}` : ""));

    root.style.setProperty("--accent", h.accent || parent.accent);
    document.querySelectorAll(".hobby").forEach((b) => b.setAttribute("aria-pressed", b.dataset.id === hobbyId));
    document.querySelectorAll("#tabNav button").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
    const pod = document.querySelector('#tabNav button[data-tab="podcasts"]');
    const guides = !!(h.labels && h.labels.podcasts);
    pod.innerHTML = guides ? `<span>${h.labels.icon || "📘"}</span>${esc(h.labels.podcasts)}` : "<span>🎧</span>Podcasts";

    let html;
    if (tab === "podcasts") {
      html = h.labels && h.labels.podcasts
        ? `<div class="section-title"><h2>${h.icon} Top ${h.podcasts.length} ${esc(h.name)} ${esc(h.labels.heading || h.labels.podcasts.toLowerCase())}</h2></div>
              <div class="grid">${h.podcasts.map(ytCard).join("").replace(/card yt/g, "card guide")}</div>`
        : `<div class="section-title"><h2>${h.icon} Top ${h.podcasts.length} ${esc(h.name)} podcasts</h2></div>
              <div class="grid">${h.podcasts.map(podcastCard).join("")}</div>`;
    } else if (tab === "youtube") {
      html = `<div class="section-title"><h2>${h.icon} Top ${h.youtube.length} ${esc(h.name)} YouTube picks</h2></div>
              <div class="grid">${h.youtube.map(ytCard).join("")}</div>`;
    } else if (tab === "history") {
      html = historyView();
    } else {
      html = newsView(h);
    }
    if (h.weather && tab === "podcasts") {
      html = `<div class="wx-panel" id="wxPanel" data-loc="${esc(h.weather.name)}"><p class="empty">Loading live weather…</p></div>` + html;
    }
    $("#content").innerHTML = html;
    if (h.weather && tab === "podcasts") fillWxPanel(h.weather);
  }

  function historyView() {
    return `<div class="section-title"><h2>🕘 What's new</h2><span>You're on v${esc(APP_VERSION)}</span></div>
      <div class="history">${CHANGELOG.map((r, i) => `
        <article class="release${i === 0 ? " current" : ""}">
          <div class="release-head">
            <span class="vtag">v${esc(r.version)}</span>
            <h3>${esc(r.title)}</h3>
            <time>${esc(r.date)}</time>
          </div>
          <ul>${r.changes.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        </article>`).join("")}</div>`;
  }

  const showHistory = () => { tab = "history"; render(); $("#content").scrollIntoView({ behavior: "smooth" }); };
  $("#versionBtn").textContent = "v" + APP_VERSION;
  $("#versionBtn").addEventListener("click", showHistory);
  $("#historyLink").addEventListener("click", showHistory);

  // Share
  const SITE = "https://wolftronixsd.github.io/hobby-hub/";
  const shareBackdrop = $("#shareBackdrop");
  const shareLink = () => ($("#shareHere").checked ? SITE + location.hash : SITE);
  const shareText = () => "Check out Wolfie's Hobby Hub: podcasts, YouTube and news for my hobbies. " + shareLink();
  function updateShare() {
    const url = shareLink(), text = shareText();
    $("#shareUrl").value = url;
    $("#shareSms").href = "sms:?&body=" + encodeURIComponent(text);
    $("#shareWa").href = "https://wa.me/?text=" + encodeURIComponent(text);
    $("#shareMail").href = "mailto:?subject=" + encodeURIComponent("Wolfie's Hobby Hub") + "&body=" + encodeURIComponent(text);
  }
  $("#shareNative").hidden = !navigator.share;
  $("#shareBtn").addEventListener("click", () => { updateShare(); shareBackdrop.hidden = false; });
  $("#shareHere").addEventListener("change", updateShare);
  $("#shareClose").addEventListener("click", () => { shareBackdrop.hidden = true; });
  shareBackdrop.addEventListener("click", (e) => { if (e.target === shareBackdrop) shareBackdrop.hidden = true; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") shareBackdrop.hidden = true; });
  $("#shareNative").addEventListener("click", () => {
    navigator.share({ title: "Wolfie's Hobby Hub", text: "Podcasts, YouTube and news for my hobbies", url: shareLink() }).catch(() => {});
  });
  $("#shareCopy").addEventListener("click", () => {
    const btn = $("#shareCopy");
    const done = () => { btn.innerHTML = "<span>✅</span>Copied"; setTimeout(() => { btn.innerHTML = "<span>🔗</span>Copy link"; }, 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(shareLink()).then(done, () => { $("#shareUrl").select(); });
    else $("#shareUrl").select();
  });

  // On phones, open.spotify.com search links open the Spotify app on its home screen and drop the
  // search. Use the app's own search link instead, and fall back to the web page if the app is missing.
  const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="https://open.spotify.com/search/"]');
    if (!a || !mobile) return;
    const query = decodeURIComponent(a.pathname.split("/")[2] || "");
    if (!query) return;
    e.preventDefault();
    const web = a.href;
    let left = false;
    const onHide = () => { left = true; };
    document.addEventListener("visibilitychange", onHide, { once: true });
    location.href = "spotify:search:" + encodeURIComponent(query);
    setTimeout(() => {
      document.removeEventListener("visibilitychange", onHide);
      if (!left && !document.hidden) location.href = web;
    }, 1800);
  });

  render();
  homeWeather();

  fetch("news.json", { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : {}))
    .catch(() => ({}))
    .then((data) => {
      news = data || {};
      if (news.updated) $("#updated").textContent = "Headlines updated " + new Date(news.updated).toLocaleString();
      if (tab === "news") render();
    });

  // Offline support: cache the app so it opens with a weak signal in the car
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
  const syncOnline = () => { $("#offline").hidden = navigator.onLine; };
  addEventListener("online", syncOnline);
  addEventListener("offline", syncOnline);
  syncOnline();
})();
