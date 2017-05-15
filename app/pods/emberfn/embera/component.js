import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],

  init() {
    debugger
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', Ember.A());
    }
    console.log(this.get('content'));
  }
});
