import Component from '@ember/component';

export default Component.extend({
  result: null,
  actions: {
    findStores() {
      $.getJSON('http://boss.test.zbjdev.com/team/getallteamv4', { isAjax: 1, reqtoken: 1 }).then((o) => {
        if (o.state) {
          this.set('result', o.data);
        }
      });
    }
  },
});
