import Ember from 'ember';
const { run: { later }} = Ember;

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.gettimes();
    let time = setInterval(() => {
      this.gettimes();
    }, 1000);
    this.set('time', time);
  },
  gettimes() {
    let myDate = new Date();
    let hour = myDate.getHours();
    let getMinutes = myDate.getMinutes();
    let getSeconds = myDate.getSeconds();
    this.set('seconds', getSeconds);
    this.set('minutes', getMinutes);
    this.set('hour', hour);
  },
  willDestroyElement() {
    this._super(...arguments);
    let time = this.get('time');
    window.clearTimeout(time);
  }
});
