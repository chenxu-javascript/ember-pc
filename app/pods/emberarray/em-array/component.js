import Component from '@ember/component';
export default Component.extend({
  // body
  didInsertElement() {
    this._super(...arguments);
    this.pro();
    this.fndecrementProperty();
  },
  fndecrementProperty() {
    let a = [1, 2, 3];
    a.decrementProperty('lives');
  },
  pro() {

  }
});
