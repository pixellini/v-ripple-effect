(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ripple"] = factory();
	else
		root["ripple"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/directive-ripple.js
var ripple = function ripple(el, binding) {
  var _ref = binding.value || {},
      time = _ref.time,
      ease = _ref.ease,
      color = _ref.color,
      startingOpacity = _ref.startingOpacity;

  var TIME = time || 0.8;
  var EASE = ease || 'ease';
  var BACKGROUND = color || '#000';
  var STARTING_OPACITY = startingOpacity || 0.2;
  /**
   * @description
   * A container element to hold the ripple element.
   * This is so we don't need to change the styling of the original element width the "ripple" class.
   * For example, the style "overflow" needs to be hidden to prevent the ripple growing outside the boundaries.
   */

  var createContainerElement = function createContainerElement() {
    var container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.left = 0;
    container.style.height = '100%';
    container.style.width = '100%';
    container.style.overflow = 'hidden';
    return container;
  };
  /**
   * @description
   * Creates the element that will be the ripple effect.
   */


  var createRippleElement = function createRippleElement(x, y) {
    var element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.borderRadius = '50%';
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    element.style.transform = 'translate(-50%, -50%)';
    element.style.backgroundColor = BACKGROUND;
    element.style.height = 0;
    element.style.width = 0;
    element.style.opacity = STARTING_OPACITY;
    element.style.transition = "all ".concat(TIME, "s ").concat(EASE);
    return element;
  };
  /**
   * @description
   * Creates the ripple animation by creating a ripple element.
   * After 30 milliseconds, it will apply new styles to that element 
   * to begin the animation and then remove it once it's done animating.
   */


  var rippleAnimation = function rippleAnimation(element, x, y, size) {
    var container = createContainerElement();
    var ripple = createRippleElement(x, y);
    element.appendChild(container);
    container.appendChild(ripple); // Add the styles to cause the ripple effect.

    setTimeout(function () {
      var newSize = size * 2 + 'px';
      ripple.style.height = newSize;
      ripple.style.width = newSize;
      ripple.style.opacity = 0;
    }, 40); // Delete the node from the DOM.

    setTimeout(function () {
      element.removeChild(container);
    }, TIME * 1000);
  };
  /**
   * @description
   * The on click handler for starting the ripple effect.
   */


  var onClickHandler = function onClickHandler(e) {
    var target = e.target; // If the user clicked the currently animating ripple or container, select the parent element.

    while (target !== el) {
      target = target.parentElement;
    }

    var width = target.clientWidth;
    var height = target.clientHeight;
    var size = height > width ? height : width;
    var x = e.x - target.offsetLeft + window.scrollX;
    var y = e.y - target.offsetTop + window.scrollY;
    rippleAnimation(target, // Element
    x, // Mouse Click X Position
    y, // Mouse Click Y Position
    size // Ripple Size
    );
  };

  el.style.position = 'relative';
  el.addEventListener('click', onClickHandler);
};

/* harmony default export */ var directive_ripple = (ripple);
// CONCATENATED MODULE: ./src/ripple.js

var RippleDirective = {
  install: function install(Vue) {
    Vue.directive('ripple', directive_ripple);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RippleDirective);
}

/* harmony default export */ var src_ripple = (RippleDirective);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_ripple);



/***/ })

/******/ });
});
//# sourceMappingURL=ripple.umd.js.map