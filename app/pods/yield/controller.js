import Ember from 'ember';

export default Ember.Controller.extend({
  // body
  totalClicks: 2,
  actions: {
    save() {
      this.get('im');
    }
  }
});
