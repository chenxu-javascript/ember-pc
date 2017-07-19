import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    // The logger property is injected into all routes
    this.get('logger').log('Entered the index route!');
  },
  requestlist() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON('data/sojson.json').then(function(data) {
        resolve(data.data.teams);
      });
    });
  },
  requestlistone() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON('data/team.json').then(function(data) {
        resolve(data.data.teams);
      });
    });
  },
  async model() {
    let list = await this.requestlist();
    debugger
    return Ember.RSVP.hash({
      list: this.requestlist(),
      data: this.requestlistone()
    });
  }
});
