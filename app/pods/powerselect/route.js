import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    // The logger property is injected into all routes
    this.get('logger').log('Entered the index routess!');
  },
  model() {
  }
});
