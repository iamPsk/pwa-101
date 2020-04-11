const cacheResources = [
  '/',
  'index.html',
  'index.js',
  'styles',
  'manifest.json',
  'styles/index.styles.css',
  'styles/imports',
  'styles/imports/defaults.styles.css',
  'styles/imports/footer.styles.css',
  'styles/imports/header.styles.css',
  'styles/imports/section.styles.css',
  'assets',
  'assets/2.jpg',
  'assets/apple-icon-60x60.png',
  'assets/apple-icon-72x72.png',
  'assets/apple-icon-76x76.png',
  'assets/apple-icon-114x114.png',
  'assets/apple-icon-120x120.png',
  'assets/apple-icon-144x144.png',
  'assets/apple-icon-152x152.png',
  'assets/apple-icon-180x180.png',
  'assets/android-icon-192x192.png',
  'assets/favicon-32x32.png',
  'assets/favicon-96x96.png',
  'assets/favicon-16x16.png',
];

const appCache = 'pwa-101';

self.addEventListener('statechange', function (event) {
  console.log('change detected');
  console.log(event.target.state);
})

self.addEventListener('install', function (event) {
  console.log('Service worker is installing');
  event.waitUntil(
    caches.open(appCache).then(function (cache) {
      return cache.addAll(cacheResources)
    })
  )
})

self.addEventListener('activate', (event) => {
  console.log('Service worker is activating');
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then( response => {
      return response || fetch(e.request).then( res => {
        caches.open(appCache).then( cache => {
          cache.put(e.request, res)
        })
        return res.clone()
      })
    }).catch( err => console.error(err)) 
  );
})