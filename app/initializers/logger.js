import Ember from 'ember';

export function initialize(application) {
  let Logger = Ember.Object.extend({
    log() {
    }
  });

  application.register('logger:main', Logger);
  application.inject('route', 'logger', 'logger:main');
}

export default {
  name: 'logger',
  initialize
};


// export function initialize(application) {
//   let Message = Ember.Object.extend({
//     text: ''
//   });
//
//   application.register('notification:message', Message, { singleton: false });
// }
//
// export default {
//   name: 'notification',
//   initialize: initialize
// };


// export function initialize(application) {
//   let logger = {
//     log(m) {
//       console.log(m);
//     }
//   };
//
//   application.register('logger:main', logger, { instantiate: false });
// }
//
// export default {
//   name: 'logger',
//   initialize: initialize
// };
