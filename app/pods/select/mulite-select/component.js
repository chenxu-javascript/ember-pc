import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    add() {
    //  console.log(this.attrs);
      this.attrs.onadd();
    }
  }
});
