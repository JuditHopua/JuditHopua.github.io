self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/JuditHopua.github.io/',
        '/JuditHopua.github.io/index.html',
        '/JuditHopua.github.io/js/funciones.js',
        '/JuditHopua.github.io/css/estilos.css',
        '/JuditHopua.github.io/icon/chevron-up-solid.png',
        '/JuditHopua.github.io/img/separador.png',
        '/JuditHopua.github.io/data.json',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });