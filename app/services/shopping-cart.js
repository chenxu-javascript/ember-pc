import Ember from 'ember';

export default Ember.Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  getNowFormatDate() {
    var date = new Date();
    var seperator1 = '-';
    var seperator2 = ':';
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var currentdate = date.getFullYear() + seperator1 + this.addzero(month) + seperator1 + this.addzero(strDate) +
      ' ' + this.addzero(date.getHours()) + seperator2 + this.addzero(date.getMinutes()) +
      seperator2 + this.addzero(date.getSeconds());
    return currentdate;
  },

  addzero(num) {
    if (num >= 1 && num <= 9) {
      num = '0' + num;
    }
    return num;
  },

  add(item) {
    this.get('items').pushObject(item);
    localStorage.setItem('count', this.getNowFormatDate());
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  }
});
