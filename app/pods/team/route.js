import Ember from 'ember';

export default Ember.Route.extend({
  requestlist() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON('data/sojson.json').then(function(data) {
        resolve(data.data.teams);
      });
    });
  },
  model() {
    let list = this.requestlist();
    return list;
  }
});
