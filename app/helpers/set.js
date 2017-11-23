import { set } from '@ember/object';
import { helper } from '@ember/component/helper';

export default helper(function([target, property, val]) {
  set(target, property, val);
});
