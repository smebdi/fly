addEventListener('fetch', async function (event) {
  event.respondWith(await fetch("http://setcookies"))
})