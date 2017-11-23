import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  // body
//  shoppingCart: Ember.inject.service(),
  shoppingCart: computed(function() {
    return getOwner(this).lookup('service:shopping-cart');
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
