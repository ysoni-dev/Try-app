const CACHE_NAME = "version-1" ;
const urlsToCache = [ 'index.html', 'offline.html'];

const self= this;
//install sw
self.addEventListener('install', (event) =>{
 event.waitUntil(
     caches.open(CACHE_NAME)
     .then((cache) =>{
         console.log('open cache');
         return cache.addAll(urlsToCache);

     })
 );
});

// listen sw
self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);
 event.respondWith(
     caches.match(event.request)
     .then((response) =>{
         return response || fetch(event.request)
         .catch(()=>
             caches.match('offline.html')
         )
     })
 )
});

//activate sw
self.addEventListener('activate', (event)=>{    
    const cacheWhitelist =[];
    cacheWhitelist.push(CACHE_NAME);

        event.waitUntil(
            caches.keys()
            .then((cacheNames)=> Promise.all(
                cacheNames.map((cacheNames)=>{
                    if(!cacheWhitelist.includes(cacheNames)){
                        return caches.delete(cacheNames);
                    }
                })
            ))
        )
});