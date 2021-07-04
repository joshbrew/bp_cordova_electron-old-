import 'regenerator-runtime/runtime'

if (process.env.NODE_ENV === 'development') {
    console.log('DEV MODE');
}

if (process.env.NODE_ENV === 'production') {    
    if(!navigator.serial)
        alert("navigator.serial not found! Enable #enable-experimental-web-platform-features in chrome://flags (search 'experimental')")

    // import * as serviceWorker from './service-worker';
    const serviceWorker = require('./service-worker');
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    serviceWorker.register();
}
