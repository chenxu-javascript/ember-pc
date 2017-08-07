import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  classNames: 'form-group',

  type: 'text',
  name: '',
  label: '',

  click() {
    this.get('click-count-change')(this.get('childClickCount') + 1);
  }
});
