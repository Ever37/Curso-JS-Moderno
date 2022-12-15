const nombreCache = 'apv-v3'; // Nombre del cache...

const archivos = [
  '/',
  '/index.html',
  '/error.html',
  '/css/bootstrap.css',
  '/css/styles.css',
  '/js/app.js',
  '/js/apv.js'
];

// Instalar el service Worker, no se puede utilizar window, por lo tanto se utiliza self
self.addEventListener('install', e => {
  console.log('Instalado el Service Worker');
  e.waitUntil(
    // Buen lugar para cachear - 
    caches.open(nombreCache)
      .then(cache => { // Esta función es asincrona...
        console.log('cacheando...');
        cache.addAll(archivos);
      })
  );
  // Revisar en App (Chrome) en Firefox en Almacenamiento
});

// Activar el Service worker
self.addEventListener('activate', e => {
  console.log('Service Worker Activado');
  // Actualizar la PWA //
  e.waitUntil(
    caches.keys()
      .then(keys => {
        return Promise.all(keys
          .filter(key => key !== nombreCache)
          .map(key => caches.delete(key)) // borrar los demas
        )
      })
  )
});

self.addEventListener('fetch', e => {

  e.respondWith(
    caches.match(e.request)
      .then(respuestaCache => {
        return respuestaCache || fetch(e.request);
      })
      .catch(() => caches.match('/error.html'))
  );

})