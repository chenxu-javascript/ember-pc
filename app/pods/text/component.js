import Component from '@ember/component';

export default Component.extend({
  // body
  init() {
    this._super(...arguments);
    console.log('Component', 1);
  },
  actions: {
    postmessage() {
      let params = {
        userId: 18,
        orderId: 188,
        totalAmount: 1888,
        productId: 187,
      };
      parent.postMessage(JSON.stringify(params), '*');
    }
  }
});
