import Route from '@ember/routing/route';
import moment from 'moment';
export default Route.extend({
  beforeModel() {
    moment.locale('zh-cn');
  },
  model() {
  }
});
