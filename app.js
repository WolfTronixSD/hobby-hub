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
    <button class="hobby" data-id="${h.id}" style="--c:${h.accent}">
      <span class="emoji">${h.icon}</span>
      <span><b>${esc(h.name)}</b><small>${esc(h.tagline)}</small></span>
    </button>`).join("");
  hobbyNav.addEventListener("click", (e) => {
    const b = e.target.closest(".hobby");
    if (b) { hobbyId = b.dataset.id; render(); }
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
      ${list}
      <div class="section-title"><h2>News sources</h2></div>
      <div class="sources">${h.newsSources.map((s) => `<a class="source" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join("")}</div>`;
  };

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
      subNav.style.setProperty("--cols", n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : 4);
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
    pod.innerHTML = guides ? `<span>📘</span>${esc(h.labels.podcasts)}` : "<span>🎧</span>Podcasts";

    let html;
    if (tab === "podcasts") {
      html = h.labels && h.labels.podcasts
        ? `<div class="section-title"><h2>${h.icon} Top ${h.podcasts.length} ${esc(h.name)} ${esc(h.labels.podcasts.toLowerCase())}</h2></div>
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
    $("#content").innerHTML = html;
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
  const shareText = () => "Check out Hobby Hub: podcasts, YouTube and news for my hobbies. " + shareLink();
  function updateShare() {
    const url = shareLink(), text = shareText();
    $("#shareUrl").value = url;
    $("#shareSms").href = "sms:?&body=" + encodeURIComponent(text);
    $("#shareWa").href = "https://wa.me/?text=" + encodeURIComponent(text);
    $("#shareMail").href = "mailto:?subject=" + encodeURIComponent("Hobby Hub") + "&body=" + encodeURIComponent(text);
  }
  $("#shareNative").hidden = !navigator.share;
  $("#shareBtn").addEventListener("click", () => { updateShare(); shareBackdrop.hidden = false; });
  $("#shareHere").addEventListener("change", updateShare);
  $("#shareClose").addEventListener("click", () => { shareBackdrop.hidden = true; });
  shareBackdrop.addEventListener("click", (e) => { if (e.target === shareBackdrop) shareBackdrop.hidden = true; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") shareBackdrop.hidden = true; });
  $("#shareNative").addEventListener("click", () => {
    navigator.share({ title: "Hobby Hub", text: "Podcasts, YouTube and news for my hobbies", url: shareLink() }).catch(() => {});
  });
  $("#shareCopy").addEventListener("click", () => {
    const btn = $("#shareCopy");
    const done = () => { btn.innerHTML = "<span>✅</span>Copied"; setTimeout(() => { btn.innerHTML = "<span>🔗</span>Copy link"; }, 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(shareLink()).then(done, () => { $("#shareUrl").select(); });
    else $("#shareUrl").select();
  });

  render();

  fetch("news.json", { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : {}))
    .catch(() => ({}))
    .then((data) => {
      news = data || {};
      if (news.updated) $("#updated").textContent = "Headlines updated " + new Date(news.updated).toLocaleString();
      if (tab === "news") render();
    });
})();
