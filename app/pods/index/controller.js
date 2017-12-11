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
      // * 是代表所有， 这个地方你判断一下； 因为现在你们还没切https。 对吧， 我们现在需要兼容http 和https， 不是测试不了
      // 你判断你的location
      // 如果是https && dev， 测试环境 https://bossfenxiao.test.zbjdev.com
      // 如果是http && dev， 测试环境 http://boss.fenxiao.test.zbjdev.com

      // 如果是https && online， 线上环境 https://bossfenxiao.zbj.com
      // 如果是http && online， 线上环境 http://boss.fenxiao.zbj.com
    }
  }
});
