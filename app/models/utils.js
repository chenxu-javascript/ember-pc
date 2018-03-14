import EmberObject from '@ember/object';
import $ from 'jquery';
import { later } from '@ember/runloop';
import { Promise as EmberPromise, hash, all } from 'rsvp';
const isDev = location.origin.indexOf('http://localhost') == 0;

export var ZBJConfig = {
  API_HOST: isDev? 'http://qy.dev.zbjdev.com' : location.origin,
  HOME_DIR: isDev? '/' : '/fe/dist/',
  isDev
};
const _ = {
  isUndefined(o) {
    return typeof o == 'undefined';
  },
  cloneDeep(o) {
    return $.extend({}, o, true);
  }
};

export var bsPromise = function(data, time) {
  return new EmberPromise(function(resolve) {
    if (time) {
      later(function() {
        resolve(data);
      }, time || 1);
    } else {
      resolve(data);
    }
  });
};
export var bsWait = function(time) {
  return bsPromise(null, time);
};

export var bsConfirm = function(
    content='是否确定？',
    title='系统提示',
    okBtnText='确定',
    cancelBtnText='取消'
  ) {
  return new EmberPromise((confirmHandler, cancelHandler) => {
    window.confirmComponent.setProperties({
      show: true, content, title, okBtnText, cancelBtnText,
      confirmHandler, cancelHandler
    });
  });
};

/**
 */
export var bsTip = function(msg, type, timeout) {
  type = type || 'success'; // success info warning error
  timeout = timeout || 3000;

  if (window.bsTip) {
    return window.bsTip(msg, type, timeout);
  }

  let notification = window.Qyweb.__container__.lookup('service:notify');
  let opts = {
    closeAfter: timeout
  };
  notification[type](msg, opts);

};

var BsCache = {
  CACHE_URLS: [
    // '/corp/department/act/GetDepartmentList'
  ],
  cache: {},
  shouldCache(url) {
    if (url.indexOf(ZBJConfig.API_HOST) === 0) {
      url = url.substr(ZBJConfig.API_HOST.length);
    }
    for (var i = 0; i < this.CACHE_URLS.length; i++) {
      if (url.indexOf(this.CACHE_URLS[i]) === 0) {
        return true;
      }
    }
    return false;
  },
  encodeKey(url, params) {
    if (typeof params == 'string') {
      return url + '__params__' + params;
    }
    return url + '__params__' + $.param(params);
  },
  saveCache(url, params, data) {
    var cacheKey = this.encodeKey(url, params);
    this.cache[cacheKey] = data;
  },
  removeCache(url, params) {
    var cacheKey = this.encodeKey(url, params);
    delete this.cache[cacheKey];
  },
  getCache(url, params) {
    var cacheKey = this.encodeKey(url, params);
    return this.cache[cacheKey];
  }
};


export var bsGetAppname = function() {
  let hash = location.hash.replace(/\?.*/, '');
  let maps = {
    'luckdraw': 'whhd_yj',
    'sign': 'whhd_qd',
    'vote': 'whhd_tp',
    'wechatwall': 'whhd_wxc',

    'meeting': 'xtbg_hygl',
    'news': 'ydbg_tzgg',
    'jobreport': 'ydbg_gzbg',
    'attendance': 'ydbg_kqdk',
    'addressbook': 'ydbg_txl',
    'salary': 'rlzy_gzt',
    'exam': 'whpx_kscp',

    'sell': 'xsgl_bjxsgl'
  };
  let names = Object.keys(maps);
  for (var i = 0; i < names.length; i++) {
    let name = names[i];
    if (hash.indexOf(name) !== -1) {
      return maps[name];
    }
  }
  return '';
};


var APP = {};
var bsAddReqToken = function(url) {
  if (!APP.REQ_TOKEN) {
    return url;
  }
  if (url.indexOf('?') === -1) {
    return url + '?token=' + APP.REQ_TOKEN;
  } else {
    return url + '&token=' + APP.REQ_TOKEN;
  }
};

export var bsGetJSON = function(url, params, type) {
  type = type || 'GET';
  type = type.toUpperCase();
  var shouldCache = BsCache.shouldCache(url);

  if ((typeof params === 'object') && (params !== null)) {
    params = JSON.parse(JSON.stringify(params));
  }

  $.ajaxSetup({
    xhrFields: {
      withCredentials: false
    }
  });

  function handleRequestError(data) {
    if (data && data.token) {
      APP.REQ_TOKEN = data.token;
    }
    if (data && data.is_redirect) {
      let char = data.redirect_url.indexOf('?') == -1 ? '?' : '&';
      location.href = data.redirect_url + char + 'back_url=' + encodeURIComponent(location.href);
    } else if (data && !data.state) { // error
      bsTip(data.data || 'error', 'error');
    }
    if (!data.state) {
      BsCache.removeCache(url, params);
    } else if (shouldCache) {
      // 复制一份数据，防止业务对数据进行修改后从缓存中取出的是修改后的数据
      var cachedData = _.cloneDeep(data);
      data.cachedData = cachedData;
    }
    return data;
  }
  params = params || {};

  if (ZBJConfig.isDev) {
    if (typeof params == 'string') {
      params += '&isAjax=1';
    } else {
      params.isAjax = 1;
    }
  }
  if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
    url = ZBJConfig.API_HOST + url;
  }

  if (shouldCache) {
    var cache = BsCache.getCache(url, params);
    if (cache) {
      return cache.then(function(data) {
        // 返回缓存的原始数据
        if (data.cachedData) {
          return _.cloneDeep(data.cachedData);
        }
        return data;
      });
    }
  }

  var promise = null;

  var urlAddToken = bsAddReqToken(url);
  if (type == 'GET') {
    promise = $.getJSON(urlAddToken, params);
  } else {
    promise = $.post(urlAddToken, params, null, 'json');
  }

  promise = new EmberPromise(function(resolve, reject) {
    promise.then(handleRequestError).done(resolve).fail(reject);
  });

  if (shouldCache) {
    BsCache.saveCache(url, params, promise);
  }
  return promise;
};


/**
 * 当满足条件时执行函数，函数最多只会执行一次，超时后还没有满足条件则函数不会执行
 * @param {} fn 要执行的函数
 * @param {} cod  要满足的条件
 * @param {} name
 */
export var bsRunWhen = function(fn, cod) {

  if (cod()) {
    fn();
    return;
  }

  var i = 0;
  var interval = setInterval(function() {
    i++;
    if (i > 500) {
      clearInterval(interval);
    } else if (cod()) {
      fn();
      clearInterval(interval);
    }
  }, 30);
};

export var bsCheck = function(cod) {
  return new EmberPromise(function(resolve, reject) {
    bsRunWhen(resolve, cod, 'bsCheck', reject);
  });
};



export var bsElementIsScrolledIntoView = function(elem, container) {
  container = container || window;
  var $elem = $(elem);
  var $window = $(container);

  if ($elem.length == 0) {
    return false;
  }

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  if ($window.scrollTop()) {
    elemTop -= $window.scrollTop();
  }
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
};


let loaded = [];
let loading = [];

var Loader = EmberObject.extend({
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
    return $.ajax({
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
      return hash(promises);
    }
    return true;
  },

  bsLoad(files) {
    var self = this;
    if ($.isArray(files) && files.length > 0) {
      var promises = files.map(function(o) {
        return self.bsLoad(o);
      });
      return all(promises);
    }
    if (typeof files === 'string') {
      return self._doLoad(files);
    }
    return bsPromise();
  }

});

var loader = new Loader();
export var bsLoad = function(files) {
  if ($.isArray(files) && files.length > 0) {
    var promises = files.map(function(o) {
      return bsLoad(o);
    });
    return all(promises);
  }
  if (typeof files == 'string') {
    return loader._doLoad(files);
  }
  return bsPromise();
};

window.bsLoad = bsLoad;

export var bsGetToken = async function() {
  let result = await bsGetJSON('/index/gettoken');
  if (result.state && result.data && result.data.token) {
    APP.REQ_TOKEN = result.data.token;
  }
};



var Utils = {
  ZBJConfig,
  bsPromise,
  bsConfirm,
  bsTip,
  bsGetJSON,
  bsLoad
};
export default Utils;
