import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  obj: { a: '1' },
  value: false,
  init() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', Ember.A());
    }
  },
  didInsertElement() {
    this._super(...arguments);
    Ember.assert('必须传递有效对象', this.get('obj'));
    Ember.cacheFor(this.get('obj'), 'a');
    this.deepcopy();
    Ember.run.next(() => {
      console.log('我是next');
    }, 100);
    Ember.run.later(() => {
      console.log('我是later');
    }, 100);
  },
  deepcopy() {
    var array = [1, 2, 3];
    var newarray = Ember.copy(array, true);
    Ember.debug('I\'m a debug notice!');
    newarray.push(4);
    let person = this.get('obj');
    Ember.getWithDefault(person, 'a', 1);
  }
});
