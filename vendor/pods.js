var Em = Ember;

var isDev = location.origin.indexOf('http://localhost') == 0;
window.BASE_URL = location.origin.substring(location.origin.indexOf('.') + 9);

if (isDev) {
	var localEnv = 'dev';
	ZBJConfig = {
		// API_HOST: 'http://boss.fenxiao.local.zbj.com',
	//	API_HOST: 'http://boss.fenxiao.sign.zbjdev.com',
	// API_HOST: 'http://boss.fenxiao.dev.com',
	   	 API_HOST: 'http://boss.fenxiao.zbjdev.com',
		//  API_HOST: 'http://boss.fenxiao.local.zbj.com',

		// API_HOST: 'http://boss.fenxiao.dev.zbjdev.com',
		SITE_HOST: 'http://localhost:9000',
		LOG_TRANSITIONS: true,
		isDev: true,
		HOME_DIR: '/'
	};

	//ZBJConfig.BASE_URI = localEnv + '.zbjdev.com';
	ZBJConfig.BASE_URI = 'zbjdev.com'; //changed

	ZBJConfig.BOSS_URI = 'boss2.' + ZBJConfig.BASE_URI;
	ZBJConfig.BOSS2_URI = 'boss.' + ZBJConfig.BASE_URI;
	ZBJConfig.isOnline = false;

	ZBJConfig.BOSS_URL = 'http://' + ZBJConfig.BOSS_URI;
	ZBJConfig.BOSS2_URL = 'http://' + ZBJConfig.BOSS2_URI;

} else {
	var ZBJConfig = {
		API_HOST: location.origin || 'http://boss.zbj.com',
		SITE_HOST: location.origin || 'http://boss.zbj.com',
		LOG_TRANSITIONS: false,
		isDev: false,
		HOME_DIR: '/fe/dist/'
	}

	ZBJConfig.BASE_URI = ZBJConfig.API_HOST.substring(ZBJConfig.SITE_HOST.indexOf('.') + 1);
	ZBJConfig.BOSS_HOST = 'boss2.' + ZBJConfig.BASE_URI;
	ZBJConfig.BOSS_URI = 'boss2.' + ZBJConfig.BASE_URI;
	ZBJConfig.BOSS2_URI = 'boss.' + ZBJConfig.BASE_URI;

	ZBJConfig.BOSS_URL = "http://" + ZBJConfig.BOSS_URI;
	ZBJConfig.BOSS2_URL = "http://" + ZBJConfig.BOSS2_URI;

	if (ZBJConfig.BASE_URI == 'zbj.com') {
		window.console = window.console || {};
		console.log = function() {};
		ZBJConfig.isOnline = true;
	}
}

ZBJConfig.cdnPath = ZBJConfig.BOSS2_URL + ZBJConfig.HOME_DIR;

Ember.Component.reopen({
	_gotoRouteAction: 'goToRoute',
	_openModalAction: 'openModal',
	goToRoute: function() {
		var args = Array.prototype.slice.apply(arguments);
		args.unshift('_gotoRouteAction');
		this.sendAction.apply(this, args);
	},
	actions: {
		goToRoute: function() {
			var args = Array.prototype.slice.apply(arguments);
			args.unshift('_gotoRouteAction');
			this.sendAction.apply(this, args);
		},
		openModal: function() {
			var args = Array.prototype.slice.apply(arguments);
			args.unshift('_openModalAction');
			this.sendAction.apply(this, args);
		}
	},

	// lazyload component
	lazyload: false,
	getLazyLoadContainer: function() {
		var compContainer = $(this.get('compContainer'));
		var container = $(window);
		if (compContainer.length) {
			container = compContainer;
		}
		return container;
	},
	bindLoadEvent: function() {
		var container = this.getLazyLoadContainer();
		if (this.windowScrollFunc) {
			container.on('scroll', this.windowScrollFunc);
			container.on('resize', this.windowScrollFunc);
		}
	},
	unBindLoadEvent: function() {
		var container = this.getLazyLoadContainer();
		if (this.windowScrollFunc) {
			container.off('scroll', this.windowScrollFunc);
			container.off('resize', this.windowScrollFunc);
			this.windowScrollFunc = null;
		}
	},
	checkToInitElemnt: function() {
		var tagName = this.get('tagName');
		var dom = null;
		if (!tagName) {
			dom = Ember.get(this, '_renderNode.firstNode');
		} else {
			dom = this.$();
		}
		if (!dom && this._morph) {
			dom = this._morph.firstNode;
		}
		if ($.isReady && bsElementIsScrolledIntoView(dom, this.getLazyLoadContainer())) {
			this.didInsertElementFunc.apply(this);
			this.elementIsInited = true;
			this.unBindLoadEvent();
			return true;
		}
	},
	initLazyLoad: Ember.on('willInsertElement', function() {
		if (this.get('lazyload')) {
			this.didInsertElementFunc = this.didInsertElement;
			Ember.set(this, 'didInsertElement', Ember.K);
		}
	}),
	setupInitElement: Ember.on('didInsertElement', function() {
		if (this.get('lazyload')) {
			var self = this;
			Ember.run.later(function() {
				if (!this.checkToInitElemnt()) {
					this.windowScrollFunc = this.checkToInitElemnt.bind(this);
					this.bindLoadEvent();
				}
			}.bind(this));
		}
	}),
	destroyScollEvent: Ember.on('willDestroyElement', function() {
		if (this.get('lazyload')) {
			this.unBindLoadEvent();
		}
	})

});
Ember.TextSupport.reopen({
	focusOut: function(event) {
		this._sendAction('focus-out', this, event);
	},
	_sendAction: function(eventName, view, event) {
		var action = Ember.get(view, eventName),
			on = Ember.get(view, 'onEvent'),
			value = Ember.get(view, 'value');

		// back-compat support for keyPress as an event name even though
		// it's also a method name that consumes the event (and therefore
		// incompatible with sendAction semantics).
		if (on === eventName || (on === 'keyPress' && eventName === 'key-press')) {
			view.sendAction('action', value, this, event);
		}

		view.sendAction(eventName, value, this, event);

		if (action || on === eventName) {
			if (!Ember.get(view, 'bubbles')) {
				event.stopPropagation();
			}
		}
	}
});

Ember.TextField.reopen({
	attributeBindings: ['data-type', 'data-index', 'data-id']
});

Ember.onerror = function(error) {
	if (window.Bugsnag) {
		Bugsnag.notifyException(error);
	} else {
		throw error;
	}
};

window.user = {}

window.APP = window.APP || {};
APP.BSMenuItemsArray = []

window.Date.prototype.Format = function(fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}


window.bsRenderMarkdown = function(md, useToc) {

	var val = md || '';
	var MD_META = '<param texttype="md" />';

	if (val.indexOf(MD_META) === 0) {
		val = bsDeFlat(val.substr(MD_META.length));
	}

	val = val.replace(/<equation>((.*?\n)*?.*?)<\/equation>/ig, function(a, b) {
		return '<img src="http://latex.codecogs.com/svg.latex?' + encodeURIComponent(b) + '" />';
	});

	if (useToc === true) {
		val = '@[toc]\n' + val;
	}
	var md = markdownit({
			linkify: true,
			breaks: true,
			html: true,
			langPrefix: 'hljs language-',
			highlight: function(code, lang) {
				return bsHighlight(code, lang);
			}
		})
		.use(markdownitToc)
		.use(markdownitDeflist)
		.use(markdownitSanitizer)
		.use(markdownitCheckbox)
		.use(markdownitFootnote);
	return md.render(val);
}


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
window.bsConfirm = function(content, title, okBtn, cancelBtn) {
	title = title || '提示';
	content = content || '是否确定？';
	okBtn = okBtn || '确定';
	cancelBtn = cancelBtn || '取消';

	return new Ember.RSVP.Promise(function(resolve, reject) {
		$.SmartMessageBox({
			title: title,
			content: content,
			buttons: '[' + cancelBtn + '][' + okBtn + ']'
		}, function(ButtonPressed) {
			if (ButtonPressed === okBtn) {
				resolve(ButtonPressed);
			} else if (ButtonPressed === cancelBtn) {
				reject(ButtonPressed);
			}
		});
	})
}

window.bsHtmlEncode = function(value) {
	//create a in-memory div, set it's inner text(which jQuery automatically encodes)
	//then grab the encoded contents back out.  The div never exists on the page.
	var div = document.createElement("div");
	var text = document.createTextNode(value);
	div.appendChild(text);
	return div.innerHTML;
}

window.bsHtmlDecode = function(value) {
	var div = document.createElement("div");
	div.innerHTML = value;
	return div.innerHTML;
}

window.ENV = {};

window.BsCache = {
	CACHE_URLS: [
		"/cpuser/CommonUserInfo",
		"/cpuser-AddressBook",
		"/cpuser/AddressBook",
		"/cpuser-GroupTree",
		"/decision/GetCate",
		"/decision/getusers",
		"/team-Minilist"
	],
	cache: {},
	shouldCache: function(url) {
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
	encodeKey: function(url, params) {
		if (typeof params == 'string') {
			return url + "__params__" + params;
		}
		return url + "__params__" + $.param(params);
	},
	saveCache: function(url, params, data) {
		var cacheKey = this.encodeKey(url, params);
		this.cache[cacheKey] = data;
	},
	removeCache: function(url, params, data) {
		var cacheKey = this.encodeKey(url, params);
		delete this.cache[cacheKey];
	},
	getCache: function(url, params) {
		var cacheKey = this.encodeKey(url, params);
		return this.cache[cacheKey];
	}
};
window.bsAddReqToken = function(url) {
	if (!APP.REQ_TOKEN) {
		return url;
	}
	if (url.indexOf('?') === -1) {
		return url + '?reqtoken=' + APP.REQ_TOKEN;
	} else {
		return url + '&reqtoken=' + APP.REQ_TOKEN;
	}
}
window.bsGetJSON = function(url, params, type) {
		type = type || 'GET';
		type = type.toUpperCase();
		var shouldCache = window.BsCache.shouldCache(url);

		if ((typeof params === "object") && (params !== null)) {
			params = JSON.parse(JSON.stringify(params));
		}

		Ember.$.ajaxSetup({
			xhrFields: {
				withCredentials: false
			}
		});

		function handleRequestError(data) {
			if (data && data.reqtoken) {
				APP.REQ_TOKEN = data.reqtoken;
			}
			if (data && data.reqlogin == true && !ZBJConfig.isDev) {
				var host = location.hostname;
				var appids = {
					'boss.t1.zbjdev.com': 530,
					'boss.t2.zbjdev.com': 543,
					'boss.t3.zbjdev.com': 556
				};
				var appid = appids[host] || 39;
				if (data.urljump) {
					var path = decodeURIComponent(location.href.substr(location.href.indexOf('bossold') + 8));
					location = "/cp-ssologin?appid=" + data.appid + "&back_url=" + encodeURIComponent(data.url + 'fe/dist/#' + path.substr(path.indexOf('#') + 1));
				} else {
					location = "/cp-ssologin?appid=" + appid + "&back_url=" + encodeURIComponent(location.href);
				}
			} else if (data && (!_.isUndefined(data.status) && data.status != 1 || !_.isUndefined(data.state) && data.state != 1)) { // error
				window.bsTip(data.msg || 'error', 'error');
				if (data.field) {
					$('[name=' + data.field + ']').parents('.form-group').addClass('has-error');
				}
			}
			if (!data.state) {
				window.BsCache.removeCache(url, params);
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
		url = (url.indexOf("http://") !== 0) ? ZBJConfig.API_HOST + url : url;

		if (url.indexOf('/misc/Searchboss2') !== -1 || url.indexOf('http://boss.jr') !== -1) {
			Ember.$.ajaxSetup({
				xhrFields: {
					withCredentials: true
				}
			});
		}

		if (shouldCache) {
			var cache = window.BsCache.getCache(url, params);
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
		if (type == "GET") {
			promise = Em.$.getJSON(urlAddToken, params);
		} else {
			promise = Em.$.post(urlAddToken, params, null, 'json');
		}

		promise = new Em.RSVP.Promise(function(resolve, reject) {
			promise.then(handleRequestError).done(resolve).fail(reject);
		});

		if (shouldCache) {
			window.BsCache.saveCache(url, params, promise);
		}
		return promise;
	},

window.openRoute = function() {
	var params = [].slice.apply(arguments);
	window.open(location.origin + location.pathname + "#/" + params.join('/'))
}



window.bsEncode = function(params) {
	//    return btoa(encodeURIComponent(JSON.stringify(params)))
	return encodeURIComponent("?" + $.param(params));
}

window.bsDecode = function(params) {
	try {
		return JSON.parse(decodeURIComponent(atob(params)));
	} catch (e) {
		return bsDeparam(decodeURIComponent(params).substr(1));
	}
}


/**
 * 将url query 字符串转成object
 * 如 "a=1&b=2&c=3" 转成 {a:'1',b:'2',c:'3'}
 * @param {} params
 * @return {}
 */
window.bsDeparam = function(params) {
	var digitTest = /^\d+$/,
		keyBreaker = /([^\[\]]+)|(\[\])/g,
		plus = /\+/g,
		paramTest = /([^?#]*)(#.*)?$/;

	if (!params || !paramTest.test(params)) {
		return {};
	}


	var data = {},
		pairs = params.split('&'),
		current;

	for (var i = 0; i < pairs.length; i++) {
		current = data;
		var pair = pairs[i].split('=');

		// if we find foo=1+1=2
		if (pair.length != 2) {
			pair = [pair[0], pair.slice(1).join("=")]
		}

		var key = decodeURIComponent(pair[0].replace(plus, " ")),
			value = decodeURIComponent(pair[1].replace(plus, " ")),
			parts = key.match(keyBreaker);

		for (var j = 0; j < parts.length - 1; j++) {
			var part = parts[j];
			if (!current[part]) {
				// if what we are pointing to looks like an array
				current[part] = digitTest.test(parts[j + 1]) || parts[j + 1] == "[]" ? [] : {}
			}
			current = current[part];
		}
		lastPart = parts[parts.length - 1];
		if (lastPart == "[]") {
			current.push(value)
		} else {
			current[lastPart] = value;
		}
	}
	return data;
}




/**
 * 当满足条件时执行函数，函数最多只会执行一次，超时后还没有满足条件则函数不会执行
 * @param {} fn 要执行的函数
 * @param {} cod  要满足的条件
 * @param {} name
 */
window.bsRunWhen = function(fn, cod, name) {
	name = name || '';

	if (cod()) {
		fn();
		return;
	}

	var i = 0;
	var interval = setInterval(function() {
		i++;
		if (i > 500) {
			clearInterval(interval);
			console.log(name, ':', 'bsRunwhern timeout')
		} else if (cod()) {
			fn();
			clearInterval(interval);
		}
	}, 30);
}

window.bsCheck = function(cod) {
	return new Ember.RSVP.Promise(function(resolve, reject) {
		bsRunWhen(resolve, cod, 'bsCheck', reject);
	});
}

window.bsIsMobile = function() {
	if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
		return true;
	}
	if (/Android/i.test(window.navigator.userAgent)) {
		if (/Mobile/i.test(window.navigator.userAgent)) {
			return true;
		}
	}
	return false;
};



/*异步加载js和css到页面中*/
window.bsLoad = function(files) {
	if ($.isArray(files) && files.length > 0) {
		var promises = files.map(function(o) {
			return bsLoad(o);
		});
		return Em.RSVP.all(promises);
	}
	if (typeof files == 'string') {
		return APP.lazyLoader._doLoad(files);
	}
	return bsPromise();
}



window.bsIsWexin = function() {
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}

$.fn.animateInView = function() {
	$('html,body').animate({
		'scrollTop': $(this).eq(0).offset()['top'] - 50 + 'px'
	});
	return $(this);
}

window.bsFixFloat = function(number) {
	number = Number(number);
	number = Number(number.toFixed(8));
	return number;
}

window.bsSetupRem = function() {
  try {
    var docEl = document.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth>=750) {
          docEl.style.fontSize = '100px';
        } else {
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
      };

    if (document.addEventListener) {
      window.addEventListener(resizeEvt, recalc, false);
      document.addEventListener('DOMContentLoaded', recalc, false);
    }
  } catch (e) {
    //
  }
};
