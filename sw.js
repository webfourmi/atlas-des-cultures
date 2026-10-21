/* Atlas des cultures - incrémenter CACHE_VERSION à chaque publication */
'use strict';
const CACHE_VERSION = 'atlas-cultures-v5.1.0';
const CORE = ['./','./index.html','./recipes.js','./notebook.js','./notebook.css','./kitchen.js','./kitchen.css', './recipes/miso.webp', './recipes/miso.pdf', './recipes/kimchi.webp', './recipes/kimchi.pdf', './recipes/cafe-turc.webp', './recipes/cafe-turc.pdf', './recipes/tortillas.webp', './recipes/tortillas.pdf','./manifest.webmanifest','./version.json','./travel-data.js','./journeys.js','./travel.js','./travel.css','./india-adventure.js','./india-adventure.css','./world-adventure-data.js','./world-adventure.js','./world-adventure.css','./batik-workshop.js','./batik-workshop.css','./travel/adventures/ART-RENCONTRES.md','./travel/adventures/ART-ATELIERS.md','./travel/adventures/SOURCES.md','./travel/adventures/art/japon-rencontre.webp','./travel/adventures/art/japon-atelier.webp','./travel/adventures/art/coree-rencontre.webp','./travel/adventures/art/coree-atelier.webp','./travel/adventures/art/vietnam-rencontre.webp','./travel/adventures/art/vietnam-atelier.webp','./travel/adventures/art/indonesie-rencontre.webp','./travel/adventures/art/indonesie-atelier.webp','./travel/adventures/art/vanuatu-rencontre.webp','./travel/adventures/art/vanuatu-atelier.webp','./travel/adventures/art/turquie-rencontre.webp','./travel/adventures/art/turquie-atelier.webp','./travel/adventures/art/georgie-rencontre.webp','./travel/adventures/art/georgie-atelier.webp','./travel/adventures/art/maroc-rencontre.webp','./travel/adventures/art/maroc-atelier.webp','./travel/adventures/art/kenya-rencontre.webp','./travel/adventures/art/kenya-atelier.webp','./travel/adventures/art/mexique-rencontre.webp','./travel/adventures/art/mexique-atelier.webp','./travel/adventures/art/bresil-rencontre.webp','./travel/adventures/art/bresil-atelier.webp','./travel/adventures/art/perou-rencontre.webp','./travel/adventures/art/perou-atelier.webp','./travel/world.svg','./travel/CREDITS.md','./travel/photos.json','./travel/berimbau-angola.mp3','./travel/berimbau-iuna.mp3','./travel/japon.webp','./travel/coree.webp','./travel/vietnam.webp','./travel/indonesie.webp','./travel/inde.webp','./travel/inde/ecole.webp','./travel/inde/accueil.webp','./travel/inde/ravi.webp','./travel/inde/livre.webp','./travel/inde/documents.webp','./travel/inde/exposition.webp','./travel/inde/visite.webp','./travel/inde/souffle.webp','./travel/inde/ILLUSTRATIONS.md','./travel/vanuatu.webp','./travel/turquie.webp','./travel/georgie.webp','./travel/maroc.webp','./travel/kenya.webp','./travel/mexique.webp','./travel/bresil.webp','./travel/perou.webp','./icons/atlas-icon.svg','./icons/atlas-192.png','./icons/atlas-512.png','./icons/atlas-maskable-512.png'];
self.addEventListener('install', event => {
  // Pas de skipWaiting automatique : l'utilisateur accepte sa mise à jour.
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(CORE)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const all = await caches.keys();
    await Promise.all(all.filter(key=>key.startsWith('atlas-cultures-') && key!==CACHE_VERSION).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if(event.data?.type==='SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return; // UNESCO etc. only online
  if(url.pathname.endsWith('/version.json')){
    event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match('./version.json')));
    return;
  }
  if(req.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE_VERSION);
      return await cache.match('./index.html') || fetch(req);
    })());
    return;
  }
  event.respondWith((async()=>{
    const hit=await caches.match(req);
    if(hit)return hit;
    try{ return await fetch(req); } catch{ return new Response('Hors connexion',{status:503}); }
  })());
});
self.addEventListener('notificationclick', event=>{
  event.notification.close();
  event.waitUntil((async()=>{
    const openClients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    if(openClients.length){await openClients[0].focus();return;}
    await self.clients.openWindow('./');
  })());
});

