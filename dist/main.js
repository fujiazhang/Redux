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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux */ \"./redux/index.js\");\n/* harmony import */ var _reducer_ageReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer/ageReducer */ \"./reducer/ageReducer.js\");\n/* harmony import */ var _reducer_nameReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/nameReducer */ \"./reducer/nameReducer.js\");\n/* harmony import */ var _middlewares_timemapMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/timemapMiddleware */ \"./middlewares/timemapMiddleware.js\");\n/* harmony import */ var _middlewares_exceptMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/exceptMiddleware */ \"./middlewares/exceptMiddleware.js\");\n/* harmony import */ var _middlewares_loggerMiddleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/loggerMiddleware */ \"./middlewares/loggerMiddleware.js\");\n\n\n\n\n\n\n\nconst reducer = Object(_redux__WEBPACK_IMPORTED_MODULE_0__[\"conbineReducers\"])({\n    age: _reducer_ageReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    name: _reducer_nameReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n})\nconst store = Object(_redux__WEBPACK_IMPORTED_MODULE_0__[\"creteStore\"])(reducer)\n\nconst next = store.dispatch;\n\n\nconst timemap = Object(_middlewares_timemapMiddleware__WEBPACK_IMPORTED_MODULE_3__[\"timemapMiddleware\"])(store)\nconst except = Object(_middlewares_exceptMiddleware__WEBPACK_IMPORTED_MODULE_4__[\"exceptMiddleware\"])(store)\nconst logger = Object(_middlewares_loggerMiddleware__WEBPACK_IMPORTED_MODULE_5__[\"loggerMiddleware\"])(store)\n\nstore.dispatch = timemap(except(logger(next)))\nstore.dispatch({ type: 'SET_NAME', data: 'lisi' })\nconsole.log(store.getState())\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./middlewares/exceptMiddleware.js":
/*!*****************************************!*\
  !*** ./middlewares/exceptMiddleware.js ***!
  \*****************************************/
/*! exports provided: exceptMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exceptMiddleware\", function() { return exceptMiddleware; });\n\nconst exceptMiddleware = store => next => action => {\n    try {\n        console.log('comeing exceptMiddleware')\n        console.log(next)\n        next(action)\n    } catch (error) {\n        console.log(error)\n    }\n}\n\n\n//# sourceURL=webpack:///./middlewares/exceptMiddleware.js?");

/***/ }),

/***/ "./middlewares/loggerMiddleware.js":
/*!*****************************************!*\
  !*** ./middlewares/loggerMiddleware.js ***!
  \*****************************************/
/*! exports provided: loggerMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loggerMiddleware\", function() { return loggerMiddleware; });\n\nconst loggerMiddleware = store => next => action => {\n    console.log('comeing loggerMiddleware')\n    next(action)\n}\n\n\n//# sourceURL=webpack:///./middlewares/loggerMiddleware.js?");

/***/ }),

/***/ "./middlewares/timemapMiddleware.js":
/*!******************************************!*\
  !*** ./middlewares/timemapMiddleware.js ***!
  \******************************************/
/*! exports provided: timemapMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timemapMiddleware\", function() { return timemapMiddleware; });\nconst timemapMiddleware = store => next => action => {\n    console.log('comeing timemapMiddleware')\n    console.log(new Date())\n    console.log(store.getState())\n    next(action)\n}\n\n\n//# sourceURL=webpack:///./middlewares/timemapMiddleware.js?");

/***/ }),

/***/ "./reducer/ageReducer.js":
/*!*******************************!*\
  !*** ./reducer/ageReducer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reducer; });\nlet initState = {\n    age: 1\n}\n\nfunction reducer(state, action) {\n    if (!state) {\n        state = initState\n    }\n    switch (action.type) {\n        case 'SET_AGE':\n            return {\n                ...state,\n                age: action.data\n            }\n            break;\n        default:\n            return state\n            break;\n    }\n}\n\n\n//# sourceURL=webpack:///./reducer/ageReducer.js?");

/***/ }),

/***/ "./reducer/nameReducer.js":
/*!********************************!*\
  !*** ./reducer/nameReducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reducer; });\nlet initState = {\n    name: 'zhangsan'\n}\n\nfunction reducer(state, action) {\n    if (!state) {\n        state = initState\n    }\n    switch (action.type) {\n        case 'SET_NAME':\n            return {\n                ...state,\n                name: action.data\n            }\n            break;\n        default:\n            return state\n            break;\n    }\n}\n\n\n//# sourceURL=webpack:///./reducer/nameReducer.js?");

/***/ }),

/***/ "./redux/conbineReducers.js":
/*!**********************************!*\
  !*** ./redux/conbineReducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return conbineReducers; });\nfunction conbineReducers(reducers) {\n    let nextState = {}\n    let reducersKeys = Object.keys(reducers)\n\n    /*返回合并后的新的reducer函数*/\n    return (state, action) => {\n        /*遍历执行所有的reducers，整合成为一个新的state*/\n        reducersKeys.forEach(name => {\n            let reducer = reducers[name] //reducer中的一个函数\n            nextState[name] = reducer(state[name], action) /*执行 分 reducer，获得新的state*/\n        })\n        return nextState\n    }\n}\n\n\n//# sourceURL=webpack:///./redux/conbineReducers.js?");

/***/ }),

/***/ "./redux/creteStore.js":
/*!*****************************!*\
  !*** ./redux/creteStore.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return creteStore; });\nfunction creteStore(reducer, initState) {\n    let state = initState || {}\n    const listeners = []\n\n    function getState() {\n        return state\n    }\n\n    function dispatch(action) {\n        // state = newState\n        state = reducer(state, action)\n        listeners.forEach(f => { f() })\n    }\n\n    function subcribe(f) {\n        listeners.push(f)\n    }\n\n    dispatch({ type: '' })\n\n    return {\n        getState,\n        dispatch,\n        subcribe\n    }\n}\n\n\n//# sourceURL=webpack:///./redux/creteStore.js?");

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: creteStore, conbineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creteStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creteStore */ \"./redux/creteStore.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"creteStore\", function() { return _creteStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _conbineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conbineReducers */ \"./redux/conbineReducers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"conbineReducers\", function() { return _conbineReducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./redux/index.js?");

/***/ })

/******/ });