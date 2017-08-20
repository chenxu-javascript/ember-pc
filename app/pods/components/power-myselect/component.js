import Ember from 'ember';

export default Ember.Component.extend({
  // body
  options: [], //  初始数组
  value: '', // 默认选中值
  selectedKey: 'id', // key值
  selectedValue: 'name',
  destination: Ember.computed('value', {
    get() {
      let options = this.get('options');
      let selectedKey = this.get('selectedKey');
      let value = this.get('value');
      return options.find((item) => {
        return item[selectedKey] == value;
      });
    }
  }),
  actions: {
    // body
    foo(destination) {
      this.set('destination', destination);
    }
  }
});
