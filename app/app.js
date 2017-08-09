import Ember from 'ember';
import Resolver from './resolver';
import LazyLoadMixin from 'chenxu/mixins/lazy-load';
import LazyLoader from 'chenxu/mixins/lazy-loader';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.Route = Ember.Route.extend(LazyLoadMixin, {});

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});
App.lazyLoader = LazyLoader;
window.APP = App;
loadInitializers(App, config.modulePrefix);

export default App;
