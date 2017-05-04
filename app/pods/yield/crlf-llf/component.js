import Ember from 'ember';
const { run: { later }} = Ember;

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    let myDate = new Date();
    let hour = myDate.getHours();
    let getMinutes = myDate.getMinutes();
    let getSeconds = myDate.getSeconds();
    this.set('seconds', getSeconds);
    this.set('minutes', getMinutes);
    this.set('hour', hour);
    this.times();
  },
  times() {
    setInterval(() => {
      let myDate = new Date();
      let hour = myDate.getHours();
      let getMinutes = myDate.getMinutes();
      let getSeconds = myDate.getSeconds();
      this.set('seconds', getSeconds);
      this.set('minutes', getMinutes);
      this.set('hour', hour);
    }, 1000);
  }
});
