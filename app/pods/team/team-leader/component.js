import Ember from 'ember';

export default Ember.Component.extend({
  teamleader: [
    { name: '二师兄', jobname: 'CEO', team_id: 178 },
    { name: '不东', jobname: '总裁', team_id: 4262 },
    { name: '般若', jobname: 'CFO', team_id: 4610 },
    { name: '楞严', jobname: 'CTO', team_id: 8737 },
    { name: '刘勇利', jobname: '员外', team_id: 6402 },
    { name: '袁进', jobname: '二郎神', team_id: 330 },
    { name: '吴镝', jobname: '海东青', team_id: 9514 },
    { name: '卢轶男', jobname: '铁男', team_id: 9515 },
    { name: '周勇', jobname: '周公', team_id: 12026 },
    { name: '齐天大圣', jobname: '董长城', team_id: 1032 },
  ],
  actions: {
    openuser(id) {
      window.open(ZBJConfig.API_HOST+ '#/team/user/'+ id);
    }
  }
});
