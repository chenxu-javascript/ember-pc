import Ember from 'ember';

export default Ember.Component.extend({
  name: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }],
  model: { 'a': 1 },
  ismyshow: "aa",
  aaa() {
    return this.get('name');
  },
  swapItems(arr, index1, index2) {
    let  newarr = [];
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    newarr = _.cloneDeep(arr);
    this.set('name', newarr);
  //  console.log('newarr='+arr);
    return arr;
  },
  actions: {
    up(arr, $index) {
      if ($index == 0) {
        return;
      }
      this.swapItems(arr, $index, $index - 1);
    },
    adds() {
      let name = this.get('name');
      let firstobject = name.slice(0, 2);
      let lastobject = name.slice(2);
      this.set('name', [...firstobject, { cx: name.length }, ...lastobject]);
      // let aa = name;
      // aa.splice(1, 0, {});

    //  this.get('name').insertAt(1, {});
    //  name.pushObject({});
      // this.set('name', aa);
      // console.log(name);
      // let property = this.get('name');
      // this.set('name', [
      //   { 1: property.length },
      //   ...property
      // ]);
    },
    add() {
    }
  }
});
