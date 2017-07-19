import Ember from 'ember';

export default Ember.Component.extend({
  // body
  classNames: 'main-container',
  didInsertElement() {
    this._super(...arguments);
    Ember.run.later(() => {
      $('.main-container').css({ 'min-height': $('body').height() - '50' });
    }, 400);
  },
  didRender() {
    console.log('render');
    $('.main-container').css({ 'min-height': $('body').height() - '50' });
  }
});
