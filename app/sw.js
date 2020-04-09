const cacheResources = [
  '/',
  'index.html',
  'index.js',
  'styles',
  'styles/index.styles.css',
  'styles/imports',
  'styles/imports/defaults.styles.css',
  'styles/imports/footer.styles.css',
  'styles/imports/header.styles.css',
  'styles/imports/section.styles.css',
  'assets',
  'assets/2.jpg',
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