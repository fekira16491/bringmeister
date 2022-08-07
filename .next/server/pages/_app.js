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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_product_productReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/product/productReducer */ \"./src/features/product/productReducer.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    reducer: _features_product_productReducer__WEBPACK_IMPORTED_MODULE_1__.default\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUtBO0FBRU8sTUFBTUUsS0FBSyxHQUFHRixnRUFBYyxDQUFDO0FBQ2xDRyxFQUFBQSxPQUFPLEVBQUU7QUFDUEEsSUFBQUEsT0FBTyxFQUFFRixxRUFBY0E7QUFEaEI7QUFEeUIsQ0FBRCxDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JtLWNvZGluZy1jaGFsbGVuZ2UvLi9zcmMvYXBwL3N0b3JlLnRzPzU4ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBjb25maWd1cmVTdG9yZSxcbiAgVGh1bmtBY3Rpb24sXG59IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHByb2R1Y3RSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL3Byb2R1Y3QvcHJvZHVjdFJlZHVjZXInO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICByZWR1Y2VyOiBwcm9kdWN0UmVkdWNlclxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248XG4gIFJldHVyblR5cGUsXG4gIFJvb3RTdGF0ZSxcbiAgdW5rbm93bixcbiAgQWN0aW9uPHN0cmluZz5cbj47XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJwcm9kdWN0UmVkdWNlciIsInN0b3JlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ }),

/***/ "./src/features/product/productReducer.ts":
/*!************************************************!*\
  !*** ./src/features/product/productReducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductSlice\": () => (/* binding */ ProductSlice),\n/* harmony export */   \"setProductsActions\": () => (/* binding */ setProductsActions),\n/* harmony export */   \"selectProducts\": () => (/* binding */ selectProducts),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  productOptions: []\n};\nconst ProductSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'productSlice',\n  initialState,\n  reducers: {\n    setProductsActions: (state, action) => {\n      const {\n        productOptions\n      } = action.payload;\n      state.productOptions = productOptions;\n    }\n  }\n}); // Action creators are generated for each case reducer function\n\nconst {\n  setProductsActions\n} = ProductSlice.actions;\nconst selectProducts = state => state.reducer.productOptions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcHJvZHVjdC9wcm9kdWN0UmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQU9BLE1BQU1DLFlBQXNCLEdBQUc7QUFDM0JDLEVBQUFBLGNBQWMsRUFBRTtBQURXLENBQS9CO0FBSU8sTUFBTUMsWUFBWSxHQUFHSCw2REFBVyxDQUFDO0FBQ3BDSSxFQUFBQSxJQUFJLEVBQUUsY0FEOEI7QUFFcENILEVBQUFBLFlBRm9DO0FBR3BDSSxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsa0JBQWtCLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQTRDO0FBQzVELFlBQU07QUFBRU4sUUFBQUE7QUFBRixVQUFxQk0sTUFBTSxDQUFDQyxPQUFsQztBQUNBRixNQUFBQSxLQUFLLENBQUNMLGNBQU4sR0FBdUJBLGNBQXZCO0FBQ0g7QUFKSztBQUgwQixDQUFELENBQWhDLEVBV1A7O0FBQ08sTUFBTTtBQUFFSSxFQUFBQTtBQUFGLElBQXlCSCxZQUFZLENBQUNPLE9BQTVDO0FBQ0EsTUFBTUMsY0FBYyxHQUFJSixLQUFELElBQzFCQSxLQUFLLENBQUNLLE9BQU4sQ0FBY1YsY0FEWDtBQUdQLGlFQUFlQyxZQUFZLENBQUNTLE9BQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm0tY29kaW5nLWNoYWxsZW5nZS8uL3NyYy9mZWF0dXJlcy9wcm9kdWN0L3Byb2R1Y3RSZWR1Y2VyLnRzP2UyMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL2FwcC9zdG9yZSdcbmltcG9ydCB7IFByb2R1Y3RPcHRpb25zLCBQcm9kdWN0cyB9IGZyb20gJy4vcHJvZHVjdFR5cGVzJ1xuXG5cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0cyA9IHtcbiAgICBwcm9kdWN0T3B0aW9uczogW11cbn1cblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvZHVjdFNsaWNlJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0UHJvZHVjdHNBY3Rpb25zOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9kdWN0cz4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcHJvZHVjdE9wdGlvbnMgfSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0T3B0aW9ucyA9IHByb2R1Y3RPcHRpb25zXG4gICAgICAgIH0sXG4gICAgfSxcbn0pXG5cbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHsgc2V0UHJvZHVjdHNBY3Rpb25zIH0gPSBQcm9kdWN0U2xpY2UuYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdFByb2R1Y3RzID0gKHN0YXRlOiBSb290U3RhdGUpOiBQcm9kdWN0T3B0aW9uc1tdID0+XG4gICAgc3RhdGUucmVkdWNlci5wcm9kdWN0T3B0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0T3B0aW9ucyIsIlByb2R1Y3RTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFByb2R1Y3RzQWN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJzZWxlY3RQcm9kdWN0cyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/product/productReducer.ts\n");

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