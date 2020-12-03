module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/peu/documentos/peudevbr/react/ReactJS_website/pages/index.js\";\n\nvar tipo = ['Climatizador'];\nvar parts = [{\n  name: \"Placa Potência 220V\",\n  avatar: \"https://th.bing.com/th/id/OIP.nW16fVygLmQddZvdgJ0rQwHaHa?w=199&h=199&c=7&o=5&pid=1.7\",\n  code: \"W10446925\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"BWC10AB, BWC10BB, BWC11AB, BWC10AB, BWC10BB, BWC11AB, BWC10AB, BWC10BB, BWC11AB, BWC10BB, BWC11AB\",\n  cost: \"160,00\",\n  subName: \"potencia\"\n}, {\n  name: \"Placa Interface Bivolt\",\n  avatar: \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNp_6rZ7G-qz1sKdQiLt4UZWO2MudPCKK6jQ&usqp=CAU\",\n  code: \"W10605809\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"BWC10AB, BWC10BB, BWC11AB\",\n  cost: \"260,00\",\n  subName: \"\"\n}, {\n  name: \"Válvula Dupla 220V\",\n  avatar: \"https://th.bing.com/th/id/OIP.X42IINi8Stm5S84SWisCDgHaHa?pid=Api&rs=1\",\n  code: \"W10201539\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"Vários\",\n  cost: \"35,00\",\n  subName: \"Valvula Dupla 220V\"\n}, {\n  name: \"Atuador de Freio 220V\",\n  avatar: \"https://cdn.awsli.com.br/300x300/725/725357/produto/56179801/4880067af3.jpg\",\n  code: \"W10518617\",\n  brand: \"Brastemp/Consul\",\n  subject: \"Máquina de Lavar\",\n  model: \"Vários\",\n  cost: \"50,00\",\n  subName: \"\"\n}];\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SearchBar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavBar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuBar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductContainer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductContainer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\nfunction SearchBar() {\n  const {\n    0: search,\n    1: setSearch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n\n  function searchProduct() {\n    let searchInput = document.getElementById(\"searchInput\").value;\n    setSearch(searchInput);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"searchContainer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"logoContainer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/about\",\n        children: \"Servibras\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"searchForContainer\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        id: \"searchInput\",\n        type: \"text\",\n        placeholder: \"Busque o seu produto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        id: \"searchButton\",\n        onClick: searchProduct,\n        children: \"Pesquisar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: search\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}\n\nfunction NavBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"navContainer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      children: \"Servi\\xE7os\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      children: \"Pe\\xE7as\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      children: \"Contatos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 5\n  }, this);\n}\n\nfunction MenuBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"menuContainer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      children: \"Lavadoras\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      children: \"Refrigerdor\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      children: \"Freezer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      children: \"Split\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, this);\n}\n\nfunction ProductContainer() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: \"productConteiner\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        className: \"productHeader\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"productImage\",\n          src: parts[0].avatar,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: parts[0].name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [\" C\\xF3digo: \", parts[0].code]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [\"Marca: \", parts[0].brand]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [\"Modelo: \", parts[0].model]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        className: \"footerContainer\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"Pre\\xE7o\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: parts[0].cost\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 18\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 151,\n            columnNumber: 13\n          }, this), \"Comprar\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 127,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInRpcG8iLCJwYXJ0cyIsIm5hbWUiLCJhdmF0YXIiLCJjb2RlIiwiYnJhbmQiLCJzdWJqZWN0IiwibW9kZWwiLCJjb3N0Iiwic3ViTmFtZSIsIkhvbWUiLCJTZWFyY2hCYXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaFByb2R1Y3QiLCJzZWFyY2hJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIk5hdkJhciIsIk1lbnVCYXIiLCJQcm9kdWN0Q29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxJQUFJQSxJQUFJLEdBQUcsQ0FBQyxjQUFELENBQVg7QUFFQSxJQUFJQyxLQUFLLEdBQUcsQ0FDVjtBQUNFQyxNQUFJLEVBQUUscUJBRFI7QUFFRUMsUUFBTSxFQUFFLHNGQUZWO0FBR0VDLE1BQUksRUFBRSxXQUhSO0FBSUVDLE9BQUssRUFBRSxpQkFKVDtBQUtFQyxTQUFPLEVBQUUsa0JBTFg7QUFNRUMsT0FBSyxFQUFFLG1HQU5UO0FBT0VDLE1BQUksRUFBRSxRQVBSO0FBUUVDLFNBQU8sRUFBRTtBQVJYLENBRFUsRUFXWjtBQUNJUCxNQUFJLEVBQUUsd0JBRFY7QUFFSUMsUUFBTSxFQUFFLHVHQUZaO0FBR0lDLE1BQUksRUFBRSxXQUhWO0FBSUlDLE9BQUssRUFBRSxpQkFKWDtBQUtJQyxTQUFPLEVBQUUsa0JBTGI7QUFNSUMsT0FBSyxFQUFFLDJCQU5YO0FBT0lDLE1BQUksRUFBRSxRQVBWO0FBUUlDLFNBQU8sRUFBRTtBQVJiLENBWFksRUFxQlo7QUFDSVAsTUFBSSxFQUFFLG9CQURWO0FBRUlDLFFBQU0sRUFBRSx1RUFGWjtBQUdJQyxNQUFJLEVBQUUsV0FIVjtBQUlJQyxPQUFLLEVBQUUsaUJBSlg7QUFLSUMsU0FBTyxFQUFFLGtCQUxiO0FBTUlDLE9BQUssRUFBRSxRQU5YO0FBT0lDLE1BQUks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LGtCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0FBRWNFLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudmFyIHRpcG8gPSBbJ0NsaW1hdGl6YWRvciddXG5cbnZhciBwYXJ0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwiUGxhY2EgUG90w6puY2lhIDIyMFZcIixcbiAgICBhdmF0YXI6IFwiaHR0cHM6Ly90aC5iaW5nLmNvbS90aC9pZC9PSVAublcxNmZWeWdMbVFkZFp2ZGdKMHJRd0hhSGE/dz0xOTkmaD0xOTkmYz03Jm89NSZwaWQ9MS43XCIsXG4gICAgY29kZTogXCJXMTA0NDY5MjVcIixcbiAgICBicmFuZDogXCJCcmFzdGVtcC9Db25zdWxcIixcbiAgICBzdWJqZWN0OiBcIk3DoXF1aW5hIGRlIExhdmFyXCIsXG4gICAgbW9kZWw6IFwiQldDMTBBQiwgQldDMTBCQiwgQldDMTFBQiwgQldDMTBBQiwgQldDMTBCQiwgQldDMTFBQiwgQldDMTBBQiwgQldDMTBCQiwgQldDMTFBQiwgQldDMTBCQiwgQldDMTFBQlwiLFxuICAgIGNvc3Q6IFwiMTYwLDAwXCIsXG4gICAgc3ViTmFtZTogXCJwb3RlbmNpYVwiLFxufSxcbntcbiAgICBuYW1lOiBcIlBsYWNhIEludGVyZmFjZSBCaXZvbHRcIixcbiAgICBhdmF0YXI6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym4lM0FBTmQ5R2NUTnBfNnJaN0ctcXoxc0tkUWlMdDRVWldPMk11ZFBDS0s2alEmdXNxcD1DQVVcIixcbiAgICBjb2RlOiBcIlcxMDYwNTgwOVwiLFxuICAgIGJyYW5kOiBcIkJyYXN0ZW1wL0NvbnN1bFwiLFxuICAgIHN1YmplY3Q6IFwiTcOhcXVpbmEgZGUgTGF2YXJcIixcbiAgICBtb2RlbDogXCJCV0MxMEFCLCBCV0MxMEJCLCBCV0MxMUFCXCIsXG4gICAgY29zdDogXCIyNjAsMDBcIixcbiAgICBzdWJOYW1lOiBcIlwiLFxufSxcbntcbiAgICBuYW1lOiBcIlbDoWx2dWxhIER1cGxhIDIyMFZcIixcbiAgICBhdmF0YXI6IFwiaHR0cHM6Ly90aC5iaW5nLmNvbS90aC9pZC9PSVAuWDQySUlOaThTdG01Uzg0U1dpc0NEZ0hhSGE/cGlkPUFwaSZycz0xXCIsXG4gICAgY29kZTogXCJXMTAyMDE1MzlcIixcbiAgICBicmFuZDogXCJCcmFzdGVtcC9Db25zdWxcIixcbiAgICBzdWJqZWN0OiBcIk3DoXF1aW5hIGRlIExhdmFyXCIsXG4gICAgbW9kZWw6IFwiVsOhcmlvc1wiLFxuICAgIGNvc3Q6IFwiMzUsMDBcIixcbiAgICBzdWJOYW1lOiBcIlZhbHZ1bGEgRHVwbGEgMjIwVlwiLFxufSxcbntcbiAgICBuYW1lOiBcIkF0dWFkb3IgZGUgRnJlaW8gMjIwVlwiLFxuICAgIGF2YXRhcjogXCJodHRwczovL2Nkbi5hd3NsaS5jb20uYnIvMzAweDMwMC83MjUvNzI1MzU3L3Byb2R1dG8vNTYxNzk4MDEvNDg4MDA2N2FmMy5qcGdcIixcbiAgICBjb2RlOiBcIlcxMDUxODYxN1wiLFxuICAgIGJyYW5kOiBcIkJyYXN0ZW1wL0NvbnN1bFwiLFxuICAgIHN1YmplY3Q6IFwiTcOhcXVpbmEgZGUgTGF2YXJcIixcbiAgICBtb2RlbDogXCJWw6FyaW9zXCIsXG4gICAgY29zdDogXCI1MCwwMFwiLFxuICAgIHN1Yk5hbWU6IFwiXCIsXG59XG5dXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxTZWFyY2hCYXIvPlxuICAgICAgPE5hdkJhci8+XG4gICAgICA8TWVudUJhci8+XG4gICAgICA8UHJvZHVjdENvbnRhaW5lci8+XG4gICAgICA8UHJvZHVjdENvbnRhaW5lci8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gU2VhcmNoQmFyKCkge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7ICAgXG5cbiAgZnVuY3Rpb24gc2VhcmNoUHJvZHVjdCgpIHtcbiAgICBsZXQgc2VhcmNoSW5wdXQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIikudmFsdWVcblxuICAgIHNldFNlYXJjaChzZWFyY2hJbnB1dCk7XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hDb250YWluZXJcIj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvQ29udGFpbmVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5TZXJ2aWJyYXM8L2E+XG4gICAgICA8L2Rpdj4gICAgICBcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hGb3JDb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IGlkPVwic2VhcmNoSW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQnVzcXVlIG8gc2V1IHByb2R1dG9cIi8+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2hCdXR0b25cIiBvbkNsaWNrPXtzZWFyY2hQcm9kdWN0fT5QZXNxdWlzYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PntzZWFyY2h9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gTmF2QmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2Q29udGFpbmVyXCI+XG5cbiAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgIFNlcnZpw6dvc1xuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgUGXDp2FzXG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICBDb250YXRvc1xuICAgICAgPC9hPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gTWVudUJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVDb250YWluZXJcIj5cblxuICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgTGF2YWRvcmFzXG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICBSZWZyaWdlcmRvclxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgRnJlZXplclxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgU3BsaXRcbiAgICAgIDwvYT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFByb2R1Y3RDb250YWluZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb2R1Y3RDb250ZWluZXJcIj5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInByb2R1Y3RIZWFkZXJcIj5cblxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdEltYWdlXCIgc3JjPXtwYXJ0c1swXS5hdmF0YXJ9IGFsdD1cIlwiLz5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Ryb25nPntwYXJ0c1swXS5uYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4+IEPDs2RpZ286IHtwYXJ0c1swXS5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPk1hcmNhOiB7cGFydHNbMF0uYnJhbmR9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+TW9kZWxvOiB7cGFydHNbMF0ubW9kZWx9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlckNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBQcmXDp288c3Ryb25nPntwYXJ0c1swXS5jb3N0fTwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPiAgXG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgIENvbXByYXJcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });