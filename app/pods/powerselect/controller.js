import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  // body
  shoppingCart: service(),
  // shoppingCart: Ember.computed(function() {
  //   return Ember.getOwner(this).lookup('service:shopping-cart');
  // }),
  actions: {
    remove(item) {
      this.get('shoppingCart').remove(item);
    },
    add() {
      this.get('shoppingCart').add({ name: 1 });
    }
  }
});
