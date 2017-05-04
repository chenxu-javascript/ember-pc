import { animate, stop } from 'liquid-fire';
export default function() {
  function fade(oldView, insertNewView) {
    stop(oldView);
    return animate(oldView, { opacity: 0 })
      .then(insertNewView)
      .then(function(newView) {
        return animate(newView, { opacity: [1, 0]});
      });
  }
  this.transition(
    this.fromRoute('yield'),
    this.toRoute('select'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.childOf('#liquid-bind-demo'),
    this.use('toUp')
  );
}
