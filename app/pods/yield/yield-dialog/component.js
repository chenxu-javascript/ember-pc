import { later } from '@ember/runloop';
import Component from '@ember/component';

var UserSignComponent = Component.extend({

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
      this.get('childClickCount') + 1;

    },
    userSign() {
      $(document).trigger('click:guide', true);
      if (!this.get('signDetail')) {
        this.set('signDetail', true);
        later(function() {
          $(document).trigger('click:addicon', 1);
        });

      }
    }
  }
});

export default UserSignComponent;
