import Component from '@ember/component';

export default Component.extend({
  actions: {
    add() {
    //  console.log(this.attrs);
      this.attrs.onadd();
    }
  }
});
