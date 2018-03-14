import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { timeout } from 'ember-concurrency/utils';
import { bsPromise } from '../../../models/utils';
export default Component.extend({
  status: null,

  findStores: task(function * () {
    this.set('status', "Gimme one second...");
    yield bsPromise({}, 1000);
    this.set('status', "Gimme one more second...");
    yield timeout(1000);
    this.set('status', "OK, I'm done.");
  }),
  myTask: task(function * () {
    this.set('status', `Thinking...`);
    try {
      yield timeout(1000).then(() => {
        throw "Ahhhhh!!!!";
      });
      this.set('status', `This does not get used!`);
    } catch(e) {
      this.set('status', `Caught value: ${e}`);
    }
  }),

});
