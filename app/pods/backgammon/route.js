import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      'body': 'body',
      'title': 'title'
    }, {
      'body': 'body',
      'title': 'title'
    }, {
      'body': 'body',
      'title': 'title'
    }];
  }
});
