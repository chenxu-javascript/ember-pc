import Component from '@ember/component';
import { observes } from 'ember-computed-decorators';
export default Component.extend({
  // body
  groupId: null,
  blockId: 0,
  data: '',
  isColor: '',
  classNames: ['block'],
  @observes('groupId')
  getdata() {  // 用于获取modal数据
    let id = this.get('groupId');
    this.set('data', '');
    if (!id) return;
    bsGetJSON('/team/getTeamById', { id }).then(r => {
      if (r.state) {
        if (r.data.hasOwnProperty('childrens') && Array.isArray(r.data.childrens) && r.data.childrens.length>0) {
          this.set('data', r.data);
        } else {
          window.open(ZBJConfig.cdnPath + '#/team/' + id);
          this.set('data', '');
        }
      }
    });
  },
  actions: {
    setTeamId(group_id) {
      this.set('groupId', group_id);
    },
    gotouser(uid) {
      if (!uid) return;
      window.open(ZBJConfig.cdnPath + '#/team/user/' + uid);
    },
    gototeam(group_id) {
      window.open(ZBJConfig.cdnPath + '#/team/' + group_id);
    }
  }
});
