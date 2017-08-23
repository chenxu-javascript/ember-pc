import Ember from 'ember';

export default Ember.Controller.extend({
  // body
  title: ['男嘉宾编号', '男嘉宾姓名', '女嘉宾编号', '女嘉宾姓名'],
  users: [
    { name: '唐旭', id: '001' },
    { name: '谢宇', id: '002' },
    { name: '刘亚', id: '003' },
    { name: '刘亚', id: '004' },
    { name: '唐旭', id: '005' },
    { name: '谢宇', id: '006' },
    { name: '刘亚', id: '007' },
    { name: '曾龙', id: '008' },
    { name: '唐旭', id: '009' },
    { name: '谢宇', id: '010' },
  ],
  colleaction: [
    { name: '唐旭', id: '001', namegg: '谢宇', idgg: '002' },
    { name: '刘亚', id: '003', namegg: '刘亚', idgg: '004' },
    { name: '唐旭', id: '005', namegg: '谢宇', idgg: '006' },
    { name: '刘亚', id: '007', namegg: '刘亚', idgg: '008' },
    { name: '唐旭', id: '009', namegg: '谢宇', idgg: '010' }
  ]
});
