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
      const changed = hobbyId !== b.dataset.id;
      hobbyId = b.dataset.id;
      const picked = HOBBIES.find((x) => x.id === hobbyId);
      if (changed && picked && picked.defaultTab) tab = picked.defaultTab;
      else if (tab === "history") tab = "podcasts";
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
    // A direct Apple show page lists the newest episodes first; a search lists old ones.
    const applePage = /^https:\/\/podcasts\.apple\.com\/[a-z]{2}\/podcast\//.test(p.url);
    const apple = applePage ? p.url : `https://podcasts.apple.com/us/search?term=${q}`;
    return `
    <div class="card podcast">
      <div class="rank">${i + 1}</div>
      <div class="body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="listen">
          <a href="${esc(apple)}" target="_blank" rel="noopener">🎵 Apple</a>
          <a href="https://open.spotify.com/search/${q}/podcasts" target="_blank" rel="noopener">🟢 Spotify</a>
          ${applePage ? "" : `<a href="${esc(p.url)}" target="_blank" rel="noopener">🌐 Website</a>`}
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
  const degC = (f) => (f == null ? "–" : Math.round((f - 32) * 5 / 9) + "°");
  const degFC = (f) => `${deg(f)}F / ${degC(f)}C`;
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
    const key = `wx2:${lat.toFixed(2)},${lon.toFixed(2)}`;
    const hit = cacheGet(key, 20 * 60e3);
    if (hit) return hit;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day" +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset" +
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

  // Sunrise/sunset come as local clock times ("2026-10-13T06:52"); show them as 6:52 AM without time zone shifts.
  const clock = (iso) => {
    const m = /T(\d\d):(\d\d)/.exec(iso || "");
    if (!m) return "–";
    const h = +m[1];
    return `${h % 12 || 12}:${m[2]} ${h < 12 ? "AM" : "PM"}`;
  };
  // Moon phase from the mean synodic month, counted from the new moon of 6 Jan 2000 18:14 UTC
  const moon = (when = Date.now()) => {
    const len = 29.530588853;
    const age = ((((when - Date.UTC(2000, 0, 6, 18, 14)) / 864e5) % len) + len) % len;
    const lit = Math.round((1 - Math.cos((2 * Math.PI * age) / len)) / 2 * 100);
    // new, first quarter, full and last quarter get about a day either side; the in-between phases fill the rest
    const q = (age / len) * 4, near = Math.abs(q - Math.round(q)) * len / 4 < 1;
    const [icon, name] = near
      ? [["🌑", "New moon"], ["🌓", "First quarter"], ["🌕", "Full moon"], ["🌗", "Last quarter"], ["🌑", "New moon"]][Math.round(q)]
      : [["🌒", "Waxing crescent"], ["🌔", "Waxing gibbous"], ["🌖", "Waning gibbous"], ["🌘", "Waning crescent"]][Math.floor(q)];
    return { icon, name, lit };
  };
  const sunMoonLine = (dy) => {
    const mo = moon();
    const sun = dy.sunrise ? `🌅 ${clock(dy.sunrise[0])} · 🌇 ${clock(dy.sunset[0])} · ` : "";
    return `${sun}${mo.icon} ${mo.name}`;
  };

  const forecastUrl = (w) => `https://forecast.weather.gov/MapClick.php?lat=${w.lat}&lon=${w.lon}`;

  // Location for the home weather: GPS if the user turned it on with 📍, otherwise a guess from the IP address
  const gpsLoc = () => cacheGet("gpsLoc");
  async function placeName(lat, lon) {
    try {
      const j = await getJSON(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
      return j.city || j.locality || j.principalSubdivision || "My location";
    } catch { return "My location"; }
  }
  function useGps() {
    const btn = $("#wxLoc");
    if (gpsLoc()) {
      // Already on: tapping again switches back to the IP-based guess
      store.set("gpsLoc", "");
      btn.classList.remove("on");
      homeWeather();
      return;
    }
    if (!navigator.geolocation) return;
    btn.textContent = "⏳";
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = +pos.coords.latitude.toFixed(3), lon = +pos.coords.longitude.toFixed(3);
      cacheSet("gpsLoc", { name: await placeName(lat, lon), lat, lon, gps: true });
      btn.textContent = "📍";
      homeWeather();
    }, () => {
      btn.textContent = "📍";
      alert("Location is off for this site. On iPhone: Settings > Privacy & Security > Location Services > Safari Websites > While Using.");
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 30 * 60e3 });
  }
  $("#wxLoc").addEventListener("click", useGps);

  // Local time and UTC, updated every second
  function tickClocks() {
    const now = new Date();
    const two = (n) => String(n).padStart(2, "0");
    const h = now.getHours();
    $("#clkLocal").textContent = `${h % 12 || 12}:${two(now.getMinutes())}:${two(now.getSeconds())} ${h < 12 ? "AM" : "PM"}`;
    const zone = (now.toLocaleTimeString("en-US", { timeZoneName: "short" }).split(" ").pop()) || "";
    $("#clkLocalSub").textContent = now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }) + " · " + zone;
    $("#clkUtc").textContent = `${two(now.getUTCHours())}:${two(now.getUTCMinutes())}:${two(now.getUTCSeconds())}Z`;
    $("#clkUtcSub").textContent = now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" }) + " · Zulu";
  }
  tickClocks();
  setInterval(tickClocks, 1000);

  async function homeWeather() {
    const row = $("#wxRow"), bar = $("#wxBar"), btn = $("#wxLoc");
    let loc = gpsLoc();
    if (loc && navigator.geolocation) {
      // Refresh the GPS fix quietly when the app opens (no prompt once allowed)
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = +pos.coords.latitude.toFixed(3), lon = +pos.coords.longitude.toFixed(3);
        if (Math.abs(lat - loc.lat) + Math.abs(lon - loc.lon) > 0.05) {
          placeName(lat, lon).then((name) => { cacheSet("gpsLoc", { name, lat, lon, gps: true }); homeWeather(); });
        }
      }, () => {}, { timeout: 10000, maximumAge: 30 * 60e3 });
    }
    loc = loc || (await ipLocation()) || { name: "San Diego", lat: 32.7157, lon: -117.1611 };
    btn.classList.toggle("on", !!loc.gps);
    btn.title = loc.gps ? "Using your GPS location. Tap to switch back to automatic." : "Location is a guess from your internet connection. Tap to use GPS.";
    try {
      const d = await getWeather(loc.lat, loc.lon);
      const c = d.current, dy = d.daily;
      const [ic, txt] = wxIcon(c.weather_code, c.is_day);
      bar.href = forecastUrl(loc);
      bar.innerHTML = `<span class="wx-ic">${ic}</span><b class="wx-t">${deg(c.temperature_2m)}F <small class="wx-c">${degC(c.temperature_2m)}C</small></b>
        <span class="wx-txt"><b>${loc.gps ? "📍 " : "≈ "}${esc(loc.name)}</b> · ${esc(txt)}<small>H ${deg(dy.temperature_2m_max[0])}/${degC(dy.temperature_2m_max[0])} L ${deg(dy.temperature_2m_min[0])}/${degC(dy.temperature_2m_min[0])} · 💨 ${Math.round(c.wind_speed_10m)} mph${d.stale ? " · saved" : ""}</small><small>${sunMoonLine(dy)}</small></span>
        <span class="go">›</span>`;
      bar.setAttribute("aria-label", `Weather in ${loc.name}: ${Math.round(c.temperature_2m)} degrees, ${txt}. Open forecast`);
      row.hidden = false;
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
          <b>${deg(dy.temperature_2m_max[i])}<span class="wx-c">/${degC(dy.temperature_2m_max[i])}</span></b><small>${deg(dy.temperature_2m_min[i])}/${degC(dy.temperature_2m_min[i])}</small>${rain ? `<small>💧${rain}%</small>` : ""}</div>`;
      }).join("");
      el.innerHTML = `<a class="wx-now" href="${forecastUrl(w)}" target="_blank" rel="noopener">
          <span class="wx-big">${ic}</span>
          <div><div class="wx-temp">${deg(c.temperature_2m)}F <small class="wx-c">${degC(c.temperature_2m)}C</small> <span>${esc(w.name)} · ${esc(txt)}</span></div>
          <small>Feels ${degFC(c.apparent_temperature)} · 💧 ${c.relative_humidity_2m}% · 💨 ${Math.round(c.wind_speed_10m)} mph${uv}${d.stale ? " · saved copy" : ""}</small></div>
        </a>${(() => {
          const mo = moon();
          const sun = dy.sunrise ? `<div class="wx-chip"><span>🌅</span><b>${clock(dy.sunrise[0])}</b><small>Sunrise</small></div>
            <div class="wx-chip"><span>🌇</span><b>${clock(dy.sunset[0])}</b><small>Sunset</small></div>` : "";
          return `<div class="wx-sky">${sun}<div class="wx-chip"><span>${mo.icon}</span><b>${mo.name}</b><small>${mo.lit}% lit</small></div></div>`;
        })()}<div class="wx-days">${days}</div>`;
    } catch {
      const el = panel();
      if (el) el.innerHTML = `<p class="empty">Live weather isn't available right now. Use the forecast links below.</p>`;
    }
  }

  // Upcoming events: past ones drop off automatically
  const lastSaturday = (y, m) => { const d = new Date(y, m + 1, 0); d.setDate(d.getDate() - ((d.getDay() + 1) % 7)); return d; };
  const eventRange = (ev, today) => {
    if (ev.recur === "last-saturday") {
      let d = lastSaturday(today.getFullYear(), today.getMonth());
      if (d < today) d = lastSaturday(today.getFullYear(), today.getMonth() + 1);
      return [d, d];
    }
    return [new Date(ev.date + "T00:00"), new Date((ev.end || ev.date) + "T00:00")];
  };
  function eventsView(h) {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const day = 864e5;
    const fmt = (d) => d.toLocaleDateString(undefined, { month: "short", day: "numeric", ...(d.getFullYear() !== today.getFullYear() ? { year: "numeric" } : {}) });
    const items = h.events
      .map((ev) => ({ ev, r: eventRange(ev, today) }))
      .filter((x) => x.r[1] >= today)
      .sort((a, b) => a.r[0] - b.r[0]);
    if (!items.length) return "";
    const when = ([start, end]) => {
      const days = Math.round((start - today) / day);
      if (days <= 0) return "Happening now";
      if (days === 1) return "Tomorrow";
      if (days < 14) return `In ${days} days`;
      if (days < 60) return `In ${Math.round(days / 7)} weeks`;
      return `In ${Math.round(days / 30)} months`;
    };
    return `<div class="section-title"><h2>📅 Coming up</h2><span>${items.length} events</span></div>
      <div class="events">${items.map(({ ev, r }) => `
        <a class="card event" href="${esc(ev.url)}" target="_blank" rel="noopener">
          <div class="ev-date"><b>${r[0].toLocaleDateString(undefined, { month: "short" })}</b><span>${r[0].getDate()}</span></div>
          <div class="body">
            <div class="src">${when(r)} · ${fmt(r[0])}${+r[1] !== +r[0] ? " to " + fmt(r[1]) : ""}${ev.recur ? " (monthly)" : ""}</div>
            <h3>${esc(ev.name)}</h3>
            <p>📍 ${esc(ev.place)}<br>${esc(ev.desc)}</p>
          </div>
          <span class="go">›</span>
        </a>`).join("")}</div>
      <div class="section-title"><h2>${h.icon} Calendars and links</h2></div>`;
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
    if (h.events && tab === "podcasts") {
      html = eventsView(h) + html.replace(/^\s*<div class="section-title">.*?<\/div>/s, "");
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

  // Voice control: tap the mic and say a section, e.g. "ham radio", "San Diego weather" or "comedy YouTube".
  const ALIASES = {
    ham: ["ham", "amateur radio"], esp32: ["esp 32", "esp32", "esp"], garden: ["garden", "gardening"],
    computers: ["computer"], ai: ["artificial intelligence", "a i"], drones: ["drone", "drones"],
    food: ["cooking", "recipes"], printing: ["3d", "3 d", "three d", "printing"], bambu: ["bambu", "bamboo"],
    travel: ["travel", "trips", "trip"], sandiego: ["san diego"], tempe: ["tempe", "arizona"],
    flying: ["flying", "aviation", "airport", "pilot"], fitness: ["fitness", "gym"],
    comedy: ["comedy", "funny", "jokes"], meditation: ["meditation", "meditate", "relax"],
    money: ["money", "save money", "saving", "savings", "wallet"], worldnews: ["world news", "nachrichten"],
    sports: ["sport", "sports"],
    "ham-events": ["hamfest", "hamfests", "convention", "conventions"], "fit-music": ["workout music", "music"],
    "fit-24h": ["24 hour", "twenty four hour"], "fit-run": ["running", "run"], "fit-lift": ["lifting", "weights"],
    "com-live": ["live comedy", "comedy shows"], "med-bowls": ["singing bowls", "bowls"], "med-binaural": ["binaural"],
    "fly-atis": ["atis"], "fly-events": ["air show", "airshow", "air shows", "airshows", "flying events"], "sd-snorkel": ["snorkel", "snorkeling"],
    "sd-beer": ["beer", "brewery"], "tp-beer": ["beer", "brewery"], "sd-mtb": ["mtb", "mountain bike"], "tp-mtb": ["mtb", "mountain bike"],
    "save-tax": ["tax", "taxes", "tax savings", "tax saving", "irs", "tax refund"], "save-sites": ["nerdwallet", "nerd wallet", "wallet nerd", "wallethub", "wallet hub", "money sites", "bankrate"], "wn-de": ["germany", "german"], "sp-de": ["bundesliga", "germany", "german"]
  };
  const TABS = { podcasts: ["podcast", "podcasts", "guides", "playlists"], youtube: ["youtube", "video", "videos"], news: ["news", "headlines"] };
  const norm = (t) => " " + String(t).toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9äöüß]+/g, " ").trim() + " ";
  const has = (text, phrase) => text.includes(norm(phrase));
  const best = (text, items) => {
    let top = null;
    for (const it of items) for (const ph of it.phrases) {
      if (has(text, ph) && (!top || ph.length > top.len)) top = { it, len: ph.length };
    }
    return top && top.it;
  };
  const phrasesOf = (x) => [x.name, ...(ALIASES[x.id] || [])];

  function voiceCommand(said) {
    const text = norm(said);
    if (has(text, "dark mode") || has(text, "light mode")) {
      root.dataset.theme = has(text, "dark mode") ? "dark" : "light";
      store.set("theme", root.dataset.theme); syncThemeBtn();
      return "Switched to " + root.dataset.theme + " mode";
    }
    const tabWord = Object.keys(TABS).find((k) => TABS[k].some((w) => has(text, w)));
    const hob = best(text, HOBBIES.map((h) => ({ h, phrases: phrasesOf(h) })));
    let parent = hob && hob.h;
    let sub = null;
    const subsOf = (h) => (h.subs || []).map((x) => ({ h, x, phrases: phrasesOf(x) }));
    if (parent) {
      sub = best(text, subsOf(parent));
    } else {
      // No section named: try the open section's categories, then every category.
      const cur = HOBBIES.find((x) => x.id === hobbyId);
      sub = best(text, subsOf(cur)) || best(text, HOBBIES.flatMap(subsOf));
      if (sub) parent = sub.h;
    }
    // "news" alone means the News tab, not a category called News
    if (sub && !hob && tabWord === "news" && norm(sub.x.name) === " news ") sub = null, parent = null;
    if (!parent && !tabWord) return null;
    if (parent) {
      if (parent.id !== hobbyId && parent.defaultTab) tab = parent.defaultTab;
      else if (parent.id !== hobbyId || tab === "history") tab = "podcasts";
      hobbyId = parent.id;
      if (sub) subId = sub.x.id;
      else if (parent.subs && !parent.subs.some((x) => x.id === subId)) subId = parent.subs[0].id;
    }
    if (tabWord) tab = tabWord;
    render();
    $("#content").scrollIntoView({ behavior: "smooth", block: "start" });
    const p = HOBBIES.find((x) => x.id === hobbyId);
    const sx = p.subs && p.subs.find((x) => x.id === subId);
    const tabName = tabWord || tab !== "podcasts" ? { podcasts: (sx || p).labels ? (sx || p).labels.podcasts : "podcasts", youtube: "YouTube", news: "news" }[tab] : "";
    const parts = [p.name, sx && sx.name, tabName].filter(Boolean);
    return parts.filter((x, i) => !parts.slice(0, i).some((y) => y.toLowerCase() === x.toLowerCase())).join(", ");
  }

  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = $("#micBtn");
  const voicePanel = $("#voicePanel");
  let rec = null, hideTimer = 0;
  const showVoice = (html, ms) => {
    clearTimeout(hideTimer);
    voicePanel.innerHTML = html;
    voicePanel.hidden = false;
    if (ms) hideTimer = setTimeout(() => { voicePanel.hidden = true; }, ms);
  };
  const say = (t) => {
    try { if ("speechSynthesis" in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = "en-US"; speechSynthesis.speak(u); } } catch {}
  };
  const HINT = `<small>Try “Ham Radio”, “San Diego weather”, “Comedy YouTube”, “World News Germany” or “dark mode”.</small>`;
  micBtn.addEventListener("click", () => {
    if (rec) { rec.abort(); return; }
    if (!Rec) {
      showVoice(`<b>Voice control isn't available in this browser.</b><small>It works in Safari on iPhone and in Chrome. Firefox doesn't support it yet.</small>`, 7000);
      return;
    }
    rec = new Rec();
    rec.lang = "en-US";
    rec.interimResults = true;
    rec.maxAlternatives = 3;
    let heard = false;
    micBtn.classList.add("on");
    showVoice(`<b>Listening…</b>${HINT}`);
    rec.onresult = (e) => {
      const r = e.results[e.results.length - 1];
      if (!r.isFinal) { showVoice(`<b>“${esc(r[0].transcript)}”</b>${HINT}`); return; }
      heard = true;
      let done = null, said = r[0].transcript;
      for (let i = 0; i < r.length && !done; i++) { done = voiceCommand(r[i].transcript); if (done) said = r[i].transcript; }
      if (done) { showVoice(`<b>✅ ${esc(done)}</b><small>Heard “${esc(said)}”</small>`, 3500); say(done); }
      else { showVoice(`<b>Sorry, I didn't catch a section in “${esc(said)}”.</b>${HINT}`, 6000); say("Sorry, try again"); }
    };
    rec.onerror = (e) => {
      heard = true;
      const msg = {
        "not-allowed": "Microphone access is blocked. Allow the microphone for this site in Settings, or open the page in Safari.",
        "service-not-allowed": "Speech recognition is off. On iPhone, turn on Siri or Dictation in Settings, or open the page in Safari instead of the home-screen app.",
        "no-speech": "I didn't hear anything. Tap the mic and try again.",
        "network": "Voice control needs an internet connection."
      }[e.error];
      if (e.error === "aborted") voicePanel.hidden = true;
      else showVoice(`<b>${esc(msg || "Voice control stopped (" + e.error + ").")}</b>`, 7000);
    };
    rec.onend = () => {
      micBtn.classList.remove("on");
      rec = null;
      if (!heard) showVoice(`<b>I didn't hear anything. Tap the mic and try again.</b>`, 4000);
    };
    try { rec.start(); } catch { micBtn.classList.remove("on"); rec = null; }
  });
  voicePanel.addEventListener("click", () => { voicePanel.hidden = true; });

  render();
  homeWeather();

  // Headlines: load now, then re-check every 15 minutes while the page is open
  // and whenever the app comes back to the foreground.
  let newsLoadedAt = 0;
  function loadNews() {
    newsLoadedAt = Date.now();
    return fetch("news.json", { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .then((data) => {
        if (!data && news) return; // keep what we have when offline
        const changed = !news || !data || data.updated !== news.updated;
        news = data || {};
        if (news.updated) $("#updated").textContent = "Headlines updated " + new Date(news.updated).toLocaleString();
        if (changed && tab === "news") render();
      });
  }
  loadNews();
  setInterval(() => { if (!document.hidden) loadNews(); }, 15 * 60e3);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && Date.now() - newsLoadedAt > 5 * 60e3) loadNews();
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
