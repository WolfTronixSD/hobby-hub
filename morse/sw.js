// Dit Dah Dojo moved to /morse-trainer/. This worker removes itself and its cache.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith("ditdahdojo-")).map((k) => caches.delete(k))))
    .then(() => self.registration.unregister()));
});
