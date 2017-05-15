import Ember from 'ember';

export default Ember.Controller.extend({
  value: false,
  actions: {
    togglePropertyname() {
      this.toggleProperty('value');
    }
  }
});
