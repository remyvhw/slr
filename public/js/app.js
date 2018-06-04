/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);
var isBuffer = __webpack_require__(14);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(16);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(17);
var buildURL = __webpack_require__(19);
var parseHeaders = __webpack_require__(20);
var isURLSameOrigin = __webpack_require__(21);
var createError = __webpack_require__(6);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(22);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(23);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(18);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
module.exports = __webpack_require__(39);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(50);
__webpack_require__(11);

window.Vue = __webpack_require__(32);

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */]);
Vue.prototype.$http = window.axios;

var app = new Vue({
    el: '#app',
    store: store,
    components: {
        obstructionBrowser: __webpack_require__(35)
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(12);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Load and provision mapbox.
 */
window.mapbox = __webpack_require__(31);
window.mapbox.accessToken = document.head.querySelector('meta[name="mapbox-pk"]').content;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(15);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(8);
axios.CancelToken = __webpack_require__(29);
axios.isCancel = __webpack_require__(7);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(30);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(24);
var dispatchRequest = __webpack_require__(25);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(6);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(26);
var isCancel = __webpack_require__(7);
var defaults = __webpack_require__(2);
var isAbsoluteURL = __webpack_require__(27);
var combineURLs = __webpack_require__(28);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(8);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.mapboxgl = factory());
}(this, (function () { 'use strict';

/* eslint-disable */

var shared, worker, mapboxgl;
// define gets called three times: one for each chunk. we rely on the order
// they're imported to know which is which
function define(_, chunk) {
if (!shared) {
    shared = chunk;
} else if (!worker) {
    worker = chunk;
} else {
    var workerBundleString = 'var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);'

    var sharedChunk = {};
    shared(sharedChunk);
    mapboxgl = chunk(sharedChunk);
    mapboxgl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
}
}


define(["exports"],function(t){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o;function o(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=n,this.p2x=r,this.p2y=n;}o.prototype.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},o.prototype.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},o.prototype.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},o.prototype.solveCurveX=function(t,e){var r,n,i,o,a;for(void 0===e&&(e=1e-6),i=t,a=0;a<8;a++){if(o=this.sampleCurveX(i)-t,Math.abs(o)<e)return i;var s=this.sampleCurveDerivativeX(i);if(Math.abs(s)<1e-6)break;i-=o/s;}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(o=this.sampleCurveX(i),Math.abs(o-t)<e)return i;t>o?r=i:n=i,i=.5*(n-r)+r;}return i},o.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))};var a=function(t,e,r){this.column=t,this.row=e,this.zoom=r;};a.prototype.clone=function(){return new a(this.column,this.row,this.zoom)},a.prototype.zoomTo=function(t){return this.clone()._zoomTo(t)},a.prototype.sub=function(t){return this.clone()._sub(t)},a.prototype._zoomTo=function(t){var e=Math.pow(2,t-this.zoom);return this.column*=e,this.row*=e,this.zoom=t,this},a.prototype._sub=function(t){return t=t.zoomTo(this.zoom),this.column-=t.column,this.row-=t.row,this};var s=u;function u(t,e){this.x=t,this.y=e;}function l(t,e,r,n){var o=new i(t,e,r,n);return function(t){return o.solve(t)}}u.prototype={clone:function(){return new u(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,r=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=r,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=e*this.x-r*this.y,i=r*this.x+e*this.y;return this.x=n,this.y=i,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.x+r*(this.x-e.x)-n*(this.y-e.y),o=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=i,this.y=o,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},u.convert=function(t){return t instanceof u?t:Array.isArray(t)?new u(t[0],t[1]):t};var p=l(.25,.1,.25,1);function c(t,e,r){return Math.min(r,Math.max(e,t))}function h(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var o=i[n];for(var a in o)t[a]=o[a];}return t}var f=1;function y(t,e){t.forEach(function(t){e[t]&&(e[t]=e[t].bind(e));});}function d(t,e){return-1!==t.indexOf(e,t.length-e.length)}function v(t,e,r){var n={};for(var i in t)n[i]=e.call(r||this,t[i],i,t);return n}function m(t,e,r){var n={};for(var i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function g(t){return Array.isArray(t)?t.map(g):"object"==typeof t&&t?v(t,g):t}var x={};function b(t){x[t]||("undefined"!=typeof console&&console.warn(t),x[t]=!0);}function w(t,e,r){return(r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function _(t){for(var e=0,r=0,n=t.length,i=n-1,o=void 0,a=void 0;r<n;i=r++)o=t[r],e+=((a=t[i]).x-o.x)*(o.y+a.y);return e}var A={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(A);var k=function(t){function e(e,r,n){t.call(this,e),this.status=r,this.url=n,this.name=this.constructor.name,this.message=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+" ("+this.status+"): "+this.url},e}(Error);function z(t){var e=new self.XMLHttpRequest;for(var r in e.open("GET",t.url,!0),t.headers)e.setRequestHeader(r,t.headers[r]);return e.withCredentials="include"===t.credentials,e}var S=function(t,e){var r=z(t);return r.responseType="arraybuffer",r.onerror=function(){e(new Error(r.statusText));},r.onload=function(){var n=r.response;if(0===n.byteLength&&200===r.status)return e(new Error("http status 200 returned without content."));r.status>=200&&r.status<300&&r.response?e(null,{data:n,cacheControl:r.getResponseHeader("Cache-Control"),expires:r.getResponseHeader("Expires")}):e(new k(r.statusText,r.status,t.url));},r.send(),r};function M(t,e,r){r[t]=r[t]||[],r[t].push(e);}function V(t,e,r){if(r&&r[t]){var n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}var B=function(t,e){void 0===e&&(e={}),h(this,e),this.type=t;},C=function(t){function e(e,r){void 0===r&&(r={}),t.call(this,"error",h({error:e},r));}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(B),I=function(){};I.prototype.on=function(t,e){return this._listeners=this._listeners||{},M(t,e,this._listeners),this},I.prototype.off=function(t,e){return V(t,e,this._listeners),V(t,e,this._oneTimeListeners),this},I.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},M(t,e,this._oneTimeListeners),this},I.prototype.fire=function(t){"string"==typeof t&&(t=new B(t,arguments[1]||{}));var e=t.type;if(this.listens(e)){t.target=this;for(var r=0,n=this._listeners&&this._listeners[e]?this._listeners[e].slice():[];r<n.length;r+=1){n[r].call(this,t);}for(var i=0,o=this._oneTimeListeners&&this._oneTimeListeners[e]?this._oneTimeListeners[e].slice():[];i<o.length;i+=1){var a=o[i];V(e,a,this._oneTimeListeners),a.call(this,t);}var s=this._eventedParent;s&&(h(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),s.fire(t));}else d(e,"error")?console.error(t&&t.error||t||"Empty error event"):d(e,"warning")&&console.warn(t&&t.warning||t||"Empty warning event");return this},I.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},I.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this};var E={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.0511,180,85.0511]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.0511,180,85.0511]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.0511,180,85.0511]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},buffer:{type:"number",default:128,maximum:512,minimum:0},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},lineMetrics:{type:"boolean",default:!1}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},layout_fill:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},layout_circle:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},layout_line:{"line-cap":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{butt:{},round:{},square:{}},default:"butt"},"line-join":{type:"enum",function:"piecewise-constant","zoom-function":!0,"property-function":!0,values:{bevel:{},round:{},miter:{}},default:"miter"},"line-miter-limit":{type:"number",default:2,function:"interpolated","zoom-function":!0,requires:[{"line-join":"miter"}]},"line-round-limit":{type:"number",default:1.05,function:"interpolated","zoom-function":!0,requires:[{"line-join":"round"}]},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},layout_symbol:{"symbol-placement":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{point:{},line:{}},default:"point"},"symbol-spacing":{type:"number",default:250,minimum:1,function:"interpolated","zoom-function":!0,units:"pixels",requires:[{"symbol-placement":"line"}]},"symbol-avoid-edges":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1},"icon-allow-overlap":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1,requires:["icon-image"]},"icon-ignore-placement":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1,requires:["icon-image"]},"icon-optional":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1,requires:["icon-image","text-field"]},"icon-rotation-alignment":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"]},"icon-size":{type:"number",default:1,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,units:"factor of the original icon size",requires:["icon-image"]},"icon-text-fit":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"]},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",function:"interpolated","zoom-function":!0,requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}]},"icon-image":{type:"string",function:"piecewise-constant","zoom-function":!0,"property-function":!0,tokens:!0},"icon-rotate":{type:"number",default:0,period:360,function:"interpolated","zoom-function":!0,"property-function":!0,units:"degrees",requires:["icon-image"]},"icon-padding":{type:"number",default:2,minimum:0,function:"interpolated","zoom-function":!0,units:"pixels",requires:["icon-image"]},"icon-keep-upright":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":"line"}]},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],function:"interpolated","zoom-function":!0,"property-function":!0,requires:["icon-image"]},"icon-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,"property-function":!0,values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"]},"icon-pitch-alignment":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"]},"text-pitch-alignment":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"]},"text-rotation-alignment":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"]},"text-field":{type:"string",function:"piecewise-constant","zoom-function":!0,"property-function":!0,default:"",tokens:!0},"text-font":{type:"array",value:"string",function:"piecewise-constant","zoom-function":!0,"property-function":!0,default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"]},"text-size":{type:"number",default:16,minimum:0,units:"pixels",function:"interpolated","zoom-function":!0,"property-function":!0,requires:["text-field"]},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",function:"interpolated","zoom-function":!0,"property-function":!0,requires:["text-field"]},"text-line-height":{type:"number",default:1.2,units:"ems",function:"interpolated","zoom-function":!0,requires:["text-field"]},"text-letter-spacing":{type:"number",default:0,units:"ems",function:"interpolated","zoom-function":!0,"property-function":!0,requires:["text-field"]},"text-justify":{type:"enum",function:"piecewise-constant","zoom-function":!0,"property-function":!0,values:{left:{},center:{},right:{}},default:"center",requires:["text-field"]},"text-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,"property-function":!0,values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field"]},"text-max-angle":{type:"number",default:45,units:"degrees",function:"interpolated","zoom-function":!0,requires:["text-field",{"symbol-placement":"line"}]},"text-rotate":{type:"number",default:0,period:360,units:"degrees",function:"interpolated","zoom-function":!0,"property-function":!0,requires:["text-field"]},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",function:"interpolated","zoom-function":!0,requires:["text-field"]},"text-keep-upright":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":"line"}]},"text-transform":{type:"enum",function:"piecewise-constant","zoom-function":!0,"property-function":!0,values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"]},"text-offset":{type:"array",value:"number",units:"ems",function:"interpolated","zoom-function":!0,"property-function":!0,length:2,default:[0,0],requires:["text-field"]},"text-allow-overlap":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1,requires:["text-field"]},"text-ignore-placement":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1,requires:["text-field"]},"text-optional":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!1,requires:["text-field","icon-image"]},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function_stop:{type:"array",minimum:0,maximum:22,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},expression_name:{type:"enum",values:{let:{group:"Variable binding"},var:{group:"Variable binding"},literal:{group:"Types"},array:{group:"Types"},at:{group:"Lookup"},case:{group:"Decision"},match:{group:"Decision"},coalesce:{group:"Decision"},step:{group:"Ramps, scales, curves"},interpolate:{group:"Ramps, scales, curves"},ln2:{group:"Math"},pi:{group:"Math"},e:{group:"Math"},typeof:{group:"Types"},string:{group:"Types"},number:{group:"Types"},boolean:{group:"Types"},object:{group:"Types"},collator:{group:"Types"},"to-string":{group:"Types"},"to-number":{group:"Types"},"to-boolean":{group:"Types"},"to-rgba":{group:"Color"},"to-color":{group:"Types"},rgb:{group:"Color"},rgba:{group:"Color"},get:{group:"Lookup"},has:{group:"Lookup"},length:{group:"Lookup"},properties:{group:"Feature data"},"geometry-type":{group:"Feature data"},id:{group:"Feature data"},zoom:{group:"Zoom"},"heatmap-density":{group:"Heatmap"},"line-progress":{group:"Heatmap"},"+":{group:"Math"},"*":{group:"Math"},"-":{group:"Math"},"/":{group:"Math"},"%":{group:"Math"},"^":{group:"Math"},sqrt:{group:"Math"},log10:{group:"Math"},ln:{group:"Math"},log2:{group:"Math"},sin:{group:"Math"},cos:{group:"Math"},tan:{group:"Math"},asin:{group:"Math"},acos:{group:"Math"},atan:{group:"Math"},min:{group:"Math"},max:{group:"Math"},round:{group:"Math"},abs:{group:"Math"},ceil:{group:"Math"},floor:{group:"Math"},"==":{group:"Decision"},"!=":{group:"Decision"},">":{group:"Decision"},"<":{group:"Decision"},">=":{group:"Decision"},"<=":{group:"Decision"},all:{group:"Decision"},any:{group:"Decision"},"!":{group:"Decision"},"is-supported-script":{group:"String"},upcase:{group:"String"},downcase:{group:"String"},concat:{group:"String"},"resolved-locale":{group:"String"}}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},transition:!1,"zoom-function":!0,"property-function":!1,function:"piecewise-constant"},position:{type:"array",default:[1.15,210,30],length:3,value:"number",transition:!0,function:"interpolated","zoom-function":!0,"property-function":!1},color:{type:"color",default:"#ffffff",function:"interpolated","zoom-function":!0,"property-function":!1,transition:!0},intensity:{type:"number",default:.5,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,"property-function":!1,transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",function:"piecewise-constant","zoom-function":!0,default:!0},"fill-opacity":{type:"number",function:"interpolated","zoom-function":!0,"property-function":!0,default:1,minimum:0,maximum:1,transition:!0},"fill-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"fill-pattern"}]},"fill-outline-color":{type:"color",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}]},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],function:"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"fill-translate-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"map",requires:["fill-translate"]},"fill-pattern":{type:"string",function:"piecewise-constant","zoom-function":!0,transition:!0}},paint_line:{"line-opacity":{type:"number",function:"interpolated","zoom-function":!0,"property-function":!0,default:1,minimum:0,maximum:1,transition:!0},"line-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"line-pattern"}]},"line-translate":{type:"array",value:"number",length:2,default:[0,0],function:"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"line-translate-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"map",requires:["line-translate"]},"line-width":{type:"number",default:1,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-gap-width":{type:"number",default:0,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-offset":{type:"number",default:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-blur":{type:"number",default:0,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"line-dasharray":{type:"array",value:"number",function:"piecewise-constant","zoom-function":!0,minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}]},"line-pattern":{type:"string",function:"piecewise-constant","zoom-function":!0,transition:!0},"line-gradient":{type:"color",function:"interpolated","zoom-function":!1,"property-function":!1,transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}]}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"circle-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-blur":{type:"number",default:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],function:"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"circle-translate-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"map",requires:["circle-translate"]},"circle-pitch-scale":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"map"},"circle-pitch-alignment":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"viewport"},"circle-stroke-width":{type:"number",default:0,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"circle-stroke-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels"},"heatmap-weight":{type:"number",default:1,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!1},"heatmap-intensity":{type:"number",default:1,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!1,transition:!0},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],function:"interpolated","zoom-function":!1,"property-function":!1,transition:!1},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,"property-function":!1,transition:!0}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["icon-image"]},"icon-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["icon-image"]},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["icon-image"]},"icon-halo-width":{type:"number",default:0,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["icon-image"]},"icon-halo-blur":{type:"number",default:0,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["icon-image"]},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],function:"interpolated","zoom-function":!0,transition:!0,units:"pixels",requires:["icon-image"]},"icon-translate-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"]},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["text-field"]},"text-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["text-field"]},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:["text-field"]},"text-halo-width":{type:"number",default:0,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["text-field"]},"text-halo-blur":{type:"number",default:0,minimum:0,function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,units:"pixels",requires:["text-field"]},"text-translate":{type:"array",value:"number",length:2,default:[0,0],function:"interpolated","zoom-function":!0,transition:!0,units:"pixels",requires:["text-field"]},"text-translate-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"]}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,transition:!0},"raster-hue-rotate":{type:"number",default:0,period:360,function:"interpolated","zoom-function":!0,transition:!0,units:"degrees"},"raster-brightness-min":{type:"number",function:"interpolated","zoom-function":!0,default:0,minimum:0,maximum:1,transition:!0},"raster-brightness-max":{type:"number",function:"interpolated","zoom-function":!0,default:1,minimum:0,maximum:1,transition:!0},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,function:"interpolated","zoom-function":!0,transition:!0},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,function:"interpolated","zoom-function":!0,transition:!0},"raster-fade-duration":{type:"number",default:300,minimum:0,function:"interpolated","zoom-function":!0,transition:!1,units:"milliseconds"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,function:"interpolated","zoom-function":!0,transition:!1},"hillshade-illumination-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"viewport"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,transition:!0},"hillshade-shadow-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,transition:!0},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",function:"interpolated","zoom-function":!0,transition:!0},"hillshade-accent-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,transition:!0}},paint_background:{"background-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,transition:!0,requires:[{"!":"background-pattern"}]},"background-pattern":{type:"string",function:"piecewise-constant","zoom-function":!0,transition:!0},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,function:"interpolated","zoom-function":!0,transition:!0}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible"}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",function:"interpolated","zoom-function":!0,"property-function":!1,default:1,minimum:0,maximum:1,transition:!0},"fill-extrusion-color":{type:"color",default:"#000000",function:"interpolated","zoom-function":!0,"property-function":!0,transition:!0,requires:[{"!":"fill-extrusion-pattern"}]},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],function:"interpolated","zoom-function":!0,transition:!0,units:"pixels"},"fill-extrusion-translate-anchor":{type:"enum",function:"piecewise-constant","zoom-function":!0,values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"]},"fill-extrusion-pattern":{type:"string",function:"piecewise-constant","zoom-function":!0,transition:!0},"fill-extrusion-height":{type:"number",function:"interpolated","zoom-function":!0,"property-function":!0,default:0,minimum:0,units:"meters",transition:!0},"fill-extrusion-base":{type:"number",function:"interpolated","zoom-function":!0,"property-function":!0,default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"]}}},F=function(t,e,r,n){this.message=(t?t+": ":"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);};function P(t){var e=t.key,r=t.value;return r?[new F(e,r,"constants have been deprecated as of v8")]:[]}function T(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var o=i[n];for(var a in o)t[a]=o[a];}return t}function O(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function L(t){return Array.isArray(t)?t.map(L):O(t)}var j=function(t){function e(e,r){t.call(this,r),this.message=r,this.key=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),q=function(t,e){void 0===e&&(e=[]),this.parent=t,this.bindings={};for(var r=0,n=e;r<n.length;r+=1){var i=n[r],o=i[0],a=i[1];this.bindings[o]=a;}};q.prototype.concat=function(t){return new q(this,t)},q.prototype.get=function(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(t+" not found in scope.")},q.prototype.has=function(t){return!!this.bindings[t]||!!this.parent&&this.parent.has(t)};var R={kind:"null"},U={kind:"number"},D={kind:"string"},N={kind:"boolean"},Z={kind:"color"},K={kind:"object"},J={kind:"value"},$={kind:"collator"};function H(t,e){return{kind:"array",itemType:t,N:e}}function X(t){if("array"===t.kind){var e=X(t.itemType);return"number"==typeof t.N?"array<"+e+", "+t.N+">":"value"===t.itemType.kind?"array":"array<"+e+">"}return t.kind}var G=[R,U,D,N,Z,K,H(J)];function Y(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&!Y(t.itemType,e.itemType)&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null;if("value"===t.kind)for(var r=0,n=G;r<n.length;r+=1){if(!Y(n[r],e))return null}}return"Expected "+X(t)+" but found "+X(e)+" instead."}var W=n(function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function n(t){return(t=Math.round(t))<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}function o(t){return"%"===t[t.length-1]?n(parseFloat(t)/100*255):n(parseInt(t))}function a(t){return"%"===t[t.length-1]?i(parseFloat(t)/100):i(parseFloat(t))}function s(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,i=t.replace(/ /g,"").toLowerCase();if(i in r)return r[i].slice();if("#"===i[0])return 4===i.length?(e=parseInt(i.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===i.length&&(e=parseInt(i.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var u=i.indexOf("("),l=i.indexOf(")");if(-1!==u&&l+1===i.length){var p=i.substr(0,u),c=i.substr(u+1,l-(u+1)).split(","),h=1;switch(p){case"rgba":if(4!==c.length)return null;h=a(c.pop());case"rgb":return 3!==c.length?null:[o(c[0]),o(c[1]),o(c[2]),h];case"hsla":if(4!==c.length)return null;h=a(c.pop());case"hsl":if(3!==c.length)return null;var f=(parseFloat(c[0])%360+360)%360/360,y=a(c[1]),d=a(c[2]),v=d<=.5?d*(y+1):d+y-d*y,m=2*d-v;return[n(255*s(m,v,f+1/3)),n(255*s(m,v,f)),n(255*s(m,v,f-1/3)),h];default:return null}}return null};}catch(t){}}).parseCSSColor,Q=function(t,e,r,n){void 0===n&&(n=1),this.r=t,this.g=e,this.b=r,this.a=n;};Q.parse=function(t){if(t){if(t instanceof Q)return t;if("string"==typeof t){var e=W(t);if(e)return new Q(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3])}}},Q.prototype.toString=function(){var t=this.toArray(),e=t[0],r=t[1],n=t[2],i=t[3];return"rgba("+Math.round(e)+","+Math.round(r)+","+Math.round(n)+","+i+")"},Q.prototype.toArray=function(){var t=this.r,e=this.g,r=this.b,n=this.a;return 0===n?[0,0,0,0]:[255*t/n,255*e/n,255*r/n,n]},Q.black=new Q(0,0,0,1),Q.white=new Q(1,1,1,1),Q.transparent=new Q(0,0,0,0);var tt=function(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});};tt.prototype.compare=function(t,e){return this.collator.compare(t,e)},tt.prototype.resolvedLocale=function(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale};var et=function(t,e,r){this.type=$,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;};function rt(t,e,r,n){return"number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:"Invalid rgba value ["+[t,e,r,n].join(", ")+"]: 'a' must be between 0 and 1.":"Invalid rgba value ["+("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}function nt(t){if(null===t)return R;if("string"==typeof t)return D;if("boolean"==typeof t)return N;if("number"==typeof t)return U;if(t instanceof Q)return Z;if(t instanceof tt)return $;if(Array.isArray(t)){for(var e,r=t.length,n=0,i=t;n<i.length;n+=1){var o=nt(i[n]);if(e){if(e===o)continue;e=J;break}e=o;}return H(e||J,r)}return K}et.parse=function(t,e){if(2!==t.length)return e.error("Expected one argument.");var r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");var n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,N);if(!n)return null;var i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,N);if(!i)return null;var o=null;return r.locale&&!(o=e.parse(r.locale,1,D))?null:new et(n,i,o)},et.prototype.evaluate=function(t){return new tt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)},et.prototype.eachChild=function(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);},et.prototype.possibleOutputs=function(){return[void 0]},et.prototype.serialize=function(){var t={};return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]};var it=function(t,e){this.type=t,this.value=e;};it.parse=function(t,e){if(2!==t.length)return e.error("'literal' expression requires exactly one argument, but found "+(t.length-1)+" instead.");if(!function t(e){if(null===e)return!0;if("string"==typeof e)return!0;if("boolean"==typeof e)return!0;if("number"==typeof e)return!0;if(e instanceof Q)return!0;if(e instanceof tt)return!0;if(Array.isArray(e)){for(var r=0,n=e;r<n.length;r+=1)if(!t(n[r]))return!1;return!0}if("object"==typeof e){for(var i in e)if(!t(e[i]))return!1;return!0}return!1}(t[1]))return e.error("invalid value");var r=t[1],n=nt(r),i=e.expectedType;return"array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new it(n,r)},it.prototype.evaluate=function(){return this.value},it.prototype.eachChild=function(){},it.prototype.possibleOutputs=function(){return[this.value]},it.prototype.serialize=function(){return"array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Q?["rgba"].concat(this.value.toArray()):this.value};var ot=function(t){this.name="ExpressionEvaluationError",this.message=t;};ot.prototype.toJSON=function(){return this.message};var at={string:D,number:U,boolean:N,object:K},st=function(t,e){this.type=t,this.args=e;};st.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");for(var r=t[0],n=at[r],i=[],o=1;o<t.length;o++){var a=e.parse(t[o],o,J);if(!a)return null;i.push(a);}return new st(n,i)},st.prototype.evaluate=function(t){for(var e=0;e<this.args.length;e++){var r=this.args[e].evaluate(t);if(!Y(this.type,nt(r)))return r;if(e===this.args.length-1)throw new ot("Expected value to be of type "+X(this.type)+", but found "+X(nt(r))+" instead.")}return null},st.prototype.eachChild=function(t){this.args.forEach(t);},st.prototype.possibleOutputs=function(){return(t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}));var t;},st.prototype.serialize=function(){return[this.type.kind].concat(this.args.map(function(t){return t.serialize()}))};var ut={string:D,number:U,boolean:N},lt=function(t,e){this.type=t,this.input=e;};lt.parse=function(t,e){if(t.length<2||t.length>4)return e.error("Expected 1, 2, or 3 arguments, but found "+(t.length-1)+" instead.");var r,n;if(t.length>2){var i=t[1];if("string"!=typeof i||!(i in ut))return e.error('The item type argument of "array" must be one of string, number, boolean',1);r=ut[i];}else r=J;if(t.length>3){if("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2]))return e.error('The length argument to "array" must be a positive integer literal',2);n=t[2];}var o=H(r,n),a=e.parse(t[t.length-1],t.length-1,J);return a?new lt(o,a):null},lt.prototype.evaluate=function(t){var e=this.input.evaluate(t);if(Y(this.type,nt(e)))throw new ot("Expected value to be of type "+X(this.type)+", but found "+X(nt(e))+" instead.");return e},lt.prototype.eachChild=function(t){t(this.input);},lt.prototype.possibleOutputs=function(){return this.input.possibleOutputs()},lt.prototype.serialize=function(){var t=["array"],e=this.type.itemType;if("string"===e.kind||"number"===e.kind||"boolean"===e.kind){t.push(e.kind);var r=this.type.N;"number"==typeof r&&t.push(r);}return t.push(this.input.serialize()),t};var pt={"to-number":U,"to-color":Z},ct=function(t,e){this.type=t,this.args=e;};ct.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");for(var r=t[0],n=pt[r],i=[],o=1;o<t.length;o++){var a=e.parse(t[o],o,J);if(!a)return null;i.push(a);}return new ct(n,i)},ct.prototype.evaluate=function(t){if("color"===this.type.kind){for(var e,r,n=0,i=this.args;n<i.length;n+=1){if(r=null,"string"==typeof(e=i[n].evaluate(t))){var o=t.parseColor(e);if(o)return o}else if(Array.isArray(e)&&!(r=e.length<3||e.length>4?"Invalid rbga value "+JSON.stringify(e)+": expected an array containing either three or four numeric values.":rt(e[0],e[1],e[2],e[3])))return new Q(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new ot(r||"Could not parse color from value '"+("string"==typeof e?e:JSON.stringify(e))+"'")}for(var a=null,s=0,u=this.args;s<u.length;s+=1){if(null!==(a=u[s].evaluate(t))){var l=Number(a);if(!isNaN(l))return l}}throw new ot("Could not convert "+JSON.stringify(a)+" to number.")},ct.prototype.eachChild=function(t){this.args.forEach(t);},ct.prototype.possibleOutputs=function(){return(t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}));var t;},ct.prototype.serialize=function(){var t=["to-"+this.type.kind];return this.eachChild(function(e){t.push(e.serialize());}),t};var ht=["Unknown","Point","LineString","Polygon"],ft=function(){this._parseColorCache={};};ft.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},ft.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?ht[this.feature.type]:this.feature.type:null},ft.prototype.properties=function(){return this.feature&&this.feature.properties||{}},ft.prototype.parseColor=function(t){var e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Q.parse(t)),e};var yt=function(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;};function dt(t){if(t instanceof yt){if("get"===t.name&&1===t.args.length)return!1;if("has"===t.name&&1===t.args.length)return!1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return!1;if(/^filter-/.test(t.name))return!1}var e=!0;return t.eachChild(function(t){e&&!dt(t)&&(e=!1);}),e}function vt(t,e){if(t instanceof yt&&e.indexOf(t.name)>=0)return!1;var r=!0;return t.eachChild(function(t){r&&!vt(t,e)&&(r=!1);}),r}yt.prototype.evaluate=function(t){return this._evaluate(t,this.args)},yt.prototype.eachChild=function(t){this.args.forEach(t);},yt.prototype.possibleOutputs=function(){return[void 0]},yt.prototype.serialize=function(){return[this.name].concat(this.args.map(function(t){return t.serialize()}))},yt.parse=function(t,e){var r=t[0],n=yt.definitions[r];if(!n)return e.error('Unknown expression "'+r+'". If you wanted a literal array, use ["literal", [...]].',0);for(var i=Array.isArray(n)?n[0]:n.type,o=Array.isArray(n)?[[n[1],n[2]]]:n.overloads,a=o.filter(function(e){var r=e[0];return!Array.isArray(r)||r.length===t.length-1}),s=[],u=1;u<t.length;u++){var l=t[u],p=void 0;if(1===a.length){var c=a[0][0];p=Array.isArray(c)?c[u-1]:c.type;}var h=e.parse(l,1+s.length,p);if(!h)return null;s.push(h);}for(var f=null,y=0,d=a;y<d.length;y+=1){var v=d[y],m=v[0],g=v[1];if(f=new gt(e.registry,e.path,null,e.scope),Array.isArray(m)&&m.length!==s.length)f.error("Expected "+m.length+" arguments, but found "+s.length+" instead.");else{for(var x=0;x<s.length;x++){var b=Array.isArray(m)?m[x]:m.type,w=s[x];f.concat(x+1).checkSubtype(b,w.type);}if(0===f.errors.length)return new yt(r,i,g,s)}}if(1===a.length)e.errors.push.apply(e.errors,f.errors);else{var _=(a.length?a:o).map(function(t){var e,r=t[0];return e=r,Array.isArray(e)?"("+e.map(X).join(", ")+")":"("+X(e.type)+"...)"}).join(" | "),A=s.map(function(t){return X(t.type)}).join(", ");e.error("Expected arguments of type "+_+", but found ("+A+") instead.");}return null},yt.register=function(t,e){for(var r in yt.definitions=e,e)t[r]=yt;};var mt=function(t,e){this.type=e.type,this.name=t,this.boundExpression=e;};mt.parse=function(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");var r=t[1];return e.scope.has(r)?new mt(r,e.scope.get(r)):e.error('Unknown variable "'+r+'". Make sure "'+r+'" has been bound in an enclosing "let" expression before using it.',1)},mt.prototype.evaluate=function(t){return this.boundExpression.evaluate(t)},mt.prototype.eachChild=function(){},mt.prototype.possibleOutputs=function(){return[void 0]},mt.prototype.serialize=function(){return["var",this.name]};var gt=function(t,e,r,n,i){void 0===e&&(e=[]),void 0===n&&(n=new q),void 0===i&&(i=[]),this.registry=t,this.path=e,this.key=e.map(function(t){return"["+t+"]"}).join(""),this.scope=n,this.errors=i,this.expectedType=r;};function xt(t,e){for(var r,n,i=0,o=t.length-1,a=0;i<=o;){if(r=t[a=Math.floor((i+o)/2)],n=t[a+1],e===r||e>r&&e<n)return a;if(r<e)i=a+1;else{if(!(r>e))throw new ot("Input is not a number.");o=a-1;}}return Math.max(a-1,0)}gt.prototype.parse=function(t,e,r,n,i){return void 0===i&&(i={}),e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)},gt.prototype._parse=function(t,e){if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');var r=t[0];if("string"!=typeof r)return this.error("Expression name must be a string, but found "+typeof r+' instead. If you wanted a literal array, use ["literal", [...]].',0),null;var n=this.registry[r];if(n){var i=n.parse(t,this);if(!i)return null;if(this.expectedType){var o=this.expectedType,a=i.type;if("string"!==o.kind&&"number"!==o.kind&&"boolean"!==o.kind&&"object"!==o.kind||"value"!==a.kind)if("array"===o.kind&&"value"===a.kind)e.omitTypeAnnotations||(i=new lt(o,i));else if("color"!==o.kind||"value"!==a.kind&&"string"!==a.kind){if(this.checkSubtype(this.expectedType,i.type))return null}else e.omitTypeAnnotations||(i=new ct(o,[i]));else e.omitTypeAnnotations||(i=new st(o,[i]));}if(!(i instanceof it)&&function t(e){if(e instanceof mt)return t(e.boundExpression);if(e instanceof yt&&"error"===e.name)return!1;if(e instanceof et)return!1;var r=e instanceof ct||e instanceof st||e instanceof lt;var n=!0;e.eachChild(function(e){n=r?n&&t(e):n&&e instanceof it;});if(!n)return!1;return dt(e)&&vt(e,["zoom","heatmap-density","line-progress","is-supported-script"])}(i)){var s=new ft;try{i=new it(i.type,i.evaluate(s));}catch(t){return this.error(t.message),null}}return i}return this.error('Unknown expression "'+r+'". If you wanted a literal array, use ["literal", [...]].',0)}return void 0===t?this.error("'undefined' value invalid. Use null instead."):"object"==typeof t?this.error('Bare objects invalid. Use ["literal", {...}] instead.'):this.error("Expected an array, but found "+typeof t+" instead.")},gt.prototype.concat=function(t,e,r){var n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new gt(this.registry,n,e||null,i,this.errors)},gt.prototype.error=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var n=""+this.key+e.map(function(t){return"["+t+"]"}).join("");this.errors.push(new j(n,t));},gt.prototype.checkSubtype=function(t,e){var r=Y(t,e);return r&&this.error(r),r};var bt=function(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(var n=0,i=r;n<i.length;n+=1){var o=i[n],a=o[0],s=o[1];this.labels.push(a),this.outputs.push(s);}};function wt(t,e,r){return t*(1-r)+e*r}bt.parse=function(t,e){var r=t[1],n=t.slice(2);if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(!(r=e.parse(r,1,U)))return null;var i=[],o=null;e.expectedType&&"value"!==e.expectedType.kind&&(o=e.expectedType),n.unshift(-1/0);for(var a=0;a<n.length;a+=2){var s=n[a],u=n[a+1],l=a+1,p=a+2;if("number"!=typeof s)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',l);if(i.length&&i[i.length-1][0]>=s)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',l);var c=e.parse(u,p,o);if(!c)return null;o=o||c.type,i.push([s,c]);}return new bt(o,r,i)},bt.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[xt(e,n)].evaluate(t)},bt.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},bt.prototype.possibleOutputs=function(){return(t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()}));var t;},bt.prototype.serialize=function(){for(var t=["step",this.input.serialize()],e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize());return t};var _t=Object.freeze({number:wt,color:function(t,e,r){return new Q(wt(t.r,e.r,r),wt(t.g,e.g,r),wt(t.b,e.b,r),wt(t.a,e.a,r))},array:function(t,e,r){return t.map(function(t,n){return wt(t,e[n],r)})}}),At=function(t,e,r,n){this.type=t,this.interpolation=e,this.input=r,this.labels=[],this.outputs=[];for(var i=0,o=n;i<o.length;i+=1){var a=o[i],s=a[0],u=a[1];this.labels.push(s),this.outputs.push(u);}};function kt(t,e,r,n){var i=n-r,o=t-r;return 0===i?0:1===e?o/i:(Math.pow(e,o)-1)/(Math.pow(e,i)-1)}At.interpolationFactor=function(t,e,r,n){var o=0;if("exponential"===t.name)o=kt(e,t.base,r,n);else if("linear"===t.name)o=kt(e,1,r,n);else if("cubic-bezier"===t.name){var a=t.controlPoints;o=new i(a[0],a[1],a[2],a[3]).solve(kt(e,1,r,n));}return o},At.parse=function(t,e){var r=t[1],n=t[2],i=t.slice(3);if(!Array.isArray(r)||0===r.length)return e.error("Expected an interpolation type expression.",1);if("linear"===r[0])r={name:"linear"};else if("exponential"===r[0]){var o=r[1];if("number"!=typeof o)return e.error("Exponential interpolation requires a numeric base.",1,1);r={name:"exponential",base:o};}else{if("cubic-bezier"!==r[0])return e.error("Unknown interpolation type "+String(r[0]),1,0);var a=r.slice(1);if(4!==a.length||a.some(function(t){return"number"!=typeof t||t<0||t>1}))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);r={name:"cubic-bezier",controlPoints:a};}if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(!(n=e.parse(n,2,U)))return null;var s=[],u=null;e.expectedType&&"value"!==e.expectedType.kind&&(u=e.expectedType);for(var l=0;l<i.length;l+=2){var p=i[l],c=i[l+1],h=l+3,f=l+4;if("number"!=typeof p)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',h);if(s.length&&s[s.length-1][0]>=p)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',h);var y=e.parse(c,f,u);if(!y)return null;u=u||y.type,s.push([p,y]);}return"number"===u.kind||"color"===u.kind||"array"===u.kind&&"number"===u.itemType.kind&&"number"==typeof u.N?new At(u,r,n,s):e.error("Type "+X(u)+" is not interpolatable.")},At.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);var o=xt(e,n),a=e[o],s=e[o+1],u=At.interpolationFactor(this.interpolation,n,a,s),l=r[o].evaluate(t),p=r[o+1].evaluate(t);return _t[this.type.kind.toLowerCase()](l,p,u)},At.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},At.prototype.possibleOutputs=function(){return(t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()}));var t;},At.prototype.serialize=function(){for(var t=["interpolate","linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints),this.input.serialize()],e=0;e<this.labels.length;e++)t.push(this.labels[e],this.outputs[e].serialize());return t};var zt=function(t,e){this.type=t,this.args=e;};zt.parse=function(t,e){if(t.length<2)return e.error("Expectected at least one argument.");var r=null,n=e.expectedType;n&&"value"!==n.kind&&(r=n);for(var i=[],o=0,a=t.slice(1);o<a.length;o+=1){var s=a[o],u=e.parse(s,1+i.length,r,void 0,{omitTypeAnnotations:!0});if(!u)return null;r=r||u.type,i.push(u);}var l=n&&i.some(function(t){return Y(n,t.type)});return new zt(l?J:r,i)},zt.prototype.evaluate=function(t){for(var e=null,r=0,n=this.args;r<n.length;r+=1){if(null!==(e=n[r].evaluate(t)))break}return e},zt.prototype.eachChild=function(t){this.args.forEach(t);},zt.prototype.possibleOutputs=function(){return(t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}));var t;},zt.prototype.serialize=function(){var t=["coalesce"];return this.eachChild(function(e){t.push(e.serialize());}),t};var St=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;};St.prototype.evaluate=function(t){return this.result.evaluate(t)},St.prototype.eachChild=function(t){for(var e=0,r=this.bindings;e<r.length;e+=1){t(r[e][1]);}t(this.result);},St.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.");for(var r=[],n=1;n<t.length-1;n+=2){var i=t[n];if("string"!=typeof i)return e.error("Expected string, but found "+typeof i+" instead.",n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);var o=e.parse(t[n+1],n+1);if(!o)return null;r.push([i,o]);}var a=e.parse(t[t.length-1],t.length-1,void 0,r);return a?new St(r,a):null},St.prototype.possibleOutputs=function(){return this.result.possibleOutputs()},St.prototype.serialize=function(){for(var t=["let"],e=0,r=this.bindings;e<r.length;e+=1){var n=r[e],i=n[0],o=n[1];t.push(i,o.serialize());}return t.push(this.result.serialize()),t};var Mt=function(t,e,r){this.type=t,this.index=e,this.input=r;};Mt.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,U),n=e.parse(t[2],2,H(e.expectedType||J));if(!r||!n)return null;var i=n.type;return new Mt(i.itemType,r,n)},Mt.prototype.evaluate=function(t){var e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new ot("Array index out of bounds: "+e+" < 0.");if(e>=r.length)throw new ot("Array index out of bounds: "+e+" > "+(r.length-1)+".");if(e!==Math.floor(e))throw new ot("Array index must be an integer, but found "+e+" instead.");return r[e]},Mt.prototype.eachChild=function(t){t(this.index),t(this.input);},Mt.prototype.possibleOutputs=function(){return[void 0]},Mt.prototype.serialize=function(){return["at",this.index.serialize(),this.input.serialize()]};var Vt=function(t,e,r,n,i,o){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=o;};Vt.parse=function(t,e){if(t.length<5)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if(t.length%2!=1)return e.error("Expected an even number of arguments.");var r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);for(var i={},o=[],a=2;a<t.length-1;a+=2){var s=t[a],u=t[a+1];Array.isArray(s)||(s=[s]);var l=e.concat(a);if(0===s.length)return l.error("Expected at least one branch label.");for(var p=0,c=s;p<c.length;p+=1){var h=c[p];if("number"!=typeof h&&"string"!=typeof h)return l.error("Branch labels must be numbers or strings.");if("number"==typeof h&&Math.abs(h)>Number.MAX_SAFE_INTEGER)return l.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".");if("number"==typeof h&&Math.floor(h)!==h)return l.error("Numeric branch labels must be integer values.");if(r){if(l.checkSubtype(r,nt(h)))return null}else r=nt(h);if(void 0!==i[String(h)])return l.error("Branch labels must be unique.");i[String(h)]=o.length;}var f=e.parse(u,a,n);if(!f)return null;n=n||f.type,o.push(f);}var y=e.parse(t[1],1,r);if(!y)return null;var d=e.parse(t[t.length-1],t.length-1,n);return d?new Vt(r,n,y,i,o,d):null},Vt.prototype.evaluate=function(t){var e=this.input.evaluate(t);return(this.outputs[this.cases[e]]||this.otherwise).evaluate(t)},Vt.prototype.eachChild=function(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);},Vt.prototype.possibleOutputs=function(){return(t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()})).concat(this.otherwise.possibleOutputs());var t;},Vt.prototype.serialize=function(){for(var t=this,e=["match",this.input.serialize()],r=[],n={},i=0,o=Object.keys(this.cases).sort();i<o.length;i+=1){var a=o[i],s=n[t.cases[a]];void 0===s?(n[t.cases[a]]=r.length,r.push([t.cases[a],[a]])):r[s][1].push(a);}for(var u=function(e){return"number"===t.input.type.kind?Number(e):e},l=0,p=r;l<p.length;l+=1){var c=p[l],h=c[0],f=c[1];1===f.length?e.push(u(f[0])):e.push(f.map(u)),e.push(t.outputs[h].serialize());}return e.push(this.otherwise.serialize()),e};var Bt=function(t,e,r){this.type=t,this.branches=e,this.otherwise=r;};function Ct(t){return"string"===t.kind||"number"===t.kind||"boolean"===t.kind||"null"===t.kind}function It(t,e){return function(){function r(t,e,r){this.type=N,this.lhs=t,this.rhs=e,this.collator=r;}return r.parse=function(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");var n=e.parse(t[1],1,J);if(!n)return null;var i=e.parse(t[2],2,J);if(!i)return null;if(!Ct(n.type)&&!Ct(i.type))return e.error("Expected at least one argument to be a string, number, boolean, or null, but found ("+X(n.type)+", "+X(i.type)+") instead.");if(n.type.kind!==i.type.kind&&"value"!==n.type.kind&&"value"!==i.type.kind)return e.error("Cannot compare "+X(n.type)+" and "+X(i.type)+".");var o=null;if(4===t.length){if("string"!==n.type.kind&&"string"!==i.type.kind)return e.error("Cannot use collator to compare non-string types.");if(!(o=e.parse(t[3],3,$)))return null}return new r(n,i,o)},r.prototype.evaluate=function(t){var r=this.collator?0===this.collator.evaluate(t).compare(this.lhs.evaluate(t),this.rhs.evaluate(t)):this.lhs.evaluate(t)===this.rhs.evaluate(t);return e?!r:r},r.prototype.eachChild=function(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);},r.prototype.possibleOutputs=function(){return[!0,!1]},r.prototype.serialize=function(){var e=[t];return this.eachChild(function(t){e.push(t.serialize());}),e},r}()}Bt.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found only "+(t.length-1)+".");if(t.length%2!=0)return e.error("Expected an odd number of arguments.");var r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);for(var n=[],i=1;i<t.length-1;i+=2){var o=e.parse(t[i],i,N);if(!o)return null;var a=e.parse(t[i+1],i+1,r);if(!a)return null;n.push([o,a]),r=r||a.type;}var s=e.parse(t[t.length-1],t.length-1,r);return s?new Bt(r,n,s):null},Bt.prototype.evaluate=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],o=n[1];if(i.evaluate(t))return o.evaluate(t)}return this.otherwise.evaluate(t)},Bt.prototype.eachChild=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],o=n[1];t(i),t(o);}t(this.otherwise);},Bt.prototype.possibleOutputs=function(){return(t=[]).concat.apply(t,this.branches.map(function(t){t[0];return t[1].possibleOutputs()})).concat(this.otherwise.possibleOutputs());var t;},Bt.prototype.serialize=function(){var t=["case"];return this.eachChild(function(e){t.push(e.serialize());}),t};var Et=It("==",!1),Ft=It("!=",!0),Pt=function(t){this.type=U,this.input=t;};Pt.parse=function(t,e){if(2!==t.length)return e.error("Expected 1 argument, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error("Expected argument of type string or array, but found "+X(r.type)+" instead."):new Pt(r):null},Pt.prototype.evaluate=function(t){var e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new ot("Expected value to be of type string or array, but found "+X(nt(e))+" instead.")},Pt.prototype.eachChild=function(t){t(this.input);},Pt.prototype.possibleOutputs=function(){return[void 0]},Pt.prototype.serialize=function(){var t=["length"];return this.eachChild(function(e){t.push(e.serialize());}),t};var Tt={"==":Et,"!=":Ft,array:lt,at:Mt,boolean:st,case:Bt,coalesce:zt,collator:et,interpolate:At,length:Pt,let:St,literal:it,match:Vt,number:st,object:st,step:bt,string:st,"to-color":ct,"to-number":ct,var:mt};function Ot(t,e){var r=e[0],n=e[1],i=e[2],o=e[3];r=r.evaluate(t),n=n.evaluate(t),i=i.evaluate(t);var a=o?o.evaluate(t):1,s=rt(r,n,i,a);if(s)throw new ot(s);return new Q(r/255*a,n/255*a,i/255*a,a)}function Lt(t,e){return t in e}function jt(t,e){var r=e[t];return void 0===r?null:r}function qt(t,e){var r=e[0],n=e[1];return r.evaluate(t)<n.evaluate(t)}function Rt(t,e){var r=e[0],n=e[1];return r.evaluate(t)>n.evaluate(t)}function Ut(t,e){var r=e[0],n=e[1];return r.evaluate(t)<=n.evaluate(t)}function Dt(t,e){var r=e[0],n=e[1];return r.evaluate(t)>=n.evaluate(t)}function Nt(t){return{type:t}}function Zt(t){return{result:"success",value:t}}function Kt(t){return{result:"error",value:t}}yt.register(Tt,{error:[{kind:"error"},[D],function(t,e){var r=e[0];throw new ot(r.evaluate(t))}],typeof:[D,[J],function(t,e){return X(nt(e[0].evaluate(t)))}],"to-string":[D,[J],function(t,e){var r=e[0],n=typeof(r=r.evaluate(t));return null===r?"":"string"===n||"number"===n||"boolean"===n?String(r):r instanceof Q?r.toString():JSON.stringify(r)}],"to-boolean":[N,[J],function(t,e){var r=e[0];return Boolean(r.evaluate(t))}],"to-rgba":[H(U,4),[Z],function(t,e){return e[0].evaluate(t).toArray()}],rgb:[Z,[U,U,U],Ot],rgba:[Z,[U,U,U,U],Ot],has:{type:N,overloads:[[[D],function(t,e){return Lt(e[0].evaluate(t),t.properties())}],[[D,K],function(t,e){var r=e[0],n=e[1];return Lt(r.evaluate(t),n.evaluate(t))}]]},get:{type:J,overloads:[[[D],function(t,e){return jt(e[0].evaluate(t),t.properties())}],[[D,K],function(t,e){var r=e[0],n=e[1];return jt(r.evaluate(t),n.evaluate(t))}]]},properties:[K,[],function(t){return t.properties()}],"geometry-type":[D,[],function(t){return t.geometryType()}],id:[J,[],function(t){return t.id()}],zoom:[U,[],function(t){return t.globals.zoom}],"heatmap-density":[U,[],function(t){return t.globals.heatmapDensity||0}],"line-progress":[U,[],function(t){return t.globals.lineProgress||0}],"+":[U,Nt(U),function(t,e){for(var r=0,n=0,i=e;n<i.length;n+=1){r+=i[n].evaluate(t);}return r}],"*":[U,Nt(U),function(t,e){for(var r=1,n=0,i=e;n<i.length;n+=1){r*=i[n].evaluate(t);}return r}],"-":{type:U,overloads:[[[U,U],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)-n.evaluate(t)}],[[U],function(t,e){return-e[0].evaluate(t)}]]},"/":[U,[U,U],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)/n.evaluate(t)}],"%":[U,[U,U],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)%n.evaluate(t)}],ln2:[U,[],function(){return Math.LN2}],pi:[U,[],function(){return Math.PI}],e:[U,[],function(){return Math.E}],"^":[U,[U,U],function(t,e){var r=e[0],n=e[1];return Math.pow(r.evaluate(t),n.evaluate(t))}],sqrt:[U,[U],function(t,e){var r=e[0];return Math.sqrt(r.evaluate(t))}],log10:[U,[U],function(t,e){var r=e[0];return Math.log10(r.evaluate(t))}],ln:[U,[U],function(t,e){var r=e[0];return Math.log(r.evaluate(t))}],log2:[U,[U],function(t,e){var r=e[0];return Math.log2(r.evaluate(t))}],sin:[U,[U],function(t,e){var r=e[0];return Math.sin(r.evaluate(t))}],cos:[U,[U],function(t,e){var r=e[0];return Math.cos(r.evaluate(t))}],tan:[U,[U],function(t,e){var r=e[0];return Math.tan(r.evaluate(t))}],asin:[U,[U],function(t,e){var r=e[0];return Math.asin(r.evaluate(t))}],acos:[U,[U],function(t,e){var r=e[0];return Math.acos(r.evaluate(t))}],atan:[U,[U],function(t,e){var r=e[0];return Math.atan(r.evaluate(t))}],min:[U,Nt(U),function(t,e){return Math.min.apply(Math,e.map(function(e){return e.evaluate(t)}))}],max:[U,Nt(U),function(t,e){return Math.max.apply(Math,e.map(function(e){return e.evaluate(t)}))}],abs:[U,[U],function(t,e){var r=e[0];return Math.abs(r.evaluate(t))}],round:[U,[U],function(t,e){var r=e[0].evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[U,[U],function(t,e){var r=e[0];return Math.floor(r.evaluate(t))}],ceil:[U,[U],function(t,e){var r=e[0];return Math.ceil(r.evaluate(t))}],"filter-==":[N,[D,J],function(t,e){var r=e[0],n=e[1];return t.properties()[r.value]===n.value}],"filter-id-==":[N,[J],function(t,e){var r=e[0];return t.id()===r.value}],"filter-type-==":[N,[D],function(t,e){var r=e[0];return t.geometryType()===r.value}],"filter-<":[N,[D,J],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],o=n.value;return typeof i==typeof o&&i<o}],"filter-id-<":[N,[J],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<i}],"filter->":[N,[D,J],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],o=n.value;return typeof i==typeof o&&i>o}],"filter-id->":[N,[J],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>i}],"filter-<=":[N,[D,J],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],o=n.value;return typeof i==typeof o&&i<=o}],"filter-id-<=":[N,[J],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<=i}],"filter->=":[N,[D,J],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],o=n.value;return typeof i==typeof o&&i>=o}],"filter-id->=":[N,[J],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>=i}],"filter-has":[N,[J],function(t,e){return e[0].value in t.properties()}],"filter-has-id":[N,[],function(t){return null!==t.id()}],"filter-type-in":[N,[H(D)],function(t,e){return e[0].value.indexOf(t.geometryType())>=0}],"filter-id-in":[N,[H(J)],function(t,e){return e[0].value.indexOf(t.id())>=0}],"filter-in-small":[N,[D,H(J)],function(t,e){var r=e[0];return e[1].value.indexOf(t.properties()[r.value])>=0}],"filter-in-large":[N,[D,H(J)],function(t,e){var r=e[0],n=e[1];return function(t,e,r,n){for(;r<=n;){var i=r+n>>1;if(e[i]===t)return!0;e[i]>t?n=i-1:r=i+1;}return!1}(t.properties()[r.value],n.value,0,n.value.length-1)}],">":{type:N,overloads:[[[U,U],Rt],[[D,D],Rt],[[D,D,$],function(t,e){var r=e[0],n=e[1];return e[2].evaluate(t).compare(r.evaluate(t),n.evaluate(t))>0}]]},"<":{type:N,overloads:[[[U,U],qt],[[D,D],qt],[[D,D,$],function(t,e){var r=e[0],n=e[1];return e[2].evaluate(t).compare(r.evaluate(t),n.evaluate(t))<0}]]},">=":{type:N,overloads:[[[U,U],Dt],[[D,D],Dt],[[D,D,$],function(t,e){var r=e[0],n=e[1];return e[2].evaluate(t).compare(r.evaluate(t),n.evaluate(t))>=0}]]},"<=":{type:N,overloads:[[[U,U],Ut],[[D,D],Ut],[[D,D,$],function(t,e){var r=e[0],n=e[1];return e[2].evaluate(t).compare(r.evaluate(t),n.evaluate(t))<=0}]]},all:{type:N,overloads:[[[N,N],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)&&n.evaluate(t)}],[Nt(N),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(!n[r].evaluate(t))return!1}return!0}]]},any:{type:N,overloads:[[[N,N],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)||n.evaluate(t)}],[Nt(N),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(n[r].evaluate(t))return!0}return!1}]]},"!":[N,[N],function(t,e){return!e[0].evaluate(t)}],"is-supported-script":[N,[D],function(t,e){var r=e[0],n=t.globals&&t.globals.isSupportedScript;return!n||n(r.evaluate(t))}],upcase:[D,[D],function(t,e){return e[0].evaluate(t).toUpperCase()}],downcase:[D,[D],function(t,e){return e[0].evaluate(t).toLowerCase()}],concat:[D,Nt(D),function(t,e){return e.map(function(e){return e.evaluate(t)}).join("")}],"resolved-locale":[D,[$],function(t,e){return e[0].evaluate(t).resolvedLocale()}]});var Jt=.95047,$t=1,Ht=1.08883,Xt=4/29,Gt=6/29,Yt=3*Gt*Gt,Wt=Gt*Gt*Gt,Qt=Math.PI/180,te=180/Math.PI;function ee(t){return t>Wt?Math.pow(t,1/3):t/Yt+Xt}function re(t){return t>Gt?t*t*t:Yt*(t-Xt)}function ne(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function ie(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function oe(t){var e=ie(t.r),r=ie(t.g),n=ie(t.b),i=ee((.4124564*e+.3575761*r+.1804375*n)/Jt),o=ee((.2126729*e+.7151522*r+.072175*n)/$t);return{l:116*o-16,a:500*(i-o),b:200*(o-ee((.0193339*e+.119192*r+.9503041*n)/Ht)),alpha:t.a}}function ae(t){var e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=$t*re(e),r=Jt*re(r),n=Ht*re(n),new Q(ne(3.2404542*r-1.5371385*e-.4985314*n),ne(-.969266*r+1.8760108*e+.041556*n),ne(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}var se={forward:oe,reverse:ae,interpolate:function(t,e,r){return{l:wt(t.l,e.l,r),a:wt(t.a,e.a,r),b:wt(t.b,e.b,r),alpha:wt(t.alpha,e.alpha,r)}}},ue={forward:function(t){var e=oe(t),r=e.l,n=e.a,i=e.b,o=Math.atan2(i,n)*te;return{h:o<0?o+360:o,c:Math.sqrt(n*n+i*i),l:r,alpha:t.a}},reverse:function(t){var e=t.h*Qt,r=t.c;return ae({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return{h:function(t,e,r){var n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}(t.h,e.h,r),c:wt(t.c,e.c,r),l:wt(t.l,e.l,r),alpha:wt(t.alpha,e.alpha,r)}}},le=Object.freeze({lab:se,hcl:ue});function pe(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function ce(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function he(t){return t}function fe(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function ye(t,e,r,n,i){return fe(typeof r===i?n[r]:void 0,t.default,e.default)}function de(t,e,r){if("number"!==pe(r))return fe(t.default,e.default);var n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];var i=ge(t.stops,r);return t.stops[i][1]}function ve(t,e,r){var n=void 0!==t.base?t.base:1;if("number"!==pe(r))return fe(t.default,e.default);var i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];var o=ge(t.stops,r),a=function(t,e,r,n){var i=n-r,o=t-r;return 0===i?0:1===e?o/i:(Math.pow(e,o)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[o][0],t.stops[o+1][0]),s=t.stops[o][1],u=t.stops[o+1][1],l=_t[e.type]||he;if(t.colorSpace&&"rgb"!==t.colorSpace){var p=le[t.colorSpace];l=function(t,e){return p.reverse(p.interpolate(p.forward(t),p.forward(e),a))};}return"function"==typeof s.evaluate?{evaluate:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var r=s.evaluate.apply(void 0,t),n=u.evaluate.apply(void 0,t);if(void 0!==r&&void 0!==n)return l(r,n,a)}}:l(s,u,a)}function me(t,e,r){return"color"===e.type?r=Q.parse(r):pe(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),fe(r,t.default,e.default)}function ge(t,e){for(var r,n,i=0,o=t.length-1,a=0;i<=o;){if(r=t[a=Math.floor((i+o)/2)][0],n=t[a+1][0],e===r||e>r&&e<n)return a;r<e?i=a+1:r>e&&(o=a-1);}return Math.max(a-1,0)}var xe=function(t,e){var r;this.expression=t,this._warningHistory={},this._defaultValue="color"===(r=e).type&&ce(r.default)?new Q(0,0,0,0):"color"===r.type?Q.parse(r.default)||null:void 0===r.default?null:r.default,"enum"===e.type&&(this._enumValues=e.values);};function be(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in Tt}function we(t,e){var r=new gt(Tt,[],function(t){var e={color:Z,string:D,number:U,enum:D,boolean:N};if("array"===t.type)return H(e[t.value]||J,t.length);return e[t.type]||null}(e)),n=r.parse(t);return n?Zt(new xe(n,e)):Kt(r.errors)}xe.prototype.evaluateWithoutErrorHandling=function(t,e){return this._evaluator||(this._evaluator=new ft),this._evaluator.globals=t,this._evaluator.feature=e,this.expression.evaluate(this._evaluator)},xe.prototype.evaluate=function(t,e){this._evaluator||(this._evaluator=new ft),this._evaluator.globals=t,this._evaluator.feature=e;try{var r=this.expression.evaluate(this._evaluator);if(null==r)return this._defaultValue;if(this._enumValues&&!(r in this._enumValues))throw new ot("Expected value to be one of "+Object.keys(this._enumValues).map(function(t){return JSON.stringify(t)}).join(", ")+", but found "+JSON.stringify(r)+" instead.");return r}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}};var _e=function(t,e){this.kind=t,this._styleExpression=e;};_e.prototype.evaluateWithoutErrorHandling=function(t,e){return this._styleExpression.evaluateWithoutErrorHandling(t,e)},_e.prototype.evaluate=function(t,e){return this._styleExpression.evaluate(t,e)};var Ae=function(t,e,r){this.kind=t,this.zoomStops=r.labels,this._styleExpression=e,r instanceof At&&(this._interpolationType=r.interpolation);};function ke(t,e){if("error"===(t=we(t,e)).result)return t;var r=t.value.expression,n=dt(r);if(!n&&!e["property-function"])return Kt([new j("","property expressions not supported")]);var i=vt(r,["zoom"]);if(!i&&!1===e["zoom-function"])return Kt([new j("","zoom expressions not supported")]);var o=function t(e){var r=null;if(e instanceof St)r=t(e.result);else if(e instanceof zt)for(var n=0,i=e.args;n<i.length;n+=1){var o=i[n];if(r=t(o))break}else(e instanceof bt||e instanceof At)&&e.input instanceof yt&&"zoom"===e.input.name&&(r=e);if(r instanceof j)return r;e.eachChild(function(e){var n=t(e);n instanceof j?r=n:!r&&n?r=new j("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&n&&r!==n&&(r=new j("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));});return r}(r);return o||i?o instanceof j?Kt([o]):o instanceof At&&"piecewise-constant"===e.function?Kt([new j("",'"interpolate" expressions cannot be used with this property')]):Zt(o?new Ae(n?"camera":"composite",t.value,o):new _e(n?"constant":"source",t.value)):Kt([new j("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}Ae.prototype.evaluateWithoutErrorHandling=function(t,e){return this._styleExpression.evaluateWithoutErrorHandling(t,e)},Ae.prototype.evaluate=function(t,e){return this._styleExpression.evaluate(t,e)},Ae.prototype.interpolationFactor=function(t,e,r){return this._interpolationType?At.interpolationFactor(this._interpolationType,t,e,r):0};var ze=function(t,e){this._parameters=t,this._specification=e,T(this,function t(e,r){var n,i,o,a="color"===r.type,s=e.stops&&"object"==typeof e.stops[0][0],u=s||void 0!==e.property,l=s||!u,p=e.type||("interpolated"===r.function?"exponential":"interval");if(a&&((e=T({},e)).stops&&(e.stops=e.stops.map(function(t){return[t[0],Q.parse(t[1])]})),e.default?e.default=Q.parse(e.default):e.default=Q.parse(r.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!le[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace);if("exponential"===p)n=ve;else if("interval"===p)n=de;else if("categorical"===p){n=ye,i=Object.create(null);for(var c=0,h=e.stops;c<h.length;c+=1){var f=h[c];i[f[0]]=f[1];}o=typeof e.stops[0][0];}else{if("identity"!==p)throw new Error('Unknown function type "'+p+'"');n=me;}if(s){for(var y={},d=[],v=0;v<e.stops.length;v++){var m=e.stops[v],g=m[0].zoom;void 0===y[g]&&(y[g]={zoom:g,type:e.type,property:e.property,default:e.default,stops:[]},d.push(g)),y[g].stops.push([m[0].value,m[1]]);}for(var x=[],b=0,w=d;b<w.length;b+=1){var _=w[b];x.push([y[_].zoom,t(y[_],r)]);}return{kind:"composite",interpolationFactor:At.interpolationFactor.bind(void 0,{name:"linear"}),zoomStops:x.map(function(t){return t[0]}),evaluate:function(t,n){var i=t.zoom;return ve({stops:x,base:e.base},r,i).evaluate(i,n)}}}return l?{kind:"camera",interpolationFactor:"exponential"===p?At.interpolationFactor.bind(void 0,{name:"exponential",base:void 0!==e.base?e.base:1}):function(){return 0},zoomStops:e.stops.map(function(t){return t[0]}),evaluate:function(t){var a=t.zoom;return n(e,r,a,i,o)}}:{kind:"source",evaluate:function(t,a){var s=a&&a.properties?a.properties[e.property]:void 0;return void 0===s?fe(e.default,r.default):n(e,r,s,i,o)}}}(this._parameters,this._specification));};function Se(t,e){if(ce(t))return new ze(t,e);if(be(t)){var r=ke(t,e);if("error"===r.result)throw new Error(r.value.map(function(t){return t.key+": "+t.message}).join(", "));return r.value}var n=t;return"string"==typeof t&&"color"===e.type&&(n=Q.parse(t)),{kind:"constant",evaluate:function(){return n}}}function Me(t){var e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},o=t.style,a=t.styleSpec,s=[],u=pe(r);if("object"!==u)return[new F(e,r,"object expected, "+u+" found")];for(var l in r){var p=l.split(".")[0],c=n[p]||n["*"],h=void 0;if(i[p])h=i[p];else if(n[p])h=Ye;else if(i["*"])h=i["*"];else{if(!n["*"]){s.push(new F(e,r[l],'unknown property "'+l+'"'));continue}h=Ye;}s=s.concat(h({key:(e?e+".":e)+l,value:r[l],valueSpec:c,style:o,styleSpec:a,object:r,objectKey:l},r));}for(var f in n)i[f]||n[f].required&&void 0===n[f].default&&void 0===r[f]&&s.push(new F(e,r,'missing required property "'+f+'"'));return s}function Ve(t){var e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,o=t.key,a=t.arrayElementValidator||Ye;if("array"!==pe(e))return[new F(o,e,"array expected, "+pe(e)+" found")];if(r.length&&e.length!==r.length)return[new F(o,e,"array length "+r.length+" expected, length "+e.length+" found")];if(r["min-length"]&&e.length<r["min-length"])return[new F(o,e,"array length at least "+r["min-length"]+" expected, length "+e.length+" found")];var s={type:r.value};i.$version<7&&(s.function=r.function),"object"===pe(r.value)&&(s=r.value);for(var u=[],l=0;l<e.length;l++)u=u.concat(a({array:e,arrayIndex:l,value:e[l],valueSpec:s,style:n,styleSpec:i,key:o+"["+l+"]"}));return u}function Be(t){var e=t.key,r=t.value,n=t.valueSpec,i=pe(r);return"number"!==i?[new F(e,r,"number expected, "+i+" found")]:"minimum"in n&&r<n.minimum?[new F(e,r,r+" is less than the minimum value "+n.minimum)]:"maximum"in n&&r>n.maximum?[new F(e,r,r+" is greater than the maximum value "+n.maximum)]:[]}function Ce(t){var e,r,n,i=t.valueSpec,o=O(t.value.type),a={},s="categorical"!==o&&void 0===t.value.property,u=!s,l="array"===pe(t.value.stops)&&"array"===pe(t.value.stops[0])&&"object"===pe(t.value.stops[0][0]),p=Me({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===o)return[new F(t.key,t.value,'identity function may not have a "stops" property')];var e=[],r=t.value;e=e.concat(Ve({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:c})),"array"===pe(r)&&0===r.length&&e.push(new F(t.key,r,"array must have at least one stop"));return e},default:function(t){return Ye({key:t.key,value:t.value,valueSpec:i,style:t.style,styleSpec:t.styleSpec})}}});return"identity"===o&&s&&p.push(new F(t.key,t.value,'missing required property "property"')),"identity"===o||t.value.stops||p.push(new F(t.key,t.value,'missing required property "stops"')),"exponential"===o&&"piecewise-constant"===t.valueSpec.function&&p.push(new F(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(u&&!t.valueSpec["property-function"]?p.push(new F(t.key,t.value,"property functions not supported")):s&&!t.valueSpec["zoom-function"]&&"heatmap-color"!==t.objectKey&&"line-gradient"!==t.objectKey&&p.push(new F(t.key,t.value,"zoom functions not supported"))),"categorical"!==o&&!l||void 0!==t.value.property||p.push(new F(t.key,t.value,'"property" property is required')),p;function c(t){var e=[],o=t.value,s=t.key;if("array"!==pe(o))return[new F(s,o,"array expected, "+pe(o)+" found")];if(2!==o.length)return[new F(s,o,"array length 2 expected, length "+o.length+" found")];if(l){if("object"!==pe(o[0]))return[new F(s,o,"object expected, "+pe(o[0])+" found")];if(void 0===o[0].zoom)return[new F(s,o,"object stop key must have zoom")];if(void 0===o[0].value)return[new F(s,o,"object stop key must have value")];if(n&&n>O(o[0].zoom))return[new F(s,o[0].zoom,"stop zoom values must appear in ascending order")];O(o[0].zoom)!==n&&(n=O(o[0].zoom),r=void 0,a={}),e=e.concat(Me({key:s+"[0]",value:o[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Be,value:h}}));}else e=e.concat(h({key:s+"[0]",value:o[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},o));return e.concat(Ye({key:s+"[1]",value:o[1],valueSpec:i,style:t.style,styleSpec:t.styleSpec}))}function h(t,n){var s=pe(t.value),u=O(t.value),l=null!==t.value?t.value:n;if(e){if(s!==e)return[new F(t.key,l,s+" stop domain type must match previous stop domain type "+e)]}else e=s;if("number"!==s&&"string"!==s&&"boolean"!==s)return[new F(t.key,l,"stop domain value must be a number, string, or boolean")];if("number"!==s&&"categorical"!==o){var p="number expected, "+s+" found";return i["property-function"]&&void 0===o&&(p+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new F(t.key,l,p)]}return"categorical"!==o||"number"!==s||isFinite(u)&&Math.floor(u)===u?"categorical"!==o&&"number"===s&&void 0!==r&&u<r?[new F(t.key,l,"stop domain values must appear in ascending order")]:(r=u,"categorical"===o&&u in a?[new F(t.key,l,"stop domain values must be unique")]:(a[u]=!0,[])):[new F(t.key,l,"integer expected, found "+u)]}}function Ie(t){var e=("property"===t.expressionContext?ke:we)(L(t.value),t.valueSpec);return"error"===e.result?e.value.map(function(e){return new F(""+t.key+e.key,t.value,e.message)}):"property"===t.expressionContext&&"text-font"===t.propertyKey&&-1!==e.value._styleExpression.expression.possibleOutputs().indexOf(void 0)?[new F(t.key,t.value,'Invalid data expression for "text-font". Output values must be contained as literals within the expression.')]:[]}function Ee(t){var e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(O(r))&&i.push(new F(e,r,"expected one of ["+n.values.join(", ")+"], "+JSON.stringify(r)+" found")):-1===Object.keys(n.values).indexOf(O(r))&&i.push(new F(e,r,"expected one of ["+Object.keys(n.values).join(", ")+"], "+JSON.stringify(r)+" found")),i}function Fe(t){if(!Array.isArray(t)||0===t.length)return!1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":case"!in":case"!has":case"none":return!1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3===t.length&&(Array.isArray(t[1])||Array.isArray(t[2]));case"any":case"all":for(var e=0,r=t.slice(1);e<r.length;e+=1){var n=r[e];if(!Fe(n)&&"boolean"!=typeof n)return!1}return!0;default:return!0}}ze.deserialize=function(t){return new ze(t._parameters,t._specification)},ze.serialize=function(t){return{_parameters:t._parameters,_specification:t._specification}};var Pe={type:"boolean",default:!1,function:!0,"property-function":!0,"zoom-function":!0};function Te(t){if(!t)return function(){return!0};Fe(t)||(t=Le(t));var e=we(t,Pe);if("error"===e.result)throw new Error(e.value.map(function(t){return t.key+": "+t.message}).join(", "));return function(t,r){return e.value.evaluate(t,r)}}function Oe(t,e){return t<e?-1:t>e?1:0}function Le(t){if(!t)return!0;var e,r=t[0];return t.length<=1?"any"!==r:"=="===r?je(t[1],t[2],"=="):"!="===r?Ue(je(t[1],t[2],"==")):"<"===r||">"===r||"<="===r||">="===r?je(t[1],t[2],r):"any"===r?(e=t.slice(1),["any"].concat(e.map(Le))):"all"===r?["all"].concat(t.slice(1).map(Le)):"none"===r?["all"].concat(t.slice(1).map(Le).map(Ue)):"in"===r?qe(t[1],t.slice(2)):"!in"===r?Ue(qe(t[1],t.slice(2))):"has"===r?Re(t[1]):"!has"!==r||Ue(Re(t[1]))}function je(t,e,r){switch(t){case"$type":return["filter-type-"+r,e];case"$id":return["filter-id-"+r,e];default:return["filter-"+r,t,e]}}function qe(t,e){if(0===e.length)return!1;switch(t){case"$type":return["filter-type-in",["literal",e]];case"$id":return["filter-id-in",["literal",e]];default:return e.length>200&&!e.some(function(t){return typeof t!=typeof e[0]})?["filter-in-large",t,["literal",e.sort(Oe)]]:["filter-in-small",t,["literal",e]]}}function Re(t){switch(t){case"$type":return!0;case"$id":return["filter-has-id"];default:return["filter-has",t]}}function Ue(t){return["!",t]}function De(t){return Fe(L(t.value))?Ie(T({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):function t(e){var r=e.value;var n=e.key;if("array"!==pe(r))return[new F(n,r,"array expected, "+pe(r)+" found")];var i=e.styleSpec;var o;var a=[];if(r.length<1)return[new F(n,r,"filter array must have at least 1 element")];a=a.concat(Ee({key:n+"[0]",value:r[0],valueSpec:i.filter_operator,style:e.style,styleSpec:e.styleSpec}));switch(O(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===O(r[1])&&a.push(new F(n,r,'"$type" cannot be use with operator "'+r[0]+'"'));case"==":case"!=":3!==r.length&&a.push(new F(n,r,'filter array for operator "'+r[0]+'" must have 3 elements'));case"in":case"!in":r.length>=2&&"string"!==(o=pe(r[1]))&&a.push(new F(n+"[1]",r[1],"string expected, "+o+" found"));for(var s=2;s<r.length;s++)o=pe(r[s]),"$type"===O(r[1])?a=a.concat(Ee({key:n+"["+s+"]",value:r[s],valueSpec:i.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==o&&"number"!==o&&"boolean"!==o&&a.push(new F(n+"["+s+"]",r[s],"string, number, or boolean expected, "+o+" found"));break;case"any":case"all":case"none":for(var u=1;u<r.length;u++)a=a.concat(t({key:n+"["+u+"]",value:r[u],style:e.style,styleSpec:e.styleSpec}));break;case"has":case"!has":o=pe(r[1]),2!==r.length?a.push(new F(n,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==o&&a.push(new F(n+"[1]",r[1],"string expected, "+o+" found"));}return a}(t)}function Ne(t,e){var r=t.key,n=t.style,i=t.styleSpec,o=t.value,a=t.objectKey,s=i[e+"_"+t.layerType];if(!s)return[];var u=a.match(/^(.*)-transition$/);if("paint"===e&&u&&s[u[1]]&&s[u[1]].transition)return Ye({key:r,value:o,valueSpec:i.transition,style:n,styleSpec:i});var l,p=t.valueSpec||s[a];if(!p)return[new F(r,o,'unknown property "'+a+'"')];if("string"===pe(o)&&p["property-function"]&&!p.tokens&&(l=/^{([^}]+)}$/.exec(o)))return[new F(r,o,'"'+a+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(l[1])+" }`.")];var c=[];return"symbol"===t.layerType&&("text-field"===a&&n&&!n.glyphs&&c.push(new F(r,o,'use of "text-field" requires a style "glyphs" property')),"text-font"===a&&ce(L(o))&&"identity"===O(o.type)&&c.push(new F(r,o,'"text-font" does not support identity functions'))),c.concat(Ye({key:t.key,value:o,valueSpec:p,style:n,styleSpec:i,expressionContext:"property",propertyKey:a}))}function Ze(t){return Ne(t,"paint")}function Ke(t){return Ne(t,"layout")}function Je(t){var e=[],r=t.value,n=t.key,i=t.style,o=t.styleSpec;r.type||r.ref||e.push(new F(n,r,'either "type" or "ref" is required'));var a,s=O(r.type),u=O(r.ref);if(r.id)for(var l=O(r.id),p=0;p<t.arrayIndex;p++){var c=i.layers[p];O(c.id)===l&&e.push(new F(n,r.id,'duplicate layer id "'+r.id+'", previously used at line '+c.id.__line__));}if("ref"in r)["type","source","source-layer","filter","layout"].forEach(function(t){t in r&&e.push(new F(n,r[t],'"'+t+'" is prohibited for ref layers'));}),i.layers.forEach(function(t){O(t.id)===u&&(a=t);}),a?a.ref?e.push(new F(n,r.ref,"ref cannot reference another ref layer")):s=O(a.type):e.push(new F(n,r.ref,'ref layer "'+u+'" not found'));else if("background"!==s)if(r.source){var h=i.sources&&i.sources[r.source],f=h&&O(h.type);h?"vector"===f&&"raster"===s?e.push(new F(n,r.source,'layer "'+r.id+'" requires a raster source')):"raster"===f&&"raster"!==s?e.push(new F(n,r.source,'layer "'+r.id+'" requires a vector source')):"vector"!==f||r["source-layer"]?"raster-dem"===f&&"hillshade"!==s?e.push(new F(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===f&&h.lineMetrics||e.push(new F(n,r,'layer "'+r.id+'" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')):e.push(new F(n,r,'layer "'+r.id+'" must specify a "source-layer"')):e.push(new F(n,r.source,'source "'+r.source+'" not found'));}else e.push(new F(n,r,'missing required property "source"'));return e=e.concat(Me({key:n,value:r,valueSpec:o.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return[]},type:function(){return Ye({key:n+".type",value:r.type,valueSpec:o.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"})},filter:De,layout:function(t){return Me({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return Ke(T({layerType:s},t))}}})},paint:function(t){return Me({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return Ze(T({layerType:s},t))}}})}}}))}function $e(t){var e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return[new F(r,e,'"type" is required')];var o=O(e.type),a=[];switch(o){case"vector":case"raster":case"raster-dem":if(a=a.concat(Me({key:r,value:e,valueSpec:n["source_"+o.replace("-","_")],style:t.style,styleSpec:n})),"url"in e)for(var s in e)["type","url","tileSize"].indexOf(s)<0&&a.push(new F(r+"."+s,e[s],'a source with a "url" property may not include a "'+s+'" property'));return a;case"geojson":return Me({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n});case"video":return Me({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return Me({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return a.push(new F(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")),a;default:return Ee({key:r+".type",value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,styleSpec:n})}}function He(t){var e=t.value,r=t.styleSpec,n=r.light,i=t.style,o=[],a=pe(e);if(void 0===e)return o;if("object"!==a)return o=o.concat([new F("light",e,"object expected, "+a+" found")]);for(var s in e){var u=s.match(/^(.*)-transition$/);o=u&&n[u[1]]&&n[u[1]].transition?o.concat(Ye({key:s,value:e[s],valueSpec:r.transition,style:i,styleSpec:r})):n[s]?o.concat(Ye({key:s,value:e[s],valueSpec:n[s],style:i,styleSpec:r})):o.concat([new F(s,e[s],'unknown property "'+s+'"')]);}return o}function Xe(t){var e=t.value,r=t.key,n=pe(e);return"string"!==n?[new F(r,e,"string expected, "+n+" found")]:[]}var Ge={"*":function(){return[]},array:Ve,boolean:function(t){var e=t.value,r=t.key,n=pe(e);return"boolean"!==n?[new F(r,e,"boolean expected, "+n+" found")]:[]},number:Be,color:function(t){var e=t.key,r=t.value,n=pe(r);return"string"!==n?[new F(e,r,"color expected, "+n+" found")]:null===W(r)?[new F(e,r,'color expected, "'+r+'" found')]:[]},constants:P,enum:Ee,filter:De,function:Ce,layer:Je,object:Me,source:$e,light:He,string:Xe};function Ye(t){var e=t.value,r=t.valueSpec,n=t.styleSpec;return r.function&&ce(O(e))?Ce(t):r.function&&be(L(e))?Ie(t):r.type&&Ge[r.type]?Ge[r.type](t):Me(T({},t,{valueSpec:r.type?n[r.type]:r}))}function We(t){var e=t.value,r=t.key,n=Xe(t);return n.length?n:(-1===e.indexOf("{fontstack}")&&n.push(new F(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new F(r,e,'"glyphs" url must include a "{range}" token')),n)}function Qe(t,e){e=e||E;var r=[];return r=r.concat(Ye({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:We,"*":function(){return[]}}})),t.constants&&(r=r.concat(P({key:"constants",value:t.constants,style:t,styleSpec:e}))),tr(r)}function tr(t){return[].concat(t).sort(function(t,e){return t.line-e.line})}function er(t){return function(){return tr(t.apply(this,arguments))}}Qe.source=er($e),Qe.light=er(He),Qe.layer=er(Je),Qe.filter=er(De),Qe.paintProperty=er(Ze),Qe.layoutProperty=er(Ke);var rr=Qe,nr=Qe.light,ir=Qe.paintProperty,or=Qe.layoutProperty;function ar(t,e){var r=!1;if(e&&e.length)for(var n=0,i=e;n<i.length;n+=1){var o=i[n];t.fire(new C(new Error(o.message))),r=!0;}return r}var sr=lr,ur=3;function lr(t,e,r){var n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],e=i[1],r=i[2],this.d=e+2*r;for(var o=0;o<this.d*this.d;o++){var a=i[ur+o],s=i[ur+o+1];n.push(a===s?null:i.subarray(a,s));}var u=i[ur+n.length],l=i[ur+n.length+1];this.keys=i.subarray(u,l),this.bboxes=i.subarray(l),this.insert=this._insertReadonly;}else{this.d=e+2*r;for(var p=0;p<this.d*this.d;p++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;var c=r/e*t;this.min=-c,this.max=t+c;}lr.prototype.insert=function(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);},lr.prototype._insertReadonly=function(){throw"Cannot insert into a GridIndex created from an ArrayBuffer."},lr.prototype._insertCell=function(t,e,r,n,i,o){this.cells[i].push(o);},lr.prototype.query=function(t,e,r,n){var i=this.min,o=this.max;if(t<=i&&e<=i&&o<=r&&o<=n)return Array.prototype.slice.call(this.keys);var a=[];return this._forEachCell(t,e,r,n,this._queryCell,a,{}),a},lr.prototype._queryCell=function(t,e,r,n,i,o,a){var s=this.cells[i];if(null!==s)for(var u=this.keys,l=this.bboxes,p=0;p<s.length;p++){var c=s[p];if(void 0===a[c]){var h=4*c;t<=l[h+2]&&e<=l[h+3]&&r>=l[h+0]&&n>=l[h+1]?(a[c]=!0,o.push(u[c])):a[c]=!1;}}},lr.prototype._forEachCell=function(t,e,r,n,i,o,a){for(var s=this._convertToCellCoord(t),u=this._convertToCellCoord(e),l=this._convertToCellCoord(r),p=this._convertToCellCoord(n),c=s;c<=l;c++)for(var h=u;h<=p;h++){var f=this.d*h+c;if(i.call(this,t,e,r,n,f,o,a))return}},lr.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},lr.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,e=ur+this.cells.length+1+1,r=0,n=0;n<this.cells.length;n++)r+=this.cells[n].length;var i=new Int32Array(e+r+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var o=e,a=0;a<t.length;a++){var s=t[a];i[ur+a]=o,i.set(s,o),o+=s.length;}return i[ur+t.length]=o,i.set(this.keys,o),o+=this.keys.length,i[ur+t.length+1]=o,i.set(this.bboxes,o),o+=this.bboxes.length,i.buffer};var pr=self.ImageData,cr={};function hr(t,e,r){void 0===r&&(r={}),Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),cr[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}for(var fr in hr("Object",Object),sr.serialize=function(t,e){var r=t.toArrayBuffer();return e&&e.push(r),r},sr.deserialize=function(t){return new sr(t)},hr("Grid",sr),hr("Color",Q),hr("Error",Error),hr("StylePropertyFunction",ze),hr("StyleExpression",xe,{omit:["_evaluator"]}),hr("ZoomDependentExpression",Ae),hr("ZoomConstantExpression",_e),hr("CompoundExpression",yt,{omit:["_evaluate"]}),Tt)Tt[fr]._classRegistryKey||hr("Expression_"+fr,Tt[fr]);function yr(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t;if(t instanceof ArrayBuffer)return e&&e.push(t),t;if(ArrayBuffer.isView(t)){var r=t;return e&&e.push(r.buffer),r}if(t instanceof pr)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){for(var n=[],i=0,o=t;i<o.length;i+=1){var a=o[i];n.push(yr(a,e));}return n}if("object"==typeof t){var s=t.constructor,u=s._classRegistryKey;if(!u)throw new Error("can't serialize object of unregistered class");var l={};if(s.serialize)l._serialized=s.serialize(t,e);else{for(var p in t)if(t.hasOwnProperty(p)&&!(cr[u].omit.indexOf(p)>=0)){var c=t[p];l[p]=cr[u].shallow.indexOf(p)>=0?c:yr(c,e);}t instanceof Error&&(l.message=t.message);}return{name:u,properties:l}}throw new Error("can't serialize object of type "+typeof t)}function dr(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof ArrayBuffer||ArrayBuffer.isView(t)||t instanceof pr)return t;if(Array.isArray(t))return t.map(function(t){return dr(t)});if("object"==typeof t){var e=t,r=e.name,n=e.properties;if(!r)throw new Error("can't deserialize object of anonymous class");var i=cr[r].klass;if(!i)throw new Error("can't deserialize unregistered class "+r);if(i.deserialize)return i.deserialize(n._serialized);for(var o=Object.create(i.prototype),a=0,s=Object.keys(n);a<s.length;a+=1){var u=s[a];o[u]=cr[r].shallow.indexOf(u)>=0?n[u]:dr(n[u]);}return o}throw new Error("can't deserialize object of type "+typeof t)}var vr=function(){this.first=!0;};vr.prototype.update=function(t,e){var r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))};var mr={"Latin-1 Supplement":function(t){return t>=128&&t<=255},Arabic:function(t){return t>=1536&&t<=1791},"Arabic Supplement":function(t){return t>=1872&&t<=1919},"Arabic Extended-A":function(t){return t>=2208&&t<=2303},"Hangul Jamo":function(t){return t>=4352&&t<=4607},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&t<=5759},Khmer:function(t){return t>=6016&&t<=6143},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&t<=6399},"General Punctuation":function(t){return t>=8192&&t<=8303},"Letterlike Symbols":function(t){return t>=8448&&t<=8527},"Number Forms":function(t){return t>=8528&&t<=8591},"Miscellaneous Technical":function(t){return t>=8960&&t<=9215},"Control Pictures":function(t){return t>=9216&&t<=9279},"Optical Character Recognition":function(t){return t>=9280&&t<=9311},"Enclosed Alphanumerics":function(t){return t>=9312&&t<=9471},"Geometric Shapes":function(t){return t>=9632&&t<=9727},"Miscellaneous Symbols":function(t){return t>=9728&&t<=9983},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&t<=11263},"CJK Radicals Supplement":function(t){return t>=11904&&t<=12031},"Kangxi Radicals":function(t){return t>=12032&&t<=12255},"Ideographic Description Characters":function(t){return t>=12272&&t<=12287},"CJK Symbols and Punctuation":function(t){return t>=12288&&t<=12351},Hiragana:function(t){return t>=12352&&t<=12447},Katakana:function(t){return t>=12448&&t<=12543},Bopomofo:function(t){return t>=12544&&t<=12591},"Hangul Compatibility Jamo":function(t){return t>=12592&&t<=12687},Kanbun:function(t){return t>=12688&&t<=12703},"Bopomofo Extended":function(t){return t>=12704&&t<=12735},"CJK Strokes":function(t){return t>=12736&&t<=12783},"Katakana Phonetic Extensions":function(t){return t>=12784&&t<=12799},"Enclosed CJK Letters and Months":function(t){return t>=12800&&t<=13055},"CJK Compatibility":function(t){return t>=13056&&t<=13311},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&t<=19903},"Yijing Hexagram Symbols":function(t){return t>=19904&&t<=19967},"CJK Unified Ideographs":function(t){return t>=19968&&t<=40959},"Yi Syllables":function(t){return t>=40960&&t<=42127},"Yi Radicals":function(t){return t>=42128&&t<=42191},"Hangul Jamo Extended-A":function(t){return t>=43360&&t<=43391},"Hangul Syllables":function(t){return t>=44032&&t<=55215},"Hangul Jamo Extended-B":function(t){return t>=55216&&t<=55295},"Private Use Area":function(t){return t>=57344&&t<=63743},"CJK Compatibility Ideographs":function(t){return t>=63744&&t<=64255},"Arabic Presentation Forms-A":function(t){return t>=64336&&t<=65023},"Vertical Forms":function(t){return t>=65040&&t<=65055},"CJK Compatibility Forms":function(t){return t>=65072&&t<=65103},"Small Form Variants":function(t){return t>=65104&&t<=65135},"Arabic Presentation Forms-B":function(t){return t>=65136&&t<=65279},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&t<=65519}};function gr(t){for(var e=0,r=t;e<r.length;e+=1){if(br(r[e].charCodeAt(0)))return!0}return!1}function xr(t){return!mr.Arabic(t)&&(!mr["Arabic Supplement"](t)&&(!mr["Arabic Extended-A"](t)&&(!mr["Arabic Presentation Forms-A"](t)&&!mr["Arabic Presentation Forms-B"](t))))}function br(t){return 746===t||747===t||!(t<4352)&&(!!mr["Bopomofo Extended"](t)||(!!mr.Bopomofo(t)||(!(!mr["CJK Compatibility Forms"](t)||t>=65097&&t<=65103)||(!!mr["CJK Compatibility Ideographs"](t)||(!!mr["CJK Compatibility"](t)||(!!mr["CJK Radicals Supplement"](t)||(!!mr["CJK Strokes"](t)||(!(!mr["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||(!!mr["CJK Unified Ideographs Extension A"](t)||(!!mr["CJK Unified Ideographs"](t)||(!!mr["Enclosed CJK Letters and Months"](t)||(!!mr["Hangul Compatibility Jamo"](t)||(!!mr["Hangul Jamo Extended-A"](t)||(!!mr["Hangul Jamo Extended-B"](t)||(!!mr["Hangul Jamo"](t)||(!!mr["Hangul Syllables"](t)||(!!mr.Hiragana(t)||(!!mr["Ideographic Description Characters"](t)||(!!mr.Kanbun(t)||(!!mr["Kangxi Radicals"](t)||(!!mr["Katakana Phonetic Extensions"](t)||(!(!mr.Katakana(t)||12540===t)||(!(!mr["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||(!(!mr["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||(!!mr["Unified Canadian Aboriginal Syllabics"](t)||(!!mr["Unified Canadian Aboriginal Syllabics Extended"](t)||(!!mr["Vertical Forms"](t)||(!!mr["Yijing Hexagram Symbols"](t)||(!!mr["Yi Syllables"](t)||!!mr["Yi Radicals"](t))))))))))))))))))))))))))))))}function wr(t){return!(br(t)||function(t){return!!(mr["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||mr["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||mr["Letterlike Symbols"](t)||mr["Number Forms"](t)||mr["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||mr["Control Pictures"](t)&&9251!==t||mr["Optical Character Recognition"](t)||mr["Enclosed Alphanumerics"](t)||mr["Geometric Shapes"](t)||mr["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||mr["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||mr["CJK Symbols and Punctuation"](t)||mr.Katakana(t)||mr["Private Use Area"](t)||mr["CJK Compatibility Forms"](t)||mr["Small Form Variants"](t)||mr["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function _r(t,e){return!(!e&&(t>=1424&&t<=2303||mr["Arabic Presentation Forms-A"](t)||mr["Arabic Presentation Forms-B"](t)))&&!(t>=2304&&t<=3583||t>=3840&&t<=4255||mr.Khmer(t))}var Ar,kr=!1,zr=null,Sr=!1,Mr=new I,Vr={applyArabicShaping:null,processBidirectionalText:null,isLoaded:function(){return Sr||null!=Vr.applyArabicShaping}},Br=function(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new vr,this.transition={});};Br.prototype.isSupportedScript=function(t){return function(t,e){for(var r=0,n=t;r<n.length;r+=1)if(!_r(n[r].charCodeAt(0),e))return!1;return!0}(t,Vr.isLoaded())},Br.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)};var Cr=function(t,e){this.property=t,this.value=e,this.expression=Se(void 0===e?t.specification.default:e,t.specification);};Cr.prototype.isDataDriven=function(){return"source"===this.expression.kind||"composite"===this.expression.kind},Cr.prototype.possiblyEvaluate=function(t){return this.property.possiblyEvaluate(this,t)};var Ir=function(t){this.property=t,this.value=new Cr(t,void 0);};Ir.prototype.transitioned=function(t,e){return new Fr(this.property,this.value,e,h({},t.transition,this.transition),t.now)},Ir.prototype.untransitioned=function(){return new Fr(this.property,this.value,null,{},0)};var Er=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);};Er.prototype.getValue=function(t){return g(this._values[t].value.value)},Er.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new Ir(this._values[t].property)),this._values[t].value=new Cr(this._values[t].property,null===e?void 0:g(e));},Er.prototype.getTransition=function(t){return g(this._values[t].transition)},Er.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new Ir(this._values[t].property)),this._values[t].transition=g(e)||void 0;},Er.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);var o=this.getTransition(n);void 0!==o&&(t[n+"-transition"]=o);}return t},Er.prototype.transitioned=function(t,e){for(var r=new Pr(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var o=i[n];r._values[o]=this._values[o].transitioned(t,e._values[o]);}return r},Er.prototype.untransitioned=function(){for(var t=new Pr(this._properties),e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e];t._values[n]=this._values[n].untransitioned();}return t};var Fr=function(t,e,r,n,i){this.property=t,this.value=e,this.begin=i+n.delay||0,this.end=this.begin+n.duration||0,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);};Fr.prototype.possiblyEvaluate=function(t){var e=t.now||0,r=this.value.possiblyEvaluate(t),n=this.prior;if(n){if(e>this.end)return this.prior=null,r;if(this.value.isDataDriven())return this.prior=null,r;if(e<this.begin)return n.possiblyEvaluate(t);var i=(e-this.begin)/(this.end-this.begin);return this.property.interpolate(n.possiblyEvaluate(t),r,function(t){if(t<=0)return 0;if(t>=1)return 1;var e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}(i))}return r};var Pr=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);};Pr.prototype.possiblyEvaluate=function(t){for(var e=new Lr(this._properties),r=0,n=Object.keys(this._values);r<n.length;r+=1){var i=n[r];e._values[i]=this._values[i].possiblyEvaluate(t);}return e},Pr.prototype.hasTransition=function(){for(var t=0,e=Object.keys(this._values);t<e.length;t+=1){var r=e[t];if(this._values[r].prior)return!0}return!1};var Tr=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);};Tr.prototype.getValue=function(t){return g(this._values[t].value)},Tr.prototype.setValue=function(t,e){this._values[t]=new Cr(this._values[t].property,null===e?void 0:g(e));},Tr.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);}return t},Tr.prototype.possiblyEvaluate=function(t){for(var e=new Lr(this._properties),r=0,n=Object.keys(this._values);r<n.length;r+=1){var i=n[r];e._values[i]=this._values[i].possiblyEvaluate(t);}return e};var Or=function(t,e,r){this.property=t,this.value=e,this.globals=r;};Or.prototype.isConstant=function(){return"constant"===this.value.kind},Or.prototype.constantOr=function(t){return"constant"===this.value.kind?this.value.value:t},Or.prototype.evaluate=function(t){return this.property.evaluate(this.value,this.globals,t)};var Lr=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);};Lr.prototype.get=function(t){return this._values[t]};var jr=function(t){this.specification=t;};jr.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},jr.prototype.interpolate=function(t,e,r){var n=_t[this.specification.type];return n?n(t,e,r):t};var qr=function(t){this.specification=t;};qr.prototype.possiblyEvaluate=function(t,e){return"constant"===t.expression.kind||"camera"===t.expression.kind?new Or(this,{kind:"constant",value:t.expression.evaluate(e)},e):new Or(this,t.expression,e)},qr.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new Or(this,{kind:"constant",value:void 0},t.globals);var n=_t[this.specification.type];return n?new Or(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.globals):t},qr.prototype.evaluate=function(t,e,r){return"constant"===t.kind?t.value:t.evaluate(e,r)};var Rr=function(t){this.specification=t;};Rr.prototype.possiblyEvaluate=function(t,e){if(void 0!==t.value){if("constant"===t.expression.kind){var r=t.expression.evaluate(e);return this._calculate(r,r,r,e)}return this._calculate(t.expression.evaluate(new Br(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Br(Math.floor(e.zoom),e)),t.expression.evaluate(new Br(Math.floor(e.zoom+1),e)),e)}},Rr.prototype._calculate=function(t,e,r,n){var i=n.zoom,o=i-Math.floor(i),a=n.crossFadingFactor();return i>n.zoomHistory.lastIntegerZoom?{from:t,to:e,fromScale:2,toScale:1,t:o+(1-o)*a}:{from:r,to:e,fromScale:.5,toScale:1,t:1-(1-a)*o}},Rr.prototype.interpolate=function(t){return t};var Ur=function(t){this.specification=t;};Ur.prototype.possiblyEvaluate=function(t,e){return!!t.expression.evaluate(e)},Ur.prototype.interpolate=function(){return!1};var Dr=function(t){for(var e in this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},t){var r=t[e],n=this.defaultPropertyValues[e]=new Cr(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new Ir(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}};hr("DataDrivenProperty",qr),hr("DataConstantProperty",jr),hr("CrossFadedProperty",Rr),hr("ColorRampProperty",Ur);var Nr=function(t){function e(e,r){for(var n in t.call(this),this.id=e.id,this.metadata=e.metadata,this.type=e.type,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,this.visibility="visible","background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),this._featureFilter=function(){return!0},r.layout&&(this._unevaluatedLayout=new Tr(r.layout)),this._transitionablePaint=new Er(r.paint),e.paint)this.setPaintProperty(n,e.paint[n],{validate:!1});for(var i in e.layout)this.setLayoutProperty(i,e.layout[i],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned();}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getLayoutProperty=function(t){return"visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,r){if(null!=e){var n="layers."+this.id+".layout."+t;if(this._validate(or,n,t,e,r))return}"visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility="none"===e?e:"visible";},e.prototype.getPaintProperty=function(t){return d(t,"-transition")?this._transitionablePaint.getTransition(t.slice(0,-"-transition".length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,r){if(null!=e){var n="layers."+this.id+".paint."+t;if(this._validate(ir,n,t,e,r))return}d(t,"-transition")?this._transitionablePaint.setTransition(t.slice(0,-"-transition".length),e||void 0):this._transitionablePaint.setValue(t,e);},e.prototype.isHidden=function(t){return!!(this.minzoom&&t<this.minzoom)||(!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility)},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t){this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t)),this.paint=this._transitioningPaint.possiblyEvaluate(t);},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return"none"===this.visibility&&(t.layout=t.layout||{},t.layout.visibility="none"),m(t,function(t,e){return!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)})},e.prototype._validate=function(t,e,r,n,i){return(!i||!1!==i.validate)&&ar(this,t.call(rr,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:E,style:{glyphs:!0,sprite:!0}}))},e.prototype.hasOffscreenPass=function(){return!1},e.prototype.resize=function(){},e}(I),Zr={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},Kr=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;},Jr=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0);};function $r(t,e){void 0===e&&(e=1);var r=0,n=0;return{members:t.map(function(t){var i,o=(i=t.type,Zr[i].BYTES_PER_ELEMENT),a=r=Hr(r,Math.max(e,o)),s=t.components||1;return n=Math.max(n,o),r+=o*s,{name:t.name,type:t.type,components:s,offset:a}}),size:Hr(r,Math.max(n,e)),alignment:e}}function Hr(t,e){return Math.ceil(t/e)*e}Jr.serialize=function(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},Jr.deserialize=function(t){var e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e},Jr.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());},Jr.prototype.clear=function(){this.length=0;},Jr.prototype.resize=function(t){this.reserve(t),this.length=t;},Jr.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);var e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}},Jr.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")};var Xr=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;this.resize(r+1);var n=2*r;return this.int16[n+0]=t,this.int16[n+1]=e,r},e}(Jr);Xr.prototype.bytesPerElement=4,hr("StructArrayLayout2i4",Xr);var Gr=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;this.resize(i+1);var o=4*i;return this.int16[o+0]=t,this.int16[o+1]=e,this.int16[o+2]=r,this.int16[o+3]=n,i},e}(Jr);Gr.prototype.bytesPerElement=8,hr("StructArrayLayout4i8",Gr);var Yr=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,o){var a=this.length;this.resize(a+1);var s=6*a;return this.int16[s+0]=t,this.int16[s+1]=e,this.int16[s+2]=r,this.int16[s+3]=n,this.int16[s+4]=i,this.int16[s+5]=o,a},e}(Jr);Yr.prototype.bytesPerElement=12,hr("StructArrayLayout2i4i12",Yr);var Wr=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,o,a,s){var u=this.length;this.resize(u+1);var l=6*u,p=12*u;return this.int16[l+0]=t,this.int16[l+1]=e,this.int16[l+2]=r,this.int16[l+3]=n,this.uint8[p+8]=i,this.uint8[p+9]=o,this.uint8[p+10]=a,this.uint8[p+11]=s,u},e}(Jr);Wr.prototype.bytesPerElement=12,hr("StructArrayLayout4i4ub12",Wr);var Qr=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,o,a,s){var u=this.length;this.resize(u+1);var l=8*u;return this.int16[l+0]=t,this.int16[l+1]=e,this.int16[l+2]=r,this.int16[l+3]=n,this.uint16[l+4]=i,this.uint16[l+5]=o,this.uint16[l+6]=a,this.uint16[l+7]=s,u},e}(Jr);Qr.prototype.bytesPerElement=16,hr("StructArrayLayout4i4ui16",Qr);var tn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;this.resize(n+1);var i=3*n;return this.float32[i+0]=t,this.float32[i+1]=e,this.float32[i+2]=r,n},e}(Jr);tn.prototype.bytesPerElement=12,hr("StructArrayLayout3f12",tn);var en=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;this.resize(e+1);var r=1*e;return this.uint32[r+0]=t,e},e}(Jr);en.prototype.bytesPerElement=4,hr("StructArrayLayout1ul4",en);var rn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,o,a,s,u,l,p){var c=this.length;this.resize(c+1);var h=12*c,f=6*c;return this.int16[h+0]=t,this.int16[h+1]=e,this.int16[h+2]=r,this.int16[h+3]=n,this.int16[h+4]=i,this.int16[h+5]=o,this.uint32[f+3]=a,this.uint16[h+8]=s,this.uint16[h+9]=u,this.int16[h+10]=l,this.int16[h+11]=p,c},e}(Jr);rn.prototype.bytesPerElement=24,hr("StructArrayLayout6i1ul2ui2i24",rn);var nn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,o){var a=this.length;this.resize(a+1);var s=6*a;return this.int16[s+0]=t,this.int16[s+1]=e,this.int16[s+2]=r,this.int16[s+3]=n,this.int16[s+4]=i,this.int16[s+5]=o,a},e}(Jr);nn.prototype.bytesPerElement=12,hr("StructArrayLayout2i2i2i12",nn);var on=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;this.resize(r+1);var n=4*r;return this.uint8[n+0]=t,this.uint8[n+1]=e,r},e}(Jr);on.prototype.bytesPerElement=4,hr("StructArrayLayout2ub4",on);var an=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,o,a,s,u,l,p,c,h,f){var y=this.length;this.resize(y+1);var d=20*y,v=10*y,m=40*y;return this.int16[d+0]=t,this.int16[d+1]=e,this.uint16[d+2]=r,this.uint16[d+3]=n,this.uint32[v+2]=i,this.uint32[v+3]=o,this.uint32[v+4]=a,this.uint16[d+10]=s,this.uint16[d+11]=u,this.uint16[d+12]=l,this.float32[v+7]=p,this.float32[v+8]=c,this.uint8[m+36]=h,this.uint8[m+37]=f,y},e}(Jr);an.prototype.bytesPerElement=40,hr("StructArrayLayout2i2ui3ul3ui2f2ub40",an);var sn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;this.resize(e+1);var r=1*e;return this.float32[r+0]=t,e},e}(Jr);sn.prototype.bytesPerElement=4,hr("StructArrayLayout1f4",sn);var un=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;this.resize(n+1);var i=3*n;return this.int16[i+0]=t,this.int16[i+1]=e,this.int16[i+2]=r,n},e}(Jr);un.prototype.bytesPerElement=6,hr("StructArrayLayout3i6",un);var ln=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;this.resize(n+1);var i=2*n,o=4*n;return this.uint32[i+0]=t,this.uint16[o+2]=e,this.uint16[o+3]=r,n},e}(Jr);ln.prototype.bytesPerElement=8,hr("StructArrayLayout1ul2ui8",ln);var pn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;this.resize(n+1);var i=3*n;return this.uint16[i+0]=t,this.uint16[i+1]=e,this.uint16[i+2]=r,n},e}(Jr);pn.prototype.bytesPerElement=6,hr("StructArrayLayout3ui6",pn);var cn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;this.resize(r+1);var n=2*r;return this.uint16[n+0]=t,this.uint16[n+1]=e,r},e}(Jr);cn.prototype.bytesPerElement=4,hr("StructArrayLayout2ui4",cn);var hn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;this.resize(r+1);var n=2*r;return this.float32[n+0]=t,this.float32[n+1]=e,r},e}(Jr);hn.prototype.bytesPerElement=8,hr("StructArrayLayout2f8",hn);var fn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;this.resize(i+1);var o=4*i;return this.float32[o+0]=t,this.float32[o+1]=e,this.float32[o+2]=r,this.float32[o+3]=n,i},e}(Jr);fn.prototype.bytesPerElement=16,hr("StructArrayLayout4f16",fn);var yn=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorPointX:{configurable:!0},anchorPointY:{configurable:!0},x1:{configurable:!0},y1:{configurable:!0},x2:{configurable:!0},y2:{configurable:!0},featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0},radius:{configurable:!0},signedDistanceFromAnchor:{configurable:!0},anchorPoint:{configurable:!0}};return r.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorPointX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorPointY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.x1.get=function(){return this._structArray.int16[this._pos2+2]},r.x1.set=function(t){this._structArray.int16[this._pos2+2]=t;},r.y1.get=function(){return this._structArray.int16[this._pos2+3]},r.y1.set=function(t){this._structArray.int16[this._pos2+3]=t;},r.x2.get=function(){return this._structArray.int16[this._pos2+4]},r.x2.set=function(t){this._structArray.int16[this._pos2+4]=t;},r.y2.get=function(){return this._structArray.int16[this._pos2+5]},r.y2.set=function(t){this._structArray.int16[this._pos2+5]=t;},r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t;},r.radius.get=function(){return this._structArray.int16[this._pos2+10]},r.radius.set=function(t){this._structArray.int16[this._pos2+10]=t;},r.signedDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+11]},r.signedDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+11]=t;},r.anchorPoint.get=function(){return new s(this.anchorPointX,this.anchorPointY)},Object.defineProperties(e.prototype,r),e}(Kr);yn.prototype.size=24;var dn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new yn(this,t)},e}(rn);hr("CollisionBoxArray",dn);var vn=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},glyphStartIndex:{configurable:!0},numGlyphs:{configurable:!0},vertexStartIndex:{configurable:!0},lineStartIndex:{configurable:!0},lineLength:{configurable:!0},segment:{configurable:!0},lowerSize:{configurable:!0},upperSize:{configurable:!0},lineOffsetX:{configurable:!0},lineOffsetY:{configurable:!0},writingMode:{configurable:!0},hidden:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.glyphStartIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},r.numGlyphs.set=function(t){this._structArray.uint16[this._pos2+3]=t;},r.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},r.vertexStartIndex.set=function(t){this._structArray.uint32[this._pos4+2]=t;},r.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.lineStartIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},r.lineLength.set=function(t){this._structArray.uint32[this._pos4+4]=t;},r.segment.get=function(){return this._structArray.uint16[this._pos2+10]},r.segment.set=function(t){this._structArray.uint16[this._pos2+10]=t;},r.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},r.lowerSize.set=function(t){this._structArray.uint16[this._pos2+11]=t;},r.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},r.upperSize.set=function(t){this._structArray.uint16[this._pos2+12]=t;},r.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},r.lineOffsetX.set=function(t){this._structArray.float32[this._pos4+7]=t;},r.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},r.lineOffsetY.set=function(t){this._structArray.float32[this._pos4+8]=t;},r.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},r.writingMode.set=function(t){this._structArray.uint8[this._pos1+36]=t;},r.hidden.get=function(){return this._structArray.uint8[this._pos1+37]},r.hidden.set=function(t){this._structArray.uint8[this._pos1+37]=t;},Object.defineProperties(e.prototype,r),e}(Kr);vn.prototype.size=40;var mn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new vn(this,t)},e}(an);hr("PlacedSymbolArray",mn);var gn=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={offsetX:{configurable:!0}};return r.offsetX.get=function(){return this._structArray.float32[this._pos4+0]},r.offsetX.set=function(t){this._structArray.float32[this._pos4+0]=t;},Object.defineProperties(e.prototype,r),e}(Kr);gn.prototype.size=4;var xn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getoffsetX=function(t){return this.float32[1*t+0]},e.prototype.get=function(t){return new gn(this,t)},e}(sn);hr("GlyphOffsetArray",xn);var bn=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={x:{configurable:!0},y:{configurable:!0},tileUnitDistanceFromAnchor:{configurable:!0}};return r.x.get=function(){return this._structArray.int16[this._pos2+0]},r.x.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.y.get=function(){return this._structArray.int16[this._pos2+1]},r.y.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.tileUnitDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+2]},r.tileUnitDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+2]=t;},Object.defineProperties(e.prototype,r),e}(Kr);bn.prototype.size=6;var wn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getx=function(t){return this.int16[3*t+0]},e.prototype.gety=function(t){return this.int16[3*t+1]},e.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},e.prototype.get=function(t){return new bn(this,t)},e}(un);hr("SymbolLineVertexArray",wn);var _n=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0}};return r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+0]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+3]=t;},Object.defineProperties(e.prototype,r),e}(Kr);_n.prototype.size=8;var An=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new _n(this,t)},e}(ln);hr("FeatureIndexArray",An);var kn=$r([{name:"a_pos",components:2,type:"Int16"}],4).members,zn=function(t){void 0===t&&(t=[]),this.segments=t;};zn.prototype.prepareSegment=function(t,e,r){var n=this.segments[this.segments.length-1];return t>zn.MAX_VERTEX_ARRAY_LENGTH&&b("Max vertices per segment is "+zn.MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+t),(!n||n.vertexLength+t>zn.MAX_VERTEX_ARRAY_LENGTH)&&(n={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},this.segments.push(n)),n},zn.prototype.get=function(){return this.segments},zn.prototype.destroy=function(){for(var t=0,e=this.segments;t<e.length;t+=1){var r=e[t];for(var n in r.vaos)r.vaos[n].destroy();}},zn.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,hr("SegmentVector",zn);var Sn=function(t,e){return 256*(t=c(Math.floor(t),0,255))+(e=c(Math.floor(e),0,255))};function Mn(t){return[Sn(255*t.r,255*t.g),Sn(255*t.b,255*t.a)]}var Vn=function(t,e,r){this.value=t,this.name=e,this.type=r,this.statistics={max:-1/0};};Vn.prototype.defines=function(){return["#define HAS_UNIFORM_u_"+this.name]},Vn.prototype.populatePaintArray=function(){},Vn.prototype.upload=function(){},Vn.prototype.destroy=function(){},Vn.prototype.setUniforms=function(t,e,r,n){var i=n.constantOr(this.value),o=t.gl;"color"===this.type?o.uniform4f(e.uniforms["u_"+this.name],i.r,i.g,i.b,i.a):o.uniform1f(e.uniforms["u_"+this.name],i);};var Bn=function(t,e,r){this.expression=t,this.name=e,this.type=r,this.statistics={max:-1/0};var n="color"===r?hn:sn;this.paintVertexAttributes=[{name:"a_"+e,type:"Float32",components:"color"===r?2:1,offset:0}],this.paintVertexArray=new n;};Bn.prototype.defines=function(){return[]},Bn.prototype.populatePaintArray=function(t,e){var r=this.paintVertexArray,n=r.length;r.reserve(t);var i=this.expression.evaluate(new Br(0),e);if("color"===this.type)for(var o=Mn(i),a=n;a<t;a++)r.emplaceBack(o[0],o[1]);else{for(var s=n;s<t;s++)r.emplaceBack(i);this.statistics.max=Math.max(this.statistics.max,i);}},Bn.prototype.upload=function(t){this.paintVertexArray&&(this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes));},Bn.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},Bn.prototype.setUniforms=function(t,e){t.gl.uniform1f(e.uniforms["a_"+this.name+"_t"],0);};var Cn=function(t,e,r,n,i){this.expression=t,this.name=e,this.type=r,this.useIntegerZoom=n,this.zoom=i,this.statistics={max:-1/0};var o="color"===r?fn:hn;this.paintVertexAttributes=[{name:"a_"+e,type:"Float32",components:"color"===r?4:2,offset:0}],this.paintVertexArray=new o;};Cn.prototype.defines=function(){return[]},Cn.prototype.populatePaintArray=function(t,e){var r=this.paintVertexArray,n=r.length;r.reserve(t);var i=this.expression.evaluate(new Br(this.zoom),e),o=this.expression.evaluate(new Br(this.zoom+1),e);if("color"===this.type)for(var a=Mn(i),s=Mn(o),u=n;u<t;u++)r.emplaceBack(a[0],a[1],s[0],s[1]);else{for(var l=n;l<t;l++)r.emplaceBack(i,o);this.statistics.max=Math.max(this.statistics.max,i,o);}},Cn.prototype.upload=function(t){this.paintVertexArray&&(this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes));},Cn.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},Cn.prototype.interpolationFactor=function(t){return this.useIntegerZoom?this.expression.interpolationFactor(Math.floor(t),this.zoom,this.zoom+1):this.expression.interpolationFactor(t,this.zoom,this.zoom+1)},Cn.prototype.setUniforms=function(t,e,r){t.gl.uniform1f(e.uniforms["a_"+this.name+"_t"],this.interpolationFactor(r.zoom));};var In=function(){this.binders={},this.cacheKey="",this._buffers=[];};In.createDynamic=function(t,e,r){var n=new In,i=[];for(var o in t.paint._values)if(r(o)){var a=t.paint.get(o);if(a instanceof Or&&a.property.specification["property-function"]){var s=Fn(o,t.type),u=a.property.specification.type,l=a.property.useIntegerZoom;"constant"===a.value.kind?(n.binders[o]=new Vn(a.value,s,u),i.push("/u_"+s)):"source"===a.value.kind?(n.binders[o]=new Bn(a.value,s,u),i.push("/a_"+s)):(n.binders[o]=new Cn(a.value,s,u,l,e),i.push("/z_"+s));}}return n.cacheKey=i.sort().join(""),n},In.prototype.populatePaintArrays=function(t,e){for(var r in this.binders)this.binders[r].populatePaintArray(t,e);},In.prototype.defines=function(){var t=[];for(var e in this.binders)t.push.apply(t,this.binders[e].defines());return t},In.prototype.setUniforms=function(t,e,r,n){for(var i in this.binders){this.binders[i].setUniforms(t,e,n,r.get(i));}},In.prototype.getPaintVertexBuffers=function(){return this._buffers},In.prototype.upload=function(t){for(var e in this.binders)this.binders[e].upload(t);var r=[];for(var n in this.binders){var i=this.binders[n];(i instanceof Bn||i instanceof Cn)&&i.paintVertexBuffer&&r.push(i.paintVertexBuffer);}this._buffers=r;},In.prototype.destroy=function(){for(var t in this.binders)this.binders[t].destroy();};var En=function(t,e,r,n){void 0===n&&(n=function(){return!0}),this.programConfigurations={};for(var i=0,o=e;i<o.length;i+=1){var a=o[i];this.programConfigurations[a.id]=In.createDynamic(a,r,n),this.programConfigurations[a.id].layoutAttributes=t;}};function Fn(t,e){return{"text-opacity":"opacity","icon-opacity":"opacity","text-color":"fill_color","icon-color":"fill_color","text-halo-color":"halo_color","icon-halo-color":"halo_color","text-halo-blur":"halo_blur","icon-halo-blur":"halo_blur","text-halo-width":"halo_width","icon-halo-width":"halo_width","line-gap-width":"gapwidth"}[t]||t.replace(e+"-","").replace(/-/g,"_")}En.prototype.populatePaintArrays=function(t,e){for(var r in this.programConfigurations)this.programConfigurations[r].populatePaintArrays(t,e);},En.prototype.get=function(t){return this.programConfigurations[t]},En.prototype.upload=function(t){for(var e in this.programConfigurations)this.programConfigurations[e].upload(t);},En.prototype.destroy=function(){for(var t in this.programConfigurations)this.programConfigurations[t].destroy();},hr("ConstantBinder",Vn),hr("SourceExpressionBinder",Bn),hr("CompositeExpressionBinder",Cn),hr("ProgramConfiguration",In,{omit:["_buffers"]}),hr("ProgramConfigurationSet",En);var Pn=8192;var Tn,On=(Tn=16,{min:-1*Math.pow(2,Tn-1),max:Math.pow(2,Tn-1)-1});function Ln(t){for(var e=Pn/t.extent,r=t.loadGeometry(),n=0;n<r.length;n++)for(var i=r[n],o=0;o<i.length;o++){var a=i[o];a.x=Math.round(a.x*e),a.y=Math.round(a.y*e),(a.x<On.min||a.x>On.max||a.y<On.min||a.y>On.max)&&b("Geometry exceeds allowed extent, reduce your vector tile buffer size");}return r}function jn(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}var qn=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.layoutVertexArray=new Xr,this.indexArray=new pn,this.segments=new zn,this.programConfigurations=new En(kn,t.layers,t.zoom);};function Rn(t,e,r){for(var n=0;n<t.length;n++){var i=t[n];if(Xn(i,e))return!0;if(Jn(e,i,r))return!0}return!1}function Un(t,e){if(1===t.length&&1===t[0].length)return Hn(e,t[0][0]);for(var r=0;r<e.length;r++)for(var n=e[r],i=0;i<n.length;i++)if(Hn(t,n[i]))return!0;for(var o=0;o<t.length;o++){for(var a=t[o],s=0;s<a.length;s++)if(Hn(e,a[s]))return!0;for(var u=0;u<e.length;u++)if(Zn(a,e[u]))return!0}return!1}function Dn(t,e,r){for(var n=0;n<e.length;n++)for(var i=e[n],o=0;o<t.length;o++){var a=t[o];if(a.length>=3)for(var s=0;s<i.length;s++)if(Xn(a,i[s]))return!0;if(Nn(a,i,r))return!0}return!1}function Nn(t,e,r){if(t.length>1){if(Zn(t,e))return!0;for(var n=0;n<e.length;n++)if(Jn(e[n],t,r))return!0}for(var i=0;i<t.length;i++)if(Jn(t[i],e,r))return!0;return!1}function Zn(t,e){if(0===t.length||0===e.length)return!1;for(var r=0;r<t.length-1;r++)for(var n=t[r],i=t[r+1],o=0;o<e.length-1;o++){if(Kn(n,i,e[o],e[o+1]))return!0}return!1}function Kn(t,e,r,n){return w(t,r,n)!==w(e,r,n)&&w(t,e,r)!==w(t,e,n)}function Jn(t,e,r){var n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(var i=1;i<e.length;i++){if($n(t,e[i-1],e[i])<n)return!0}return!1}function $n(t,e,r){var n=e.distSqr(r);if(0===n)return t.distSqr(e);var i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return i<0?t.distSqr(e):i>1?t.distSqr(r):t.distSqr(r.sub(e)._mult(i)._add(e))}function Hn(t,e){for(var r,n,i,o=!1,a=0;a<t.length;a++)for(var s=0,u=(r=t[a]).length-1;s<r.length;u=s++)n=r[s],i=r[u],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(o=!o);return o}function Xn(t,e){for(var r=!1,n=0,i=t.length-1;n<t.length;i=n++){var o=t[n],a=t[i];o.y>e.y!=a.y>e.y&&e.x<(a.x-o.x)*(e.y-o.y)/(a.y-o.y)+o.x&&(r=!r);}return r}function Gn(t,e,r){var n=e.paint.get(t).value;return"constant"===n.kind?n.value:r.programConfigurations.get(e.id).binders[t].statistics.max}function Yn(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function Wn(t,e,r,n,i){if(!e[0]&&!e[1])return t;var o=s.convert(e);"viewport"===r&&o._rotate(-n);for(var a=[],u=0;u<t.length;u++){for(var l=t[u],p=[],c=0;c<l.length;c++)p.push(l[c].sub(o._mult(i)));a.push(p);}return a}qn.prototype.populate=function(t,e){for(var r=0,n=t;r<n.length;r+=1){var i=n[r],o=i.feature,a=i.index,s=i.sourceLayerIndex;if(this.layers[0]._featureFilter(new Br(this.zoom),o)){var u=Ln(o);this.addFeature(o,u),e.featureIndex.insert(o,u,a,s,this.index);}}},qn.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},qn.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,kn),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.programConfigurations.upload(t);},qn.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},qn.prototype.addFeature=function(t,e){for(var r=0,n=e;r<n.length;r+=1)for(var i=0,o=n[r];i<o.length;i+=1){var a=o[i],s=a.x,u=a.y;if(!(s<0||s>=Pn||u<0||u>=Pn)){var l=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),p=l.vertexLength;jn(this.layoutVertexArray,s,u,-1,-1),jn(this.layoutVertexArray,s,u,1,-1),jn(this.layoutVertexArray,s,u,1,1),jn(this.layoutVertexArray,s,u,-1,1),this.indexArray.emplaceBack(p,p+1,p+2),this.indexArray.emplaceBack(p,p+3,p+2),l.vertexLength+=4,l.primitiveLength+=2;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t);},hr("CircleBucket",qn,{omit:["layers"]});var Qn={paint:new Dr({"circle-radius":new qr(E.paint_circle["circle-radius"]),"circle-color":new qr(E.paint_circle["circle-color"]),"circle-blur":new qr(E.paint_circle["circle-blur"]),"circle-opacity":new qr(E.paint_circle["circle-opacity"]),"circle-translate":new jr(E.paint_circle["circle-translate"]),"circle-translate-anchor":new jr(E.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new jr(E.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new jr(E.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new qr(E.paint_circle["circle-stroke-width"]),"circle-stroke-color":new qr(E.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new qr(E.paint_circle["circle-stroke-opacity"])})},ti=n(function(t,e){var r;t.exports=((r=new Float32Array(3))[0]=0,r[1]=0,r[2]=0,function(){var t=new Float32Array(4);t[0]=0,t[1]=0,t[2]=0,t[3]=0;}(),{vec3:{transformMat3:function(t,e,r){var n=e[0],i=e[1],o=e[2];return t[0]=n*r[0]+i*r[3]+o*r[6],t[1]=n*r[1]+i*r[4]+o*r[7],t[2]=n*r[2]+i*r[5]+o*r[8],t}},vec4:{transformMat4:function(t,e,r){var n=e[0],i=e[1],o=e[2],a=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*o+r[12]*a,t[1]=r[1]*n+r[5]*i+r[9]*o+r[13]*a,t[2]=r[2]*n+r[6]*i+r[10]*o+r[14]*a,t[3]=r[3]*n+r[7]*i+r[11]*o+r[15]*a,t}},mat2:{create:function(){var t=new Float32Array(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},rotate:function(t,e,r){var n=e[0],i=e[1],o=e[2],a=e[3],s=Math.sin(r),u=Math.cos(r);return t[0]=n*u+o*s,t[1]=i*u+a*s,t[2]=n*-s+o*u,t[3]=i*-s+a*u,t},scale:function(t,e,r){var n=e[0],i=e[1],o=e[2],a=e[3],s=r[0],u=r[1];return t[0]=n*s,t[1]=i*s,t[2]=o*u,t[3]=a*u,t}},mat3:{create:function(){var t=new Float32Array(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromRotation:function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}},mat4:{create:function(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},translate:function(t,e,r){var n,i,o,a,s,u,l,p,c,h,f,y,d=r[0],v=r[1],m=r[2];return e===t?(t[12]=e[0]*d+e[4]*v+e[8]*m+e[12],t[13]=e[1]*d+e[5]*v+e[9]*m+e[13],t[14]=e[2]*d+e[6]*v+e[10]*m+e[14],t[15]=e[3]*d+e[7]*v+e[11]*m+e[15]):(n=e[0],i=e[1],o=e[2],a=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],t[0]=n,t[1]=i,t[2]=o,t[3]=a,t[4]=s,t[5]=u,t[6]=l,t[7]=p,t[8]=c,t[9]=h,t[10]=f,t[11]=y,t[12]=n*d+s*v+c*m+e[12],t[13]=i*d+u*v+h*m+e[13],t[14]=o*d+l*v+f*m+e[14],t[15]=a*d+p*v+y*m+e[15]),t},scale:function(t,e,r){var n=r[0],i=r[1],o=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},multiply:function(t,e,r){var n=e[0],i=e[1],o=e[2],a=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],d=e[12],v=e[13],m=e[14],g=e[15],x=r[0],b=r[1],w=r[2],_=r[3];return t[0]=x*n+b*s+w*c+_*d,t[1]=x*i+b*u+w*h+_*v,t[2]=x*o+b*l+w*f+_*m,t[3]=x*a+b*p+w*y+_*g,x=r[4],b=r[5],w=r[6],_=r[7],t[4]=x*n+b*s+w*c+_*d,t[5]=x*i+b*u+w*h+_*v,t[6]=x*o+b*l+w*f+_*m,t[7]=x*a+b*p+w*y+_*g,x=r[8],b=r[9],w=r[10],_=r[11],t[8]=x*n+b*s+w*c+_*d,t[9]=x*i+b*u+w*h+_*v,t[10]=x*o+b*l+w*f+_*m,t[11]=x*a+b*p+w*y+_*g,x=r[12],b=r[13],w=r[14],_=r[15],t[12]=x*n+b*s+w*c+_*d,t[13]=x*i+b*u+w*h+_*v,t[14]=x*o+b*l+w*f+_*m,t[15]=x*a+b*p+w*y+_*g,t},perspective:function(t,e,r,n,i){var o=1/Math.tan(e/2),a=1/(n-i);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(i+n)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*i*n*a,t[15]=0,t},rotateX:function(t,e,r){var n=Math.sin(r),i=Math.cos(r),o=e[4],a=e[5],s=e[6],u=e[7],l=e[8],p=e[9],c=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*i+l*n,t[5]=a*i+p*n,t[6]=s*i+c*n,t[7]=u*i+h*n,t[8]=l*i-o*n,t[9]=p*i-a*n,t[10]=c*i-s*n,t[11]=h*i-u*n,t},rotateZ:function(t,e,r){var n=Math.sin(r),i=Math.cos(r),o=e[0],a=e[1],s=e[2],u=e[3],l=e[4],p=e[5],c=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*i+l*n,t[1]=a*i+p*n,t[2]=s*i+c*n,t[3]=u*i+h*n,t[4]=l*i-o*n,t[5]=p*i-a*n,t[6]=c*i-s*n,t[7]=h*i-u*n,t},invert:function(t,e){var r=e[0],n=e[1],i=e[2],o=e[3],a=e[4],s=e[5],u=e[6],l=e[7],p=e[8],c=e[9],h=e[10],f=e[11],y=e[12],d=e[13],v=e[14],m=e[15],g=r*s-n*a,x=r*u-i*a,b=r*l-o*a,w=n*u-i*s,_=n*l-o*s,A=i*l-o*u,k=p*d-c*y,z=p*v-h*y,S=p*m-f*y,M=c*v-h*d,V=c*m-f*d,B=h*m-f*v,C=g*B-x*V+b*M+w*S-_*z+A*k;return C?(C=1/C,t[0]=(s*B-u*V+l*M)*C,t[1]=(i*V-n*B-o*M)*C,t[2]=(d*A-v*_+m*w)*C,t[3]=(h*_-c*A-f*w)*C,t[4]=(u*S-a*B-l*z)*C,t[5]=(r*B-i*S+o*z)*C,t[6]=(v*b-y*A-m*x)*C,t[7]=(p*A-h*b+f*x)*C,t[8]=(a*V-s*S+l*k)*C,t[9]=(n*S-r*V-o*k)*C,t[10]=(y*_-d*b+m*g)*C,t[11]=(c*b-p*_-f*g)*C,t[12]=(s*z-a*M-u*k)*C,t[13]=(r*M-n*z+i*k)*C,t[14]=(d*x-y*w-v*g)*C,t[15]=(p*w-c*x+h*g)*C,t):null},ortho:function(t,e,r,n,i,o,a){var s=1/(e-r),u=1/(n-i),l=1/(o-a);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+r)*s,t[13]=(i+n)*u,t[14]=(a+o)*l,t[15]=1,t}}});}),ei=(ti.vec3,ti.vec4),ri=(ti.mat2,ti.mat3,ti.mat4),ni=function(t){function e(e){t.call(this,e,Qn);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new qn(t)},e.prototype.queryRadius=function(t){var e=t;return Gn("circle-radius",this,e)+Gn("circle-stroke-width",this,e)+Yn(this.paint.get("circle-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,o,a){for(var s=Wn(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),i.angle,o),u=this.paint.get("circle-radius").evaluate(e)+this.paint.get("circle-stroke-width").evaluate(e),l="map"===this.paint.get("circle-pitch-alignment"),p=l?s:function(t,e,r){return t.map(function(t){return t.map(function(t){return ii(t,e,r)})})}(s,a,i),c=l?u*o:u,h=0,f=r;h<f.length;h+=1)for(var y=0,d=f[h];y<d.length;y+=1){var v=d[y],m=l?v:ii(v,a,i),g=c,x=ei.transformMat4([],[v.x,v.y,0,1],a);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?g*=x[3]/i.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(g*=i.cameraToCenterDistance/x[3]),Rn(p,m,g))return!0}return!1},e}(Nr);function ii(t,e,r){var n=ei.transformMat4([],[t.x,t.y,0,1],e);return new s((n[0]/n[3]+1)*r.width*.5,(n[1]/n[3]+1)*r.height*.5)}var oi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(qn);function ai(t,e,r,n){var i=e.width,o=e.height;if(n){if(n.length!==i*o*r)throw new RangeError("mismatched image size")}else n=new Uint8Array(i*o*r);return t.width=i,t.height=o,t.data=n,t}function si(t,e,r){var n=e.width,i=e.height;if(n!==t.width||i!==t.height){var o=ai({},{width:n,height:i},r);ui(t,o,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,n),height:Math.min(t.height,i)},r),t.width=n,t.height=i,t.data=o.data;}}function ui(t,e,r,n,i,o){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");for(var a=t.data,s=e.data,u=0;u<i.height;u++)for(var l=((r.y+u)*t.width+r.x)*o,p=((n.y+u)*e.width+n.x)*o,c=0;c<i.width*o;c++)s[p+c]=a[l+c];return e}hr("HeatmapBucket",oi,{omit:["layers"]});var li=function(t,e){ai(this,t,1,e);};li.prototype.resize=function(t){si(this,t,1);},li.prototype.clone=function(){return new li({width:this.width,height:this.height},new Uint8Array(this.data))},li.copy=function(t,e,r,n,i){ui(t,e,r,n,i,1);};var pi=function(t,e){ai(this,t,4,e);};pi.prototype.resize=function(t){si(this,t,4);},pi.prototype.clone=function(){return new pi({width:this.width,height:this.height},new Uint8Array(this.data))},pi.copy=function(t,e,r,n,i){ui(t,e,r,n,i,4);},hr("AlphaImage",li),hr("RGBAImage",pi);var ci={paint:new Dr({"heatmap-radius":new qr(E.paint_heatmap["heatmap-radius"]),"heatmap-weight":new qr(E.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new jr(E.paint_heatmap["heatmap-intensity"]),"heatmap-color":new Ur(E.paint_heatmap["heatmap-color"]),"heatmap-opacity":new jr(E.paint_heatmap["heatmap-opacity"])})};function hi(t,e){for(var r=new Uint8Array(1024),n={},i=0,o=0;i<256;i++,o+=4){n[e]=i/255;var a=t.evaluate(n);r[o+0]=Math.floor(255*a.r/a.a),r[o+1]=Math.floor(255*a.g/a.a),r[o+2]=Math.floor(255*a.b/a.a),r[o+3]=Math.floor(255*a.a);}return new pi({width:256,height:1},r)}var fi=function(t){function e(e){t.call(this,e,ci),this._updateColorRamp();}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new oi(t)},e.prototype.setPaintProperty=function(e,r,n){t.prototype.setPaintProperty.call(this,e,r,n),"heatmap-color"===e&&this._updateColorRamp();},e.prototype._updateColorRamp=function(){var t=this._transitionablePaint._values["heatmap-color"].value.expression;this.colorRamp=hi(t,"heatmapDensity"),this.colorRampTexture=null;},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(Nr),yi={paint:new Dr({"hillshade-illumination-direction":new jr(E.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new jr(E.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new jr(E.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new jr(E.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new jr(E.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new jr(E.paint_hillshade["hillshade-accent-color"])})},di=function(t){function e(e){t.call(this,e,yi);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},e}(Nr),vi=$r([{name:"a_pos",components:2,type:"Int16"}],4).members,mi=xi,gi=xi;function xi(t,e,r){r=r||2;var n,i,o,a,s,u,l,p=e&&e.length,c=p?e[0]*r:t.length,h=bi(t,0,c,r,!0),f=[];if(!h)return f;if(p&&(h=function(t,e,r,n){var i,o,a,s,u,l=[];for(i=0,o=e.length;i<o;i++)a=e[i]*n,s=i<o-1?e[i+1]*n:t.length,(u=bi(t,a,s,n,!1))===u.next&&(u.steiner=!0),l.push(Ci(u));for(l.sort(Mi),i=0;i<l.length;i++)Vi(l[i],r),r=wi(r,r.next);return r}(t,e,h,r)),t.length>80*r){n=o=t[0],i=a=t[1];for(var y=r;y<c;y+=r)(s=t[y])<n&&(n=s),(u=t[y+1])<i&&(i=u),s>o&&(o=s),u>a&&(a=u);l=0!==(l=Math.max(o-n,a-i))?1/l:0;}return _i(h,f,r,n,i,l),f}function bi(t,e,r,n,i){var o,a;if(i===Ui(t,e,r,n)>0)for(o=e;o<r;o+=n)a=ji(o,t[o],t[o+1],a);else for(o=r-n;o>=e;o-=n)a=ji(o,t[o],t[o+1],a);return a&&Pi(a,a.next)&&(qi(a),a=a.next),a}function wi(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!Pi(n,n.next)&&0!==Fi(n.prev,n,n.next))n=n.next;else{if(qi(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function _i(t,e,r,n,i,o,a){if(t){!a&&o&&function(t,e,r,n){var i=t;do{null===i.z&&(i.z=Bi(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,o,a,s,u,l=1;do{for(r=t,t=null,o=null,a=0;r;){for(a++,n=r,s=0,e=0;e<l&&(s++,n=n.nextZ);e++);for(u=l;s>0||u>0&&n;)0!==s&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;r=n;}o.nextZ=null,l*=2;}while(a>1)}(i);}(t,n,i,o);for(var s,u,l=t;t.prev!==t.next;)if(s=t.prev,u=t.next,o?ki(t,n,i,o):Ai(t))e.push(s.i/r),e.push(t.i/r),e.push(u.i/r),qi(t),t=u.next,l=u.next;else if((t=u)===l){a?1===a?_i(t=zi(t,e,r),e,r,n,i,o,2):2===a&&Si(t,e,r,n,i,o):_i(wi(t),e,r,n,i,o,1);break}}}function Ai(t){var e=t.prev,r=t,n=t.next;if(Fi(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(Ii(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&Fi(i.prev,i,i.next)>=0)return!1;i=i.next;}return!0}function ki(t,e,r,n){var i=t.prev,o=t,a=t.next;if(Fi(i,o,a)>=0)return!1;for(var s=i.x<o.x?i.x<a.x?i.x:a.x:o.x<a.x?o.x:a.x,u=i.y<o.y?i.y<a.y?i.y:a.y:o.y<a.y?o.y:a.y,l=i.x>o.x?i.x>a.x?i.x:a.x:o.x>a.x?o.x:a.x,p=i.y>o.y?i.y>a.y?i.y:a.y:o.y>a.y?o.y:a.y,c=Bi(s,u,e,r,n),h=Bi(l,p,e,r,n),f=t.prevZ,y=t.nextZ;f&&f.z>=c&&y&&y.z<=h;){if(f!==t.prev&&f!==t.next&&Ii(i.x,i.y,o.x,o.y,a.x,a.y,f.x,f.y)&&Fi(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,y!==t.prev&&y!==t.next&&Ii(i.x,i.y,o.x,o.y,a.x,a.y,y.x,y.y)&&Fi(y.prev,y,y.next)>=0)return!1;y=y.nextZ;}for(;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&Ii(i.x,i.y,o.x,o.y,a.x,a.y,f.x,f.y)&&Fi(f.prev,f,f.next)>=0)return!1;f=f.prevZ;}for(;y&&y.z<=h;){if(y!==t.prev&&y!==t.next&&Ii(i.x,i.y,o.x,o.y,a.x,a.y,y.x,y.y)&&Fi(y.prev,y,y.next)>=0)return!1;y=y.nextZ;}return!0}function zi(t,e,r){var n=t;do{var i=n.prev,o=n.next.next;!Pi(i,o)&&Ti(i,n,n.next,o)&&Oi(i,o)&&Oi(o,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(o.i/r),qi(n),qi(n.next),n=t=o),n=n.next;}while(n!==t);return n}function Si(t,e,r,n,i,o){var a=t;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&Ei(a,s)){var u=Li(a,s);return a=wi(a,a.next),u=wi(u,u.next),_i(a,e,r,n,i,o),void _i(u,e,r,n,i,o)}s=s.next;}a=a.next;}while(a!==t)}function Mi(t,e){return t.x-e.x}function Vi(t,e){if(e=function(t,e){var r,n=e,i=t.x,o=t.y,a=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){var s=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=i&&s>a){if(a=s,s===i){if(o===n.y)return n;if(o===n.next.y)return n.next}r=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!r)return null;if(i===a)return r.prev;var u,l=r,p=r.x,c=r.y,h=1/0;n=r.next;for(;n!==l;)i>=n.x&&n.x>=p&&i!==n.x&&Ii(o<c?i:a,o,p,c,o<c?a:i,o,n.x,n.y)&&((u=Math.abs(o-n.y)/(i-n.x))<h||u===h&&n.x>r.x)&&Oi(n,t)&&(r=n,h=u),n=n.next;return r}(t,e)){var r=Li(e,t);wi(r,r.next);}}function Bi(t,e,r,n,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ci(t){var e=t,r=t;do{e.x<r.x&&(r=e),e=e.next;}while(e!==t);return r}function Ii(t,e,r,n,i,o,a,s){return(i-a)*(e-s)-(t-a)*(o-s)>=0&&(t-a)*(n-s)-(r-a)*(e-s)>=0&&(r-a)*(o-s)-(i-a)*(n-s)>=0}function Ei(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&Ti(r,r.next,t,e))return!0;r=r.next;}while(r!==t);return!1}(t,e)&&Oi(t,e)&&Oi(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do{r.y>o!=r.next.y>o&&r.next.y!==r.y&&i<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)}function Fi(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Pi(t,e){return t.x===e.x&&t.y===e.y}function Ti(t,e,r,n){return!!(Pi(t,e)&&Pi(r,n)||Pi(t,n)&&Pi(r,e))||Fi(t,e,r)>0!=Fi(t,e,n)>0&&Fi(r,n,t)>0!=Fi(r,n,e)>0}function Oi(t,e){return Fi(t.prev,t,t.next)<0?Fi(t,e,t.next)>=0&&Fi(t,t.prev,e)>=0:Fi(t,e,t.prev)<0||Fi(t,t.next,e)<0}function Li(t,e){var r=new Ri(t.i,t.x,t.y),n=new Ri(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function ji(t,e,r,n){var i=new Ri(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function Ri(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function Ui(t,e,r,n){for(var i=0,o=e,a=r-n;o<r;o+=n)i+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o;return i}xi.deviation=function(t,e,r,n){var i=e&&e.length,o=i?e[0]*r:t.length,a=Math.abs(Ui(t,0,o,r));if(i)for(var s=0,u=e.length;s<u;s++){var l=e[s]*r,p=s<u-1?e[s+1]*r:t.length;a-=Math.abs(Ui(t,l,p,r));}var c=0;for(s=0;s<n.length;s+=3){var h=n[s]*r,f=n[s+1]*r,y=n[s+2]*r;c+=Math.abs((t[h]-t[y])*(t[f+1]-t[h+1])-(t[h]-t[f])*(t[y+1]-t[h+1]));}return 0===a&&0===c?0:Math.abs((c-a)/a)},xi.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var a=0;a<e;a++)r.vertices.push(t[i][o][a]);i>0&&(n+=t[i-1].length,r.holes.push(n));}return r},mi.default=gi;var Di=Zi,Ni=Zi;function Zi(t,e,r,n,i){!function t(e,r,n,i,o){for(;i>n;){if(i-n>600){var a=i-n+1,s=r-n+1,u=Math.log(a),l=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*l*(a-l)/a)*(s-a/2<0?-1:1),c=Math.max(n,Math.floor(r-s*l/a+p)),h=Math.min(i,Math.floor(r+(a-s)*l/a+p));t(e,r,c,h,o);}var f=e[r],y=n,d=i;for(Ki(e,n,r),o(e[i],f)>0&&Ki(e,n,i);y<d;){for(Ki(e,y,d),y++,d--;o(e[y],f)<0;)y++;for(;o(e[d],f)>0;)d--;}0===o(e[n],f)?Ki(e,n,d):Ki(e,++d,i),d<=r&&(n=d+1),r<=d&&(i=d-1);}}(t,e,r||0,n||t.length-1,i||Ji);}function Ki(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function Ji(t,e){return t<e?-1:t>e?1:0}function $i(t,e){var r=t.length;if(r<=1)return[t];for(var n,i,o=[],a=0;a<r;a++){var s=_(t[a]);0!==s&&(t[a].area=Math.abs(s),void 0===i&&(i=s<0),i===s<0?(n&&o.push(n),n=[t[a]]):n.push(t[a]));}if(n&&o.push(n),e>1)for(var u=0;u<o.length;u++)o[u].length<=e||(Di(o[u],e,1,o[u].length-1,Hi),o[u]=o[u].slice(0,e));return o}function Hi(t,e){return e.area-t.area}Di.default=Ni;var Xi=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.layoutVertexArray=new Xr,this.indexArray=new pn,this.indexArray2=new cn,this.programConfigurations=new En(vi,t.layers,t.zoom),this.segments=new zn,this.segments2=new zn;};Xi.prototype.populate=function(t,e){for(var r=0,n=t;r<n.length;r+=1){var i=n[r],o=i.feature,a=i.index,s=i.sourceLayerIndex;if(this.layers[0]._featureFilter(new Br(this.zoom),o)){var u=Ln(o);this.addFeature(o,u),e.featureIndex.insert(o,u,a,s,this.index);}}},Xi.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Xi.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,vi),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2),this.programConfigurations.upload(t);},Xi.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());},Xi.prototype.addFeature=function(t,e){for(var r=0,n=$i(e,500);r<n.length;r+=1){for(var i=n[r],o=0,a=0,s=i;a<s.length;a+=1){o+=s[a].length;}for(var u=this.segments.prepareSegment(o,this.layoutVertexArray,this.indexArray),l=u.vertexLength,p=[],c=[],h=0,f=i;h<f.length;h+=1){var y=f[h];if(0!==y.length){y!==i[0]&&c.push(p.length/2);var d=this.segments2.prepareSegment(y.length,this.layoutVertexArray,this.indexArray2),v=d.vertexLength;this.layoutVertexArray.emplaceBack(y[0].x,y[0].y),this.indexArray2.emplaceBack(v+y.length-1,v),p.push(y[0].x),p.push(y[0].y);for(var m=1;m<y.length;m++)this.layoutVertexArray.emplaceBack(y[m].x,y[m].y),this.indexArray2.emplaceBack(v+m-1,v+m),p.push(y[m].x),p.push(y[m].y);d.vertexLength+=y.length,d.primitiveLength+=y.length;}}for(var g=mi(p,c),x=0;x<g.length;x+=3)this.indexArray.emplaceBack(l+g[x],l+g[x+1],l+g[x+2]);u.vertexLength+=o,u.primitiveLength+=g.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t);},hr("FillBucket",Xi,{omit:["layers"]});var Gi={paint:new Dr({"fill-antialias":new jr(E.paint_fill["fill-antialias"]),"fill-opacity":new qr(E.paint_fill["fill-opacity"]),"fill-color":new qr(E.paint_fill["fill-color"]),"fill-outline-color":new qr(E.paint_fill["fill-outline-color"]),"fill-translate":new jr(E.paint_fill["fill-translate"]),"fill-translate-anchor":new jr(E.paint_fill["fill-translate-anchor"]),"fill-pattern":new Rr(E.paint_fill["fill-pattern"])})},Yi=function(t){function e(e){t.call(this,e,Gi);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(t){this.paint=this._transitioningPaint.possiblyEvaluate(t);var e=this.paint._values["fill-outline-color"];"constant"===e.value.kind&&void 0===e.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);},e.prototype.createBucket=function(t){return new Xi(t)},e.prototype.queryRadius=function(){return Yn(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,o){return Un(Wn(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),i.angle,o),r)},e}(Nr),Wi=$r([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4).members,Qi=Math.pow(2,13);function to(t,e,r,n,i,o,a,s){t.emplaceBack(e,r,2*Math.floor(n*Qi)+a,i*Qi*2,o*Qi*2,Math.round(s));}var eo=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.layoutVertexArray=new Yr,this.indexArray=new pn,this.programConfigurations=new En(Wi,t.layers,t.zoom),this.segments=new zn;};function ro(t,e){return t.x===e.x&&(t.x<0||t.x>Pn)||t.y===e.y&&(t.y<0||t.y>Pn)}function no(t){return t.every(function(t){return t.x<0})||t.every(function(t){return t.x>Pn})||t.every(function(t){return t.y<0})||t.every(function(t){return t.y>Pn})}eo.prototype.populate=function(t,e){for(var r=0,n=t;r<n.length;r+=1){var i=n[r],o=i.feature,a=i.index,s=i.sourceLayerIndex;if(this.layers[0]._featureFilter(new Br(this.zoom),o)){var u=Ln(o);this.addFeature(o,u),e.featureIndex.insert(o,u,a,s,this.index);}}},eo.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},eo.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Wi),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.programConfigurations.upload(t);},eo.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},eo.prototype.addFeature=function(t,e){for(var r=0,n=$i(e,500);r<n.length;r+=1){for(var i=n[r],o=0,a=0,s=i;a<s.length;a+=1){o+=s[a].length;}for(var u=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),l=0,p=i;l<p.length;l+=1){var c=p[l];if(0!==c.length&&!no(c))for(var h=0,f=0;f<c.length;f++){var y=c[f];if(f>=1){var d=c[f-1];if(!ro(y,d)){u.vertexLength+4>zn.MAX_VERTEX_ARRAY_LENGTH&&(u=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));var v=y.sub(d)._perp()._unit(),m=d.dist(y);h+m>32768&&(h=0),to(this.layoutVertexArray,y.x,y.y,v.x,v.y,0,0,h),to(this.layoutVertexArray,y.x,y.y,v.x,v.y,0,1,h),h+=m,to(this.layoutVertexArray,d.x,d.y,v.x,v.y,0,0,h),to(this.layoutVertexArray,d.x,d.y,v.x,v.y,0,1,h);var g=u.vertexLength;this.indexArray.emplaceBack(g,g+1,g+2),this.indexArray.emplaceBack(g+1,g+2,g+3),u.vertexLength+=4,u.primitiveLength+=2;}}}}u.vertexLength+o>zn.MAX_VERTEX_ARRAY_LENGTH&&(u=this.segments.prepareSegment(o,this.layoutVertexArray,this.indexArray));for(var x=[],b=[],w=u.vertexLength,_=0,A=i;_<A.length;_+=1){var k=A[_];if(0!==k.length){k!==i[0]&&b.push(x.length/2);for(var z=0;z<k.length;z++){var S=k[z];to(this.layoutVertexArray,S.x,S.y,0,0,1,1,0),x.push(S.x),x.push(S.y);}}}for(var M=mi(x,b),V=0;V<M.length;V+=3)this.indexArray.emplaceBack(w+M[V],w+M[V+1],w+M[V+2]);u.primitiveLength+=M.length/3,u.vertexLength+=o;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t);},hr("FillExtrusionBucket",eo,{omit:["layers"]});var io={paint:new Dr({"fill-extrusion-opacity":new jr(E["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new qr(E["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new jr(E["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new jr(E["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new Rr(E["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new qr(E["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new qr(E["paint_fill-extrusion"]["fill-extrusion-base"])})},oo=function(t){function e(e){t.call(this,e,io);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new eo(t)},e.prototype.queryRadius=function(){return Yn(this.paint.get("fill-extrusion-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,o){return Un(Wn(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),i.angle,o),r)},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("fill-extrusion-opacity")&&"none"!==this.visibility},e.prototype.resize=function(){this.viewportFrame&&(this.viewportFrame.destroy(),this.viewportFrame=null);},e}(Nr),ao=$r([{name:"a_pos_normal",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4).members,so=uo;function uo(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(lo,this,e);}function lo(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){var r=t.readVarint()+t.pos;for(;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function po(t){for(var e,r,n=0,i=0,o=t.length,a=o-1;i<o;a=i++)e=t[i],n+=((r=t[a]).x-e.x)*(e.y+r.y);return n}uo.types=["Unknown","Point","LineString","Polygon"],uo.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,i=0,o=0,a=0,u=[];t.pos<r;){if(i<=0){var l=t.readVarint();n=7&l,i=l>>3;}if(i--,1===n||2===n)o+=t.readSVarint(),a+=t.readSVarint(),1===n&&(e&&u.push(e),e=[]),e.push(new s(o,a));else{if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&u.push(e),u},uo.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,o=0,a=1/0,s=-1/0,u=1/0,l=-1/0;t.pos<e;){if(n<=0){var p=t.readVarint();r=7&p,n=p>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<a&&(a=i),i>s&&(s=i),(o+=t.readSVarint())<u&&(u=o),o>l&&(l=o);else if(7!==r)throw new Error("unknown command "+r)}return[a,u,s,l]},uo.prototype.toGeoJSON=function(t,e,r){var n,i,o=this.extent*Math.pow(2,r),a=this.extent*t,s=this.extent*e,u=this.loadGeometry(),l=uo.types[this.type];function p(t){for(var e=0;e<t.length;e++){var r=t[e],n=180-360*(r.y+s)/o;t[e]=[360*(r.x+a)/o-180,360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90];}}switch(this.type){case 1:var c=[];for(n=0;n<u.length;n++)c[n]=u[n][0];p(u=c);break;case 2:for(n=0;n<u.length;n++)p(u[n]);break;case 3:for(u=function(t){var e=t.length;if(e<=1)return[t];for(var r,n,i=[],o=0;o<e;o++){var a=po(t[o]);0!==a&&(void 0===n&&(n=a<0),n===a<0?(r&&i.push(r),r=[t[o]]):r.push(t[o]));}r&&i.push(r);return i}(u),n=0;n<u.length;n++)for(i=0;i<u[n].length;i++)p(u[n][i]);}1===u.length?u=u[0]:l="Multi"+l;var h={type:"Feature",geometry:{type:l,coordinates:u},properties:this.properties};return"id"in this&&(h.id=this.id),h};var co=ho;function ho(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(fo,this,e),this.length=this._features.length;}function fo(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){var e=null,r=t.readVarint()+t.pos;for(;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}function yo(t,e,r){if(3===t){var n=new co(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}ho.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new so(this._pbf,e,this.extent,this._keys,this._values)};var vo={VectorTile:function(t,e){this.layers=t.readFields(yo,{},e);},VectorTileFeature:so,VectorTileLayer:co},mo=vo.VectorTileFeature.types,go=63,xo=Math.cos(Math.PI/180*37.5),bo=.5,wo=Math.pow(2,14)/bo;function _o(t,e,r,n,i,o,a){t.emplaceBack(e.x,e.y,n?1:0,i?1:-1,Math.round(go*r.x)+128,Math.round(go*r.y)+128,1+(0===o?0:o<0?-1:1)|(a*bo&63)<<2,a*bo>>6);}var Ao=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.layoutVertexArray=new Wr,this.indexArray=new pn,this.programConfigurations=new En(ao,t.layers,t.zoom),this.segments=new zn;};function ko(t,e){return(t/e.tileTotal*(e.end-e.start)+e.start)*(wo-1)}Ao.prototype.populate=function(t,e){for(var r=0,n=t;r<n.length;r+=1){var i=n[r],o=i.feature,a=i.index,s=i.sourceLayerIndex;if(this.layers[0]._featureFilter(new Br(this.zoom),o)){var u=Ln(o);this.addFeature(o,u),e.featureIndex.insert(o,u,a,s,this.index);}}},Ao.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Ao.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,ao),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.programConfigurations.upload(t);},Ao.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},Ao.prototype.addFeature=function(t,e){for(var r=this.layers[0].layout,n=r.get("line-join").evaluate(t),i=r.get("line-cap"),o=r.get("line-miter-limit"),a=r.get("line-round-limit"),s=0,u=e;s<u.length;s+=1){var l=u[s];this.addLine(l,t,n,i,o,a);}},Ao.prototype.addLine=function(t,e,r,n,i,o){var a=null;e.properties&&e.properties.hasOwnProperty("mapbox_clip_start")&&e.properties.hasOwnProperty("mapbox_clip_end")&&(a={start:e.properties.mapbox_clip_start,end:e.properties.mapbox_clip_end,tileTotal:void 0});for(var s="Polygon"===mo[e.type],u=t.length;u>=2&&t[u-1].equals(t[u-2]);)u--;for(var l=0;l<u-1&&t[l].equals(t[l+1]);)l++;if(!(u<(s?3:2))){a&&(a.tileTotal=function(t,e,r){for(var n,i,o=0,a=e;a<r-1;a++)n=t[a],i=t[a+1],o+=n.dist(i);return o}(t,l,u)),"bevel"===r&&(i=1.05);var p=Pn/(512*this.overscaling)*15,c=t[l],h=this.segments.prepareSegment(10*u,this.layoutVertexArray,this.indexArray);this.distance=0;var f,y,d,v=n,m=s?"butt":n,g=!0,x=void 0,b=void 0,w=void 0,_=void 0;this.e1=this.e2=this.e3=-1,s&&(f=t[u-2],_=c.sub(f)._unit()._perp());for(var A=l;A<u;A++)if(!(b=s&&A===u-1?t[l+1]:t[A+1])||!t[A].equals(b)){_&&(w=_),f&&(x=f),f=t[A],_=b?b.sub(f)._unit()._perp():w;var k=(w=w||_).add(_);0===k.x&&0===k.y||k._unit();var z=k.x*_.x+k.y*_.y,S=0!==z?1/z:1/0,M=z<xo&&x&&b;if(M&&A>l){var V=f.dist(x);if(V>2*p){var B=f.sub(f.sub(x)._mult(p/V)._round());this.distance+=B.dist(x),this.addCurrentVertex(B,this.distance,w.mult(1),0,0,!1,h,a),x=B;}}var C=x&&b,I=C?r:b?v:m;if(C&&"round"===I&&(S<o?I="miter":S<=2&&(I="fakeround")),"miter"===I&&S>i&&(I="bevel"),"bevel"===I&&(S>2&&(I="flipbevel"),S<i&&(I="miter")),x&&(this.distance+=f.dist(x)),"miter"===I)k._mult(S),this.addCurrentVertex(f,this.distance,k,0,0,!1,h,a);else if("flipbevel"===I){if(S>100)k=_.clone().mult(-1);else{var E=w.x*_.y-w.y*_.x>0?-1:1,F=S*w.add(_).mag()/w.sub(_).mag();k._perp()._mult(F*E);}this.addCurrentVertex(f,this.distance,k,0,0,!1,h,a),this.addCurrentVertex(f,this.distance,k.mult(-1),0,0,!1,h,a);}else if("bevel"===I||"fakeround"===I){var P=w.x*_.y-w.y*_.x>0,T=-Math.sqrt(S*S-1);if(P?(d=0,y=T):(y=0,d=T),g||this.addCurrentVertex(f,this.distance,w,y,d,!1,h,a),"fakeround"===I){for(var O=Math.floor(8*(.5-(z-.5))),L=void 0,j=0;j<O;j++)L=_.mult((j+1)/(O+1))._add(w)._unit(),this.addPieSliceVertex(f,this.distance,L,P,h,a);this.addPieSliceVertex(f,this.distance,k,P,h,a);for(var q=O-1;q>=0;q--)L=w.mult((q+1)/(O+1))._add(_)._unit(),this.addPieSliceVertex(f,this.distance,L,P,h,a);}b&&this.addCurrentVertex(f,this.distance,_,-y,-d,!1,h,a);}else"butt"===I?(g||this.addCurrentVertex(f,this.distance,w,0,0,!1,h,a),b&&this.addCurrentVertex(f,this.distance,_,0,0,!1,h,a)):"square"===I?(g||(this.addCurrentVertex(f,this.distance,w,1,1,!1,h,a),this.e1=this.e2=-1),b&&this.addCurrentVertex(f,this.distance,_,-1,-1,!1,h,a)):"round"===I&&(g||(this.addCurrentVertex(f,this.distance,w,0,0,!1,h,a),this.addCurrentVertex(f,this.distance,w,1,1,!0,h,a),this.e1=this.e2=-1),b&&(this.addCurrentVertex(f,this.distance,_,-1,-1,!0,h,a),this.addCurrentVertex(f,this.distance,_,0,0,!1,h,a)));if(M&&A<u-1){var R=f.dist(b);if(R>2*p){var U=f.add(b.sub(f)._mult(p/R)._round());this.distance+=U.dist(f),this.addCurrentVertex(U,this.distance,_.mult(1),0,0,!1,h,a),f=U;}}g=!1;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e);}},Ao.prototype.addCurrentVertex=function(t,e,r,n,i,o,a,s){var u,l=this.layoutVertexArray,p=this.indexArray;s&&(e=ko(e,s)),u=r.clone(),n&&u._sub(r.perp()._mult(n)),_o(l,t,u,o,!1,n,e),this.e3=a.vertexLength++,this.e1>=0&&this.e2>=0&&(p.emplaceBack(this.e1,this.e2,this.e3),a.primitiveLength++),this.e1=this.e2,this.e2=this.e3,u=r.mult(-1),i&&u._sub(r.perp()._mult(i)),_o(l,t,u,o,!0,-i,e),this.e3=a.vertexLength++,this.e1>=0&&this.e2>=0&&(p.emplaceBack(this.e1,this.e2,this.e3),a.primitiveLength++),this.e1=this.e2,this.e2=this.e3,e>wo/2&&!s&&(this.distance=0,this.addCurrentVertex(t,this.distance,r,n,i,o,a));},Ao.prototype.addPieSliceVertex=function(t,e,r,n,i,o){r=r.mult(n?-1:1);var a=this.layoutVertexArray,s=this.indexArray;o&&(e=ko(e,o)),_o(a,t,r,!1,n,0,e),this.e3=i.vertexLength++,this.e1>=0&&this.e2>=0&&(s.emplaceBack(this.e1,this.e2,this.e3),i.primitiveLength++),n?this.e2=this.e3:this.e1=this.e3;},hr("LineBucket",Ao,{omit:["layers"]});var zo=new Dr({"line-cap":new jr(E.layout_line["line-cap"]),"line-join":new qr(E.layout_line["line-join"]),"line-miter-limit":new jr(E.layout_line["line-miter-limit"]),"line-round-limit":new jr(E.layout_line["line-round-limit"])}),So={paint:new Dr({"line-opacity":new qr(E.paint_line["line-opacity"]),"line-color":new qr(E.paint_line["line-color"]),"line-translate":new jr(E.paint_line["line-translate"]),"line-translate-anchor":new jr(E.paint_line["line-translate-anchor"]),"line-width":new qr(E.paint_line["line-width"]),"line-gap-width":new qr(E.paint_line["line-gap-width"]),"line-offset":new qr(E.paint_line["line-offset"]),"line-blur":new qr(E.paint_line["line-blur"]),"line-dasharray":new Rr(E.paint_line["line-dasharray"]),"line-pattern":new Rr(E.paint_line["line-pattern"]),"line-gradient":new Ur(E.paint_line["line-gradient"])}),layout:zo},Mo=new(function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new Br(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,n){return r=h({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,n)},e}(qr))(So.paint.properties["line-width"].specification);Mo.useIntegerZoom=!0;var Vo=function(t){function e(e){t.call(this,e,So);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setPaintProperty=function(e,r,n){t.prototype.setPaintProperty.call(this,e,r,n),"line-gradient"===e&&this._updateGradient();},e.prototype._updateGradient=function(){var t=this._transitionablePaint._values["line-gradient"].value.expression;this.gradient=hi(t,"lineProgress"),this.gradientTexture=null;},e.prototype.recalculate=function(e){t.prototype.recalculate.call(this,e),this.paint._values["line-floorwidth"]=Mo.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e);},e.prototype.createBucket=function(t){return new Ao(t)},e.prototype.queryRadius=function(t){var e=t,r=Bo(Gn("line-width",this,e),Gn("line-gap-width",this,e)),n=Gn("line-offset",this,e);return r/2+Math.abs(n)+Yn(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,o){var a=Wn(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),i.angle,o),u=o/2*Bo(this.paint.get("line-width").evaluate(e),this.paint.get("line-gap-width").evaluate(e)),l=this.paint.get("line-offset").evaluate(e);return l&&(r=function(t,e){for(var r=[],n=new s(0,0),i=0;i<t.length;i++){for(var o=t[i],a=[],u=0;u<o.length;u++){var l=o[u-1],p=o[u],c=o[u+1],h=0===u?n:p.sub(l)._unit()._perp(),f=u===o.length-1?n:c.sub(p)._unit()._perp(),y=h._add(f)._unit(),d=y.x*f.x+y.y*f.y;y._mult(1/d),a.push(y._mult(e)._add(p));}r.push(a);}return r}(r,l*o)),Dn(a,r,u)},e}(Nr);function Bo(t,e){return e>0?e+2*t:t}var Co=$r([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"}]),Io=$r([{name:"a_projected_pos",components:3,type:"Float32"}],4),Eo=($r([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),$r([{name:"a_placed",components:2,type:"Uint8"}],4)),Fo=($r([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"radius"},{type:"Int16",name:"signedDistanceFromAnchor"}]),$r([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)),Po=$r([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4);$r([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"hidden"}]),$r([{type:"Float32",name:"offsetX"}]),$r([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]);function To(t,e,r){var n=e.layout.get("text-transform").evaluate(r);return"uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),Vr.applyArabicShaping&&(t=Vr.applyArabicShaping(t)),t}var Oo={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};var Lo=function(t){function e(e,r,n,i){t.call(this,e,r),this.angle=n,void 0!==i&&(this.segment=i);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(s);function jo(t,e){var r=e.expression;if("constant"===r.kind)return{functionType:"constant",layoutSize:r.evaluate(new Br(t+1))};if("source"===r.kind)return{functionType:"source"};for(var n=r.zoomStops,i=0;i<n.length&&n[i]<=t;)i++;for(var o=i=Math.max(0,i-1);o<n.length&&n[o]<t+1;)o++;o=Math.min(n.length-1,o);var a={min:n[i],max:n[o]};return"composite"===r.kind?{functionType:"composite",zoomRange:a,propertyValue:e.value}:{functionType:"camera",layoutSize:r.evaluate(new Br(t+1)),zoomRange:a,sizeRange:{min:r.evaluate(new Br(a.min)),max:r.evaluate(new Br(a.max))},propertyValue:e.value}}hr("Anchor",Lo);var qo=vo.VectorTileFeature.types,Ro=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function Uo(t,e,r,n,i,o,a,s){t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),o,a,s?s[0]:0,s?s[1]:0);}function Do(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}var No=function(t){this.layoutVertexArray=new Qr,this.indexArray=new pn,this.programConfigurations=t,this.segments=new zn,this.dynamicLayoutVertexArray=new tn,this.opacityVertexArray=new en,this.placedSymbolArray=new mn;};No.prototype.upload=function(t,e){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Co.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.programConfigurations.upload(t),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,Io.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,Ro,!0),this.opacityVertexBuffer.itemSize=1;},No.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());},hr("SymbolBuffers",No);var Zo=function(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new zn,this.collisionVertexArray=new on;};Zo.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,Eo.members,!0);},Zo.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy());},hr("CollisionBuffers",Zo);var Ko=function(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex;var e=this.layers[0]._unevaluatedLayout._values;this.textSizeData=jo(this.zoom,e["text-size"]),this.iconSizeData=jo(this.zoom,e["icon-size"]);var r=this.layers[0].layout;this.sortFeaturesByY=r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement");};Ko.prototype.createArrays=function(){this.text=new No(new En(Co.members,this.layers,this.zoom,function(t){return/^text/.test(t)})),this.icon=new No(new En(Co.members,this.layers,this.zoom,function(t){return/^icon/.test(t)})),this.collisionBox=new Zo(nn,Fo.members,cn),this.collisionCircle=new Zo(nn,Po.members,pn),this.glyphOffsetArray=new xn,this.lineVertexArray=new wn;},Ko.prototype.populate=function(t,e){var r=this.layers[0],n=r.layout,i=n.get("text-font"),o=n.get("text-field"),a=n.get("icon-image"),s=("constant"!==o.value.kind||o.value.value.length>0)&&("constant"!==i.value.kind||i.value.value.length>0),u="constant"!==a.value.kind||a.value.value&&a.value.value.length>0;if(this.features=[],s||u){for(var l=e.iconDependencies,p=e.glyphDependencies,c=new Br(this.zoom),h=0,f=t;h<f.length;h+=1){var y=f[h],d=y.feature,v=y.index,m=y.sourceLayerIndex;if(r._featureFilter(c,d)){var g=void 0;s&&(g=To(g=r.getValueAndResolveTokens("text-field",d),r,d));var x=void 0;if(u&&(x=r.getValueAndResolveTokens("icon-image",d)),g||x){var b={text:g,icon:x,index:v,sourceLayerIndex:m,geometry:Ln(d),properties:d.properties,type:qo[d.type]};if(void 0!==d.id&&(b.id=d.id),this.features.push(b),x&&(l[x]=!0),g)for(var w=i.evaluate(d).join(","),_=p[w]=p[w]||{},A="map"===n.get("text-rotation-alignment")&&"line"===n.get("symbol-placement"),k=gr(g),z=0;z<g.length;z++)if(_[g.charCodeAt(z)]=!0,A&&k){var S=Oo[g.charAt(z)];S&&(_[S.charCodeAt(0)]=!0);}}}}"line"===n.get("symbol-placement")&&(this.features=function(t){var e={},r={},n=[],i=0;function o(e){n.push(t[e]),i++;}function a(t,e,i){var o=r[t];return delete r[t],r[e]=o,n[o].geometry[0].pop(),n[o].geometry[0]=n[o].geometry[0].concat(i[0]),o}function s(t,r,i){var o=e[r];return delete e[r],e[t]=o,n[o].geometry[0].shift(),n[o].geometry[0]=i[0].concat(n[o].geometry[0]),o}function u(t,e,r){var n=r?e[0][e[0].length-1]:e[0][0];return t+":"+n.x+":"+n.y}for(var l=0;l<t.length;l++){var p=t[l],c=p.geometry,h=p.text;if(h){var f=u(h,c),y=u(h,c,!0);if(f in r&&y in e&&r[f]!==e[y]){var d=s(f,y,c),v=a(f,y,n[d].geometry);delete e[f],delete r[y],r[u(h,n[v].geometry,!0)]=v,n[d].geometry=null;}else f in r?a(f,y,c):y in e?s(f,y,c):(o(l),e[f]=i-1,r[y]=i-1);}else o(l);}return n.filter(function(t){return t.geometry})}(this.features));}},Ko.prototype.isEmpty=function(){return 0===this.symbolInstances.length},Ko.prototype.upload=function(t){this.text.upload(t,this.sortFeaturesByY),this.icon.upload(t,this.sortFeaturesByY),this.collisionBox.upload(t),this.collisionCircle.upload(t);},Ko.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.collisionBox.destroy(),this.collisionCircle.destroy();},Ko.prototype.addToLineVertexArray=function(t,e){var r=this.lineVertexArray.length;if(void 0!==t.segment){for(var n=t.dist(e[t.segment+1]),i=t.dist(e[t.segment]),o={},a=t.segment+1;a<e.length;a++)o[a]={x:e[a].x,y:e[a].y,tileUnitDistanceFromAnchor:n},a<e.length-1&&(n+=e[a+1].dist(e[a]));for(var s=t.segment||0;s>=0;s--)o[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:i},s>0&&(i+=e[s-1].dist(e[s]));for(var u=0;u<e.length;u++){var l=o[u];this.lineVertexArray.emplaceBack(l.x,l.y,l.tileUnitDistanceFromAnchor);}}return{lineStartIndex:r,lineLength:this.lineVertexArray.length-r}},Ko.prototype.addSymbols=function(t,e,r,n,i,o,a,s,u,l){for(var p=t.indexArray,c=t.layoutVertexArray,h=t.dynamicLayoutVertexArray,f=t.segments.prepareSegment(4*e.length,t.layoutVertexArray,t.indexArray),y=this.glyphOffsetArray.length,d=f.vertexLength,v=0,m=e;v<m.length;v+=1){var g=m[v],x=g.tl,b=g.tr,w=g.bl,_=g.br,A=g.tex,k=f.vertexLength,z=g.glyphOffset[1];Uo(c,s.x,s.y,x.x,z+x.y,A.x,A.y,r),Uo(c,s.x,s.y,b.x,z+b.y,A.x+A.w,A.y,r),Uo(c,s.x,s.y,w.x,z+w.y,A.x,A.y+A.h,r),Uo(c,s.x,s.y,_.x,z+_.y,A.x+A.w,A.y+A.h,r),Do(h,s,0),p.emplaceBack(k,k+1,k+2),p.emplaceBack(k+1,k+2,k+3),f.vertexLength+=4,f.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(g.glyphOffset[0]);}t.placedSymbolArray.emplaceBack(s.x,s.y,y,this.glyphOffsetArray.length-y,d,u,l,s.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],a,!1),t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,o);},Ko.prototype._addCollisionDebugVertex=function(t,e,r,n,i){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,n.x,n.y,Math.round(i.x),Math.round(i.y))},Ko.prototype.addCollisionDebugVertices=function(t,e,r,n,i,o,a,u){var l=i.segments.prepareSegment(4,i.layoutVertexArray,i.indexArray),p=l.vertexLength,c=i.layoutVertexArray,h=i.collisionVertexArray;if(this._addCollisionDebugVertex(c,h,o,a.anchor,new s(t,e)),this._addCollisionDebugVertex(c,h,o,a.anchor,new s(r,e)),this._addCollisionDebugVertex(c,h,o,a.anchor,new s(r,n)),this._addCollisionDebugVertex(c,h,o,a.anchor,new s(t,n)),l.vertexLength+=4,u){var f=i.indexArray;f.emplaceBack(p,p+1,p+2),f.emplaceBack(p,p+2,p+3),l.primitiveLength+=2;}else{var y=i.indexArray;y.emplaceBack(p,p+1),y.emplaceBack(p+1,p+2),y.emplaceBack(p+2,p+3),y.emplaceBack(p+3,p),l.primitiveLength+=4;}},Ko.prototype.generateCollisionDebugBuffers=function(){for(var t=0,e=this.symbolInstances;t<e.length;t+=1){var r=e[t];r.textCollisionFeature={boxStartIndex:r.textBoxStartIndex,boxEndIndex:r.textBoxEndIndex},r.iconCollisionFeature={boxStartIndex:r.iconBoxStartIndex,boxEndIndex:r.iconBoxEndIndex};for(var n=0;n<2;n++){var i=r[0===n?"textCollisionFeature":"iconCollisionFeature"];if(i)for(var o=i.boxStartIndex;o<i.boxEndIndex;o++){var a=this.collisionBoxArray.get(o),s=a.x1,u=a.y1,l=a.x2,p=a.y2,c=a.radius>0;this.addCollisionDebugVertices(s,u,l,p,c?this.collisionCircle:this.collisionBox,a.anchorPoint,r,c);}}}},Ko.prototype.deserializeCollisionBoxes=function(t,e,r,n,i){for(var o={},a=e;a<r;a++){var s=t.get(a);if(0===s.radius){o.textBox={x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,anchorPointX:s.anchorPointX,anchorPointY:s.anchorPointY},o.textFeatureIndex=s.featureIndex;break}o.textCircles||(o.textCircles=[],o.textFeatureIndex=s.featureIndex);o.textCircles.push(s.anchorPointX,s.anchorPointY,s.radius,s.signedDistanceFromAnchor,1);}for(var u=n;u<i;u++){var l=t.get(u);if(0===l.radius){o.iconBox={x1:l.x1,y1:l.y1,x2:l.x2,y2:l.y2,anchorPointX:l.anchorPointX,anchorPointY:l.anchorPointY},o.iconFeatureIndex=l.featureIndex;break}}return o},Ko.prototype.hasTextData=function(){return this.text.segments.get().length>0},Ko.prototype.hasIconData=function(){return this.icon.segments.get().length>0},Ko.prototype.hasCollisionBoxData=function(){return this.collisionBox.segments.get().length>0},Ko.prototype.hasCollisionCircleData=function(){return this.collisionCircle.segments.get().length>0},Ko.prototype.sortFeatures=function(t){var e=this;if(this.sortFeaturesByY&&this.sortedAngle!==t&&(this.sortedAngle=t,!(this.text.segments.get().length>1||this.icon.segments.get().length>1))){for(var r=[],n=0;n<this.symbolInstances.length;n++)r.push(n);var i=Math.sin(t),o=Math.cos(t);r.sort(function(t,r){var n=e.symbolInstances[t],a=e.symbolInstances[r];return(i*n.anchor.x+o*n.anchor.y|0)-(i*a.anchor.x+o*a.anchor.y|0)||a.featureIndex-n.featureIndex}),this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(var a=0,s=r;a<s.length;a+=1){var u=s[a],l=e.symbolInstances[u];e.featureSortOrder.push(l.featureIndex);for(var p=0,c=l.placedTextSymbolIndices;p<c.length;p+=1)for(var h=c[p],f=e.text.placedSymbolArray.get(h),y=f.vertexStartIndex+4*f.numGlyphs,d=f.vertexStartIndex;d<y;d+=4)e.text.indexArray.emplaceBack(d,d+1,d+2),e.text.indexArray.emplaceBack(d+1,d+2,d+3);var v=e.icon.placedSymbolArray.get(u);if(v.numGlyphs){var m=v.vertexStartIndex;e.icon.indexArray.emplaceBack(m,m+1,m+2),e.icon.indexArray.emplaceBack(m+1,m+2,m+3);}}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}},hr("SymbolBucket",Ko,{omit:["layers","collisionBoxArray","features","compareText"],shallow:["symbolInstances"]}),Ko.MAX_GLYPHS=65535,Ko.addDynamicAttributes=Do;var Jo=new Dr({"symbol-placement":new jr(E.layout_symbol["symbol-placement"]),"symbol-spacing":new jr(E.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new jr(E.layout_symbol["symbol-avoid-edges"]),"icon-allow-overlap":new jr(E.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new jr(E.layout_symbol["icon-ignore-placement"]),"icon-optional":new jr(E.layout_symbol["icon-optional"]),"icon-rotation-alignment":new jr(E.layout_symbol["icon-rotation-alignment"]),"icon-size":new qr(E.layout_symbol["icon-size"]),"icon-text-fit":new jr(E.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new jr(E.layout_symbol["icon-text-fit-padding"]),"icon-image":new qr(E.layout_symbol["icon-image"]),"icon-rotate":new qr(E.layout_symbol["icon-rotate"]),"icon-padding":new jr(E.layout_symbol["icon-padding"]),"icon-keep-upright":new jr(E.layout_symbol["icon-keep-upright"]),"icon-offset":new qr(E.layout_symbol["icon-offset"]),"icon-anchor":new qr(E.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new jr(E.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new jr(E.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new jr(E.layout_symbol["text-rotation-alignment"]),"text-field":new qr(E.layout_symbol["text-field"]),"text-font":new qr(E.layout_symbol["text-font"]),"text-size":new qr(E.layout_symbol["text-size"]),"text-max-width":new qr(E.layout_symbol["text-max-width"]),"text-line-height":new jr(E.layout_symbol["text-line-height"]),"text-letter-spacing":new qr(E.layout_symbol["text-letter-spacing"]),"text-justify":new qr(E.layout_symbol["text-justify"]),"text-anchor":new qr(E.layout_symbol["text-anchor"]),"text-max-angle":new jr(E.layout_symbol["text-max-angle"]),"text-rotate":new qr(E.layout_symbol["text-rotate"]),"text-padding":new jr(E.layout_symbol["text-padding"]),"text-keep-upright":new jr(E.layout_symbol["text-keep-upright"]),"text-transform":new qr(E.layout_symbol["text-transform"]),"text-offset":new qr(E.layout_symbol["text-offset"]),"text-allow-overlap":new jr(E.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new jr(E.layout_symbol["text-ignore-placement"]),"text-optional":new jr(E.layout_symbol["text-optional"])}),$o={paint:new Dr({"icon-opacity":new qr(E.paint_symbol["icon-opacity"]),"icon-color":new qr(E.paint_symbol["icon-color"]),"icon-halo-color":new qr(E.paint_symbol["icon-halo-color"]),"icon-halo-width":new qr(E.paint_symbol["icon-halo-width"]),"icon-halo-blur":new qr(E.paint_symbol["icon-halo-blur"]),"icon-translate":new jr(E.paint_symbol["icon-translate"]),"icon-translate-anchor":new jr(E.paint_symbol["icon-translate-anchor"]),"text-opacity":new qr(E.paint_symbol["text-opacity"]),"text-color":new qr(E.paint_symbol["text-color"]),"text-halo-color":new qr(E.paint_symbol["text-halo-color"]),"text-halo-width":new qr(E.paint_symbol["text-halo-width"]),"text-halo-blur":new qr(E.paint_symbol["text-halo-blur"]),"text-translate":new jr(E.paint_symbol["text-translate"]),"text-translate-anchor":new jr(E.paint_symbol["text-translate-anchor"])}),layout:Jo},Ho=function(t){function e(e){t.call(this,e,$o);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e){t.prototype.recalculate.call(this,e),"auto"===this.layout.get("icon-rotation-alignment")&&("line"===this.layout.get("symbol-placement")?this.layout._values["icon-rotation-alignment"]="map":this.layout._values["icon-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-rotation-alignment")&&("line"===this.layout.get("symbol-placement")?this.layout._values["text-rotation-alignment"]="map":this.layout._values["text-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment"));},e.prototype.getValueAndResolveTokens=function(t,e){var r,n=this.layout.get(t).evaluate(e),i=this._unevaluatedLayout._values[t];return i.isDataDriven()||be(i.value)?n:(r=e.properties,n.replace(/{([^{}]+)}/g,function(t,e){return e in r?String(r[e]):""}))},e.prototype.createBucket=function(t){return new Ko(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e}(Nr),Xo={paint:new Dr({"background-color":new jr(E.paint_background["background-color"]),"background-pattern":new Rr(E.paint_background["background-pattern"]),"background-opacity":new jr(E.paint_background["background-opacity"])})},Go=function(t){function e(e){t.call(this,e,Xo);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Nr),Yo={paint:new Dr({"raster-opacity":new jr(E.paint_raster["raster-opacity"]),"raster-hue-rotate":new jr(E.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new jr(E.paint_raster["raster-brightness-min"]),"raster-brightness-max":new jr(E.paint_raster["raster-brightness-max"]),"raster-saturation":new jr(E.paint_raster["raster-saturation"]),"raster-contrast":new jr(E.paint_raster["raster-contrast"]),"raster-fade-duration":new jr(E.paint_raster["raster-fade-duration"])})},Wo={circle:ni,heatmap:fi,hillshade:di,fill:Yi,"fill-extrusion":oo,line:Vo,symbol:Ho,background:Go,raster:function(t){function e(e){t.call(this,e,Yo);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Nr)};var Qo=n(function(t,e){t.exports=function(){function t(t,e,r){r=r||{},this.w=t||64,this.h=e||64,this.autoResize=!!r.autoResize,this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0;}function e(t,e,r){this.x=0,this.y=t,this.w=this.free=e,this.h=r;}return t.prototype.pack=function(t,e){t=[].concat(t),e=e||{};for(var r,n,i,o,a=[],s=0;s<t.length;s++)if(r=t[s].w||t[s].width,n=t[s].h||t[s].height,i=t[s].id,r&&n){if(!(o=this.packOne(r,n,i)))continue;e.inPlace&&(t[s].x=o.x,t[s].y=o.y,t[s].id=o.id),a.push(o);}return this.shrink(),a},t.prototype.packOne=function(t,r,n){var i,o,a,s,u,l,p,c,h={freebin:-1,shelf:-1,waste:1/0},f=0;if("string"==typeof n||"number"==typeof n){if(i=this.getBin(n))return this.ref(i),i;"number"==typeof n&&(this.maxId=Math.max(n,this.maxId));}else n=++this.maxId;for(s=0;s<this.freebins.length;s++){if(r===(i=this.freebins[s]).maxh&&t===i.maxw)return this.allocFreebin(s,t,r,n);r>i.maxh||t>i.maxw||r<=i.maxh&&t<=i.maxw&&(a=i.maxw*i.maxh-t*r)<h.waste&&(h.waste=a,h.freebin=s);}for(s=0;s<this.shelves.length;s++)if(f+=(o=this.shelves[s]).h,!(t>o.free)){if(r===o.h)return this.allocShelf(s,t,r,n);r>o.h||r<o.h&&(a=(o.h-r)*t)<h.waste&&(h.freebin=-1,h.waste=a,h.shelf=s);}return-1!==h.freebin?this.allocFreebin(h.freebin,t,r,n):-1!==h.shelf?this.allocShelf(h.shelf,t,r,n):r<=this.h-f&&t<=this.w?(o=new e(f,this.w,r),this.allocShelf(this.shelves.push(o)-1,t,r,n)):this.autoResize?(u=l=this.h,((p=c=this.w)<=u||t>p)&&(c=2*Math.max(t,p)),(u<p||r>u)&&(l=2*Math.max(r,u)),this.resize(c,l),this.packOne(t,r,n)):null},t.prototype.allocFreebin=function(t,e,r,n){var i=this.freebins.splice(t,1)[0];return i.id=n,i.w=e,i.h=r,i.refcount=0,this.bins[n]=i,this.ref(i),i},t.prototype.allocShelf=function(t,e,r,n){var i=this.shelves[t].alloc(e,r,n);return this.bins[n]=i,this.ref(i),i},t.prototype.shrink=function(){if(this.shelves.length>0){for(var t=0,e=0,r=0;r<this.shelves.length;r++){var n=this.shelves[r];e+=n.h,t=Math.max(n.w-n.free,t);}this.resize(t,e);}},t.prototype.getBin=function(t){return this.bins[t]},t.prototype.ref=function(t){if(1==++t.refcount){var e=t.h;this.stats[e]=1+(0|this.stats[e]);}return t.refcount},t.prototype.unref=function(t){return 0===t.refcount?0:(0==--t.refcount&&(this.stats[t.h]--,delete this.bins[t.id],this.freebins.push(t)),t.refcount)},t.prototype.clear=function(){this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0;},t.prototype.resize=function(t,e){this.w=t,this.h=e;for(var r=0;r<this.shelves.length;r++)this.shelves[r].resize(t);return!0},e.prototype.alloc=function(t,e,r){if(t>this.free||e>this.h)return null;var n=this.x;return this.x+=t,this.free-=t,new function(t,e,r,n,i,o,a){this.id=t,this.x=e,this.y=r,this.w=n,this.h=i,this.maxw=o||n,this.maxh=a||i,this.refcount=0;}(r,n,this.y,t,e,t,this.h)},e.prototype.resize=function(t){return this.free+=t-this.w,this.w=t,!0},t}();}),ta=function(t,e){var r=e.pixelRatio;this.paddedRect=t,this.pixelRatio=r;},ea={tl:{configurable:!0},br:{configurable:!0},displaySize:{configurable:!0}};ea.tl.get=function(){return[this.paddedRect.x+1,this.paddedRect.y+1]},ea.br.get=function(){return[this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]},ea.displaySize.get=function(){return[(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]},Object.defineProperties(ta.prototype,ea);var ra=function(t){var e=new pi({width:0,height:0}),r={},n=new Qo(0,0,{autoResize:!0});for(var i in t){var o=t[i],a=n.packOne(o.data.width+2,o.data.height+2);e.resize({width:n.w,height:n.h}),pi.copy(o.data,e,{x:0,y:0},{x:a.x+1,y:a.y+1},o.data),r[i]=new ta(a,o);}n.shrink(),e.resize({width:n.w,height:n.h}),this.image=e,this.positions=r;};hr("ImagePosition",ta),hr("ImageAtlas",ra);var na=function(t,e,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,l=u>>1,p=-7,c=r?i-1:0,h=r?-1:1,f=t[e+c];for(c+=h,o=f&(1<<-p)-1,f>>=-p,p+=s;p>0;o=256*o+t[e+c],c+=h,p-=8);for(a=o&(1<<-p)-1,o>>=-p,p+=n;p>0;a=256*a+t[e+c],c+=h,p-=8);if(0===o)o=1-l;else{if(o===u)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,n),o-=l;}return(f?-1:1)*a*Math.pow(2,o-n)},ia=function(t,e,r,n,i,o){var a,s,u,l=8*o-i-1,p=(1<<l)-1,c=p>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:o-1,y=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=p):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),(e+=a+c>=1?h/u:h*Math.pow(2,1-c))*u>=2&&(a++,u/=2),a+c>=p?(s=0,a=p):a+c>=1?(s=(e*u-1)*Math.pow(2,i),a+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[r+f]=255&s,f+=y,s/=256,i-=8);for(a=a<<i|s,l+=i;l>0;t[r+f]=255&a,f+=y,a/=256,l-=8);t[r+f-y]|=128*d;},oa=aa;function aa(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}aa.Varint=0,aa.Fixed64=1,aa.Bytes=2,aa.Fixed32=5;function sa(t){return t.type===aa.Bytes?t.readVarint()+t.pos:t.pos+1}function ua(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function la(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.ceil(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function pa(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function ca(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function ha(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function fa(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function ya(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function da(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function va(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function ma(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function ga(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function xa(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function ba(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function wa(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}aa.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,o=this.pos;this.type=7&n,t(i,e,this),this.pos===o&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=xa(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=wa(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=xa(this.buf,this.pos)+4294967296*xa(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=xa(this.buf,this.pos)+4294967296*wa(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=na(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=na(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,o=r.buf;if(i=o[r.pos++],n=(112&i)>>4,i<128)return ua(t,n,e);if(i=o[r.pos++],n|=(127&i)<<3,i<128)return ua(t,n,e);if(i=o[r.pos++],n|=(127&i)<<10,i<128)return ua(t,n,e);if(i=o[r.pos++],n|=(127&i)<<17,i<128)return ua(t,n,e);if(i=o[r.pos++],n|=(127&i)<<24,i<128)return ua(t,n,e);if(i=o[r.pos++],n|=(1&i)<<31,i<128)return ua(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=function(t,e,r){var n="",i=e;for(;i<r;){var o,a,s,u=t[i],l=null,p=u>239?4:u>223?3:u>191?2:1;if(i+p>r)break;1===p?u<128&&(l=u):2===p?128==(192&(o=t[i+1]))&&(l=(31&u)<<6|63&o)<=127&&(l=null):3===p?(o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&((l=(15&u)<<12|(63&o)<<6|63&a)<=2047||l>=55296&&l<=57343)&&(l=null)):4===p&&(o=t[i+1],a=t[i+2],s=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&((l=(15&u)<<18|(63&o)<<12|(63&a)<<6|63&s)<=65535||l>=1114112)&&(l=null)),null===l?(l=65533,p=1):l>65535&&(l-=65536,n+=String.fromCharCode(l>>>10&1023|55296),l=56320|1023&l),n+=String.fromCharCode(l),i+=p;}return n}(this.buf,this.pos,t);return this.pos=t,e},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){var r=sa(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){var e=sa(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===aa.Varint)for(;this.buf[this.pos++]>127;);else if(e===aa.Bytes)this.pos=this.readVarint()+this.pos;else if(e===aa.Fixed32)this.pos+=4;else{if(e!==aa.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),ba(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),ba(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),ba(this.buf,-1&t,this.pos),ba(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),ba(this.buf,-1&t,this.pos),ba(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos]=127&t;}(r,0,e),function(t,e){var r=(7&t)<<4;if(e.buf[e.pos++]|=r|((t>>>=3)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;e.buf[e.pos++]=127&t;}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,o=0;o<e.length;o++){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){n>56319||o+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&la(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),ia(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),ia(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&la(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,aa.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){this.writeMessage(t,pa,e);},writePackedSVarint:function(t,e){this.writeMessage(t,ca,e);},writePackedBoolean:function(t,e){this.writeMessage(t,ya,e);},writePackedFloat:function(t,e){this.writeMessage(t,ha,e);},writePackedDouble:function(t,e){this.writeMessage(t,fa,e);},writePackedFixed32:function(t,e){this.writeMessage(t,da,e);},writePackedSFixed32:function(t,e){this.writeMessage(t,va,e);},writePackedFixed64:function(t,e){this.writeMessage(t,ma,e);},writePackedSFixed64:function(t,e){this.writeMessage(t,ga,e);},writeBytesField:function(t,e){this.writeTag(t,aa.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,aa.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,aa.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,aa.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,aa.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,aa.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,aa.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,aa.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,aa.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,aa.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};var _a=3;function Aa(t,e,r){1===t&&r.readMessage(ka,e);}function ka(t,e,r){if(3===t){var n=r.readMessage(za,{}),i=n.id,o=n.bitmap,a=n.width,s=n.height,u=n.left,l=n.top,p=n.advance;e.push({id:i,bitmap:new li({width:a+2*_a,height:s+2*_a},o),metrics:{width:a,height:s,left:u,top:l,advance:p}});}}function za(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}var Sa=_a,Ma=function(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.callbackID=0,y(["receive"],this),this.target.addEventListener("message",this.receive,!1);};Ma.prototype.send=function(t,e,r,n){var i=r?this.mapId+":"+this.callbackID++:null;r&&(this.callbacks[i]=r);var o=[];this.target.postMessage({targetMapId:n,sourceMapId:this.mapId,type:t,id:String(i),data:yr(e,o)},o);},Ma.prototype.receive=function(t){var e,r=this,n=t.data,i=n.id;if(!n.targetMapId||this.mapId===n.targetMapId){var o=function(t,e){var n=[];r.target.postMessage({sourceMapId:r.mapId,type:"<response>",id:String(i),error:t?yr(t):null,data:yr(e,n)},n);};if("<response>"===n.type)e=this.callbacks[n.id],delete this.callbacks[n.id],e&&n.error?e(dr(n.error)):e&&e(null,dr(n.data));else if(void 0!==n.id&&this.parent[n.type])this.parent[n.type](n.sourceMapId,dr(n.data),o);else if(void 0!==n.id&&this.parent.getWorkerSource){var a=n.type.split(".");this.parent.getWorkerSource(n.sourceMapId,a[0],a[1])[a[2]](dr(n.data),o);}else this.parent[n.type](dr(n.data));}},Ma.prototype.remove=function(){this.target.removeEventListener("message",this.receive,!1);};var Va=r(n(function(t,e){!function(t){function e(t,e,n){e=Math.pow(2,n)-e-1;var i=r(256*t,256*e,n),o=r(256*(t+1),256*(e+1),n);return i[0]+","+i[1]+","+o[0]+","+o[1]}function r(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r),i=t*n-2*Math.PI*6378137/2,o=e*n-2*Math.PI*6378137/2;return[i,o]}t.getURL=function(t,r,n,i,o,a){return a=a||{},t+"?"+["bbox="+e(n,i,o),"format="+(a.format||"image/png"),"service="+(a.service||"WMS"),"version="+(a.version||"1.1.1"),"request="+(a.request||"GetMap"),"srs="+(a.srs||"EPSG:3857"),"width="+(a.width||256),"height="+(a.height||256),"layers="+r].join("&")},t.getTileBBox=e,t.getMercCoords=r,Object.defineProperty(t,"__esModule",{value:!0});}(e);})),Ba=function(t,e,r){this.z=t,this.x=e,this.y=r,this.key=Ea(0,t,e,r);};Ba.prototype.equals=function(t){return this.z===t.z&&this.x===t.x&&this.y===t.y},Ba.prototype.url=function(t,e){var r=Va.getTileBBox(this.x,this.y,this.z),n=function(t,e,r){for(var n,i="",o=t;o>0;o--)i+=(e&(n=1<<o-1)?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",n).replace("{bbox-epsg-3857}",r)};var Ca=function(t,e){this.wrap=t,this.canonical=e,this.key=Ea(t,e.z,e.x,e.y);},Ia=function(t,e,r,n,i){this.overscaledZ=t,this.wrap=e,this.canonical=new Ba(r,+n,+i),this.key=Ea(e,t,n,i);};function Ea(t,e,r,n){(t*=2)<0&&(t=-1*t-1);var i=1<<e;return 32*(i*i*t+i*n+r)+e}Ia.prototype.equals=function(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)},Ia.prototype.scaledTo=function(t){var e=this.canonical.z-t;return t>this.canonical.z?new Ia(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Ia(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)},Ia.prototype.isChildOf=function(t){var e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e},Ia.prototype.children=function(t){if(this.overscaledZ>=t)return[new Ia(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];var e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return[new Ia(e,this.wrap,e,r,n),new Ia(e,this.wrap,e,r+1,n),new Ia(e,this.wrap,e,r,n+1),new Ia(e,this.wrap,e,r+1,n+1)]},Ia.prototype.isLessThan=function(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))},Ia.prototype.wrapped=function(){return new Ia(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},Ia.prototype.unwrapTo=function(t){return new Ia(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)},Ia.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},Ia.prototype.toUnwrapped=function(){return new Ca(this.wrap,this.canonical)},Ia.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},Ia.prototype.toCoordinate=function(){return new a(this.canonical.x+Math.pow(2,this.wrap),this.canonical.y,this.canonical.z)},hr("CanonicalTileID",Ba),hr("OverscaledTileID",Ia,{omit:["posMatrix"]});var Fa=function(t,e,r){if(t<=0)throw new RangeError("Level must have positive dimension");this.dim=t,this.border=e,this.stride=this.dim+2*this.border,this.data=r||new Int32Array((this.dim+2*this.border)*(this.dim+2*this.border));};Fa.prototype.set=function(t,e,r){this.data[this._idx(t,e)]=r+65536;},Fa.prototype.get=function(t,e){return this.data[this._idx(t,e)]-65536},Fa.prototype._idx=function(t,e){if(t<-this.border||t>=this.dim+this.border||e<-this.border||e>=this.dim+this.border)throw new RangeError("out of range source coordinates for DEM data");return(e+this.border)*this.stride+(t+this.border)},hr("Level",Fa);var Pa=function(t,e,r){this.uid=t,this.scale=e||1,this.level=r||new Fa(256,512),this.loaded=!!r;};Pa.prototype.loadFromImage=function(t,e){if(t.height!==t.width)throw new RangeError("DEM tiles must be square");if(e&&"mapbox"!==e&&"terrarium"!==e)return b('"'+e+'" is not a valid encoding type. Valid types include "mapbox" and "terrarium".');var r=this.level=new Fa(t.width,t.width/2),n=t.data;this._unpackData(r,n,e||"mapbox");for(var i=0;i<r.dim;i++)r.set(-1,i,r.get(0,i)),r.set(r.dim,i,r.get(r.dim-1,i)),r.set(i,-1,r.get(i,0)),r.set(i,r.dim,r.get(i,r.dim-1));r.set(-1,-1,r.get(0,0)),r.set(r.dim,-1,r.get(r.dim-1,0)),r.set(-1,r.dim,r.get(0,r.dim-1)),r.set(r.dim,r.dim,r.get(r.dim-1,r.dim-1)),this.loaded=!0;},Pa.prototype._unpackMapbox=function(t,e,r){return(256*t*256+256*e+r)/10-1e4},Pa.prototype._unpackTerrarium=function(t,e,r){return 256*t+e+r/256-32768},Pa.prototype._unpackData=function(t,e,r){for(var n={mapbox:this._unpackMapbox,terrarium:this._unpackTerrarium}[r],i=0;i<t.dim;i++)for(var o=0;o<t.dim;o++){var a=4*(i*t.dim+o);t.set(o,i,this.scale*n(e[a],e[a+1],e[a+2]));}},Pa.prototype.getPixels=function(){return new pi({width:this.level.dim+2*this.level.border,height:this.level.dim+2*this.level.border},new Uint8Array(this.level.data.buffer))},Pa.prototype.backfillBorder=function(t,e,r){var n=this.level,i=t.level;if(n.dim!==i.dim)throw new Error("level mismatch (dem dimension)");var o=e*n.dim,a=e*n.dim+n.dim,s=r*n.dim,u=r*n.dim+n.dim;switch(e){case-1:o=a-1;break;case 1:a=o+1;}switch(r){case-1:s=u-1;break;case 1:u=s+1;}for(var l=c(o,-n.border,n.dim+n.border),p=c(a,-n.border,n.dim+n.border),h=c(s,-n.border,n.dim+n.border),f=c(u,-n.border,n.dim+n.border),y=-e*n.dim,d=-r*n.dim,v=h;v<f;v++)for(var m=l;m<p;m++)n.set(m,v,i.get(m+y,v+d));},hr("DEMData",Pa);var Ta=function(t){this._stringToNumber={},this._numberToString=[];for(var e=0;e<t.length;e++){var r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}};Ta.prototype.encode=function(t){return this._stringToNumber[t]},Ta.prototype.decode=function(t){return this._numberToString[t]};var Oa=function(t,e,r,n){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,null!=t.id&&(this.id=t.id);},La={geometry:{configurable:!0}};La.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},La.geometry.set=function(t){this._geometry=t;},Oa.prototype.toJSON=function(){var t={geometry:this.geometry};for(var e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t},Object.defineProperties(Oa.prototype,La);var ja=function(t,e,r){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=e||new sr(Pn,16,0),this.featureIndexArray=r||new An;};function qa(t,e){return e-t}ja.prototype.insert=function(t,e,r,n,i){var o=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i);for(var a=0;a<e.length;a++){for(var s=e[a],u=[1/0,1/0,-1/0,-1/0],l=0;l<s.length;l++){var p=s[l];u[0]=Math.min(u[0],p.x),u[1]=Math.min(u[1],p.y),u[2]=Math.max(u[2],p.x),u[3]=Math.max(u[3],p.y);}u[0]<Pn&&u[1]<Pn&&u[2]>=0&&u[3]>=0&&this.grid.insert(o,u[0],u[1],u[2],u[3]);}},ja.prototype.loadVTLayers=function(){return this.vtLayers||(this.vtLayers=new vo.VectorTile(new oa(this.rawTileData)).layers,this.sourceLayerCoder=new Ta(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers},ja.prototype.query=function(t,e){var r=this;this.loadVTLayers();for(var n=t.params||{},i=Pn/t.tileSize/t.scale,o=Te(n.filter),a=t.queryGeometry,s=t.queryPadding*i,u=1/0,l=1/0,p=-1/0,c=-1/0,h=0;h<a.length;h++)for(var f=a[h],y=0;y<f.length;y++){var d=f[y];u=Math.min(u,d.x),l=Math.min(l,d.y),p=Math.max(p,d.x),c=Math.max(c,d.y);}var v=this.grid.query(u-s,l-s,p+s,c+s);v.sort(qa);for(var m,g={},x=function(s){var u=v[s];if(u!==m){m=u;var l=r.featureIndexArray.get(u),p=null;r.loadMatchingFeature(g,l.bucketIndex,l.sourceLayerIndex,l.featureIndex,o,n.layers,e,function(e,n){return p||(p=Ln(e)),n.queryIntersectsFeature(a,e,p,r.z,t.transform,i,t.posMatrix)});}},b=0;b<v.length;b++)x(b);return g},ja.prototype.loadMatchingFeature=function(t,e,r,n,i,o,a,s){var u=this.bucketLayerIDs[e];if(!o||function(t,e){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return!0;return!1}(o,u)){var l=this.sourceLayerCoder.decode(r),p=this.vtLayers[l].feature(n);if(i(new Br(this.tileID.overscaledZ),p))for(var c=0;c<u.length;c++){var h=u[c];if(!(o&&o.indexOf(h)<0)){var f=a[h];if(f&&(!s||s(p,f))){var y=new Oa(p,this.z,this.x,this.y);y.layer=f.serialize();var d=t[h];void 0===d&&(d=t[h]=[]),d.push({featureIndex:n,feature:y});}}}}},ja.prototype.lookupSymbolFeatures=function(t,e,r,n,i,o){var a={};this.loadVTLayers();for(var s=Te(n),u=0,l=t;u<l.length;u+=1){var p=l[u];this.loadMatchingFeature(a,e,r,p,s,i,o);}return a},ja.prototype.hasLayer=function(t){for(var e=0,r=this.bucketLayerIDs;e<r.length;e+=1)for(var n=0,i=r[e];n<i.length;n+=1){if(t===i[n])return!0}return!1},hr("FeatureIndex",ja,{omit:["rawTileData","sourceLayerCoder"]});var Ra={horizontal:1,vertical:2,horizontalOnly:3};var Ua={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},Da={};function Na(t,e,r,n){var i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function Za(t,e){var r=0;return 10===t&&(r-=1e4),40!==t&&65288!==t||(r+=50),41!==e&&65289!==e||(r+=50),r}function Ka(t,e,r,n,i,o){for(var a=null,s=Na(e,r,i,o),u=0,l=n;u<l.length;u+=1){var p=l[u],c=Na(e-p.x,r,i,o)+p.badness;c<=s&&(a=p,s=c);}return{index:t,x:e,priorBreak:a,badness:s}}function Ja(t,e,r,n){if(!r)return[];if(!t)return[];for(var i,o=[],a=function(t,e,r,n){for(var i=0,o=0;o<t.length;o++){var a=n[t.charCodeAt(o)];a&&(i+=a.metrics.advance+e);}return i/Math.max(1,Math.ceil(i/r))}(t,e,r,n),s=0,u=0;u<t.length;u++){var l=t.charCodeAt(u),p=n[l];p&&!Ua[l]&&(s+=p.metrics.advance+e),u<t.length-1&&(Da[l]||!((i=l)<11904)&&(mr["Bopomofo Extended"](i)||mr.Bopomofo(i)||mr["CJK Compatibility Forms"](i)||mr["CJK Compatibility Ideographs"](i)||mr["CJK Compatibility"](i)||mr["CJK Radicals Supplement"](i)||mr["CJK Strokes"](i)||mr["CJK Symbols and Punctuation"](i)||mr["CJK Unified Ideographs Extension A"](i)||mr["CJK Unified Ideographs"](i)||mr["Enclosed CJK Letters and Months"](i)||mr["Halfwidth and Fullwidth Forms"](i)||mr.Hiragana(i)||mr["Ideographic Description Characters"](i)||mr["Kangxi Radicals"](i)||mr["Katakana Phonetic Extensions"](i)||mr.Katakana(i)||mr["Vertical Forms"](i)||mr["Yi Radicals"](i)||mr["Yi Syllables"](i)))&&o.push(Ka(u+1,s,a,o,Za(l,t.charCodeAt(u+1)),!1));}return function t(e){return e?t(e.priorBreak).concat(e.index):[]}(Ka(t.length,s,a,o,0,!0))}function $a(t){var e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return{horizontalAlign:e,verticalAlign:r}}function Ha(t,e,r,n,i){if(i){var o=e[t[n].glyph];if(o)for(var a=o.metrics.advance,s=(t[n].x+a)*i,u=r;u<=n;u++)t[u].x-=s;}}Da[10]=!0,Da[32]=!0,Da[38]=!0,Da[40]=!0,Da[41]=!0,Da[43]=!0,Da[45]=!0,Da[47]=!0,Da[173]=!0,Da[183]=!0,Da[8203]=!0,Da[8208]=!0,Da[8211]=!0,Da[8231]=!0,t.commonjsGlobal=e,t.unwrapExports=r,t.createCommonjsModule=n,t.default=self,t.default$1=s,t.getJSON=function(t,e){var r=z(t);return r.setRequestHeader("Accept","application/json"),r.onerror=function(){e(new Error(r.statusText));},r.onload=function(){if(r.status>=200&&r.status<300&&r.response){var n;try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n);}else 401===r.status&&t.url.match(/mapbox.com/)?e(new k(r.statusText+": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens",r.status,t.url)):e(new k(r.statusText,r.status,t.url));},r.send(),r},t.getImage=function(t,e){return S(t,function(t,r){if(t)e(t);else if(r){var n=new self.Image,i=self.URL||self.webkitURL;n.onload=function(){e(null,n),i.revokeObjectURL(n.src);};var o=new self.Blob([new Uint8Array(r.data)],{type:"image/png"});n.cacheControl=r.cacheControl,n.expires=r.expires,n.src=r.data.byteLength?i.createObjectURL(o):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";}})},t.ResourceType=A,t.RGBAImage=pi,t.default$2=Qo,t.ImagePosition=ta,t.getArrayBuffer=S,t.default$3=function(t){return new oa(t).readFields(Aa,[])},t.default$4=mr,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[]);var n=t.length,i=new Array(t.length),o=null;t.forEach(function(t,a){e(t,function(t,e){t&&(o=t),i[a]=e,0==--n&&r(o,i);});});},t.AlphaImage=li,t.default$5=E,t.endsWith=d,t.extend=h,t.sphericalToCartesian=function(t){var e=t[0],r=t[1],n=t[2];return r+=90,r*=Math.PI/180,n*=Math.PI/180,{x:e*Math.cos(r)*Math.sin(n),y:e*Math.sin(r)*Math.sin(n),z:e*Math.cos(n)}},t.Evented=I,t.validateStyle=rr,t.validateLight=nr,t.emitValidationErrors=ar,t.default$6=Q,t.number=wt,t.Properties=Dr,t.Transitionable=Er,t.Transitioning=Pr,t.PossiblyEvaluated=Lr,t.DataConstantProperty=jr,t.warnOnce=b,t.uniqueId=function(){return f++},t.default$7=Ma,t.pick=function(t,e){for(var r={},n=0;n<e.length;n++){var i=e[n];i in t&&(r[i]=t[i]);}return r},t.wrap=function(t,e,r){var n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i},t.clamp=c,t.Event=B,t.ErrorEvent=C,t.OverscaledTileID=Ia,t.default$8=Pn,t.createLayout=$r,t.getCoordinatesCenter=function(t){for(var e=1/0,r=1/0,n=-1/0,i=-1/0,o=0;o<t.length;o++)e=Math.min(e,t[o].column),r=Math.min(r,t[o].row),n=Math.max(n,t[o].column),i=Math.max(i,t[o].row);var s=n-e,u=i-r,l=Math.max(s,u),p=Math.max(0,Math.floor(-Math.log(l)/Math.LN2));return new a((e+n)/2,(r+i)/2,0).zoomTo(p)},t.CanonicalTileID=Ba,t.RasterBoundsArray=Gr,t.getVideo=function(t,e){var r,n,i=self.document.createElement("video");i.onloadstart=function(){e(null,i);};for(var o=0;o<t.length;o++){var a=self.document.createElement("source");r=t[o],n=void 0,(n=self.document.createElement("a")).href=r,(n.protocol!==self.document.location.protocol||n.host!==self.document.location.host)&&(i.crossOrigin="Anonymous"),a.src=t[o],i.appendChild(a);}return i},t.default$9=F,t.bindAll=y,t.default$10=function t(e,r){if(Array.isArray(e)){if(!Array.isArray(r)||e.length!==r.length)return!1;for(var n=0;n<e.length;n++)if(!t(e[n],r[n]))return!1;return!0}if("object"==typeof e&&null!==e&&null!==r){if("object"!=typeof r)return!1;if(Object.keys(e).length!==Object.keys(r).length)return!1;for(var i in e)if(!t(e[i],r[i]))return!1;return!0}return e===r},t.parseCacheControl=function(t){var e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,function(t,r,n,i){var o=n||i;return e[r]=!o||o.toLowerCase(),""}),e["max-age"]){var r=parseInt(e["max-age"],10);isNaN(r)?delete e["max-age"]:e["max-age"]=r;}return e},t.default$11=ja,t.default$12=Oa,t.default$13=Te,t.default$14=Ko,t.CollisionBoxArray=dn,t.default$15=zn,t.TriangleIndexArray=pn,t.default$16=Br,t.default$17=a,t.keysDifference=function(t,e){var r=[];for(var n in t)n in e||r.push(n);return r},t.default$18=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.mat4=ri,t.vec4=ei,t.getSizeData=jo,t.evaluateSizeForFeature=function(t,e,r){var n=e;return"source"===t.functionType?r.lowerSize/10:"composite"===t.functionType?wt(r.lowerSize/10,r.upperSize/10,n.uSizeT):n.uSize},t.evaluateSizeForZoom=function(t,e,r){if("constant"===t.functionType)return{uSizeT:0,uSize:t.layoutSize};if("source"===t.functionType)return{uSizeT:0,uSize:0};if("camera"===t.functionType){var n=t.propertyValue,i=t.zoomRange,o=t.sizeRange,a=c(Se(n,r.specification).interpolationFactor(e,i.min,i.max),0,1);return{uSizeT:0,uSize:o.min+a*(o.max-o.min)}}var s=t.propertyValue,u=t.zoomRange;return{uSizeT:c(Se(s,r.specification).interpolationFactor(e,u.min,u.max),0,1),uSize:0}},t.addDynamicAttributes=Do,t.default$19=$o,t.WritingMode=Ra,t.multiPolygonIntersectsBufferedPoint=Rn,t.multiPolygonIntersectsMultiPolygon=Un,t.multiPolygonIntersectsBufferedMultiLine=Dn,t.polygonIntersectsPolygon=function(t,e){for(var r=0;r<t.length;r++)if(Xn(e,t[r]))return!0;for(var n=0;n<e.length;n++)if(Xn(t,e[n]))return!0;return!!Zn(t,e)},t.distToSegmentSquared=$n,t.default$20=ti,t.default$21=Nr,t.default$22=function(t){return new Wo[t.type](t)},t.clone=g,t.filterObject=m,t.mapObject=v,t.registerForPluginAvailability=function(t){return zr?t({pluginURL:zr,completionCallback:Ar}):Mr.once("pluginAvailable",t),t},t.evented=Mr,t.default$23=vr,t.default$24=In,t.PosArray=Xr,t.UnwrappedTileID=Ca,t.ease=p,t.bezier=l,t.setRTLTextPlugin=function(t,e){if(kr)throw new Error("setRTLTextPlugin cannot be called multiple times.");kr=!0,zr=t,Ar=function(t){t?(kr=!1,zr=null,e&&e(t)):Sr=!0;},Mr.fire(new B("pluginAvailable",{pluginURL:zr,completionCallback:Ar}));},t.values=function(t){var e=[];for(var r in t)e.push(t[r]);return e},t.default$25=Lo,t.register=hr,t.GLYPH_PBF_BORDER=Sa,t.shapeText=function(t,e,r,n,i,o,a,s,u,l){var p=t.trim();l===Ra.vertical&&(p=function(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;n&&wr(n)&&!Oo[t[r+1]]||i&&wr(i)&&!Oo[t[r-1]]||!Oo[t[r]]?e+=t[r]:e+=Oo[t[r]];}return e}(p));var c=[],h={positionedGlyphs:c,text:p,top:s[1],bottom:s[1],left:s[0],right:s[0],writingMode:l},f=Vr.processBidirectionalText;return function(t,e,r,n,i,o,a,s,u){for(var l=0,p=-17,c=0,h=t.positionedGlyphs,f="right"===o?1:"left"===o?0:.5,y=0,d=r;y<d.length;y+=1){var v=d[y];if((v=v.trim()).length){for(var m=h.length,g=0;g<v.length;g++){var x=v.charCodeAt(g),b=e[x];b&&(br(x)&&a!==Ra.horizontal?(h.push({glyph:x,x:l,y:0,vertical:!0}),l+=u+s):(h.push({glyph:x,x:l,y:p,vertical:!1}),l+=b.metrics.advance+s));}if(h.length!==m){var w=l-s;c=Math.max(w,c),Ha(h,e,m,h.length-1,f);}l=0,p+=n;}else p+=n;}var _=$a(i),A=_.horizontalAlign,k=_.verticalAlign;!function(t,e,r,n,i,o,a){for(var s=(e-r)*i,u=(-n*a+.5)*o,l=0;l<t.length;l++)t[l].x+=s,t[l].y+=u;}(h,f,A,k,c,n,r.length);var z=r.length*n;t.top+=-k*z,t.bottom=t.top+z,t.left+=-A*c,t.right=t.left+c;}(h,e,f?f(p,Ja(p,a,r,e)):function(t,e){for(var r=[],n=0,i=0,o=e;i<o.length;i+=1){var a=o[i];r.push(t.substring(n,a)),n=a;}return n<t.length&&r.push(t.substring(n,t.length)),r}(p,Ja(p,a,r,e)),n,i,o,l,a,u),!!c.length&&h},t.shapeIcon=function(t,e,r){var n=$a(r),i=n.horizontalAlign,o=n.verticalAlign,a=e[0],s=e[1],u=a-t.displaySize[0]*i,l=u+t.displaySize[0],p=s-t.displaySize[1]*o;return{image:t,top:p,bottom:p+t.displaySize[1],left:u,right:l}},t.allowsVerticalWritingMode=gr,t.allowsLetterSpacing=function(t){for(var e=0,r=t;e<r.length;e+=1)if(!xr(r[e].charCodeAt(0)))return!1;return!0},t.default$26=$i,t.default$27=Ta,t.default$28=ra,t.default$29=vo,t.default$30=oa,t.default$31=Pa,t.__moduleExports=vo,t.default$32=s,t.__moduleExports$1=oa,t.plugin=Vr;});

define(["./chunk1.js"],function(e){"use strict";function t(e){var i=typeof e;if("number"===i||"boolean"===i||"string"===i||null==e)return JSON.stringify(e);if(Array.isArray(e)){for(var r="[",n=0,o=e;n<o.length;n+=1){r+=t(o[n])+",";}return r+"]"}for(var a=Object.keys(e).sort(),s="{",l=0;l<a.length;l++)s+=JSON.stringify(a[l])+":"+t(e[a[l]])+",";return s+"}"}function i(i){for(var r="",n=0,o=e.default$18;n<o.length;n+=1){r+="/"+t(i[o[n]]);}return r}var r=function(e){e&&this.replace(e);};function n(e,t,i,r,n){if(void 0===t.segment)return!0;for(var o=t,a=t.segment+1,s=0;s>-i/2;){if(--a<0)return!1;s-=e[a].dist(o),o=e[a];}s+=e[a].dist(e[a+1]),a++;for(var l=[],u=0;s<i/2;){var h=e[a-1],c=e[a],f=e[a+1];if(!f)return!1;var p=h.angleTo(c)-c.angleTo(f);for(p=Math.abs((p+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:s,angleDelta:p}),u+=p;s-l[0].distance>r;)u-=l.shift().angleDelta;if(u>n)return!1;a++,s+=c.dist(f);}return!0}function o(t,i,r,o,a,s,l,u,h){var c=o?.6*s*l:0,f=Math.max(o?o.right-o.left:0,a?a.right-a.left:0),p=0===t[0].x||t[0].x===h||0===t[0].y||t[0].y===h;return i-f*l<i/4&&(i=f*l+i/4),function t(i,r,o,a,s,l,u,h,c){var f=l/2;var p=0;for(var d=0;d<i.length-1;d++)p+=i[d].dist(i[d+1]);var g=0,v=r-o;var y=[];for(var m=0;m<i.length-1;m++){for(var x=i[m],w=i[m+1],S=x.dist(w),M=w.angleTo(x);v+o<g+S;){var b=((v+=o)-g)/S,_=e.number(x.x,w.x,b),I=e.number(x.y,w.y,b);if(_>=0&&_<c&&I>=0&&I<c&&v-f>=0&&v+f<=p){var z=new e.default$25(_,I,M,m);z._round(),a&&!n(i,z,l,a,s)||y.push(z);}}g+=S;}h||y.length||u||(y=t(i,g/2,o,a,s,l,u,!0,c));return y}(t,p?i/2*u%i:(f/2+2*s)*l*u%i,i,c,r,f*l,p,!1,h)}r.prototype.replace=function(e){this._layerConfigs={},this._layers={},this.update(e,[]);},r.prototype.update=function(t,r){for(var n=this,o=0,a=t;o<a.length;o+=1){var s=a[o];n._layerConfigs[s.id]=s;var l=n._layers[s.id]=e.default$22(s);l._featureFilter=e.default$13(l.filter);}for(var u=0,h=r;u<h.length;u+=1){var c=h[u];delete n._layerConfigs[c],delete n._layers[c];}this.familiesBySource={};for(var f=0,p=function(e){for(var t={},r=0;r<e.length;r++){var n=i(e[r]),o=t[n];o||(o=t[n]=[]),o.push(e[r]);}var a=[];for(var s in t)a.push(t[s]);return a}(e.values(this._layerConfigs));f<p.length;f+=1){var d=p[f].map(function(e){return n._layers[e.id]}),g=d[0];if("none"!==g.visibility){var v=g.source||"",y=n.familiesBySource[v];y||(y=n.familiesBySource[v]={});var m=g.sourceLayer||"_geojsonTileLayer",x=y[m];x||(x=y[m]=[]),x.push(d);}}};var a=function(){this.opacity=0,this.targetOpacity=0,this.time=0;};a.prototype.clone=function(){var e=new a;return e.opacity=this.opacity,e.targetOpacity=this.targetOpacity,e.time=this.time,e},e.register("OpacityState",a);var s=function(e,t,i,r,n,o,a,s,l,u,h){var c=a.top*s-l,f=a.bottom*s+l,p=a.left*s-l,d=a.right*s+l;if(this.boxStartIndex=e.length,u){var g=f-c,v=d-p;g>0&&(g=Math.max(10*s,g),this._addLineCollisionCircles(e,t,i,i.segment,v,g,r,n,o,h));}else e.emplaceBack(i.x,i.y,p,c,d,f,r,n,o,0,0);this.boxEndIndex=e.length;};s.prototype._addLineCollisionCircles=function(e,t,i,r,n,o,a,s,l,u){var h=o/2,c=Math.floor(n/h),f=1+.4*Math.log(u)/Math.LN2,p=Math.floor(c*f/2),d=-o/2,g=i,v=r+1,y=d,m=-n/2,x=m-n/4;do{if(--v<0){if(y>m)return;v=0;break}y-=t[v].dist(g),g=t[v];}while(y>x);for(var w=t[v].dist(t[v+1]),S=-p;S<c+p;S++){var M=S*h,b=m+M;if(M<0&&(b+=M),M>n&&(b+=M-n),!(b<y)){for(;y+w<b;){if(y+=w,++v+1>=t.length)return;w=t[v].dist(t[v+1]);}var _=b-y,I=t[v],z=t[v+1].sub(I)._unit()._mult(_)._add(I)._round(),T=Math.abs(b-d)<h?0:.8*(b-d);e.emplaceBack(z.x,z.y,-o/2,-o/2,o/2,o/2,a,s,l,o/2,T);}}};var l=h,u=h;function h(e,t){if(!(this instanceof h))return new h(e,t);if(this.data=e||[],this.length=this.data.length,this.compare=t||c,this.length>0)for(var i=(this.length>>1)-1;i>=0;i--)this._down(i);}function c(e,t){return e<t?-1:e>t?1:0}function f(t,i,r){void 0===i&&(i=1),void 0===r&&(r=!1);for(var n=1/0,o=1/0,a=-1/0,s=-1/0,u=t[0],h=0;h<u.length;h++){var c=u[h];(!h||c.x<n)&&(n=c.x),(!h||c.y<o)&&(o=c.y),(!h||c.x>a)&&(a=c.x),(!h||c.y>s)&&(s=c.y);}var f=a-n,g=s-o,v=Math.min(f,g),y=v/2,m=new l(null,p);if(0===v)return new e.default$1(n,o);for(var x=n;x<a;x+=v)for(var w=o;w<s;w+=v)m.push(new d(x+y,w+y,y,t));for(var S=function(e){for(var t=0,i=0,r=0,n=e[0],o=0,a=n.length,s=a-1;o<a;s=o++){var l=n[o],u=n[s],h=l.x*u.y-u.x*l.y;i+=(l.x+u.x)*h,r+=(l.y+u.y)*h,t+=3*h;}return new d(i/t,r/t,0,e)}(t),M=m.length;m.length;){var b=m.pop();(b.d>S.d||!S.d)&&(S=b,r&&console.log("found best %d after %d probes",Math.round(1e4*b.d)/1e4,M)),b.max-S.d<=i||(y=b.h/2,m.push(new d(b.p.x-y,b.p.y-y,y,t)),m.push(new d(b.p.x+y,b.p.y-y,y,t)),m.push(new d(b.p.x-y,b.p.y+y,y,t)),m.push(new d(b.p.x+y,b.p.y+y,y,t)),M+=4);}return r&&(console.log("num probes: "+M),console.log("best distance: "+S.d)),S.p}function p(e,t){return t.max-e.max}function d(t,i,r,n){this.p=new e.default$1(t,i),this.h=r,this.d=function(t,i){for(var r=!1,n=1/0,o=0;o<i.length;o++)for(var a=i[o],s=0,l=a.length,u=l-1;s<l;u=s++){var h=a[s],c=a[u];h.y>t.y!=c.y>t.y&&t.x<(c.x-h.x)*(t.y-h.y)/(c.y-h.y)+h.x&&(r=!r),n=Math.min(n,e.distToSegmentSquared(t,h,c));}return(r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}function g(t,i,r,n,o,a){t.createArrays(),t.symbolInstances=[];var s=512*t.overscaling;t.tilePixelRatio=e.default$8/s,t.compareText={},t.iconsNeedLinear=!1;var l=t.layers[0].layout,u=t.layers[0]._unevaluatedLayout._values,h={};if("composite"===t.textSizeData.functionType){var c=t.textSizeData.zoomRange,f=c.min,p=c.max;h.compositeTextSizes=[u["text-size"].possiblyEvaluate(new e.default$16(f)),u["text-size"].possiblyEvaluate(new e.default$16(p))];}if("composite"===t.iconSizeData.functionType){var d=t.iconSizeData.zoomRange,g=d.min,y=d.max;h.compositeIconSizes=[u["icon-size"].possiblyEvaluate(new e.default$16(g)),u["icon-size"].possiblyEvaluate(new e.default$16(y))];}h.layoutTextSize=u["text-size"].possiblyEvaluate(new e.default$16(t.zoom+1)),h.layoutIconSize=u["icon-size"].possiblyEvaluate(new e.default$16(t.zoom+1)),h.textMaxSize=u["text-size"].possiblyEvaluate(new e.default$16(18));for(var m=24*l.get("text-line-height"),x="map"===l.get("text-rotation-alignment")&&"line"===l.get("symbol-placement"),w=l.get("text-keep-upright"),S=0,M=t.features;S<M.length;S+=1){var b=M[S],_=l.get("text-font").evaluate(b).join(","),I=i[_]||{},z=r[_]||{},T={},P=b.text;if(P){var k=l.get("text-offset").evaluate(b).map(function(e){return 24*e}),L=24*l.get("text-letter-spacing").evaluate(b),$=e.allowsLetterSpacing(P)?L:0,D=l.get("text-anchor").evaluate(b),O=l.get("text-justify").evaluate(b),C="line"!==l.get("symbol-placement")?24*l.get("text-max-width").evaluate(b):0;T.horizontal=e.shapeText(P,I,C,m,D,O,$,k,24,e.WritingMode.horizontal),e.allowsVerticalWritingMode(P)&&x&&w&&(T.vertical=e.shapeText(P,I,C,m,D,O,$,k,24,e.WritingMode.vertical));}var A=void 0;if(b.icon){var E=n[b.icon];E&&(A=e.shapeIcon(o[b.icon],l.get("icon-offset").evaluate(b),l.get("icon-anchor").evaluate(b)),void 0===t.sdfIcons?t.sdfIcons=E.sdf:t.sdfIcons!==E.sdf&&e.warnOnce("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),E.pixelRatio!==t.pixelRatio?t.iconsNeedLinear=!0:0!==l.get("icon-rotate").constantOr(1)&&(t.iconsNeedLinear=!0));}(T.horizontal||A)&&v(t,b,T,A,z,h);}a&&t.generateCollisionDebugBuffers();}function v(t,i,r,n,l,u){var h=u.layoutTextSize.evaluate(i),c=u.layoutIconSize.evaluate(i),p=u.textMaxSize.evaluate(i);void 0===p&&(p=h);var d=t.layers[0].layout,g=d.get("text-offset").evaluate(i),v=d.get("icon-offset").evaluate(i),x=h/24,w=t.tilePixelRatio*x,S=t.tilePixelRatio*p/24,M=t.tilePixelRatio*c,b=t.tilePixelRatio*d.get("symbol-spacing"),_=d.get("text-padding")*t.tilePixelRatio,I=d.get("icon-padding")*t.tilePixelRatio,z=d.get("text-max-angle")/180*Math.PI,T="map"===d.get("text-rotation-alignment")&&"line"===d.get("symbol-placement"),P="map"===d.get("icon-rotation-alignment")&&"line"===d.get("symbol-placement"),k=b/2,L=function(o,h){h.x<0||h.x>=e.default$8||h.y<0||h.y>=e.default$8||t.symbolInstances.push(function(t,i,r,n,o,l,u,h,c,f,p,d,g,v,m,x,w,S,M,b,_){var I,z,T=t.addToLineVertexArray(i,r),P=0,k=0,L=0,$=n.horizontal?n.horizontal.text:"",D=[];n.horizontal&&(I=new s(u,r,i,h,c,f,n.horizontal,p,d,g,t.overscaling),k+=y(t,i,n.horizontal,l,g,M,v,T,n.vertical?e.WritingMode.horizontal:e.WritingMode.horizontalOnly,D,b,_),n.vertical&&(L+=y(t,i,n.vertical,l,g,M,v,T,e.WritingMode.vertical,D,b,_)));var O=I?I.boxStartIndex:t.collisionBoxArray.length,C=I?I.boxEndIndex:t.collisionBoxArray.length;if(o){var A=function(t,i,r,n,o,a){var s,l,u,h,c=i.image,f=r.layout,p=i.top-1/c.pixelRatio,d=i.left-1/c.pixelRatio,g=i.bottom+1/c.pixelRatio,v=i.right+1/c.pixelRatio;if("none"!==f.get("icon-text-fit")&&o){var y=v-d,m=g-p,x=f.get("text-size").evaluate(a)/24,w=o.left*x,S=o.right*x,M=o.top*x,b=S-w,_=o.bottom*x-M,I=f.get("icon-text-fit-padding")[0],z=f.get("icon-text-fit-padding")[1],T=f.get("icon-text-fit-padding")[2],P=f.get("icon-text-fit-padding")[3],k="width"===f.get("icon-text-fit")?.5*(_-m):0,L="height"===f.get("icon-text-fit")?.5*(b-y):0,$="width"===f.get("icon-text-fit")||"both"===f.get("icon-text-fit")?b:y,D="height"===f.get("icon-text-fit")||"both"===f.get("icon-text-fit")?_:m;s=new e.default$1(w+L-P,M+k-I),l=new e.default$1(w+L+z+$,M+k-I),u=new e.default$1(w+L+z+$,M+k+T+D),h=new e.default$1(w+L-P,M+k+T+D);}else s=new e.default$1(d,p),l=new e.default$1(v,p),u=new e.default$1(v,g),h=new e.default$1(d,g);var O=r.layout.get("icon-rotate").evaluate(a)*Math.PI/180;if(O){var C=Math.sin(O),A=Math.cos(O),E=[A,-C,C,A];s._matMult(E),l._matMult(E),h._matMult(E),u._matMult(E);}return[{tl:s,tr:l,bl:h,br:u,tex:c.paddedRect,writingMode:void 0,glyphOffset:[0,0]}]}(0,o,l,0,n.horizontal,M);z=new s(u,r,i,h,c,f,o,m,x,!1,t.overscaling),P=4*A.length;var E=t.iconSizeData,N=null;"source"===E.functionType?N=[10*l.layout.get("icon-size").evaluate(M)]:"composite"===E.functionType&&(N=[10*_.compositeIconSizes[0].evaluate(M),10*_.compositeIconSizes[1].evaluate(M)]),t.addSymbols(t.icon,A,N,S,w,M,!1,i,T.lineStartIndex,T.lineLength);}var R=z?z.boxStartIndex:t.collisionBoxArray.length,B=z?z.boxEndIndex:t.collisionBoxArray.length;t.glyphOffsetArray.length>=e.default$14.MAX_GLYPHS&&e.warnOnce("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907");var F=new a,G=new a;return{key:$,textBoxStartIndex:O,textBoxEndIndex:C,iconBoxStartIndex:R,iconBoxEndIndex:B,textOffset:v,iconOffset:S,anchor:i,line:r,featureIndex:h,feature:M,numGlyphVertices:k,numVerticalGlyphVertices:L,numIconVertices:P,textOpacityState:F,iconOpacityState:G,isDuplicate:!1,placedTextSymbolIndices:D,crossTileID:0}}(t,h,o,r,n,t.layers[0],t.collisionBoxArray,i.index,i.sourceLayerIndex,t.index,w,_,T,g,M,I,P,v,i,l,u));};if("line"===d.get("symbol-placement"))for(var $=0,D=function(t,i,r,n,o){for(var a=[],s=0;s<t.length;s++)for(var l=t[s],u=void 0,h=0;h<l.length-1;h++){var c=l[h],f=l[h+1];c.x<i&&f.x<i||(c.x<i?c=new e.default$1(i,c.y+(f.y-c.y)*((i-c.x)/(f.x-c.x)))._round():f.x<i&&(f=new e.default$1(i,c.y+(f.y-c.y)*((i-c.x)/(f.x-c.x)))._round()),c.y<r&&f.y<r||(c.y<r?c=new e.default$1(c.x+(f.x-c.x)*((r-c.y)/(f.y-c.y)),r)._round():f.y<r&&(f=new e.default$1(c.x+(f.x-c.x)*((r-c.y)/(f.y-c.y)),r)._round()),c.x>=n&&f.x>=n||(c.x>=n?c=new e.default$1(n,c.y+(f.y-c.y)*((n-c.x)/(f.x-c.x)))._round():f.x>=n&&(f=new e.default$1(n,c.y+(f.y-c.y)*((n-c.x)/(f.x-c.x)))._round()),c.y>=o&&f.y>=o||(c.y>=o?c=new e.default$1(c.x+(f.x-c.x)*((o-c.y)/(f.y-c.y)),o)._round():f.y>=o&&(f=new e.default$1(c.x+(f.x-c.x)*((o-c.y)/(f.y-c.y)),o)._round()),u&&c.equals(u[u.length-1])||(u=[c],a.push(u)),u.push(f)))));}return a}(i.geometry,0,0,e.default$8,e.default$8);$<D.length;$+=1)for(var O=D[$],C=0,A=o(O,b,z,r.vertical||r.horizontal,n,24,S,t.overscaling,e.default$8);C<A.length;C+=1){var E=A[C],N=r.horizontal;N&&m(t,N.text,k,E)||L(O,E);}else if("Polygon"===i.type)for(var R=0,B=e.default$26(i.geometry,0);R<B.length;R+=1){var F=B[R],G=f(F,16);L(F[0],new e.default$25(G.x,G.y,0));}else if("LineString"===i.type)for(var V=0,J=i.geometry;V<J.length;V+=1){var W=J[V];L(W,new e.default$25(W[0].x,W[0].y,0));}else if("Point"===i.type)for(var Y=0,Z=i.geometry;Y<Z.length;Y+=1)for(var j=0,X=Z[Y];j<X.length;j+=1){var q=X[j];L([q],new e.default$25(q.x,q.y,0));}}function y(t,i,r,n,o,a,s,l,u,h,c,f){var p=function(t,i,r,n,o,a){for(var s=r.layout.get("text-rotate").evaluate(o)*Math.PI/180,l=r.layout.get("text-offset").evaluate(o).map(function(e){return 24*e}),u=i.positionedGlyphs,h=[],c=0;c<u.length;c++){var f=u[c],p=a[f.glyph];if(p){var d=p.rect;if(d){var g=e.GLYPH_PBF_BORDER+1,v=p.metrics.advance/2,y=n?[f.x+v,f.y]:[0,0],m=n?[0,0]:[f.x+v+l[0],f.y+l[1]],x=p.metrics.left-g-v+m[0],w=-p.metrics.top-g+m[1],S=x+d.w,M=w+d.h,b=new e.default$1(x,w),_=new e.default$1(S,w),I=new e.default$1(x,M),z=new e.default$1(S,M);if(n&&f.vertical){var T=new e.default$1(-v,v),P=-Math.PI/2,k=new e.default$1(5,0);b._rotateAround(P,T)._add(k),_._rotateAround(P,T)._add(k),I._rotateAround(P,T)._add(k),z._rotateAround(P,T)._add(k);}if(s){var L=Math.sin(s),$=Math.cos(s),D=[$,-L,L,$];b._matMult(D),_._matMult(D),I._matMult(D),z._matMult(D);}h.push({tl:b,tr:_,bl:I,br:z,tex:d,writingMode:i.writingMode,glyphOffset:y});}}}return h}(0,r,n,o,a,c),d=t.textSizeData,g=null;return"source"===d.functionType?g=[10*n.layout.get("text-size").evaluate(a)]:"composite"===d.functionType&&(g=[10*f.compositeTextSizes[0].evaluate(a),10*f.compositeTextSizes[1].evaluate(a)]),t.addSymbols(t.text,p,g,s,o,a,u,i,l.lineStartIndex,l.lineLength),h.push(t.text.placedSymbolArray.length-1),4*p.length}function m(e,t,i,r){var n=e.compareText;if(t in n){for(var o=n[t],a=o.length-1;a>=0;a--)if(r.dist(o[a])<i)return!0}else n[t]=[];return n[t].push(r),!1}h.prototype={push:function(e){this.data.push(e),this.length++,this._up(this.length-1);},pop:function(){if(0!==this.length){var e=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),e}},peek:function(){return this.data[0]},_up:function(e){for(var t=this.data,i=this.compare,r=t[e];e>0;){var n=e-1>>1,o=t[n];if(i(r,o)>=0)break;t[e]=o,e=n;}t[e]=r;},_down:function(e){for(var t=this.data,i=this.compare,r=this.length>>1,n=t[e];e<r;){var o=1+(e<<1),a=o+1,s=t[o];if(a<this.length&&i(t[a],s)<0&&(o=a,s=t[a]),i(s,n)>=0)break;t[e]=s,e=o;}t[e]=n;}},l.default=u;var x=function(t){var i=new e.AlphaImage({width:0,height:0}),r={},n=new e.default$2(0,0,{autoResize:!0});for(var o in t){var a=t[o],s=r[o]={};for(var l in a){var u=a[+l];if(u&&0!==u.bitmap.width&&0!==u.bitmap.height){var h=n.packOne(u.bitmap.width+2,u.bitmap.height+2);i.resize({width:n.w,height:n.h}),e.AlphaImage.copy(u.bitmap,i,{x:0,y:0},{x:h.x+1,y:h.y+1},u.bitmap),s[l]={rect:h,metrics:u.metrics};}}}n.shrink(),i.resize({width:n.w,height:n.h}),this.image=i,this.positions=r;};e.register("GlyphAtlas",x);var w=function(t){this.tileID=new e.OverscaledTileID(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming;};function S(t,i){for(var r=new e.default$16(i),n=0,o=t;n<o.length;n+=1){o[n].recalculate(r);}}w.prototype.parse=function(t,i,r,n){var o=this;this.status="parsing",this.data=t,this.collisionBoxArray=new e.CollisionBoxArray;var a=new e.default$27(Object.keys(t.layers).sort()),s=new e.default$11(this.tileID);s.bucketLayerIDs=[];var l,u,h,c={},f={featureIndex:s,iconDependencies:{},glyphDependencies:{}},p=i.familiesBySource[this.source];for(var d in p){var v=t.layers[d];if(v){1===v.version&&e.warnOnce('Vector tile source "'+o.source+'" layer "'+d+'" does not use vector tile spec v2 and therefore may have some rendering errors.');for(var y=a.encode(d),m=[],w=0;w<v.length;w++){var M=v.feature(w);m.push({feature:M,index:w,sourceLayerIndex:y});}for(var b=0,_=p[d];b<_.length;b+=1){var I=_[b],z=I[0];if(!(z.minzoom&&o.zoom<Math.floor(z.minzoom)))if(!(z.maxzoom&&o.zoom>=z.maxzoom))if("none"!==z.visibility)S(I,o.zoom),(c[z.id]=z.createBucket({index:s.bucketLayerIDs.length,layers:I,zoom:o.zoom,pixelRatio:o.pixelRatio,overscaling:o.overscaling,collisionBoxArray:o.collisionBoxArray,sourceLayerIndex:y})).populate(m,f),s.bucketLayerIDs.push(I.map(function(e){return e.id}));}}}var T=e.mapObject(f.glyphDependencies,function(e){return Object.keys(e).map(Number)});Object.keys(T).length?r.send("getGlyphs",{uid:this.uid,stacks:T},function(e,t){l||(l=e,u=t,k.call(o));}):u={};var P=Object.keys(f.iconDependencies);function k(){if(l)return n(l);if(u&&h){var t=new x(u),i=new e.default$28(h);for(var r in c){var o=c[r];o instanceof e.default$14&&(S(o.layers,this.zoom),g(o,u,t.positions,h,i.positions,this.showCollisionBoxes));}this.status="done",n(null,{buckets:e.values(c).filter(function(e){return!e.isEmpty()}),featureIndex:s,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,iconAtlasImage:i.image});}}P.length?r.send("getImages",{icons:P},function(e,t){l||(l=e,h=t,k.call(o));}):h={},k.call(this);};var M=function(e){return!(!performance||!performance.getEntriesByName)&&performance.getEntriesByName(e)};function b(t,i){var r=e.getArrayBuffer(t.request,function(t,r){t?i(t):r&&i(null,{vectorTile:new e.default$29.VectorTile(new e.default$30(r.data)),rawData:r.data,cacheControl:r.cacheControl,expires:r.expires});});return function(){r.abort(),i();}}var _=function(e,t,i){this.actor=e,this.layerIndex=t,this.loadVectorData=i||b,this.loading={},this.loaded={};};_.prototype.loadTile=function(t,i){var r=this,n=t.uid;this.loading||(this.loading={});var o=this.loading[n]=new w(t);o.abort=this.loadVectorData(t,function(a,s){if(delete r.loading[n],a||!s)return i(a);var l=s.rawData,u={};s.expires&&(u.expires=s.expires),s.cacheControl&&(u.cacheControl=s.cacheControl);var h={};if(t.request&&t.request.collectResourceTiming){var c=M(t.request.url);c&&(h.resourceTiming=JSON.parse(JSON.stringify(c)));}o.vectorTile=s.vectorTile,o.parse(s.vectorTile,r.layerIndex,r.actor,function(t,r){if(t||!r)return i(t);i(null,e.extend({rawTileData:l.slice(0)},r,u,h));}),r.loaded=r.loaded||{},r.loaded[n]=o;});},_.prototype.reloadTile=function(e,t){var i=this.loaded,r=e.uid,n=this;if(i&&i[r]){var o=i[r];o.showCollisionBoxes=e.showCollisionBoxes;var a=function(e,i){var r=o.reloadCallback;r&&(delete o.reloadCallback,o.parse(o.vectorTile,n.layerIndex,n.actor,r)),t(e,i);};"parsing"===o.status?o.reloadCallback=a:"done"===o.status&&o.parse(o.vectorTile,this.layerIndex,this.actor,a);}},_.prototype.abortTile=function(e,t){var i=this.loading,r=e.uid;i&&i[r]&&i[r].abort&&(i[r].abort(),delete i[r]),t();},_.prototype.removeTile=function(e,t){var i=this.loaded,r=e.uid;i&&i[r]&&delete i[r],t();};var I=function(){this.loading={},this.loaded={};};I.prototype.loadTile=function(t,i){var r=t.uid,n=t.encoding,o=new e.default$31(r);this.loading[r]=o,o.loadFromImage(t.rawImageData,n),delete this.loading[r],this.loaded=this.loaded||{},this.loaded[r]=o,i(null,o);},I.prototype.removeTile=function(e){var t=this.loaded,i=e.uid;t&&t[i]&&delete t[i];};var z={RADIUS:6378137,FLATTENING:1/298.257223563,POLAR_RADIUS:6356752.3142};function T(e){var t=0;if(e&&e.length>0){t+=Math.abs(P(e[0]));for(var i=1;i<e.length;i++)t-=Math.abs(P(e[i]));}return t}function P(e){var t,i,r,n,o,a,s=0,l=e.length;if(l>2){for(a=0;a<l;a++)a===l-2?(r=l-2,n=l-1,o=0):a===l-1?(r=l-1,n=0,o=1):(r=a,n=a+1,o=a+2),t=e[r],i=e[n],s+=(k(e[o][0])-k(t[0]))*Math.sin(k(i[1]));s=s*z.RADIUS*z.RADIUS/2;}return s}function k(e){return e*Math.PI/180}var L={geometry:function e(t){var i,r=0;switch(t.type){case"Polygon":return T(t.coordinates);case"MultiPolygon":for(i=0;i<t.coordinates.length;i++)r+=T(t.coordinates[i]);return r;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0;case"GeometryCollection":for(i=0;i<t.geometries.length;i++)r+=e(t.geometries[i]);return r}},ring:P},$=function e(t,i){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.map(D(e,i)),t;case"Feature":return t.geometry=e(t.geometry,i),t;case"Polygon":case"MultiPolygon":return function(e,t){"Polygon"===e.type?e.coordinates=O(e.coordinates,t):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(D(O,t)));return e}(t,i);default:return t}};function D(e,t){return function(i){return e(i,t)}}function O(e,t){t=!!t,e[0]=C(e[0],t);for(var i=1;i<e.length;i++)e[i]=C(e[i],!t);return e}function C(e,t){return function(e){return L.ring(e)>=0}(e)===t?e:e.reverse()}var A=e.default$29.VectorTileFeature.prototype.toGeoJSON,E=function(t){this._feature=t,this.extent=e.default$8,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));};E.prototype.loadGeometry=function(){if(1===this._feature.type){for(var t=[],i=0,r=this._feature.geometry;i<r.length;i+=1){var n=r[i];t.push([new e.default$1(n[0],n[1])]);}return t}for(var o=[],a=0,s=this._feature.geometry;a<s.length;a+=1){for(var l=[],u=0,h=s[a];u<h.length;u+=1){var c=h[u];l.push(new e.default$1(c[0],c[1]));}o.push(l);}return o},E.prototype.toGeoJSON=function(e,t,i){return A.call(this,e,t,i)};var N=function(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.default$8,this.length=t.length,this._features=t;};N.prototype.feature=function(e){return new E(this._features[e])};var R=e.__moduleExports.VectorTileFeature,B=F;function F(e,t){this.options=t||{},this.features=e,this.length=e.length;}function G(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}F.prototype.feature=function(e){return new G(this.features[e],this.options.extent)},G.prototype.loadGeometry=function(){var t=this.rawGeometry;this.geometry=[];for(var i=0;i<t.length;i++){for(var r=t[i],n=[],o=0;o<r.length;o++)n.push(new e.default$32(r[o][0],r[o][1]));this.geometry.push(n);}return this.geometry},G.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,i=-1/0,r=1/0,n=-1/0,o=0;o<e.length;o++)for(var a=e[o],s=0;s<a.length;s++){var l=a[s];t=Math.min(t,l.x),i=Math.max(i,l.x),r=Math.min(r,l.y),n=Math.max(n,l.y);}return[t,r,i,n]},G.prototype.toGeoJSON=R.prototype.toGeoJSON;var V=Z,J=Z,W=function(e,t){t=t||{};var i={};for(var r in e)i[r]=new B(e[r].features,t),i[r].name=r,i[r].version=t.version,i[r].extent=t.extent;return Z({layers:i})},Y=B;function Z(t){var i=new e.__moduleExports$1;return function(e,t){for(var i in e.layers)t.writeMessage(3,j,e.layers[i]);}(t,i),i.finish()}function j(e,t){var i;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var r={keys:[],values:[],keycache:{},valuecache:{}};for(i=0;i<e.length;i++)r.feature=e.feature(i),t.writeMessage(2,X,r);var n=r.keys;for(i=0;i<n.length;i++)t.writeStringField(3,n[i]);var o=r.values;for(i=0;i<o.length;i++)t.writeMessage(4,K,o[i]);}function X(e,t){var i=e.feature;void 0!==i.id&&t.writeVarintField(1,i.id),t.writeMessage(2,q,e),t.writeVarintField(3,i.type),t.writeMessage(4,Q,i);}function q(e,t){var i=e.feature,r=e.keys,n=e.values,o=e.keycache,a=e.valuecache;for(var s in i.properties){var l=o[s];void 0===l&&(r.push(s),l=r.length-1,o[s]=l),t.writeVarint(l);var u=i.properties[s],h=typeof u;"string"!==h&&"boolean"!==h&&"number"!==h&&(u=JSON.stringify(u));var c=h+":"+u,f=a[c];void 0===f&&(n.push(u),f=n.length-1,a[c]=f),t.writeVarint(f);}}function U(e,t){return(t<<3)+(7&e)}function H(e){return e<<1^e>>31}function Q(e,t){for(var i=e.loadGeometry(),r=e.type,n=0,o=0,a=i.length,s=0;s<a;s++){var l=i[s],u=1;1===r&&(u=l.length),t.writeVarint(U(1,u));for(var h=3===r?l.length-1:l.length,c=0;c<h;c++){1===c&&1!==r&&t.writeVarint(U(2,h-1));var f=l[c].x-n,p=l[c].y-o;t.writeVarint(H(f)),t.writeVarint(H(p)),n+=f,o+=p;}3===r&&t.writeVarint(U(7,0));}}function K(e,t){var i=typeof e;"string"===i?t.writeStringField(1,e):"boolean"===i?t.writeBooleanField(7,e):"number"===i&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}V.fromVectorTileJs=J,V.fromGeojsonVt=W,V.GeoJSONWrapper=Y;var ee=function e(t,i,r,n,o,a){if(o-n<=r)return;var s=Math.floor((n+o)/2);!function e(t,i,r,n,o,a){for(;o>n;){if(o-n>600){var s=o-n+1,l=r-n+1,u=Math.log(s),h=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*h*(s-h)/s)*(l-s/2<0?-1:1),f=Math.max(n,Math.floor(r-l*h/s+c)),p=Math.min(o,Math.floor(r+(s-l)*h/s+c));e(t,i,r,f,p,a);}var d=i[2*r+a],g=n,v=o;for(te(t,i,n,r),i[2*o+a]>d&&te(t,i,n,o);g<v;){for(te(t,i,g,v),g++,v--;i[2*g+a]<d;)g++;for(;i[2*v+a]>d;)v--;}i[2*n+a]===d?te(t,i,n,v):te(t,i,++v,o),v<=r&&(n=v+1),r<=v&&(o=v-1);}}(t,i,s,n,o,a%2);e(t,i,r,n,s-1,a+1);e(t,i,r,s+1,o,a+1);};function te(e,t,i,r){ie(e,i,r),ie(t,2*i,2*r),ie(t,2*i+1,2*r+1);}function ie(e,t,i){var r=e[t];e[t]=e[i],e[i]=r;}var re=function(e,t,i,r,n,o,a){var s,l,u=[0,e.length-1,0],h=[];for(;u.length;){var c=u.pop(),f=u.pop(),p=u.pop();if(f-p<=a)for(var d=p;d<=f;d++)s=t[2*d],l=t[2*d+1],s>=i&&s<=n&&l>=r&&l<=o&&h.push(e[d]);else{var g=Math.floor((p+f)/2);s=t[2*g],l=t[2*g+1],s>=i&&s<=n&&l>=r&&l<=o&&h.push(e[g]);var v=(c+1)%2;(0===c?i<=s:r<=l)&&(u.push(p),u.push(g-1),u.push(v)),(0===c?n>=s:o>=l)&&(u.push(g+1),u.push(f),u.push(v));}}return h};var ne=function(e,t,i,r,n,o){var a=[0,e.length-1,0],s=[],l=n*n;for(;a.length;){var u=a.pop(),h=a.pop(),c=a.pop();if(h-c<=o)for(var f=c;f<=h;f++)oe(t[2*f],t[2*f+1],i,r)<=l&&s.push(e[f]);else{var p=Math.floor((c+h)/2),d=t[2*p],g=t[2*p+1];oe(d,g,i,r)<=l&&s.push(e[p]);var v=(u+1)%2;(0===u?i-n<=d:r-n<=g)&&(a.push(c),a.push(p-1),a.push(v)),(0===u?i+n>=d:r+n>=g)&&(a.push(p+1),a.push(h),a.push(v));}}return s};function oe(e,t,i,r){var n=e-i,o=t-r;return n*n+o*o}var ae=function(e,t,i,r,n){return new se(e,t,i,r,n)};function se(e,t,i,r,n){t=t||le,i=i||ue,n=n||Array,this.nodeSize=r||64,this.points=e,this.ids=new n(e.length),this.coords=new n(2*e.length);for(var o=0;o<e.length;o++)this.ids[o]=o,this.coords[2*o]=t(e[o]),this.coords[2*o+1]=i(e[o]);ee(this.ids,this.coords,this.nodeSize,0,this.ids.length-1,0);}function le(e){return e[0]}function ue(e){return e[1]}se.prototype={range:function(e,t,i,r){return re(this.ids,this.coords,e,t,i,r,this.nodeSize)},within:function(e,t,i){return ne(this.ids,this.coords,e,t,i,this.nodeSize)}};var he=function(e){return new ce(e)};function ce(e){this.options=me(Object.create(this.options),e),this.trees=new Array(this.options.maxZoom+1);}function fe(e,t,i,r,n){return{x:e,y:t,zoom:1/0,id:r,properties:n,parentId:-1,numPoints:i}}function pe(e,t){var i=e.geometry.coordinates;return{x:ve(i[0]),y:ye(i[1]),zoom:1/0,id:t,parentId:-1}}function de(e){return{type:"Feature",properties:ge(e),geometry:{type:"Point",coordinates:[(r=e.x,360*(r-.5)),(t=e.y,i=(180-360*t)*Math.PI/180,360*Math.atan(Math.exp(i))/Math.PI-90)]}};var t,i,r;}function ge(e){var t=e.numPoints,i=t>=1e4?Math.round(t/1e3)+"k":t>=1e3?Math.round(t/100)/10+"k":t;return me(me({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:i})}function ve(e){return e/360+.5}function ye(e){var t=Math.sin(e*Math.PI/180),i=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return i<0?0:i>1?1:i}function me(e,t){for(var i in t)e[i]=t[i];return e}function xe(e){return e.x}function we(e){return e.y}function Se(e,t,i,r,n,o){var a=n-i,s=o-r;if(0!==a||0!==s){var l=((e-i)*a+(t-r)*s)/(a*a+s*s);l>1?(i=n,r=o):l>0&&(i+=a*l,r+=s*l);}return(a=e-i)*a+(s=t-r)*s}function Me(e,t,i,r){var n={id:e||null,type:t,geometry:i,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,i=e.type;if("Point"===i||"MultiPoint"===i||"LineString"===i)be(e,t);else if("Polygon"===i||"MultiLineString"===i)for(var r=0;r<t.length;r++)be(e,t[r]);else if("MultiPolygon"===i)for(r=0;r<t.length;r++)for(var n=0;n<t[r].length;n++)be(e,t[r][n]);}(n),n}function be(e,t){for(var i=0;i<t.length;i+=3)e.minX=Math.min(e.minX,t[i]),e.minY=Math.min(e.minY,t[i+1]),e.maxX=Math.max(e.maxX,t[i]),e.maxY=Math.max(e.maxY,t[i+1]);}function _e(e,t,i){if(t.geometry){var r=t.geometry.coordinates,n=t.geometry.type,o=Math.pow(i.tolerance/((1<<i.maxZoom)*i.extent),2),a=[];if("Point"===n)Ie(r,a);else if("MultiPoint"===n)for(var s=0;s<r.length;s++)Ie(r[s],a);else if("LineString"===n)ze(r,a,o,!1);else if("MultiLineString"===n)if(i.lineMetrics)for(s=0;s<r.length;s++)return a=[],ze(r[s],a,o,!1),void e.push(Me(t.id,"LineString",a,t.properties));else Te(r,a,o,!1);else if("Polygon"===n)Te(r,a,o,!0);else{if("MultiPolygon"!==n){if("GeometryCollection"===n){for(s=0;s<t.geometry.geometries.length;s++)_e(e,{id:t.id,geometry:t.geometry.geometries[s],properties:t.properties},i);return}throw new Error("Input data is not a valid GeoJSON object.")}for(s=0;s<r.length;s++){var l=[];Te(r[s],l,o,!0),a.push(l);}}e.push(Me(t.id,n,a,t.properties));}}function Ie(e,t){t.push(Pe(e[0])),t.push(ke(e[1])),t.push(0);}function ze(e,t,i,r){for(var n,o,a=0,s=0;s<e.length;s++){var l=Pe(e[s][0]),u=ke(e[s][1]);t.push(l),t.push(u),t.push(0),s>0&&(a+=r?(n*u-l*o)/2:Math.sqrt(Math.pow(l-n,2)+Math.pow(u-o,2))),n=l,o=u;}var h=t.length-3;t[2]=1,function e(t,i,r,n){for(var o,a=n,s=t[i],l=t[i+1],u=t[r],h=t[r+1],c=i+3;c<r;c+=3){var f=Se(t[c],t[c+1],s,l,u,h);f>a&&(o=c,a=f);}a>n&&(o-i>3&&e(t,i,o,n),t[o+2]=a,r-o>3&&e(t,o,r,n));}(t,0,h,i),t[h+2]=1,t.size=Math.abs(a),t.start=0,t.end=t.size;}function Te(e,t,i,r){for(var n=0;n<e.length;n++){var o=[];ze(e[n],o,i,r),t.push(o);}}function Pe(e){return e/360+.5}function ke(e){var t=Math.sin(e*Math.PI/180),i=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return i<0?0:i>1?1:i}function Le(e,t,i,r,n,o,a,s){if(r/=t,o>=(i/=t)&&a<=r)return e;if(o>r||a<i)return null;for(var l=[],u=0;u<e.length;u++){var h=e[u],c=h.geometry,f=h.type,p=0===n?h.minX:h.minY,d=0===n?h.maxX:h.maxY;if(p>=i&&d<=r)l.push(h);else if(!(p>r||d<i)){var g=[];if("Point"===f||"MultiPoint"===f)$e(c,g,i,r,n);else if("LineString"===f)De(c,g,i,r,n,!1,s.lineMetrics);else if("MultiLineString"===f)Ce(c,g,i,r,n,!1);else if("Polygon"===f)Ce(c,g,i,r,n,!0);else if("MultiPolygon"===f)for(var v=0;v<c.length;v++){var y=[];Ce(c[v],y,i,r,n,!0),y.length&&g.push(y);}if(g.length){if(s.lineMetrics&&"LineString"===f){for(v=0;v<g.length;v++)l.push(Me(h.id,f,g[v],h.tags));continue}"LineString"!==f&&"MultiLineString"!==f||(1===g.length?(f="LineString",g=g[0]):f="MultiLineString"),"Point"!==f&&"MultiPoint"!==f||(f=3===g.length?"Point":"MultiPoint"),l.push(Me(h.id,f,g,h.tags));}}}return l.length?l:null}function $e(e,t,i,r,n){for(var o=0;o<e.length;o+=3){var a=e[o+n];a>=i&&a<=r&&(t.push(e[o]),t.push(e[o+1]),t.push(e[o+2]));}}function De(e,t,i,r,n,o,a){for(var s,l,u=Oe(e),h=0===n?Ee:Ne,c=e.start,f=0;f<e.length-3;f+=3){var p=e[f],d=e[f+1],g=e[f+2],v=e[f+3],y=e[f+4],m=0===n?p:d,x=0===n?v:y,w=!1;a&&(s=Math.sqrt(Math.pow(p-v,2)+Math.pow(d-y,2))),m<i?x>=i&&(l=h(u,p,d,v,y,i),a&&(u.start=c+s*l)):m>r?x<=r&&(l=h(u,p,d,v,y,r),a&&(u.start=c+s*l)):Ae(u,p,d,g),x<i&&m>=i&&(l=h(u,p,d,v,y,i),w=!0),x>r&&m<=r&&(l=h(u,p,d,v,y,r),w=!0),!o&&w&&(a&&(u.end=c+s*l),t.push(u),u=Oe(e)),a&&(c+=s);}var S=e.length-3;p=e[S],d=e[S+1],g=e[S+2],(m=0===n?p:d)>=i&&m<=r&&Ae(u,p,d,g),S=u.length-3,o&&S>=3&&(u[S]!==u[0]||u[S+1]!==u[1])&&Ae(u,u[0],u[1],u[2]),u.length&&t.push(u);}function Oe(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function Ce(e,t,i,r,n,o){for(var a=0;a<e.length;a++)De(e[a],t,i,r,n,o,!1);}function Ae(e,t,i,r){e.push(t),e.push(i),e.push(r);}function Ee(e,t,i,r,n,o){var a=(o-t)/(r-t);return e.push(o),e.push(i+(n-i)*a),e.push(1),a}function Ne(e,t,i,r,n,o){var a=(o-i)/(n-i);return e.push(t+(r-t)*a),e.push(o),e.push(1),a}function Re(e,t){for(var i=[],r=0;r<e.length;r++){var n,o=e[r],a=o.type;if("Point"===a||"MultiPoint"===a||"LineString"===a)n=Be(o.geometry,t);else if("MultiLineString"===a||"Polygon"===a){n=[];for(var s=0;s<o.geometry.length;s++)n.push(Be(o.geometry[s],t));}else if("MultiPolygon"===a)for(n=[],s=0;s<o.geometry.length;s++){for(var l=[],u=0;u<o.geometry[s].length;u++)l.push(Be(o.geometry[s][u],t));n.push(l);}i.push(Me(o.id,a,n,o.tags));}return i}function Be(e,t){var i=[];i.size=e.size,void 0!==e.start&&(i.start=e.start,i.end=e.end);for(var r=0;r<e.length;r+=3)i.push(e[r]+t,e[r+1],e[r+2]);return i}function Fe(e,t){if(e.transformed)return e;var i,r,n,o=1<<e.z,a=e.x,s=e.y;for(i=0;i<e.features.length;i++){var l=e.features[i],u=l.geometry,h=l.type;if(l.geometry=[],1===h)for(r=0;r<u.length;r+=2)l.geometry.push(Ge(u[r],u[r+1],t,o,a,s));else for(r=0;r<u.length;r++){var c=[];for(n=0;n<u[r].length;n+=2)c.push(Ge(u[r][n],u[r][n+1],t,o,a,s));l.geometry.push(c);}}return e.transformed=!0,e}function Ge(e,t,i,r,n,o){return[Math.round(i*(e*r-n)),Math.round(i*(t*r-o))]}function Ve(e,t,i,r,n){for(var o=t===n.maxZoom?0:n.tolerance/((1<<t)*n.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:i,y:r,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<e.length;s++){a.numFeatures++,Je(a,e[s],o,n);var l=e[s].minX,u=e[s].minY,h=e[s].maxX,c=e[s].maxY;l<a.minX&&(a.minX=l),u<a.minY&&(a.minY=u),h>a.maxX&&(a.maxX=h),c>a.maxY&&(a.maxY=c);}return a}function Je(e,t,i,r){var n=t.geometry,o=t.type,a=[];if("Point"===o||"MultiPoint"===o)for(var s=0;s<n.length;s+=3)a.push(n[s]),a.push(n[s+1]),e.numPoints++,e.numSimplified++;else if("LineString"===o)We(a,n,e,i,!1,!1);else if("MultiLineString"===o||"Polygon"===o)for(s=0;s<n.length;s++)We(a,n[s],e,i,"Polygon"===o,0===s);else if("MultiPolygon"===o)for(var l=0;l<n.length;l++){var u=n[l];for(s=0;s<u.length;s++)We(a,u[s],e,i,!0,0===s);}if(a.length){var h=t.tags||null;if("LineString"===o&&r.lineMetrics){for(var c in h={},t.tags)h[c]=t.tags[c];h.mapbox_clip_start=n.start/n.size,h.mapbox_clip_end=n.end/n.size;}var f={geometry:a,type:"Polygon"===o||"MultiPolygon"===o?3:"LineString"===o||"MultiLineString"===o?2:1,tags:h};null!==t.id&&(f.id=t.id),e.features.push(f);}}function We(e,t,i,r,n,o){var a=r*r;if(r>0&&t.size<(n?a:r))i.numPoints+=t.length/3;else{for(var s=[],l=0;l<t.length;l+=3)(0===r||t[l+2]>a)&&(i.numSimplified++,s.push(t[l]),s.push(t[l+1])),i.numPoints++;n&&function(e,t){for(var i=0,r=0,n=e.length,o=n-2;r<n;o=r,r+=2)i+=(e[r]-e[o])*(e[r+1]+e[o+1]);if(i>0===t)for(r=0,n=e.length;r<n/2;r+=2){var a=e[r],s=e[r+1];e[r]=e[n-2-r],e[r+1]=e[n-1-r],e[n-2-r]=a,e[n-1-r]=s;}}(s,o),e.push(s);}}function Ye(e,t){var i=(t=this.options=function(e,t){for(var i in t)e[i]=t[i];return e}(Object.create(this.options),t)).debug;if(i&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");var r=function(e,t){var i=[];if("FeatureCollection"===e.type)for(var r=0;r<e.features.length;r++)_e(i,e.features[r],t);else"Feature"===e.type?_e(i,e,t):_e(i,{geometry:e},t);return i}(e,t);this.tiles={},this.tileCoords=[],i&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(r=function(e,t){var i=t.buffer/t.extent,r=e,n=Le(e,1,-1-i,i,0,-1,2,t),o=Le(e,1,1-i,2+i,0,-1,2,t);return(n||o)&&(r=Le(e,1,-i,1+i,0,-1,2,t)||[],n&&(r=Re(n,1).concat(r)),o&&(r=r.concat(Re(o,-1)))),r}(r,t)).length&&this.splitTile(r,0,0,0),i&&(r.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function Ze(e,t,i){return 32*((1<<e)*i+t)+e}function je(e,t){var i=e.tileID.canonical;if(!this._geoJSONIndex)return t(null,null);var r=this._geoJSONIndex.getTile(i.z,i.x,i.y);if(!r)return t(null,null);var n=new N(r.features),o=V(n);0===o.byteOffset&&o.byteLength===o.buffer.byteLength||(o=new Uint8Array(o)),t(null,{vectorTile:n,rawData:o.buffer});}ce.prototype={options:{minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,reduce:null,initial:function(){return{}},map:function(e){return e}},load:function(e){var t=this.options.log;t&&console.time("total time");var i="prepare "+e.length+" points";t&&console.time(i),this.points=e;var r=e.map(pe);t&&console.timeEnd(i);for(var n=this.options.maxZoom;n>=this.options.minZoom;n--){var o=+Date.now();this.trees[n+1]=ae(r,xe,we,this.options.nodeSize,Float32Array),r=this._cluster(r,n),t&&console.log("z%d: %d clusters in %dms",n,r.length,+Date.now()-o);}return this.trees[this.options.minZoom]=ae(r,xe,we,this.options.nodeSize,Float32Array),t&&console.timeEnd("total time"),this},getClusters:function(e,t){for(var i=this.trees[this._limitZoom(t)],r=i.range(ve(e[0]),ye(e[3]),ve(e[2]),ye(e[1])),n=[],o=0;o<r.length;o++){var a=i.points[r[o]];n.push(a.numPoints?de(a):this.points[a.id]);}return n},getChildren:function(e,t){for(var i=this.trees[t+1].points[e],r=this.options.radius/(this.options.extent*Math.pow(2,t)),n=this.trees[t+1].within(i.x,i.y,r),o=[],a=0;a<n.length;a++){var s=this.trees[t+1].points[n[a]];s.parentId===e&&o.push(s.numPoints?de(s):this.points[s.id]);}return o},getLeaves:function(e,t,i,r){i=i||10,r=r||0;var n=[];return this._appendLeaves(n,e,t,i,r,0),n},getTile:function(e,t,i){var r=this.trees[this._limitZoom(e)],n=Math.pow(2,e),o=this.options.extent,a=this.options.radius/o,s=(i-a)/n,l=(i+1+a)/n,u={features:[]};return this._addTileFeatures(r.range((t-a)/n,s,(t+1+a)/n,l),r.points,t,i,n,u),0===t&&this._addTileFeatures(r.range(1-a/n,s,1,l),r.points,n,i,n,u),t===n-1&&this._addTileFeatures(r.range(0,s,a/n,l),r.points,-1,i,n,u),u.features.length?u:null},getClusterExpansionZoom:function(e,t){for(;t<this.options.maxZoom;){var i=this.getChildren(e,t);if(t++,1!==i.length)break;e=i[0].properties.cluster_id;}return t},_appendLeaves:function(e,t,i,r,n,o){for(var a=this.getChildren(t,i),s=0;s<a.length;s++){var l=a[s].properties;if(l.cluster?o+l.point_count<=n?o+=l.point_count:o=this._appendLeaves(e,l.cluster_id,i+1,r,n,o):o<n?o++:e.push(a[s]),e.length===r)break}return o},_addTileFeatures:function(e,t,i,r,n,o){for(var a=0;a<e.length;a++){var s=t[e[a]];o.features.push({type:1,geometry:[[Math.round(this.options.extent*(s.x*n-i)),Math.round(this.options.extent*(s.y*n-r))]],tags:s.numPoints?ge(s):this.points[s.id].properties});}},_limitZoom:function(e){return Math.max(this.options.minZoom,Math.min(e,this.options.maxZoom+1))},_cluster:function(e,t){for(var i=[],r=this.options.radius/(this.options.extent*Math.pow(2,t)),n=0;n<e.length;n++){var o=e[n];if(!(o.zoom<=t)){o.zoom=t;var a=this.trees[t+1],s=a.within(o.x,o.y,r),l=o.numPoints||1,u=o.x*l,h=o.y*l,c=null;this.options.reduce&&(c=this.options.initial(),this._accumulate(c,o));for(var f=0;f<s.length;f++){var p=a.points[s[f]];if(t<p.zoom){var d=p.numPoints||1;p.zoom=t,u+=p.x*d,h+=p.y*d,l+=d,p.parentId=n,this.options.reduce&&this._accumulate(c,p);}}1===l?i.push(o):(o.parentId=n,i.push(fe(u/l,h/l,l,n,c)));}}return i},_accumulate:function(e,t){var i=t.numPoints?t.properties:this.options.map(this.points[t.id].properties);this.options.reduce(e,i);}},Ye.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,debug:0},Ye.prototype.splitTile=function(e,t,i,r,n,o,a){for(var s=[e,t,i,r],l=this.options,u=l.debug;s.length;){r=s.pop(),i=s.pop(),t=s.pop(),e=s.pop();var h=1<<t,c=Ze(t,i,r),f=this.tiles[c];if(!f&&(u>1&&console.time("creation"),f=this.tiles[c]=Ve(e,t,i,r,l),this.tileCoords.push({z:t,x:i,y:r}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,i,r,f.numFeatures,f.numPoints,f.numSimplified),console.timeEnd("creation"));var p="z"+t;this.stats[p]=(this.stats[p]||0)+1,this.total++;}if(f.source=e,n){if(t===l.maxZoom||t===n)continue;var d=1<<n-t;if(i!==Math.floor(o/d)||r!==Math.floor(a/d))continue}else if(t===l.indexMaxZoom||f.numPoints<=l.indexMaxPoints)continue;if(f.source=null,0!==e.length){u>1&&console.time("clipping");var g,v,y,m,x,w,S=.5*l.buffer/l.extent,M=.5-S,b=.5+S,_=1+S;g=v=y=m=null,x=Le(e,h,i-S,i+b,0,f.minX,f.maxX,l),w=Le(e,h,i+M,i+_,0,f.minX,f.maxX,l),e=null,x&&(g=Le(x,h,r-S,r+b,1,f.minY,f.maxY,l),v=Le(x,h,r+M,r+_,1,f.minY,f.maxY,l),x=null),w&&(y=Le(w,h,r-S,r+b,1,f.minY,f.maxY,l),m=Le(w,h,r+M,r+_,1,f.minY,f.maxY,l),w=null),u>1&&console.timeEnd("clipping"),s.push(g||[],t+1,2*i,2*r),s.push(v||[],t+1,2*i,2*r+1),s.push(y||[],t+1,2*i+1,2*r),s.push(m||[],t+1,2*i+1,2*r+1);}}},Ye.prototype.getTile=function(e,t,i){var r=this.options,n=r.extent,o=r.debug;if(e<0||e>24)return null;var a=1<<e,s=Ze(e,t=(t%a+a)%a,i);if(this.tiles[s])return Fe(this.tiles[s],n);o>1&&console.log("drilling down to z%d-%d-%d",e,t,i);for(var l,u=e,h=t,c=i;!l&&u>0;)u--,h=Math.floor(h/2),c=Math.floor(c/2),l=this.tiles[Ze(u,h,c)];return l&&l.source?(o>1&&console.log("found parent tile z%d-%d-%d",u,h,c),o>1&&console.time("drilling down"),this.splitTile(l.source,u,h,c,e,t,i),o>1&&console.timeEnd("drilling down"),this.tiles[s]?Fe(this.tiles[s],n):null):null};var Xe=function(t){function i(e,i,r){t.call(this,e,i,je),r&&(this.loadGeoJSON=r);}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.loadData=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=t,this._pendingLoadDataParams=e,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData());},i.prototype._loadData=function(){var e=this;if(this._pendingCallback&&this._pendingLoadDataParams){var t=this._pendingCallback,i=this._pendingLoadDataParams;delete this._pendingCallback,delete this._pendingLoadDataParams,this.loadGeoJSON(i,function(r,n){if(r||!n)return t(r);if("object"!=typeof n)return t(new Error("Input data is not a valid GeoJSON object."));$(n,!0);try{e._geoJSONIndex=i.cluster?he(i.superclusterOptions).load(n.features):function(e,t){return new Ye(e,t)}(n,i.geojsonVtOptions);}catch(r){return t(r)}e.loaded={};var o={};if(i.request&&i.request.collectResourceTiming){var a=M(i.request.url);a&&(o.resourceTiming={},o.resourceTiming[i.source]=JSON.parse(JSON.stringify(a)));}t(null,o);});}},i.prototype.coalesce=function(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData());},i.prototype.reloadTile=function(e,i){var r=this.loaded,n=e.uid;return r&&r[n]?t.prototype.reloadTile.call(this,e,i):this.loadTile(e,i)},i.prototype.loadGeoJSON=function(t,i){if(t.request)e.getJSON(t.request,i);else{if("string"!=typeof t.data)return i(new Error("Input data is not a valid GeoJSON object."));try{return i(null,JSON.parse(t.data))}catch(e){return i(new Error("Input data is not a valid GeoJSON object."))}}},i.prototype.removeSource=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),t();},i}(_),qe=function(t){var i=this;this.self=t,this.actor=new e.default$7(t,this),this.layerIndexes={},this.workerSourceTypes={vector:_,geojson:Xe},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(e,t){if(i.workerSourceTypes[e])throw new Error('Worker source with name "'+e+'" already registered.');i.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=function(t){if(e.plugin.isLoaded())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText;};};return qe.prototype.setLayers=function(e,t,i){this.getLayerIndex(e).replace(t),i();},qe.prototype.updateLayers=function(e,t,i){this.getLayerIndex(e).update(t.layers,t.removedIds),i();},qe.prototype.loadTile=function(e,t,i){this.getWorkerSource(e,t.type,t.source).loadTile(t,i);},qe.prototype.loadDEMTile=function(e,t,i){this.getDEMWorkerSource(e,t.source).loadTile(t,i);},qe.prototype.reloadTile=function(e,t,i){this.getWorkerSource(e,t.type,t.source).reloadTile(t,i);},qe.prototype.abortTile=function(e,t,i){this.getWorkerSource(e,t.type,t.source).abortTile(t,i);},qe.prototype.removeTile=function(e,t,i){this.getWorkerSource(e,t.type,t.source).removeTile(t,i);},qe.prototype.removeDEMTile=function(e,t){this.getDEMWorkerSource(e,t.source).removeTile(t);},qe.prototype.removeSource=function(e,t,i){if(this.workerSources[e]&&this.workerSources[e][t.type]&&this.workerSources[e][t.type][t.source]){var r=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==r.removeSource?r.removeSource(t,i):i();}},qe.prototype.loadWorkerSource=function(e,t,i){try{this.self.importScripts(t.url),i();}catch(e){i(e.toString());}},qe.prototype.loadRTLTextPlugin=function(t,i,r){try{e.plugin.isLoaded()||(this.self.importScripts(i),r(e.plugin.isLoaded()?null:new Error("RTL Text Plugin failed to import scripts from "+i)));}catch(e){r(e.toString());}},qe.prototype.getLayerIndex=function(e){var t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new r),t},qe.prototype.getWorkerSource=function(e,t,i){var r=this;if(this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),!this.workerSources[e][t][i]){var n={send:function(t,i,n){r.actor.send(t,i,n,e);}};this.workerSources[e][t][i]=new this.workerSourceTypes[t](n,this.getLayerIndex(e));}return this.workerSources[e][t][i]},qe.prototype.getDEMWorkerSource=function(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new I),this.demWorkerSources[e][t]},"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope&&new qe(self),qe});

define(["./chunk1.js"],function(t){"use strict";var e=t.createCommonjsModule(function(t){function e(t){return!!("undefined"!=typeof window&&"undefined"!=typeof document&&Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray&&Function.prototype&&Function.prototype.bind&&Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions&&"JSON"in window&&"parse"in JSON&&"stringify"in JSON&&function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,i=new Blob([""],{type:"text/javascript"}),n=URL.createObjectURL(i);try{e=new Worker(n),t=!0;}catch(e){t=!1;}e&&e.terminate();return URL.revokeObjectURL(n),t}()&&"Uint8ClampedArray"in window&&function(t){void 0===i[t]&&(i[t]=function(t){var i=document.createElement("canvas"),n=Object.create(e.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,i.probablySupportsContext?i.probablySupportsContext("webgl",n)||i.probablySupportsContext("experimental-webgl",n):i.supportsContext?i.supportsContext("webgl",n)||i.supportsContext("experimental-webgl",n):i.getContext("webgl",n)||i.getContext("experimental-webgl",n)}(t));return i[t]}(t&&t.failIfMajorPerformanceCaveat))}t.exports?t.exports=e:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=e);var i={};e.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0};}),i=t.default.performance&&t.default.performance.now?t.default.performance.now.bind(t.default.performance):Date.now.bind(Date),n=t.default.requestAnimationFrame||t.default.mozRequestAnimationFrame||t.default.webkitRequestAnimationFrame||t.default.msRequestAnimationFrame,o=t.default.cancelAnimationFrame||t.default.mozCancelAnimationFrame||t.default.webkitCancelAnimationFrame||t.default.msCancelAnimationFrame,r={now:i,frame:function(t){return n(t)},cancelFrame:function(t){return o(t)},getImageData:function(e){var i=t.default.document.createElement("canvas"),n=i.getContext("2d");if(!n)throw new Error("failed to create canvas 2d context");return i.width=e.width,i.height=e.height,n.drawImage(e,0,0,e.width,e.height),n.getImageData(0,0,e.width,e.height)},hardwareConcurrency:t.default.navigator.hardwareConcurrency||4,get devicePixelRatio(){return t.default.devicePixelRatio},supportsWebp:!1};if(t.default.document){var a=t.default.document.createElement("img");a.onload=function(){r.supportsWebp=!0;},a.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";}var s={create:function(e,i,n){var o=t.default.document.createElement(e);return i&&(o.className=i),n&&n.appendChild(o),o},createNS:function(e,i){return t.default.document.createElementNS(e,i)}},l=t.default.document?t.default.document.documentElement.style:null;function c(t){if(!l)return null;for(var e=0;e<t.length;e++)if(t[e]in l)return t[e];return t[0]}var u,h=c(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]);s.disableDrag=function(){l&&h&&(u=l[h],l[h]="none");},s.enableDrag=function(){l&&h&&(l[h]=u);};var p=c(["transform","WebkitTransform"]);s.setTransform=function(t,e){t.style[p]=e;};var d=!1;try{var f=Object.defineProperty({},"passive",{get:function(){d=!0;}});t.default.addEventListener("test",f,f),t.default.removeEventListener("test",f,f);}catch(t){d=!1;}s.addEventListener=function(t,e,i,n){void 0===n&&(n={}),"passive"in n&&d?t.addEventListener(e,i,n):t.addEventListener(e,i,n.capture);},s.removeEventListener=function(t,e,i,n){void 0===n&&(n={}),"passive"in n&&d?t.removeEventListener(e,i,n):t.removeEventListener(e,i,n.capture);};var m=function(e){e.preventDefault(),e.stopPropagation(),t.default.removeEventListener("click",m,!0);};s.suppressClick=function(){t.default.addEventListener("click",m,!0),t.default.setTimeout(function(){t.default.removeEventListener("click",m,!0);},0);},s.mousePos=function(e,i){var n=e.getBoundingClientRect();return i=i.touches?i.touches[0]:i,new t.default$1(i.clientX-n.left-e.clientLeft,i.clientY-n.top-e.clientTop)},s.touchPos=function(e,i){for(var n=e.getBoundingClientRect(),o=[],r="touchend"===i.type?i.changedTouches:i.touches,a=0;a<r.length;a++)o.push(new t.default$1(r[a].clientX-n.left-e.clientLeft,r[a].clientY-n.top-e.clientTop));return o},s.mouseButton=function(e){return void 0!==t.default.InstallTrigger&&2===e.button&&e.ctrlKey&&t.default.navigator.platform.toUpperCase().indexOf("MAC")>=0?0:e.button},s.remove=function(t){t.parentNode&&t.parentNode.removeChild(t);};var _={API_URL:"https://api.mapbox.com",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null},g="See https://www.mapbox.com/api-documentation/#access-tokens";function v(t,e){var i=C(_.API_URL);if(t.protocol=i.protocol,t.authority=i.authority,"/"!==i.path&&(t.path=""+i.path+t.path),!_.REQUIRE_ACCESS_TOKEN)return S(t);if(!(e=e||_.ACCESS_TOKEN))throw new Error("An API access token is required to use Mapbox GL. "+g);if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+g);return t.params.push("access_token="+e),S(t)}function y(t){return 0===t.indexOf("mapbox:")}var x=function(t,e){if(!y(t))return t;var i=C(t);return i.path="/fonts/v1"+i.path,v(i,e)},b=function(t,e){if(!y(t))return t;var i=C(t);return i.path="/v4/"+i.authority+".json",i.params.push("secure"),v(i,e)},w=function(t,e,i,n){var o=C(t);return y(t)?(o.path="/styles/v1"+o.path+"/sprite"+e+i,v(o,n)):(o.path+=""+e+i,S(o))},E=/(\.(png|jpg)\d*)(?=$)/,T=function(t,e,i){if(!e||!y(e))return t;var n=C(t),o=r.devicePixelRatio>=2||512===i?"@2x":"",a=r.supportsWebp?".webp":"$1";return n.path=n.path.replace(E,""+o+a),function(t){for(var e=0;e<t.length;e++)0===t[e].indexOf("access_token=tk.")&&(t[e]="access_token="+(_.ACCESS_TOKEN||""));}(n.params),S(n)};var I=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;function C(t){var e=t.match(I);if(!e)throw new Error("Unable to parse URL object");return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function S(t){var e=t.params.length?"?"+t.params.join("&"):"";return t.protocol+"://"+t.authority+t.path+e}var z=t.default.HTMLImageElement,A=t.default.HTMLCanvasElement,R=t.default.HTMLVideoElement,D=t.default.ImageData,M=function(t,e,i,n){this.context=t,this.format=i,this.texture=t.gl.createTexture(),this.update(e,n);};M.prototype.update=function(t,e){var i=t.width,n=t.height,o=!this.size||this.size[0]!==i||this.size[1]!==n,r=this.context,a=r.gl;this.useMipmap=Boolean(e&&e.useMipmap),a.bindTexture(a.TEXTURE_2D,this.texture),o?(this.size=[i,n],r.pixelStoreUnpack.set(1),this.format!==a.RGBA||e&&!1===e.premultiply||r.pixelStoreUnpackPremultiplyAlpha.set(!0),t instanceof z||t instanceof A||t instanceof R||t instanceof D?a.texImage2D(a.TEXTURE_2D,0,this.format,this.format,a.UNSIGNED_BYTE,t):a.texImage2D(a.TEXTURE_2D,0,this.format,i,n,0,this.format,a.UNSIGNED_BYTE,t.data)):t instanceof z||t instanceof A||t instanceof R||t instanceof D?a.texSubImage2D(a.TEXTURE_2D,0,0,0,a.RGBA,a.UNSIGNED_BYTE,t):a.texSubImage2D(a.TEXTURE_2D,0,0,0,i,n,a.RGBA,a.UNSIGNED_BYTE,t.data),this.useMipmap&&this.isSizePowerOfTwo()&&a.generateMipmap(a.TEXTURE_2D);},M.prototype.bind=function(t,e,i){var n=this.context.gl;n.bindTexture(n.TEXTURE_2D,this.texture),i!==n.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(i=n.LINEAR),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,i||t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e);},M.prototype.isSizePowerOfTwo=function(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0},M.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null;};var L=function(){this.images={},this.loaded=!1,this.requestors=[],this.shelfPack=new t.default$2(64,64,{autoResize:!0}),this.patterns={},this.atlasImage=new t.RGBAImage({width:64,height:64}),this.dirty=!0;};L.prototype.isLoaded=function(){return this.loaded},L.prototype.setLoaded=function(t){if(this.loaded!==t&&(this.loaded=t,t)){for(var e=0,i=this.requestors;e<i.length;e+=1){var n=i[e],o=n.ids,r=n.callback;this._notify(o,r);}this.requestors=[];}},L.prototype.getImage=function(t){return this.images[t]},L.prototype.addImage=function(t,e){this.images[t]=e;},L.prototype.removeImage=function(t){delete this.images[t];var e=this.patterns[t];e&&(this.shelfPack.unref(e.bin),delete this.patterns[t]);},L.prototype.getImages=function(t,e){var i=!0;if(!this.isLoaded())for(var n=0,o=t;n<o.length;n+=1){var r=o[n];this.images[r]||(i=!1);}this.isLoaded()||i?this._notify(t,e):this.requestors.push({ids:t,callback:e});},L.prototype._notify=function(t,e){for(var i={},n=0,o=t;n<o.length;n+=1){var r=o[n],a=this.images[r];a&&(i[r]={data:a.data.clone(),pixelRatio:a.pixelRatio,sdf:a.sdf});}e(null,i);},L.prototype.getPixelSize=function(){return{width:this.shelfPack.w,height:this.shelfPack.h}},L.prototype.getPattern=function(e){var i=this.patterns[e];if(i)return i.position;var n=this.getImage(e);if(!n)return null;var o=n.data.width+2,r=n.data.height+2,a=this.shelfPack.packOne(o,r);if(!a)return null;this.atlasImage.resize(this.getPixelSize());var s=n.data,l=this.atlasImage,c=a.x+1,u=a.y+1,h=s.width,p=s.height;t.RGBAImage.copy(s,l,{x:0,y:0},{x:c,y:u},{width:h,height:p}),t.RGBAImage.copy(s,l,{x:0,y:p-1},{x:c,y:u-1},{width:h,height:1}),t.RGBAImage.copy(s,l,{x:0,y:0},{x:c,y:u+p},{width:h,height:1}),t.RGBAImage.copy(s,l,{x:h-1,y:0},{x:c-1,y:u},{width:1,height:p}),t.RGBAImage.copy(s,l,{x:0,y:0},{x:c+h,y:u},{width:1,height:p}),this.dirty=!0;var d=new t.ImagePosition(a,n);return this.patterns[e]={bin:a,position:d},d},L.prototype.bind=function(t){var e=t.gl;this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new M(t,this.atlasImage,e.RGBA),this.atlasTexture.bind(e.LINEAR,e.CLAMP_TO_EDGE);};var P=B,k=1e20;function B(t,e,i,n,o,r){this.fontSize=t||24,this.buffer=void 0===e?3:e,this.cutoff=n||.25,this.fontFamily=o||"sans-serif",this.fontWeight=r||"normal",this.radius=i||8;var a=this.size=this.fontSize+2*this.buffer;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=a,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textBaseline="middle",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.d=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Int16Array(a),this.middle=Math.round(a/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1));}function O(t,e,i,n,o,r,a){for(var s=0;s<e;s++){for(var l=0;l<i;l++)n[l]=t[l*e+s];for(F(n,o,r,a,i),l=0;l<i;l++)t[l*e+s]=o[l];}for(l=0;l<i;l++){for(s=0;s<e;s++)n[s]=t[l*e+s];for(F(n,o,r,a,e),s=0;s<e;s++)t[l*e+s]=Math.sqrt(o[s]);}}function F(t,e,i,n,o){i[0]=0,n[0]=-k,n[1]=+k;for(var r=1,a=0;r<o;r++){for(var s=(t[r]+r*r-(t[i[a]]+i[a]*i[a]))/(2*r-2*i[a]);s<=n[a];)a--,s=(t[r]+r*r-(t[i[a]]+i[a]*i[a]))/(2*r-2*i[a]);i[++a]=r,n[a]=s,n[a+1]=+k;}for(r=0,a=0;r<o;r++){for(;n[a+1]<r;)a++;e[r]=(r-i[a])*(r-i[a])+t[i[a]];}}B.prototype.draw=function(t){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillText(t,this.buffer,this.middle);for(var e=this.ctx.getImageData(0,0,this.size,this.size),i=new Uint8ClampedArray(this.size*this.size),n=0;n<this.size*this.size;n++){var o=e.data[4*n+3]/255;this.gridOuter[n]=1===o?0:0===o?k:Math.pow(Math.max(0,.5-o),2),this.gridInner[n]=1===o?k:0===o?0:Math.pow(Math.max(0,o-.5),2);}for(O(this.gridOuter,this.size,this.size,this.f,this.d,this.v,this.z),O(this.gridInner,this.size,this.size,this.f,this.d,this.v,this.z),n=0;n<this.size*this.size;n++){var r=this.gridOuter[n]-this.gridInner[n];i[n]=Math.max(0,Math.min(255,Math.round(255-255*(r/this.radius+this.cutoff))));}return i};var N=function(t,e){this.requestTransform=t,this.localIdeographFontFamily=e,this.entries={};};N.prototype.setURL=function(t){this.url=t;},N.prototype.getGlyphs=function(e,i){var n=this,o=[];for(var r in e)for(var a=0,s=e[r];a<s.length;a+=1){var l=s[a];o.push({stack:r,id:l});}t.asyncAll(o,function(t,e){var i=t.stack,o=t.id,r=n.entries[i];r||(r=n.entries[i]={glyphs:{},requests:{}});var a=r.glyphs[o];if(void 0===a)if(a=n._tinySDF(r,i,o))e(null,{stack:i,id:o,glyph:a});else{var s=Math.floor(o/256);if(256*s>65535)e(new Error("glyphs > 65535 not supported"));else{var l=r.requests[s];l||(l=r.requests[s]=[],N.loadGlyphRange(i,s,n.url,n.requestTransform,function(t,e){if(e)for(var i in e)r.glyphs[+i]=e[+i];for(var n=0,o=l;n<o.length;n+=1){(0,o[n])(t,e);}delete r.requests[s];})),l.push(function(t,n){t?e(t):n&&e(null,{stack:i,id:o,glyph:n[o]||null});});}}else e(null,{stack:i,id:o,glyph:a});},function(t,e){if(t)i(t);else if(e){for(var n={},o=0,r=e;o<r.length;o+=1){var a=r[o],s=a.stack,l=a.id,c=a.glyph;(n[s]||(n[s]={}))[l]=c&&{id:c.id,bitmap:c.bitmap.clone(),metrics:c.metrics};}i(null,n);}});},N.prototype._tinySDF=function(e,i,n){var o=this.localIdeographFontFamily;if(o&&(t.default$4["CJK Unified Ideographs"](n)||t.default$4["Hangul Syllables"](n))){var r=e.tinySDF;if(!r){var a="400";/bold/i.test(i)?a="900":/medium/i.test(i)?a="500":/light/i.test(i)&&(a="200"),r=e.tinySDF=new N.TinySDF(24,3,8,.25,o,a);}return{id:n,bitmap:new t.AlphaImage({width:30,height:30},r.draw(String.fromCharCode(n))),metrics:{width:24,height:24,left:0,top:-8,advance:24}}}},N.loadGlyphRange=function(e,i,n,o,r){var a=256*i,s=a+255,l=o(x(n).replace("{fontstack}",e).replace("{range}",a+"-"+s),t.ResourceType.Glyphs);t.getArrayBuffer(l,function(e,i){if(e)r(e);else if(i){for(var n={},o=0,a=t.default$3(i.data);o<a.length;o+=1){var s=a[o];n[s.id]=s;}r(null,n);}});},N.TinySDF=P;var U=function(){this.specification=t.default$5.light.position;};U.prototype.possiblyEvaluate=function(e,i){return t.sphericalToCartesian(e.expression.evaluate(i))},U.prototype.interpolate=function(e,i,n){return{x:t.number(e.x,i.x,n),y:t.number(e.y,i.y,n),z:t.number(e.z,i.z,n)}};var Z=new t.Properties({anchor:new t.DataConstantProperty(t.default$5.light.anchor),position:new U,color:new t.DataConstantProperty(t.default$5.light.color),intensity:new t.DataConstantProperty(t.default$5.light.intensity)}),V=function(e){function i(i){e.call(this),this._transitionable=new t.Transitionable(Z),this.setLight(i),this._transitioning=this._transitionable.untransitioned();}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.getLight=function(){return this._transitionable.serialize()},i.prototype.setLight=function(e){if(!this._validate(t.validateLight,e))for(var i in e){var n=e[i];t.endsWith(i,"-transition")?this._transitionable.setTransition(i.slice(0,-"-transition".length),n):this._transitionable.setValue(i,n);}},i.prototype.updateTransitions=function(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning);},i.prototype.hasTransition=function(){return this._transitioning.hasTransition()},i.prototype.recalculate=function(t){this.properties=this._transitioning.possiblyEvaluate(t);},i.prototype._validate=function(e,i){return t.emitValidationErrors(this,e.call(t.validateStyle,t.extend({value:i,style:{glyphs:!0,sprite:!0},styleSpec:t.default$5})))},i}(t.Evented),j=function(t,e){this.width=t,this.height=e,this.nextRow=0,this.bytes=4,this.data=new Uint8Array(this.width*this.height*this.bytes),this.positions={};};j.prototype.getDash=function(t,e){var i=t.join(",")+String(e);return this.positions[i]||(this.positions[i]=this.addDash(t,e)),this.positions[i]},j.prototype.addDash=function(e,i){var n=i?7:0,o=2*n+1;if(this.nextRow+o>this.height)return t.warnOnce("LineAtlas out of space"),null;for(var r=0,a=0;a<e.length;a++)r+=e[a];for(var s=this.width/r,l=s/2,c=e.length%2==1,u=-n;u<=n;u++)for(var h=this.nextRow+n+u,p=this.width*h,d=c?-e[e.length-1]:0,f=e[0],m=1,_=0;_<this.width;_++){for(;f<_/s;)d=f,f+=e[m],c&&m===e.length-1&&(f+=e[0]),m++;var g=Math.abs(_-d*s),v=Math.abs(_-f*s),y=Math.min(g,v),x=m%2==1,b=void 0;if(i){var w=n?u/n*(l+1):0;if(x){var E=l-Math.abs(w);b=Math.sqrt(y*y+E*E);}else b=l-Math.sqrt(y*y+w*w);}else b=(x?1:-1)*y;this.data[3+4*(p+_)]=Math.max(0,Math.min(255,b+128));}var T={y:(this.nextRow+n+.5)/this.height,height:2*n/this.height,width:r};return this.nextRow+=o,this.dirty=!0,T},j.prototype.bind=function(t){var e=t.gl;this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.RGBA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.width,this.height,0,e.RGBA,e.UNSIGNED_BYTE,this.data));};var $=function e(i,n){this.workerPool=i,this.actors=[],this.currentActor=0,this.id=t.uniqueId();for(var o=this.workerPool.acquire(this.id),r=0;r<o.length;r++){var a=o[r],s=new e.Actor(a,n,this.id);s.name="Worker "+r,this.actors.push(s);}};function G(e,i,n){var o=function(e,i){if(e)return n(e);if(i){var o=t.pick(i,["tiles","minzoom","maxzoom","attribution","mapbox_logo","bounds"]);i.vector_layers&&(o.vectorLayers=i.vector_layers,o.vectorLayerIds=o.vectorLayers.map(function(t){return t.id})),n(null,o);}};e.url?t.getJSON(i(b(e.url),t.ResourceType.Source),o):r.frame(function(){return o(null,e)});}$.prototype.broadcast=function(e,i,n){n=n||function(){},t.asyncAll(this.actors,function(t,n){t.send(e,i,n);},n);},$.prototype.send=function(t,e,i,n){return("number"!=typeof n||isNaN(n))&&(n=this.currentActor=(this.currentActor+1)%this.actors.length),this.actors[n].send(t,e,i),n},$.prototype.remove=function(){this.actors.forEach(function(t){t.remove();}),this.actors=[],this.workerPool.release(this.id);},$.Actor=t.default$7;var W=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid LngLat object: ("+t+", "+e+")");if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};W.prototype.wrap=function(){return new W(t.wrap(this.lng,-180,180),this.lat)},W.prototype.toArray=function(){return[this.lng,this.lat]},W.prototype.toString=function(){return"LngLat("+this.lng+", "+this.lat+")"},W.prototype.toBounds=function(t){var e=360*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return new q(new W(this.lng-i,this.lat-e),new W(this.lng+i,this.lat+e))},W.convert=function(t){if(t instanceof W)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new W(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new W(Number(t.lng),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")};var q=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));};q.prototype.setNorthEast=function(t){return this._ne=t instanceof W?new W(t.lng,t.lat):W.convert(t),this},q.prototype.setSouthWest=function(t){return this._sw=t instanceof W?new W(t.lng,t.lat):W.convert(t),this},q.prototype.extend=function(t){var e,i,n=this._sw,o=this._ne;if(t instanceof W)e=t,i=t;else{if(!(t instanceof q))return Array.isArray(t)?t.every(Array.isArray)?this.extend(q.convert(t)):this.extend(W.convert(t)):this;if(e=t._sw,i=t._ne,!e||!i)return this}return n||o?(n.lng=Math.min(e.lng,n.lng),n.lat=Math.min(e.lat,n.lat),o.lng=Math.max(i.lng,o.lng),o.lat=Math.max(i.lat,o.lat)):(this._sw=new W(e.lng,e.lat),this._ne=new W(i.lng,i.lat)),this},q.prototype.getCenter=function(){return new W((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},q.prototype.getSouthWest=function(){return this._sw},q.prototype.getNorthEast=function(){return this._ne},q.prototype.getNorthWest=function(){return new W(this.getWest(),this.getNorth())},q.prototype.getSouthEast=function(){return new W(this.getEast(),this.getSouth())},q.prototype.getWest=function(){return this._sw.lng},q.prototype.getSouth=function(){return this._sw.lat},q.prototype.getEast=function(){return this._ne.lng},q.prototype.getNorth=function(){return this._ne.lat},q.prototype.toArray=function(){return[this._sw.toArray(),this._ne.toArray()]},q.prototype.toString=function(){return"LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},q.prototype.isEmpty=function(){return!(this._sw&&this._ne)},q.convert=function(t){return!t||t instanceof q?t:new q(t)};var X=function(t,e,i){this.bounds=q.convert(this.validateBounds(t)),this.minzoom=e||0,this.maxzoom=i||24;};X.prototype.validateBounds=function(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]},X.prototype.contains=function(t){var e=Math.floor(this.lngX(this.bounds.getWest(),t.z)),i=Math.floor(this.latY(this.bounds.getNorth(),t.z)),n=Math.ceil(this.lngX(this.bounds.getEast(),t.z)),o=Math.ceil(this.latY(this.bounds.getSouth(),t.z));return t.x>=e&&t.x<n&&t.y>=i&&t.y<o},X.prototype.lngX=function(t,e){return(t+180)*(Math.pow(2,e)/360)},X.prototype.latY=function(e,i){var n=t.clamp(Math.sin(Math.PI/180*e),-.9999,.9999),o=Math.pow(2,i)/(2*Math.PI);return Math.pow(2,i-1)+.5*Math.log((1+n)/(1-n))*-o};var H=function(e){function i(i,n,o,r){if(e.call(this),this.id=i,this.dispatcher=o,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,t.extend(this,t.pick(n,["url","scheme","tileSize"])),this._options=t.extend({type:"vector"},n),this._collectResourceTiming=n.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512");this.setEventedParent(r);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this.fire(new t.Event("dataloading",{dataType:"source"})),G(this._options,this.map._transformRequest,function(i,n){i?e.fire(new t.ErrorEvent(i)):n&&(t.extend(e,n),n.bounds&&(e.tileBounds=new X(n.bounds,e.minzoom,e.maxzoom)),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})));});},i.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.serialize=function(){return t.extend({},this._options)},i.prototype.loadTile=function(e,i){var n=T(e.tileID.canonical.url(this.tiles,this.scheme),this.url),o={request:this.map._transformRequest(n,t.ResourceType.Tile),uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:r.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes};function a(t,n){return e.aborted?i(null):t?i(t):(n&&n.resourceTiming&&(e.resourceTiming=n.resourceTiming),this.map._refreshExpiredTiles&&e.setExpiryData(n),e.loadVectorData(n,this.map.painter),i(null),void(e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)))}o.request.collectResourceTiming=this._collectResourceTiming,void 0===e.workerID||"expired"===e.state?e.workerID=this.dispatcher.send("loadTile",o,a.bind(this)):"loading"===e.state?e.reloadCallback=i:this.dispatcher.send("reloadTile",o,a.bind(this),e.workerID);},i.prototype.abortTile=function(t){this.dispatcher.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0,t.workerID);},i.prototype.unloadTile=function(t){t.unloadVectorData(),this.dispatcher.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0,t.workerID);},i.prototype.hasTransition=function(){return!1},i}(t.Evented),K=function(e){function i(i,n,o,r){e.call(this),this.id=i,this.dispatcher=o,this.setEventedParent(r),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.extend({},n),t.extend(this,t.pick(n,["url","scheme","tileSize"]));}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this.fire(new t.Event("dataloading",{dataType:"source"})),G(this._options,this.map._transformRequest,function(i,n){i?e.fire(new t.ErrorEvent(i)):n&&(t.extend(e,n),n.bounds&&(e.tileBounds=new X(n.bounds,e.minzoom,e.maxzoom)),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})));});},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.serialize=function(){return t.extend({},this._options)},i.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)},i.prototype.loadTile=function(e,i){var n=this,o=T(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize);e.request=t.getImage(this.map._transformRequest(o,t.ResourceType.Tile),function(t,o){if(delete e.request,e.aborted)e.state="unloaded",i(null);else if(t)e.state="errored",i(t);else if(o){n.map._refreshExpiredTiles&&e.setExpiryData(o),delete o.cacheControl,delete o.expires;var r=n.map.painter.context,a=r.gl;e.texture=n.map.painter.getTileTexture(o.width),e.texture?e.texture.update(o,{useMipmap:!0}):(e.texture=new M(r,o,a.RGBA,{useMipmap:!0}),e.texture.bind(a.LINEAR,a.CLAMP_TO_EDGE,a.LINEAR_MIPMAP_NEAREST),r.extTextureFilterAnisotropic&&a.texParameterf(a.TEXTURE_2D,r.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,r.extTextureFilterAnisotropicMax)),e.state="loaded",i(null);}});},i.prototype.abortTile=function(t,e){t.request&&(t.request.abort(),delete t.request),e();},i.prototype.unloadTile=function(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e();},i.prototype.hasTransition=function(){return!1},i}(t.Evented),Y=function(e){function i(i,n,o,r){e.call(this,i,n,o,r),this.type="raster-dem",this.maxzoom=22,this._options=t.extend({},n),this.encoding=n.encoding||"mapbox";}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.serialize=function(){return{type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds,encoding:this.encoding}},i.prototype.loadTile=function(e,i){var n=T(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize);e.request=t.getImage(this.map._transformRequest(n,t.ResourceType.Tile),function(t,n){if(delete e.request,e.aborted)e.state="unloaded",i(null);else if(t)e.state="errored",i(t);else if(n){this.map._refreshExpiredTiles&&e.setExpiryData(n),delete n.cacheControl,delete n.expires;var o=r.getImageData(n),a={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:o,encoding:this.encoding};e.workerID&&"expired"!==e.state||(e.workerID=this.dispatcher.send("loadDEMTile",a,function(t,n){t&&(e.state="errored",i(t));n&&(e.dem=n,e.needsHillshadePrepare=!0,e.state="loaded",i(null));}.bind(this)));}}.bind(this)),e.neighboringTiles=this._getNeighboringTiles(e.tileID);},i.prototype._getNeighboringTiles=function(e){var i=e.canonical,n=Math.pow(2,i.z),o=(i.x-1+n)%n,r=0===i.x?e.wrap-1:e.wrap,a=(i.x+1+n)%n,s=i.x+1===n?e.wrap+1:e.wrap,l={};return l[new t.OverscaledTileID(e.overscaledZ,r,i.z,o,i.y).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,i.z,a,i.y).key]={backfilled:!1},i.y>0&&(l[new t.OverscaledTileID(e.overscaledZ,r,i.z,o,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,i.z,a,i.y-1).key]={backfilled:!1}),i.y+1<n&&(l[new t.OverscaledTileID(e.overscaledZ,r,i.z,o,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,i.z,a,i.y+1).key]={backfilled:!1}),l},i.prototype.unloadTile=function(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",this.dispatcher.send("removeDEMTile",{uid:t.uid,source:this.id},void 0,t.workerID);},i}(K),J=function(e){function i(i,n,o,r){e.call(this),this.id=i,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this.dispatcher=o,this.setEventedParent(r),this._data=n.data,this._options=t.extend({},n),this._collectResourceTiming=n.collectResourceTiming,this._resourceTiming=[],void 0!==n.maxzoom&&(this.maxzoom=n.maxzoom),n.type&&(this.type=n.type);var a=t.default$8/this.tileSize;this.workerOptions=t.extend({source:this.id,cluster:n.cluster||!1,geojsonVtOptions:{buffer:(void 0!==n.buffer?n.buffer:128)*a,tolerance:(void 0!==n.tolerance?n.tolerance:.375)*a,extent:t.default$8,maxZoom:this.maxzoom,lineMetrics:n.lineMetrics||!1},superclusterOptions:{maxZoom:void 0!==n.clusterMaxZoom?Math.min(n.clusterMaxZoom,this.maxzoom-1):this.maxzoom-1,extent:t.default$8,radius:(n.clusterRadius||50)*a,log:!1}},n.workerOptions);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData(function(i){if(i)e.fire(new t.ErrorEvent(i));else{var n={dataType:"source",sourceDataType:"metadata"};e._collectResourceTiming&&e._resourceTiming&&e._resourceTiming.length>0&&(n.resourceTiming=e._resourceTiming,e._resourceTiming=[]),e.fire(new t.Event("data",n));}});},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.setData=function(e){var i=this;return this._data=e,this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData(function(e){if(e)return i.fire(new t.ErrorEvent(e));var n={dataType:"source",sourceDataType:"content"};i._collectResourceTiming&&i._resourceTiming&&i._resourceTiming.length>0&&(n.resourceTiming=i._resourceTiming,i._resourceTiming=[]),i.fire(new t.Event("data",n));}),this},i.prototype._updateWorkerData=function(e){var i,n,o=this,r=t.extend({},this.workerOptions),a=this._data;"string"==typeof a?(r.request=this.map._transformRequest((i=a,(n=t.default.document.createElement("a")).href=i,n.href),t.ResourceType.Source),r.request.collectResourceTiming=this._collectResourceTiming):r.data=JSON.stringify(a),this.workerID=this.dispatcher.send(this.type+"."+r.source+".loadData",r,function(t,i){o._removed||i&&i.abandoned||(o._loaded=!0,i&&i.resourceTiming&&i.resourceTiming[o.id]&&(o._resourceTiming=i.resourceTiming[o.id].slice(0)),o.dispatcher.send(o.type+"."+r.source+".coalesce",null,null,o.workerID),e(t));},this.workerID);},i.prototype.loadTile=function(t,e){var i=this,n=void 0===t.workerID?"loadTile":"reloadTile",o={type:this.type,uid:t.uid,tileID:t.tileID,zoom:t.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:r.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes};t.workerID=this.dispatcher.send(n,o,function(o,r){return t.unloadVectorData(),t.aborted?e(null):o?e(o):(t.loadVectorData(r,i.map.painter,"reloadTile"===n),e(null))},this.workerID);},i.prototype.abortTile=function(t){t.aborted=!0;},i.prototype.unloadTile=function(t){t.unloadVectorData(),this.dispatcher.send("removeTile",{uid:t.uid,type:this.type,source:this.id},null,t.workerID);},i.prototype.onRemove=function(){this._removed=!0,this.dispatcher.send("removeSource",{type:this.type,source:this.id},null,this.workerID);},i.prototype.serialize=function(){return t.extend({},this._options,{type:this.type,data:this._data})},i.prototype.hasTransition=function(){return!1},i}(t.Evented);var Q=t.createLayout([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]),tt=function(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null;};tt.prototype.bind=function(t,e,i,n,o,r,a,s){this.context=t;for(var l=this.boundPaintVertexBuffers.length!==n.length,c=0;!l&&c<n.length;c++)this.boundPaintVertexBuffers[c]!==n[c]&&(l=!0);var u=!this.vao||this.boundProgram!==e||this.boundLayoutVertexBuffer!==i||l||this.boundIndexBuffer!==o||this.boundVertexOffset!==r||this.boundDynamicVertexBuffer!==a||this.boundDynamicVertexBuffer2!==s;!t.extVertexArrayObject||u?this.freshBind(e,i,n,o,r,a,s):(t.bindVertexArrayOES.set(this.vao),a&&a.bind(),o&&o.dynamicDraw&&o.bind(),s&&s.bind());},tt.prototype.freshBind=function(t,e,i,n,o,r,a){var s,l=t.numAttributes,c=this.context,u=c.gl;if(c.extVertexArrayObject)this.vao&&this.destroy(),this.vao=c.extVertexArrayObject.createVertexArrayOES(),c.bindVertexArrayOES.set(this.vao),s=0,this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=i,this.boundIndexBuffer=n,this.boundVertexOffset=o,this.boundDynamicVertexBuffer=r,this.boundDynamicVertexBuffer2=a;else{s=c.currentNumAttributes||0;for(var h=l;h<s;h++)u.disableVertexAttribArray(h);}e.enableAttributes(u,t);for(var p=0,d=i;p<d.length;p+=1){d[p].enableAttributes(u,t);}r&&r.enableAttributes(u,t),a&&a.enableAttributes(u,t),e.bind(),e.setVertexAttribPointers(u,t,o);for(var f=0,m=i;f<m.length;f+=1){var _=m[f];_.bind(),_.setVertexAttribPointers(u,t,o);}r&&(r.bind(),r.setVertexAttribPointers(u,t,o)),n&&n.bind(),a&&(a.bind(),a.setVertexAttribPointers(u,t,o)),c.currentNumAttributes=l;},tt.prototype.destroy=function(){this.vao&&(this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null);};var et=function(e){function i(t,i,n,o){e.call(this),this.id=t,this.dispatcher=n,this.coordinates=i.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this.setEventedParent(o),this.options=i;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this.fire(new t.Event("dataloading",{dataType:"source"})),this.url=this.options.url,t.getImage(this.map._transformRequest(this.url,t.ResourceType.Image),function(i,n){i?e.fire(new t.ErrorEvent(i)):n&&(e.image=r.getImageData(n),e._finishLoading());});},i.prototype._finishLoading=function(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})));},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.setCoordinates=function(e){this.coordinates=e;var i=this.map,n=e.map(function(t){return i.transform.locationCoordinate(W.convert(t)).zoomTo(0)}),o=this.centerCoord=t.getCoordinatesCenter(n);o.column=Math.floor(o.column),o.row=Math.floor(o.row),this.tileID=new t.CanonicalTileID(o.zoom,o.column,o.row),this.minzoom=this.maxzoom=o.zoom;var r=n.map(function(e){var i=e.zoomTo(o.zoom);return new t.default$1(Math.round((i.column-o.column)*t.default$8),Math.round((i.row-o.row)*t.default$8))});return this._boundsArray=new t.RasterBoundsArray,this._boundsArray.emplaceBack(r[0].x,r[0].y,0,0),this._boundsArray.emplaceBack(r[1].x,r[1].y,t.default$8,0),this._boundsArray.emplaceBack(r[3].x,r[3].y,0,t.default$8),this._boundsArray.emplaceBack(r[2].x,r[2].y,t.default$8,t.default$8),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})),this},i.prototype.prepare=function(){if(0!==Object.keys(this.tiles).length&&this.image){var t=this.map.painter.context,e=t.gl;for(var i in this.boundsBuffer||(this.boundsBuffer=t.createVertexBuffer(this._boundsArray,Q.members)),this.boundsVAO||(this.boundsVAO=new tt),this.texture||(this.texture=new M(t,this.image,e.RGBA),this.texture.bind(e.LINEAR,e.CLAMP_TO_EDGE)),this.tiles){var n=this.tiles[i];"loaded"!==n.state&&(n.state="loaded",n.texture=this.texture);}}},i.prototype.loadTile=function(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null));},i.prototype.serialize=function(){return{type:"image",url:this.options.url,coordinates:this.coordinates}},i.prototype.hasTransition=function(){return!1},i}(t.Evented),it=function(e){function i(t,i,n,o){e.call(this,t,i,n,o),this.roundZoom=!0,this.type="video",this.options=i;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this,i=this.options;this.urls=[];for(var n=0,o=i.urls;n<o.length;n+=1){var r=o[n];e.urls.push(e.map._transformRequest(r,t.ResourceType.Source).url);}t.getVideo(this.urls,function(i,n){i?e.fire(new t.ErrorEvent(i)):n&&(e.video=n,e.video.loop=!0,e.video.addEventListener("playing",function(){e.map._rerender();}),e.map&&e.video.play(),e._finishLoading());});},i.prototype.getVideo=function(){return this.video},i.prototype.onAdd=function(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)));},i.prototype.prepare=function(){if(!(0===Object.keys(this.tiles).length||this.video.readyState<2)){var t=this.map.painter.context,e=t.gl;for(var i in this.boundsBuffer||(this.boundsBuffer=t.createVertexBuffer(this._boundsArray,Q.members)),this.boundsVAO||(this.boundsVAO=new tt),this.texture?this.video.paused||(this.texture.bind(e.LINEAR,e.CLAMP_TO_EDGE),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,this.video)):(this.texture=new M(t,this.video,e.RGBA),this.texture.bind(e.LINEAR,e.CLAMP_TO_EDGE)),this.tiles){var n=this.tiles[i];"loaded"!==n.state&&(n.state="loaded",n.texture=this.texture);}}},i.prototype.serialize=function(){return{type:"video",urls:this.urls,coordinates:this.coordinates}},i.prototype.hasTransition=function(){return this.video&&!this.video.paused},i}(et),nt=function(e){function i(i,n,o,r){e.call(this,i,n,o,r),n.coordinates?Array.isArray(n.coordinates)&&4===n.coordinates.length&&!n.coordinates.some(function(t){return!Array.isArray(t)||2!==t.length||t.some(function(t){return"number"!=typeof t})})||this.fire(new t.ErrorEvent(new t.default$9("sources."+i,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.ErrorEvent(new t.default$9("sources."+i,null,'missing required property "coordinates"'))),n.animate&&"boolean"!=typeof n.animate&&this.fire(new t.ErrorEvent(new t.default$9("sources."+i,null,'optional "animate" property must be a boolean value'))),n.canvas?"string"==typeof n.canvas||n.canvas instanceof t.default.HTMLCanvasElement||this.fire(new t.ErrorEvent(new t.default$9("sources."+i,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.ErrorEvent(new t.default$9("sources."+i,null,'missing required property "canvas"'))),this.options=n,this.animate=void 0===n.animate||n.animate;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){this.canvas||(this.canvas=this.options.canvas instanceof t.default.HTMLCanvasElement?this.options.canvas:t.default.document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.ErrorEvent(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map._rerender();},this.pause=function(){this._playing=!1;},this._finishLoading());},i.prototype.getCanvas=function(){return this.canvas},i.prototype.onAdd=function(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play();},i.prototype.onRemove=function(){this.pause();},i.prototype.prepare=function(){var t=!1;if(this.canvas.width!==this.width&&(this.width=this.canvas.width,t=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,t=!0),!this._hasInvalidDimensions()&&0!==Object.keys(this.tiles).length){var e=this.map.painter.context,i=e.gl;for(var n in this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,Q.members)),this.boundsVAO||(this.boundsVAO=new tt),this.texture?t?this.texture.update(this.canvas):this._playing&&(this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE),i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,this.canvas)):(this.texture=new M(e,this.canvas,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE)),this.tiles){var o=this.tiles[n];"loaded"!==o.state&&(o.state="loaded",o.texture=this.texture);}}},i.prototype.serialize=function(){return{type:"canvas",coordinates:this.coordinates}},i.prototype.hasTransition=function(){return this._playing},i.prototype._hasInvalidDimensions=function(){for(var t=0,e=[this.canvas.width,this.canvas.height];t<e.length;t+=1){var i=e[t];if(isNaN(i)||i<=0)return!0}return!1},i}(et),ot={vector:H,raster:K,"raster-dem":Y,geojson:J,video:it,image:et,canvas:nt},rt=function(e,i,n,o){var r=new ot[i.type](e,i,n,o);if(r.id!==e)throw new Error("Expected Source id to be "+e+" instead of "+r.id);return t.bindAll(["load","abort","unload","serialize","prepare"],r),r};function at(t,e,i,n,o){var r=o.maxPitchScaleFactor(),a=t.tilesIn(i,r);a.sort(st);for(var s=[],l=0,c=a;l<c.length;l+=1){var u=c[l];s.push({wrappedTileID:u.tileID.wrapped().key,queryResults:u.tile.queryRenderedFeatures(e,u.queryGeometry,u.scale,n,o,r,t.transform.calculatePosMatrix(u.tileID.toUnwrapped()))});}return function(t){for(var e={},i={},n=0,o=t;n<o.length;n+=1){var r=o[n],a=r.queryResults,s=r.wrappedTileID,l=i[s]=i[s]||{};for(var c in a)for(var u=a[c],h=l[c]=l[c]||{},p=e[c]=e[c]||[],d=0,f=u;d<f.length;d+=1){var m=f[d];h[m.featureIndex]||(h[m.featureIndex]=!0,p.push(m.feature));}}return e}(s)}function st(t,e){var i=t.tileID,n=e.tileID;return i.overscaledZ-n.overscaledZ||i.canonical.y-n.canonical.y||i.wrap-n.wrap||i.canonical.x-n.canonical.x}var lt=function(e,i){this.tileID=e,this.uid=t.uniqueId(),this.uses=0,this.tileSize=i,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.expiredRequestCount=0,this.state="loading";};lt.prototype.registerFadeDuration=function(t){var e=t+this.timeAdded;e<r.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e);},lt.prototype.wasRequested=function(){return"errored"===this.state||"loaded"===this.state||"reloading"===this.state},lt.prototype.loadVectorData=function(e,i,n){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",e){if(e.featureIndex&&(this.latestFeatureIndex=e.featureIndex,e.rawTileData?(this.latestRawTileData=e.rawTileData,this.latestFeatureIndex.rawTileData=e.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=e.collisionBoxArray,this.buckets=function(t,e){var i={};if(!e)return i;for(var n=0,o=t;n<o.length;n+=1){var r=o[n],a=r.layerIds.map(function(t){return e.getLayer(t)}).filter(Boolean);if(0!==a.length){r.layers=a;for(var s=0,l=a;s<l.length;s+=1)i[l[s].id]=r;}}return i}(e.buckets,i.style),n)for(var o in this.buckets){var r=this.buckets[o];r instanceof t.default$14&&(r.justReloaded=!0);}for(var a in this.queryPadding=0,this.buckets){var s=this.buckets[a];this.queryPadding=Math.max(this.queryPadding,i.style.getLayer(s.layerIds[0]).queryRadius(s));}e.iconAtlasImage&&(this.iconAtlasImage=e.iconAtlasImage),e.glyphAtlasImage&&(this.glyphAtlasImage=e.glyphAtlasImage);}else this.collisionBoxArray=new t.CollisionBoxArray;},lt.prototype.unloadVectorData=function(){for(var t in this.buckets)this.buckets[t].destroy();this.buckets={},this.iconAtlasTexture&&this.iconAtlasTexture.destroy(),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";},lt.prototype.unloadDEMData=function(){this.dem=null,this.neighboringTiles=null,this.state="unloaded";},lt.prototype.getBucket=function(t){return this.buckets[t.id]},lt.prototype.upload=function(t){for(var e in this.buckets){var i=this.buckets[e];i.uploaded||(i.upload(t),i.uploaded=!0);}var n=t.gl;this.iconAtlasImage&&(this.iconAtlasTexture=new M(t,this.iconAtlasImage,n.RGBA),this.iconAtlasImage=null),this.glyphAtlasImage&&(this.glyphAtlasTexture=new M(t,this.glyphAtlasImage,n.ALPHA),this.glyphAtlasImage=null);},lt.prototype.queryRenderedFeatures=function(t,e,i,n,o,r,a){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:e,scale:i,tileSize:this.tileSize,posMatrix:a,transform:o,params:n,queryPadding:this.queryPadding*r},t):{}},lt.prototype.querySourceFeatures=function(e,i){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData){var n=this.latestFeatureIndex.loadVTLayers(),o=i?i.sourceLayer:"",r=n._geojsonTileLayer||n[o];if(r)for(var a=t.default$13(i&&i.filter),s={z:this.tileID.overscaledZ,x:this.tileID.canonical.x,y:this.tileID.canonical.y},l=0;l<r.length;l++){var c=r.feature(l);if(a(new t.default$16(this.tileID.overscaledZ),c)){var u=new t.default$12(c,s.z,s.x,s.y);u.tile=s,e.push(u);}}}},lt.prototype.clearMask=function(){this.segments&&(this.segments.destroy(),delete this.segments),this.maskedBoundsBuffer&&(this.maskedBoundsBuffer.destroy(),delete this.maskedBoundsBuffer),this.maskedIndexBuffer&&(this.maskedIndexBuffer.destroy(),delete this.maskedIndexBuffer);},lt.prototype.setMask=function(e,i){if(!t.default$10(this.mask,e)&&(this.mask=e,this.clearMask(),!t.default$10(e,{0:!0}))){var n=new t.RasterBoundsArray,o=new t.TriangleIndexArray;this.segments=new t.default$15,this.segments.prepareSegment(0,n,o);for(var r=Object.keys(e),a=0;a<r.length;a++){var s=e[r[a]],l=t.default$8>>s.z,c=new t.default$1(s.x*l,s.y*l),u=new t.default$1(c.x+l,c.y+l),h=this.segments.prepareSegment(4,n,o);n.emplaceBack(c.x,c.y,c.x,c.y),n.emplaceBack(u.x,c.y,u.x,c.y),n.emplaceBack(c.x,u.y,c.x,u.y),n.emplaceBack(u.x,u.y,u.x,u.y);var p=h.vertexLength;o.emplaceBack(p,p+1,p+2),o.emplaceBack(p+1,p+2,p+3),h.vertexLength+=4,h.primitiveLength+=2;}this.maskedBoundsBuffer=i.createVertexBuffer(n,Q.members),this.maskedIndexBuffer=i.createIndexBuffer(o);}},lt.prototype.hasData=function(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state},lt.prototype.setExpiryData=function(e){var i=this.expirationTime;if(e.cacheControl){var n=t.parseCacheControl(e.cacheControl);n["max-age"]&&(this.expirationTime=Date.now()+1e3*n["max-age"]);}else e.expires&&(this.expirationTime=new Date(e.expires).getTime());if(this.expirationTime){var o=Date.now(),r=!1;if(this.expirationTime>o)r=!1;else if(i)if(this.expirationTime<i)r=!0;else{var a=this.expirationTime-i;a?this.expirationTime=o+Math.max(a,3e4):r=!0;}else r=!0;r?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}},lt.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)};var ct=function(t,e){this.max=t,this.onRemove=e,this.reset();};ct.prototype.reset=function(){for(var t in this.data)for(var e=0,i=this.data[t];e<i.length;e+=1){var n=i[e];n.timeout&&clearTimeout(n.timeout),this.onRemove(n.value);}return this.data={},this.order=[],this},ct.prototype.add=function(t,e,i){var n=this,o=t.wrapped().key;void 0===this.data[o]&&(this.data[o]=[]);var r={value:e,timeout:void 0};if(void 0!==i&&(r.timeout=setTimeout(function(){n.remove(t,r);},i)),this.data[o].push(r),this.order.push(o),this.order.length>this.max){var a=this._getAndRemoveByKey(this.order[0]);a&&this.onRemove(a);}return this},ct.prototype.has=function(t){return t.wrapped().key in this.data},ct.prototype.getAndRemove=function(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null},ct.prototype._getAndRemoveByKey=function(t){var e=this.data[t].shift();return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value},ct.prototype.get=function(t){return this.has(t)?this.data[t.wrapped().key][0].value:null},ct.prototype.remove=function(t,e){if(!this.has(t))return this;var i=t.wrapped().key,n=void 0===e?0:this.data[i].indexOf(e),o=this.data[i][n];return this.data[i].splice(n,1),o.timeout&&clearTimeout(o.timeout),0===this.data[i].length&&delete this.data[i],this.onRemove(o.value),this.order.splice(this.order.indexOf(i),1),this},ct.prototype.setMaxSize=function(t){for(this.max=t;this.order.length>this.max;){var e=this._getAndRemoveByKey(this.order[0]);e&&this.onRemove(e);}return this};var ut=function(t,e,i){this.context=t;var n=t.gl;this.buffer=n.createBuffer(),this.dynamicDraw=Boolean(i),this.unbindVAO(),t.bindElementBuffer.set(this.buffer),n.bufferData(n.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?n.DYNAMIC_DRAW:n.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;};ut.prototype.unbindVAO=function(){this.context.extVertexArrayObject&&this.context.bindVertexArrayOES.set(null);},ut.prototype.bind=function(){this.context.bindElementBuffer.set(this.buffer);},ut.prototype.updateData=function(t){var e=this.context.gl;this.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer);},ut.prototype.destroy=function(){var t=this.context.gl;this.buffer&&(t.deleteBuffer(this.buffer),delete this.buffer);};var ht={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"},pt=function(t,e,i,n){this.length=e.length,this.attributes=i,this.itemSize=e.bytesPerElement,this.dynamicDraw=n,this.context=t;var o=t.gl;this.buffer=o.createBuffer(),t.bindVertexBuffer.set(this.buffer),o.bufferData(o.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?o.DYNAMIC_DRAW:o.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;};pt.prototype.bind=function(){this.context.bindVertexBuffer.set(this.buffer);},pt.prototype.updateData=function(t){var e=this.context.gl;this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer);},pt.prototype.enableAttributes=function(t,e){for(var i=0;i<this.attributes.length;i++){var n=this.attributes[i],o=e.attributes[n.name];void 0!==o&&t.enableVertexAttribArray(o);}},pt.prototype.setVertexAttribPointers=function(t,e,i){for(var n=0;n<this.attributes.length;n++){var o=this.attributes[n],r=e.attributes[o.name];void 0!==r&&t.vertexAttribPointer(r,o.components,t[ht[o.type]],!1,this.itemSize,o.offset+this.itemSize*(i||0));}},pt.prototype.destroy=function(){var t=this.context.gl;this.buffer&&(t.deleteBuffer(this.buffer),delete this.buffer);};var dt=function(e){this.context=e,this.current=t.default$6.transparent;};dt.prototype.get=function(){return this.current},dt.prototype.set=function(t){var e=this.current;t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a||(this.context.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t);};var ft=function(t){this.context=t,this.current=1;};ft.prototype.get=function(){return this.current},ft.prototype.set=function(t){this.current!==t&&(this.context.gl.clearDepth(t),this.current=t);};var mt=function(t){this.context=t,this.current=0;};mt.prototype.get=function(){return this.current},mt.prototype.set=function(t){this.current!==t&&(this.context.gl.clearStencil(t),this.current=t);};var _t=function(t){this.context=t,this.current=[!0,!0,!0,!0];};_t.prototype.get=function(){return this.current},_t.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]||(this.context.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t);};var gt=function(t){this.context=t,this.current=!0;};gt.prototype.get=function(){return this.current},gt.prototype.set=function(t){this.current!==t&&(this.context.gl.depthMask(t),this.current=t);};var vt=function(t){this.context=t,this.current=255;};vt.prototype.get=function(){return this.current},vt.prototype.set=function(t){this.current!==t&&(this.context.gl.stencilMask(t),this.current=t);};var yt=function(t){this.context=t,this.current={func:t.gl.ALWAYS,ref:0,mask:255};};yt.prototype.get=function(){return this.current},yt.prototype.set=function(t){var e=this.current;t.func===e.func&&t.ref===e.ref&&t.mask===e.mask||(this.context.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t);};var xt=function(t){this.context=t;var e=this.context.gl;this.current=[e.KEEP,e.KEEP,e.KEEP];};xt.prototype.get=function(){return this.current},xt.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]||(this.context.gl.stencilOp(t[0],t[1],t[2]),this.current=t);};var bt=function(t){this.context=t,this.current=!1;};bt.prototype.get=function(){return this.current},bt.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t;}};var wt=function(t){this.context=t,this.current=[0,1];};wt.prototype.get=function(){return this.current},wt.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]||(this.context.gl.depthRange(t[0],t[1]),this.current=t);};var Et=function(t){this.context=t,this.current=!1;};Et.prototype.get=function(){return this.current},Et.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t;}};var Tt=function(t){this.context=t,this.current=t.gl.LESS;};Tt.prototype.get=function(){return this.current},Tt.prototype.set=function(t){this.current!==t&&(this.context.gl.depthFunc(t),this.current=t);};var It=function(t){this.context=t,this.current=!1;};It.prototype.get=function(){return this.current},It.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t;}};var Ct=function(t){this.context=t;var e=this.context.gl;this.current=[e.ONE,e.ZERO];};Ct.prototype.get=function(){return this.current},Ct.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]||(this.context.gl.blendFunc(t[0],t[1]),this.current=t);};var St=function(e){this.context=e,this.current=t.default$6.transparent;};St.prototype.get=function(){return this.current},St.prototype.set=function(t){var e=this.current;t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a||(this.context.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t);};var zt=function(t){this.context=t,this.current=null;};zt.prototype.get=function(){return this.current},zt.prototype.set=function(t){this.current!==t&&(this.context.gl.useProgram(t),this.current=t);};var At=function(t){this.context=t,this.current=1;};At.prototype.get=function(){return this.current},At.prototype.set=function(e){var i=this.context.lineWidthRange,n=t.clamp(e,i[0],i[1]);this.current!==n&&(this.context.gl.lineWidth(n),this.current=e);};var Rt=function(t){this.context=t,this.current=t.gl.TEXTURE0;};Rt.prototype.get=function(){return this.current},Rt.prototype.set=function(t){this.current!==t&&(this.context.gl.activeTexture(t),this.current=t);};var Dt=function(t){this.context=t;var e=this.context.gl;this.current=[0,0,e.drawingBufferWidth,e.drawingBufferHeight];};Dt.prototype.get=function(){return this.current},Dt.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]||(this.context.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t);};var Mt=function(t){this.context=t,this.current=null;};Mt.prototype.get=function(){return this.current},Mt.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t;}};var Lt=function(t){this.context=t,this.current=null;};Lt.prototype.get=function(){return this.current},Lt.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t;}};var Pt=function(t){this.context=t,this.current=null;};Pt.prototype.get=function(){return this.current},Pt.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindTexture(e.TEXTURE_2D,t),this.current=t;}};var kt=function(t){this.context=t,this.current=null;};kt.prototype.get=function(){return this.current},kt.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t;}};var Bt=function(t){this.context=t,this.current=null;};Bt.prototype.get=function(){return this.current},Bt.prototype.set=function(t){var e=this.context.gl;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t;};var Ot=function(t){this.context=t,this.current=null;};Ot.prototype.get=function(){return this.current},Ot.prototype.set=function(t){this.current!==t&&this.context.extVertexArrayObject&&(this.context.extVertexArrayObject.bindVertexArrayOES(t),this.current=t);};var Ft=function(t){this.context=t,this.current=4;};Ft.prototype.get=function(){return this.current},Ft.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t;}};var Nt=function(t){this.context=t,this.current=!1;};Nt.prototype.get=function(){return this.current},Nt.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t;}};var Ut=function(t,e){this.context=t,this.current=null,this.parent=e;};Ut.prototype.get=function(){return this.current};var Zt=function(t){function e(e,i){t.call(this,e,i),this.dirty=!1;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(this.dirty||this.current!==t){var e=this.context.gl;this.context.bindFramebuffer.set(this.parent),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1;}},e.prototype.setDirty=function(){this.dirty=!0;},e}(Ut),Vt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;this.context.bindFramebuffer.set(this.parent),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t;}},e}(Ut),jt=function(t,e,i){this.context=t,this.width=e,this.height=i;var n=t.gl,o=this.framebuffer=n.createFramebuffer();this.colorAttachment=new Zt(t,o),this.depthAttachment=new Vt(t,o);};jt.prototype.destroy=function(){var t=this.context.gl,e=this.colorAttachment.get();e&&t.deleteTexture(e);var i=this.depthAttachment.get();i&&t.deleteRenderbuffer(i),t.deleteFramebuffer(this.framebuffer);};var $t=function(t,e,i){this.func=t,this.mask=e,this.range=i;};$t.ReadOnly=!1,$t.ReadWrite=!0,$t.disabled=new $t(519,$t.ReadOnly,[0,1]);var Gt=function(t,e,i,n,o,r){this.test=t,this.ref=e,this.mask=i,this.fail=n,this.depthFail=o,this.pass=r;};Gt.disabled=new Gt({func:519,mask:0},0,0,7680,7680,7680);var Wt=function(t,e,i){this.blendFunction=t,this.blendColor=e,this.mask=i;};Wt.Replace=[1,0],Wt.disabled=new Wt(Wt.Replace,t.default$6.transparent,[!1,!1,!1,!1]),Wt.unblended=new Wt(Wt.Replace,t.default$6.transparent,[!0,!0,!0,!0]),Wt.alphaBlended=new Wt([1,771],t.default$6.transparent,[!0,!0,!0,!0]);var qt=function(t){this.gl=t,this.extVertexArrayObject=this.gl.getExtension("OES_vertex_array_object"),this.lineWidthRange=t.getParameter(t.ALIASED_LINE_WIDTH_RANGE),this.clearColor=new dt(this),this.clearDepth=new ft(this),this.clearStencil=new mt(this),this.colorMask=new _t(this),this.depthMask=new gt(this),this.stencilMask=new vt(this),this.stencilFunc=new yt(this),this.stencilOp=new xt(this),this.stencilTest=new bt(this),this.depthRange=new wt(this),this.depthTest=new Et(this),this.depthFunc=new Tt(this),this.blend=new It(this),this.blendFunc=new Ct(this),this.blendColor=new St(this),this.program=new zt(this),this.lineWidth=new At(this),this.activeTexture=new Rt(this),this.viewport=new Dt(this),this.bindFramebuffer=new Mt(this),this.bindRenderbuffer=new Lt(this),this.bindTexture=new Pt(this),this.bindVertexBuffer=new kt(this),this.bindElementBuffer=new Bt(this),this.bindVertexArrayOES=this.extVertexArrayObject&&new Ot(this),this.pixelStoreUnpack=new Ft(this),this.pixelStoreUnpackPremultiplyAlpha=new Nt(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.extTextureHalfFloat=t.getExtension("OES_texture_half_float"),this.extTextureHalfFloat&&t.getExtension("OES_texture_half_float_linear");};qt.prototype.createIndexBuffer=function(t,e){return new ut(this,t,e)},qt.prototype.createVertexBuffer=function(t,e,i){return new pt(this,t,e,i)},qt.prototype.createRenderbuffer=function(t,e,i){var n=this.gl,o=n.createRenderbuffer();return this.bindRenderbuffer.set(o),n.renderbufferStorage(n.RENDERBUFFER,t,e,i),this.bindRenderbuffer.set(null),o},qt.prototype.createFramebuffer=function(t,e){return new jt(this,t,e)},qt.prototype.clear=function(t){var e=t.color,i=t.depth,n=this.gl,o=0;e&&(o|=n.COLOR_BUFFER_BIT,this.clearColor.set(e),this.colorMask.set([!0,!0,!0,!0])),void 0!==i&&(o|=n.DEPTH_BUFFER_BIT,this.clearDepth.set(i),this.depthMask.set(!0)),n.clear(o);},qt.prototype.setDepthMode=function(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1);},qt.prototype.setStencilMode=function(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1);},qt.prototype.setColorMode=function(e){t.default$10(e.blendFunction,Wt.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(e.blendFunction),this.blendColor.set(e.blendColor)),this.colorMask.set(e.mask);};var Xt=function(e){function i(t,i,n){var o=this;e.call(this),this.id=t,this.dispatcher=n,this.on("data",function(t){"source"===t.dataType&&"metadata"===t.sourceDataType&&(o._sourceLoaded=!0),o._sourceLoaded&&!o._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(o.reload(),o.transform&&o.update(o.transform));}),this.on("error",function(){o._sourceErrored=!0;}),this._source=rt(t,i,n,this),this._tiles={},this._cache=new ct(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._isIdRenderable=this._isIdRenderable.bind(this),this._coveredTiles={};}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.onAdd=function(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t);},i.prototype.onRemove=function(t){this._source&&this._source.onRemove&&this._source.onRemove(t);},i.prototype.loaded=function(){if(this._sourceErrored)return!0;if(!this._sourceLoaded)return!1;for(var t in this._tiles){var e=this._tiles[t];if("loaded"!==e.state&&"errored"!==e.state)return!1}return!0},i.prototype.getSource=function(){return this._source},i.prototype.pause=function(){this._paused=!0;},i.prototype.resume=function(){if(this._paused){var t=this._shouldReloadOnResume;this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform);}},i.prototype._loadTile=function(t,e){return this._source.loadTile(t,e)},i.prototype._unloadTile=function(t){if(this._source.unloadTile)return this._source.unloadTile(t,function(){})},i.prototype._abortTile=function(t){if(this._source.abortTile)return this._source.abortTile(t,function(){})},i.prototype.serialize=function(){return this._source.serialize()},i.prototype.prepare=function(t){for(var e in this._source.prepare&&this._source.prepare(),this._tiles)this._tiles[e].upload(t);},i.prototype.getIds=function(){var e=this;return Object.keys(this._tiles).map(Number).sort(function(i,n){var o=e._tiles[i].tileID,r=e._tiles[n].tileID,a=new t.default$1(o.canonical.x,o.canonical.y).rotate(e.transform.angle),s=new t.default$1(r.canonical.x,r.canonical.y).rotate(e.transform.angle);return o.overscaledZ-r.overscaledZ||s.y-a.y||s.x-a.x})},i.prototype.getRenderableIds=function(){return this.getIds().filter(this._isIdRenderable)},i.prototype.hasRenderableParent=function(t){var e=this.findLoadedParent(t,0,{});return!!e&&this._isIdRenderable(e.tileID.key)},i.prototype._isIdRenderable=function(t){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]},i.prototype.reload=function(){if(this._paused)this._shouldReloadOnResume=!0;else for(var t in this._cache.reset(),this._tiles)this._reloadTile(t,"reloading");},i.prototype._reloadTile=function(t,e){var i=this._tiles[t];i&&("loading"!==i.state&&(i.state=e),this._loadTile(i,this._tileLoaded.bind(this,i,t,e)));},i.prototype._tileLoaded=function(e,i,n,o){if(o)return e.state="errored",void(404!==o.status?this._source.fire(new t.ErrorEvent(o,{tile:e})):this.update(this.transform));e.timeAdded=r.now(),"expired"===n&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(i,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._source.fire(new t.Event("data",{dataType:"source",tile:e,coord:e.tileID})),this.map&&(this.map.painter.tileExtentVAO.vao=null);},i.prototype._backfillDEM=function(t){for(var e=this.getRenderableIds(),i=0;i<e.length;i++){var n=e[i];if(t.neighboringTiles&&t.neighboringTiles[n]){var o=this.getTileByID(n);r(t,o),r(o,t);}}function r(t,e){t.needsHillshadePrepare=!0;var i=e.tileID.canonical.x-t.tileID.canonical.x,n=e.tileID.canonical.y-t.tileID.canonical.y,o=Math.pow(2,t.tileID.canonical.z),r=e.tileID.key;0===i&&0===n||Math.abs(n)>1||(Math.abs(i)>1&&(1===Math.abs(i+o)?i+=o:1===Math.abs(i-o)&&(i-=o)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,i,n),t.neighboringTiles&&t.neighboringTiles[r]&&(t.neighboringTiles[r].backfilled=!0)));}},i.prototype.getTile=function(t){return this.getTileByID(t.key)},i.prototype.getTileByID=function(t){return this._tiles[t]},i.prototype.getZoom=function(t){return t.zoom+t.scaleZoom(t.tileSize/this._source.tileSize)},i.prototype._findLoadedChildren=function(t,e,i){var n=!1;for(var o in this._tiles){var r=this._tiles[o];if(!(i[o]||!r.hasData()||r.tileID.overscaledZ<=t.overscaledZ||r.tileID.overscaledZ>e)){var a=Math.pow(2,r.tileID.canonical.z-t.canonical.z);if(Math.floor(r.tileID.canonical.x/a)===t.canonical.x&&Math.floor(r.tileID.canonical.y/a)===t.canonical.y)for(i[o]=r.tileID,n=!0;r&&r.tileID.overscaledZ-1>t.overscaledZ;){var s=r.tileID.scaledTo(r.tileID.overscaledZ-1);if(!s)break;(r=this._tiles[s.key])&&r.hasData()&&(delete i[o],i[s.key]=s);}}}return n},i.prototype.findLoadedParent=function(t,e,i){for(var n=t.overscaledZ-1;n>=e;n--){var o=t.scaledTo(n);if(!o)return;var r=String(o.key),a=this._tiles[r];if(a&&a.hasData())return i[r]=o,a;if(this._cache.has(o))return i[r]=o,this._cache.get(o)}},i.prototype.updateCacheSize=function(t){var e=(Math.ceil(t.width/this._source.tileSize)+1)*(Math.ceil(t.height/this._source.tileSize)+1),i=Math.floor(5*e),n="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,i):i;this._cache.setMaxSize(n);},i.prototype.handleWrapJump=function(t){var e=(t-(void 0===this._prevLng?t:this._prevLng))/360,i=Math.round(e);if(this._prevLng=t,i){var n={};for(var o in this._tiles){var r=this._tiles[o];r.tileID=r.tileID.unwrapTo(r.tileID.wrap+i),n[r.tileID.key]=r;}for(var a in this._tiles=n,this._timers)clearTimeout(this._timers[a]),delete this._timers[a];for(var s in this._tiles){var l=this._tiles[s];this._setTileReloadTimer(s,l);}}},i.prototype.update=function(e){var n=this;if(this.transform=e,this._sourceLoaded&&!this._paused){var o;this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used?this._source.tileID?o=e.getVisibleUnwrappedCoordinates(this._source.tileID).map(function(e){return new t.OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y)}):(o=e.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(o=o.filter(function(t){return n._source.hasTile(t)}))):o=[];var a,s=(this._source.roundZoom?Math.round:Math.floor)(this.getZoom(e)),l=Math.max(s-i.maxOverzooming,this._source.minzoom),c=Math.max(s+i.maxUnderzooming,this._source.minzoom),u=this._updateRetainedTiles(o,s),h={};if(Kt(this._source.type))for(var p=Object.keys(u),d=0;d<p.length;d++){var f=p[d],m=u[f],_=n._tiles[f];if(_&&(void 0===_.fadeEndTime||_.fadeEndTime>=r.now())){n._findLoadedChildren(m,c,u)&&(u[f]=m);var g=n.findLoadedParent(m,l,h);g&&n._addTile(g.tileID);}}for(a in h)u[a]||(n._coveredTiles[a]=!0);for(a in h)u[a]=h[a];for(var v=t.keysDifference(this._tiles,u),y=0;y<v.length;y++)n._removeTile(v[y]);}},i.prototype._updateRetainedTiles=function(t,e){for(var n={},o={},r=Math.max(e-i.maxOverzooming,this._source.minzoom),a=Math.max(e+i.maxUnderzooming,this._source.minzoom),s=0;s<t.length;s++){var l=t[s],c=this._addTile(l),u=!1;if(c.hasData())n[l.key]=l;else{u=c.wasRequested(),n[l.key]=l;var h=!0;if(e+1>this._source.maxzoom){var p=l.children(this._source.maxzoom)[0],d=this.getTile(p);d&&d.hasData()?n[p.key]=p:h=!1;}else{this._findLoadedChildren(l,a,n);for(var f=l.children(this._source.maxzoom),m=0;m<f.length;m++)if(!n[f[m].key]){h=!1;break}}if(!h)for(var _=l.overscaledZ-1;_>=r;--_){var g=l.scaledTo(_);if(o[g.key])break;if(o[g.key]=!0,!(c=this.getTile(g))&&u&&(c=this._addTile(g)),c&&(n[g.key]=g,u=c.wasRequested(),c.hasData()))break}}}return n},i.prototype._addTile=function(e){var i=this._tiles[e.key];if(i)return i;(i=this._cache.getAndRemove(e))&&(this._setTileReloadTimer(e.key,i),i.tileID=e);var n=Boolean(i);return n||(i=new lt(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(i,this._tileLoaded.bind(this,i,e.key,i.state))),i?(i.uses++,this._tiles[e.key]=i,n||this._source.fire(new t.Event("dataloading",{tile:i,coord:i.tileID,dataType:"source"})),i):null},i.prototype._setTileReloadTimer=function(t,e){var i=this;t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t]);var n=e.getExpiryTimeout();n&&(this._timers[t]=setTimeout(function(){i._reloadTile(t,"expired"),delete i._timers[t];},n));},i.prototype._removeTile=function(t){var e=this._tiles[t];e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))));},i.prototype.clearTiles=function(){for(var t in this._shouldReloadOnResume=!1,this._paused=!1,this._tiles)this._removeTile(t);this._cache.reset();},i.prototype.tilesIn=function(e,i){for(var n=[],o=this.getIds(),r=1/0,a=1/0,s=-1/0,l=-1/0,c=e[0].zoom,u=0;u<e.length;u++){var h=e[u];r=Math.min(r,h.column),a=Math.min(a,h.row),s=Math.max(s,h.column),l=Math.max(l,h.row);}for(var p=0;p<o.length;p++){var d=this._tiles[o[p]],f=d.tileID,m=Math.pow(2,this.transform.zoom-d.tileID.overscaledZ),_=i*d.queryPadding*t.default$8/d.tileSize/m,g=[Ht(f,new t.default$17(r,a,c)),Ht(f,new t.default$17(s,l,c))];if(g[0].x-_<t.default$8&&g[0].y-_<t.default$8&&g[1].x+_>=0&&g[1].y+_>=0){for(var v=[],y=0;y<e.length;y++)v.push(Ht(f,e[y]));n.push({tile:d,tileID:f,queryGeometry:[v],scale:m});}}return n},i.prototype.getVisibleCoordinates=function(){for(var t=this,e=this.getRenderableIds().map(function(e){return t._tiles[e].tileID}),i=0,n=e;i<n.length;i+=1){var o=n[i];o.posMatrix=t.transform.calculatePosMatrix(o.toUnwrapped());}return e},i.prototype.hasTransition=function(){if(this._source.hasTransition())return!0;if(Kt(this._source.type))for(var t in this._tiles){var e=this._tiles[t];if(void 0!==e.fadeEndTime&&e.fadeEndTime>=r.now())return!0}return!1},i}(t.Evented);function Ht(e,i){var n=i.zoomTo(e.canonical.z);return new t.default$1((n.column-(e.canonical.x+e.wrap*Math.pow(2,e.canonical.z)))*t.default$8,(n.row-e.canonical.y)*t.default$8)}function Kt(t){return"raster"===t||"image"===t||"video"===t}function Yt(){return new t.default.Worker(Rn.workerUrl)}Xt.maxOverzooming=10,Xt.maxUnderzooming=3;var Jt,Qt=function(){this.active={};};function te(e,i){var n={};for(var o in e)"ref"!==o&&(n[o]=e[o]);return t.default$18.forEach(function(t){t in i&&(n[t]=i[t]);}),n}function ee(t){t=t.slice();for(var e=Object.create(null),i=0;i<t.length;i++)e[t[i].id]=t[i];for(var n=0;n<t.length;n++)"ref"in t[n]&&(t[n]=te(t[n],e[t[n].ref]));return t}Qt.prototype.acquire=function(t){if(!this.workers){var e=Rn.workerCount;for(this.workers=[];this.workers.length<e;)this.workers.push(new Yt);}return this.active[t]=!0,this.workers.slice()},Qt.prototype.release=function(t){delete this.active[t],0===Object.keys(this.active).length&&(this.workers.forEach(function(t){t.terminate();}),this.workers=null);};var ie={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"};function ne(t,e,i){i.push({command:ie.addSource,args:[t,e[t]]});}function oe(t,e,i){e.push({command:ie.removeSource,args:[t]}),i[t]=!0;}function re(t,e,i,n){oe(t,i,n),ne(t,e,i);}function ae(e,i,n){var o;for(o in e[n])if(e[n].hasOwnProperty(o)&&"data"!==o&&!t.default$10(e[n][o],i[n][o]))return!1;for(o in i[n])if(i[n].hasOwnProperty(o)&&"data"!==o&&!t.default$10(e[n][o],i[n][o]))return!1;return!0}function se(e,i,n,o,r,a){var s;for(s in i=i||{},e=e||{})e.hasOwnProperty(s)&&(t.default$10(e[s],i[s])||n.push({command:a,args:[o,s,i[s],r]}));for(s in i)i.hasOwnProperty(s)&&!e.hasOwnProperty(s)&&(t.default$10(e[s],i[s])||n.push({command:a,args:[o,s,i[s],r]}));}function le(t){return t.id}function ce(t,e){return t[e.id]=e,t}function ue(e,i){if(!e)return[{command:ie.setStyle,args:[i]}];var n=[];try{if(!t.default$10(e.version,i.version))return[{command:ie.setStyle,args:[i]}];t.default$10(e.center,i.center)||n.push({command:ie.setCenter,args:[i.center]}),t.default$10(e.zoom,i.zoom)||n.push({command:ie.setZoom,args:[i.zoom]}),t.default$10(e.bearing,i.bearing)||n.push({command:ie.setBearing,args:[i.bearing]}),t.default$10(e.pitch,i.pitch)||n.push({command:ie.setPitch,args:[i.pitch]}),t.default$10(e.sprite,i.sprite)||n.push({command:ie.setSprite,args:[i.sprite]}),t.default$10(e.glyphs,i.glyphs)||n.push({command:ie.setGlyphs,args:[i.glyphs]}),t.default$10(e.transition,i.transition)||n.push({command:ie.setTransition,args:[i.transition]}),t.default$10(e.light,i.light)||n.push({command:ie.setLight,args:[i.light]});var o={},r=[];!function(e,i,n,o){var r;for(r in i=i||{},e=e||{})e.hasOwnProperty(r)&&(i.hasOwnProperty(r)||oe(r,n,o));for(r in i)i.hasOwnProperty(r)&&(e.hasOwnProperty(r)?t.default$10(e[r],i[r])||("geojson"===e[r].type&&"geojson"===i[r].type&&ae(e,i,r)?n.push({command:ie.setGeoJSONSourceData,args:[r,i[r].data]}):re(r,i,n,o)):ne(r,i,n));}(e.sources,i.sources,r,o);var a=[];e.layers&&e.layers.forEach(function(t){o[t.source]?n.push({command:ie.removeLayer,args:[t.id]}):a.push(t);}),n=n.concat(r),function(e,i,n){i=i||[];var o,r,a,s,l,c,u,h=(e=e||[]).map(le),p=i.map(le),d=e.reduce(ce,{}),f=i.reduce(ce,{}),m=h.slice(),_=Object.create(null);for(o=0,r=0;o<h.length;o++)a=h[o],f.hasOwnProperty(a)?r++:(n.push({command:ie.removeLayer,args:[a]}),m.splice(m.indexOf(a,r),1));for(o=0,r=0;o<p.length;o++)a=p[p.length-1-o],m[m.length-1-o]!==a&&(d.hasOwnProperty(a)?(n.push({command:ie.removeLayer,args:[a]}),m.splice(m.lastIndexOf(a,m.length-r),1)):r++,c=m[m.length-o],n.push({command:ie.addLayer,args:[f[a],c]}),m.splice(m.length-o,0,a),_[a]=!0);for(o=0;o<p.length;o++)if(s=d[a=p[o]],l=f[a],!_[a]&&!t.default$10(s,l))if(t.default$10(s.source,l.source)&&t.default$10(s["source-layer"],l["source-layer"])&&t.default$10(s.type,l.type)){for(u in se(s.layout,l.layout,n,a,null,ie.setLayoutProperty),se(s.paint,l.paint,n,a,null,ie.setPaintProperty),t.default$10(s.filter,l.filter)||n.push({command:ie.setFilter,args:[a,l.filter]}),t.default$10(s.minzoom,l.minzoom)&&t.default$10(s.maxzoom,l.maxzoom)||n.push({command:ie.setLayerZoomRange,args:[a,l.minzoom,l.maxzoom]}),s)s.hasOwnProperty(u)&&"layout"!==u&&"paint"!==u&&"filter"!==u&&"metadata"!==u&&"minzoom"!==u&&"maxzoom"!==u&&(0===u.indexOf("paint.")?se(s[u],l[u],n,a,u.slice(6),ie.setPaintProperty):t.default$10(s[u],l[u])||n.push({command:ie.setLayerProperty,args:[a,u,l[u]]}));for(u in l)l.hasOwnProperty(u)&&!s.hasOwnProperty(u)&&"layout"!==u&&"paint"!==u&&"filter"!==u&&"metadata"!==u&&"minzoom"!==u&&"maxzoom"!==u&&(0===u.indexOf("paint.")?se(s[u],l[u],n,a,u.slice(6),ie.setPaintProperty):t.default$10(s[u],l[u])||n.push({command:ie.setLayerProperty,args:[a,u,l[u]]}));}else n.push({command:ie.removeLayer,args:[a]}),c=m[m.lastIndexOf(a)+1],n.push({command:ie.addLayer,args:[l,c]});}(a,i.layers,n);}catch(t){console.warn("Unable to compute style diff:",t),n=[{command:ie.setStyle,args:[i]}];}return n}var he=function(t,e,i){var n=this.boxCells=[],o=this.circleCells=[];this.xCellCount=Math.ceil(t/i),this.yCellCount=Math.ceil(e/i);for(var r=0;r<this.xCellCount*this.yCellCount;r++)n.push([]),o.push([]);this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0;};he.prototype.keysLength=function(){return this.boxKeys.length+this.circleKeys.length},he.prototype.insert=function(t,e,i,n,o){this._forEachCell(e,i,n,o,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(n),this.bboxes.push(o);},he.prototype.insertCircle=function(t,e,i,n){this._forEachCell(e-n,i-n,e+n,i+n,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(i),this.circles.push(n);},he.prototype._insertBoxCell=function(t,e,i,n,o,r){this.boxCells[o].push(r);},he.prototype._insertCircleCell=function(t,e,i,n,o,r){this.circleCells[o].push(r);},he.prototype._query=function(t,e,i,n,o){if(i<0||t>this.width||n<0||e>this.height)return!o&&[];var r=[];if(t<=0&&e<=0&&this.width<=i&&this.height<=n){if(o)return!0;for(var a=0;a<this.boxKeys.length;a++)r.push({key:this.boxKeys[a],x1:this.bboxes[4*a],y1:this.bboxes[4*a+1],x2:this.bboxes[4*a+2],y2:this.bboxes[4*a+3]});for(var s=0;s<this.circleKeys.length;s++){var l=this.circles[3*s],c=this.circles[3*s+1],u=this.circles[3*s+2];r.push({key:this.circleKeys[s],x1:l-u,y1:c-u,x2:l+u,y2:c+u});}}else{var h={hitTest:o,seenUids:{box:{},circle:{}}};this._forEachCell(t,e,i,n,this._queryCell,r,h);}return o?r.length>0:r},he.prototype._queryCircle=function(t,e,i,n){var o=t-i,r=t+i,a=e-i,s=e+i;if(r<0||o>this.width||s<0||a>this.height)return!n&&[];var l=[],c={hitTest:n,circle:{x:t,y:e,radius:i},seenUids:{box:{},circle:{}}};return this._forEachCell(o,a,r,s,this._queryCellCircle,l,c),n?l.length>0:l},he.prototype.query=function(t,e,i,n){return this._query(t,e,i,n,!1)},he.prototype.hitTest=function(t,e,i,n){return this._query(t,e,i,n,!0)},he.prototype.hitTestCircle=function(t,e,i){return this._queryCircle(t,e,i,!0)},he.prototype._queryCell=function(t,e,i,n,o,r,a){var s=a.seenUids,l=this.boxCells[o];if(null!==l)for(var c=this.bboxes,u=0,h=l;u<h.length;u+=1){var p=h[u];if(!s.box[p]){s.box[p]=!0;var d=4*p;if(t<=c[d+2]&&e<=c[d+3]&&i>=c[d+0]&&n>=c[d+1]){if(a.hitTest)return r.push(!0),!0;r.push({key:this.boxKeys[p],x1:c[d],y1:c[d+1],x2:c[d+2],y2:c[d+3]});}}}var f=this.circleCells[o];if(null!==f)for(var m=this.circles,_=0,g=f;_<g.length;_+=1){var v=g[_];if(!s.circle[v]){s.circle[v]=!0;var y=3*v;if(this._circleAndRectCollide(m[y],m[y+1],m[y+2],t,e,i,n)){if(a.hitTest)return r.push(!0),!0;var x=m[y],b=m[y+1],w=m[y+2];r.push({key:this.circleKeys[v],x1:x-w,y1:b-w,x2:x+w,y2:b+w});}}}},he.prototype._queryCellCircle=function(t,e,i,n,o,r,a){var s=a.circle,l=a.seenUids,c=this.boxCells[o];if(null!==c)for(var u=this.bboxes,h=0,p=c;h<p.length;h+=1){var d=p[h];if(!l.box[d]){l.box[d]=!0;var f=4*d;if(this._circleAndRectCollide(s.x,s.y,s.radius,u[f+0],u[f+1],u[f+2],u[f+3]))return r.push(!0),!0}}var m=this.circleCells[o];if(null!==m)for(var _=this.circles,g=0,v=m;g<v.length;g+=1){var y=v[g];if(!l.circle[y]){l.circle[y]=!0;var x=3*y;if(this._circlesCollide(_[x],_[x+1],_[x+2],s.x,s.y,s.radius))return r.push(!0),!0}}},he.prototype._forEachCell=function(t,e,i,n,o,r,a){for(var s=this._convertToXCellCoord(t),l=this._convertToYCellCoord(e),c=this._convertToXCellCoord(i),u=this._convertToYCellCoord(n),h=s;h<=c;h++)for(var p=l;p<=u;p++){var d=this.xCellCount*p+h;if(o.call(this,t,e,i,n,d,r,a))return}},he.prototype._convertToXCellCoord=function(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))},he.prototype._convertToYCellCoord=function(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))},he.prototype._circlesCollide=function(t,e,i,n,o,r){var a=n-t,s=o-e,l=i+r;return l*l>a*a+s*s},he.prototype._circleAndRectCollide=function(t,e,i,n,o,r,a){var s=(r-n)/2,l=Math.abs(t-(n+s));if(l>s+i)return!1;var c=(a-o)/2,u=Math.abs(e-(o+c));if(u>c+i)return!1;if(l<=s||u<=c)return!0;var h=l-s,p=u-c;return h*h+p*p<=i*i};var pe=t.default$19.layout;function de(e,i,n,o,r){var a=t.mat4.identity(new Float32Array(16));return i?(t.mat4.identity(a),t.mat4.scale(a,a,[1/r,1/r,1]),n||t.mat4.rotateZ(a,a,o.angle)):(t.mat4.scale(a,a,[o.width/2,-o.height/2,1]),t.mat4.translate(a,a,[1,-1,0]),t.mat4.multiply(a,a,e)),a}function fe(e,i,n,o,r){var a=t.mat4.identity(new Float32Array(16));return i?(t.mat4.multiply(a,a,e),t.mat4.scale(a,a,[r,r,1]),n||t.mat4.rotateZ(a,a,-o.angle)):(t.mat4.scale(a,a,[1,-1,1]),t.mat4.translate(a,a,[-1,-1,0]),t.mat4.scale(a,a,[2/o.width,2/o.height,1])),a}function me(e,i){var n=[e.x,e.y,0,1];Ie(n,n,i);var o=n[3];return{point:new t.default$1(n[0]/o,n[1]/o),signedDistanceFromCamera:o}}function _e(t,e){var i=t[0]/t[3],n=t[1]/t[3];return i>=-e[0]&&i<=e[0]&&n>=-e[1]&&n<=e[1]}function ge(e,i,n,o,r,a,s,l){var c=o?e.textSizeData:e.iconSizeData,u=t.evaluateSizeForZoom(c,n.transform.zoom,pe.properties[o?"text-size":"icon-size"]),h=[256/n.width*2+1,256/n.height*2+1],p=o?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray;p.clear();for(var d=e.lineVertexArray,f=o?e.text.placedSymbolArray:e.icon.placedSymbolArray,m=n.transform.width/n.transform.height,_=!1,g=0;g<f.length;g++){var v=f.get(g);if(v.hidden||v.writingMode===t.WritingMode.vertical&&!_)Te(v.numGlyphs,p);else{_=!1;var y=[v.anchorX,v.anchorY,0,1];if(t.vec4.transformMat4(y,y,i),_e(y,h)){var x=.5+y[3]/n.transform.cameraToCenterDistance*.5,b=t.evaluateSizeForFeature(c,u,v),w=s?b*x:b/x,E=new t.default$1(v.anchorX,v.anchorY),T=me(E,r).point,I={},C=xe(v,w,!1,l,i,r,a,e.glyphOffsetArray,d,p,T,E,I,m);_=C.useVertical,(C.notEnoughRoom||_||C.needsFlipping&&xe(v,w,!0,l,i,r,a,e.glyphOffsetArray,d,p,T,E,I,m).notEnoughRoom)&&Te(v.numGlyphs,p);}else Te(v.numGlyphs,p);}}o?e.text.dynamicLayoutVertexBuffer.updateData(p):e.icon.dynamicLayoutVertexBuffer.updateData(p);}function ve(t,e,i,n,o,r,a,s,l,c,u,h){var p=s.glyphStartIndex+s.numGlyphs,d=s.lineStartIndex,f=s.lineStartIndex+s.lineLength,m=e.getoffsetX(s.glyphStartIndex),_=e.getoffsetX(p-1),g=we(t*m,i,n,o,r,a,s.segment,d,f,l,c,u,h);if(!g)return null;var v=we(t*_,i,n,o,r,a,s.segment,d,f,l,c,u,h);return v?{first:g,last:v}:null}function ye(e,i,n,o){if(e===t.WritingMode.horizontal&&Math.abs(n.y-i.y)>Math.abs(n.x-i.x)*o)return{useVertical:!0};return(e===t.WritingMode.vertical?i.y<n.y:i.x>n.x)?{needsFlipping:!0}:null}function xe(e,i,n,o,r,a,s,l,c,u,h,p,d,f){var m,_=i/24,g=e.lineOffsetX*i,v=e.lineOffsetY*i;if(e.numGlyphs>1){var y=e.glyphStartIndex+e.numGlyphs,x=e.lineStartIndex,b=e.lineStartIndex+e.lineLength,w=ve(_,l,g,v,n,h,p,e,c,a,d,!1);if(!w)return{notEnoughRoom:!0};var E=me(w.first.point,s).point,T=me(w.last.point,s).point;if(o&&!n){var I=ye(e.writingMode,E,T,f);if(I)return I}m=[w.first];for(var C=e.glyphStartIndex+1;C<y-1;C++)m.push(we(_*l.getoffsetX(C),g,v,n,h,p,e.segment,x,b,c,a,d,!1));m.push(w.last);}else{if(o&&!n){var S=me(p,r).point,z=e.lineStartIndex+e.segment+1,A=new t.default$1(c.getx(z),c.gety(z)),R=me(A,r),D=R.signedDistanceFromCamera>0?R.point:be(p,A,S,1,r),M=ye(e.writingMode,S,D,f);if(M)return M}var L=we(_*l.getoffsetX(e.glyphStartIndex),g,v,n,h,p,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,c,a,d,!1);if(!L)return{notEnoughRoom:!0};m=[L];}for(var P=0,k=m;P<k.length;P+=1){var B=k[P];t.addDynamicAttributes(u,B.point,B.angle);}return{}}function be(t,e,i,n,o){var r=me(t.add(t.sub(e)._unit()),o).point,a=i.sub(r);return i.add(a._mult(n/a.mag()))}function we(e,i,n,o,r,a,s,l,c,u,h,p,d){var f=o?e-i:e+i,m=f>0?1:-1,_=0;o&&(m*=-1,_=Math.PI),m<0&&(_+=Math.PI);for(var g=m>0?l+s:l+s+1,v=g,y=r,x=r,b=0,w=0,E=Math.abs(f);b+w<=E;){if((g+=m)<l||g>=c)return null;if(x=y,void 0===(y=p[g])){var T=new t.default$1(u.getx(g),u.gety(g)),I=me(T,h);if(I.signedDistanceFromCamera>0)y=p[g]=I.point;else{var C=g-m;y=be(0===b?a:new t.default$1(u.getx(C),u.gety(C)),T,x,E-b+1,h);}}b+=w,w=x.dist(y);}var S=(E-b)/w,z=y.sub(x),A=z.mult(S)._add(x);return A._add(z._unit()._perp()._mult(n*m)),{point:A,angle:_+Math.atan2(y.y-x.y,y.x-x.x),tileDistance:d?{prevTileDistance:g-m===v?0:u.gettileUnitDistanceFromAnchor(g-m),lastSegmentViewportDistance:E-b}:null}}var Ee=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0]);function Te(t,e){for(var i=0;i<t;i++){var n=e.length;e.resize(n+4),e.float32.set(Ee,3*n);}}function Ie(t,e,i){var n=e[0],o=e[1];return t[0]=i[0]*n+i[4]*o+i[12],t[1]=i[1]*n+i[5]*o+i[13],t[3]=i[3]*n+i[7]*o+i[15],t}t.default$20.mat4;var Ce=function(t,e,i){void 0===e&&(e=new he(t.width+200,t.height+200,25)),void 0===i&&(i=new he(t.width+200,t.height+200,25)),this.transform=t,this.grid=e,this.ignoredGrid=i,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+100,this.screenBottomBoundary=t.height+100;};function Se(t,e,i){t[e+4]=i?1:0;}function ze(e,i,n){return i*(t.default$8/(e.tileSize*Math.pow(2,n-e.tileID.overscaledZ)))}Ce.prototype.placeCollisionBox=function(t,e,i,n){var o=this.projectAndGetPerspectiveRatio(n,t.anchorPointX,t.anchorPointY),r=i*o.perspectiveRatio,a=t.x1*r+o.point.x,s=t.y1*r+o.point.y,l=t.x2*r+o.point.x,c=t.y2*r+o.point.y;return!e&&this.grid.hitTest(a,s,l,c)?{box:[],offscreen:!1}:{box:[a,s,l,c],offscreen:this.isOffscreen(a,s,l,c)}},Ce.prototype.approximateTileDistance=function(t,e,i,n,o){var r=o?1:n/this.pitchfactor,a=t.lastSegmentViewportDistance*i;return t.prevTileDistance+a+(r-1)*a*Math.abs(Math.sin(e))},Ce.prototype.placeCollisionCircles=function(e,i,n,o,r,a,s,l,c,u,h,p,d){var f=[],m=this.projectAnchor(u,a.anchorX,a.anchorY),_=c/24,g=a.lineOffsetX*c,v=a.lineOffsetY*c,y=new t.default$1(a.anchorX,a.anchorY),x=ve(_,l,g,v,!1,me(y,h).point,y,a,s,h,{},!0),b=!1,w=!0,E=m.perspectiveRatio*o,T=1/(o*n),I=0,C=0;x&&(I=this.approximateTileDistance(x.first.tileDistance,x.first.angle,T,m.cameraDistance,d),C=this.approximateTileDistance(x.last.tileDistance,x.last.angle,T,m.cameraDistance,d));for(var S=0;S<e.length;S+=5){var z=e[S],A=e[S+1],R=e[S+2],D=e[S+3];if(!x||D<-I||D>C)Se(e,S,!1);else{var M=this.projectPoint(u,z,A),L=R*E;if(f.length>0){var P=M.x-f[f.length-4],k=M.y-f[f.length-3];if(L*L*2>P*P+k*k)if(S+8<e.length){var B=e[S+8];if(B>-I&&B<C){Se(e,S,!1);continue}}}var O=S/5;if(f.push(M.x,M.y,L,O),Se(e,S,!0),w=w&&this.isOffscreen(M.x-L,M.y-L,M.x+L,M.y+L),!i&&this.grid.hitTestCircle(M.x,M.y,L)){if(!p)return{circles:[],offscreen:!1};b=!0;}}}return{circles:b?[]:f,offscreen:w}},Ce.prototype.queryRenderedSymbols=function(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return{};for(var i=[],n=1/0,o=1/0,r=-1/0,a=-1/0,s=0,l=e;s<l.length;s+=1){var c=l[s],u=new t.default$1(c.x+100,c.y+100);n=Math.min(n,u.x),o=Math.min(o,u.y),r=Math.max(r,u.x),a=Math.max(a,u.y),i.push(u);}for(var h={},p={},d=0,f=this.grid.query(n,o,r,a).concat(this.ignoredGrid.query(n,o,r,a));d<f.length;d+=1){var m=f[d],_=m.key;if(void 0===h[_.bucketInstanceId]&&(h[_.bucketInstanceId]={}),!h[_.bucketInstanceId][_.featureIndex]){var g=[new t.default$1(m.x1,m.y1),new t.default$1(m.x2,m.y1),new t.default$1(m.x2,m.y2),new t.default$1(m.x1,m.y2)];t.polygonIntersectsPolygon(i,g)&&(h[_.bucketInstanceId][_.featureIndex]=!0,void 0===p[_.bucketInstanceId]&&(p[_.bucketInstanceId]=[]),p[_.bucketInstanceId].push(_.featureIndex));}}return p},Ce.prototype.insertCollisionBox=function(t,e,i,n){var o={bucketInstanceId:i,featureIndex:n};(e?this.ignoredGrid:this.grid).insert(o,t[0],t[1],t[2],t[3]);},Ce.prototype.insertCollisionCircles=function(t,e,i,n){for(var o=e?this.ignoredGrid:this.grid,r={bucketInstanceId:i,featureIndex:n},a=0;a<t.length;a+=4)o.insertCircle(r,t[a],t[a+1],t[a+2]);},Ce.prototype.projectAnchor=function(t,e,i){var n=[e,i,0,1];return Ie(n,n,t),{perspectiveRatio:.5+this.transform.cameraToCenterDistance/n[3]*.5,cameraDistance:n[3]}},Ce.prototype.projectPoint=function(e,i,n){var o=[i,n,0,1];return Ie(o,o,e),new t.default$1((o[0]/o[3]+1)/2*this.transform.width+100,(-o[1]/o[3]+1)/2*this.transform.height+100)},Ce.prototype.projectAndGetPerspectiveRatio=function(e,i,n){var o=[i,n,0,1];return Ie(o,o,e),{point:new t.default$1((o[0]/o[3]+1)/2*this.transform.width+100,(-o[1]/o[3]+1)/2*this.transform.height+100),perspectiveRatio:.5+this.transform.cameraToCenterDistance/o[3]*.5}},Ce.prototype.isOffscreen=function(t,e,i,n){return i<100||t>=this.screenRightBoundary||n<100||e>this.screenBottomBoundary};var Ae=t.default$19.layout,Re=function(t,e,i,n){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):n&&i?1:0,this.placed=i;};Re.prototype.isHidden=function(){return 0===this.opacity&&!this.placed};var De=function(t,e,i,n,o){this.text=new Re(t?t.text:null,e,i,o),this.icon=new Re(t?t.icon:null,e,n,o);};De.prototype.isHidden=function(){return this.text.isHidden()&&this.icon.isHidden()};var Me=function(t,e,i){this.text=t,this.icon=e,this.skipFade=i;},Le=function(t,e){this.transform=t.clone(),this.collisionIndex=new Ce(this.transform),this.placements={},this.opacities={},this.stale=!1,this.fadeDuration=e,this.retainedQueryData={};};function Pe(t,e,i){t.emplaceBack(e?1:0,i?1:0),t.emplaceBack(e?1:0,i?1:0),t.emplaceBack(e?1:0,i?1:0),t.emplaceBack(e?1:0,i?1:0);}Le.prototype.placeLayerTile=function(e,i,n,o){var r=i.getBucket(e),a=i.latestFeatureIndex;if(r&&a&&e.id===r.layerIds[0]){var s=i.collisionBoxArray,l=r.layers[0].layout,c=Math.pow(2,this.transform.zoom-i.tileID.overscaledZ),u=i.tileSize/t.default$8,h=this.transform.calculatePosMatrix(i.tileID.toUnwrapped()),p=de(h,"map"===l.get("text-pitch-alignment"),"map"===l.get("text-rotation-alignment"),this.transform,ze(i,1,this.transform.zoom)),d=de(h,"map"===l.get("icon-pitch-alignment"),"map"===l.get("icon-rotation-alignment"),this.transform,ze(i,1,this.transform.zoom));this.retainedQueryData[r.bucketInstanceId]=new function(t,e,i,n,o){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=i,this.bucketIndex=n,this.tileID=o;}(r.bucketInstanceId,a,r.sourceLayerIndex,r.index,i.tileID),this.placeLayerBucket(r,h,p,d,c,u,n,o,s);}},Le.prototype.placeLayerBucket=function(e,i,n,o,r,a,s,l,c){for(var u=e.layers[0].layout,h=t.evaluateSizeForZoom(e.textSizeData,this.transform.zoom,Ae.properties["text-size"]),p=!e.hasTextData()||u.get("text-optional"),d=!e.hasIconData()||u.get("icon-optional"),f=0,m=e.symbolInstances;f<m.length;f+=1){var _=m[f];if(!l[_.crossTileID]){var g=void 0!==_.feature.text,v=void 0!==_.feature.icon,y=!0,x=null,b=null,w=null,E=0,T=0;_.collisionArrays||(_.collisionArrays=e.deserializeCollisionBoxes(c,_.textBoxStartIndex,_.textBoxEndIndex,_.iconBoxStartIndex,_.iconBoxEndIndex)),_.collisionArrays.textFeatureIndex&&(E=_.collisionArrays.textFeatureIndex),_.collisionArrays.textBox&&(g=(x=this.collisionIndex.placeCollisionBox(_.collisionArrays.textBox,u.get("text-allow-overlap"),a,i)).box.length>0,y=y&&x.offscreen);var I=_.collisionArrays.textCircles;if(I){var C=e.text.placedSymbolArray.get(_.placedTextSymbolIndices[0]),S=t.evaluateSizeForFeature(e.textSizeData,h,C);b=this.collisionIndex.placeCollisionCircles(I,u.get("text-allow-overlap"),r,a,_.key,C,e.lineVertexArray,e.glyphOffsetArray,S,i,n,s,"map"===u.get("text-pitch-alignment")),g=u.get("text-allow-overlap")||b.circles.length>0,y=y&&b.offscreen;}_.collisionArrays.iconFeatureIndex&&(T=_.collisionArrays.iconFeatureIndex),_.collisionArrays.iconBox&&(v=(w=this.collisionIndex.placeCollisionBox(_.collisionArrays.iconBox,u.get("icon-allow-overlap"),a,i)).box.length>0,y=y&&w.offscreen),p||d?d?p||(v=v&&g):g=v&&g:v=g=v&&g,g&&x&&this.collisionIndex.insertCollisionBox(x.box,u.get("text-ignore-placement"),e.bucketInstanceId,E),v&&w&&this.collisionIndex.insertCollisionBox(w.box,u.get("icon-ignore-placement"),e.bucketInstanceId,T),g&&b&&this.collisionIndex.insertCollisionCircles(b.circles,u.get("text-ignore-placement"),e.bucketInstanceId,E),this.placements[_.crossTileID]=new Me(g,v,y||e.justReloaded),l[_.crossTileID]=!0;}}e.justReloaded=!1;},Le.prototype.commit=function(t,e){this.commitTime=e;var i=!1,n=t&&0!==this.fadeDuration?(this.commitTime-t.commitTime)/this.fadeDuration:1,o=t?t.opacities:{};for(var r in this.placements){var a=this.placements[r],s=o[r];s?(this.opacities[r]=new De(s,n,a.text,a.icon),i=i||a.text!==s.text.placed||a.icon!==s.icon.placed):(this.opacities[r]=new De(null,n,a.text,a.icon,a.skipFade),i=i||a.text||a.icon);}for(var l in o){var c=o[l];if(!this.opacities[l]){var u=new De(c,n,!1,!1);u.isHidden()||(this.opacities[l]=u,i=i||c.text.placed||c.icon.placed);}}i?this.lastPlacementChangeTime=e:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=t?t.lastPlacementChangeTime:e);},Le.prototype.updateLayerOpacities=function(t,e){for(var i={},n=0,o=e;n<o.length;n+=1){var r=o[n],a=r.getBucket(t);a&&r.latestFeatureIndex&&t.id===a.layerIds[0]&&this.updateBucketOpacities(a,i,r.collisionBoxArray);}},Le.prototype.updateBucketOpacities=function(t,e,i){t.hasTextData()&&t.text.opacityVertexArray.clear(),t.hasIconData()&&t.icon.opacityVertexArray.clear(),t.hasCollisionBoxData()&&t.collisionBox.collisionVertexArray.clear(),t.hasCollisionCircleData()&&t.collisionCircle.collisionVertexArray.clear();for(var n=t.layers[0].layout,o=new De(null,0,!1,!1,!0),r=new De(null,0,n.get("text-allow-overlap"),n.get("icon-allow-overlap"),!0),a=0;a<t.symbolInstances.length;a++){var s=t.symbolInstances[a],l=e[s.crossTileID],c=this.opacities[s.crossTileID];l?c=o:c||(c=r,this.opacities[s.crossTileID]=c),e[s.crossTileID]=!0;var u=s.numGlyphVertices>0||s.numVerticalGlyphVertices>0,h=s.numIconVertices>0;if(u){for(var p=Ve(c.text),d=(s.numGlyphVertices+s.numVerticalGlyphVertices)/4,f=0;f<d;f++)t.text.opacityVertexArray.emplaceBack(p);for(var m=0,_=s.placedTextSymbolIndices;m<_.length;m+=1){var g=_[m];t.text.placedSymbolArray.get(g).hidden=c.text.isHidden();}}if(h){for(var v=Ve(c.icon),y=0;y<s.numIconVertices/4;y++)t.icon.opacityVertexArray.emplaceBack(v);t.icon.placedSymbolArray.get(a).hidden=c.icon.isHidden();}s.collisionArrays||(s.collisionArrays=t.deserializeCollisionBoxes(i,s.textBoxStartIndex,s.textBoxEndIndex,s.iconBoxStartIndex,s.iconBoxEndIndex));var x=s.collisionArrays;if(x){x.textBox&&t.hasCollisionBoxData()&&Pe(t.collisionBox.collisionVertexArray,c.text.placed,!1),x.iconBox&&t.hasCollisionBoxData()&&Pe(t.collisionBox.collisionVertexArray,c.icon.placed,!1);var b=x.textCircles;if(b&&t.hasCollisionCircleData())for(var w=0;w<b.length;w+=5){var E=l||0===b[w+4];Pe(t.collisionCircle.collisionVertexArray,c.text.placed,E);}}}t.sortFeatures(this.transform.angle),this.retainedQueryData[t.bucketInstanceId]&&(this.retainedQueryData[t.bucketInstanceId].featureSortOrder=t.featureSortOrder),t.hasTextData()&&t.text.opacityVertexBuffer&&t.text.opacityVertexBuffer.updateData(t.text.opacityVertexArray),t.hasIconData()&&t.icon.opacityVertexBuffer&&t.icon.opacityVertexBuffer.updateData(t.icon.opacityVertexArray),t.hasCollisionBoxData()&&t.collisionBox.collisionVertexBuffer&&t.collisionBox.collisionVertexBuffer.updateData(t.collisionBox.collisionVertexArray),t.hasCollisionCircleData()&&t.collisionCircle.collisionVertexBuffer&&t.collisionCircle.collisionVertexBuffer.updateData(t.collisionCircle.collisionVertexArray);},Le.prototype.symbolFadeChange=function(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration},Le.prototype.hasTransitions=function(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration},Le.prototype.stillRecent=function(t){return"undefined"!==this.commitTime&&this.commitTime+this.fadeDuration>t},Le.prototype.setStale=function(){this.stale=!0;};var ke=Math.pow(2,25),Be=Math.pow(2,24),Oe=Math.pow(2,17),Fe=Math.pow(2,16),Ne=Math.pow(2,9),Ue=Math.pow(2,8),Ze=Math.pow(2,1);function Ve(t){if(0===t.opacity&&!t.placed)return 0;if(1===t.opacity&&t.placed)return 4294967295;var e=t.placed?1:0,i=Math.floor(127*t.opacity);return i*ke+e*Be+i*Oe+e*Fe+i*Ne+e*Ue+i*Ze+e}var je=function(){this._currentTileIndex=0,this._seenCrossTileIDs={};};je.prototype.continuePlacement=function(t,e,i,n,o){for(;this._currentTileIndex<t.length;){var r=t[this._currentTileIndex];if(e.placeLayerTile(n,r,i,this._seenCrossTileIDs),this._currentTileIndex++,o())return!0}};var $e=function(t,e,i,n,o){this.placement=new Le(t,o),this._currentPlacementIndex=e.length-1,this._forceFullPlacement=i,this._showCollisionBoxes=n,this._done=!1;};$e.prototype.isDone=function(){return this._done},$e.prototype.continuePlacement=function(t,e,i){for(var n=this,o=r.now(),a=function(){var t=r.now()-o;return!n._forceFullPlacement&&t>2};this._currentPlacementIndex>=0;){var s=e[t[n._currentPlacementIndex]],l=n.placement.collisionIndex.transform.zoom;if("symbol"===s.type&&(!s.minzoom||s.minzoom<=l)&&(!s.maxzoom||s.maxzoom>l)){if(n._inProgressLayer||(n._inProgressLayer=new je),n._inProgressLayer.continuePlacement(i[s.source],n.placement,n._showCollisionBoxes,s,a))return;delete n._inProgressLayer;}n._currentPlacementIndex--;}this._done=!0;},$e.prototype.commit=function(t,e){return this.placement.commit(t,e),this.placement};var Ge=512/t.default$8/2,We=function(t,e,i){this.tileID=t,this.indexedSymbolInstances={},this.bucketInstanceId=i;for(var n=0,o=e;n<o.length;n+=1){var r=o[n],a=r.key;this.indexedSymbolInstances[a]||(this.indexedSymbolInstances[a]=[]),this.indexedSymbolInstances[a].push({crossTileID:r.crossTileID,coord:this.getScaledCoordinates(r,t)});}};We.prototype.getScaledCoordinates=function(e,i){var n=i.canonical.z-this.tileID.canonical.z,o=Ge/Math.pow(2,n),r=e.anchor;return{x:Math.floor((i.canonical.x*t.default$8+r.x)*o),y:Math.floor((i.canonical.y*t.default$8+r.y)*o)}},We.prototype.findMatches=function(t,e,i){for(var n=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z),o=0,r=t;o<r.length;o+=1){var a=r[o];if(!a.crossTileID){var s=this.indexedSymbolInstances[a.key];if(s)for(var l=this.getScaledCoordinates(a,e),c=0,u=s;c<u.length;c+=1){var h=u[c];if(Math.abs(h.coord.x-l.x)<=n&&Math.abs(h.coord.y-l.y)<=n&&!i[h.crossTileID]){i[h.crossTileID]=!0,a.crossTileID=h.crossTileID;break}}}}};var qe=function(){this.maxCrossTileID=0;};qe.prototype.generate=function(){return++this.maxCrossTileID};var Xe=function(){this.indexes={},this.usedCrossTileIDs={},this.lng=0;};Xe.prototype.handleWrapJump=function(t){var e=Math.round((t-this.lng)/360);if(0!==e)for(var i in this.indexes){var n=this.indexes[i],o={};for(var r in n){var a=n[r];a.tileID=a.tileID.unwrapTo(a.tileID.wrap+e),o[a.tileID.key]=a;}this.indexes[i]=o;}this.lng=t;},Xe.prototype.addBucket=function(t,e,i){if(this.indexes[t.overscaledZ]&&this.indexes[t.overscaledZ][t.key]){if(this.indexes[t.overscaledZ][t.key].bucketInstanceId===e.bucketInstanceId)return!1;this.removeBucketCrossTileIDs(t.overscaledZ,this.indexes[t.overscaledZ][t.key]);}for(var n=0,o=e.symbolInstances;n<o.length;n+=1){o[n].crossTileID=0;}this.usedCrossTileIDs[t.overscaledZ]||(this.usedCrossTileIDs[t.overscaledZ]={});var r=this.usedCrossTileIDs[t.overscaledZ];for(var a in this.indexes){var s=this.indexes[a];if(Number(a)>t.overscaledZ)for(var l in s){var c=s[l];c.tileID.isChildOf(t)&&c.findMatches(e.symbolInstances,t,r);}else{var u=s[t.scaledTo(Number(a)).key];u&&u.findMatches(e.symbolInstances,t,r);}}for(var h=0,p=e.symbolInstances;h<p.length;h+=1){var d=p[h];d.crossTileID||(d.crossTileID=i.generate(),r[d.crossTileID]=!0);}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new We(t,e.symbolInstances,e.bucketInstanceId),!0},Xe.prototype.removeBucketCrossTileIDs=function(t,e){for(var i in e.indexedSymbolInstances)for(var n=0,o=e.indexedSymbolInstances[i];n<o.length;n+=1){var r=o[n];delete this.usedCrossTileIDs[t][r.crossTileID];}},Xe.prototype.removeStaleBuckets=function(t){var e=!1;for(var i in this.indexes){var n=this.indexes[i];for(var o in n)t[n[o].bucketInstanceId]||(this.removeBucketCrossTileIDs(i,n[o]),delete n[o],e=!0);}return e};var He=function(){this.layerIndexes={},this.crossTileIDs=new qe,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={};};He.prototype.addLayer=function(t,e,i){var n=this.layerIndexes[t.id];void 0===n&&(n=this.layerIndexes[t.id]=new Xe);var o=!1,r={};n.handleWrapJump(i);for(var a=0,s=e;a<s.length;a+=1){var l=s[a],c=l.getBucket(t);c&&t.id===c.layerIds[0]&&(c.bucketInstanceId||(c.bucketInstanceId=++this.maxBucketInstanceId),n.addBucket(l.tileID,c,this.crossTileIDs)&&(o=!0),r[c.bucketInstanceId]=!0);}return n.removeStaleBuckets(r)&&(o=!0),o},He.prototype.pruneUnusedLayers=function(t){var e={};for(var i in t.forEach(function(t){e[t]=!0;}),this.layerIndexes)e[i]||delete this.layerIndexes[i];};var Ke=function(e,i){return t.emitValidationErrors(e,i&&i.filter(function(t){return"source.canvas"!==t.identifier}))},Ye=t.pick(ie,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData"]),Je=t.pick(ie,["setCenter","setZoom","setBearing","setPitch"]),Qe=function(e){function i(n,o){var r=this;void 0===o&&(o={}),e.call(this),this.map=n,this.dispatcher=new $((Jt||(Jt=new Qt),Jt),this),this.imageManager=new L,this.glyphManager=new N(n._transformRequest,o.localIdeographFontFamily),this.lineAtlas=new j(256,512),this.crossTileSymbolIndex=new He,this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.default$23,this._loaded=!1,this._resetUpdates();var a=this;this._rtlTextPluginCallback=i.registerForPluginAvailability(function(t){for(var e in a.dispatcher.broadcast("loadRTLTextPlugin",t.pluginURL,t.completionCallback),a.sourceCaches)a.sourceCaches[e].reload();}),this.on("data",function(t){if("source"===t.dataType&&"metadata"===t.sourceDataType){var e=r.sourceCaches[t.sourceId];if(e){var i=e.getSource();if(i&&i.vectorLayerIds)for(var n in r._layers){var o=r._layers[n];o.source===i.id&&r._validateLayer(o);}}}});}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.loadURL=function(e,i){var n=this;void 0===i&&(i={}),this.fire(new t.Event("dataloading",{dataType:"style"}));var o="boolean"==typeof i.validate?i.validate:!y(e);e=function(t,e){if(!y(t))return t;var i=C(t);return i.path="/styles/v1"+i.path,v(i,e)}(e,i.accessToken);var r=this.map._transformRequest(e,t.ResourceType.Style);t.getJSON(r,function(e,i){e?n.fire(new t.ErrorEvent(e)):i&&n._load(i,o);});},i.prototype.loadJSON=function(e,i){var n=this;void 0===i&&(i={}),this.fire(new t.Event("dataloading",{dataType:"style"})),r.frame(function(){n._load(e,!1!==i.validate);});},i.prototype._load=function(e,i){var n=this;if(!i||!Ke(this,t.validateStyle(e))){for(var o in this._loaded=!0,this.stylesheet=e,e.sources)n.addSource(o,e.sources[o],{validate:!1});e.sprite?function(e,i,n){var o,a,s,l=r.devicePixelRatio>1?"@2x":"";function c(){if(s)n(s);else if(o&&a){var e=r.getImageData(a),i={};for(var l in o){var c=o[l],u=c.width,h=c.height,p=c.x,d=c.y,f=c.sdf,m=c.pixelRatio,_=new t.RGBAImage({width:u,height:h});t.RGBAImage.copy(e,_,{x:p,y:d},{x:0,y:0},{width:u,height:h}),i[l]={data:_,pixelRatio:m,sdf:f};}n(null,i);}}t.getJSON(i(w(e,l,".json"),t.ResourceType.SpriteJSON),function(t,e){s||(s=t,o=e,c());}),t.getImage(i(w(e,l,".png"),t.ResourceType.SpriteImage),function(t,e){s||(s=t,a=e,c());});}(e.sprite,this.map._transformRequest,function(e,i){if(e)n.fire(new t.ErrorEvent(e));else if(i)for(var o in i)n.imageManager.addImage(o,i[o]);n.imageManager.setLoaded(!0),n.fire(new t.Event("data",{dataType:"style"}));}):this.imageManager.setLoaded(!0),this.glyphManager.setURL(e.glyphs);var a=ee(this.stylesheet.layers);this._order=a.map(function(t){return t.id}),this._layers={};for(var s=0,l=a;s<l.length;s+=1){var c=l[s];(c=t.default$22(c)).setEventedParent(n,{layer:{id:c.id}}),n._layers[c.id]=c;}this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new V(this.stylesheet.light),this.fire(new t.Event("data",{dataType:"style"})),this.fire(new t.Event("style.load"));}},i.prototype._validateLayer=function(e){var i=this.sourceCaches[e.source];if(i){var n=e.sourceLayer;if(n){var o=i.getSource();("geojson"===o.type||o.vectorLayerIds&&-1===o.vectorLayerIds.indexOf(n))&&this.fire(new t.ErrorEvent(new Error('Source layer "'+n+'" does not exist on source "'+o.id+'" as specified by style layer "'+e.id+'"')));}}},i.prototype.loaded=function(){if(!this._loaded)return!1;if(Object.keys(this._updatedSources).length)return!1;for(var t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return!1;return!!this.imageManager.isLoaded()},i.prototype._serializeLayers=function(t){var e=this;return t.map(function(t){return e._layers[t].serialize()})},i.prototype.hasTransitions=function(){if(this.light&&this.light.hasTransition())return!0;for(var t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return!0;for(var e in this._layers)if(this._layers[e].hasTransition())return!0;return!1},i.prototype._checkLoaded=function(){if(!this._loaded)throw new Error("Style is not done loading")},i.prototype.update=function(e){if(this._loaded){if(this._changed){var i=Object.keys(this._updatedLayers),n=Object.keys(this._removedLayers);for(var o in(i.length||n.length)&&this._updateWorkerLayers(i,n),this._updatedSources){var r=this._updatedSources[o];"reload"===r?this._reloadSource(o):"clear"===r&&this._clearSource(o);}for(var a in this._updatedPaintProps)this._layers[a].updateTransitions(e);this.light.updateTransitions(e),this._resetUpdates(),this.fire(new t.Event("data",{dataType:"style"}));}for(var s in this.sourceCaches)this.sourceCaches[s].used=!1;for(var l=0,c=this._order;l<c.length;l+=1){var u=c[l],h=this._layers[u];h.recalculate(e),!h.isHidden(e.zoom)&&h.source&&(this.sourceCaches[h.source].used=!0);}this.light.recalculate(e),this.z=e.zoom;}},i.prototype._updateWorkerLayers=function(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(t),removedIds:e});},i.prototype._resetUpdates=function(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={};},i.prototype.setState=function(e){var i=this;if(this._checkLoaded(),Ke(this,t.validateStyle(e)))return!1;(e=t.clone(e)).layers=ee(e.layers);var n=ue(this.serialize(),e).filter(function(t){return!(t.command in Je)});if(0===n.length)return!1;var o=n.filter(function(t){return!(t.command in Ye)});if(o.length>0)throw new Error("Unimplemented: "+o.map(function(t){return t.command}).join(", ")+".");return n.forEach(function(t){"setTransition"!==t.command&&i[t.command].apply(i,t.args);}),this.stylesheet=e,!0},i.prototype.addImage=function(e,i){if(this.getImage(e))return this.fire(new t.ErrorEvent(new Error("An image with this name already exists.")));this.imageManager.addImage(e,i),this.fire(new t.Event("data",{dataType:"style"}));},i.prototype.getImage=function(t){return this.imageManager.getImage(t)},i.prototype.removeImage=function(e){if(!this.getImage(e))return this.fire(new t.ErrorEvent(new Error("No image with this name exists.")));this.imageManager.removeImage(e),this.fire(new t.Event("data",{dataType:"style"}));},i.prototype.addSource=function(e,i,n){var o=this;if(this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error("There is already a source with this ID");if(!i.type)throw new Error("The type property must be defined, but the only the following properties were given: "+Object.keys(i).join(", ")+".");if(!(["vector","raster","geojson","video","image"].indexOf(i.type)>=0)||!this._validate(t.validateStyle.source,"sources."+e,i,null,n)){this.map&&this.map._collectResourceTiming&&(i.collectResourceTiming=!0);var r=this.sourceCaches[e]=new Xt(e,i,this.dispatcher);r.style=this,r.setEventedParent(this,function(){return{isSourceLoaded:o.loaded(),source:r.serialize(),sourceId:e}}),r.onAdd(this.map),this._changed=!0;}},i.prototype.removeSource=function(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID");for(var i in this._layers)if(this._layers[i].source===e)return this.fire(new t.ErrorEvent(new Error('Source "'+e+'" cannot be removed while layer "'+i+'" is using it.')));var n=this.sourceCaches[e];delete this.sourceCaches[e],delete this._updatedSources[e],n.fire(new t.Event("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),n.setEventedParent(null),n.clearTiles(),n.onRemove&&n.onRemove(this.map),this._changed=!0;},i.prototype.setGeoJSONSourceData=function(t,e){this._checkLoaded(),this.sourceCaches[t].getSource().setData(e),this._changed=!0;},i.prototype.getSource=function(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()},i.prototype.addLayer=function(e,i,n){this._checkLoaded();var o=e.id;if(this.getLayer(o))this.fire(new t.ErrorEvent(new Error('Layer with id "'+o+'" already exists on this map')));else if("object"==typeof e.source&&(this.addSource(o,e.source),e=t.clone(e),e=t.extend(e,{source:o})),!this._validate(t.validateStyle.layer,"layers."+o,e,{arrayIndex:-1},n)){var r=t.default$22(e);this._validateLayer(r),r.setEventedParent(this,{layer:{id:o}});var a=i?this._order.indexOf(i):this._order.length;if(i&&-1===a)this.fire(new t.ErrorEvent(new Error('Layer with id "'+i+'" does not exist on this map.')));else{if(this._order.splice(a,0,o),this._layerOrderChanged=!0,this._layers[o]=r,this._removedLayers[o]&&r.source){var s=this._removedLayers[o];delete this._removedLayers[o],s.type!==r.type?this._updatedSources[r.source]="clear":(this._updatedSources[r.source]="reload",this.sourceCaches[r.source].pause());}this._updateLayer(r);}}},i.prototype.moveLayer=function(e,i){if(this._checkLoaded(),this._changed=!0,this._layers[e]){if(e!==i){var n=this._order.indexOf(e);this._order.splice(n,1);var o=i?this._order.indexOf(i):this._order.length;i&&-1===o?this.fire(new t.ErrorEvent(new Error('Layer with id "'+i+'" does not exist on this map.'))):(this._order.splice(o,0,e),this._layerOrderChanged=!0);}}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be moved.")));},i.prototype.removeLayer=function(e){this._checkLoaded();var i=this._layers[e];if(i){i.setEventedParent(null);var n=this._order.indexOf(e);this._order.splice(n,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=i,delete this._layers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e];}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be removed.")));},i.prototype.getLayer=function(t){return this._layers[t]},i.prototype.setLayerZoomRange=function(e,i,n){this._checkLoaded();var o=this.getLayer(e);o?o.minzoom===i&&o.maxzoom===n||(null!=i&&(o.minzoom=i),null!=n&&(o.maxzoom=n),this._updateLayer(o)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot have zoom extent.")));},i.prototype.setFilter=function(e,i){this._checkLoaded();var n=this.getLayer(e);if(n){if(!t.default$10(n.filter,i))return null==i?(n.filter=void 0,void this._updateLayer(n)):void(this._validate(t.validateStyle.filter,"layers."+n.id+".filter",i)||(n.filter=t.clone(i),this._updateLayer(n)))}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be filtered.")));},i.prototype.getFilter=function(e){return t.clone(this.getLayer(e).filter)},i.prototype.setLayoutProperty=function(e,i,n){this._checkLoaded();var o=this.getLayer(e);o?t.default$10(o.getLayoutProperty(i),n)||(o.setLayoutProperty(i,n),this._updateLayer(o)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")));},i.prototype.getLayoutProperty=function(t,e){return this.getLayer(t).getLayoutProperty(e)},i.prototype.setPaintProperty=function(e,i,n){this._checkLoaded();var o=this.getLayer(e);if(o){if(!t.default$10(o.getPaintProperty(i),n)){var r=o._transitionablePaint._values[i].value.isDataDriven();o.setPaintProperty(i,n),(o._transitionablePaint._values[i].value.isDataDriven()||r)&&this._updateLayer(o),this._changed=!0,this._updatedPaintProps[e]=!0;}}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")));},i.prototype.getPaintProperty=function(t,e){return this.getLayer(t).getPaintProperty(e)},i.prototype.getTransition=function(){return t.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)},i.prototype.serialize=function(){var e=this;return t.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:t.mapObject(this.sourceCaches,function(t){return t.serialize()}),layers:this._order.map(function(t){return e._layers[t].serialize()})},function(t){return void 0!==t})},i.prototype._updateLayer=function(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._changed=!0;},i.prototype._flattenRenderedFeatures=function(t){for(var e=[],i=this._order.length-1;i>=0;i--)for(var n=this._order[i],o=0,r=t;o<r.length;o+=1){var a=r[o][n];if(a)for(var s=0,l=a;s<l.length;s+=1){var c=l[s];e.push(c);}}return e},i.prototype.queryRenderedFeatures=function(e,i,n){i&&i.filter&&this._validate(t.validateStyle.filter,"queryRenderedFeatures.filter",i.filter);var o={};if(i&&i.layers){if(!Array.isArray(i.layers))return this.fire(new t.ErrorEvent(new Error("parameters.layers must be an Array."))),[];for(var r=0,a=i.layers;r<a.length;r+=1){var s=a[r],l=this._layers[s];if(!l)return this.fire(new t.ErrorEvent(new Error("The layer '"+s+"' does not exist in the map's style and cannot be queried for features."))),[];o[l.source]=!0;}}var c=[];for(var u in this.sourceCaches)i.layers&&!o[u]||c.push(at(this.sourceCaches[u],this._layers,e.worldCoordinate,i,n));return this.placement&&c.push(function(t,e,i,n,o){for(var r={},a=n.queryRenderedSymbols(e),s=[],l=0,c=Object.keys(a).map(Number);l<c.length;l+=1){var u=c[l];s.push(o[u]);}s.sort(st);for(var h=function(){var e=d[p],n=e.featureIndex.lookupSymbolFeatures(a[e.bucketInstanceId],e.bucketIndex,e.sourceLayerIndex,i.filter,i.layers,t);for(var o in n){var s=r[o]=r[o]||[],l=n[o];l.sort(function(t,i){var n=e.featureSortOrder;if(n){var o=n.indexOf(t.featureIndex);return n.indexOf(i.featureIndex)-o}return i.featureIndex-t.featureIndex});for(var c=0,u=l;c<u.length;c+=1){var h=u[c];s.push(h.feature);}}},p=0,d=s;p<d.length;p+=1)h();return r}(this._layers,e.viewport,i,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenRenderedFeatures(c)},i.prototype.querySourceFeatures=function(e,i){i&&i.filter&&this._validate(t.validateStyle.filter,"querySourceFeatures.filter",i.filter);var n=this.sourceCaches[e];return n?function(t,e){for(var i=t.getRenderableIds().map(function(e){return t.getTileByID(e)}),n=[],o={},r=0;r<i.length;r++){var a=i[r],s=a.tileID.canonical.key;o[s]||(o[s]=!0,a.querySourceFeatures(n,e));}return n}(n,i):[]},i.prototype.addSourceType=function(t,e,n){return i.getSourceType(t)?n(new Error('A source type called "'+t+'" already exists.')):(i.setSourceType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},n):n(null,null))},i.prototype.getLight=function(){return this.light.getLight()},i.prototype.setLight=function(e){this._checkLoaded();var i=this.light.getLight(),n=!1;for(var o in e)if(!t.default$10(e[o],i[o])){n=!0;break}if(n){var a={now:r.now(),transition:t.extend({duration:300,delay:0},this.stylesheet.transition)};this.light.setLight(e),this.light.updateTransitions(a);}},i.prototype._validate=function(e,i,n,o,r){return(!r||!1!==r.validate)&&Ke(this,e.call(t.validateStyle,t.extend({key:i,style:this.serialize(),value:n,styleSpec:t.default$5},o)))},i.prototype._remove=function(){for(var e in t.evented.off("pluginAvailable",this._rtlTextPluginCallback),this.sourceCaches)this.sourceCaches[e].clearTiles();this.dispatcher.remove();},i.prototype._clearSource=function(t){this.sourceCaches[t].clearTiles();},i.prototype._reloadSource=function(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload();},i.prototype._updateSources=function(t){for(var e in this.sourceCaches)this.sourceCaches[e].update(t);},i.prototype._generateCollisionBoxes=function(){for(var t in this.sourceCaches)this._reloadSource(t);},i.prototype._updatePlacement=function(t,e,i){for(var n=!1,o=!1,a={},s=0,l=this._order;s<l.length;s+=1){var c=l[s],u=this._layers[c];if("symbol"===u.type){if(!a[u.source]){var h=this.sourceCaches[u.source];a[u.source]=h.getRenderableIds().map(function(t){return h.getTileByID(t)}).sort(function(t,e){return e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)});}var p=this.crossTileSymbolIndex.addLayer(u,a[u.source],t.center.lng);n=n||p;}}this.crossTileSymbolIndex.pruneUnusedLayers(this._order);var d=this._layerOrderChanged;if((d||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(r.now()))&&(this.pauseablePlacement=new $e(t,this._order,d,e,i),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,a),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(this.placement,r.now()),o=!0),n&&this.pauseablePlacement.placement.setStale()),o||n)for(var f=0,m=this._order;f<m.length;f+=1){var _=m[f],g=this._layers[_];"symbol"===g.type&&this.placement.updateLayerOpacities(g,a[g.source]);}return!this.pauseablePlacement.isDone()||this.placement.hasTransitions(r.now())},i.prototype.getImages=function(t,e,i){this.imageManager.getImages(e.icons,i);},i.prototype.getGlyphs=function(t,e,i){this.glyphManager.getGlyphs(e.stacks,i);},i}(t.Evented);Qe.getSourceType=function(t){return ot[t]},Qe.setSourceType=function(t,e){ot[t]=e;},Qe.registerForPluginAvailability=t.registerForPluginAvailability;var ti=t.createLayout([{name:"a_pos",type:"Int16",components:2}]),ei={prelude:{fragmentSource:"#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n",vertexSource:"#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\nvec2 unpack_opacity(const float packedOpacity) {\n    int intOpacity = int(packedOpacity) / 2;\n    return vec2(float(intOpacity) / 127.0, mod(packedOpacity, 2.0));\n}\n\n// To minimize the number of attributes needed, we encode a 4-component\n// color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n"},background:{fragmentSource:"uniform vec4 u_color;\nuniform float u_opacity;\n\nvoid main() {\n    gl_FragColor = u_color * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},backgroundPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\nuniform float u_opacity;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\nvoid main() {\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"},circle:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    vec2 extrude = v_data.xy;\n    float extrude_length = length(extrude);\n\n    lowp float antialiasblur = v_data.z;\n    float antialiased_blur = -max(blur, antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform bool u_pitch_with_map;\nuniform vec2 u_extrude_scale;\nuniform highp float u_camera_to_center_distance;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec2 circle_center = floor(a_pos * 0.5);\n    if (u_pitch_with_map) {\n        vec2 corner_position = circle_center;\n        if (u_scale_with_map) {\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale;\n        } else {\n            // Pitching the circle with the map effectively scales it with the map\n            // To counteract the effect for pitch-scale: viewport, we rescale the\n            // whole circle based on the pitch scaling effect at its central point\n            vec4 projected_center = u_matrix * vec4(circle_center, 0, 1);\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale * (projected_center.w / u_camera_to_center_distance);\n        }\n\n        gl_Position = u_matrix * vec4(corner_position, 0, 1);\n    } else {\n        gl_Position = u_matrix * vec4(circle_center, 0, 1);\n\n        if (u_scale_with_map) {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * u_camera_to_center_distance;\n        } else {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * gl_Position.w;\n        }\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    lowp float antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n\n    v_data = vec3(extrude.x, extrude.y, antialiasblur);\n}\n"},clippingMask:{fragmentSource:"void main() {\n    gl_FragColor = vec4(1.0);\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},heatmap:{fragmentSource:"#pragma mapbox: define highp float weight\n\nuniform highp float u_intensity;\nvarying vec2 v_extrude;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main() {\n    #pragma mapbox: initialize highp float weight\n\n    // Kernel density estimation with a Gaussian kernel of size 5x5\n    float d = -0.5 * 3.0 * 3.0 * dot(v_extrude, v_extrude);\n    float val = weight * u_intensity * GAUSS_COEF * exp(d);\n\n    gl_FragColor = vec4(val, 1.0, 1.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\n\nuniform mat4 u_matrix;\nuniform float u_extrude_scale;\nuniform float u_opacity;\nuniform float u_intensity;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_extrude;\n\n// Effective \"0\" in the kernel density texture to adjust the kernel size to;\n// this empirically chosen number minimizes artifacts on overlapping kernels\n// for typical heatmap cases (assuming clustered source)\nconst highp float ZERO = 1.0 / 255.0 / 16.0;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main(void) {\n    #pragma mapbox: initialize highp float weight\n    #pragma mapbox: initialize mediump float radius\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 unscaled_extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // This 'extrude' comes in ranging from [-1, -1], to [1, 1].  We'll use\n    // it to produce the vertices of a square mesh framing the point feature\n    // we're adding to the kernel density texture.  We'll also pass it as\n    // a varying, so that the fragment shader can determine the distance of\n    // each fragment from the point feature.\n    // Before we do so, we need to scale it up sufficiently so that the\n    // kernel falls effectively to zero at the edge of the mesh.\n    // That is, we want to know S such that\n    // weight * u_intensity * GAUSS_COEF * exp(-0.5 * 3.0^2 * S^2) == ZERO\n    // Which solves to:\n    // S = sqrt(-2.0 * log(ZERO / (weight * u_intensity * GAUSS_COEF))) / 3.0\n    float S = sqrt(-2.0 * log(ZERO / weight / u_intensity / GAUSS_COEF)) / 3.0;\n\n    // Pass the varying in units of radius\n    v_extrude = S * unscaled_extrude;\n\n    // Scale by radius and the zoom-based scale factor to produce actual\n    // mesh position\n    vec2 extrude = v_extrude * radius * u_extrude_scale;\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec4 pos = vec4(floor(a_pos * 0.5) + extrude, 0, 1);\n\n    gl_Position = u_matrix * pos;\n}\n"},heatmapTexture:{fragmentSource:"uniform sampler2D u_image;\nuniform sampler2D u_color_ramp;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    float t = texture2D(u_image, v_pos).r;\n    vec4 color = texture2D(u_color_ramp, vec2(t, 0.5));\n    gl_FragColor = color * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"},collisionBox:{fragmentSource:"\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        gl_FragColor *= .1;\n    }\n}",vertexSource:"attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = clamp(\n        0.5 + 0.5 * (u_camera_to_center_distance / camera_to_anchor_distance),\n        0.0, // Prevents oversized near-field boxes in pitched/overzoomed tiles\n        4.0);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n    gl_Position.xy += a_extrude * u_extrude_scale * gl_Position.w * collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n}\n"},collisionCircle:{fragmentSource:"uniform float u_overscale_factor;\n\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    vec4 color = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        color = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        color *= .2;\n    }\n\n    float extrude_scale_length = length(v_extrude_scale);\n    float extrude_length = length(v_extrude) * extrude_scale_length;\n    float stroke_width = 15.0 * extrude_scale_length / u_overscale_factor;\n    float radius = v_radius * extrude_scale_length;\n\n    float distance_to_edge = abs(extrude_length - radius);\n    float opacity_t = smoothstep(-stroke_width, 0.0, -distance_to_edge);\n\n    gl_FragColor = opacity_t * color;\n}\n",vertexSource:"attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\n\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = clamp(\n        0.5 + 0.5 * (u_camera_to_center_distance / camera_to_anchor_distance),\n        0.0, // Prevents oversized near-field circles in pitched/overzoomed tiles\n        4.0);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n\n    highp float padding_factor = 1.2; // Pad the vertices slightly to make room for anti-alias blur\n    gl_Position.xy += a_extrude * u_extrude_scale * padding_factor * gl_Position.w * collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n    v_radius = abs(a_extrude.y); // We don't pitch the circles, so both units of the extrusion vector are equal in magnitude to the radius\n\n    v_extrude = a_extrude * padding_factor;\n    v_extrude_scale = u_extrude_scale * u_camera_to_center_distance * collision_perspective_ratio;\n}\n"},debug:{fragmentSource:"uniform highp vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},fill:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_FragColor = color * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},fillOutline:{fragmentSource:"#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_pos;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n    gl_FragColor = outline_color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\nuniform vec2 u_world;\n\nvarying vec2 v_pos;\n\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillOutlinePattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    // find distance to outline for alpha interpolation\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n\n\n    gl_FragColor = mix(color1, color2, u_mix) * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"},fillExtrusion:{fragmentSource:"varying vec4 v_color;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    gl_FragColor = v_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec4 a_normal_ed;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    vec3 normal = a_normal_ed.xyz;\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n"},fillExtrusionPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec4 a_normal_ed;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec3 normal = a_normal_ed.xyz;\n    float edgedistance = a_normal_ed.w;\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = normal.x == 1.0 && normal.y == 0.0 && normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n"},extrusionTexture:{fragmentSource:"uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"},hillshadePrepare:{fragmentSource:"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D u_image;\nvarying vec2 v_pos;\nuniform vec2 u_dimension;\nuniform float u_zoom;\nuniform float u_maxzoom;\n\nfloat getElevation(vec2 coord, float bias) {\n    // Convert encoded elevation value to meters\n    vec4 data = texture2D(u_image, coord) * 255.0;\n    return (data.r + data.g * 256.0 + data.b * 256.0 * 256.0) / 4.0;\n}\n\nvoid main() {\n    vec2 epsilon = 1.0 / u_dimension;\n\n    // queried pixels:\n    // +-----------+\n    // |   |   |   |\n    // | a | b | c |\n    // |   |   |   |\n    // +-----------+\n    // |   |   |   |\n    // | d | e | f |\n    // |   |   |   |\n    // +-----------+\n    // |   |   |   |\n    // | g | h | i |\n    // |   |   |   |\n    // +-----------+\n\n    float a = getElevation(v_pos + vec2(-epsilon.x, -epsilon.y), 0.0);\n    float b = getElevation(v_pos + vec2(0, -epsilon.y), 0.0);\n    float c = getElevation(v_pos + vec2(epsilon.x, -epsilon.y), 0.0);\n    float d = getElevation(v_pos + vec2(-epsilon.x, 0), 0.0);\n    float e = getElevation(v_pos, 0.0);\n    float f = getElevation(v_pos + vec2(epsilon.x, 0), 0.0);\n    float g = getElevation(v_pos + vec2(-epsilon.x, epsilon.y), 0.0);\n    float h = getElevation(v_pos + vec2(0, epsilon.y), 0.0);\n    float i = getElevation(v_pos + vec2(epsilon.x, epsilon.y), 0.0);\n\n    // here we divide the x and y slopes by 8 * pixel size\n    // where pixel size (aka meters/pixel) is:\n    // circumference of the world / (pixels per tile * number of tiles)\n    // which is equivalent to: 8 * 40075016.6855785 / (512 * pow(2, u_zoom))\n    // which can be reduced to: pow(2, 19.25619978527 - u_zoom)\n    // we want to vertically exaggerate the hillshading though, because otherwise\n    // it is barely noticeable at low zooms. to do this, we multiply this by some\n    // scale factor pow(2, (u_zoom - u_maxzoom) * a) where a is an arbitrary value\n    // Here we use a=0.3 which works out to the expression below. see \n    // nickidlugash's awesome breakdown for more info\n    // https://github.com/mapbox/mapbox-gl-js/pull/5286#discussion_r148419556\n    float exaggeration = u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;\n\n    vec2 deriv = vec2(\n        (c + f + f + i) - (a + d + d + g),\n        (g + h + h + i) - (a + b + b + c)\n    ) /  pow(2.0, (u_zoom - u_maxzoom) * exaggeration + 19.2562 - u_zoom);\n\n    gl_FragColor = clamp(vec4(\n        deriv.x / 2.0 + 0.5,\n        deriv.y / 2.0 + 0.5,\n        1.0,\n        1.0), 0.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (a_texture_pos / 8192.0) / 2.0 + 0.25;\n}\n"},hillshade:{fragmentSource:"uniform sampler2D u_image;\nvarying vec2 v_pos;\n\nuniform vec2 u_latrange;\nuniform vec2 u_light;\nuniform vec4 u_shadow;\nuniform vec4 u_highlight;\nuniform vec4 u_accent;\n\n#define PI 3.141592653589793\n\nvoid main() {\n    vec4 pixel = texture2D(u_image, v_pos);\n\n    vec2 deriv = ((pixel.rg * 2.0) - 1.0);\n\n    // We divide the slope by a scale factor based on the cosin of the pixel's approximate latitude\n    // to account for mercator projection distortion. see #4807 for details\n    float scaleFactor = cos(radians((u_latrange[0] - u_latrange[1]) * (1.0 - v_pos.y) + u_latrange[1]));\n    // We also multiply the slope by an arbitrary z-factor of 1.25\n    float slope = atan(1.25 * length(deriv) / scaleFactor);\n    float aspect = deriv.x != 0.0 ? atan(deriv.y, -deriv.x) : PI / 2.0 * (deriv.y > 0.0 ? 1.0 : -1.0);\n\n    float intensity = u_light.x;\n    // We add PI to make this property match the global light object, which adds PI/2 to the light's azimuthal\n    // position property to account for 0deg corresponding to north/the top of the viewport in the style spec\n    // and the original shader was written to accept (-illuminationDirection - 90) as the azimuthal.\n    float azimuth = u_light.y + PI;\n\n    // We scale the slope exponentially based on intensity, using a calculation similar to\n    // the exponential interpolation function in the style spec:\n    // https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/expression/definitions/interpolate.js#L217-L228\n    // so that higher intensity values create more opaque hillshading.\n    float base = 1.875 - intensity * 1.75;\n    float maxValue = 0.5 * PI;\n    float scaledSlope = intensity != 0.5 ? ((pow(base, slope) - 1.0) / (pow(base, maxValue) - 1.0)) * maxValue : slope;\n\n    // The accent color is calculated with the cosine of the slope while the shade color is calculated with the sine\n    // so that the accent color's rate of change eases in while the shade color's eases out.\n    float accent = cos(scaledSlope);\n    // We multiply both the accent and shade color by a clamped intensity value\n    // so that intensities >= 0.5 do not additionally affect the color values\n    // while intensity values < 0.5 make the overall color more transparent.\n    vec4 accent_color = (1.0 - accent) * u_accent * clamp(intensity * 2.0, 0.0, 1.0);\n    float shade = abs(mod((aspect + azimuth) / PI + 0.5, 2.0) - 1.0);\n    vec4 shade_color = mix(u_shadow, u_highlight, shade) * sin(scaledSlope) * clamp(intensity * 2.0, 0.0, 1.0);\n    gl_FragColor = accent_color * (1.0 - shade_color.a) + shade_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = a_texture_pos / 8192.0;\n}\n"},line:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\nvarying highp float v_linesofar;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    v_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * 2.0;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n"},lineGradient:{fragmentSource:"\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nuniform sampler2D u_image;\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\nvarying highp float v_lineprogress;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    // For gradient lines, v_lineprogress is the ratio along the entire line,\n    // scaled to [0, 2^15), and the gradient ramp is stored in a texture.\n    vec4 color = texture2D(u_image, vec2(v_lineprogress, 0.5));\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"\n// the attribute conveying progress along a line is scaled to [0, 2^15)\n#define MAX_LINE_DISTANCE 32767.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\nvarying highp float v_lineprogress;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    v_lineprogress = (floor(a_data.z / 4.0) + a_data.w * 64.0) * 2.0 / MAX_LINE_DISTANCE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n"},linePattern:{fragmentSource:"uniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_fade;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float x_a = mod(v_linesofar / u_pattern_size_a.x, 1.0);\n    float x_b = mod(v_linesofar / u_pattern_size_b.x, 1.0);\n\n    // v_normal.y is 0 at the midpoint of the line, -1 at the lower edge, 1 at the upper edge\n    // we clamp the line width outset to be between 0 and half the pattern height plus padding (2.0)\n    // to ensure we don't sample outside the designated symbol on the sprite sheet.\n    // 0.5 is added to shift the component to be bounded between 0 and 1 for interpolation of\n    // the texture coordinate\n    float y_a = 0.5 + (v_normal.y * clamp(v_width2.s, 0.0, (u_pattern_size_a.y + 2.0) / 2.0) / u_pattern_size_a.y);\n    float y_b = 0.5 + (v_normal.y * clamp(v_width2.s, 0.0, (u_pattern_size_b.y + 2.0) / 2.0) / u_pattern_size_b.y);\n    vec2 pos_a = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, vec2(x_a, y_a));\n    vec2 pos_b = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, vec2(x_b, y_b));\n\n    vec4 color = mix(texture2D(u_image, pos_a), texture2D(u_image, pos_b), u_fade);\n\n    gl_FragColor = color * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_linesofar = a_linesofar;\n    v_width2 = vec2(outset, inset);\n}\n"},lineSDF:{fragmentSource:"\nuniform sampler2D u_image;\nuniform float u_sdfgamma;\nuniform float u_mix;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float sdfdist_a = texture2D(u_image, v_tex_a).a;\n    float sdfdist_b = texture2D(u_image, v_tex_b).a;\n    float sdfdist = mix(sdfdist_a, sdfdist_b, u_mix);\n    alpha *= smoothstep(0.5 - u_sdfgamma / floorwidth, 0.5 + u_sdfgamma / floorwidth, sdfdist);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_patternscale_a;\nuniform float u_tex_y_a;\nuniform vec2 u_patternscale_b;\nuniform float u_tex_y_b;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist =outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_tex_a = vec2(a_linesofar * u_patternscale_a.x / floorwidth, normal.y * u_patternscale_a.y + u_tex_y_a);\n    v_tex_b = vec2(a_linesofar * u_patternscale_b.x / floorwidth, normal.y * u_patternscale_b.y + u_tex_y_b);\n\n    v_width2 = vec2(outset, inset);\n}\n"},raster:{fragmentSource:"uniform float u_fade_t;\nuniform float u_opacity;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nuniform float u_brightness_low;\nuniform float u_brightness_high;\n\nuniform float u_saturation_factor;\nuniform float u_contrast_factor;\nuniform vec3 u_spin_weights;\n\nvoid main() {\n\n    // read and cross-fade colors from the main and parent tiles\n    vec4 color0 = texture2D(u_image0, v_pos0);\n    vec4 color1 = texture2D(u_image1, v_pos1);\n    if (color0.a > 0.0) {\n        color0.rgb = color0.rgb / color0.a;\n    }\n    if (color1.a > 0.0) {\n        color1.rgb = color1.rgb / color1.a;\n    }\n    vec4 color = mix(color0, color1, u_fade_t);\n    color.a *= u_opacity;\n    vec3 rgb = color.rgb;\n\n    // spin\n    rgb = vec3(\n        dot(rgb, u_spin_weights.xyz),\n        dot(rgb, u_spin_weights.zxy),\n        dot(rgb, u_spin_weights.yzx));\n\n    // saturation\n    float average = (color.r + color.g + color.b) / 3.0;\n    rgb += (average - rgb) * u_saturation_factor;\n\n    // contrast\n    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;\n\n    // brightness\n    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);\n    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);\n\n    gl_FragColor = vec4(mix(u_high_vec, u_low_vec, rgb) * color.a, color.a);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_tl_parent;\nuniform float u_scale_parent;\nuniform float u_buffer_scale;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    // We are using Int16 for texture position coordinates to give us enough precision for\n    // fractional coordinates. We use 8192 to scale the texture coordinates in the buffer\n    // as an arbitrarily high number to preserve adequate precision when rendering.\n    // This is also the same value as the EXTENT we are using for our tile buffer pos coordinates,\n    // so math for modifying either is consistent.\n    v_pos0 = (((a_texture_pos / 8192.0) - 0.5) / u_buffer_scale ) + 0.5;\n    v_pos1 = (v_pos0 * u_scale_parent) + u_tl_parent;\n}\n"},symbolIcon:{fragmentSource:"uniform sampler2D u_texture;\n\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    lowp float alpha = opacity * v_fade_opacity;\n    gl_FragColor = texture2D(u_texture, v_tex) * alpha;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform float u_fade_change;\n\n#pragma mapbox: define lowp float opacity\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n\n    float size;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // See comments in symbol_sdf.vertex\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = clamp(\n            0.5 + 0.5 * distance_ratio,\n            0.0, // Prevents oversized near-field symbols in pitched/overzoomed tiles\n            4.0);\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // See comments in symbol_sdf.vertex\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 32.0 * fontScale), 0.0, 1.0);\n\n    v_tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    v_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n}\n"},symbolSDF:{fragmentSource:"#define SDF_PX 8.0\n#define EDGE_GAMMA 0.105/DEVICE_PIXEL_RATIO\n\nuniform bool u_is_halo;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform sampler2D u_texture;\nuniform highp float u_gamma_scale;\nuniform bool u_is_text;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 tex = v_data0.xy;\n    float gamma_scale = v_data1.x;\n    float size = v_data1.y;\n    float fade_opacity = v_data1[2];\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    lowp vec4 color = fill_color;\n    highp float gamma = EDGE_GAMMA / (fontScale * u_gamma_scale);\n    lowp float buff = (256.0 - 64.0) / 256.0;\n    if (u_is_halo) {\n        color = halo_color;\n        gamma = (halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (fontScale * u_gamma_scale);\n        buff = (6.0 - halo_width / fontScale) / SDF_PX;\n    }\n\n    lowp float dist = texture2D(u_texture, tex).a;\n    highp float gamma_scaled = gamma * gamma_scale;\n    highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist);\n\n    gl_FragColor = color * (alpha * opacity * fade_opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\n// contents of a_size vary based on the type of property value\n// used for {text,icon}-size.\n// For constants, a_size is disabled.\n// For source functions, we bind only one value per vertex: the value of {text,icon}-size evaluated for the current feature.\n// For composite functions:\n// [ text-size(lowerZoomStop, feature),\n//   text-size(upperZoomStop, feature) ]\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\n\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform highp float u_camera_to_center_distance;\nuniform float u_fade_change;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n    float size;\n\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // If the label is pitched with the map, layout is done in pitched space,\n    // which makes labels in the distance smaller relative to viewport space.\n    // We counteract part of that effect by multiplying by the perspective ratio.\n    // If the label isn't pitched with the map, we do layout in viewport space,\n    // which makes labels in the distance larger relative to the features around\n    // them. We counteract part of that effect by dividing by the perspective ratio.\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = clamp(\n        0.5 + 0.5 * distance_ratio,\n        0.0, // Prevents oversized near-field symbols in pitched/overzoomed tiles\n        4.0);\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // Point labels with 'rotation-alignment: map' are horizontal with respect to tile units\n        // To figure out that angle in projected space, we draw a short horizontal line in tile\n        // space, project it, and measure its angle in projected space.\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 32.0 * fontScale), 0.0, 1.0);\n    float gamma_scale = gl_Position.w;\n\n    vec2 tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    float interpolated_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n\n    v_data0 = vec2(tex.x, tex.y);\n    v_data1 = vec3(gamma_scale, size, interpolated_fade_opacity);\n}\n"}},ii=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,ni=function(t){var e=ei[t],i={};e.fragmentSource=e.fragmentSource.replace(ii,function(t,e,n,o,r){return i[r]=!0,"define"===e?"\n#ifndef HAS_UNIFORM_u_"+r+"\nvarying "+n+" "+o+" "+r+";\n#else\nuniform "+n+" "+o+" u_"+r+";\n#endif\n":"\n#ifdef HAS_UNIFORM_u_"+r+"\n    "+n+" "+o+" "+r+" = u_"+r+";\n#endif\n"}),e.vertexSource=e.vertexSource.replace(ii,function(t,e,n,o,r){var a="float"===o?"vec2":"vec4";return i[r]?"define"===e?"\n#ifndef HAS_UNIFORM_u_"+r+"\nuniform lowp float a_"+r+"_t;\nattribute "+n+" "+a+" a_"+r+";\nvarying "+n+" "+o+" "+r+";\n#else\nuniform "+n+" "+o+" u_"+r+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+r+"\n    "+r+" = unpack_mix_"+a+"(a_"+r+", a_"+r+"_t);\n#else\n    "+n+" "+o+" "+r+" = u_"+r+";\n#endif\n":"define"===e?"\n#ifndef HAS_UNIFORM_u_"+r+"\nuniform lowp float a_"+r+"_t;\nattribute "+n+" "+a+" a_"+r+";\n#else\nuniform "+n+" "+o+" u_"+r+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+r+"\n    "+n+" "+o+" "+r+" = unpack_mix_"+a+"(a_"+r+", a_"+r+"_t);\n#else\n    "+n+" "+o+" "+r+" = u_"+r+";\n#endif\n"});};for(var oi in ei)ni(oi);var ri=ei,ai=function(t,e,i,n){var o=t.gl;this.program=o.createProgram();var a=i.defines().concat("#define DEVICE_PIXEL_RATIO "+r.devicePixelRatio.toFixed(1));n&&a.push("#define OVERDRAW_INSPECTOR;");var s=a.concat(ri.prelude.fragmentSource,e.fragmentSource).join("\n"),l=a.concat(ri.prelude.vertexSource,e.vertexSource).join("\n"),c=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(c,s),o.compileShader(c),o.attachShader(this.program,c);var u=o.createShader(o.VERTEX_SHADER);o.shaderSource(u,l),o.compileShader(u),o.attachShader(this.program,u);for(var h=i.layoutAttributes||[],p=0;p<h.length;p++)o.bindAttribLocation(this.program,p,h[p].name);o.linkProgram(this.program),this.numAttributes=o.getProgramParameter(this.program,o.ACTIVE_ATTRIBUTES),this.attributes={},this.uniforms={};for(var d=0;d<this.numAttributes;d++){var f=o.getActiveAttrib(this.program,d);f&&(this.attributes[f.name]=o.getAttribLocation(this.program,f.name));}for(var m=o.getProgramParameter(this.program,o.ACTIVE_UNIFORMS),_=0;_<m;_++){var g=o.getActiveUniform(this.program,_);g&&(this.uniforms[g.name]=o.getUniformLocation(this.program,g.name));}};function si(e,i,n,o,r){for(var a=0;a<n.length;a++){var s=n[a];if(o.isLessThan(s.tileID))break;if(i.key===s.tileID.key)return;if(s.tileID.isChildOf(i)){for(var l=i.children(1/0),c=0;c<l.length;c++){si(e,l[c],n.slice(a),o,r);}return}}var u=i.overscaledZ-e.overscaledZ,h=new t.CanonicalTileID(u,i.canonical.x-(e.canonical.x<<u),i.canonical.y-(e.canonical.y<<u));r[h.key]=r[h.key]||h;}function li(t,e,i,n,o){var r=t.context,a=r.gl,s=o?t.useProgram("collisionCircle"):t.useProgram("collisionBox");r.setDepthMode($t.disabled),r.setStencilMode(Gt.disabled),r.setColorMode(t.colorModeForRenderPass());for(var l=0;l<n.length;l++){var c=n[l],u=e.getTile(c),h=u.getBucket(i);if(h){var p=o?h.collisionCircle:h.collisionBox;if(p){a.uniformMatrix4fv(s.uniforms.u_matrix,!1,c.posMatrix),o||r.lineWidth.set(1),a.uniform1f(s.uniforms.u_camera_to_center_distance,t.transform.cameraToCenterDistance);var d=ze(u,1,t.transform.zoom),f=Math.pow(2,t.transform.zoom-u.tileID.overscaledZ);a.uniform1f(s.uniforms.u_pixels_to_tile_units,d),a.uniform2f(s.uniforms.u_extrude_scale,t.transform.pixelsToGLUnits[0]/(d*f),t.transform.pixelsToGLUnits[1]/(d*f)),a.uniform1f(s.uniforms.u_overscale_factor,u.tileID.overscaleFactor()),s.draw(r,o?a.TRIANGLES:a.LINES,i.id,p.layoutVertexBuffer,p.indexBuffer,p.segments,null,p.collisionVertexBuffer,null);}}}}ai.prototype.draw=function(t,e,i,n,o,r,a,s,l){for(var c,u=t.gl,h=(c={},c[u.LINES]=2,c[u.TRIANGLES]=3,c)[e],p=0,d=r.get();p<d.length;p+=1){var f=d[p],m=f.vaos||(f.vaos={});(m[i]||(m[i]=new tt)).bind(t,this,n,a?a.getPaintVertexBuffers():[],o,f.vertexOffset,s,l),u.drawElements(e,f.primitiveLength*h,u.UNSIGNED_SHORT,f.primitiveOffset*h*2);}};var ci=t.mat4.identity(new Float32Array(16)),ui=t.default$19.layout;function hi(t,e,i,n,o,r,a,s,l,c){var u,h=t.context,p=h.gl,d=t.transform,f="map"===s,m="map"===l,_=f&&"line"===i.layout.get("symbol-placement"),g=f&&!m&&!_,v=m;h.setDepthMode(v?t.depthModeForSublayer(0,$t.ReadOnly):$t.disabled);for(var y=0,x=n;y<x.length;y+=1){var b=x[y],w=e.getTile(b),E=w.getBucket(i);if(E){var T=o?E.text:E.icon;if(T&&T.segments.get().length){var I=T.programConfigurations.get(i.id),C=o||E.sdfIcons,S=o?E.textSizeData:E.iconSizeData;if(u||(u=t.useProgram(C?"symbolSDF":"symbolIcon",I),I.setUniforms(t.context,u,i.paint,{zoom:t.transform.zoom}),pi(u,t,i,o,g,m,S)),h.activeTexture.set(p.TEXTURE0),p.uniform1i(u.uniforms.u_texture,0),o)w.glyphAtlasTexture.bind(p.LINEAR,p.CLAMP_TO_EDGE),p.uniform2fv(u.uniforms.u_texsize,w.glyphAtlasTexture.size);else{var z=1!==i.layout.get("icon-size").constantOr(0)||E.iconsNeedLinear,A=m||0!==d.pitch;w.iconAtlasTexture.bind(C||t.options.rotating||t.options.zooming||z||A?p.LINEAR:p.NEAREST,p.CLAMP_TO_EDGE),p.uniform2fv(u.uniforms.u_texsize,w.iconAtlasTexture.size);}p.uniformMatrix4fv(u.uniforms.u_matrix,!1,t.translatePosMatrix(b.posMatrix,w,r,a));var R=ze(w,1,t.transform.zoom),D=de(b.posMatrix,m,f,t.transform,R),M=fe(b.posMatrix,m,f,t.transform,R);p.uniformMatrix4fv(u.uniforms.u_gl_coord_matrix,!1,t.translatePosMatrix(M,w,r,a,!0)),_?(p.uniformMatrix4fv(u.uniforms.u_label_plane_matrix,!1,ci),ge(E,b.posMatrix,t,o,D,M,m,c)):p.uniformMatrix4fv(u.uniforms.u_label_plane_matrix,!1,D),p.uniform1f(u.uniforms.u_fade_change,t.options.fadeDuration?t.symbolFadeChange:1),di(u,I,t,i,w,T,o,C,m);}}}}function pi(e,i,n,o,r,a,s){var l=i.context.gl,c=i.transform;l.uniform1i(e.uniforms.u_pitch_with_map,a?1:0),l.uniform1f(e.uniforms.u_is_text,o?1:0),l.uniform1f(e.uniforms.u_pitch,c.pitch/360*2*Math.PI);var u="constant"===s.functionType||"source"===s.functionType,h="constant"===s.functionType||"camera"===s.functionType;l.uniform1i(e.uniforms.u_is_size_zoom_constant,u?1:0),l.uniform1i(e.uniforms.u_is_size_feature_constant,h?1:0),l.uniform1f(e.uniforms.u_camera_to_center_distance,c.cameraToCenterDistance);var p=t.evaluateSizeForZoom(s,c.zoom,ui.properties[o?"text-size":"icon-size"]);void 0!==p.uSizeT&&l.uniform1f(e.uniforms.u_size_t,p.uSizeT),void 0!==p.uSize&&l.uniform1f(e.uniforms.u_size,p.uSize),l.uniform1f(e.uniforms.u_aspect_ratio,c.width/c.height),l.uniform1i(e.uniforms.u_rotate_symbol,r?1:0);}function di(t,e,i,n,o,r,a,s,l){var c=i.context,u=c.gl,h=i.transform;if(s){var p=0!==n.paint.get(a?"text-halo-width":"icon-halo-width").constantOr(1),d=l?Math.cos(h._pitch)*h.cameraToCenterDistance:1;u.uniform1f(t.uniforms.u_gamma_scale,d),p&&(u.uniform1f(t.uniforms.u_is_halo,1),fi(r,n,c,t)),u.uniform1f(t.uniforms.u_is_halo,0);}fi(r,n,c,t);}function fi(t,e,i,n){n.draw(i,i.gl.TRIANGLES,e.id,t.layoutVertexBuffer,t.indexBuffer,t.segments,t.programConfigurations.get(e.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer);}function mi(t,e,i,n,o,a,s,l,c){var u,h,p,d,f=e.context,m=f.gl,_=o.paint.get("line-dasharray"),g=o.paint.get("line-pattern");if(l||c){var v=1/ze(i,1,e.transform.tileZoom);if(_){u=e.lineAtlas.getDash(_.from,"round"===o.layout.get("line-cap")),h=e.lineAtlas.getDash(_.to,"round"===o.layout.get("line-cap"));var y=u.width*_.fromScale,x=h.width*_.toScale;m.uniform2f(t.uniforms.u_patternscale_a,v/y,-u.height/2),m.uniform2f(t.uniforms.u_patternscale_b,v/x,-h.height/2),m.uniform1f(t.uniforms.u_sdfgamma,e.lineAtlas.width/(256*Math.min(y,x)*r.devicePixelRatio)/2);}else if(g){if(p=e.imageManager.getPattern(g.from),d=e.imageManager.getPattern(g.to),!p||!d)return;m.uniform2f(t.uniforms.u_pattern_size_a,p.displaySize[0]*g.fromScale/v,p.displaySize[1]),m.uniform2f(t.uniforms.u_pattern_size_b,d.displaySize[0]*g.toScale/v,d.displaySize[1]);var b=e.imageManager.getPixelSize(),w=b.width,E=b.height;m.uniform2fv(t.uniforms.u_texsize,[w,E]);}m.uniform2f(t.uniforms.u_gl_units_to_pixels,1/e.transform.pixelsToGLUnits[0],1/e.transform.pixelsToGLUnits[1]);}l&&(_?(m.uniform1i(t.uniforms.u_image,0),f.activeTexture.set(m.TEXTURE0),e.lineAtlas.bind(f),m.uniform1f(t.uniforms.u_tex_y_a,u.y),m.uniform1f(t.uniforms.u_tex_y_b,h.y),m.uniform1f(t.uniforms.u_mix,_.t)):g&&(m.uniform1i(t.uniforms.u_image,0),f.activeTexture.set(m.TEXTURE0),e.imageManager.bind(f),m.uniform2fv(t.uniforms.u_pattern_tl_a,p.tl),m.uniform2fv(t.uniforms.u_pattern_br_a,p.br),m.uniform2fv(t.uniforms.u_pattern_tl_b,d.tl),m.uniform2fv(t.uniforms.u_pattern_br_b,d.br),m.uniform1f(t.uniforms.u_fade,g.t))),f.setStencilMode(e.stencilModeForClipping(a));var T=e.translatePosMatrix(a.posMatrix,i,o.paint.get("line-translate"),o.paint.get("line-translate-anchor"));if(m.uniformMatrix4fv(t.uniforms.u_matrix,!1,T),m.uniform1f(t.uniforms.u_ratio,1/ze(i,1,e.transform.zoom)),o.paint.get("line-gradient")){f.activeTexture.set(m.TEXTURE0);var I=o.gradientTexture;if(!o.gradient)return;I||(I=o.gradientTexture=new M(f,o.gradient,m.RGBA)),I.bind(m.LINEAR,m.CLAMP_TO_EDGE),m.uniform1i(t.uniforms.u_image,0);}t.draw(f,m.TRIANGLES,o.id,n.layoutVertexBuffer,n.indexBuffer,n.segments,s);}var _i=function(t,e){if(!t)return!1;var i=e.imageManager.getPattern(t.from),n=e.imageManager.getPattern(t.to);return!i||!n},gi=function(t,e,i){var n=e.context,o=n.gl,r=e.imageManager.getPattern(t.from),a=e.imageManager.getPattern(t.to);o.uniform1i(i.uniforms.u_image,0),o.uniform2fv(i.uniforms.u_pattern_tl_a,r.tl),o.uniform2fv(i.uniforms.u_pattern_br_a,r.br),o.uniform2fv(i.uniforms.u_pattern_tl_b,a.tl),o.uniform2fv(i.uniforms.u_pattern_br_b,a.br);var s=e.imageManager.getPixelSize(),l=s.width,c=s.height;o.uniform2fv(i.uniforms.u_texsize,[l,c]),o.uniform1f(i.uniforms.u_mix,t.t),o.uniform2fv(i.uniforms.u_pattern_size_a,r.displaySize),o.uniform2fv(i.uniforms.u_pattern_size_b,a.displaySize),o.uniform1f(i.uniforms.u_scale_a,t.fromScale),o.uniform1f(i.uniforms.u_scale_b,t.toScale),n.activeTexture.set(o.TEXTURE0),e.imageManager.bind(e.context);},vi=function(t,e,i){var n=e.context.gl;n.uniform1f(i.uniforms.u_tile_units_to_pixels,1/ze(t,1,e.transform.tileZoom));var o=Math.pow(2,t.tileID.overscaledZ),r=t.tileSize*Math.pow(2,e.transform.tileZoom)/o,a=r*(t.tileID.canonical.x+t.tileID.wrap*o),s=r*t.tileID.canonical.y;n.uniform2f(i.uniforms.u_pixel_coord_upper,a>>16,s>>16),n.uniform2f(i.uniforms.u_pixel_coord_lower,65535&a,65535&s);};function yi(t,e,i,n,o){if(!_i(i.paint.get("fill-pattern"),t))for(var r=!0,a=0,s=n;a<s.length;a+=1){var l=s[a],c=e.getTile(l),u=c.getBucket(i);u&&(t.context.setStencilMode(t.stencilModeForClipping(l)),o(t,e,i,c,l,u,r),r=!1);}}function xi(t,e,i,n,o,r,a){var s=t.context.gl,l=r.programConfigurations.get(i.id);wi("fill",i.paint.get("fill-pattern"),t,l,i,n,o,a).draw(t.context,s.TRIANGLES,i.id,r.layoutVertexBuffer,r.indexBuffer,r.segments,l);}function bi(t,e,i,n,o,r,a){var s=t.context.gl,l=r.programConfigurations.get(i.id),c=wi("fillOutline",i.getPaintProperty("fill-outline-color")?null:i.paint.get("fill-pattern"),t,l,i,n,o,a);s.uniform2f(c.uniforms.u_world,s.drawingBufferWidth,s.drawingBufferHeight),c.draw(t.context,s.LINES,i.id,r.layoutVertexBuffer,r.indexBuffer2,r.segments2,l);}function wi(t,e,i,n,o,r,a,s){var l,c=i.context.program.get();return e?(l=i.useProgram(t+"Pattern",n),(s||l.program!==c)&&(n.setUniforms(i.context,l,o.paint,{zoom:i.transform.zoom}),gi(e,i,l)),vi(r,i,l)):(l=i.useProgram(t,n),(s||l.program!==c)&&n.setUniforms(i.context,l,o.paint,{zoom:i.transform.zoom})),i.context.gl.uniformMatrix4fv(l.uniforms.u_matrix,!1,i.translatePosMatrix(a.posMatrix,r,o.paint.get("fill-translate"),o.paint.get("fill-translate-anchor"))),l}var Ei=t.default$20.mat3,Ti=t.default$20.mat4,Ii=t.default$20.vec3;function Ci(t,e,i,n,o,r,a){var s=t.context,l=s.gl,c=i.paint.get("fill-extrusion-pattern"),u=t.context.program.get(),h=r.programConfigurations.get(i.id),p=t.useProgram(c?"fillExtrusionPattern":"fillExtrusion",h);if((a||p.program!==u)&&h.setUniforms(s,p,i.paint,{zoom:t.transform.zoom}),c){if(_i(c,t))return;gi(c,t,p),vi(n,t,p),l.uniform1f(p.uniforms.u_height_factor,-Math.pow(2,o.overscaledZ)/n.tileSize/8);}t.context.gl.uniformMatrix4fv(p.uniforms.u_matrix,!1,t.translatePosMatrix(o.posMatrix,n,i.paint.get("fill-extrusion-translate"),i.paint.get("fill-extrusion-translate-anchor"))),function(t,e){var i=e.context.gl,n=e.style.light,o=n.properties.get("position"),r=[o.x,o.y,o.z],a=Ei.create();"viewport"===n.properties.get("anchor")&&Ei.fromRotation(a,-e.transform.angle);Ii.transformMat3(r,r,a);var s=n.properties.get("color");i.uniform3fv(t.uniforms.u_lightpos,r),i.uniform1f(t.uniforms.u_lightintensity,n.properties.get("intensity")),i.uniform3f(t.uniforms.u_lightcolor,s.r,s.g,s.b);}(p,t),p.draw(s,l.TRIANGLES,i.id,r.layoutVertexBuffer,r.indexBuffer,r.segments,h);}function Si(e,i,n){var o=e.context,r=o.gl,a=i.fbo;if(a){var s=e.useProgram("hillshade"),l=e.transform.calculatePosMatrix(i.tileID.toUnwrapped(),!0);!function(t,e,i){var n=i.paint.get("hillshade-illumination-direction")*(Math.PI/180);"viewport"===i.paint.get("hillshade-illumination-anchor")&&(n-=e.transform.angle),e.context.gl.uniform2f(t.uniforms.u_light,i.paint.get("hillshade-exaggeration"),n);}(s,e,n);var c=function(e,i){var n=i.toCoordinate(),o=new t.default$17(n.column,n.row+1,n.zoom);return[e.transform.coordinateLocation(n).lat,e.transform.coordinateLocation(o).lat]}(e,i.tileID);o.activeTexture.set(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,a.colorAttachment.get()),r.uniformMatrix4fv(s.uniforms.u_matrix,!1,l),r.uniform2fv(s.uniforms.u_latrange,c),r.uniform1i(s.uniforms.u_image,0);var u=n.paint.get("hillshade-shadow-color");r.uniform4f(s.uniforms.u_shadow,u.r,u.g,u.b,u.a);var h=n.paint.get("hillshade-highlight-color");r.uniform4f(s.uniforms.u_highlight,h.r,h.g,h.b,h.a);var p=n.paint.get("hillshade-accent-color");if(r.uniform4f(s.uniforms.u_accent,p.r,p.g,p.b,p.a),i.maskedBoundsBuffer&&i.maskedIndexBuffer&&i.segments)s.draw(o,r.TRIANGLES,n.id,i.maskedBoundsBuffer,i.maskedIndexBuffer,i.segments);else{var d=e.rasterBoundsBuffer;e.rasterBoundsVAO.bind(o,s,d,[]),r.drawArrays(r.TRIANGLE_STRIP,0,d.length);}}}function zi(e,i,n){var o=e.context,r=o.gl;if(i.dem&&i.dem.level){var a=i.dem.level.dim,s=i.dem.getPixels();if(o.activeTexture.set(r.TEXTURE1),o.pixelStoreUnpackPremultiplyAlpha.set(!1),i.demTexture=i.demTexture||e.getTileTexture(i.tileSize),i.demTexture){var l=i.demTexture;l.update(s,{premultiply:!1}),l.bind(r.NEAREST,r.CLAMP_TO_EDGE);}else i.demTexture=new M(o,s,r.RGBA,{premultiply:!1}),i.demTexture.bind(r.NEAREST,r.CLAMP_TO_EDGE);o.activeTexture.set(r.TEXTURE0);var c=i.fbo;if(!c){var u=new M(o,{width:a,height:a,data:null},r.RGBA);u.bind(r.LINEAR,r.CLAMP_TO_EDGE),(c=i.fbo=o.createFramebuffer(a,a)).colorAttachment.set(u.texture);}o.bindFramebuffer.set(c.framebuffer),o.viewport.set([0,0,a,a]);var h=t.mat4.create();t.mat4.ortho(h,0,t.default$8,-t.default$8,0,0,1),t.mat4.translate(h,h,[0,-t.default$8,0]);var p=e.useProgram("hillshadePrepare");r.uniformMatrix4fv(p.uniforms.u_matrix,!1,h),r.uniform1f(p.uniforms.u_zoom,i.tileID.overscaledZ),r.uniform2fv(p.uniforms.u_dimension,[2*a,2*a]),r.uniform1i(p.uniforms.u_image,1),r.uniform1f(p.uniforms.u_maxzoom,n);var d=e.rasterBoundsBuffer;e.rasterBoundsVAO.bind(o,p,d,[]),r.drawArrays(r.TRIANGLE_STRIP,0,d.length),i.needsHillshadePrepare=!1;}}function Ai(e,i,n,o,a){var s=o.paint.get("raster-fade-duration");if(s>0){var l=r.now(),c=(l-e.timeAdded)/s,u=i?(l-i.timeAdded)/s:-1,h=n.getSource(),p=a.coveringZoomLevel({tileSize:h.tileSize,roundZoom:h.roundZoom}),d=!i||Math.abs(i.tileID.overscaledZ-p)>Math.abs(e.tileID.overscaledZ-p),f=d&&e.refreshedUponExpiration?1:t.clamp(d?c:1-u,0,1);return e.refreshedUponExpiration&&c>=1&&(e.refreshedUponExpiration=!1),i?{opacity:1,mix:1-f}:{opacity:f,mix:0}}return{opacity:1,mix:0}}function Ri(e,i,n){var o=e.context,a=o.gl;o.lineWidth.set(1*r.devicePixelRatio);var s=n.posMatrix,l=e.useProgram("debug");o.setDepthMode($t.disabled),o.setStencilMode(Gt.disabled),o.setColorMode(e.colorModeForRenderPass()),a.uniformMatrix4fv(l.uniforms.u_matrix,!1,s),a.uniform4f(l.uniforms.u_color,1,0,0,1),e.debugVAO.bind(o,l,e.debugBuffer,[]),a.drawArrays(a.LINE_STRIP,0,e.debugBuffer.length);for(var c=function(t,e,i,n){n=n||1;var o,r,a,s,l,c,u,h,p=[];for(o=0,r=t.length;o<r;o++)if(l=Di[t[o]]){for(h=null,a=0,s=l[1].length;a<s;a+=2)-1===l[1][a]&&-1===l[1][a+1]?h=null:(c=e+l[1][a]*n,u=i-l[1][a+1]*n,h&&p.push(h.x,h.y,c,u),h={x:c,y:u});e+=l[0]*n;}return p}(n.toString(),50,200,5),u=new t.PosArray,h=0;h<c.length;h+=2)u.emplaceBack(c[h],c[h+1]);var p=o.createVertexBuffer(u,ti.members);(new tt).bind(o,l,p,[]),a.uniform4f(l.uniforms.u_color,1,1,1,1);for(var d=i.getTile(n).tileSize,f=t.default$8/(Math.pow(2,e.transform.zoom-n.overscaledZ)*d),m=[[-1,-1],[-1,1],[1,-1],[1,1]],_=0;_<m.length;_++){var g=m[_];a.uniformMatrix4fv(l.uniforms.u_matrix,!1,t.mat4.translate([],s,[f*g[0],f*g[1],0])),a.drawArrays(a.LINES,0,p.length);}a.uniform4f(l.uniforms.u_color,0,0,0,1),a.uniformMatrix4fv(l.uniforms.u_matrix,!1,s),a.drawArrays(a.LINES,0,p.length);}var Di={" ":[16,[]],"!":[10,[5,21,5,7,-1,-1,5,2,4,1,5,0,6,1,5,2]],'"':[16,[4,21,4,14,-1,-1,12,21,12,14]],"#":[21,[11,25,4,-7,-1,-1,17,25,10,-7,-1,-1,4,12,18,12,-1,-1,3,6,17,6]],$:[20,[8,25,8,-4,-1,-1,12,25,12,-4,-1,-1,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],"%":[24,[21,21,3,0,-1,-1,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,-1,-1,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7]],"&":[26,[23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2]],"'":[10,[5,19,4,20,5,21,6,20,6,18,5,16,4,15]],"(":[14,[11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7]],")":[14,[3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7]],"*":[16,[8,21,8,9,-1,-1,3,18,13,12,-1,-1,13,18,3,12]],"+":[26,[13,18,13,0,-1,-1,4,9,22,9]],",":[10,[6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"-":[26,[4,9,22,9]],".":[10,[5,2,4,1,5,0,6,1,5,2]],"/":[22,[20,25,2,-7]],0:[20,[9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21]],1:[20,[6,17,8,18,11,21,11,0]],2:[20,[4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0]],3:[20,[5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],4:[20,[13,21,3,7,18,7,-1,-1,13,21,13,0]],5:[20,[15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],6:[20,[16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7]],7:[20,[17,21,7,0,-1,-1,3,21,17,21]],8:[20,[8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21]],9:[20,[16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3]],":":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,5,2,4,1,5,0,6,1,5,2]],";":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"<":[24,[20,18,4,9,20,0]],"=":[26,[4,12,22,12,-1,-1,4,6,22,6]],">":[24,[4,18,20,9,4,0]],"?":[18,[3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,-1,-1,9,2,8,1,9,0,10,1,9,2]],"@":[27,[18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,-1,-1,12,16,10,14,9,11,9,8,10,6,11,5,-1,-1,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,-1,-1,19,16,18,8,18,6,19,5]],A:[18,[9,21,1,0,-1,-1,9,21,17,0,-1,-1,4,7,14,7]],B:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,-1,-1,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0]],C:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5]],D:[21,[4,21,4,0,-1,-1,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0]],E:[19,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11,-1,-1,4,0,17,0]],F:[18,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11]],G:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,-1,-1,13,8,18,8]],H:[22,[4,21,4,0,-1,-1,18,21,18,0,-1,-1,4,11,18,11]],I:[8,[4,21,4,0]],J:[16,[12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7]],K:[21,[4,21,4,0,-1,-1,18,21,4,7,-1,-1,9,12,18,0]],L:[17,[4,21,4,0,-1,-1,4,0,16,0]],M:[24,[4,21,4,0,-1,-1,4,21,12,0,-1,-1,20,21,12,0,-1,-1,20,21,20,0]],N:[22,[4,21,4,0,-1,-1,4,21,18,0,-1,-1,18,21,18,0]],O:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21]],P:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10]],Q:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,-1,-1,12,4,18,-2]],R:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,-1,-1,11,11,18,0]],S:[20,[17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],T:[16,[8,21,8,0,-1,-1,1,21,15,21]],U:[22,[4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21]],V:[18,[1,21,9,0,-1,-1,17,21,9,0]],W:[24,[2,21,7,0,-1,-1,12,21,7,0,-1,-1,12,21,17,0,-1,-1,22,21,17,0]],X:[20,[3,21,17,0,-1,-1,17,21,3,0]],Y:[18,[1,21,9,11,9,0,-1,-1,17,21,9,11]],Z:[20,[17,21,3,0,-1,-1,3,21,17,21,-1,-1,3,0,17,0]],"[":[14,[4,25,4,-7,-1,-1,5,25,5,-7,-1,-1,4,25,11,25,-1,-1,4,-7,11,-7]],"\\":[14,[0,21,14,-3]],"]":[14,[9,25,9,-7,-1,-1,10,25,10,-7,-1,-1,3,25,10,25,-1,-1,3,-7,10,-7]],"^":[16,[6,15,8,18,10,15,-1,-1,3,12,8,17,13,12,-1,-1,8,17,8,0]],_:[16,[0,-2,16,-2]],"`":[10,[6,21,5,20,4,18,4,16,5,15,6,16,5,17]],a:[19,[15,14,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],b:[19,[4,21,4,0,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],c:[18,[15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],d:[19,[15,21,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],e:[18,[3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],f:[12,[10,21,8,21,6,20,5,17,5,0,-1,-1,2,14,9,14]],g:[19,[15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],h:[19,[4,21,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],i:[8,[3,21,4,20,5,21,4,22,3,21,-1,-1,4,14,4,0]],j:[10,[5,21,6,20,7,21,6,22,5,21,-1,-1,6,14,6,-3,5,-6,3,-7,1,-7]],k:[17,[4,21,4,0,-1,-1,14,14,4,4,-1,-1,8,8,15,0]],l:[8,[4,21,4,0]],m:[30,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0,-1,-1,15,10,18,13,20,14,23,14,25,13,26,10,26,0]],n:[19,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],o:[19,[8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14]],p:[19,[4,14,4,-7,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],q:[19,[15,14,15,-7,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],r:[13,[4,14,4,0,-1,-1,4,8,5,11,7,13,9,14,12,14]],s:[17,[14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3]],t:[12,[5,21,5,4,6,1,8,0,10,0,-1,-1,2,14,9,14]],u:[19,[4,14,4,4,5,1,7,0,10,0,12,1,15,4,-1,-1,15,14,15,0]],v:[16,[2,14,8,0,-1,-1,14,14,8,0]],w:[22,[3,14,7,0,-1,-1,11,14,7,0,-1,-1,11,14,15,0,-1,-1,19,14,15,0]],x:[17,[3,14,14,0,-1,-1,14,14,3,0]],y:[16,[2,14,8,0,-1,-1,14,14,8,0,6,-4,4,-6,2,-7,1,-7]],z:[17,[14,14,3,0,-1,-1,3,14,14,14,-1,-1,3,0,14,0]],"{":[14,[9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,-1,-1,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,-1,-1,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7]],"|":[8,[4,25,4,-7]],"}":[14,[5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,-1,-1,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,-1,-1,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7]],"~":[24,[3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,-1,-1,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]]};var Mi={symbol:function(t,e,i,n){if("translucent"===t.renderPass){var o=t.context;o.setStencilMode(Gt.disabled),o.setColorMode(t.colorModeForRenderPass()),0!==i.paint.get("icon-opacity").constantOr(1)&&hi(t,e,i,n,!1,i.paint.get("icon-translate"),i.paint.get("icon-translate-anchor"),i.layout.get("icon-rotation-alignment"),i.layout.get("icon-pitch-alignment"),i.layout.get("icon-keep-upright")),0!==i.paint.get("text-opacity").constantOr(1)&&hi(t,e,i,n,!0,i.paint.get("text-translate"),i.paint.get("text-translate-anchor"),i.layout.get("text-rotation-alignment"),i.layout.get("text-pitch-alignment"),i.layout.get("text-keep-upright")),e.map.showCollisionBoxes&&function(t,e,i,n){li(t,e,i,n,!1),li(t,e,i,n,!0);}(t,e,i,n);}},circle:function(t,e,i,n){if("translucent"===t.renderPass){var o=i.paint.get("circle-opacity"),r=i.paint.get("circle-stroke-width"),a=i.paint.get("circle-stroke-opacity");if(0!==o.constantOr(1)||0!==r.constantOr(1)&&0!==a.constantOr(1)){var s=t.context,l=s.gl;s.setDepthMode(t.depthModeForSublayer(0,$t.ReadOnly)),s.setStencilMode(Gt.disabled),s.setColorMode(t.colorModeForRenderPass());for(var c=!0,u=0;u<n.length;u++){var h=n[u],p=e.getTile(h),d=p.getBucket(i);if(d){var f=t.context.program.get(),m=d.programConfigurations.get(i.id),_=t.useProgram("circle",m);if((c||_.program!==f)&&(m.setUniforms(s,_,i.paint,{zoom:t.transform.zoom}),c=!1),l.uniform1f(_.uniforms.u_camera_to_center_distance,t.transform.cameraToCenterDistance),l.uniform1i(_.uniforms.u_scale_with_map,"map"===i.paint.get("circle-pitch-scale")?1:0),"map"===i.paint.get("circle-pitch-alignment")){l.uniform1i(_.uniforms.u_pitch_with_map,1);var g=ze(p,1,t.transform.zoom);l.uniform2f(_.uniforms.u_extrude_scale,g,g);}else l.uniform1i(_.uniforms.u_pitch_with_map,0),l.uniform2fv(_.uniforms.u_extrude_scale,t.transform.pixelsToGLUnits);l.uniformMatrix4fv(_.uniforms.u_matrix,!1,t.translatePosMatrix(h.posMatrix,p,i.paint.get("circle-translate"),i.paint.get("circle-translate-anchor"))),_.draw(s,l.TRIANGLES,i.id,d.layoutVertexBuffer,d.indexBuffer,d.segments,m);}}}}},heatmap:function(e,i,n,o){if(0!==n.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){var r=e.context,a=r.gl;r.setDepthMode(e.depthModeForSublayer(0,$t.ReadOnly)),r.setStencilMode(Gt.disabled),function(t,e,i){var n=t.gl;t.activeTexture.set(n.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4]);var o=i.heatmapFbo;if(o)n.bindTexture(n.TEXTURE_2D,o.colorAttachment.get()),t.bindFramebuffer.set(o.framebuffer);else{var r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),o=i.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4),function t(e,i,n,o){var r=e.gl;r.texImage2D(r.TEXTURE_2D,0,r.RGBA,i.width/4,i.height/4,0,r.RGBA,e.extTextureHalfFloat?e.extTextureHalfFloat.HALF_FLOAT_OES:r.UNSIGNED_BYTE,null),o.colorAttachment.set(n),e.extTextureHalfFloat&&r.checkFramebufferStatus(r.FRAMEBUFFER)!==r.FRAMEBUFFER_COMPLETE&&(e.extTextureHalfFloat=null,o.colorAttachment.setDirty(),t(e,i,n,o));}(t,e,r,o);}}(r,e,n),r.clear({color:t.default$6.transparent}),r.setColorMode(new Wt([a.ONE,a.ONE],t.default$6.transparent,[!0,!0,!0,!0]));for(var s=!0,l=0;l<o.length;l++){var c=o[l];if(!i.hasRenderableParent(c)){var u=i.getTile(c),h=u.getBucket(n);if(h){var p=e.context.program.get(),d=h.programConfigurations.get(n.id),f=e.useProgram("heatmap",d),m=e.transform.zoom;(s||f.program!==p)&&(d.setUniforms(e.context,f,n.paint,{zoom:m}),s=!1),a.uniform1f(f.uniforms.u_extrude_scale,ze(u,1,m)),a.uniform1f(f.uniforms.u_intensity,n.paint.get("heatmap-intensity")),a.uniformMatrix4fv(f.uniforms.u_matrix,!1,c.posMatrix),f.draw(r,a.TRIANGLES,n.id,h.layoutVertexBuffer,h.indexBuffer,h.segments,d);}}}r.viewport.set([0,0,e.width,e.height]);}else"translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,i){var n=e.context,o=n.gl,r=i.heatmapFbo;if(r){n.activeTexture.set(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,r.colorAttachment.get()),n.activeTexture.set(o.TEXTURE1);var a=i.colorRampTexture;a||(a=i.colorRampTexture=new M(n,i.colorRamp,o.RGBA)),a.bind(o.LINEAR,o.CLAMP_TO_EDGE),n.setDepthMode($t.disabled);var s=e.useProgram("heatmapTexture"),l=i.paint.get("heatmap-opacity");o.uniform1f(s.uniforms.u_opacity,l),o.uniform1i(s.uniforms.u_image,0),o.uniform1i(s.uniforms.u_color_ramp,1);var c=t.mat4.create();t.mat4.ortho(c,0,e.width,e.height,0,0,1),o.uniformMatrix4fv(s.uniforms.u_matrix,!1,c),o.uniform2f(s.uniforms.u_world,o.drawingBufferWidth,o.drawingBufferHeight),e.viewportVAO.bind(e.context,s,e.viewportBuffer,[]),o.drawArrays(o.TRIANGLE_STRIP,0,4);}}(e,n));},line:function(t,e,i,n){if("translucent"===t.renderPass&&0!==i.paint.get("line-opacity").constantOr(1)){var o=t.context;o.setDepthMode(t.depthModeForSublayer(0,$t.ReadOnly)),o.setColorMode(t.colorModeForRenderPass());for(var r,a=i.paint.get("line-dasharray")?"lineSDF":i.paint.get("line-pattern")?"linePattern":i.paint.get("line-gradient")?"lineGradient":"line",s=!0,l=0,c=n;l<c.length;l+=1){var u=c[l],h=e.getTile(u),p=h.getBucket(i);if(p){var d=p.programConfigurations.get(i.id),f=t.context.program.get(),m=t.useProgram(a,d),_=s||m.program!==f,g=r!==h.tileID.overscaledZ;_&&d.setUniforms(t.context,m,i.paint,{zoom:t.transform.zoom}),mi(m,t,h,p,i,u,d,_,g),r=h.tileID.overscaledZ,s=!1;}}}},fill:function(e,i,n,o){var r=n.paint.get("fill-color"),a=n.paint.get("fill-opacity");if(0!==a.constantOr(1)){var s=e.context;s.setColorMode(e.colorModeForRenderPass());var l=n.paint.get("fill-pattern")||1!==r.constantOr(t.default$6.transparent).a||1!==a.constantOr(0)?"translucent":"opaque";e.renderPass===l&&(s.setDepthMode(e.depthModeForSublayer(1,"opaque"===e.renderPass?$t.ReadWrite:$t.ReadOnly)),yi(e,i,n,o,xi)),"translucent"===e.renderPass&&n.paint.get("fill-antialias")&&(s.lineWidth.set(2),s.setDepthMode(e.depthModeForSublayer(n.getPaintProperty("fill-outline-color")?2:0,$t.ReadOnly)),yi(e,i,n,o,bi));}},"fill-extrusion":function(e,i,n,o){if(0!==n.paint.get("fill-extrusion-opacity"))if("offscreen"===e.renderPass){!function(e,i){var n=e.context,o=n.gl,r=i.viewportFrame;if(e.depthRboNeedsClear&&e.setupOffscreenDepthRenderbuffer(),!r){var a=new M(n,{width:e.width,height:e.height,data:null},o.RGBA);a.bind(o.LINEAR,o.CLAMP_TO_EDGE),(r=i.viewportFrame=n.createFramebuffer(e.width,e.height)).colorAttachment.set(a.texture);}n.bindFramebuffer.set(r.framebuffer),r.depthAttachment.set(e.depthRbo),e.depthRboNeedsClear&&(n.clear({depth:1}),e.depthRboNeedsClear=!1),n.clear({color:t.default$6.transparent}),n.setStencilMode(Gt.disabled),n.setDepthMode(new $t(o.LEQUAL,$t.ReadWrite,[0,1])),n.setColorMode(e.colorModeForRenderPass());}(e,n);for(var r=!0,a=0,s=o;a<s.length;a+=1){var l=s[a],c=i.getTile(l),u=c.getBucket(n);u&&(Ci(e,0,n,c,l,u,r),r=!1);}}else"translucent"===e.renderPass&&function(t,e){var i=e.viewportFrame;if(i){var n=t.context,o=n.gl,r=t.useProgram("extrusionTexture");n.setStencilMode(Gt.disabled),n.setDepthMode($t.disabled),n.setColorMode(t.colorModeForRenderPass()),n.activeTexture.set(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,i.colorAttachment.get()),o.uniform1f(r.uniforms.u_opacity,e.paint.get("fill-extrusion-opacity")),o.uniform1i(r.uniforms.u_image,0);var a=Ti.create();Ti.ortho(a,0,t.width,t.height,0,0,1),o.uniformMatrix4fv(r.uniforms.u_matrix,!1,a),o.uniform2f(r.uniforms.u_world,o.drawingBufferWidth,o.drawingBufferHeight),t.viewportVAO.bind(n,r,t.viewportBuffer,[]),o.drawArrays(o.TRIANGLE_STRIP,0,4);}}(e,n);},hillshade:function(t,e,i,n){if("offscreen"===t.renderPass||"translucent"===t.renderPass){var o=t.context,r=e.getSource().maxzoom;o.setDepthMode(t.depthModeForSublayer(0,$t.ReadOnly)),o.setStencilMode(Gt.disabled),o.setColorMode(t.colorModeForRenderPass());for(var a=0,s=n;a<s.length;a+=1){var l=s[a],c=e.getTile(l);c.needsHillshadePrepare&&"offscreen"===t.renderPass?zi(t,c,r):"translucent"===t.renderPass&&Si(t,c,i);}o.viewport.set([0,0,t.width,t.height]);}},raster:function(t,e,i,n){if("translucent"===t.renderPass&&0!==i.paint.get("raster-opacity")){var o,r,a=t.context,s=a.gl,l=e.getSource(),c=t.useProgram("raster");a.setStencilMode(Gt.disabled),a.setColorMode(t.colorModeForRenderPass()),s.uniform1f(c.uniforms.u_brightness_low,i.paint.get("raster-brightness-min")),s.uniform1f(c.uniforms.u_brightness_high,i.paint.get("raster-brightness-max")),s.uniform1f(c.uniforms.u_saturation_factor,(o=i.paint.get("raster-saturation"))>0?1-1/(1.001-o):-o),s.uniform1f(c.uniforms.u_contrast_factor,(r=i.paint.get("raster-contrast"))>0?1/(1-r):1+r),s.uniform3fv(c.uniforms.u_spin_weights,function(t){t*=Math.PI/180;var e=Math.sin(t),i=Math.cos(t);return[(2*i+1)/3,(-Math.sqrt(3)*e-i+1)/3,(Math.sqrt(3)*e-i+1)/3]}(i.paint.get("raster-hue-rotate"))),s.uniform1f(c.uniforms.u_buffer_scale,1),s.uniform1i(c.uniforms.u_image0,0),s.uniform1i(c.uniforms.u_image1,1);for(var u=n.length&&n[0].overscaledZ,h=0,p=n;h<p.length;h+=1){var d=p[h];a.setDepthMode(t.depthModeForSublayer(d.overscaledZ-u,1===i.paint.get("raster-opacity")?$t.ReadWrite:$t.ReadOnly,s.LESS));var f=e.getTile(d),m=t.transform.calculatePosMatrix(d.toUnwrapped(),!0);f.registerFadeDuration(i.paint.get("raster-fade-duration")),s.uniformMatrix4fv(c.uniforms.u_matrix,!1,m);var _=e.findLoadedParent(d,0,{}),g=Ai(f,_,e,i,t.transform),v=void 0,y=void 0;if(a.activeTexture.set(s.TEXTURE0),f.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),a.activeTexture.set(s.TEXTURE1),_?(_.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),v=Math.pow(2,_.tileID.overscaledZ-f.tileID.overscaledZ),y=[f.tileID.canonical.x*v%1,f.tileID.canonical.y*v%1]):f.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),s.uniform2fv(c.uniforms.u_tl_parent,y||[0,0]),s.uniform1f(c.uniforms.u_scale_parent,v||1),s.uniform1f(c.uniforms.u_fade_t,g.mix),s.uniform1f(c.uniforms.u_opacity,g.opacity*i.paint.get("raster-opacity")),l instanceof et){var x=l.boundsBuffer;l.boundsVAO.bind(a,c,x,[]),s.drawArrays(s.TRIANGLE_STRIP,0,x.length);}else if(f.maskedBoundsBuffer&&f.maskedIndexBuffer&&f.segments)c.draw(a,s.TRIANGLES,i.id,f.maskedBoundsBuffer,f.maskedIndexBuffer,f.segments);else{var b=t.rasterBoundsBuffer;t.rasterBoundsVAO.bind(a,c,b,[]),s.drawArrays(s.TRIANGLE_STRIP,0,b.length);}}}},background:function(t,e,i){var n=i.paint.get("background-color"),o=i.paint.get("background-opacity");if(0!==o){var r=t.context,a=r.gl,s=t.transform,l=s.tileSize,c=i.paint.get("background-pattern"),u=c||1!==n.a||1!==o?"translucent":"opaque";if(t.renderPass===u){var h;if(r.setStencilMode(Gt.disabled),r.setDepthMode(t.depthModeForSublayer(0,"opaque"===u?$t.ReadWrite:$t.ReadOnly)),r.setColorMode(t.colorModeForRenderPass()),c){if(_i(c,t))return;h=t.useProgram("backgroundPattern"),gi(c,t,h),t.tileExtentPatternVAO.bind(r,h,t.tileExtentBuffer,[]);}else h=t.useProgram("background"),a.uniform4fv(h.uniforms.u_color,[n.r,n.g,n.b,n.a]),t.tileExtentVAO.bind(r,h,t.tileExtentBuffer,[]);a.uniform1f(h.uniforms.u_opacity,o);for(var p=0,d=s.coveringTiles({tileSize:l});p<d.length;p+=1){var f=d[p];c&&vi({tileID:f,tileSize:l},t,h),a.uniformMatrix4fv(h.uniforms.u_matrix,!1,t.transform.calculatePosMatrix(f.toUnwrapped())),a.drawArrays(a.TRIANGLE_STRIP,0,t.tileExtentBuffer.length);}}}},debug:function(t,e,i){for(var n=0;n<i.length;n++)Ri(t,e,i[n]);}},Li=function(e,i){this.context=new qt(e),this.transform=i,this._tileTextures={},this.setup(),this.numSublayers=Xt.maxUnderzooming+Xt.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.depthRboNeedsClear=!0,this.emptyProgramConfiguration=new t.default$24,this.crossTileSymbolIndex=new He;};function Pi(t,e){if(t.row>e.row){var i=t;t=e,e=i;}return{x0:t.column,y0:t.row,x1:e.column,y1:e.row,dx:e.column-t.column,dy:e.row-t.row}}function ki(t,e,i,n,o){var r=Math.max(i,Math.floor(e.y0)),a=Math.min(n,Math.ceil(e.y1));if(t.x0===e.x0&&t.y0===e.y0?t.x0+e.dy/t.dy*t.dx<e.x1:t.x1-e.dy/t.dy*t.dx<e.x0){var s=t;t=e,e=s;}for(var l=t.dx/t.dy,c=e.dx/e.dy,u=t.dx>0,h=e.dx<0,p=r;p<a;p++){var d=l*Math.max(0,Math.min(t.dy,p+u-t.y0))+t.x0,f=c*Math.max(0,Math.min(e.dy,p+h-e.y0))+e.x0;o(Math.floor(f),Math.ceil(d),p);}}function Bi(t,e,i,n,o,r){var a,s=Pi(t,e),l=Pi(e,i),c=Pi(i,t);s.dy>l.dy&&(a=s,s=l,l=a),s.dy>c.dy&&(a=s,s=c,c=a),l.dy>c.dy&&(a=l,l=c,c=a),s.dy&&ki(c,s,n,o,r),l.dy&&ki(c,l,n,o,r);}Li.prototype.resize=function(t,e){var i=this.context.gl;if(this.width=t*r.devicePixelRatio,this.height=e*r.devicePixelRatio,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(var n=0,o=this.style._order;n<o.length;n+=1){var a=o[n];this.style._layers[a].resize();}this.depthRbo&&(i.deleteRenderbuffer(this.depthRbo),this.depthRbo=null);},Li.prototype.setup=function(){var e=this.context,i=new t.PosArray;i.emplaceBack(0,0),i.emplaceBack(t.default$8,0),i.emplaceBack(0,t.default$8),i.emplaceBack(t.default$8,t.default$8),this.tileExtentBuffer=e.createVertexBuffer(i,ti.members),this.tileExtentVAO=new tt,this.tileExtentPatternVAO=new tt;var n=new t.PosArray;n.emplaceBack(0,0),n.emplaceBack(t.default$8,0),n.emplaceBack(t.default$8,t.default$8),n.emplaceBack(0,t.default$8),n.emplaceBack(0,0),this.debugBuffer=e.createVertexBuffer(n,ti.members),this.debugVAO=new tt;var o=new t.RasterBoundsArray;o.emplaceBack(0,0,0,0),o.emplaceBack(t.default$8,0,t.default$8,0),o.emplaceBack(0,t.default$8,0,t.default$8),o.emplaceBack(t.default$8,t.default$8,t.default$8,t.default$8),this.rasterBoundsBuffer=e.createVertexBuffer(o,Q.members),this.rasterBoundsVAO=new tt;var r=new t.PosArray;r.emplaceBack(0,0),r.emplaceBack(1,0),r.emplaceBack(0,1),r.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(r,ti.members),this.viewportVAO=new tt;},Li.prototype.clearStencil=function(){var e=this.context,i=e.gl;e.setColorMode(Wt.disabled),e.setDepthMode($t.disabled),e.setStencilMode(new Gt({func:i.ALWAYS,mask:0},0,255,i.ZERO,i.ZERO,i.ZERO));var n=t.mat4.create();t.mat4.ortho(n,0,this.width,this.height,0,0,1),t.mat4.scale(n,n,[i.drawingBufferWidth,i.drawingBufferHeight,0]);var o=this.useProgram("clippingMask");i.uniformMatrix4fv(o.uniforms.u_matrix,!1,n),this.viewportVAO.bind(e,o,this.viewportBuffer,[]),i.drawArrays(i.TRIANGLE_STRIP,0,4);},Li.prototype._renderTileClippingMasks=function(t){var e=this.context,i=e.gl;e.setColorMode(Wt.disabled),e.setDepthMode($t.disabled);var n=1;this._tileClippingMaskIDs={};for(var o=0,r=t;o<r.length;o+=1){var a=r[o],s=this._tileClippingMaskIDs[a.key]=n++;e.setStencilMode(new Gt({func:i.ALWAYS,mask:0},s,255,i.KEEP,i.KEEP,i.REPLACE));var l=this.useProgram("clippingMask");i.uniformMatrix4fv(l.uniforms.u_matrix,!1,a.posMatrix),this.tileExtentVAO.bind(this.context,l,this.tileExtentBuffer,[]),i.drawArrays(i.TRIANGLE_STRIP,0,this.tileExtentBuffer.length);}},Li.prototype.stencilModeForClipping=function(t){var e=this.context.gl;return new Gt({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)},Li.prototype.colorModeForRenderPass=function(){var e=this.context.gl;if(this._showOverdrawInspector){return new Wt([e.CONSTANT_COLOR,e.ONE],new t.default$6(1/8,1/8,1/8,0),[!0,!0,!0,!0])}return"opaque"===this.renderPass?Wt.unblended:Wt.alphaBlended},Li.prototype.depthModeForSublayer=function(t,e,i){var n=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon,o=n-1+this.depthRange;return new $t(i||this.context.gl.LEQUAL,e,[o,n])},Li.prototype.render=function(e,i){var n=this;for(var o in this.style=e,this.options=i,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(r.now()),e.sourceCaches){var a=n.style.sourceCaches[o];a.used&&a.prepare(n.context);}var s=this.style._order,l=t.filterObject(this.style.sourceCaches,function(t){return"raster"===t.getSource().type||"raster-dem"===t.getSource().type}),c=function(e){var i=l[e];!function(e,i){for(var n=e.sort(function(t,e){return t.tileID.isLessThan(e.tileID)?-1:e.tileID.isLessThan(t.tileID)?1:0}),o=0;o<n.length;o++){var r={},a=n[o],s=n.slice(o+1);si(a.tileID.wrapped(),a.tileID,s,new t.OverscaledTileID(0,a.tileID.wrap+1,0,0,0),r),a.setMask(r,i);}}(i.getVisibleCoordinates().map(function(t){return i.getTile(t)}),n.context);};for(var u in l)c(u);this.renderPass="offscreen";var h,p=[];this.depthRboNeedsClear=!0;for(var d=0;d<s.length;d++){var f=n.style._layers[s[d]];f.hasOffscreenPass()&&!f.isHidden(n.transform.zoom)&&(f.source!==(h&&h.id)&&(p=[],(h=n.style.sourceCaches[f.source])&&(p=h.getVisibleCoordinates()).reverse()),p.length&&n.renderLayer(n,h,f,p));}this.context.bindFramebuffer.set(null),this.context.clear({color:i.showOverdrawInspector?t.default$6.black:t.default$6.transparent,depth:1}),this._showOverdrawInspector=i.showOverdrawInspector,this.depthRange=(e._order.length+2)*this.numSublayers*this.depthEpsilon,this.renderPass="opaque";var m,_=[];for(this.currentLayer=s.length-1,this.currentLayer;this.currentLayer>=0;this.currentLayer--){var g=n.style._layers[s[n.currentLayer]];g.source!==(m&&m.id)&&(_=[],(m=n.style.sourceCaches[g.source])&&(n.clearStencil(),_=m.getVisibleCoordinates(),m.getSource().isTileClipped&&n._renderTileClippingMasks(_))),n.renderLayer(n,m,g,_);}this.renderPass="translucent";var v,y=[];for(this.currentLayer=0,this.currentLayer;this.currentLayer<s.length;this.currentLayer++){var x=n.style._layers[s[n.currentLayer]];x.source!==(v&&v.id)&&(y=[],(v=n.style.sourceCaches[x.source])&&(n.clearStencil(),y=v.getVisibleCoordinates(),v.getSource().isTileClipped&&n._renderTileClippingMasks(y)),y.reverse()),n.renderLayer(n,v,x,y);}if(this.options.showTileBoundaries){var b=this.style.sourceCaches[Object.keys(this.style.sourceCaches)[0]];b&&Mi.debug(this,b,b.getVisibleCoordinates());}},Li.prototype.setupOffscreenDepthRenderbuffer=function(){var t=this.context;this.depthRbo||(this.depthRbo=t.createRenderbuffer(t.gl.DEPTH_COMPONENT16,this.width,this.height));},Li.prototype.renderLayer=function(t,e,i,n){i.isHidden(this.transform.zoom)||("background"===i.type||n.length)&&(this.id=i.id,Mi[i.type](t,e,i,n));},Li.prototype.translatePosMatrix=function(e,i,n,o,r){if(!n[0]&&!n[1])return e;var a=r?"map"===o?this.transform.angle:0:"viewport"===o?-this.transform.angle:0;if(a){var s=Math.sin(a),l=Math.cos(a);n=[n[0]*l-n[1]*s,n[0]*s+n[1]*l];}var c=[r?n[0]:ze(i,n[0],this.transform.zoom),r?n[1]:ze(i,n[1],this.transform.zoom),0],u=new Float32Array(16);return t.mat4.translate(u,e,c),u},Li.prototype.saveTileTexture=function(t){var e=this._tileTextures[t.size[0]];e?e.push(t):this._tileTextures[t.size[0]]=[t];},Li.prototype.getTileTexture=function(t){var e=this._tileTextures[t];return e&&e.length>0?e.pop():null},Li.prototype._createProgramCached=function(t,e){this.cache=this.cache||{};var i=""+t+(e.cacheKey||"")+(this._showOverdrawInspector?"/overdraw":"");return this.cache[i]||(this.cache[i]=new ai(this.context,ri[t],e,this._showOverdrawInspector)),this.cache[i]},Li.prototype.useProgram=function(t,e){var i=this._createProgramCached(t,e||this.emptyProgramConfiguration);return this.context.program.set(i.program),i};var Oi=t.default$20.vec4,Fi=t.default$20.mat4,Ni=t.default$20.mat2,Ui=function(t,e,i){this.tileSize=512,this._renderWorldCopies=void 0===i||i,this._minZoom=t||0,this._maxZoom=e||22,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this._center=new W(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._posMatrixCache={},this._alignedPosMatrixCache={};},Zi={minZoom:{configurable:!0},maxZoom:{configurable:!0},renderWorldCopies:{configurable:!0},worldSize:{configurable:!0},centerPoint:{configurable:!0},size:{configurable:!0},bearing:{configurable:!0},pitch:{configurable:!0},fov:{configurable:!0},zoom:{configurable:!0},center:{configurable:!0},unmodified:{configurable:!0},x:{configurable:!0},y:{configurable:!0},point:{configurable:!0}};Ui.prototype.clone=function(){var t=new Ui(this._minZoom,this._maxZoom,this._renderWorldCopies);return t.tileSize=this.tileSize,t.latRange=this.latRange,t.width=this.width,t.height=this.height,t._center=this._center,t.zoom=this.zoom,t.angle=this.angle,t._fov=this._fov,t._pitch=this._pitch,t._unmodified=this._unmodified,t._calcMatrices(),t},Zi.minZoom.get=function(){return this._minZoom},Zi.minZoom.set=function(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t));},Zi.maxZoom.get=function(){return this._maxZoom},Zi.maxZoom.set=function(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t));},Zi.renderWorldCopies.get=function(){return this._renderWorldCopies},Zi.renderWorldCopies.set=function(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t;},Zi.worldSize.get=function(){return this.tileSize*this.scale},Zi.centerPoint.get=function(){return this.size._div(2)},Zi.size.get=function(){return new t.default$1(this.width,this.height)},Zi.bearing.get=function(){return-this.angle/Math.PI*180},Zi.bearing.set=function(e){var i=-t.wrap(e,-180,180)*Math.PI/180;this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=Ni.create(),Ni.rotate(this.rotationMatrix,this.rotationMatrix,this.angle));},Zi.pitch.get=function(){return this._pitch/Math.PI*180},Zi.pitch.set=function(e){var i=t.clamp(e,0,60)/180*Math.PI;this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices());},Zi.fov.get=function(){return this._fov/Math.PI*180},Zi.fov.set=function(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices());},Zi.zoom.get=function(){return this._zoom},Zi.zoom.set=function(t){var e=Math.min(Math.max(t,this.minZoom),this.maxZoom);this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.scale=this.zoomScale(e),this.tileZoom=Math.floor(e),this.zoomFraction=e-this.tileZoom,this._constrain(),this._calcMatrices());},Zi.center.get=function(){return this._center},Zi.center.set=function(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices());},Ui.prototype.coveringZoomLevel=function(t){return(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))},Ui.prototype.getVisibleUnwrappedCoordinates=function(e){var i=this.pointCoordinate(new t.default$1(0,0),0),n=this.pointCoordinate(new t.default$1(this.width,0),0),o=Math.floor(i.column),r=Math.floor(n.column),a=[new t.UnwrappedTileID(0,e)];if(this._renderWorldCopies)for(var s=o;s<=r;s++)0!==s&&a.push(new t.UnwrappedTileID(s,e));return a},Ui.prototype.coveringTiles=function(e){var i=this.coveringZoomLevel(e),n=i;if(void 0!==e.minzoom&&i<e.minzoom)return[];void 0!==e.maxzoom&&i>e.maxzoom&&(i=e.maxzoom);var o=this.pointCoordinate(this.centerPoint,i),r=new t.default$1(o.column-.5,o.row-.5);return function(e,i,n,o){void 0===o&&(o=!0);var r=1<<e,a={};function s(i,s,l){var c,u,h,p;if(l>=0&&l<=r)for(c=i;c<s;c++)u=Math.floor(c/r),h=(c%r+r)%r,0!==u&&!0!==o||(p=new t.OverscaledTileID(n,u,e,h,l),a[p.key]=p);}return Bi(i[0],i[1],i[2],0,r,s),Bi(i[2],i[3],i[0],0,r,s),Object.keys(a).map(function(t){return a[t]})}(i,[this.pointCoordinate(new t.default$1(0,0),i),this.pointCoordinate(new t.default$1(this.width,0),i),this.pointCoordinate(new t.default$1(this.width,this.height),i),this.pointCoordinate(new t.default$1(0,this.height),i)],e.reparseOverscaled?n:i,this._renderWorldCopies).sort(function(t,e){return r.dist(t.canonical)-r.dist(e.canonical)})},Ui.prototype.resize=function(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices();},Zi.unmodified.get=function(){return this._unmodified},Ui.prototype.zoomScale=function(t){return Math.pow(2,t)},Ui.prototype.scaleZoom=function(t){return Math.log(t)/Math.LN2},Ui.prototype.project=function(e){return new t.default$1(this.lngX(e.lng),this.latY(e.lat))},Ui.prototype.unproject=function(t){return new W(this.xLng(t.x),this.yLat(t.y))},Zi.x.get=function(){return this.lngX(this.center.lng)},Zi.y.get=function(){return this.latY(this.center.lat)},Zi.point.get=function(){return new t.default$1(this.x,this.y)},Ui.prototype.lngX=function(t){return(180+t)*this.worldSize/360},Ui.prototype.latY=function(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))*this.worldSize/360},Ui.prototype.xLng=function(t){return 360*t/this.worldSize-180},Ui.prototype.yLat=function(t){var e=180-360*t/this.worldSize;return 360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90},Ui.prototype.setLocationAtPoint=function(t,e){var i=this.pointCoordinate(e)._sub(this.pointCoordinate(this.centerPoint));this.center=this.coordinateLocation(this.locationCoordinate(t)._sub(i)),this._renderWorldCopies&&(this.center=this.center.wrap());},Ui.prototype.locationPoint=function(t){return this.coordinatePoint(this.locationCoordinate(t))},Ui.prototype.pointLocation=function(t){return this.coordinateLocation(this.pointCoordinate(t))},Ui.prototype.locationCoordinate=function(e){return new t.default$17(this.lngX(e.lng)/this.tileSize,this.latY(e.lat)/this.tileSize,this.zoom).zoomTo(this.tileZoom)},Ui.prototype.coordinateLocation=function(t){var e=t.zoomTo(this.zoom);return new W(this.xLng(e.column*this.tileSize),this.yLat(e.row*this.tileSize))},Ui.prototype.pointCoordinate=function(e,i){void 0===i&&(i=this.tileZoom);var n=[e.x,e.y,0,1],o=[e.x,e.y,1,1];Oi.transformMat4(n,n,this.pixelMatrixInverse),Oi.transformMat4(o,o,this.pixelMatrixInverse);var r=n[3],a=o[3],s=n[0]/r,l=o[0]/a,c=n[1]/r,u=o[1]/a,h=n[2]/r,p=o[2]/a,d=h===p?0:(0-h)/(p-h);return new t.default$17(t.number(s,l,d)/this.tileSize,t.number(c,u,d)/this.tileSize,this.zoom)._zoomTo(i)},Ui.prototype.coordinatePoint=function(e){var i=e.zoomTo(this.zoom),n=[i.column*this.tileSize,i.row*this.tileSize,0,1];return Oi.transformMat4(n,n,this.pixelMatrix),new t.default$1(n[0]/n[3],n[1]/n[3])},Ui.prototype.calculatePosMatrix=function(e,i){void 0===i&&(i=!1);var n=e.key,o=i?this._alignedPosMatrixCache:this._posMatrixCache;if(o[n])return o[n];var r=e.canonical,a=this.worldSize/this.zoomScale(r.z),s=r.x+Math.pow(2,r.z)*e.wrap,l=Fi.identity(new Float64Array(16));return Fi.translate(l,l,[s*a,r.y*a,0]),Fi.scale(l,l,[a/t.default$8,a/t.default$8,1]),Fi.multiply(l,i?this.alignedProjMatrix:this.projMatrix,l),o[n]=new Float32Array(l),o[n]},Ui.prototype._constrain=function(){if(this.center&&this.width&&this.height&&!this._constraining){this._constraining=!0;var e,i,n,o,r=-90,a=90,s=-180,l=180,c=this.size,u=this._unmodified;if(this.latRange){var h=this.latRange;r=this.latY(h[1]),e=(a=this.latY(h[0]))-r<c.y?c.y/(a-r):0;}if(this.lngRange){var p=this.lngRange;s=this.lngX(p[0]),i=(l=this.lngX(p[1]))-s<c.x?c.x/(l-s):0;}var d=Math.max(i||0,e||0);if(d)return this.center=this.unproject(new t.default$1(i?(l+s)/2:this.x,e?(a+r)/2:this.y)),this.zoom+=this.scaleZoom(d),this._unmodified=u,void(this._constraining=!1);if(this.latRange){var f=this.y,m=c.y/2;f-m<r&&(o=r+m),f+m>a&&(o=a-m);}if(this.lngRange){var _=this.x,g=c.x/2;_-g<s&&(n=s+g),_+g>l&&(n=l-g);}void 0===n&&void 0===o||(this.center=this.unproject(new t.default$1(void 0!==n?n:this.x,void 0!==o?o:this.y))),this._unmodified=u,this._constraining=!1;}},Ui.prototype._calcMatrices=function(){if(this.height){this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height;var t=this._fov/2,e=Math.PI/2+this._pitch,i=Math.sin(t)*this.cameraToCenterDistance/Math.sin(Math.PI-e-t),n=this.x,o=this.y,r=1.01*(Math.cos(Math.PI/2-this._pitch)*i+this.cameraToCenterDistance),a=new Float64Array(16);Fi.perspective(a,this._fov,this.width/this.height,1,r),Fi.scale(a,a,[1,-1,1]),Fi.translate(a,a,[0,0,-this.cameraToCenterDistance]),Fi.rotateX(a,a,this._pitch),Fi.rotateZ(a,a,this.angle),Fi.translate(a,a,[-n,-o,0]);var s=this.worldSize/(2*Math.PI*6378137*Math.abs(Math.cos(this.center.lat*(Math.PI/180))));Fi.scale(a,a,[1,1,s,1]),this.projMatrix=a;var l=this.width%2/2,c=this.height%2/2,u=Math.cos(this.angle),h=Math.sin(this.angle),p=n-Math.round(n)+u*l+h*c,d=o-Math.round(o)+u*c+h*l,f=new Float64Array(a);if(Fi.translate(f,f,[p>.5?p-1:p,d>.5?d-1:d,0]),this.alignedProjMatrix=f,a=Fi.create(),Fi.scale(a,a,[this.width/2,-this.height/2,1]),Fi.translate(a,a,[1,-1,0]),this.pixelMatrix=Fi.multiply(new Float64Array(16),a,this.projMatrix),!(a=Fi.invert(new Float64Array(16),this.pixelMatrix)))throw new Error("failed to invert matrix");this.pixelMatrixInverse=a,this._posMatrixCache={},this._alignedPosMatrixCache={};}},Ui.prototype.maxPitchScaleFactor=function(){if(!this.pixelMatrixInverse)return 1;var e=this.pointCoordinate(new t.default$1(0,0)).zoomTo(this.zoom),i=[e.column*this.tileSize,e.row*this.tileSize,0,1];return Oi.transformMat4(i,i,this.pixelMatrix)[3]/this.cameraToCenterDistance},Object.defineProperties(Ui.prototype,Zi);var Vi=function(){var e,i,n,o,r;t.bindAll(["_onHashChange","_updateHash"],this),this._updateHash=(e=this._updateHashUnthrottled.bind(this),i=300,n=!1,o=0,r=function(){o=0,n&&(e(),o=setTimeout(r,i),n=!1);},function(){return n=!0,o||r(),o});};Vi.prototype.addTo=function(e){return this._map=e,t.default.addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this},Vi.prototype.remove=function(){return t.default.removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this},Vi.prototype.getHashString=function(t){var e=this._map.getCenter(),i=Math.round(100*this._map.getZoom())/100,n=Math.ceil((i*Math.LN2+Math.log(512/360/.5))/Math.LN10),o=Math.pow(10,n),r=Math.round(e.lng*o)/o,a=Math.round(e.lat*o)/o,s=this._map.getBearing(),l=this._map.getPitch(),c="";return c+=t?"#/"+r+"/"+a+"/"+i:"#"+i+"/"+a+"/"+r,(s||l)&&(c+="/"+Math.round(10*s)/10),l&&(c+="/"+Math.round(l)),c},Vi.prototype._onHashChange=function(){var e=t.default.location.hash.replace("#","").split("/");return e.length>=3&&(this._map.jumpTo({center:[+e[2],+e[1]],zoom:+e[0],bearing:+(e[3]||0),pitch:+(e[4]||0)}),!0)},Vi.prototype._updateHashUnthrottled=function(){var e=this.getHashString();t.default.history.replaceState(t.default.history.state,"",e);};var ji=function(e){function i(i,n,o,r){void 0===r&&(r={});var a=s.mousePos(n.getCanvasContainer(),o),l=n.unproject(a);e.call(this,i,t.extend({point:a,lngLat:l,originalEvent:o},r)),this._defaultPrevented=!1,this.target=n;}e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i;var n={defaultPrevented:{configurable:!0}};return i.prototype.preventDefault=function(){this._defaultPrevented=!0;},n.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(i.prototype,n),i}(t.Event),$i=function(e){function i(i,n,o){var r=s.touchPos(n.getCanvasContainer(),o),a=r.map(function(t){return n.unproject(t)}),l=r.reduce(function(t,e,i,n){return t.add(e.div(n.length))},new t.default$1(0,0)),c=n.unproject(l);e.call(this,i,{points:r,point:l,lngLats:a,lngLat:c,originalEvent:o}),this._defaultPrevented=!1;}e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i;var n={defaultPrevented:{configurable:!0}};return i.prototype.preventDefault=function(){this._defaultPrevented=!0;},n.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(i.prototype,n),i}(t.Event),Gi=function(t){function e(e,i,n){t.call(this,e,{originalEvent:n}),this._defaultPrevented=!1;}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var i={defaultPrevented:{configurable:!0}};return e.prototype.preventDefault=function(){this._defaultPrevented=!0;},i.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(e.prototype,i),e}(t.Event),Wi=function(e){this._map=e,this._el=e.getCanvasContainer(),this._delta=0,t.bindAll(["_onWheel","_onTimeout","_onScrollFrame","_onScrollFinished"],this);};Wi.prototype.isEnabled=function(){return!!this._enabled},Wi.prototype.isActive=function(){return!!this._active},Wi.prototype.enable=function(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=t&&"center"===t.around);},Wi.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1);},Wi.prototype.onWheel=function(e){if(this.isEnabled()){var i=e.deltaMode===t.default.WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY,n=r.now(),o=n-(this._lastWheelEventTime||0);this._lastWheelEventTime=n,0!==i&&i%4.000244140625==0?this._type="wheel":0!==i&&Math.abs(i)<4?this._type="trackpad":o>400?(this._type=null,this._lastValue=i,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(o*i)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,i+=this._lastValue)),e.shiftKey&&i&&(i/=4),this._type&&(this._lastWheelEvent=e,this._delta-=i,this.isActive()||this._start(e)),e.preventDefault();}},Wi.prototype._onTimeout=function(t){this._type="wheel",this._delta-=this._lastValue,this.isActive()||this._start(t);},Wi.prototype._start=function(e){if(this._delta){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),this._active=!0,this._map.fire(new t.Event("movestart",{originalEvent:e})),this._map.fire(new t.Event("zoomstart",{originalEvent:e})),this._finishTimeout&&clearTimeout(this._finishTimeout);var i=s.mousePos(this._el,e);this._around=W.convert(this._aroundCenter?this._map.getCenter():this._map.unproject(i)),this._aroundPoint=this._map.transform.locationPoint(this._around),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onScrollFrame));}},Wi.prototype._onScrollFrame=function(){var e=this;if(this._frameId=null,this.isActive()){var i=this._map.transform;if(0!==this._delta){var n="wheel"===this._type&&Math.abs(this._delta)>4.000244140625?1/450:.01,o=2/(1+Math.exp(-Math.abs(this._delta*n)));this._delta<0&&0!==o&&(o=1/o);var a="number"==typeof this._targetZoom?i.zoomScale(this._targetZoom):i.scale;this._targetZoom=Math.min(i.maxZoom,Math.max(i.minZoom,i.scaleZoom(a*o))),"wheel"===this._type&&(this._startZoom=i.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0;}var s=!1;if("wheel"===this._type){var l=Math.min((r.now()-this._lastWheelEventTime)/200,1),c=this._easing(l);i.zoom=t.number(this._startZoom,this._targetZoom,c),l<1?this._frameId||(this._frameId=this._map._requestRenderFrame(this._onScrollFrame)):s=!0;}else i.zoom=this._targetZoom,s=!0;i.setLocationAtPoint(this._around,this._aroundPoint),this._map.fire(new t.Event("move",{originalEvent:this._lastWheelEvent})),this._map.fire(new t.Event("zoom",{originalEvent:this._lastWheelEvent})),s&&(this._active=!1,this._finishTimeout=setTimeout(function(){e._map.fire(new t.Event("zoomend",{originalEvent:e._lastWheelEvent})),e._map.fire(new t.Event("moveend",{originalEvent:e._lastWheelEvent})),delete e._targetZoom;},200));}},Wi.prototype._smoothOutEasing=function(e){var i=t.ease;if(this._prevEase){var n=this._prevEase,o=(r.now()-n.start)/n.duration,a=n.easing(o+.01)-n.easing(o),s=.27/Math.sqrt(a*a+1e-4)*.01,l=Math.sqrt(.0729-s*s);i=t.bezier(s,l,.25,1);}return this._prevEase={start:r.now(),duration:e,easing:i},i};var qi=function(e){this._map=e,this._el=e.getCanvasContainer(),this._container=e.getContainer(),t.bindAll(["_onMouseMove","_onMouseUp","_onKeyDown"],this);};qi.prototype.isEnabled=function(){return!!this._enabled},qi.prototype.isActive=function(){return!!this._active},qi.prototype.enable=function(){this.isEnabled()||(this._enabled=!0);},qi.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1);},qi.prototype.onMouseDown=function(e){this.isEnabled()&&e.shiftKey&&0===e.button&&(t.default.document.addEventListener("mousemove",this._onMouseMove,!1),t.default.document.addEventListener("keydown",this._onKeyDown,!1),t.default.document.addEventListener("mouseup",this._onMouseUp,!1),s.disableDrag(),this._startPos=s.mousePos(this._el,e),this._active=!0);},qi.prototype._onMouseMove=function(t){var e=this._startPos,i=s.mousePos(this._el,t);this._box||(this._box=s.create("div","mapboxgl-boxzoom",this._container),this._container.classList.add("mapboxgl-crosshair"),this._fireEvent("boxzoomstart",t));var n=Math.min(e.x,i.x),o=Math.max(e.x,i.x),r=Math.min(e.y,i.y),a=Math.max(e.y,i.y);s.setTransform(this._box,"translate("+n+"px,"+r+"px)"),this._box.style.width=o-n+"px",this._box.style.height=a-r+"px";},qi.prototype._onMouseUp=function(e){if(0===e.button){var i=this._startPos,n=s.mousePos(this._el,e),o=(new q).extend(this._map.unproject(i)).extend(this._map.unproject(n));this._finish(),s.suppressClick(),i.x===n.x&&i.y===n.y?this._fireEvent("boxzoomcancel",e):this._map.fitBounds(o,{linear:!0}).fire(new t.Event("boxzoomend",{originalEvent:e,boxZoomBounds:o}));}},qi.prototype._onKeyDown=function(t){27===t.keyCode&&(this._finish(),this._fireEvent("boxzoomcancel",t));},qi.prototype._finish=function(){this._active=!1,t.default.document.removeEventListener("mousemove",this._onMouseMove,!1),t.default.document.removeEventListener("keydown",this._onKeyDown,!1),t.default.document.removeEventListener("mouseup",this._onMouseUp,!1),this._container.classList.remove("mapboxgl-crosshair"),this._box&&(s.remove(this._box),this._box=null),s.enableDrag();},qi.prototype._fireEvent=function(e,i){return this._map.fire(new t.Event(e,{originalEvent:i}))};var Xi=t.bezier(0,0,.25,1),Hi=function(e,i){this._map=e,this._el=i.element||e.getCanvasContainer(),this._state="disabled",this._button=i.button||"right",this._bearingSnap=i.bearingSnap||0,this._pitchWithRotate=!1!==i.pitchWithRotate,t.bindAll(["_onMouseMove","_onMouseUp","_onBlur","_onDragFrame"],this);};Hi.prototype.isEnabled=function(){return"disabled"!==this._state},Hi.prototype.isActive=function(){return"active"===this._state},Hi.prototype.enable=function(){this.isEnabled()||(this._state="enabled");},Hi.prototype.disable=function(){if(this.isEnabled())switch(this._state){case"active":this._state="disabled",this._unbind(),this._deactivate(),this._fireEvent("rotateend"),this._pitchWithRotate&&this._fireEvent("pitchend"),this._fireEvent("moveend");break;case"pending":this._state="disabled",this._unbind();break;default:this._state="disabled";}},Hi.prototype.onMouseDown=function(e){if("enabled"===this._state){if("right"===this._button){if(this._eventButton=s.mouseButton(e),this._eventButton!==(e.ctrlKey?0:2))return}else{if(e.ctrlKey||0!==s.mouseButton(e))return;this._eventButton=0;}s.disableDrag(),t.default.document.addEventListener("mousemove",this._onMouseMove,{capture:!0}),t.default.document.addEventListener("mouseup",this._onMouseUp),t.default.addEventListener("blur",this._onBlur),this._state="pending",this._inertia=[[r.now(),this._map.getBearing()]],this._previousPos=s.mousePos(this._el,e),this._center=this._map.transform.centerPoint,e.preventDefault();}},Hi.prototype._onMouseMove=function(t){this._lastMoveEvent=t,this._pos=s.mousePos(this._el,t),"pending"===this._state&&(this._state="active",this._fireEvent("rotatestart",t),this._fireEvent("movestart",t),this._pitchWithRotate&&this._fireEvent("pitchstart",t)),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onDragFrame));},Hi.prototype._onDragFrame=function(){this._frameId=null;var t=this._lastMoveEvent;if(t){var e=this._map.transform,i=this._previousPos,n=this._pos,o=.8*(i.x-n.x),a=-.5*(i.y-n.y),s=e.bearing-o,l=e.pitch-a,c=this._inertia,u=c[c.length-1];this._drainInertiaBuffer(),c.push([r.now(),this._map._normalizeBearing(s,u[1])]),e.bearing=s,this._pitchWithRotate&&(this._fireEvent("pitch",t),e.pitch=l),this._fireEvent("rotate",t),this._fireEvent("move",t),delete this._lastMoveEvent,this._previousPos=this._pos;}},Hi.prototype._onMouseUp=function(t){if(s.mouseButton(t)===this._eventButton)switch(this._state){case"active":this._state="enabled",s.suppressClick(),this._unbind(),this._deactivate(),this._inertialRotate(t);break;case"pending":this._state="enabled",this._unbind();}},Hi.prototype._onBlur=function(t){switch(this._state){case"active":this._state="enabled",this._unbind(),this._deactivate(),this._fireEvent("rotateend",t),this._pitchWithRotate&&this._fireEvent("pitchend",t),this._fireEvent("moveend",t);break;case"pending":this._state="enabled",this._unbind();}},Hi.prototype._unbind=function(){t.default.document.removeEventListener("mousemove",this._onMouseMove,{capture:!0}),t.default.document.removeEventListener("mouseup",this._onMouseUp),t.default.removeEventListener("blur",this._onBlur),s.enableDrag();},Hi.prototype._deactivate=function(){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._lastMoveEvent,delete this._previousPos;},Hi.prototype._inertialRotate=function(t){var e=this;this._fireEvent("rotateend",t),this._drainInertiaBuffer();var i=this._map,n=i.getBearing(),o=this._inertia,r=function(){Math.abs(n)<e._bearingSnap?i.resetNorth({noMoveStart:!0},{originalEvent:t}):e._fireEvent("moveend",t),e._pitchWithRotate&&e._fireEvent("pitchend",t);};if(o.length<2)r();else{var a=o[0],s=o[o.length-1],l=o[o.length-2],c=i._normalizeBearing(n,l[1]),u=s[1]-a[1],h=u<0?-1:1,p=(s[0]-a[0])/1e3;if(0!==u&&0!==p){var d=Math.abs(u*(.25/p));d>180&&(d=180);var f=d/180;c+=h*d*(f/2),Math.abs(i._normalizeBearing(c,0))<this._bearingSnap&&(c=i._normalizeBearing(0,c)),i.rotateTo(c,{duration:1e3*f,easing:Xi,noMoveStart:!0},{originalEvent:t});}else r();}},Hi.prototype._fireEvent=function(e,i){return this._map.fire(new t.Event(e,i?{originalEvent:i}:{}))},Hi.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=r.now();t.length>0&&e-t[0][0]>160;)t.shift();};var Ki=t.bezier(0,0,.3,1),Yi=function(e){this._map=e,this._el=e.getCanvasContainer(),this._state="disabled",t.bindAll(["_onMove","_onMouseUp","_onTouchEnd","_onBlur","_onDragFrame"],this);};Yi.prototype.isEnabled=function(){return"disabled"!==this._state},Yi.prototype.isActive=function(){return"active"===this._state},Yi.prototype.enable=function(){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-drag-pan"),this._state="enabled");},Yi.prototype.disable=function(){if(this.isEnabled())switch(this._el.classList.remove("mapboxgl-touch-drag-pan"),this._state){case"active":this._state="disabled",this._unbind(),this._deactivate(),this._fireEvent("dragend"),this._fireEvent("moveend");break;case"pending":this._state="disabled",this._unbind();break;default:this._state="disabled";}},Yi.prototype.onMouseDown=function(e){"enabled"===this._state&&(e.ctrlKey||0!==s.mouseButton(e)||(s.addEventListener(t.default.document,"mousemove",this._onMove,{capture:!0}),s.addEventListener(t.default.document,"mouseup",this._onMouseUp),this._start(e)));},Yi.prototype.onTouchStart=function(e){"enabled"===this._state&&(e.touches.length>1||(s.addEventListener(t.default.document,"touchmove",this._onMove,{capture:!0,passive:!1}),s.addEventListener(t.default.document,"touchend",this._onTouchEnd),this._start(e)));},Yi.prototype._start=function(e){t.default.addEventListener("blur",this._onBlur),this._state="pending",this._previousPos=s.mousePos(this._el,e),this._inertia=[[r.now(),this._previousPos]];},Yi.prototype._onMove=function(t){this._lastMoveEvent=t,t.preventDefault(),this._pos=s.mousePos(this._el,t),this._drainInertiaBuffer(),this._inertia.push([r.now(),this._pos]),"pending"===this._state&&(this._state="active",this._fireEvent("dragstart",t),this._fireEvent("movestart",t)),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onDragFrame));},Yi.prototype._onDragFrame=function(){this._frameId=null;var t=this._lastMoveEvent;if(t){var e=this._map.transform;e.setLocationAtPoint(e.pointLocation(this._previousPos),this._pos),this._fireEvent("drag",t),this._fireEvent("move",t),this._previousPos=this._pos,delete this._lastMoveEvent;}},Yi.prototype._onMouseUp=function(t){if(0===s.mouseButton(t))switch(this._state){case"active":this._state="enabled",s.suppressClick(),this._unbind(),this._deactivate(),this._inertialPan(t);break;case"pending":this._state="enabled",this._unbind();}},Yi.prototype._onTouchEnd=function(t){switch(this._state){case"active":this._state="enabled",this._unbind(),this._deactivate(),this._inertialPan(t);break;case"pending":this._state="enabled",this._unbind();}},Yi.prototype._onBlur=function(t){switch(this._state){case"active":this._state="enabled",this._unbind(),this._deactivate(),this._fireEvent("dragend",t),this._fireEvent("moveend",t);break;case"pending":this._state="enabled",this._unbind();}},Yi.prototype._unbind=function(){s.removeEventListener(t.default.document,"touchmove",this._onMove,{capture:!0,passive:!1}),s.removeEventListener(t.default.document,"touchend",this._onTouchEnd),s.removeEventListener(t.default.document,"mousemove",this._onMove,{capture:!0}),s.removeEventListener(t.default.document,"mouseup",this._onMouseUp),s.removeEventListener(t.default,"blur",this._onBlur);},Yi.prototype._deactivate=function(){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._lastMoveEvent,delete this._previousPos,delete this._pos;},Yi.prototype._inertialPan=function(t){this._fireEvent("dragend",t),this._drainInertiaBuffer();var e=this._inertia;if(e.length<2)this._fireEvent("moveend",t);else{var i=e[e.length-1],n=e[0],o=i[1].sub(n[1]),r=(i[0]-n[0])/1e3;if(0===r||i[1].equals(n[1]))this._fireEvent("moveend",t);else{var a=o.mult(.3/r),s=a.mag();s>1400&&(s=1400,a._unit()._mult(s));var l=s/750,c=a.mult(-l/2);this._map.panBy(c,{duration:1e3*l,easing:Ki,noMoveStart:!0},{originalEvent:t});}}},Yi.prototype._fireEvent=function(e,i){return this._map.fire(new t.Event(e,i?{originalEvent:i}:{}))},Yi.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=r.now();t.length>0&&e-t[0][0]>160;)t.shift();};var Ji=function(e){this._map=e,this._el=e.getCanvasContainer(),t.bindAll(["_onKeyDown"],this);};function Qi(t){return t*(2-t)}Ji.prototype.isEnabled=function(){return!!this._enabled},Ji.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("keydown",this._onKeyDown,!1),this._enabled=!0);},Ji.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("keydown",this._onKeyDown),this._enabled=!1);},Ji.prototype._onKeyDown=function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=0,i=0,n=0,o=0,r=0;switch(t.keyCode){case 61:case 107:case 171:case 187:e=1;break;case 189:case 109:case 173:e=-1;break;case 37:t.shiftKey?i=-1:(t.preventDefault(),o=-1);break;case 39:t.shiftKey?i=1:(t.preventDefault(),o=1);break;case 38:t.shiftKey?n=1:(t.preventDefault(),r=-1);break;case 40:t.shiftKey?n=-1:(r=1,t.preventDefault());break;default:return}var a=this._map,s=a.getZoom(),l={duration:300,delayEndEvents:500,easing:Qi,zoom:e?Math.round(s)+e*(t.shiftKey?2:1):s,bearing:a.getBearing()+15*i,pitch:a.getPitch()+10*n,offset:[100*-o,100*-r],center:a.getCenter()};a.easeTo(l,{originalEvent:t});}};var tn=function(e){this._map=e,t.bindAll(["_onDblClick","_onZoomEnd"],this);};tn.prototype.isEnabled=function(){return!!this._enabled},tn.prototype.isActive=function(){return!!this._active},tn.prototype.enable=function(){this.isEnabled()||(this._enabled=!0);},tn.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1);},tn.prototype.onTouchStart=function(t){var e=this;this.isEnabled()&&(t.points.length>1||(this._tapped?(clearTimeout(this._tapped),this._tapped=null,this._zoom(t)):this._tapped=setTimeout(function(){e._tapped=null;},300)));},tn.prototype.onDblClick=function(t){this.isEnabled()&&(t.originalEvent.preventDefault(),this._zoom(t));},tn.prototype._zoom=function(t){this._active=!0,this._map.on("zoomend",this._onZoomEnd),this._map.zoomTo(this._map.getZoom()+(t.originalEvent.shiftKey?-1:1),{around:t.lngLat},t);},tn.prototype._onZoomEnd=function(){this._active=!1,this._map.off("zoomend",this._onZoomEnd);};var en=t.bezier(0,0,.15,1),nn=function(e){this._map=e,this._el=e.getCanvasContainer(),t.bindAll(["_onMove","_onEnd","_onTouchFrame"],this);};nn.prototype.isEnabled=function(){return!!this._enabled},nn.prototype.enable=function(t){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-zoom-rotate"),this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around);},nn.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-zoom-rotate"),this._enabled=!1);},nn.prototype.disableRotation=function(){this._rotationDisabled=!0;},nn.prototype.enableRotation=function(){this._rotationDisabled=!1;},nn.prototype.onStart=function(e){if(this.isEnabled()&&2===e.touches.length){var i=s.mousePos(this._el,e.touches[0]),n=s.mousePos(this._el,e.touches[1]);this._startVec=i.sub(n),this._gestureIntent=void 0,this._inertia=[],s.addEventListener(t.default.document,"touchmove",this._onMove,{passive:!1}),s.addEventListener(t.default.document,"touchend",this._onEnd);}},nn.prototype._getTouchEventData=function(t){var e=s.mousePos(this._el,t.touches[0]),i=s.mousePos(this._el,t.touches[1]),n=e.sub(i);return{vec:n,center:e.add(i).div(2),scale:n.mag()/this._startVec.mag(),bearing:this._rotationDisabled?0:180*n.angleWith(this._startVec)/Math.PI}},nn.prototype._onMove=function(e){if(2===e.touches.length){var i=this._getTouchEventData(e),n=i.vec,o=i.scale,r=i.bearing;if(!this._gestureIntent){var a=Math.abs(1-o)>.15;Math.abs(r)>10?this._gestureIntent="rotate":a&&(this._gestureIntent="zoom"),this._gestureIntent&&(this._map.fire(new t.Event(this._gestureIntent+"start",{originalEvent:e})),this._map.fire(new t.Event("movestart",{originalEvent:e})),this._startVec=n);}this._lastTouchEvent=e,this._frameId||(this._frameId=this._map._requestRenderFrame(this._onTouchFrame)),e.preventDefault();}},nn.prototype._onTouchFrame=function(){this._frameId=null;var e=this._gestureIntent;if(e){var i=this._map.transform;this._startScale||(this._startScale=i.scale,this._startBearing=i.bearing);var n=this._getTouchEventData(this._lastTouchEvent),o=n.center,a=n.bearing,s=n.scale,l=i.pointLocation(o),c=i.locationPoint(l);"rotate"===e&&(i.bearing=this._startBearing+a),i.zoom=i.scaleZoom(this._startScale*s),i.setLocationAtPoint(l,c),this._map.fire(new t.Event(e,{originalEvent:this._lastTouchEvent})),this._map.fire(new t.Event("move",{originalEvent:this._lastTouchEvent})),this._drainInertiaBuffer(),this._inertia.push([r.now(),s,o]);}},nn.prototype._onEnd=function(e){s.removeEventListener(t.default.document,"touchmove",this._onMove,{passive:!1}),s.removeEventListener(t.default.document,"touchend",this._onEnd);var i=this._gestureIntent,n=this._startScale;if(this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._gestureIntent,delete this._startScale,delete this._startBearing,delete this._lastTouchEvent,i){this._map.fire(new t.Event(i+"end",{originalEvent:e})),this._drainInertiaBuffer();var o=this._inertia,r=this._map;if(o.length<2)r.snapToNorth({},{originalEvent:e});else{var a=o[o.length-1],l=o[0],c=r.transform.scaleZoom(n*a[1]),u=r.transform.scaleZoom(n*l[1]),h=c-u,p=(a[0]-l[0])/1e3,d=a[2];if(0!==p&&c!==u){var f=.15*h/p;Math.abs(f)>2.5&&(f=f>0?2.5:-2.5);var m=1e3*Math.abs(f/(12*.15)),_=c+f*m/2e3;_<0&&(_=0),r.easeTo({zoom:_,duration:m,easing:en,around:this._aroundCenter?r.getCenter():r.unproject(d),noMoveStart:!0},{originalEvent:e});}else r.snapToNorth({},{originalEvent:e});}}},nn.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=r.now();t.length>2&&e-t[0][0]>160;)t.shift();};var on={scrollZoom:Wi,boxZoom:qi,dragRotate:Hi,dragPan:Yi,keyboard:Ji,doubleClickZoom:tn,touchZoomRotate:nn};var rn=function(e){function i(i,n){e.call(this),this._moving=!1,this._zooming=!1,this.transform=i,this._bearingSnap=n.bearingSnap,t.bindAll(["_renderFrameCallback"],this);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.getCenter=function(){return this.transform.center},i.prototype.setCenter=function(t,e){return this.jumpTo({center:t},e)},i.prototype.panBy=function(e,i,n){return e=t.default$1.convert(e).mult(-1),this.panTo(this.transform.center,t.extend({offset:e},i),n)},i.prototype.panTo=function(e,i,n){return this.easeTo(t.extend({center:e},i),n)},i.prototype.getZoom=function(){return this.transform.zoom},i.prototype.setZoom=function(t,e){return this.jumpTo({zoom:t},e),this},i.prototype.zoomTo=function(e,i,n){return this.easeTo(t.extend({zoom:e},i),n)},i.prototype.zoomIn=function(t,e){return this.zoomTo(this.getZoom()+1,t,e),this},i.prototype.zoomOut=function(t,e){return this.zoomTo(this.getZoom()-1,t,e),this},i.prototype.getBearing=function(){return this.transform.bearing},i.prototype.setBearing=function(t,e){return this.jumpTo({bearing:t},e),this},i.prototype.rotateTo=function(e,i,n){return this.easeTo(t.extend({bearing:e},i),n)},i.prototype.resetNorth=function(e,i){return this.rotateTo(0,t.extend({duration:1e3},e),i),this},i.prototype.snapToNorth=function(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this},i.prototype.getPitch=function(){return this.transform.pitch},i.prototype.setPitch=function(t,e){return this.jumpTo({pitch:t},e),this},i.prototype.fitBounds=function(e,i,n){if("number"==typeof(i=t.extend({padding:{top:0,bottom:0,right:0,left:0},offset:[0,0],maxZoom:this.transform.maxZoom},i)).padding){var o=i.padding;i.padding={top:o,bottom:o,right:o,left:o};}if(!t.default$10(Object.keys(i.padding).sort(function(t,e){return t<e?-1:t>e?1:0}),["bottom","left","right","top"]))return t.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'"),this;e=q.convert(e);var r=[(i.padding.left-i.padding.right)/2,(i.padding.top-i.padding.bottom)/2],a=Math.min(i.padding.right,i.padding.left),s=Math.min(i.padding.top,i.padding.bottom);i.offset=[i.offset[0]+r[0],i.offset[1]+r[1]];var l=t.default$1.convert(i.offset),c=this.transform,u=c.project(e.getNorthWest()),h=c.project(e.getSouthEast()),p=h.sub(u),d=(c.width-2*a-2*Math.abs(l.x))/p.x,f=(c.height-2*s-2*Math.abs(l.y))/p.y;return f<0||d<0?(t.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset."),this):(i.center=c.unproject(u.add(h).div(2)),i.zoom=Math.min(c.scaleZoom(c.scale*Math.min(d,f)),i.maxZoom),i.bearing=0,i.linear?this.easeTo(i,n):this.flyTo(i,n))},i.prototype.jumpTo=function(e,i){this.stop();var n=this.transform,o=!1,r=!1,a=!1;return"zoom"in e&&n.zoom!==+e.zoom&&(o=!0,n.zoom=+e.zoom),void 0!==e.center&&(n.center=W.convert(e.center)),"bearing"in e&&n.bearing!==+e.bearing&&(r=!0,n.bearing=+e.bearing),"pitch"in e&&n.pitch!==+e.pitch&&(a=!0,n.pitch=+e.pitch),this.fire(new t.Event("movestart",i)).fire(new t.Event("move",i)),o&&this.fire(new t.Event("zoomstart",i)).fire(new t.Event("zoom",i)).fire(new t.Event("zoomend",i)),r&&this.fire(new t.Event("rotatestart",i)).fire(new t.Event("rotate",i)).fire(new t.Event("rotateend",i)),a&&this.fire(new t.Event("pitchstart",i)).fire(new t.Event("pitch",i)).fire(new t.Event("pitchend",i)),this.fire(new t.Event("moveend",i))},i.prototype.easeTo=function(e,i){var n=this;this.stop(),!1===(e=t.extend({offset:[0,0],duration:500,easing:t.ease},e)).animate&&(e.duration=0);var o=this.transform,r=this.getZoom(),a=this.getBearing(),s=this.getPitch(),l="zoom"in e?+e.zoom:r,c="bearing"in e?this._normalizeBearing(e.bearing,a):a,u="pitch"in e?+e.pitch:s,h=o.centerPoint.add(t.default$1.convert(e.offset)),p=o.pointLocation(h),d=W.convert(e.center||p);this._normalizeCenter(d);var f,m,_=o.project(p),g=o.project(d).sub(_),v=o.zoomScale(l-r);return e.around&&(f=W.convert(e.around),m=o.locationPoint(f)),this._zooming=l!==r,this._rotating=a!==c,this._pitching=u!==s,this._prepareEase(i,e.noMoveStart),clearTimeout(this._easeEndTimeoutID),this._ease(function(e){if(n._zooming&&(o.zoom=t.number(r,l,e)),n._rotating&&(o.bearing=t.number(a,c,e)),n._pitching&&(o.pitch=t.number(s,u,e)),f)o.setLocationAtPoint(f,m);else{var p=o.zoomScale(o.zoom-r),d=l>r?Math.min(2,v):Math.max(.5,v),y=Math.pow(d,1-e),x=o.unproject(_.add(g.mult(e*y)).mult(p));o.setLocationAtPoint(o.renderWorldCopies?x.wrap():x,h);}n._fireMoveEvents(i);},function(){e.delayEndEvents?n._easeEndTimeoutID=setTimeout(function(){return n._afterEase(i)},e.delayEndEvents):n._afterEase(i);},e),this},i.prototype._prepareEase=function(e,i){this._moving=!0,i||this.fire(new t.Event("movestart",e)),this._zooming&&this.fire(new t.Event("zoomstart",e)),this._rotating&&this.fire(new t.Event("rotatestart",e)),this._pitching&&this.fire(new t.Event("pitchstart",e));},i.prototype._fireMoveEvents=function(e){this.fire(new t.Event("move",e)),this._zooming&&this.fire(new t.Event("zoom",e)),this._rotating&&this.fire(new t.Event("rotate",e)),this._pitching&&this.fire(new t.Event("pitch",e));},i.prototype._afterEase=function(e){var i=this._zooming,n=this._rotating,o=this._pitching;this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,i&&this.fire(new t.Event("zoomend",e)),n&&this.fire(new t.Event("rotateend",e)),o&&this.fire(new t.Event("pitchend",e)),this.fire(new t.Event("moveend",e));},i.prototype.flyTo=function(e,i){var n=this;this.stop(),e=t.extend({offset:[0,0],speed:1.2,curve:1.42,easing:t.ease},e);var o=this.transform,r=this.getZoom(),a=this.getBearing(),s=this.getPitch(),l="zoom"in e?t.clamp(+e.zoom,o.minZoom,o.maxZoom):r,c="bearing"in e?this._normalizeBearing(e.bearing,a):a,u="pitch"in e?+e.pitch:s,h=o.zoomScale(l-r),p=o.centerPoint.add(t.default$1.convert(e.offset)),d=o.pointLocation(p),f=W.convert(e.center||d);this._normalizeCenter(f);var m=o.project(d),_=o.project(f).sub(m),g=e.curve,v=Math.max(o.width,o.height),y=v/h,x=_.mag();if("minZoom"in e){var b=t.clamp(Math.min(e.minZoom,r,l),o.minZoom,o.maxZoom),w=v/o.zoomScale(b-r);g=Math.sqrt(w/x*2);}var E=g*g;function T(t){var e=(y*y-v*v+(t?-1:1)*E*E*x*x)/(2*(t?y:v)*E*x);return Math.log(Math.sqrt(e*e+1)-e)}function I(t){return(Math.exp(t)-Math.exp(-t))/2}function C(t){return(Math.exp(t)+Math.exp(-t))/2}var S=T(0),z=function(t){return C(S)/C(S+g*t)},A=function(t){return v*((C(S)*(I(e=S+g*t)/C(e))-I(S))/E)/x;var e;},R=(T(1)-S)/g;if(Math.abs(x)<1e-6||!isFinite(R)){if(Math.abs(v-y)<1e-6)return this.easeTo(e,i);var D=y<v?-1:1;R=Math.abs(Math.log(y/v))/g,A=function(){return 0},z=function(t){return Math.exp(D*g*t)};}if("duration"in e)e.duration=+e.duration;else{var M="screenSpeed"in e?+e.screenSpeed/g:+e.speed;e.duration=1e3*R/M;}return e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=a!==c,this._pitching=u!==s,this._prepareEase(i,!1),this._ease(function(e){var l=e*R,h=1/z(l);o.zoom=r+o.scaleZoom(h),n._rotating&&(o.bearing=t.number(a,c,e)),n._pitching&&(o.pitch=t.number(s,u,e));var d=o.unproject(m.add(_.mult(A(l))).mult(h));o.setLocationAtPoint(o.renderWorldCopies?d.wrap():d,p),n._fireMoveEvents(i);},function(){return n._afterEase(i)},e),this},i.prototype.isEasing=function(){return!!this._easeFrameId},i.prototype.stop=function(){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){var t=this._onEaseEnd;delete this._onEaseEnd,t.call(this);}return this},i.prototype._ease=function(t,e,i){!1===i.animate||0===i.duration?(t(1),e()):(this._easeStart=r.now(),this._easeOptions=i,this._onEaseFrame=t,this._onEaseEnd=e,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback));},i.prototype._renderFrameCallback=function(){var t=Math.min((r.now()-this._easeStart)/this._easeOptions.duration,1);this._onEaseFrame(this._easeOptions.easing(t)),t<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop();},i.prototype._normalizeBearing=function(e,i){e=t.wrap(e,-180,180);var n=Math.abs(e-i);return Math.abs(e-360-i)<n&&(e-=360),Math.abs(e+360-i)<n&&(e+=360),e},i.prototype._normalizeCenter=function(t){var e=this.transform;if(e.renderWorldCopies&&!e.lngRange){var i=t.lng-e.center.lng;t.lng+=i>180?-360:i<-180?360:0;}},i}(t.Evented),an=function(e){void 0===e&&(e={}),this.options=e,t.bindAll(["_updateEditLink","_updateData","_updateCompact"],this);};an.prototype.getDefaultPosition=function(){return"bottom-right"},an.prototype.onAdd=function(t){var e=this.options&&this.options.compact;return this._map=t,this._container=s.create("div","mapboxgl-ctrl mapboxgl-ctrl-attrib"),e&&this._container.classList.add("mapboxgl-compact"),this._updateAttributions(),this._updateEditLink(),this._map.on("sourcedata",this._updateData),this._map.on("moveend",this._updateEditLink),void 0===e&&(this._map.on("resize",this._updateCompact),this._updateCompact()),this._container},an.prototype.onRemove=function(){s.remove(this._container),this._map.off("sourcedata",this._updateData),this._map.off("moveend",this._updateEditLink),this._map.off("resize",this._updateCompact),this._map=void 0;},an.prototype._updateEditLink=function(){var t=this._editLink;t||(t=this._editLink=this._container.querySelector(".mapbox-improve-map"));var e=[{key:"owner",value:this.styleOwner},{key:"id",value:this.styleId},{key:"access_token",value:_.ACCESS_TOKEN}];if(t){var i=e.reduce(function(t,i,n){return i.value&&(t+=i.key+"="+i.value+(n<e.length-1?"&":"")),t},"?");t.href="https://www.mapbox.com/feedback/"+i+(this._map._hash?this._map._hash.getHashString(!0):"");}},an.prototype._updateData=function(t){t&&"metadata"===t.sourceDataType&&(this._updateAttributions(),this._updateEditLink());},an.prototype._updateAttributions=function(){if(this._map.style){var t=[];if(this._map.style.stylesheet){var e=this._map.style.stylesheet;this.styleOwner=e.owner,this.styleId=e.id;}var i=this._map.style.sourceCaches;for(var n in i){var o=i[n].getSource();o.attribution&&t.indexOf(o.attribution)<0&&t.push(o.attribution);}t.sort(function(t,e){return t.length-e.length}),(t=t.filter(function(e,i){for(var n=i+1;n<t.length;n++)if(t[n].indexOf(e)>=0)return!1;return!0})).length?(this._container.innerHTML=t.join(" | "),this._container.classList.remove("mapboxgl-attrib-empty")):this._container.classList.add("mapboxgl-attrib-empty"),this._editLink=null;}},an.prototype._updateCompact=function(){this._map.getCanvasContainer().offsetWidth<=640?this._container.classList.add("mapboxgl-compact"):this._container.classList.remove("mapboxgl-compact");};var sn=function(){t.bindAll(["_updateLogo"],this);};sn.prototype.onAdd=function(t){this._map=t,this._container=s.create("div","mapboxgl-ctrl");var e=s.create("a","mapboxgl-ctrl-logo");return e.target="_blank",e.href="https://www.mapbox.com/",e.setAttribute("aria-label","Mapbox logo"),this._container.appendChild(e),this._container.style.display="none",this._map.on("sourcedata",this._updateLogo),this._updateLogo(),this._container},sn.prototype.onRemove=function(){s.remove(this._container),this._map.off("sourcedata",this._updateLogo);},sn.prototype.getDefaultPosition=function(){return"bottom-left"},sn.prototype._updateLogo=function(t){t&&"metadata"!==t.sourceDataType||(this._container.style.display=this._logoRequired()?"block":"none");},sn.prototype._logoRequired=function(){if(this._map.style){var t=this._map.style.sourceCaches;for(var e in t){if(t[e].getSource().mapbox_logo)return!0}return!1}};var ln=function(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1;};ln.prototype.add=function(t){var e=++this._id;return this._queue.push({callback:t,id:e,cancelled:!1}),e},ln.prototype.remove=function(t){for(var e=this._currentlyRunning,i=0,n=e?this._queue.concat(e):this._queue;i<n.length;i+=1){var o=n[i];if(o.id===t)return void(o.cancelled=!0)}},ln.prototype.run=function(){var t=this._currentlyRunning=this._queue;this._queue=[];for(var e=0,i=t;e<i.length;e+=1){var n=i[e];if(!n.cancelled&&(n.callback(),this._cleared))break}this._cleared=!1,this._currentlyRunning=!1;},ln.prototype.clear=function(){this._currentlyRunning&&(this._cleared=!0),this._queue=[];};var cn=t.default.HTMLImageElement,un=t.default.HTMLElement,hn={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:0,maxZoom:22,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,bearingSnap:7,hash:!1,attributionControl:!0,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,transformRequest:null,fadeDuration:300},pn=function(i){function n(e){if(null!=(e=t.extend({},hn,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than minZoom");var n=new Ui(e.minZoom,e.maxZoom,e.renderWorldCopies);i.call(this,n,e),this._interactive=e.interactive,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new ln;var o=e.transformRequest;if(this._transformRequest=o?function(t,e){return o(t,e)||{url:t}}:function(t){return{url:t}},"string"==typeof e.container){var r=t.default.document.getElementById(e.container);if(!r)throw new Error("Container '"+e.container+"' not found.");this._container=r;}else{if(!(e.container instanceof un))throw new Error("Invalid type: 'container' must be a String or HTMLElement.");this._container=e.container;}e.maxBounds&&this.setMaxBounds(e.maxBounds),t.bindAll(["_onWindowOnline","_onWindowResize","_contextLost","_contextRestored","_update","_render","_onData","_onDataLoading"],this),this._setupContainer(),this._setupPainter(),this.on("move",this._update.bind(this,!1)),this.on("zoom",this._update.bind(this,!0)),void 0!==t.default&&(t.default.addEventListener("online",this._onWindowOnline,!1),t.default.addEventListener("resize",this._onWindowResize,!1)),function(t,e){var i=t.getCanvasContainer(),n=null,o=!1;for(var r in on)t[r]=new on[r](t,e),e.interactive&&e[r]&&t[r].enable(e[r]);s.addEventListener(i,"mouseout",function(e){t.fire(new ji("mouseout",t,e));}),s.addEventListener(i,"mousedown",function(i){o=!0;var n=new ji("mousedown",t,i);t.fire(n),n.defaultPrevented||(e.interactive&&!t.doubleClickZoom.isActive()&&t.stop(),t.boxZoom.onMouseDown(i),t.boxZoom.isActive()||t.dragPan.isActive()||t.dragRotate.onMouseDown(i),t.boxZoom.isActive()||t.dragRotate.isActive()||t.dragPan.onMouseDown(i));}),s.addEventListener(i,"mouseup",function(e){var i=t.dragRotate.isActive();n&&!i&&t.fire(new ji("contextmenu",t,n)),n=null,o=!1,t.fire(new ji("mouseup",t,e));}),s.addEventListener(i,"mousemove",function(e){if(!t.dragPan.isActive()&&!t.dragRotate.isActive()){for(var n=e.toElement||e.target;n&&n!==i;)n=n.parentNode;n===i&&t.fire(new ji("mousemove",t,e));}}),s.addEventListener(i,"mouseover",function(e){for(var n=e.toElement||e.target;n&&n!==i;)n=n.parentNode;n===i&&t.fire(new ji("mouseover",t,e));}),s.addEventListener(i,"touchstart",function(i){var n=new $i("touchstart",t,i);t.fire(n),n.defaultPrevented||(e.interactive&&t.stop(),t.boxZoom.isActive()||t.dragRotate.isActive()||t.dragPan.onTouchStart(i),t.touchZoomRotate.onStart(i),t.doubleClickZoom.onTouchStart(n));},{passive:!1}),s.addEventListener(i,"touchmove",function(e){t.fire(new $i("touchmove",t,e));},{passive:!1}),s.addEventListener(i,"touchend",function(e){t.fire(new $i("touchend",t,e));}),s.addEventListener(i,"touchcancel",function(e){t.fire(new $i("touchcancel",t,e));}),s.addEventListener(i,"click",function(e){t.fire(new ji("click",t,e));}),s.addEventListener(i,"dblclick",function(e){var i=new ji("dblclick",t,e);t.fire(i),i.defaultPrevented||t.doubleClickZoom.onDblClick(i);}),s.addEventListener(i,"contextmenu",function(e){var i=t.dragRotate.isActive();o||i?o&&(n=e):t.fire(new ji("contextmenu",t,e)),e.preventDefault();}),s.addEventListener(i,"wheel",function(e){var i=new Gi("wheel",t,e);t.fire(i),i.defaultPrevented||t.scrollZoom.onWheel(e);},{passive:!1});}(this,e),this._hash=e.hash&&(new Vi).addTo(this),this._hash&&this._hash._onHashChange()||this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),this.resize(),e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new an),this.addControl(new sn,e.logoPosition),this.on("style.load",function(){this.transform.unmodified&&this.jumpTo(this.style.stylesheet);}),this.on("data",this._onData),this.on("dataloading",this._onDataLoading);}i&&(n.__proto__=i),n.prototype=Object.create(i&&i.prototype),n.prototype.constructor=n;var o={showTileBoundaries:{configurable:!0},showCollisionBoxes:{configurable:!0},showOverdrawInspector:{configurable:!0},repaint:{configurable:!0},vertices:{configurable:!0}};return n.prototype.addControl=function(t,e){void 0===e&&t.getDefaultPosition&&(e=t.getDefaultPosition()),void 0===e&&(e="top-right");var i=t.onAdd(this),n=this._controlPositions[e];return-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},n.prototype.removeControl=function(t){return t.onRemove(this),this},n.prototype.resize=function(e){var i=this._containerDimensions(),n=i[0],o=i[1];return this._resizeCanvas(n,o),this.transform.resize(n,o),this.painter.resize(n,o),this.fire(new t.Event("movestart",e)).fire(new t.Event("move",e)).fire(new t.Event("resize",e)).fire(new t.Event("moveend",e))},n.prototype.getBounds=function(){var e=new q(this.transform.pointLocation(new t.default$1(0,this.transform.height)),this.transform.pointLocation(new t.default$1(this.transform.width,0)));return(this.transform.angle||this.transform.pitch)&&(e.extend(this.transform.pointLocation(new t.default$1(this.transform.size.x,0))),e.extend(this.transform.pointLocation(new t.default$1(0,this.transform.size.y)))),e},n.prototype.getMaxBounds=function(){return this.transform.latRange&&2===this.transform.latRange.length&&this.transform.lngRange&&2===this.transform.lngRange.length?new q([this.transform.lngRange[0],this.transform.latRange[0]],[this.transform.lngRange[1],this.transform.latRange[1]]):null},n.prototype.setMaxBounds=function(t){if(t){var e=q.convert(t);this.transform.lngRange=[e.getWest(),e.getEast()],this.transform.latRange=[e.getSouth(),e.getNorth()],this.transform._constrain(),this._update();}else null==t&&(this.transform.lngRange=null,this.transform.latRange=null,this._update());return this},n.prototype.setMinZoom=function(t){if((t=null==t?0:t)>=0&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this;throw new Error("minZoom must be between 0 and the current maxZoom, inclusive")},n.prototype.getMinZoom=function(){return this.transform.minZoom},n.prototype.setMaxZoom=function(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this;throw new Error("maxZoom must be greater than the current minZoom")},n.prototype.getRenderWorldCopies=function(){return this.transform.renderWorldCopies},n.prototype.setRenderWorldCopies=function(t){return this.transform.renderWorldCopies=t,this._update(),this},n.prototype.getMaxZoom=function(){return this.transform.maxZoom},n.prototype.project=function(t){return this.transform.locationPoint(W.convert(t))},n.prototype.unproject=function(e){return this.transform.pointLocation(t.default$1.convert(e))},n.prototype.isMoving=function(){return this._moving||this.dragPan.isActive()||this.dragRotate.isActive()||this.scrollZoom.isActive()},n.prototype.isZooming=function(){return this._zooming||this.scrollZoom.isActive()},n.prototype.isRotating=function(){return this._rotating||this.dragRotate.isActive()},n.prototype.on=function(t,e,n){var o,r=this;if(void 0===n)return i.prototype.on.call(this,t,e);var a=function(){if("mouseenter"===t||"mouseover"===t){var i=!1;return{layer:e,listener:n,delegates:{mousemove:function(o){var a=r.getLayer(e)?r.queryRenderedFeatures(o.point,{layers:[e]}):[];a.length?i||(i=!0,n.call(r,new ji(t,r,o.originalEvent,{features:a}))):i=!1;},mouseout:function(){i=!1;}}}}if("mouseleave"===t||"mouseout"===t){var a=!1;return{layer:e,listener:n,delegates:{mousemove:function(i){(r.getLayer(e)?r.queryRenderedFeatures(i.point,{layers:[e]}):[]).length?a=!0:a&&(a=!1,n.call(r,new ji(t,r,i.originalEvent)));},mouseout:function(e){a&&(a=!1,n.call(r,new ji(t,r,e.originalEvent)));}}}}return{layer:e,listener:n,delegates:(o={},o[t]=function(t){var i=r.getLayer(e)?r.queryRenderedFeatures(t.point,{layers:[e]}):[];i.length&&(t.features=i,n.call(r,t),delete t.features);},o)}}();for(var s in this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[t]=this._delegatedListeners[t]||[],this._delegatedListeners[t].push(a),a.delegates)r.on(s,a.delegates[s]);return this},n.prototype.off=function(t,e,n){if(void 0===n)return i.prototype.off.call(this,t,e);if(this._delegatedListeners&&this._delegatedListeners[t])for(var o=this._delegatedListeners[t],r=0;r<o.length;r++){var a=o[r];if(a.layer===e&&a.listener===n){for(var s in a.delegates)this.off(s,a.delegates[s]);return o.splice(r,1),this}}return this},n.prototype.queryRenderedFeatures=function(e,i){var n;return 2===arguments.length?(e=arguments[0],i=arguments[1]):1===arguments.length&&((n=arguments[0])instanceof t.default$1||Array.isArray(n))?(e=arguments[0],i={}):1===arguments.length?(e=void 0,i=arguments[0]):(e=void 0,i={}),this.style?this.style.queryRenderedFeatures(this._makeQueryGeometry(e),i,this.transform):[]},n.prototype._makeQueryGeometry=function(e){var i,n=this;if(void 0===e&&(e=[t.default$1.convert([0,0]),t.default$1.convert([this.transform.width,this.transform.height])]),e instanceof t.default$1||"number"==typeof e[0]){i=[t.default$1.convert(e)];}else{var o=[t.default$1.convert(e[0]),t.default$1.convert(e[1])];i=[o[0],new t.default$1(o[1].x,o[0].y),o[1],new t.default$1(o[0].x,o[1].y),o[0]];}return{viewport:i,worldCoordinate:i.map(function(t){return n.transform.pointCoordinate(t)})}},n.prototype.querySourceFeatures=function(t,e){return this.style.querySourceFeatures(t,e)},n.prototype.setStyle=function(e,i){if((!i||!1!==i.diff&&!i.localIdeographFontFamily)&&this.style&&e&&"object"==typeof e)try{return this.style.setState(e)&&this._update(!0),this}catch(e){t.warnOnce("Unable to perform style diff: "+(e.message||e.error||e)+".  Rebuilding the style from scratch.");}return this.style&&(this.style.setEventedParent(null),this.style._remove()),e?(this.style=new Qe(this,i||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof e?this.style.loadURL(e):this.style.loadJSON(e),this):(delete this.style,this)},n.prototype.getStyle=function(){if(this.style)return this.style.serialize()},n.prototype.isStyleLoaded=function(){return this.style?this.style.loaded():t.warnOnce("There is no style added to the map.")},n.prototype.addSource=function(t,e){return this.style.addSource(t,e),this._update(!0),this},n.prototype.isSourceLoaded=function(e){var i=this.style&&this.style.sourceCaches[e];if(void 0!==i)return i.loaded();this.fire(new t.ErrorEvent(new Error("There is no source with ID '"+e+"'")));},n.prototype.areTilesLoaded=function(){var t=this.style&&this.style.sourceCaches;for(var e in t){var i=t[e]._tiles;for(var n in i){var o=i[n];if("loaded"!==o.state&&"errored"!==o.state)return!1}}return!0},n.prototype.addSourceType=function(t,e,i){return this.style.addSourceType(t,e,i)},n.prototype.removeSource=function(t){return this.style.removeSource(t),this._update(!0),this},n.prototype.getSource=function(t){return this.style.getSource(t)},n.prototype.addImage=function(e,i,n){void 0===n&&(n={});var o=n.pixelRatio;void 0===o&&(o=1);var a=n.sdf;if(void 0===a&&(a=!1),i instanceof cn){var s=r.getImageData(i),l=s.width,c=s.height,u=s.data;this.style.addImage(e,{data:new t.RGBAImage({width:l,height:c},u),pixelRatio:o,sdf:a});}else{if(void 0===i.width||void 0===i.height)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")));var h=i.width,p=i.height,d=i.data;this.style.addImage(e,{data:new t.RGBAImage({width:h,height:p},d.slice(0)),pixelRatio:o,sdf:a});}},n.prototype.hasImage=function(e){return e?!!this.style.getImage(e):(this.fire(new t.ErrorEvent(new Error("Missing required image id"))),!1)},n.prototype.removeImage=function(t){this.style.removeImage(t);},n.prototype.loadImage=function(e,i){t.getImage(this._transformRequest(e,t.ResourceType.Image),i);},n.prototype.addLayer=function(t,e){return this.style.addLayer(t,e),this._update(!0),this},n.prototype.moveLayer=function(t,e){return this.style.moveLayer(t,e),this._update(!0),this},n.prototype.removeLayer=function(t){return this.style.removeLayer(t),this._update(!0),this},n.prototype.getLayer=function(t){return this.style.getLayer(t)},n.prototype.setFilter=function(t,e){return this.style.setFilter(t,e),this._update(!0),this},n.prototype.setLayerZoomRange=function(t,e,i){return this.style.setLayerZoomRange(t,e,i),this._update(!0),this},n.prototype.getFilter=function(t){return this.style.getFilter(t)},n.prototype.setPaintProperty=function(t,e,i){return this.style.setPaintProperty(t,e,i),this._update(!0),this},n.prototype.getPaintProperty=function(t,e){return this.style.getPaintProperty(t,e)},n.prototype.setLayoutProperty=function(t,e,i){return this.style.setLayoutProperty(t,e,i),this._update(!0),this},n.prototype.getLayoutProperty=function(t,e){return this.style.getLayoutProperty(t,e)},n.prototype.setLight=function(t){return this.style.setLight(t),this._update(!0),this},n.prototype.getLight=function(){return this.style.getLight()},n.prototype.getContainer=function(){return this._container},n.prototype.getCanvasContainer=function(){return this._canvasContainer},n.prototype.getCanvas=function(){return this._canvas},n.prototype._containerDimensions=function(){var t=0,e=0;return this._container&&(t=this._container.offsetWidth||400,e=this._container.offsetHeight||300),[t,e]},n.prototype._setupContainer=function(){var t=this._container;t.classList.add("mapboxgl-map"),(this._missingCSSContainer=s.create("div","mapboxgl-missing-css",t)).innerHTML="Missing Mapbox GL JS CSS";var e=this._canvasContainer=s.create("div","mapboxgl-canvas-container",t);this._interactive&&e.classList.add("mapboxgl-interactive"),this._canvas=s.create("canvas","mapboxgl-canvas",e),this._canvas.style.position="absolute",this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map");var i=this._containerDimensions();this._resizeCanvas(i[0],i[1]);var n=this._controlContainer=s.create("div","mapboxgl-control-container",t),o=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach(function(t){o[t]=s.create("div","mapboxgl-ctrl-"+t,n);});},n.prototype._resizeCanvas=function(e,i){var n=t.default.devicePixelRatio||1;this._canvas.width=n*e,this._canvas.height=n*i,this._canvas.style.width=e+"px",this._canvas.style.height=i+"px";},n.prototype._setupPainter=function(){var i=t.extend({failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer},e.webGLContextAttributes),n=this._canvas.getContext("webgl",i)||this._canvas.getContext("experimental-webgl",i);n?this.painter=new Li(n,this.transform):this.fire(new t.ErrorEvent(new Error("Failed to initialize WebGL")));},n.prototype._contextLost=function(e){e.preventDefault(),this._frameId&&(r.cancelFrame(this._frameId),this._frameId=null),this.fire(new t.Event("webglcontextlost",{originalEvent:e}));},n.prototype._contextRestored=function(e){this._setupPainter(),this.resize(),this._update(),this.fire(new t.Event("webglcontextrestored",{originalEvent:e}));},n.prototype.loaded=function(){return!this._styleDirty&&!this._sourcesDirty&&!(!this.style||!this.style.loaded())},n.prototype._update=function(t){this.style&&(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this._rerender());},n.prototype._requestRenderFrame=function(t){return this._update(),this._renderTaskQueue.add(t)},n.prototype._cancelRenderFrame=function(t){this._renderTaskQueue.remove(t);},n.prototype._render=function(){this._renderTaskQueue.run();var e=!1;if(this.style&&this._styleDirty){this._styleDirty=!1;var i=this.transform.zoom,n=r.now();this.style.zoomHistory.update(i,n);var o=new t.default$16(i,{now:n,fadeDuration:this._fadeDuration,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),a=o.crossFadingFactor();1===a&&a===this._crossFadingFactor||(e=!0,this._crossFadingFactor=a),this.style.update(o);}return this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,this._fadeDuration),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),fadeDuration:this._fadeDuration}),this.fire(new t.Event("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,this.fire(new t.Event("load"))),this.style&&(this.style.hasTransitions()||e)&&(this._styleDirty=!0),(this._sourcesDirty||this._repaint||this._styleDirty||this._placementDirty)&&this._rerender(),this},n.prototype.remove=function(){this._hash&&this._hash.remove(),r.cancelFrame(this._frameId),this._renderTaskQueue.clear(),this._frameId=null,this.setStyle(null),void 0!==t.default&&(t.default.removeEventListener("resize",this._onWindowResize,!1),t.default.removeEventListener("online",this._onWindowOnline,!1));var e=this.painter.context.gl.getExtension("WEBGL_lose_context");e&&e.loseContext(),dn(this._canvasContainer),dn(this._controlContainer),dn(this._missingCSSContainer),this._container.classList.remove("mapboxgl-map"),this.fire(new t.Event("remove"));},n.prototype._rerender=function(){var t=this;this.style&&!this._frameId&&(this._frameId=r.frame(function(){t._frameId=null,t._render();}));},n.prototype._onWindowOnline=function(){this._update();},n.prototype._onWindowResize=function(){this._trackResize&&this.stop().resize()._update();},o.showTileBoundaries.get=function(){return!!this._showTileBoundaries},o.showTileBoundaries.set=function(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update());},o.showCollisionBoxes.get=function(){return!!this._showCollisionBoxes},o.showCollisionBoxes.set=function(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update());},o.showOverdrawInspector.get=function(){return!!this._showOverdrawInspector},o.showOverdrawInspector.set=function(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update());},o.repaint.get=function(){return!!this._repaint},o.repaint.set=function(t){this._repaint=t,this._update();},o.vertices.get=function(){return!!this._vertices},o.vertices.set=function(t){this._vertices=t,this._update();},n.prototype._onData=function(e){this._update("style"===e.dataType),this.fire(new t.Event(e.dataType+"data",e));},n.prototype._onDataLoading=function(e){this.fire(new t.Event(e.dataType+"dataloading",e));},Object.defineProperties(n.prototype,o),n}(rn);function dn(t){t.parentNode&&t.parentNode.removeChild(t);}var fn={showCompass:!0,showZoom:!0},mn=function(e){var i=this;this.options=t.extend({},fn,e),this._container=s.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this.options.showZoom&&(this._zoomInButton=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in","Zoom In",function(){return i._map.zoomIn()}),this._zoomOutButton=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out","Zoom Out",function(){return i._map.zoomOut()})),this.options.showCompass&&(t.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-compass","Reset North",function(){return i._map.resetNorth()}),this._compassArrow=s.create("span","mapboxgl-ctrl-compass-arrow",this._compass));};function _n(t,e,i){if(t=new W(t.lng,t.lat),e){var n=new W(t.lng-360,t.lat),o=new W(t.lng+360,t.lat),r=i.locationPoint(t).distSqr(e);i.locationPoint(n).distSqr(e)<r?t=n:i.locationPoint(o).distSqr(e)<r&&(t=o);}for(;Math.abs(t.lng-i.center.lng)>180;){var a=i.locationPoint(t);if(a.x>=0&&a.y>=0&&a.x<=i.width&&a.y<=i.height)break;t.lng>i.center.lng?t.lng-=360:t.lng+=360;}return t}mn.prototype._rotateCompassArrow=function(){var t="rotate("+this._map.transform.angle*(180/Math.PI)+"deg)";this._compassArrow.style.transform=t;},mn.prototype.onAdd=function(t){return this._map=t,this.options.showCompass&&(this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new Hi(t,{button:"left",element:this._compass}),this._handler.enable()),this._container},mn.prototype.onRemove=function(){s.remove(this._container),this.options.showCompass&&(this._map.off("rotate",this._rotateCompassArrow),this._handler.disable(),delete this._handler),delete this._map;},mn.prototype._createButton=function(t,e,i){var n=s.create("button",t,this._container);return n.type="button",n.setAttribute("aria-label",e),n.addEventListener("click",i),n};var gn={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"};function vn(t,e,i){var n=t.classList;for(var o in gn)n.remove("mapboxgl-"+i+"-anchor-"+o);n.add("mapboxgl-"+i+"-anchor-"+e);}var yn=function(e){if((arguments[0]instanceof t.default.HTMLElement||2===arguments.length)&&(e=t.extend({element:e},arguments[1])),t.bindAll(["_update","_onMapClick"],this),this._anchor=e&&e.anchor||"center",this._color=e&&e.color||"#3FB1CE",e&&e.element)this._element=e.element,this._offset=t.default$1.convert(e&&e.offset||[0,0]);else{this._defaultMarker=!0,this._element=s.create("div");var i=s.createNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS(null,"height","41px"),i.setAttributeNS(null,"width","27px"),i.setAttributeNS(null,"viewBox","0 0 27 41");var n=s.createNS("http://www.w3.org/2000/svg","g");n.setAttributeNS(null,"stroke","none"),n.setAttributeNS(null,"stroke-width","1"),n.setAttributeNS(null,"fill","none"),n.setAttributeNS(null,"fill-rule","evenodd");var o=s.createNS("http://www.w3.org/2000/svg","g");o.setAttributeNS(null,"fill-rule","nonzero");var r=s.createNS("http://www.w3.org/2000/svg","g");r.setAttributeNS(null,"transform","translate(3.0, 29.0)"),r.setAttributeNS(null,"fill","#000000");for(var a=0,l=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}];a<l.length;a+=1){var c=l[a],u=s.createNS("http://www.w3.org/2000/svg","ellipse");u.setAttributeNS(null,"opacity","0.04"),u.setAttributeNS(null,"cx","10.5"),u.setAttributeNS(null,"cy","5.80029008"),u.setAttributeNS(null,"rx",c.rx),u.setAttributeNS(null,"ry",c.ry),r.appendChild(u);}var h=s.createNS("http://www.w3.org/2000/svg","g");h.setAttributeNS(null,"fill",this._color);var p=s.createNS("http://www.w3.org/2000/svg","path");p.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),h.appendChild(p);var d=s.createNS("http://www.w3.org/2000/svg","g");d.setAttributeNS(null,"opacity","0.25"),d.setAttributeNS(null,"fill","#000000");var f=s.createNS("http://www.w3.org/2000/svg","path");f.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),d.appendChild(f);var m=s.createNS("http://www.w3.org/2000/svg","g");m.setAttributeNS(null,"transform","translate(6.0, 7.0)"),m.setAttributeNS(null,"fill","#FFFFFF");var _=s.createNS("http://www.w3.org/2000/svg","g");_.setAttributeNS(null,"transform","translate(8.0, 8.0)");var g=s.createNS("http://www.w3.org/2000/svg","circle");g.setAttributeNS(null,"fill","#000000"),g.setAttributeNS(null,"opacity","0.25"),g.setAttributeNS(null,"cx","5.5"),g.setAttributeNS(null,"cy","5.5"),g.setAttributeNS(null,"r","5.4999962");var v=s.createNS("http://www.w3.org/2000/svg","circle");v.setAttributeNS(null,"fill","#FFFFFF"),v.setAttributeNS(null,"cx","5.5"),v.setAttributeNS(null,"cy","5.5"),v.setAttributeNS(null,"r","5.4999962"),_.appendChild(g),_.appendChild(v),o.appendChild(r),o.appendChild(h),o.appendChild(d),o.appendChild(m),o.appendChild(_),i.appendChild(o),this._element.appendChild(i),this._offset=t.default$1.convert(e&&e.offset||[0,-14]);}this._element.classList.add("mapboxgl-marker"),this._popup=null;};yn.prototype.addTo=function(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this._update(),this._map.on("click",this._onMapClick),this},yn.prototype.remove=function(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),delete this._map),s.remove(this._element),this._popup&&this._popup.remove(),this},yn.prototype.getLngLat=function(){return this._lngLat},yn.prototype.setLngLat=function(t){return this._lngLat=W.convert(t),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this},yn.prototype.getElement=function(){return this._element},yn.prototype.setPopup=function(t){if(this._popup&&(this._popup.remove(),this._popup=null),t){if(!("offset"in t.options)){var e=Math.sqrt(Math.pow(13.5,2)/2);t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-38.1],"bottom-left":[e,-1*(24.6+e)],"bottom-right":[-e,-1*(24.6+e)],left:[13.5,-24.6],right:[-13.5,-24.6]}:this._offset;}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat);}return this},yn.prototype._onMapClick=function(t){var e=t.originalEvent.target,i=this._element;this._popup&&(e===i||i.contains(e))&&this.togglePopup();},yn.prototype.getPopup=function(){return this._popup},yn.prototype.togglePopup=function(){var t=this._popup;return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this},yn.prototype._update=function(t){this._map&&(this._map.transform.renderWorldCopies&&(this._lngLat=_n(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset),t&&"moveend"!==t.type||(this._pos=this._pos.round()),s.setTransform(this._element,gn[this._anchor]+" translate("+this._pos.x+"px, "+this._pos.y+"px)"),vn(this._element,this._anchor,"marker"));},yn.prototype.getOffset=function(){return this._offset},yn.prototype.setOffset=function(e){return this._offset=t.default$1.convert(e),this._update(),this};var xn,bn={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showUserLocation:!0};var wn=function(e){function i(i){e.call(this),this.options=t.extend({},bn,i),t.bindAll(["_onSuccess","_onError","_finish","_setupUI","_updateCamera","_updateMarker"],this);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.onAdd=function(e){var i;return this._map=e,this._container=s.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),i=this._setupUI,void 0!==xn?i(xn):void 0!==t.default.navigator.permissions?t.default.navigator.permissions.query({name:"geolocation"}).then(function(t){xn="denied"!==t.state,i(xn);}):(xn=!!t.default.navigator.geolocation,i(xn)),this._container},i.prototype.onRemove=function(){void 0!==this._geolocationWatchID&&(t.default.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker.remove(),s.remove(this._container),this._map=void 0;},i.prototype._onSuccess=function(e){if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");break;case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background");}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("mapboxgl-user-location-dot-stale"),this.fire(new t.Event("geolocate",e)),this._finish();},i.prototype._updateCamera=function(t){var e=new W(t.coords.longitude,t.coords.latitude),i=t.coords.accuracy;this._map.fitBounds(e.toBounds(i),this.options.fitBoundsOptions,{geolocateSource:!0});},i.prototype._updateMarker=function(t){t?this._userLocationDotMarker.setLngLat([t.coords.longitude,t.coords.latitude]).addTo(this._map):this._userLocationDotMarker.remove();},i.prototype._onError=function(e){if(this.options.trackUserLocation)if(1===e.code)this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),void 0!==this._geolocationWatchID&&this._clearWatch();else switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error");break;case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting");break;case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting");}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("mapboxgl-user-location-dot-stale"),this.fire(new t.Event("error",e)),this._finish();},i.prototype._finish=function(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0;},i.prototype._setupUI=function(e){var i=this;!1!==e&&(this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this._geolocateButton=s.create("button","mapboxgl-ctrl-icon mapboxgl-ctrl-geolocate",this._container),this._geolocateButton.type="button",this._geolocateButton.setAttribute("aria-label","Geolocate"),this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=s.create("div","mapboxgl-user-location-dot"),this._userLocationDotMarker=new yn(this._dotElement),this.options.trackUserLocation&&(this._watchState="OFF")),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",function(e){e.geolocateSource||"ACTIVE_LOCK"!==i._watchState||(i._watchState="BACKGROUND",i._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background"),i._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),i.fire(new t.Event("trackuserlocationend")));}));},i.prototype.trigger=function(){if(!this._setup)return t.warnOnce("Geolocate control triggered before added to a map"),!1;if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.Event("trackuserlocationstart"));break;case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this.fire(new t.Event("trackuserlocationend"));break;case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.Event("trackuserlocationstart"));}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");break;case"ACTIVE_LOCK":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");break;case"ACTIVE_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error");break;case"BACKGROUND":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background");break;case"BACKGROUND_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error");}"OFF"===this._watchState&&void 0!==this._geolocationWatchID?this._clearWatch():void 0===this._geolocationWatchID&&(this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),this._geolocationWatchID=t.default.navigator.geolocation.watchPosition(this._onSuccess,this._onError,this.options.positionOptions));}else t.default.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4);return!0},i.prototype._clearWatch=function(){t.default.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null);},i}(t.Evented),En={maxWidth:100,unit:"metric"},Tn=function(e){this.options=t.extend({},En,e),t.bindAll(["_onMove","setUnit"],this);};function In(t,e,i){var n,o,r,a,s,l,c=i&&i.maxWidth||100,u=t._container.clientHeight/2,h=(n=t.unproject([0,u]),o=t.unproject([c,u]),r=Math.PI/180,a=n.lat*r,s=o.lat*r,l=Math.sin(a)*Math.sin(s)+Math.cos(a)*Math.cos(s)*Math.cos((o.lng-n.lng)*r),6371e3*Math.acos(Math.min(l,1)));if(i&&"imperial"===i.unit){var p=3.2808*h;if(p>5280)Cn(e,c,p/5280,"mi");else Cn(e,c,p,"ft");}else if(i&&"nautical"===i.unit){Cn(e,c,h/1852,"nm");}else Cn(e,c,h,"m");}function Cn(t,e,i,n){var o,r,a,s=(o=i,(r=Math.pow(10,(""+Math.floor(o)).length-1))*(a=(a=o/r)>=10?10:a>=5?5:a>=3?3:a>=2?2:1)),l=s/i;"m"===n&&s>=1e3&&(s/=1e3,n="km"),t.style.width=e*l+"px",t.innerHTML=s+n;}Tn.prototype.getDefaultPosition=function(){return"bottom-left"},Tn.prototype._onMove=function(){In(this._map,this._container,this.options);},Tn.prototype.onAdd=function(t){return this._map=t,this._container=s.create("div","mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container},Tn.prototype.onRemove=function(){s.remove(this._container),this._map.off("move",this._onMove),this._map=void 0;},Tn.prototype.setUnit=function(t){this.options.unit=t,In(this._map,this._container,this.options);};var Sn=function(){this._fullscreen=!1,t.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in t.default.document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in t.default.document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in t.default.document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in t.default.document&&(this._fullscreenchange="MSFullscreenChange"),this._className="mapboxgl-ctrl";};Sn.prototype.onAdd=function(e){return this._map=e,this._mapContainer=this._map.getContainer(),this._container=s.create("div",this._className+" mapboxgl-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._container.style.display="none",t.warnOnce("This device does not support fullscreen mode.")),this._container},Sn.prototype.onRemove=function(){s.remove(this._container),this._map=null,t.default.document.removeEventListener(this._fullscreenchange,this._changeIcon);},Sn.prototype._checkFullscreenSupport=function(){return!!(t.default.document.fullscreenEnabled||t.default.document.mozFullScreenEnabled||t.default.document.msFullscreenEnabled||t.default.document.webkitFullscreenEnabled)},Sn.prototype._setupUI=function(){var e=this._fullscreenButton=s.create("button",this._className+"-icon "+this._className+"-fullscreen",this._container);e.setAttribute("aria-label","Toggle fullscreen"),e.type="button",this._fullscreenButton.addEventListener("click",this._onClickFullscreen),t.default.document.addEventListener(this._fullscreenchange,this._changeIcon);},Sn.prototype._isFullscreen=function(){return this._fullscreen},Sn.prototype._changeIcon=function(){(t.default.document.fullscreenElement||t.default.document.mozFullScreenElement||t.default.document.webkitFullscreenElement||t.default.document.msFullscreenElement)===this._mapContainer!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle(this._className+"-shrink"),this._fullscreenButton.classList.toggle(this._className+"-fullscreen"));},Sn.prototype._onClickFullscreen=function(){this._isFullscreen()?t.default.document.exitFullscreen?t.default.document.exitFullscreen():t.default.document.mozCancelFullScreen?t.default.document.mozCancelFullScreen():t.default.document.msExitFullscreen?t.default.document.msExitFullscreen():t.default.document.webkitCancelFullScreen&&t.default.document.webkitCancelFullScreen():this._mapContainer.requestFullscreen?this._mapContainer.requestFullscreen():this._mapContainer.mozRequestFullScreen?this._mapContainer.mozRequestFullScreen():this._mapContainer.msRequestFullscreen?this._mapContainer.msRequestFullscreen():this._mapContainer.webkitRequestFullscreen&&this._mapContainer.webkitRequestFullscreen();};var zn={closeButton:!0,closeOnClick:!0},An=function(e){function i(i){e.call(this),this.options=t.extend(Object.create(zn),i),t.bindAll(["_update","_onClickClose"],this);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.addTo=function(e){return this._map=e,this._map.on("move",this._update),this.options.closeOnClick&&this._map.on("click",this._onClickClose),this._update(),this.fire(new t.Event("open")),this},i.prototype.isOpen=function(){return!!this._map},i.prototype.remove=function(){return this._content&&s.remove(this._content),this._container&&(s.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("click",this._onClickClose),delete this._map),this.fire(new t.Event("close")),this},i.prototype.getLngLat=function(){return this._lngLat},i.prototype.setLngLat=function(t){return this._lngLat=W.convert(t),this._pos=null,this._update(),this},i.prototype.setText=function(e){return this.setDOMContent(t.default.document.createTextNode(e))},i.prototype.setHTML=function(e){var i,n=t.default.document.createDocumentFragment(),o=t.default.document.createElement("body");for(o.innerHTML=e;i=o.firstChild;)n.appendChild(i);return this.setDOMContent(n)},i.prototype.setDOMContent=function(t){return this._createContent(),this._content.appendChild(t),this._update(),this},i.prototype._createContent=function(){this._content&&s.remove(this._content),this._content=s.create("div","mapboxgl-popup-content",this._container),this.options.closeButton&&(this._closeButton=s.create("button","mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClickClose));},i.prototype._update=function(){if(this._map&&this._lngLat&&this._content){this._container||(this._container=s.create("div","mapboxgl-popup",this._map.getContainer()),this._tip=s.create("div","mapboxgl-popup-tip",this._container),this._container.appendChild(this._content)),this._map.transform.renderWorldCopies&&(this._lngLat=_n(this._lngLat,this._pos,this._map.transform));var e=this._pos=this._map.project(this._lngLat),i=this.options.anchor,n=function e(i){if(i){if("number"==typeof i){var n=Math.round(Math.sqrt(.5*Math.pow(i,2)));return{center:new t.default$1(0,0),top:new t.default$1(0,i),"top-left":new t.default$1(n,n),"top-right":new t.default$1(-n,n),bottom:new t.default$1(0,-i),"bottom-left":new t.default$1(n,-n),"bottom-right":new t.default$1(-n,-n),left:new t.default$1(i,0),right:new t.default$1(-i,0)}}if(i instanceof t.default$1||Array.isArray(i)){var o=t.default$1.convert(i);return{center:o,top:o,"top-left":o,"top-right":o,bottom:o,"bottom-left":o,"bottom-right":o,left:o,right:o}}return{center:t.default$1.convert(i.center||[0,0]),top:t.default$1.convert(i.top||[0,0]),"top-left":t.default$1.convert(i["top-left"]||[0,0]),"top-right":t.default$1.convert(i["top-right"]||[0,0]),bottom:t.default$1.convert(i.bottom||[0,0]),"bottom-left":t.default$1.convert(i["bottom-left"]||[0,0]),"bottom-right":t.default$1.convert(i["bottom-right"]||[0,0]),left:t.default$1.convert(i.left||[0,0]),right:t.default$1.convert(i.right||[0,0])}}return e(new t.default$1(0,0))}(this.options.offset);if(!i){var o,r=this._container.offsetWidth,a=this._container.offsetHeight;o=e.y+n.bottom.y<a?["top"]:e.y>this._map.transform.height-a?["bottom"]:[],e.x<r/2?o.push("left"):e.x>this._map.transform.width-r/2&&o.push("right"),i=0===o.length?"bottom":o.join("-");}var l=e.add(n[i]).round();s.setTransform(this._container,gn[i]+" translate("+l.x+"px,"+l.y+"px)"),vn(this._container,i,"popup");}},i.prototype._onClickClose=function(){this.remove();},i}(t.Evented);var Rn={version:"0.45.0",supported:e,workerCount:Math.max(Math.floor(r.hardwareConcurrency/2),1),setRTLTextPlugin:t.setRTLTextPlugin,Map:pn,NavigationControl:mn,GeolocateControl:wn,AttributionControl:an,ScaleControl:Tn,FullscreenControl:Sn,Popup:An,Marker:yn,Style:Qe,LngLat:W,LngLatBounds:q,Point:t.default$1,Evented:t.Evented,config:_,get accessToken(){return _.ACCESS_TOKEN},set accessToken(t){_.ACCESS_TOKEN=t;},workerUrl:""};return Rn});

//

return mapboxgl;

})));
//# sourceMappingURL=mapbox-gl.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(33).setImmediate))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(34);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(36)
/* script */
var __vue_script__ = __webpack_require__(37)
/* template */
var __vue_template__ = __webpack_require__(38)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ObstructionBrowser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60c329df", Component.options)
  } else {
    hotAPI.reload("data-v-60c329df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  components: {
    obstructionMap: __webpack_require__(44),
    obstructionItem: __webpack_require__(47)
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex-wrap" }, [
    _c("div", { staticClass: "w-full lg:w-2/3" }, [
      _c("div", { staticClass: "h-64 lg:h-screen" }, [_c("obstruction-map")], 1)
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "w-full h-screen lg:overflow-y-scroll bg-grey-lighter lg:w-1/3 py-4"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {},
          [
            _c("obstruction-item"),
            _vm._v(" "),
            _c("obstruction-item"),
            _vm._v(" "),
            _c("obstruction-item"),
            _vm._v(" "),
            _c("obstruction-item"),
            _vm._v(" "),
            _c("obstruction-item"),
            _vm._v(" "),
            _c("obstruction-item")
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full text-center" }, [
      _c("div", { staticClass: "self-center" }, [
        _c("img", { staticClass: "h-10 w-10", attrs: { src: "/logo.svg" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60c329df", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(36)
/* script */
var __vue_script__ = __webpack_require__(45)
/* template */
var __vue_template__ = __webpack_require__(46)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ObstructionMap.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76705193", Component.options)
  } else {
    hotAPI.reload("data-v-76705193", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var map = new window.mapbox.Map({
      container: this.$el,
      style: "mapbox://styles/mapbox/streets-v10"
    });
  }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "h-full w-full" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-76705193", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(36)
/* script */
var __vue_script__ = __webpack_require__(48)
/* template */
var __vue_template__ = __webpack_require__(49)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ObstructionItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d4854f28", Component.options)
  } else {
    hotAPI.reload("data-v-d4854f28", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  components: {}
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "max-w-md w-full lg:flex px-2 pt-2 " }, [
    _c("div", {
      staticClass:
        "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",
      staticStyle: {
        "background-image": "url('https://tailwindcss.com/img/card-left.jpg')"
      },
      attrs: { title: "Woman holding a mug" }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      },
      [
        _c("div", { staticClass: "mb-8" }, [
          _c("p", { staticClass: "text-sm text-grey-dark flex items-center" }, [
            _c(
              "svg",
              {
                staticClass: "fill-current text-grey w-3 h-3 mr-2",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  }
                })
              ]
            ),
            _vm._v("\n                Members only\n            ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-black font-bold text-xl mb-2" }, [
            _vm._v("Can coffee make you a better developer?")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-grey-darker text-base" }, [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center" }, [
      _c("img", {
        staticClass: "w-10 h-10 rounded-full mr-4",
        attrs: {
          src:
            "https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg",
          alt: "Avatar of Jonathan Reinink"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "text-sm" }, [
        _c("p", { staticClass: "text-black leading-none" }, [
          _vm._v("Jonathan Reinink")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-grey-dark" }, [_vm._v("Aug 18")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d4854f28", module.exports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ })
/******/ ]);