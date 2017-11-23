import Controller from '@ember/controller';
import computed from 'ember-computed-decorators';

export default Controller.extend({
  @computed('model.list')
  modelline(model) {
    if (model.length > 0) {
      return model.splice(2);
    }
  }
});
