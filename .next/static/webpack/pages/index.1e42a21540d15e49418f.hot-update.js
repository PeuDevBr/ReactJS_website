webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBar */ \"./pages/navBar.js\");\n/* harmony import */ var _menuBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuBar */ \"./pages/menuBar.js\");\n/* harmony import */ var _productContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productContainer */ \"./pages/productContainer.js\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchBar */ \"./pages/searchBar.js\");\n\nvar _jsxFileName = \"/home/peu/documentos/peudevbr/react/ReactJS_website/pages/index.js\";\n\n\n\n\n\nvar parts = [{\n  name: \"Placa Potência 220V\",\n  avatar: \"https://th.bing.com/th/id/OIP.nW16fVygLmQddZvdgJ0rQwHaHa?w=199&h=199&c=7&o=5&pid=1.7\",\n  code: \"W10446925\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"BWC10AB, BWC10BB, BWC11AB, BWC10AB, BWC10BB, BWC11AB, BWC10BB, BWC11AB\",\n  cost: \"160,00\",\n  subName: \"potencia\"\n}, {\n  name: \"Placa Interface Bivolt\",\n  avatar: \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNp_6rZ7G-qz1sKdQiLt4UZWO2MudPCKK6jQ&usqp=CAU\",\n  code: \"W10605809\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"BWC10AB, BWC10BB, BWC11AB\",\n  cost: \"260,00\",\n  subName: \"\"\n}, {\n  name: \"Válvula Dupla 220V\",\n  avatar: \"https://th.bing.com/th/id/OIP.X42IINi8Stm5S84SWisCDgHaHa?pid=Api&rs=1\",\n  code: \"W10201539\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"Vários\",\n  cost: \"35,00\",\n  subName: \"Valvula Dupla 220V\"\n}, {\n  name: \"Atuador de Freio 220V\",\n  avatar: \"https://cdn.awsli.com.br/300x300/725/725357/produto/56179801/4880067af3.jpg\",\n  code: \"W10518617\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"Vários\",\n  cost: \"50,00\",\n  subName: \"\"\n}];\nvar searchList = parts;\nvar searchParts = \"placa\";\nsearchParts = searchParts.toUpperCase();\n\nfunction searchProduct(productName) {\n  for (var slice in parts) {\n    if (parts[slice].name.toUpperCase().includes(productName) || parts[slice].model.toUpperCase().includes(productName) || parts[slice].code.toUpperCase().includes(productName) || parts[slice].brand.toUpperCase().includes(productName) || parts[slice].subject.toUpperCase().includes(productName) || parts[slice].subName.toUpperCase().includes(productName)) {\n      searchList.push(parts[slice]);\n    }\n  }\n\n  return searchList;\n}\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_searchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_navBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_productContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      parts: searchProduct(\"placa\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJwYXJ0cyIsIm5hbWUiLCJhdmF0YXIiLCJjb2RlIiwiYnJhbmQiLCJzdWJqZWN0IiwibW9kZWwiLCJjb3N0Iiwic3ViTmFtZSIsInNlYXJjaExpc3QiLCJzZWFyY2hQYXJ0cyIsInRvVXBwZXJDYXNlIiwic2VhcmNoUHJvZHVjdCIsInByb2R1Y3ROYW1lIiwic2xpY2UiLCJpbmNsdWRlcyIsInB1c2giLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsQ0FDVjtBQUNFQyxNQUFJLEVBQUUscUJBRFI7QUFFRUMsUUFBTSxFQUFFLHNGQUZWO0FBR0VDLE1BQUksRUFBRSxXQUhSO0FBSUVDLE9BQUssRUFBRSxpQkFKVDtBQUtFQyxTQUFPLEVBQUUsa0JBTFg7QUFNRUMsT0FBSyxFQUFFLHdFQU5UO0FBT0VDLE1BQUksRUFBRSxRQVBSO0FBUUVDLFNBQU8sRUFBRTtBQVJYLENBRFUsRUFXWjtBQUNJUCxNQUFJLEVBQUUsd0JBRFY7QUFFSUMsUUFBTSxFQUFFLHVHQUZaO0FBR0lDLE1BQUksRUFBRSxXQUhWO0FBSUlDLE9BQUssRUFBRSxpQkFKWDtBQUtJQyxTQUFPLEVBQUUsa0JBTGI7QUFNSUMsT0FBSyxFQUFFLDJCQU5YO0FBT0lDLE1BQUksRUFBRSxRQVBWO0FBUUlDLFNBQU8sRUFBRTtBQVJiLENBWFksRUFxQlo7QUFDSVAsTUFBSSxFQUFFLG9CQURWO0FBRUlDLFFBQU0sRUFBRSx1RUFGWjtBQUdJQyxNQUFJLEVBQUUsV0FIVjtBQUlJQyxPQUFLLEVBQUUsaUJBSlg7QUFLSUMsU0FBTyxFQUFFLGtCQUxiO0FBTUlDLE9BQUssRUFBRSxRQU5YO0FBT0lDLE1BQUksRUFBRSxPQVBWO0FBUUlDLFNBQU8sRUFBRTtBQVJiLENBckJZLEVBK0JaO0FBQ0lQLE1BQUksRUFBRSx1QkFEVjtBQUVJQyxRQUFNLEVBQUUsNkVBRlo7QUFHSUMsTUFBSSxFQUFFLFdBSFY7QUFJSUMsT0FBSyxFQUFFLGlCQUpYO0FBS0lDLFNBQU8sRUFBRSxrQkFMYjtBQU1JQyxPQUFLLEVBQUUsUUFOWDtBQU9JQyxNQUFJLEVBQUUsT0FQVjtBQVFJQyxTQUFPLEVBQUU7QUFSYixDQS9CWSxDQUFaO0FBMkNBLElBQUlDLFVBQVUsR0FBR1QsS0FBakI7QUFFQSxJQUFJVSxXQUFXLEdBQUcsT0FBbEI7QUFFQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNDLFdBQVosRUFBZDs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxXQUF2QixFQUFvQztBQUVsQyxPQUFLLElBQUlDLEtBQVQsSUFBa0JkLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQUlBLEtBQUssQ0FBQ2MsS0FBRCxDQUFMLENBQWFiLElBQWIsQ0FBa0JVLFdBQWxCLEdBQWdDSSxRQUFoQyxDQUF5Q0YsV0FBekMsS0FDRGIsS0FBSyxDQUFDYyxLQUFELENBQUwsQ0FBYVIsS0FBYixDQUFtQkssV0FBbkIsR0FBaUNJLFFBQWpDLENBQTBDRixXQUExQyxDQURDLElBRURiLEtBQUssQ0FBQ2MsS0FBRCxDQUFMLENBQWFYLElBQWIsQ0FBa0JRLFdBQWxCLEdBQWdDSSxRQUFoQyxDQUF5Q0YsV0FBekMsQ0FGQyxJQUdEYixLQUFLLENBQUNjLEtBQUQsQ0FBTCxDQUFhVixLQUFiLENBQW1CTyxXQUFuQixHQUFpQ0ksUUFBakMsQ0FBMENGLFdBQTFDLENBSEMsSUFJRGIsS0FBSyxDQUFDYyxLQUFELENBQUwsQ0FBYVQsT0FBYixDQUFxQk0sV0FBckIsR0FBbUNJLFFBQW5DLENBQTRDRixXQUE1QyxDQUpDLElBS0RiLEtBQUssQ0FBQ2MsS0FBRCxDQUFMLENBQWFOLE9BQWIsQ0FBcUJHLFdBQXJCLEdBQW1DSSxRQUFuQyxDQUE0Q0YsV0FBNUMsQ0FMSCxFQUs2RDtBQUUzREosZ0JBQVUsQ0FBQ08sSUFBWCxDQUFnQmhCLEtBQUssQ0FBQ2MsS0FBRCxDQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0wsVUFBUDtBQUNEOztBQUlELFNBQVNRLElBQVQsR0FBZ0I7QUFDZCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMseURBQUQ7QUFBa0IsV0FBSyxFQUFFTCxhQUFhLENBQUMsT0FBRDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7S0FUUUssSTtBQVlNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZCYXInXG5pbXBvcnQgTWVudUJhciBmcm9tICcuL21lbnVCYXInXG5pbXBvcnQgUHJvZHVjdENvbnRhaW5lciBmcm9tICcuL3Byb2R1Y3RDb250YWluZXInXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vc2VhcmNoQmFyJ1xuXG52YXIgcGFydHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBsYWNhIFBvdMOqbmNpYSAyMjBWXCIsXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vdGguYmluZy5jb20vdGgvaWQvT0lQLm5XMTZmVnlnTG1RZGRadmRnSjByUXdIYUhhP3c9MTk5Jmg9MTk5JmM9NyZvPTUmcGlkPTEuN1wiLFxuICAgIGNvZGU6IFwiVzEwNDQ2OTI1XCIsXG4gICAgYnJhbmQ6IFwiQnJhc3RlbXAvQ29uc3VsXCIsXG4gICAgc3ViamVjdDogXCJNw6FxdWluYSBkZSBMYXZhclwiLFxuICAgIG1vZGVsOiBcIkJXQzEwQUIsIEJXQzEwQkIsIEJXQzExQUIsIEJXQzEwQUIsIEJXQzEwQkIsIEJXQzExQUIsIEJXQzEwQkIsIEJXQzExQUJcIixcbiAgICBjb3N0OiBcIjE2MCwwMFwiLFxuICAgIHN1Yk5hbWU6IFwicG90ZW5jaWFcIixcbn0sXG57XG4gICAgbmFtZTogXCJQbGFjYSBJbnRlcmZhY2UgQml2b2x0XCIsXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuJTNBQU5kOUdjVE5wXzZyWjdHLXF6MXNLZFFpTHQ0VVpXTzJNdWRQQ0tLNmpRJnVzcXA9Q0FVXCIsXG4gICAgY29kZTogXCJXMTA2MDU4MDlcIixcbiAgICBicmFuZDogXCJCcmFzdGVtcC9Db25zdWxcIixcbiAgICBzdWJqZWN0OiBcIk3DoXF1aW5hIGRlIExhdmFyXCIsXG4gICAgbW9kZWw6IFwiQldDMTBBQiwgQldDMTBCQiwgQldDMTFBQlwiLFxuICAgIGNvc3Q6IFwiMjYwLDAwXCIsXG4gICAgc3ViTmFtZTogXCJcIixcbn0sXG57XG4gICAgbmFtZTogXCJWw6FsdnVsYSBEdXBsYSAyMjBWXCIsXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vdGguYmluZy5jb20vdGgvaWQvT0lQLlg0MklJTmk4U3RtNVM4NFNXaXNDRGdIYUhhP3BpZD1BcGkmcnM9MVwiLFxuICAgIGNvZGU6IFwiVzEwMjAxNTM5XCIsXG4gICAgYnJhbmQ6IFwiQnJhc3RlbXAvQ29uc3VsXCIsXG4gICAgc3ViamVjdDogXCJNw6FxdWluYSBkZSBMYXZhclwiLFxuICAgIG1vZGVsOiBcIlbDoXJpb3NcIixcbiAgICBjb3N0OiBcIjM1LDAwXCIsXG4gICAgc3ViTmFtZTogXCJWYWx2dWxhIER1cGxhIDIyMFZcIixcbn0sXG57XG4gICAgbmFtZTogXCJBdHVhZG9yIGRlIEZyZWlvIDIyMFZcIixcbiAgICBhdmF0YXI6IFwiaHR0cHM6Ly9jZG4uYXdzbGkuY29tLmJyLzMwMHgzMDAvNzI1LzcyNTM1Ny9wcm9kdXRvLzU2MTc5ODAxLzQ4ODAwNjdhZjMuanBnXCIsXG4gICAgY29kZTogXCJXMTA1MTg2MTdcIixcbiAgICBicmFuZDogXCJCcmFzdGVtcC9Db25zdWxcIixcbiAgICBzdWJqZWN0OiBcIk3DoXF1aW5hIGRlIExhdmFyXCIsXG4gICAgbW9kZWw6IFwiVsOhcmlvc1wiLFxuICAgIGNvc3Q6IFwiNTAsMDBcIixcbiAgICBzdWJOYW1lOiBcIlwiLFxufVxuXVxuXG52YXIgc2VhcmNoTGlzdCA9IHBhcnRzXG5cbnZhciBzZWFyY2hQYXJ0cyA9IFwicGxhY2FcIlxuXG5zZWFyY2hQYXJ0cyA9IHNlYXJjaFBhcnRzLnRvVXBwZXJDYXNlKClcblxuZnVuY3Rpb24gc2VhcmNoUHJvZHVjdChwcm9kdWN0TmFtZSkge1xuXG4gIGZvciAodmFyIHNsaWNlIGluIHBhcnRzKSB7XG4gICAgaWYgKHBhcnRzW3NsaWNlXS5uYW1lLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMocHJvZHVjdE5hbWUpIFxuICAgIHx8IHBhcnRzW3NsaWNlXS5tb2RlbC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHByb2R1Y3ROYW1lKSBcbiAgICB8fCBwYXJ0c1tzbGljZV0uY29kZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHByb2R1Y3ROYW1lKVxuICAgIHx8IHBhcnRzW3NsaWNlXS5icmFuZC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHByb2R1Y3ROYW1lKVxuICAgIHx8IHBhcnRzW3NsaWNlXS5zdWJqZWN0LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMocHJvZHVjdE5hbWUpXG4gICAgfHwgcGFydHNbc2xpY2VdLnN1Yk5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhwcm9kdWN0TmFtZSkpIHtcblxuICAgICAgc2VhcmNoTGlzdC5wdXNoKHBhcnRzW3NsaWNlXSlcbiAgICB9ICAgICBcbiAgfVxuXG4gIHJldHVybiBzZWFyY2hMaXN0XG59XG5cblxuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8U2VhcmNoQmFyLz5cbiAgICAgIDxOYXZCYXIvPlxuICAgICAgPE1lbnVCYXIvPlxuICAgICAgPFByb2R1Y3RDb250YWluZXIgcGFydHM9e3NlYXJjaFByb2R1Y3QoXCJwbGFjYVwiKX0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})