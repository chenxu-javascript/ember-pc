import Route from '@ember/routing/route';

export default Route.extend({
  activate() {
    // The logger property is injected into all routes
    this.get('logger').log('Entered the index routess!');
  },
  model() {
  }
});
