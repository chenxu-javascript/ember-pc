import Component from '@ember/component';
import $ from 'jquery';
import { Promise as EmberPromise } from 'rsvp';
import { task } from 'ember-concurrency';
export default Component.extend({
  result: null,
  getTeams() {
    return new EmberPromise(function() {
      return $.getJSON('http://boss.test.zbjdev.com/team/getallteamv4', { isAjax: 1, reqtoken: 1 });
    });
  },

  findStores: task(function * () {
    this.set('result', null);
    let data = yield $.getJSON('http://boss.test.zbjdev.com/team/getallteamv4', { isAjax: 1, reqtoken: 1 });
    if (data.state) {
      this.set('result', data.data);
    }
  }).drop(),
});
