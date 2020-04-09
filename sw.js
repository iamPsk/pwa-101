const cacheResources = [
  '/',
  'app/index.html',
  'app/index.js',
  'app/styles',
  'app/styles/index.styles.css',
  'app/styles/imports',
  'app/styles/imports/defaults.styles.css',
  'app/styles/imports/footer.styles.css',
  'app/styles/imports/header.styles.css',
  'app/styles/imports/section.styles.css',
  'app/assets',
  'app/assets/2.jpg',
  'node_modules/@fortawesome/fontawesome-free/css/all.css'
]

self.addEventListener('statechange', function (event) {
  console.log('change detected');
  console.log(event.target.state);
})

self.addEventListener('install', function (event) {
  console.log('Service worker is installing');

  event.waitUntil(
    caches.open('pwa-101').then(function (cache) {
      return cache.addAll(cacheResources)
    })
  )
})

self.addEventListener('activate', (event) => {
  console.log("Service worker is activating");
  console.log(event.target.active ? "Is now Active" : 'Still Activating');
})

self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request)
))