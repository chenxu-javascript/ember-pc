import Component from '@ember/component';
import { Promise as EmberPromise } from 'rsvp';
import $ from 'jquery';
export default Component.extend({
  result: null,
  isFindingStores: false, // ++
  getTeams() {
    return new EmberPromise(function(resolve) {
       $.getJSON('http://boss.test.zbjdev.com/team/getallteamv4', { isAjax: 1, reqtoken: 1 }).then(function(data) {
        resolve(data.data);
      });
    });
  },
  actions: {
    findStores() {
      if (this.isFindingStores)  return;// ++
      this.set('result', null);
      this.set('isFindingStores', true); // ++
      let data = this.getTeams();
      if (data.state) {
        this.set('result', data.data);
        this.set('isFindingStores', false); // ++
      }
    },
  },
});
