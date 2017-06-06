import Ember from 'ember';
import computed, { on } from 'ember-computed-decorators';

export default Ember.Controller.extend({
  @computed('model.list')
  modelline(model) {
    console.log(model);
    if (model.length > 0) {
      return model.splice(2);
    }
  }
});
