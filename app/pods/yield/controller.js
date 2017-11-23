import Controller from '@ember/controller';

export default Controller.extend({
  // body
  totalClicks: 2,
  actions: {
    save() {
      this.get('im');
    }
  }
});
