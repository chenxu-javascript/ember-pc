import Component from '@ember/component';

export default Component.extend({
  // body
  support: [],
  industry: [],
  didInsertElement() {
    this._super(...arguments);
    this.dataclass();
  },
  dataclass() {
    let data = this.get('data');
    let industry = [];
    let support = [];
    data.teams.forEach((o) => {
      if (o && (o.group_id == 650 || o.group_id == 649 || o.group_id == 1541)) {
        support.push(o);
      } else {
        industry.push(o);
      }
    });
    this.set('industry', industry);
    this.set('support', support);
  }
});
