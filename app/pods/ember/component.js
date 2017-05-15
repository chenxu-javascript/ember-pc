import Ember from 'ember';
export default Ember.Component.extend({
  // body
  value: false,
  actions: {
    togglePropertyname() {
      this.toggleProperty('value');
    }
  }
});
