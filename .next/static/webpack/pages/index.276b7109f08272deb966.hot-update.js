"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.tsx":
/*!************************************!*\
  !*** ./src/components/Product.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useGetCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useGetCart */ \"./src/hooks/useGetCart.ts\");\n/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/util */ \"./src/helper/util.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mahalakshmisiva/Documents/Exercise/git/bringmeister/src/components/Product.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n //Product componenet\n\n\n\nvar Product = function Product(_ref) {\n  _s();\n\n  var name = _ref.name,\n      image = _ref.image,\n      price = _ref.price,\n      baseUnit = _ref.baseUnit,\n      sku = _ref.sku;\n  var cart = (0,_hooks_useGetCart__WEBPACK_IMPORTED_MODULE_1__.default)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n      \"data-testid\": \"products-container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgdimen),\n        src: image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().listElement),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          \"data-testid\": \"name-id\",\n          children: [\"Name: \", name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          \"data-testid\": \"price-id\",\n          children: [\"Price:\", (0,_helper_util__WEBPACK_IMPORTED_MODULE_2__.convertCurrencyFormat)(price), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          \"data-testid\": \"base-id\",\n          children: [\"Base Unit:\", baseUnit]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          \"data-testid\": \"cart-id\",\n          style: {\n            width: \"7rem\"\n          },\n          children: [\"Cart: \", (0,_helper_util__WEBPACK_IMPORTED_MODULE_2__.findMatchingProductInCard)(cart, sku)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Product, \"rR/iSEywpBh5Tr392HX4eIg/hSY=\", false, function () {\n  return [_hooks_useGetCart__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Product));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Product\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUtBOzs7O0FBQ0EsSUFBTUssT0FBaUMsR0FBRyxTQUFwQ0EsT0FBb0MsT0FNcEM7QUFBQTs7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxHQUNJLFFBREpBLEdBQ0k7QUFFRixNQUFJQyxJQUFJLEdBQUdULDBEQUFVLEVBQXJCO0FBRUYsc0JBQ0U7QUFBSyxhQUFTLEVBQUVELHFFQUFoQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxxRUFBaEI7QUFBNkIscUJBQVksb0JBQXpDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSx5RUFBaEI7QUFBaUMsV0FBRyxFQUFFTTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVOLDRFQUFoQjtBQUFBLGdDQUNFO0FBQU8seUJBQVksU0FBbkI7QUFBQSwrQkFBb0NLLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU8seUJBQVksVUFBbkI7QUFBQSwrQkFDU0YsbUVBQXFCLENBQUNJLEtBQUQsQ0FEOUIsRUFDdUMsR0FEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBTyx5QkFBWSxTQUFuQjtBQUFBLG1DQUF3Q0MsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBUSx5QkFBWSxTQUFwQjtBQUE4QixlQUFLLEVBQUU7QUFBRU8sWUFBQUEsS0FBSyxFQUFFO0FBQVQsV0FBckM7QUFBQSwrQkFDU2IsdUVBQXlCLENBQUNRLElBQUQsRUFBT0QsR0FBUCxDQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBM0JEOztHQUFNTDtVQVFTSDs7O0tBUlRHO0FBNkJOLCtEQUFlLG1CQUFBTCxpREFBQSxDQUFXSyxPQUFYLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC50c3g/ZGFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvZHVjdE9wdGlvbnMgfSBmcm9tIFwiLi4vZmVhdHVyZXMvcHJvZHVjdC9wcm9kdWN0VHlwZXNcIjtcbmltcG9ydCB1c2VHZXRDYXJ0IGZyb20gXCIuLi9ob29rcy91c2VHZXRDYXJ0XCI7XG5pbXBvcnQge1xuICBmaW5kTWF0Y2hpbmdQcm9kdWN0SW5DYXJkLFxuICBjb252ZXJ0Q3VycmVuY3lGb3JtYXQsXG59IGZyb20gXCIuLi9oZWxwZXIvdXRpbFwiO1xuLy9Qcm9kdWN0IGNvbXBvbmVuZXRcbmNvbnN0IFByb2R1Y3Q6IFJlYWN0LkZDPFByb2R1Y3RPcHRpb25zPiA9ICh7XG4gIG5hbWUsXG4gIGltYWdlLFxuICBwcmljZSxcbiAgYmFzZVVuaXQsXG4gIHNrdSxcbn0pID0+IHtcblxuICAgIGxldCBjYXJ0ID0gdXNlR2V0Q2FydCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gZGF0YS10ZXN0aWQ9XCJwcm9kdWN0cy1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWdkaW1lbn0gc3JjPXtpbWFnZX0+PC9pbWc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEVsZW1lbnR9PlxuICAgICAgICAgIDxsYWJlbCBkYXRhLXRlc3RpZD1cIm5hbWUtaWRcIj5OYW1lOiB7bmFtZX08L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBkYXRhLXRlc3RpZD1cInByaWNlLWlkXCI+XG4gICAgICAgICAgICBQcmljZTp7Y29udmVydEN1cnJlbmN5Rm9ybWF0KHByaWNlKX17XCIgXCJ9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgZGF0YS10ZXN0aWQ9XCJiYXNlLWlkXCI+QmFzZSBVbml0OntiYXNlVW5pdH08L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJjYXJ0LWlkXCIgc3R5bGU9e3sgd2lkdGg6IFwiN3JlbVwiIH19PlxuICAgICAgICAgICAgQ2FydDoge2ZpbmRNYXRjaGluZ1Byb2R1Y3RJbkNhcmQoY2FydCwgc2t1KX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJ1c2VHZXRDYXJ0IiwiZmluZE1hdGNoaW5nUHJvZHVjdEluQ2FyZCIsImNvbnZlcnRDdXJyZW5jeUZvcm1hdCIsIlByb2R1Y3QiLCJuYW1lIiwiaW1hZ2UiLCJwcmljZSIsImJhc2VVbml0Iiwic2t1IiwiY2FydCIsImdyaWQiLCJjYXJkIiwiaW1nZGltZW4iLCJsaXN0RWxlbWVudCIsIndpZHRoIiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Product.tsx\n");

/***/ })

});