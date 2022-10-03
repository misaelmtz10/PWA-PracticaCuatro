self.addEventListener('install',(event) =>{
    console.log('SW: instalado');
    let arrayCaches = []
    const respCache = caches.open('cache-v1').then((cache)=>{
        return cache.addAll([
            './',
            './index.html',
            './js/app.js',
            './js/index.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        ])
    })

    const respFetch = caches.open('cache-v2').then((cache)=>{
        return cache.add('https://reqres.in/api/users?page=2')
    })

    arrayCaches[0] = respCache
    arrayCaches[1] = respFetch
    event.waitUntil(arrayCaches)
})

//only cache
self.addEventListener('fetch', (event)=>{
    const respCache = caches.match(event.request)
    event.respondWith(respCache)
})
 
// let create = async (event) => {
//     let data = {
//         name: '',
//         job: ''
//     }
//     event.preventDefault()
//     let url = "https://reqres.in/api/users"
//     data.name = document.getElementById('firstIn').value
//     data.job = document.getElementById('lastIn').value

//     try {
//         const request = await fetch(url, {
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify(data)
//         })
//         const response = await request.json()
//         alert('success: '+ JSON.stringify(response));
//     } catch (error) {
//         alert(error);
//     }
// }

