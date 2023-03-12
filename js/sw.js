self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/js/funciones.js',
        '/css/estilos.css',
        '/icon/chevron-up-solid.png',
        '/img/separador.png',
        '/data.json',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });