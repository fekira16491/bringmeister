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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetCart */ \"./src/hooks/useGetCart.ts\");\n/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGetProducts */ \"./src/hooks/useGetProducts.ts\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoadingSpinner */ \"./src/components/LoadingSpinner.tsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Product */ \"./src/components/Product.tsx\");\n/* harmony import */ var _features_product_productReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/product/productReducer */ \"./src/features/product/productReducer.ts\");\n/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/hooks */ \"./src/app/hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mahalakshmisiva/Documents/Exercise/git/bringmeister/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n //Main page  componenet\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var productsSource = (0,_hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_3__.default)();\n  var data = productsSource.data,\n      loading = productsSource.loading;\n  var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n  var productsFromRedux = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(_features_product_productReducer__WEBPACK_IMPORTED_MODULE_6__.selectProducts);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      filterProducts = _useState[0],\n      setFilterProducts = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      products = _useState2[0],\n      setProducts = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setProductDetails();\n  }, [data === null || data === void 0 ? void 0 : data.edges]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setProducts(productsFromRedux);\n    setFilterProducts(productsFromRedux);\n  }, [productsFromRedux]);\n  var cart = (0,_hooks_useGetCart__WEBPACK_IMPORTED_MODULE_2__.default)(); //used to set product details from hook and dispatch action to product reducer\n\n  var setProductDetails = function setProductDetails() {\n    var res = (data === null || data === void 0 ? void 0 : data.edges.map(function (x) {\n      return {\n        name: x.node.name,\n        price: x.node.prices.basePrice,\n        image: x.node.image,\n        baseUnit: x.node.prices.baseUnit,\n        sku: x.node.sku\n      };\n    })) || [];\n    dispatch((0,_features_product_productReducer__WEBPACK_IMPORTED_MODULE_6__.setProductsActions)({\n      productOptions: res\n    }));\n  }; //used to search the product by using product name\n\n\n  var onSearchProduct = function onSearchProduct(data) {\n    if (!data) {\n      setProducts(products);\n      return;\n    }\n\n    var a = products.filter(function (s) {\n      var _s$name;\n\n      return (_s$name = s.name) === null || _s$name === void 0 ? void 0 : _s$name.toLowerCase().includes(data.toLowerCase());\n    });\n    setFilterProducts(a);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Bringmeister Coding Challenge\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"body\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        style: {\n          display: \"flex\",\n          alignItems: \"center\",\n          flexDirection: \"column\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h2\", {\n          children: \"Products\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n          type: \"input\",\n          name: \"searchInput\",\n          \"data-testid\": \"search-element\",\n          style: {\n            width: \"20%\",\n            padding: \".5rem\"\n          },\n          onChange: function onChange(e) {\n            return onSearchProduct(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().grid),\n        children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 25\n        }, _this) : filterProducts === null || filterProducts === void 0 ? void 0 : filterProducts.map(function (product, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_5__.default, {\n            name: product.name,\n            image: product.image,\n            price: product.price,\n            baseUnit: product.baseUnit,\n            sku: product.sku\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"AvgZLXoPq5uQ4JHVIFXFw0YJsuQ=\", false, function () {\n  return [_hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_3__.default, _app_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch, _app_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector, _hooks_useGetCart__WEBPACK_IMPORTED_MODULE_2__.default];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFEZ0I7QUFBQSxTQUFwQjtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5Q0gsQ0FwRkQ7O0dBQU16QztVQUNtQlIsNERBRU5NLHdEQUNTQyx3REFZYlI7OztLQWhCVFM7QUFxRk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlR2V0Q2FydCBmcm9tIFwiLi4vaG9va3MvdXNlR2V0Q2FydFwiO1xuaW1wb3J0IHVzZUdldFByb2R1Y3RzIGZyb20gXCIuLi9ob29rcy91c2VHZXRQcm9kdWN0c1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0XCI7XG5pbXBvcnQgeyBzZXRQcm9kdWN0c0FjdGlvbnMsIHNlbGVjdFByb2R1Y3RzIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL3Byb2R1Y3QvcHJvZHVjdFJlZHVjZXJcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi9hcHAvaG9va3NcIjtcblxuLy9NYWluIHBhZ2UgIGNvbXBvbmVuZXRcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGxldCBwcm9kdWN0c1NvdXJjZSA9IHVzZUdldFByb2R1Y3RzKCk7XG4gICAgbGV0IHsgZGF0YSwgbG9hZGluZyB9ID0gcHJvZHVjdHNTb3VyY2U7XG4gICAgbGV0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBsZXQgcHJvZHVjdHNGcm9tUmVkdXggPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RQcm9kdWN0cyk7XG4gICAgY29uc3QgW2ZpbHRlclByb2R1Y3RzLCBzZXRGaWx0ZXJQcm9kdWN0c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFByb2R1Y3REZXRhaWxzKCk7XG4gICAgfSwgW2RhdGE/LmVkZ2VzXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0Zyb21SZWR1eCk7XG4gICAgICAgIHNldEZpbHRlclByb2R1Y3RzKHByb2R1Y3RzRnJvbVJlZHV4KTtcbiAgICB9LCBbcHJvZHVjdHNGcm9tUmVkdXhdKTtcbiAgICBsZXQgY2FydCA9IHVzZUdldENhcnQoKTtcblxuICAgLy91c2VkIHRvIHNldCBwcm9kdWN0IGRldGFpbHMgZnJvbSBob29rIGFuZCBkaXNwYXRjaCBhY3Rpb24gdG8gcHJvZHVjdCByZWR1Y2VyXG4gICAgY29uc3Qgc2V0UHJvZHVjdERldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9XG4gICAgICAgICAgICAoZGF0YT8uZWRnZXMubWFwKCh4KSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHgubm9kZS5uYW1lLFxuICAgICAgICAgICAgICAgIHByaWNlOiB4Lm5vZGUucHJpY2VzLmJhc2VQcmljZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogeC5ub2RlLmltYWdlLFxuICAgICAgICAgICAgICAgIGJhc2VVbml0OiB4Lm5vZGUucHJpY2VzLmJhc2VVbml0LFxuICAgICAgICAgICAgICAgIHNrdTogeC5ub2RlLnNrdSxcbiAgICAgICAgICAgIH0pKSBhcyBhbnkpIHx8IFtdO1xuICAgICAgICBkaXNwYXRjaChzZXRQcm9kdWN0c0FjdGlvbnMoeyBwcm9kdWN0T3B0aW9uczogcmVzIH0pKTtcbiAgICB9O1xuXG4gICAgICAgLy91c2VkIHRvIHNlYXJjaCB0aGUgcHJvZHVjdCBieSB1c2luZyBwcm9kdWN0IG5hbWVcbiAgICBjb25zdCBvblNlYXJjaFByb2R1Y3QgPSAoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhID0gcHJvZHVjdHMuZmlsdGVyKChzKSA9PlxuICAgICAgICAgICAgcy5uYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRhdGEudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgICAgc2V0RmlsdGVyUHJvZHVjdHMoYSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QnJpbmdtZWlzdGVyIENvZGluZyBDaGFsbGVuZ2U8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImlucHV0XCIgbmFtZT1cInNlYXJjaElucHV0XCIgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtZWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMCVcIiwgcGFkZGluZzogXCIuNXJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uU2VhcmNoUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9ICA+XG5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJQcm9kdWN0cz8ubWFwKChwcm9kdWN0LGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3QgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlVW5pdD17cHJvZHVjdC5iYXNlVW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1PXtwcm9kdWN0LnNrdX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUdldENhcnQiLCJ1c2VHZXRQcm9kdWN0cyIsInN0eWxlcyIsIkxvYWRpbmdTcGlubmVyIiwiUHJvZHVjdCIsInNldFByb2R1Y3RzQWN0aW9ucyIsInNlbGVjdFByb2R1Y3RzIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIkhvbWUiLCJwcm9kdWN0c1NvdXJjZSIsImRhdGEiLCJsb2FkaW5nIiwiZGlzcGF0Y2giLCJwcm9kdWN0c0Zyb21SZWR1eCIsImZpbHRlclByb2R1Y3RzIiwic2V0RmlsdGVyUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2V0UHJvZHVjdERldGFpbHMiLCJlZGdlcyIsImNhcnQiLCJyZXMiLCJtYXAiLCJ4IiwibmFtZSIsIm5vZGUiLCJwcmljZSIsInByaWNlcyIsImJhc2VQcmljZSIsImltYWdlIiwiYmFzZVVuaXQiLCJza3UiLCJwcm9kdWN0T3B0aW9ucyIsIm9uU2VhcmNoUHJvZHVjdCIsImEiLCJmaWx0ZXIiLCJzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwicGFkZGluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdyaWQiLCJwcm9kdWN0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});