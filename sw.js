const CACHE = "mynet-v1";
const ASSETS = ["./", "./index.html", "./firebase-config.js", "./manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  // Firebase и ImgBB — всегда из сети
  if (e.request.url.includes("firebase") || e.request.url.includes("imgbb") ||
      e.request.url.includes("gstatic") || e.request.url.includes("googleapis")) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match("./index.html")))
  );
});