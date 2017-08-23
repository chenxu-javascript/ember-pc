import Ember from 'ember';

export default Ember.Component.extend({
  // body
  options: [], //  初始数组
  value: '', // 默认选中值
  selectedKey: 'id', // key值
  selectedValue: 'name', // value
  placeholder: '', // 默认值
  allowClear: false, // 允许被删除
  searchEnabled: false, // 是否切换
  multiple: true,
  destination: Ember.computed('value', {
    get() {
      let options = this.get('options');
      let selectedKey = this.get('selectedKey');
      let value = this.get('value');
      if (this.get('multiple')) {
        value = Ember.isArray(value) ? value:  [value];
        return options.filter(function(k) {
          return value.indexOf(k[selectedKey]) != -1;
        });
      } else {
        return options.find((item) => {
          return item[selectedKey] == value;
        });
      }
    }
  }),
  actions: {
    foo(destination) {
      let selectedKey = this.get('selectedKey');
      let multiple = this.get('multiple');
      if (multiple) {
        let multipleValue = destination.map((o) => {
          return o[selectedKey];
        });
        return this.set('value', multipleValue);
      } else {
        this.set('value', destination[selectedKey]);
      }
    }
  }
});
