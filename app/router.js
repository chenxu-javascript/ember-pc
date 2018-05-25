import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('calendar');
  this.route('not-found', { path: '/*path' });
  this.route('concurrency');
  this.route('css');
  this.route('yield');
  this.route('powerselect');
  this.route('injectsevers');
  this.route('select');
  this.route('liquidfire');
  this.route('ember');
  this.route('team');
  this.route('img');
  this.route('backgammon');
  this.route('text', { path: '/text/:customer_id' });
  this.route('emberarray', { path: '/emarray' });
  this.route('emberfn', { path: '/emberfn' }, function() {
    this.route('embera', { path: '/embera' });
  });
});

export default Router;
