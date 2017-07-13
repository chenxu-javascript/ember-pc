import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['item-list'],
  selectedItem: {
    id: 14
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('items', this.get('items').map((item) => {
      if (item.id === this.get('selectedItem.id')) {
        item.isSelected = true;
      }
      return item;
    }));
  },

  didRender() {
    this._super(...arguments);
    debugger
    this.$('.item-list').scrollTop(this.$('.selected-item').position.top);
  }
});
