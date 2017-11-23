import $ from 'jquery';
import { Promise as EmberPromise, hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  activate() {
    // The logger property is injected into all routes
    this.get('logger').log('Entered the index route!');
  },
  requestlist() {
    return new EmberPromise(function(resolve) {
      $.getJSON('data/sojson.json').then(function(data) {
        resolve(data.data.teams);
      });
    });
  },
  requestlistone() {
    return new EmberPromise(function(resolve) {
      $.getJSON('data/team.json').then(function(data) {
        resolve(data.data.teams);
      });
    });
  },
  async model() {
    return hash({
      list: this.requestlist(),
      data: this.requestlistone()
    });
  }
});
