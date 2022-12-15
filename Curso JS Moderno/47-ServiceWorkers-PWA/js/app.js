// https://gist.github.com/codigoconjuan/72f048d5a2b4d70bb6b720bc1bf15a9c

// Requisitos: 1. manifest 2. localhost o https 3. Tener registrado el eventListener de fetch
// El navegador soporta service worker?
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(registrado => console.log('Se instalo correctamente...', registrado))
    .catch(error => console.log('Falló la instalación...', error));
} else {
  console.log('Service Worker no soportados');
}