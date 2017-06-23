import Ember from 'ember';

export default Ember.Component.extend({
  cities: ['Barcelona', 'London', 'New York', 'Porto'],
  destination: 'London',
  classNames: 'w160 inlineblock',
  actions: {
    chooseDestination(city) {
      this.set('destination', city);
      // this.calculateRoute();
      // this.updatePrice();
    },
    changeaa() {
      let aa = this.get('isshow').aa;
      this.set('isshow.aa', aa+'1');
    },
  }
});
