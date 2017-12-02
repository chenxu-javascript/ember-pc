import Controller from '@ember/controller';

export default Controller.extend({
  // body
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
