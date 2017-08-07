import Ember from 'ember';

export default Ember.Controller.extend({
  changeset: {
    name: 'password'
  },
  actions: {
    btn() {
      console.log(this.get('changeset'));
    }
  }

});
