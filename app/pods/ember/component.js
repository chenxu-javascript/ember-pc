import Component from '@ember/component';
export default Component.extend({
  // body
  value: false,
  actions: {
    togglePropertyname() {
      this.toggleProperty('value');
    }
  }
});
