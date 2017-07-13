import Ember from 'ember';

export default Ember.Route.extend({
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
  model() {
    return Ember.RSVP.hash({
      list: this.requestlist(),
  //    data: this.requestlistone()
    });
  }
});
