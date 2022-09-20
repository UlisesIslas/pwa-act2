self.addEventListener('install', (event) => {
    console.log("SW: Install");
});

self.addEventListener('fetch', (event) => {
    /* if (event.request.url.includes('css')) {
        console.log(event.request.url);
        const res = new Response(`
        body {
            color:red;
            background-color: black;
        }`,{headers: {
            'Content-Type':'text/css'
        }});
        event.respondWith(res);
    }  */
    if (event.request.url.includes('jpg')) {
        event.respondWith(fetch('./img/gato.png'));
    }
});