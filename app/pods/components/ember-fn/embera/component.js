import { getWithDefault } from '@ember/object';
import { next, later } from '@ember/runloop';
import { cacheFor, copy } from '@ember/object/internals';
import { assert, debug } from '@ember/debug';
import { A } from '@ember/array';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  obj: { a: '1' },
  value: false,
  init() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', A());
    }
  },
  didInsertElement() {
    this._super(...arguments);
    assert('必须传递有效对象', this.get('obj'));
    cacheFor(this.get('obj'), 'a');
    this.deepcopy();
    next(() => {
    //  console.log('我是next');
    }, 100);
    later(() => {
    //  console.log('我是later');
    }, 100);
  },
  deepcopy() {
    var array = [1, 2, 3];
    var newarray = copy(array, true);
    debug('I\'m a debug notice!');
    newarray.push(4);
    let person = this.get('obj');
    getWithDefault(person, 'a', 1);
  }
});
