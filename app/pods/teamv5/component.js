import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import $ from 'jquery';
// import xx  from './test.js';
export default Component.extend({
  // body
  list: alias('model.list'),
  data: alias('model.data'),
  didInsertElement() {
    // console.log(xx);
    $('body').addClass('nooverhidden');
    $('html').addClass('nooverhidden');
    $('.content-team-v5').addClass('min-max-width');
    let width = this.minwidth() || 1200;
    $('.content-team-v5').css({
      'min-width': width
    });
  },
  willDestroyElement() {
    $('body').removeClass('nooverhidden');
    $('html').removeClass('nooverhidden');
    $('.content-team-v5').removeClass('min-max-width');
  },
  minwidth() {
    // let controller = this.get('controller');
    // let item = controller.model.list[1].teams;
    // let width = 0;
    // item.map((l) => {
    //   if (l.hasOwnProperty('childrens') && Array.isArray(l.childrens) && l.childrens.length > 0) {
    //     width += l.childrens.length * 35 + 4;
    //   } else {
    //     width += 35 + 4;
    //   }
    // });
    // return width+151;
  }
});
