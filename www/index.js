//import {settings} from './src/settings.js'

// import 'regenerator-runtime/runtime'

try {
    if(cordova) {
        /*
        * Licensed to the Apache Software Foundation (ASF) under one
        * or more contributor license agreements.  See the NOTICE file
        * distributed with this work for additional information
        * regarding copyright ownership.  The ASF licenses this file
        * to you under the Apache License, Version 2.0 (the
        * "License"); you may not use this file except in compliance
        * with the License.  You may obtain a copy of the License at
        *
        * http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing,
        * software distributed under the License is distributed on an
        * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        * KIND, either express or implied.  See the License for the
        * specific language governing permissions and limitations
        * under the License.
        */
    
        // Wait for the deviceready event before using any of Cordova's device APIs.
        // See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
    
        document.addEventListener('deviceready', onDeviceReady, false);
    
        function onDeviceReady() {
            // Cordova is now initialized. Have fun!
    
            console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
            document.getElementById('deviceready').classList.add('ready');
        }
    
    } 
} catch (er) {

    try {
        if(process.env.NODE_ENV) {
            if (process.env.NODE_ENV === 'development') {
                console.log('PWA DEV MODE');
            }
        
            if (process.env.NODE_ENV === 'production') {    
                if(!navigator.serial)
                    alert("navigator.serial not found! Enable #enable-experimental-web-platform-features in chrome://flags (search 'experimental')")
        
                // import * as serviceWorker from './service-worker';
                const serviceWorker = require('./service-worker.js');
                // If you want your app to work offline and load faster, you can change
                // unregister() to register() below. Note this comes with some pitfalls.
                serviceWorker.register();
            }
        }
     } catch (er) {

     }

}


