import Ember from 'ember';
const { run: { later }} = Ember;

export default Ember.Component.extend({
  didInsertElement() {
    later(() => {
    }, 200);
  }
});
