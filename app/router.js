import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('yield');
  this.route('powerselect');
  this.route('injectsevers');
  this.route('select');
  this.route('team');
});

export default Router;
