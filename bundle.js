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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/back.svg":
/*!*************************!*\
  !*** ./assets/back.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg viewBox=\\\"0 0 48 48\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M0 0h48v48h-48z\\\" fill=\\\"none\\\"></path><path d=\\\"M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z\\\" fill=\\\"#f3e8f6\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/back.svg?");

/***/ }),

/***/ "./assets/clip.svg":
/*!*************************!*\
  !*** ./assets/clip.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg viewBox=\\\"0 0 48 48\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M33 12v23c0 4.42-3.58 8-8 8s-8-3.58-8-8v-25c0-2.76 2.24-5 5-5s5 2.24 5 5v21c0 1.1-.89 2-2 2-1.11 0-2-.9-2-2v-19h-3v19c0 2.76 2.24 5 5 5s5-2.24 5-5v-21c0-4.42-3.58-8-8-8s-8 3.58-8 8v25c0 6.08 4.93 11 11 11s11-4.92 11-11v-23h-3z\\\" fill=\\\"#757575\\\"></path><path d=\\\"M0 0h48v48h-48z\\\" fill=\\\"none\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/clip.svg?");

/***/ }),

/***/ "./assets/more.svg":
/*!*************************!*\
  !*** ./assets/more.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg viewBox=\\\"0 0 48 48\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M0 0h48v48h-48z\\\" fill=\\\"none\\\"></path><path d=\\\"M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\\\" fill=\\\"#f3e8f6\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/more.svg?");

/***/ }),

/***/ "./assets/search.svg":
/*!***************************!*\
  !*** ./assets/search.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg viewBox=\\\"0 0 48 48\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z\\\" fill=\\\"#f3e8f6\\\"></path><path d=\\\"M0 0h48v48h-48z\\\" fill=\\\"none\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/search.svg?");

/***/ }),

/***/ "./components/FormInput.js":
/*!*********************************!*\
  !*** ./components/FormInput.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_clip_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/clip.svg */ \"./assets/clip.svg\");\n/* harmony import */ var _assets_clip_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_clip_svg__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        input {\\n            border: 0;\\n            outline: none;\\n            width: calc(100% - 2px);\\n        }\\n\\n        :host {\\n            display: inline-block;\\n            border: 1px solid rgba(25, 25, 25, 0.32);\\n        }\\n        .input-block {\\n            display: flex;\\n            font-size: 1.5rem;\\n            padding: 5px 0;\\n        }\\n        .input-clip > svg {\\n          transform: rotate(90deg);\\n          height: 1em;\\n          margin-right: 10px;\\n        }\\n    </style>\\n    <div class=\\\"input-block\\\">\\n      <input type=\\\"text\\\">\\n      <div class=\\\"input-clip\\\">\".concat(_assets_clip_svg__WEBPACK_IMPORTED_MODULE_0___default.a, \"</div>\\n    </div>\\n\");\n\nvar FormInput =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(FormInput, _HTMLElement);\n\n  function FormInput() {\n    var _this;\n\n    _classCallCheck(this, FormInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$input = _this.shadowRoot.querySelector('input');\n    return _this;\n  }\n\n  _createClass(FormInput, [{\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.$input.setAttribute(name, newValue);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.$input.value = '';\n    }\n  }, {\n    key: \"value\",\n    get: function get() {\n      return this.$input.value;\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['name', 'value', 'placeholder', 'disabled'];\n    }\n  }]);\n\n  return FormInput;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('form-input', FormInput);\n\n//# sourceURL=webpack:///./components/FormInput.js?");

/***/ }),

/***/ "./components/MessageForm.js":
/*!***********************************!*\
  !*** ./components/MessageForm.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        :root {\\n          height: 100vh;\\n        }\\n        form-input {\\n          display: block;\\n        }\\n\\n        message-header {\\n          position: fixed;\\n          top: 0;\\n          width: 100vw;\\n          z-index: 1;\\n        }\\n\\n        .result {\\n            --bgcolour: #f5f5f5;\\n            background-color: var(--bgcolour);\\n            padding-top: 48px;\\n            height: calc(100vh - 48px - 36px);\\n            overflow-y: auto;\\n        }\\n\\n        .message-container {\\n            margin: 5px;\\n        }\\n\\n        input[type=submit] {\\n            visibility: collapse;\\n        }\\n    </style>\\n    <form>\\n        \\n      <message-header username=\\\"Me\\\"></message-header>\\n        <div class=\\\"result\\\"></div>\\n        <form-input name=\\\"message-text\\\" placeholder=\\\"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u0438\\u043D\\u0435\\\"></form-input>\\n    </form>\\n\";\nvar userName = 'Me';\n\nvar MessageForm =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessageForm, _HTMLElement);\n\n  function MessageForm() {\n    var _this;\n\n    _classCallCheck(this, MessageForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageForm).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$form = _this._shadowRoot.querySelector('form');\n    _this.$input = _this._shadowRoot.querySelector('form-input');\n    _this.$messages = _this._shadowRoot.querySelector('.result');\n\n    _this.$form.addEventListener('submit', _this._onSubmit.bind(_assertThisInitialized(_this)));\n\n    _this.$form.addEventListener('keypress', _this._onKeyPress.bind(_assertThisInitialized(_this)));\n\n    _this._loadLocalStorage();\n\n    _this._rederMessages();\n\n    return _this;\n  }\n\n  _createClass(MessageForm, [{\n    key: \"_onSubmit\",\n    value: function _onSubmit(event) {\n      event.preventDefault();\n\n      if (this.$input.value.length !== 0) {\n        this._newMessage(this.$input.value, userName);\n\n        this._saveLocalStorage();\n\n        this._rederMessages();\n\n        this.$input.reset();\n\n        this._scrollToLast();\n      }\n    }\n  }, {\n    key: \"_scrollToLast\",\n    value: function _scrollToLast() {\n      this.$messages.lastChild.scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  }, {\n    key: \"_onKeyPress\",\n    value: function _onKeyPress(event) {\n      if (event.keyCode === 13) {\n        this.$form.dispatchEvent(new Event('submit'));\n      }\n    }\n  }, {\n    key: \"_newMessage\",\n    value: function _newMessage(value, user) {\n      var message = {\n        value: value,\n        user: user,\n        date: Date.now()\n      };\n      this.messages.push(message);\n    }\n  }, {\n    key: \"_loadLocalStorage\",\n    value: function _loadLocalStorage() {\n      this.messages = JSON.parse(localStorage.getItem('messages')) || [];\n    }\n  }, {\n    key: \"_saveLocalStorage\",\n    value: function _saveLocalStorage() {\n      localStorage.setItem('messages', JSON.stringify(this.messages));\n    }\n  }, {\n    key: \"_rederMessages\",\n    value: function _rederMessages() {\n      var _this2 = this;\n\n      this.$messages.innerHTML = '';\n      this.messages.forEach(function (elem) {\n        var newMessage = document.createElement('div');\n        newMessage.className = 'message-container';\n        var date = new Date(elem.date);\n        newMessage.innerHTML = \"<single-message user=\\\"\".concat(elem.user, \"\\\" message=\\\"\").concat(elem.value, \"\\\" time=\\\"\").concat(date.toTimeString().slice(0, 5), \"\\\"></single-message>\");\n\n        _this2.$messages.appendChild(newMessage);\n      });\n    }\n  }]);\n\n  return MessageForm;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('message-form', MessageForm);\n\n//# sourceURL=webpack:///./components/MessageForm.js?");

/***/ }),

/***/ "./components/MessageHeader.js":
/*!*************************************!*\
  !*** ./components/MessageHeader.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_back_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/back.svg */ \"./assets/back.svg\");\n/* harmony import */ var _assets_back_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_back_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_clip_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/clip.svg */ \"./assets/clip.svg\");\n/* harmony import */ var _assets_clip_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_clip_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_more_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/more.svg */ \"./assets/more.svg\");\n/* harmony import */ var _assets_more_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_more_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/search.svg */ \"./assets/search.svg\");\n/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_search_svg__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n<style>\\n  .header {\\n    height: 48px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background-color: #8e24aa;\\n    color: #f3e8f6;\\n  }\\n  .iconcontainer {\\n    margin: 0 10px;\\n  }\\n\\n  .iconcontainer > svg {\\n    height: 32px;\\n  }\\n  .right-end > .iconcontainer {\\n    display: inline-block;\\n  }\\n  .text--username {\\n    font-size: 20px;\\n    line-height: 20px;\\n    height: 20px;\\n  }\\n</style>\\n<div class=\\\"header\\\">\\n  <div class=\\\"iconcontainer iconcontainer--back\\\">\".concat(_assets_back_svg__WEBPACK_IMPORTED_MODULE_0___default.a, \"</div>\\n  <div class=\\\"person\\\">\\n    <div class=\\\"imagecontainer imagecontainer--avatar\\\">\").concat(_assets_clip_svg__WEBPACK_IMPORTED_MODULE_1___default.a, \"</div>\\n    <h2 class=\\\"text--username\\\"></h2>\\n  </div>\\n  <div class=\\\"right-end\\\">\\n    <div class=\\\"iconcontainer iconcontainer--search\\\">\").concat(_assets_search_svg__WEBPACK_IMPORTED_MODULE_3___default.a, \"</div>\\n    <div class=\\\"iconcontainer iconcontainer--more\\\">\").concat(_assets_more_svg__WEBPACK_IMPORTED_MODULE_2___default.a, \"</div>\\n  </div>\\n</div>\");\n\nvar MessageHeader =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessageHeader, _HTMLElement);\n\n  function MessageHeader() {\n    var _this;\n\n    _classCallCheck(this, MessageHeader);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageHeader).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this._username = _this.getAttribute('username');\n    _this._shadowRoot.querySelector('.text--username').textContent = _this._username;\n    return _this;\n  }\n\n  return MessageHeader;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('message-header', MessageHeader);\n\n//# sourceURL=webpack:///./components/MessageHeader.js?");

/***/ }),

/***/ "./components/SingleMessage.js":
/*!*************************************!*\
  !*** ./components/SingleMessage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n<style>\\n.message {\\n    --basic-colour: #f3e5f5;\\n    --main-textcolour: #383539;\\n    --timestamp-textcolour: #a9a0ab;\\n    --tick-colour: #9d41b5;\\n    --border-colour: #e9dceb;\\n\\n\\n    display: inline-block;\\n    max-width: 200px;\\n    background-color: var(--basic-colour);\\n    padding: 5px;\\n    border-radius: 4px 4px 0 4px;\\n    position: relative;\\n    border-width: 1px;\\n    border-style: solid;\\n    border-color: var(--border-colour);\\n    text-align: right;\\n}\\n\\n\\n.message.right:after {\\n    content: \\\"\\\";\\n    display: inline-block;\\n    position: absolute;\\n    right: -4px;\\n    bottom: 0px;\\n    height: 0px;\\n    width: 0px;\\n    border-top: 6px solid transparent;\\n    border-left: 4px solid var(--basic-colour);\\n}\\n\\n.message.right:before {\\n    content: \\\"\\\";\\n    display: inline-block;\\n    position: absolute;\\n    right: -5px;\\n    bottom: -1px;\\n    height: 0px;\\n    width: 0px;\\n    border-top: 6px solid transparent;\\n    border-left: 4px solid var(--border-colour);\\n}\\n\\n.message.right {\\n    float: right;\\n}\\n\\n.message-text {\\n    color: var(--main-textcolour);\\n    font-size: 0.8rem;\\n}\\n\\n.message-timestamp {\\n    color: var(--timestamp-textcolour);\\n    font-size: 0.5rem;\\n}\\n\\n.message-username {\\n    display: none;\\n}\\n\\n.message-clearfix {\\n    clear: both;\\n}\\n</style>\\n<div class=\\\"message right\\\">\\n    <div class=\\\"message-username\\\"></div>\\n    <div class=\\\"message-text\\\"></div>\\n    <div class=\\\"message-timestamp\\\"></div>\\n</div>\\n<div class=\\\"message-clearfix\\\"></div>\";\n\nvar SingleMessage =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(SingleMessage, _HTMLElement);\n\n  function SingleMessage() {\n    var _this;\n\n    _classCallCheck(this, SingleMessage);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleMessage).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this._shadowRoot.querySelector('.message-text').textContent = _this.getAttribute('message');\n    _this._shadowRoot.querySelector('.message-timestamp').textContent = _this.getAttribute('time');\n    _this._shadowRoot.querySelector('.message-username').textContent = _this.getAttribute('user');\n    return _this;\n  }\n\n  return SingleMessage;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('single-message', SingleMessage);\n\n//# sourceURL=webpack:///./components/SingleMessage.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FormInput */ \"./components/FormInput.js\");\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MessageForm */ \"./components/MessageForm.js\");\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_MessageForm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SingleMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SingleMessage */ \"./components/SingleMessage.js\");\n/* harmony import */ var _components_SingleMessage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_SingleMessage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MessageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MessageHeader */ \"./components/MessageHeader.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });