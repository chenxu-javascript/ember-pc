import Route from '@ember/routing/route';
import { Promise as EmberPromise, hash } from 'rsvp';
export default Route.extend({
  getTeamV5() {
    return $.getJSON('http://boss.zbjdev.com/team/getallteamv5', { isAjax: 1, reqtoken: 1 }).then((o) => {
      if (o.state) {
        return o.data.teams;
      }
    });
  },
  requestlist() {
    return new EmberPromise(function(resolve) {
      $.getJSON('data/sojson.json').then(function(data) {
        resolve(data.data.teams);
      });
    });
  },
  model() {
    return hash({
      data: this.getTeamV5(),
      list: this.requestlist()
    });
  }
});
