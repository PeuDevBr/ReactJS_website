webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/peu/documentos/peudevbr/react/ReactJS_website/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SearchBar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Home;\n\nfunction SearchBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  function searchProduct() {\n    var searchInput = document.getElementById(\"searchFor\").value;\n    setSearch(searchInput);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"searchContainer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"logoContainer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"logo\",\n        href: \"#\",\n        children: \"Servibras\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"searchForContainer\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        id: \"searchInput\",\n        type: \"text\",\n        placeholder: \"Busque o seu produto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        id: \"searchButton\",\n        onClick: searchProduct,\n        children: \"Pesquisar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Resultado: \", search]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SearchBar, \"42GASUL8pX2/N6Oh5HTh0GvQEF0=\");\n\n_c2 = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiU2VhcmNoQmFyIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWFyY2hQcm9kdWN0Iiwic2VhcmNoSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RQSxJOztBQVFULFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBR25CLFdBQVNDLGFBQVQsR0FBeUI7QUFDdkIsUUFBSUMsV0FBVyxHQUFFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLEtBQXREO0FBRUFMLGFBQVMsQ0FBQ0UsV0FBRCxDQUFUO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSw0QkFFRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBb0IsWUFBSSxFQUFDLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBTUU7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDRTtBQUFPLFVBQUUsRUFBQyxhQUFWO0FBQXdCLFlBQUksRUFBQyxNQUE3QjtBQUFvQyxtQkFBVyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQVEsVUFBRSxFQUFDLGNBQVg7QUFBMEIsZUFBTyxFQUFFRCxhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBV0U7QUFBQSxnQ0FBaUJGLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBdkJRRixTOztNQUFBQSxTO0FBeUJNRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPFNlYXJjaEJhci8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gU2VhcmNoQmFyKCkge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7IFxuXG4gIGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3QoKSB7XG4gICAgbGV0IHNlYXJjaElucHV0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZvclwiKS52YWx1ZVxuXG4gICAgc2V0U2VhcmNoKHNlYXJjaElucHV0KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoQ29udGFpbmVyXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb0NvbnRhaW5lclwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIiNcIj5TZXJ2aWJyYXM8L2E+XG4gICAgICA8L2Rpdj4gICAgICBcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hGb3JDb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IGlkPVwic2VhcmNoSW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQnVzcXVlIG8gc2V1IHByb2R1dG9cIi8+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2hCdXR0b25cIiBvbkNsaWNrPXtzZWFyY2hQcm9kdWN0fT5QZXNxdWlzYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlJlc3VsdGFkbzoge3NlYXJjaH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})