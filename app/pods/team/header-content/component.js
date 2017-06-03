import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  // body
  classNames: 'big-area',
  @computed('service_center_items')
  isChild() {
    var items = this.get('service_center_items') || [];
    if (!(items && items.length)) {
      this.set('singleItem', [{
        team_id: this.get('service_center_id'),
        team_name: this.get('service_center_name'),
        group_type: this.get('group_type'),
        group_id: this.get('group_id'),
        is_special: this.get('is_special'),
        leader: {
          name: this.get('service_center_mgr')
        }
      }]);
      return true;
    }
    return false;
  },

  @computed('isChild')
  centerItems() {
    if (this.get('isChild')) {
      return this.get('singleItem');
    } else {
      return this.get('service_center_items');
    }
  },

  didRender() {
    this._super(...arguments);
    this.$().addClass('s-flex-' + (this.get('service_center_items.length') || 1));
  }
});
