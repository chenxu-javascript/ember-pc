import Component from '@ember/component';

export default Component.extend({
  cities: ['Barcelona', 'London', 'New York', 'Porto'],
  destination: 'London',
  classNames: 'w160 inlineblock',
  actions: {
    add() {
    //  console.log(this.attrs);
      this.attrs.onadd();
    }
  }
});
