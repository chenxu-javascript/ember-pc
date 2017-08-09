import Ember from 'ember';
import LazyLoadMixin from 'chenxu/mixins/lazy-load';

var lazyLoader = new (Ember.Object.extend(LazyLoadMixin))();

export default lazyLoader;
