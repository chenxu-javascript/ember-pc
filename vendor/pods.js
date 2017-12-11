
(function() {
window.APP = {};
window.bsPromise = function(data, time) {
    return new Ember.RSVP.Promise(function(resolve) {
       if (time) {
         Ember.run.later(function() {
            resolve(data);
          }, time || 1);
       } else {
         resolve(data);
       }
    })
}
let loaded = [];
let loading = [];

var Loader = Ember.Object.extend({
  lazyLoadFiles() {
    return [];
  },
  _endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  },
  _isJsFile(file) {
    return this._endsWith(file, '.js');
  },
  _isCssFile(file) {
    return this._endsWith(file, '.css');
  },
  _getScript(url) {
    return Ember.$.ajax({
      url,
      dataType: 'script',
      cache: true
    });
  },
  _doLoad(path) {
    var filePath = path;
    var self = this;
    if (!loaded[filePath]) {
      if (this._isJsFile(filePath)) {
        if (loading[filePath]) {
          return loading[filePath];
        }
        var loadPromise = self._getScript(filePath).then(function() { // getScript is in jQuery
          loaded[filePath] = true;
          loading[filePath] = null;
          return true;
        });
        loading[filePath] = loadPromise;
        return loadPromise;
      } else if (this._isCssFile(filePath)) {
        $('<link/>', {
          rel: 'stylesheet',
          type: 'text/css',
          href: filePath
        }).appendTo('head');
        loaded[filePath] = true;
        return bsPromise(true);
      }
    } else {
      return bsPromise(true);
    }
  },
  beforeModel() {
    var files = this.lazyLoadFiles() || [];
    var self = this;

    var promises = {};
    if (files && files.length > 0) {
      files.map(function(o, i) {
        promises[String(i)] = self._doLoad(o);
      });
      return Ember.RSVP.hash(promises);
    }
    return true;
  },

  bsLoad(files) {
    var self = this;
    if ($.isArray(files) && files.length > 0) {
      var promises = files.map(function(o) {
        return self.bsLoad(o);
      });
      return Ember.RSVP.all(promises);
    }
    if (typeof files === 'string') {
      return self._doLoad(files);
    }
    return bsPromise();
  }

});

var loader = new Loader();
window.bsLoad = function(files) {
  if ($.isArray(files) && files.length > 0) {
    var promises = files.map(function(o) {
      return bsLoad(o);
    });
    return Ember.RSVP.all(promises);
  }
  if (typeof files == 'string') {
    return loader._doLoad(files);
  }
  return bsPromise();
};
})();
