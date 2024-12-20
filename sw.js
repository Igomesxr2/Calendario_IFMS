let cacheName = "cache-calendario";
let filesToCache = ["/", "/index.html","/calendario.html","/permanencia.html","/css/calendarios.css","/css/permanencia.css","/css/index.css",  "/js/main.js", "/images/ifms.png"];

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* disponibilizando o conteudo quando estiver offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

