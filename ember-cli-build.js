/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      optional: ['es7.decorators']
    },
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/bootstrap/dist/css/bootstrap.min.css');
//  app.import('vendor/bootstrap/dist/js/bootstrap.min.js');
  app.import('vendor/bootstrap/js/tooltip.js');
  app.import('vendor/AdminLTE/css/AdminLTE.min.css');
  app.import('vendor/AdminLTE/css/skins/skin-red.css');
  app.import('vendor/AdminLTE/js/jquery.slimscroll.js');
  app.import('vendor/AdminLTE/js/app.js');
  app.import('vendor/lodash/lodash.min.js');
  return app.toTree();
};
