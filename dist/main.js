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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux */ \"./redux/index.js\");\n/* harmony import */ var _reducer_no1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer/no1 */ \"./reducer/no1.js\");\n/* harmony import */ var _reducer_no2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/no2 */ \"./reducer/no2.js\");\n/* harmony import */ var _middleWares_asyncHanlde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleWares/asyncHanlde */ \"./middleWares/asyncHanlde.js\");\n/* harmony import */ var _middleWares_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleWares/logger */ \"./middleWares/logger.js\");\n/* harmony import */ var _middleWares_timesmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleWares/timesmap */ \"./middleWares/timesmap.js\");\n\n\n\n\n\n\n\n\nconst reducer = Object(_redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducer\"])({\n\tno1: _reducer_no1__WEBPACK_IMPORTED_MODULE_1__[\"no1Reducer\"],\n\tno2: _reducer_no2__WEBPACK_IMPORTED_MODULE_2__[\"no2Reducer\"]\n})\nconst store = Object(_redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer)\n\nconst next = store.dispatch\n\nconst time = Object(_middleWares_timesmap__WEBPACK_IMPORTED_MODULE_5__[\"timesmap\"])(store)\nconst asyncH = Object(_middleWares_asyncHanlde__WEBPACK_IMPORTED_MODULE_3__[\"asyncHanlde\"])(store)\nconst log = Object(_middleWares_logger__WEBPACK_IMPORTED_MODULE_4__[\"logger\"])(store)\n\nstore.dispatch = time(asyncH(log((next))))\n\n\nstore.subscribe(() => { console.log('state is changed:', store.getStore()) })\nstore.dispatch({\n\ttype: 'CHANGE_NO_1',\n\tdata: 'zhangsan'\n})\nstore.dispatch({\n\ttype: 'CHANGE_NO_2',\n\tdata: 'lisi'\n})\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./middleWares/asyncHanlde.js":
/*!************************************!*\
  !*** ./middleWares/asyncHanlde.js ***!
  \************************************/
/*! exports provided: asyncHanlde */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncHanlde\", function() { return asyncHanlde; });\nconst asyncHanlde = store => next => action => {\n    setTimeout(() => {\n        next(action)\n    }, 1500)\n}\n\n\n//# sourceURL=webpack:///./middleWares/asyncHanlde.js?");

/***/ }),

/***/ "./middleWares/logger.js":
/*!*******************************!*\
  !*** ./middleWares/logger.js ***!
  \*******************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logger\", function() { return logger; });\nconst logger = store => next => action => {\n    console.log('store before change111111', store.getStore())\n    console.log('action:', action)\n    next(action)\n    console.log('store has changed:2222222', store.getStore())\n}\n\n\n//# sourceURL=webpack:///./middleWares/logger.js?");

/***/ }),

/***/ "./middleWares/timesmap.js":
/*!*********************************!*\
  !*** ./middleWares/timesmap.js ***!
  \*********************************/
/*! exports provided: timesmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timesmap\", function() { return timesmap; });\n\nconst timesmap = store => next => action => {\n    console.log('timemap:', new Date())\n    next(action)\n}\n\n\n//# sourceURL=webpack:///./middleWares/timesmap.js?");

/***/ }),

/***/ "./reducer/no1.js":
/*!************************!*\
  !*** ./reducer/no1.js ***!
  \************************/
/*! exports provided: no1Reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"no1Reducer\", function() { return no1Reducer; });\n\nconst initSate = {\n    no1: '',\n}\nfunction no1Reducer(state, action) {\n    if (!state) {\n        state = initSate\n    }\n    switch (action.type) {\n        case 'CHANGE_NO_1':\n            return {\n                ...state,\n                no1: action.data\n            }\n        default:\n            return state\n    }\n}\n\n\n//# sourceURL=webpack:///./reducer/no1.js?");

/***/ }),

/***/ "./reducer/no2.js":
/*!************************!*\
  !*** ./reducer/no2.js ***!
  \************************/
/*! exports provided: no2Reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"no2Reducer\", function() { return no2Reducer; });\nconst initSate = {\n    no2: '',\n}\nfunction no2Reducer(state, action) {\n    if (!state) {\n        state = initSate\n    }\n    switch (action.type) {\n        case 'CHANGE_NO_2':\n            return {\n                ...state,\n                no2: action.data\n            }\n        default:\n            return state\n    }\n}\n\n\n//# sourceURL=webpack:///./reducer/no2.js?");

/***/ }),

/***/ "./redux/combineReducer.js":
/*!*********************************!*\
  !*** ./redux/combineReducer.js ***!
  \*********************************/
/*! exports provided: combineReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducer\", function() { return combineReducer; });\nfunction combineReducer(reducers) {\n\n    const reducersKey = Object.keys(reducers)\n\n    return (state = {}, action) => {\n        const newState = {}\n        reducersKey.forEach(key => {\n            let reducer = reducers[key]\n            newState[key] = reducer(state[key], action)\n        })\n        return newState\n    }\n}\n\n\n//# sourceURL=webpack:///./redux/combineReducer.js?");

/***/ }),

/***/ "./redux/createStore.js":
/*!******************************!*\
  !*** ./redux/createStore.js ***!
  \******************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\nfunction createStore(reducer, initSate) {\n    let state = initSate\n    const liesteners = []\n\n    function dispatch(action) {\n        state = reducer(state, action)\n        liesteners.forEach(f => f())\n    }\n\n    function subscribe(f) {\n        liesteners.push(f)\n    }\n\n    function getStore() {\n        return state\n    }\n\n    /* 注意！！！用一个不匹配任何计划的 type，来获取初始值 */\n    dispatch({ type: '' })\n\n    return {\n        getStore,\n        dispatch,\n        subscribe\n    }\n}\n\n\n//# sourceURL=webpack:///./redux/createStore.js?");

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: createStore, combineReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ \"./redux/createStore.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return _createStore__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"]; });\n\n/* harmony import */ var _combineReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducer */ \"./redux/combineReducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"combineReducer\", function() { return _combineReducer__WEBPACK_IMPORTED_MODULE_1__[\"combineReducer\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./redux/index.js?");

/***/ })

/******/ });