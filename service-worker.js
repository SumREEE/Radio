const CACHE_NAME = "home-cache-v1";
const urlsToCache = [
    "home.html",
    "syle-home.css",
    "img/home.png",
    "img/text-home2.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});