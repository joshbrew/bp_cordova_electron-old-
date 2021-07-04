## Brains at Play distribution via Cordova+Electron 

With an elevated command prompt:
* `npm i -g cordova`

To use cordova in VSCode, run Powershell as administrator then set:

`Set-ExecutionPolicy Unrestricted`

## How to Build Electron
https://medium.com/the-web-tub/electron-on-cordova-29ede5d6d789


cd to this repo, then:

`cordova platform add electron`

`cordova run electron --nobuild`


## Android Build
Use Nvidia CodeWorks to get the android SDK and environment variables set up for you, make sure the sdk base it installs is up to date as it might give you 4.0 by default. 

To build this project first run:

`cordova platform add android`

And to run automatically on a connected android device set up to be in developer mode:

`cordova run android`

Then, to build, run:

`cordova build android`

In platforms/android/app/build/outputs/apk/debug, you can find app-debug.apk.
Copy this to your phone and install it, trust everything. See Cordova spec for how to add certifications and stuff for the Play Store. iOS has a similar procedure.

### To set up an emulator
Install Android Studio, but use the custom install settings to select the existing C:/NVPACK/android-sdk-windows installation. Let it install the missing packages and an emulator system image for you, it should be just over a gigabyte on top of the ~gigabyte Android Studio installer. 

### With your Android emulator ready:
cd to this repo, then

`cordova run --emulator`

