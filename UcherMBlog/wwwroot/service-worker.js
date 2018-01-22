let filesToCache = [
    '/',
    '/service-worker.js',
    '/Home/Error',
    '/favicon.ico',
    '/dist/vendor.css',
    '/dist/vendor.js',
    '/dist/main-client.js',
    '/assets/articles/articles.json',
    '/assets/articles/test-article/article.html',
    '/assets/articles/test-article/article.png'
];

self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open("cache").then(function (cache) {
            return cache.addAll(filesToCache);
        }).catch(function (err) {
           console.error(err);
        })
    );
});

self.addEventListener('fetch', function (evt) {
    evt.respondWith(
        fetch(evt.request).catch(function () {
            return caches.match(evt.request);
        })
    );
});