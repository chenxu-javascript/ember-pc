import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['content-wrapper', 'padding20'],
  didInsertElement() {
    var self = this;
    self.resizeElement();
    $(window).resize(function() {
      self.resizeElement();
    });
  },
  resizeElement() {
    var headHeight = $('.main-header').outerHeight();
    var footerHeight = $('.main-footer').outerHeight();
    var sidebar_height = $('.sidebar').height();
    var neg = headHeight + footerHeight;
    var window_height = $(window).height();
    if ($('body').hasClass('fixed')) {
      this.setHeight(window_height - footerHeight);
    } else {
      this.setHeight(window_height >= sidebar_height ? (window_height - neg) : sidebar_height);
    }
  },
  setHeight(height) {
    this.$().css('min-height', height);
  }
});
