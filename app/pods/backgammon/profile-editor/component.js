import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.errors = [];
  },
  er: [
    { 'message': 1 }
  ],
  didUpdateAttrs() {
    this._super(...arguments);
    this.set('errors', []);
  },

  didInsertElement() {
  },
  didRender() {
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
