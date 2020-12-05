webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBar */ \"./pages/navBar.js\");\n/* harmony import */ var _menuBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuBar */ \"./pages/menuBar.js\");\n/* harmony import */ var _productContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productContainer */ \"./pages/productContainer.js\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchBar */ \"./pages/searchBar.js\");\n\nvar _jsxFileName = \"/home/peu/documentos/peudevbr/react/ReactJS_website/pages/index.js\";\n\n\n\n\n\nvar parts = [{\n  name: \"Placa Potência 220V\",\n  avatar: \"https://th.bing.com/th/id/OIP.nW16fVygLmQddZvdgJ0rQwHaHa?w=199&h=199&c=7&o=5&pid=1.7\",\n  code: \"W10446925\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"BWC10AB, BWC10BB, BWC11AB, BWC10AB, BWC10BB, BWC11AB, BWC10BB, BWC11AB\",\n  cost: \"160,00\",\n  subName: \"potencia\"\n}, {\n  name: \"Placa Interface Bivolt\",\n  avatar: \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNp_6rZ7G-qz1sKdQiLt4UZWO2MudPCKK6jQ&usqp=CAU\",\n  code: \"W10605809\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"BWC10AB, BWC10BB, BWC11AB\",\n  cost: \"260,00\",\n  subName: \"\"\n}, {\n  name: \"Válvula Dupla 220V\",\n  avatar: \"https://th.bing.com/th/id/OIP.X42IINi8Stm5S84SWisCDgHaHa?pid=Api&rs=1\",\n  code: \"W10201539\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"Vários\",\n  cost: \"35,00\",\n  subName: \"Valvula Dupla 220V\"\n}, {\n  name: \"Atuador de Freio 220V\",\n  avatar: \"https://cdn.awsli.com.br/300x300/725/725357/produto/56179801/4880067af3.jpg\",\n  code: \"W10518617\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"Vários\",\n  cost: \"50,00\",\n  subName: \"\"\n}];\nvar searchList = parts;\nvar searchParts = \"\";\n\nfunction searchProduct(productName) {\n  searchParts = productName;\n\n  for (var slice in parts) {\n    if (parts[slice].name.toUpperCase().includes(searchParts) || parts[slice].model.toUpperCase().includes(searchParts) || parts[slice].code.toUpperCase().includes(searchParts) || parts[slice].brand.toUpperCase().includes(searchParts) || parts[slice].subject.toUpperCase().includes(searchParts) || parts[slice].subName.toUpperCase().includes(searchParts)) {\n      searchList.push(parts[slice]);\n    }\n  }\n\n  return searchList;\n}\n\nsearchParts = searchParts.toUpperCase();\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_searchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_navBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_productContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      parts: searchProduct(searchParts)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJwYXJ0cyIsIm5hbWUiLCJhdmF0YXIiLCJjb2RlIiwiYnJhbmQiLCJzdWJqZWN0IiwibW9kZWwiLCJjb3N0Iiwic3ViTmFtZSIsInNlYXJjaExpc3QiLCJzZWFyY2hQYXJ0cyIsInNlYXJjaFByb2R1Y3QiLCJwcm9kdWN0TmFtZSIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJpbmNsdWRlcyIsInB1c2giLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsQ0FDVjtBQUNFQyxNQUFJLEVBQUUscUJBRFI7QUFFRUMsUUFBTSxFQUFFLHNGQUZWO0FBR0VDLE1BQUksRUFBRSxXQUhSO0FBSUVDLE9BQUssRUFBRSxpQkFKVDtBQUtFQyxTQUFPLEVBQUUsa0JBTFg7QUFNRUMsT0FBSyxFQUFFLHdFQU5UO0FBT0VDLE1BQUksRUFBRSxRQVBSO0FBUUVDLFNBQU8sRUFBRTtBQVJYLENBRFUsRUFXWjtBQUNJUCxNQUFJLEVBQUUsd0JBRFY7QUFFSUMsUUFBTSxFQUFFLHVHQUZaO0FBR0lDLE1BQUksRUFBRSxXQUhWO0FBSUlDLE9BQUssRUFBRSxpQkFKWDtBQUtJQyxTQUFPLEVBQUUsa0JBTGI7QUFNSUMsT0FBSyxFQUFFLDJCQU5YO0FBT0lDLE1BQUksRUFBRSxRQVBWO0FBUUlDLFNBQU8sRUFBRTtBQVJiLENBWFksRUFxQlo7QUFDSVAsTUFBSSxFQUFFLG9CQURWO0FBRUlDLFFBQU0sRUFBRSx1RUFGWjtBQUdJQyxNQUFJLEVBQUUsV0FIVjtBQUlJQyxPQUFLLEVBQUUsaUJBSlg7QUFLSUMsU0FBTyxFQUFFLGtCQUxiO0FBTUlDLE9BQUssRUFBRSxRQU5YO0FBT0lDLE1BQUksRUFBRSxPQVBWO0FBUUlDLFNBQU8sRUFBRTtBQVJiLENBckJZLEVBK0JaO0FBQ0lQLE1BQUksRUFBRSx1QkFEVjtBQUVJQyxRQUFNLEVBQUUsNkVBRlo7QUFHSUMsTUFBSSxFQUFFLFdBSFY7QUFJSUMsT0FBSyxFQUFFLGlCQUpYO0FBS0lDLFNBQU8sRUFBRSxrQkFMYjtBQU1JQyxPQUFLLEVBQUUsUUFOWDtBQU9JQyxNQUFJLEVBQUUsT0FQVjtBQVFJQyxTQUFPLEVBQUU7QUFSYixDQS9CWSxDQUFaO0FBMkNBLElBQUlDLFVBQVUsR0FBR1QsS0FBakI7QUFFQSxJQUFJVSxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsV0FBdkIsRUFBb0M7QUFFbENGLGFBQVcsR0FBR0UsV0FBZDs7QUFFQSxPQUFLLElBQUlDLEtBQVQsSUFBa0JiLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQUlBLEtBQUssQ0FBQ2EsS0FBRCxDQUFMLENBQWFaLElBQWIsQ0FBa0JhLFdBQWxCLEdBQWdDQyxRQUFoQyxDQUF5Q0wsV0FBekMsS0FDRFYsS0FBSyxDQUFDYSxLQUFELENBQUwsQ0FBYVAsS0FBYixDQUFtQlEsV0FBbkIsR0FBaUNDLFFBQWpDLENBQTBDTCxXQUExQyxDQURDLElBRURWLEtBQUssQ0FBQ2EsS0FBRCxDQUFMLENBQWFWLElBQWIsQ0FBa0JXLFdBQWxCLEdBQWdDQyxRQUFoQyxDQUF5Q0wsV0FBekMsQ0FGQyxJQUdEVixLQUFLLENBQUNhLEtBQUQsQ0FBTCxDQUFhVCxLQUFiLENBQW1CVSxXQUFuQixHQUFpQ0MsUUFBakMsQ0FBMENMLFdBQTFDLENBSEMsSUFJRFYsS0FBSyxDQUFDYSxLQUFELENBQUwsQ0FBYVIsT0FBYixDQUFxQlMsV0FBckIsR0FBbUNDLFFBQW5DLENBQTRDTCxXQUE1QyxDQUpDLElBS0RWLEtBQUssQ0FBQ2EsS0FBRCxDQUFMLENBQWFMLE9BQWIsQ0FBcUJNLFdBQXJCLEdBQW1DQyxRQUFuQyxDQUE0Q0wsV0FBNUMsQ0FMSCxFQUs2RDtBQUUzREQsZ0JBQVUsQ0FBQ08sSUFBWCxDQUFnQmhCLEtBQUssQ0FBQ2EsS0FBRCxDQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0osVUFBUDtBQUNEOztBQUVEQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQ0ksV0FBWixFQUFkOztBQUVBLFNBQVNHLElBQVQsR0FBZ0I7QUFDZCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMseURBQUQ7QUFBa0IsV0FBSyxFQUFFTixhQUFhLENBQUNELFdBQUQ7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0tBVFFPLEk7QUFZTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2QmFyJ1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi9tZW51QmFyJ1xuaW1wb3J0IFByb2R1Y3RDb250YWluZXIgZnJvbSAnLi9wcm9kdWN0Q29udGFpbmVyJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaEJhcidcblxudmFyIHBhcnRzID0gW1xuICB7XG4gICAgbmFtZTogXCJQbGFjYSBQb3TDqm5jaWEgMjIwVlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL3RoLmJpbmcuY29tL3RoL2lkL09JUC5uVzE2ZlZ5Z0xtUWRkWnZkZ0owclF3SGFIYT93PTE5OSZoPTE5OSZjPTcmbz01JnBpZD0xLjdcIixcbiAgICBjb2RlOiBcIlcxMDQ0NjkyNVwiLFxuICAgIGJyYW5kOiBcIkJyYXN0ZW1wL0NvbnN1bFwiLFxuICAgIHN1YmplY3Q6IFwiTcOhcXVpbmEgZGUgTGF2YXJcIixcbiAgICBtb2RlbDogXCJCV0MxMEFCLCBCV0MxMEJCLCBCV0MxMUFCLCBCV0MxMEFCLCBCV0MxMEJCLCBCV0MxMUFCLCBCV0MxMEJCLCBCV0MxMUFCXCIsXG4gICAgY29zdDogXCIxNjAsMDBcIixcbiAgICBzdWJOYW1lOiBcInBvdGVuY2lhXCIsXG59LFxue1xuICAgIG5hbWU6IFwiUGxhY2EgSW50ZXJmYWNlIEJpdm9sdFwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1ROcF82clo3Ry1xejFzS2RRaUx0NFVaV08yTXVkUENLSzZqUSZ1c3FwPUNBVVwiLFxuICAgIGNvZGU6IFwiVzEwNjA1ODA5XCIsXG4gICAgYnJhbmQ6IFwiQnJhc3RlbXAvQ29uc3VsXCIsXG4gICAgc3ViamVjdDogXCJNw6FxdWluYSBkZSBMYXZhclwiLFxuICAgIG1vZGVsOiBcIkJXQzEwQUIsIEJXQzEwQkIsIEJXQzExQUJcIixcbiAgICBjb3N0OiBcIjI2MCwwMFwiLFxuICAgIHN1Yk5hbWU6IFwiXCIsXG59LFxue1xuICAgIG5hbWU6IFwiVsOhbHZ1bGEgRHVwbGEgMjIwVlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL3RoLmJpbmcuY29tL3RoL2lkL09JUC5YNDJJSU5pOFN0bTVTODRTV2lzQ0RnSGFIYT9waWQ9QXBpJnJzPTFcIixcbiAgICBjb2RlOiBcIlcxMDIwMTUzOVwiLFxuICAgIGJyYW5kOiBcIkJyYXN0ZW1wL0NvbnN1bFwiLFxuICAgIHN1YmplY3Q6IFwiTcOhcXVpbmEgZGUgTGF2YXJcIixcbiAgICBtb2RlbDogXCJWw6FyaW9zXCIsXG4gICAgY29zdDogXCIzNSwwMFwiLFxuICAgIHN1Yk5hbWU6IFwiVmFsdnVsYSBEdXBsYSAyMjBWXCIsXG59LFxue1xuICAgIG5hbWU6IFwiQXR1YWRvciBkZSBGcmVpbyAyMjBWXCIsXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vY2RuLmF3c2xpLmNvbS5ici8zMDB4MzAwLzcyNS83MjUzNTcvcHJvZHV0by81NjE3OTgwMS80ODgwMDY3YWYzLmpwZ1wiLFxuICAgIGNvZGU6IFwiVzEwNTE4NjE3XCIsXG4gICAgYnJhbmQ6IFwiQnJhc3RlbXAvQ29uc3VsXCIsXG4gICAgc3ViamVjdDogXCJNw6FxdWluYSBkZSBMYXZhclwiLFxuICAgIG1vZGVsOiBcIlbDoXJpb3NcIixcbiAgICBjb3N0OiBcIjUwLDAwXCIsXG4gICAgc3ViTmFtZTogXCJcIixcbn1cbl1cblxudmFyIHNlYXJjaExpc3QgPSBwYXJ0c1xuXG52YXIgc2VhcmNoUGFydHMgPSBcIlwiXG5cbmZ1bmN0aW9uIHNlYXJjaFByb2R1Y3QocHJvZHVjdE5hbWUpIHtcblxuICBzZWFyY2hQYXJ0cyA9IHByb2R1Y3ROYW1lXG5cbiAgZm9yICh2YXIgc2xpY2UgaW4gcGFydHMpIHtcbiAgICBpZiAocGFydHNbc2xpY2VdLm5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hQYXJ0cykgXG4gICAgfHwgcGFydHNbc2xpY2VdLm1vZGVsLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUGFydHMpIFxuICAgIHx8IHBhcnRzW3NsaWNlXS5jb2RlLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUGFydHMpXG4gICAgfHwgcGFydHNbc2xpY2VdLmJyYW5kLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUGFydHMpXG4gICAgfHwgcGFydHNbc2xpY2VdLnN1YmplY3QudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hQYXJ0cylcbiAgICB8fCBwYXJ0c1tzbGljZV0uc3ViTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFBhcnRzKSkge1xuXG4gICAgICBzZWFyY2hMaXN0LnB1c2gocGFydHNbc2xpY2VdKVxuICAgIH0gICAgIFxuICB9XG5cbiAgcmV0dXJuIHNlYXJjaExpc3Rcbn1cblxuc2VhcmNoUGFydHMgPSBzZWFyY2hQYXJ0cy50b1VwcGVyQ2FzZSgpXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxTZWFyY2hCYXIvPlxuICAgICAgPE5hdkJhci8+XG4gICAgICA8TWVudUJhci8+XG4gICAgICA8UHJvZHVjdENvbnRhaW5lciBwYXJ0cz17c2VhcmNoUHJvZHVjdChzZWFyY2hQYXJ0cyl9Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})