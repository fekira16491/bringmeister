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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useGetCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useGetCart */ \"./src/hooks/useGetCart.ts\");\n/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/util */ \"./src/helper/util.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mahalakshmisiva/Documents/Exercise/git/bringmeister/src/components/Product.tsx\",\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n //Product componenet\n\n\n\nvar Product = function Product(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var name = _ref.name,\n      image = _ref.image,\n      price = _ref.price,\n      baseUnit = _ref.baseUnit,\n      sku = _ref.sku;\n  var cart;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(_s(function () {\n    _s();\n\n    cart = (0,_hooks_useGetCart__WEBPACK_IMPORTED_MODULE_1__.default)();\n    console.log(\"renderUseCart\");\n  }, \"bxOMllsGXV5ssAGRk13VBeohM3c=\", false, function () {\n    return [_hooks_useGetCart__WEBPACK_IMPORTED_MODULE_1__.default];\n  }), []); //used to convert in to Euro currency format\n  // const convertCurrencyFormat = (money: number) => {\n  //     return new Intl.NumberFormat(\"de-DE\", {\n  //         style: \"currency\",\n  //         currency: \"EUR\",\n  //     }).format(money);\n  // };\n  //used to find the total quantaties in cart for product\n  // const findMatchingProductInCard = (sku: string) => {\n  //     return cart?.data?.products?.find((x) => x.sku === sku)?.quantity || 0;\n  // };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n      \"data-testid\": \"products-container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgdimen),\n        src: image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().listElement),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          \"data-testid\": \"name-id\",\n          children: [\"Name: \", name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          \"data-testid\": \"price-id\",\n          children: [\"Price:\", (0,_helper_util__WEBPACK_IMPORTED_MODULE_2__.convertCurrencyFormat)(price), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          \"data-testid\": \"base-id\",\n          children: [\"Base Unit:\", baseUnit]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          \"data-testid\": \"cart-id\",\n          style: {\n            width: \"7rem\"\n          },\n          children: [\"Cart: \", (0,_helper_util__WEBPACK_IMPORTED_MODULE_2__.findMatchingProductInCard)(cart, sku)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Product, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUtBOzs7O0FBQ0EsSUFBTU0sT0FBaUMsR0FBRyxTQUFwQ0EsT0FBb0MsT0FNcEM7QUFBQTs7QUFBQTs7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxHQUNJLFFBREpBLEdBQ0k7QUFDSixNQUFJQyxJQUFKO0FBQ0FYLEVBQUFBLGdEQUFTLElBQUMsWUFBTTtBQUFBOztBQUNkVyxJQUFBQSxJQUFJLEdBQUdULDBEQUFVLEVBQWpCO0FBQ0FVLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxHQUhRO0FBQUEsWUFDQVgsc0RBREE7QUFBQSxNQUdOLEVBSE0sQ0FBVCxDQUZJLENBT0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUQscUVBQWhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLHFFQUFoQjtBQUE2QixxQkFBWSxvQkFBekM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHlFQUFoQjtBQUFpQyxXQUFHLEVBQUVNO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBRU4sNEVBQWhCO0FBQUEsZ0NBQ0U7QUFBTyx5QkFBWSxTQUFuQjtBQUFBLCtCQUFvQ0ssSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTyx5QkFBWSxVQUFuQjtBQUFBLCtCQUNTRixtRUFBcUIsQ0FBQ0ksS0FBRCxDQUQ5QixFQUN1QyxHQUR2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFLRTtBQUFPLHlCQUFZLFNBQW5CO0FBQUEsbUNBQXdDQyxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFRLHlCQUFZLFNBQXBCO0FBQThCLGVBQUssRUFBRTtBQUFFUyxZQUFBQSxLQUFLLEVBQUU7QUFBVCxXQUFyQztBQUFBLCtCQUNTZix1RUFBeUIsQ0FBQ1EsSUFBRCxFQUFPRCxHQUFQLENBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0EzQ0Q7O0lBQU1MOztLQUFBQTtBQTZDTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnRzeD9kYWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBQcm9kdWN0T3B0aW9ucyB9IGZyb20gXCIuLi9mZWF0dXJlcy9wcm9kdWN0L3Byb2R1Y3RUeXBlc1wiO1xuaW1wb3J0IHVzZUdldENhcnQgZnJvbSBcIi4uL2hvb2tzL3VzZUdldENhcnRcIjtcbmltcG9ydCB7XG4gIGZpbmRNYXRjaGluZ1Byb2R1Y3RJbkNhcmQsXG4gIGNvbnZlcnRDdXJyZW5jeUZvcm1hdCxcbn0gZnJvbSBcIi4uL2hlbHBlci91dGlsXCI7XG4vL1Byb2R1Y3QgY29tcG9uZW5ldFxuY29uc3QgUHJvZHVjdDogUmVhY3QuRkM8UHJvZHVjdE9wdGlvbnM+ID0gKHtcbiAgbmFtZSxcbiAgaW1hZ2UsXG4gIHByaWNlLFxuICBiYXNlVW5pdCxcbiAgc2t1LFxufSkgPT4ge1xuICB2YXIgY2FydDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYXJ0ID0gdXNlR2V0Q2FydCgpO1xuICAgIGNvbnNvbGUubG9nKFwicmVuZGVyVXNlQ2FydFwiKTtcbiAgfSwgW10pO1xuXG4gIC8vdXNlZCB0byBjb252ZXJ0IGluIHRvIEV1cm8gY3VycmVuY3kgZm9ybWF0XG4gIC8vIGNvbnN0IGNvbnZlcnRDdXJyZW5jeUZvcm1hdCA9IChtb25leTogbnVtYmVyKSA9PiB7XG4gIC8vICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZGUtREVcIiwge1xuICAvLyAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gIC8vICAgICAgICAgY3VycmVuY3k6IFwiRVVSXCIsXG4gIC8vICAgICB9KS5mb3JtYXQobW9uZXkpO1xuICAvLyB9O1xuXG4gIC8vdXNlZCB0byBmaW5kIHRoZSB0b3RhbCBxdWFudGF0aWVzIGluIGNhcnQgZm9yIHByb2R1Y3RcbiAgLy8gY29uc3QgZmluZE1hdGNoaW5nUHJvZHVjdEluQ2FyZCA9IChza3U6IHN0cmluZykgPT4ge1xuICAvLyAgICAgcmV0dXJuIGNhcnQ/LmRhdGE/LnByb2R1Y3RzPy5maW5kKCh4KSA9PiB4LnNrdSA9PT0gc2t1KT8ucXVhbnRpdHkgfHwgMDtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IGRhdGEtdGVzdGlkPVwicHJvZHVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nZGltZW59IHNyYz17aW1hZ2V9PjwvaW1nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RFbGVtZW50fT5cbiAgICAgICAgICA8bGFiZWwgZGF0YS10ZXN0aWQ9XCJuYW1lLWlkXCI+TmFtZToge25hbWV9PC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgZGF0YS10ZXN0aWQ9XCJwcmljZS1pZFwiPlxuICAgICAgICAgICAgUHJpY2U6e2NvbnZlcnRDdXJyZW5jeUZvcm1hdChwcmljZSl9e1wiIFwifVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGRhdGEtdGVzdGlkPVwiYmFzZS1pZFwiPkJhc2UgVW5pdDp7YmFzZVVuaXR9PC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIGRhdGEtdGVzdGlkPVwiY2FydC1pZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjdyZW1cIiB9fT5cbiAgICAgICAgICAgIENhcnQ6IHtmaW5kTWF0Y2hpbmdQcm9kdWN0SW5DYXJkKGNhcnQsIHNrdSl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidXNlR2V0Q2FydCIsImZpbmRNYXRjaGluZ1Byb2R1Y3RJbkNhcmQiLCJjb252ZXJ0Q3VycmVuY3lGb3JtYXQiLCJQcm9kdWN0IiwibmFtZSIsImltYWdlIiwicHJpY2UiLCJiYXNlVW5pdCIsInNrdSIsImNhcnQiLCJjb25zb2xlIiwibG9nIiwiZ3JpZCIsImNhcmQiLCJpbWdkaW1lbiIsImxpc3RFbGVtZW50Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.tsx\n");

/***/ })

});