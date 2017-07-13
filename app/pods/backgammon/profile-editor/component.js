import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    console.log(1);
    this.errors = [];
  },
  er: [
    { 'message': 1 }
  ],
  didUpdateAttrs() {
    this._super(...arguments);
    console.log(2);
    this.set('errors', []);
  },

  didInsertElement() {
    console.log('didInsertElement1');
  },
  didRender() {
    console.log('render');
  },
  actions: {
    eraction() {
      let er = this.get('er');
      er.pushObject({ 'message': er.length+1 });
    },
    required(event) {
      if (!event.target.value) {
        this.get('errors').pushObject({ message: `${event.target.name} is required` });
      }
    }
  }
});
