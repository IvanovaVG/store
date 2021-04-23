(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["dsComponentsService"] = factory(require("lodash"));
	else
		root["dsComponentsService"] = factory(root["_"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		40: 0,
/******/ 		42: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"76":"wixui.dsComponentDefinitions"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.1559.0/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1533);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/*!**********************!*\
  !*** ./overrides.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createOverrideMap = function createOverrideMap(requireFn) {
  return requireFn.keys().map(requireFn).reduce(function (overridesMap, compOverrideMetadata) {
    overridesMap[compOverrideMetadata.overrideViewerType] = compOverrideMetadata;
    return overridesMap;
  }, {});
};

var componentOverrides = createOverrideMap(__webpack_require__(126));

function getOverrides() {
  return componentOverrides;
}

module.exports = {
  getOverrides: getOverrides
};

/***/ }),

/***/ 126:
/*!************************************************!*\
  !*** ./components sync componentOverride\.js$ ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 126;

/***/ }),

/***/ 1533:
/*!**********************************!*\
  !*** ./components-service/ds.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var BaseService = __webpack_require__(/*! ./base-service */ 167);

var compsToPackages = {
  'wixui.RichTextBox': function wixuiRichTextBox() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../legacy/components/RichTextBox/ds */ 1544))]);
  },
  'wixui.ToggleSwitch': function wixuiToggleSwitch() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../legacy/components/ToggleSwitch/ds */ 1545))]);
  },
  'wixui.Slider': function wixuiSlider() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/Slider/ds */ 1546))]);
  },
  'wixui.SearchBox': function wixuiSearchBox() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/SearchBox/ds */ 1547))]);
  },
  'wixui.Captcha': function wixuiCaptcha() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/Captcha/ds */ 1548))]);
  },
  'wixui.Pagination': function wixuiPagination() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/Pagination/ds */ 1549))]);
  },
  'wixui.AddressInput': function wixuiAddressInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/AddressInput/ds */ 1550))]);
  },
  'wixui.StylableLine': function wixuiStylableLine() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/StylableLine/ds */ 1551))]);
  },
  'wixui.Tags': function wixuiTags() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/Tags/ds */ 1552))]);
  },
  'wixui.RatingsInput': function wixuiRatingsInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/RatingsInput/ds */ 1553))]);
  },
  'wixui.TimePicker': function wixuiTimePicker() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/TimePicker/ds */ 1554))]);
  },
  'wixui.RatingsDisplay': function wixuiRatingsDisplay() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/RatingsDisplay/ds */ 1555))]);
  },
  'wixui.VideoPlayer': function wixuiVideoPlayer() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/VideoPlayer/ds */ 1556))]);
  },
  'wixui.baseui.ToggleSwitch': function wixuiBaseuiToggleSwitch() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../baseUI/components/BaseUIToggleSwitch/ds */ 1464))]);
  },
  'wixui.LineShareButton': function wixuiLineShareButton() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/LineShareButton/ds */ 1557))]);
  },
  'wixui.MusicPlayer': function wixuiMusicPlayer() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/MusicPlayer/ds */ 1558))]);
  },
  'wixui.StylableButton': function wixuiStylableButton() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/StylableButton/ds */ 1559))]);
  },
  'wixui.ProgressBar': function wixuiProgressBar() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/ProgressBar/ds */ 1560))]);
  },
  'wixui.BarChart': function wixuiBarChart() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/BarChart/ds */ 1561))]);
  },
  'wixui.CustomElementComponent': function wixuiCustomElementComponent() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/CustomElement/ds */ 1562))]);
  },
  'wixui.SignatureInput': function wixuiSignatureInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/SignatureInput/ds */ 1563))]);
  },
  'wixui.SelectionTagsList': function wixuiSelectionTagsList() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/SelectionTagsList/ds */ 1564))]);
  },
  'wixui.StylableHorizontalMenu': function wixuiStylableHorizontalMenu() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/StylableHorizontalMenu/document-services */ 1565))]);
  },
  'wixui.ImageX': function wixuiImageX() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/ImageX/document-services */ 1566))]);
  },
  'wixui.SocialAuth': function wixuiSocialAuth() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/SocialAuth/document-services */ 1567))]);
  },
  'wixui.OldBlogDeprecation': function wixuiOldBlogDeprecation() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 76).then(__webpack_require__.bind(null, /*! ../components/OldBlogDeprecation/document-services */ 1568))]);
  }
};
module.exports = new BaseService(compsToPackages);

/***/ }),

/***/ 167:
/*!********************************************!*\
  !*** ./components-service/base-service.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../overrides */ 125),
    getOverrides = _require.getOverrides;

function BaseService(_compsToPackages) {
  var compsToPackages = _compsToPackages;
  var overrides = getOverrides();

  function setWebpackPublicPath(baseUrl) {
    /**
     * NOTE: it could done without reg-exp, like this:
     *
     * const withEndSlash = baseUrl[baseUrl.length - 1] === '/';
     * __webpack_public_path__ = withEndSlash ? baseUrl + '/' : `${baseUrl}/`;
     *
     * but it some cases `baseUrl` may come with /// or even //// slashes at the end
     */
    __webpack_require__.p = (baseUrl + "/").replace(/\/+$/g, '/'); // eslint-disable-line
  }

  function loadComponent(componentType) {
    if (overrides[componentType]) {
      componentType = overrides[componentType].newComponentViewerType;
    }

    if (!exists(componentType)) {
      return Promise.reject(new Error("no such component " + componentType));
    }

    return compsToPackages[componentType]()["catch"](function (e) {
      //fix for ie11, doesn't load components
      console.error('coudn\'t load ' + componentType, e);
      return [{
        "default": {
          componentType: componentType,
          component: function component() {
            return null;
          },
          santaComponent: function santaComponent() {
            return null;
          },
          skin: {}
        }
      }];
    });
  }

  function exists(componentType, runningExperiments) {
    return !!compsToPackages[componentType] || overrides[componentType] && runningExperiments && runningExperiments[overrides[componentType].viewerExperimentKey] === 'new';
  }

  function loadAll(baseUrl) {
    setWebpackPublicPath(baseUrl);
    return Promise.all(Object.keys(compsToPackages).map(loadComponent));
  }

  function load(componentType, baseUrl) {
    setWebpackPublicPath(baseUrl);
    return loadComponent(componentType);
  }

  return {
    exists: exists,
    loadAll: loadAll,
    load: load
  };
}

module.exports = BaseService;

/***/ }),

/***/ 3:
/*!*************************************************************************************!*\
  !*** external {"amd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ })

/******/ });
});
//# sourceMappingURL=dsComponentsService.bundle.js.map