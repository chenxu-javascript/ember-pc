import Ember from 'ember';
const array = [
  { id: '1', name: '第一等级' },
  { id: '2', name: '第二等级' },
  { id: '3', name: '第三等级' },
  { id: '4', name: '第四等级' },
  { id: '5', name: '第五等级' }
];
const array1 = [
  { id: '11', name: '第一1等级' },
  { id: '21', name: '第二1等级' },
  { id: '31', name: '第三1等级' },
  { id: '41', name: '第四1等级' },
  { id: '51', name: '第五1等级' }
];
export default Ember.Controller.extend({
  array,
  destination: array[2],
  array1,
  param: {
    id: ''
  },
  actions: {
    foo(level) {
      this.set('destination', level);
    },
    save() {
      console.log(this.get('destination'), this.get('param'));
    }
  }
});
