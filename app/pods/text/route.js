import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let { customer_id } = params;
    return { customer_id };
  },
});
