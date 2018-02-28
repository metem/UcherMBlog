const APP_CACHE = 'cache';
const RUNTIME_CACHE = 'runtime';
const FILES_TO_CACHE = [
    './',
    '/service-worker.js',
    '/Home/Error',
    '/favicon.ico',
    '/dist/vendor.css',
    '/dist/vendor.js',
    '/dist/0.js',
    '/dist/main-client.js'
];

self.addEventListener('install',
    event => {
        event.waitUntil(
            caches.open(APP_CACHE)
            .then(cache => cache.addAll(FILES_TO_CACHE))
            .then(self.skipWaiting())
        );
    });

self.addEventListener('fetch',
    event => {
        if (event.request.url.startsWith(self.location.origin)) {
            event.respondWith(caches.match(event.request).then(response => {
                    if (response) {
                        return response;
                    }

                    return caches.open(RUNTIME_CACHE).then(cache => {
                        return fetch(event.request).then(response => {
                            return cache.put(event.request, response.clone()).then(() => { return response; });
                        });
                    });
                })
            );
        }
    });

self.addEventListener('activate',
    event => {
        event.waitUntil(
            caches.keys().then(names => {
                return names.filter(names => ![APP_CACHE, RUNTIME_CACHE].includes(names));
            }).then(toRemove => {
                return Promise.all(toRemove.map(toRemove => { return caches.delete(toRemove); }));
            }).then(() => self.clients.claim())
        );
    });
