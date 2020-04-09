console.log('Application Started');


if ("serviceWorker" in navigator) {
  
  navigator.serviceWorker.register("sw.js").then((registration) => {
    console.log("Service Worker Registered \nScope", registration.scope);

    if (registration.active) {
      console.log('Activated');
      
    }
  }).catch((err) => {
    console.error(`OOPS ${err}`);
  })

} else {
  console.log('Please upgrade your browser to support the latest features');
} 