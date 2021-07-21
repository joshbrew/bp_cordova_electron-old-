// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

require('dotenv').config()

let secure
if (process.env.SECURE == null) secure = true
else secure = process.env.SECURE === 'true'

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
      src: '/_dist_',
      public: {url: "/", static: true, resolve: false}
  },
  exclude: [
    '**/node_modules/**/*', 
    // '**/src/libraries/js/dist/brainsatplay.js'
  ],
  plugins: [
    '@snowpack/plugin-dotenv',
    'snowpack-plugin-glslify',
    ["@snowpack/plugin-optimize", {
        minifyJS: false,
        minifyCSS: true,
        minifyHTML: true,
        preloadModules: true,
        preloadCSS: true,
        target: 'es2015'
      }
    ],
  ],
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {
    port:1234,
    secure: secure,
    open: "chrome",
    output: 'stream'
  },
  buildOptions: {
    out: 'dist',
    clean: true,
    sourcemap: true,
    htmlFragments: true
},
alias: {
  //"src": "./src",
  /* ... */
},
}

//externalPackage: [...require('module').builtinModules.filter(m => m !== 'process')],
  