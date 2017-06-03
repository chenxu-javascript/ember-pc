import Ember from 'ember';

var UserSignComponent = Ember.Component.extend({

  didInsertElement() {
    this.$().delegate('.user-sign-dropdown', 'click', function(evt) {
      var target = evt.target;
      if ($(target).is('.btn-close') || $(target).is('.btn-close *')) {
        // DO NOTHING
      } else {
        evt.preventDefault();
        evt.stopPropagation();
      }
    });
  },
  actions: {
    fn() {
      let count = this.get('childClickCount') + 1;

    },
    userSign() {
      $(document).trigger('click:guide', true);
      if (!this.get('signDetail')) {
        this.set('signDetail', true);
        Ember.run.later(function() {
          $(document).trigger('click:addicon', 1);
        });

      }
    }
  }
});

export default UserSignComponent;
