"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_productReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/productReducer */ \"./src/features/productReducer.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    reducer: _features_productReducer__WEBPACK_IMPORTED_MODULE_1__.default\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUtBO0FBRU8sTUFBTUUsS0FBSyxHQUFHRixnRUFBYyxDQUFDO0FBQ2xDRyxFQUFBQSxPQUFPLEVBQUU7QUFDUEEsSUFBQUEsT0FBTyxFQUFFRiw2REFBY0E7QUFEaEI7QUFEeUIsQ0FBRCxDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JtLWNvZGluZy1jaGFsbGVuZ2UvLi9zcmMvYXBwL3N0b3JlLnRzPzU4ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBjb25maWd1cmVTdG9yZSxcbiAgVGh1bmtBY3Rpb24sXG59IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHByb2R1Y3RSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL3Byb2R1Y3RSZWR1Y2VyJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgcmVkdWNlcjogcHJvZHVjdFJlZHVjZXJcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBSb290U3RhdGUsXG4gIHVua25vd24sXG4gIEFjdGlvbjxzdHJpbmc+XG4+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwicHJvZHVjdFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ }),

/***/ "./src/features/productReducer.ts":
/*!****************************************!*\
  !*** ./src/features/productReducer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductSlice\": () => (/* binding */ ProductSlice),\n/* harmony export */   \"setProductsActions\": () => (/* binding */ setProductsActions),\n/* harmony export */   \"selectProducts\": () => (/* binding */ selectProducts),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  productOptions: []\n};\nconst ProductSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'productSlice',\n  initialState,\n  reducers: {\n    setProductsActions: (state, action) => {\n      const {\n        productOptions\n      } = action.payload;\n      state.productOptions = productOptions;\n    }\n  }\n}); // Action creators are generated for each case reducer function\n\nconst {\n  setProductsActions\n} = ProductSlice.actions;\nconst selectProducts = state => state.reducer.productOptions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcHJvZHVjdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFnQkEsTUFBTUMsWUFBc0IsR0FBRztBQUMzQkMsRUFBQUEsY0FBYyxFQUFFO0FBRFcsQ0FBL0I7QUFJTyxNQUFNQyxZQUFZLEdBQUdILDZEQUFXLENBQUM7QUFDcENJLEVBQUFBLElBQUksRUFBRSxjQUQ4QjtBQUVwQ0gsRUFBQUEsWUFGb0M7QUFHcENJLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxrQkFBa0IsRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBNEM7QUFDNUQsWUFBTTtBQUFFTixRQUFBQTtBQUFGLFVBQXFCTSxNQUFNLENBQUNDLE9BQWxDO0FBQ0FGLE1BQUFBLEtBQUssQ0FBQ0wsY0FBTixHQUF1QkEsY0FBdkI7QUFDSDtBQUpLO0FBSDBCLENBQUQsQ0FBaEMsRUFXUDs7QUFDTyxNQUFNO0FBQUVJLEVBQUFBO0FBQUYsSUFBeUJILFlBQVksQ0FBQ08sT0FBNUM7QUFDQSxNQUFNQyxjQUFjLEdBQUlKLEtBQUQsSUFDMUJBLEtBQUssQ0FBQ0ssT0FBTixDQUFjVixjQURYO0FBR1AsaUVBQWVDLFlBQVksQ0FBQ1MsT0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibS1jb2RpbmctY2hhbGxlbmdlLy4vc3JjL2ZlYXR1cmVzL3Byb2R1Y3RSZWR1Y2VyLnRzPzJkNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL2FwcC9zdG9yZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0T3B0aW9ucyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICBiYXNlVW5pdDogc3RyaW5nO1xuICAgIHNrdTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdHMge1xuICAgIHByb2R1Y3RPcHRpb25zOiBQcm9kdWN0T3B0aW9uc1tdXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdHMgPSB7XG4gICAgcHJvZHVjdE9wdGlvbnM6IFtdXG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3Byb2R1Y3RTbGljZScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldFByb2R1Y3RzQWN0aW9uczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UHJvZHVjdHM+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHByb2R1Y3RPcHRpb25zIH0gPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgc3RhdGUucHJvZHVjdE9wdGlvbnMgPSBwcm9kdWN0T3B0aW9uc1xuICAgICAgICB9LFxuICAgIH0sXG59KVxuXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCB7IHNldFByb2R1Y3RzQWN0aW9ucyB9ID0gUHJvZHVjdFNsaWNlLmFjdGlvbnNcbmV4cG9ydCBjb25zdCBzZWxlY3RQcm9kdWN0cyA9IChzdGF0ZTogUm9vdFN0YXRlKTogUHJvZHVjdE9wdGlvbnNbXSA9PlxuICAgIHN0YXRlLnJlZHVjZXIucHJvZHVjdE9wdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdE9wdGlvbnMiLCJQcm9kdWN0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRQcm9kdWN0c0FjdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwic2VsZWN0UHJvZHVjdHMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/productReducer.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mahalakshmisiva/Documents/Exercise/git/bringmeister/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {\n    store: _app_store__WEBPACK_IMPORTED_MODULE_1__.store,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7QUFFQSxTQUFTRSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBbUQ7QUFDL0Msc0JBQ0ksOERBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVILDZDQUFqQjtBQUFBLDJCQUNJLDhEQUFDLFNBQUQsb0JBQWVHLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztBQUVELGlFQUFlRixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm0tY29kaW5nLWNoYWxsZW5nZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD84NTQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();