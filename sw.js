// Wolfie's Hobby Hub service worker: keeps the site usable with a weak signal.
// Pages and news.json: network first, fall back to the saved copy.
// Versioned files (?v=) and icons: saved copy first.
const CACHE = "hobby-hub-2.10.0";
const PRECACHE = ["./", "manifest.webmanifest", "logo.svg", "icons/icon-192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const networkFirst = async (req, key = req) => {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req, { cache: "no-cache" });
    if (res.ok) cache.put(key, res.clone());
    return res;
  } catch {
    return (await cache.match(key, { ignoreSearch: req.mode === "navigate" })) || Response.error();
  }
};

const cacheFirst = async (req) => {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) cache.put(req, res.clone());
  return res;
};

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (req.mode === "navigate") e.respondWith(networkFirst(req, "./"));
  else if (url.pathname.endsWith("/news.json")) e.respondWith(networkFirst(req));
  else e.respondWith(cacheFirst(req));
});
