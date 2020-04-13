console.log('Application Started');


if ("serviceWorker" in navigator) {

  let sw;

  navigator.serviceWorker.register("/sw.js").then((reg) => {
    console.log("Service Worker Registered \nScope", reg.scope);

    if (reg.installing) {
      sw = reg.installing;
    } else if (reg.waiting) {
      sw = reg.waiting;
    } else if (reg.active) {
      sw = reg.active;
    }

    if (sw) {
      sw.addEventListener('statechange', (e) => console.log(e.target.state));
    }


  }).catch((err) => {
    console.error(`OOPS ${err}`);
  })



} else {
  console.log('Please upgrade your browser to support the latest features');
} 