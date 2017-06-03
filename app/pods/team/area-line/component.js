import Ember from 'ember';

export default Ember.Component.extend({
  data: '',
  didInsertElement() {
    let data = this.get('data');
  }
});
