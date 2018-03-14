import Component from '@ember/component';
import computed from 'ember-computed-decorators';

export default Component.extend({
  height: null,
  width: null,
  classNames: ['minh100', 'all-center-parent', 'w100p'],
  attributeBindings: ['style'],

  @computed('width', 'height')
  style(width, height) {
    let style = '';
    if (width) {
      style += `width:${width};`;
    }
    if (height) {
      style += `height:${height};`;
    }
    return style;
  }
});
