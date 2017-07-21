import Ember from 'ember';

export default Ember.Controller.extend({
  // body
//  shoppingCart: Ember.inject.service(),
  shoppingCart: Ember.computed(function() {
    return Ember.getOwner(this).lookup('service:shopping-cart');
  }),
  actions: {
    remove(item) {
      this.get('shoppingCart').remove(item);
    },
    add() {
      this.get('shoppingCart').add({ name: 1 });
    }
  }
});
