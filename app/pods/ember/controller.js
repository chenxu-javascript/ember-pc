import Controller from '@ember/controller';

export default Controller.extend({
  value: false,
  actions: {
    togglePropertyname() {
      this.toggleProperty('value');
    }
  }
});
