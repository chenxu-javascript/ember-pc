import Component from '@ember/component';
import computed from 'ember-computed-decorators';
export default Component.extend({
  dataitem: {},
  singleItem: [],
  classNames: 'areaAndCenter',
  didInsertElement() {
    this._super(...arguments);
    console.log(this.get('dataitem'));
  },
  @computed('dataitem')
  isHasChild(dataitem={}) {
    let { group_id, group_type, team_id, team_name, leader, is_special, childrens } = dataitem;
    if (childrens && childrens.length) {
      return true;
    } else {
      this.set('singleItem', [{ team_id, team_name, group_type, group_id, is_special, leader }]);
      return false;
    }
  },
  @computed('isHasChild')
  teamItems(isHasChild) {
    return isHasChild ? this.get('dataitem.childrens') : this.get('singleItem');
  },

  didRender() {
    this._super(...arguments);
    let length = this.get('dataitem.childrens.length') || 1;
    this.$().addClass('s-flex-' + length);
    this.$('.service-item').width(length * 35);
  },
});
