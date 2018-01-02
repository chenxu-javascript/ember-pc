import { helper } from '@ember/component/helper';

export default helper(function([name]) {
  let classes = '';
  let array = ['', '行业线', '区域线', '', '', '', '', '', '类目线', '中台线', '集团线', '序列线'];
  switch (name) {
  case '区域线':
    classes = 'area-line';
    break;
  case '行业线':
    classes = 'industry-line';
    break;
  case '类目线':
    classes = 'category-line';
    break;
  case '中台线':
    classes = 'station-line';
    break;
  case '序列线':
    classes = 'order-line';
    break;
  case '集团线':
    classes = 'group-line';
    break;
  default:
    classes = 'area-line';
    break;
  }
  return classes;
});
