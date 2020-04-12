console.log('Application Started');


if ("serviceWorker" in navigator) {
  
  let sw;
  navigator.serviceWorker.register("/sw.js").then((registration) => {
    console.log("Service Worker Registered \nScope", registration.scope);
    if (registration.installing) {
      sw = registration.installing
    } 
    if (registration.active) {
      sw = registration.active
    } 
    console.log(sw.state);
    

  }).catch((err) => {
    console.error(`OOPS ${err}`);
  })
// 
  // sw.addEventListener('statechange', (evt) => console.log(evt.target.state))

} else {
  console.log('Please upgrade your browser to support the latest features');
} 