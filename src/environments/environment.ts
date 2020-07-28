// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDXn7VNwk2jW-Zv_lMrnN1Ge38x-OjT9Ng',
    authDomain: 'liberated-kind-full-site.firebaseapp.com',
    databaseURL: 'https://liberated-kind-full-site.firebaseio.com',
    projectId: 'liberated-kind-full-site',
    storageBucket: 'liberated-kind-full-site.appspot.com',
    messagingSenderId: '1075534086621',
    appId: '1:1075534086621:web:e1c9363bb28b8f505bf634',
    measurementId: 'G-VX17C2FDLR'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
