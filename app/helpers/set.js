import Ember from 'ember';

export default Ember.Helper.helper(function([target, property, val]) {
  Ember.set(target, property, val);
});
