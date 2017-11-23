import { A } from '@ember/array';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],

  init() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', A());
    }
  //  console.log(this.get('content'));
  }
});
