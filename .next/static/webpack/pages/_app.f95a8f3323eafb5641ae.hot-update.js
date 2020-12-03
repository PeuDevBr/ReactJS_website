webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./css/style.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./css/style.css ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/next/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\n  /*vaviáveis no CSS */\\n  --color-background: #FFFFFF;\\n  --color-primary-lighter: #9871F5;\\n  --color-primary-light: #1D4988;\\n  --color-primary: #8257E5;\\n  --color-primary-dark: #F36B21;\\n  --color-primary-darker: #bd4505;\\n  --color-secondary: #04D361;\\n  --color-secondary-dark: #039c48;\\n  --color-title-in-primary: #FFFFFF;\\n  --color-text-in-primary: #D4C2FF;\\n  --color-text-title: #32264D;\\n  --color-text-complement: #9C98A6;\\n  --color-text-base: #6A6180;\\n  --color-line-in-white: #E6E6F0;\\n  --color-input-background: #F8F8FC;\\n  --color-button-text: #FFFFFF;\\n  --color-box-base: #FFFFFF;\\n  --color-box-footer: #FAFAFC;\\n  --color-small-info: #C1BCCC;\\n  /* tamanho da fonte padrão: 16px - 100% - 1rem */\\n  font-size: 60%; /* controle das medidas rem */\\n}\\n\\nhtml, body {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n\\n.searchContainer {\\n  background: var(--color-secondary-dark);\\n  grid-area: logoArea;\\n  /*display: flex;*/\\n  -webkit-justify-content: space-between;\\n     -moz-box-pack: justify;\\n          justify-content: space-between;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n}\\n.logoContainer {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  padding-top: 0.4rem;\\n}\\n\\n.logoContainer a {\\n  color: var(--color-title-in-primary);\\n  border: 1px solid var(--color-title-in-primary);\\n  border-radius: 0.6rem;\\n  font-size: 2.4rem;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n  text-decoration: none;\\n  padding: 0.6rem;\\n}\\n\\n.searchForContainer {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  padding: 0.6rem;\\n}\\n\\n#searchButton {\\n  border-radius: 0.4rem;\\n  border: none;\\n  margin-left: 0.6rem;\\n  background: var(--color-primary-dark);\\n  color: white;\\n  height: 2.8rem;\\n  -moz-transition: background 0.4s;\\n  transition: background 0.4s;\\n  outline: none;\\n}\\n#searchButton:hover {\\n  background: var(--color-primary-darker);\\n}\\n\\n#searchInput {\\n  width: 15rem;\\n  border-radius: 0.4rem;\\n  border: none;\\n  outline: none;\\n}\\n\\n.navContainer {\\n  background: var(--color-primary-dark);\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n}\\n\\n.navContainer a {\\n  height: 1rem;\\n  width: 3.8rem;\\n  color: var(--color-title-in-primary);\\n  border-radius: 0.6rem;\\n  font-size: 1.2rem;\\n  text-decoration: none;\\n  padding: 0.6rem;\\n  margin: 0.4rem 1rem;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n  -moz-transition: background 0.4s;\\n  transition: background 0.4s;\\n}\\n\\n.navContainer a:hover {\\n  background: var(--color-primary-darker);\\n}\\n\\n.menuContainer {\\n  background: var(--color-text-complement);\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n  padding-bottom: 0.4rem;\\n}\\n\\n.menuContainer a {\\n  height: 0.6rem;\\n  width: 4.8rem;\\n  color: var(--color-title-in-primary);\\n  border-radius: 0.6rem;\\n  font-size: 1.2rem;\\n  text-decoration: none;\\n  padding: 0.6rem;\\n  margin: 0.4rem 0.8rem;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n          align-items: center;\\n  -moz-transition: background 0.4s;\\n  transition: background 0.4s;\\n}\\n\\n.menuContainer a:hover {\\n  background: var(--color-text-base);\\n}\\n\\n\\n\\nbody {\\n  background-color: white !important ;\\n}\\n\\n.head {\\n  color: red !important;\\n  font-size: 30px;\\n}\\n\\n.sub {\\n  color: yellow !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://css/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,gCAAgC;EAChC,8BAA8B;EAC9B,wBAAwB;EACxB,6BAA6B;EAC7B,+BAA+B;EAC/B,0BAA0B;EAC1B,+BAA+B;EAC/B,iCAAiC;EACjC,gCAAgC;EAChC,2BAA2B;EAC3B,gCAAgC;EAChC,0BAA0B;EAC1B,8BAA8B;EAC9B,iCAAiC;EACjC,4BAA4B;EAC5B,yBAAyB;EACzB,2BAA2B;EAC3B,2BAA2B;EAC3B,gDAAgD;EAChD,cAAc,EAAE,6BAA6B;AAC/C;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;;AAGA;EACE,uCAAuC;EACvC,mBAAmB;EACnB,iBAAiB;EACjB,sCAA8B;KAA9B,sBAA8B;UAA9B,8BAA8B;EAC9B,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;AACA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,+CAA+C;EAC/C,qBAAqB;EACrB,iBAAiB;EACjB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,qCAAqC;EACrC,YAAY;EACZ,cAAc;EACd,gCAA2B;EAA3B,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,qCAAqC;EACrC,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,qBAAqB;EACrB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,gCAA2B;EAA3B,2BAA2B;AAC7B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;EACxC,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,qBAAqB;EACrB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,qBAAqB;EACrB,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,gCAA2B;EAA3B,2BAA2B;AAC7B;;AAEA;EACE,kCAAkC;AACpC;;;;AAIA;EACE,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B\",\"sourcesContent\":[\":root {\\n  /*vaviáveis no CSS */\\n  --color-background: #FFFFFF;\\n  --color-primary-lighter: #9871F5;\\n  --color-primary-light: #1D4988;\\n  --color-primary: #8257E5;\\n  --color-primary-dark: #F36B21;\\n  --color-primary-darker: #bd4505;\\n  --color-secondary: #04D361;\\n  --color-secondary-dark: #039c48;\\n  --color-title-in-primary: #FFFFFF;\\n  --color-text-in-primary: #D4C2FF;\\n  --color-text-title: #32264D;\\n  --color-text-complement: #9C98A6;\\n  --color-text-base: #6A6180;\\n  --color-line-in-white: #E6E6F0;\\n  --color-input-background: #F8F8FC;\\n  --color-button-text: #FFFFFF;\\n  --color-box-base: #FFFFFF;\\n  --color-box-footer: #FAFAFC;\\n  --color-small-info: #C1BCCC;\\n  /* tamanho da fonte padrão: 16px - 100% - 1rem */\\n  font-size: 60%; /* controle das medidas rem */\\n}\\n\\nhtml, body {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n\\n.searchContainer {\\n  background: var(--color-secondary-dark);\\n  grid-area: logoArea;\\n  /*display: flex;*/\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.logoContainer {\\n  display: flex;\\n  justify-content: center;\\n  padding-top: 0.4rem;\\n}\\n\\n.logoContainer a {\\n  color: var(--color-title-in-primary);\\n  border: 1px solid var(--color-title-in-primary);\\n  border-radius: 0.6rem;\\n  font-size: 2.4rem;\\n  justify-content: center;\\n  align-items: center;\\n  text-decoration: none;\\n  padding: 0.6rem;\\n}\\n\\n.searchForContainer {\\n  display: flex;\\n  justify-content: center;\\n  padding: 0.6rem;\\n}\\n\\n#searchButton {\\n  border-radius: 0.4rem;\\n  border: none;\\n  margin-left: 0.6rem;\\n  background: var(--color-primary-dark);\\n  color: white;\\n  height: 2.8rem;\\n  transition: background 0.4s;\\n  outline: none;\\n}\\n#searchButton:hover {\\n  background: var(--color-primary-darker);\\n}\\n\\n#searchInput {\\n  width: 15rem;\\n  border-radius: 0.4rem;\\n  border: none;\\n  outline: none;\\n}\\n\\n.navContainer {\\n  background: var(--color-primary-dark);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.navContainer a {\\n  height: 1rem;\\n  width: 3.8rem;\\n  color: var(--color-title-in-primary);\\n  border-radius: 0.6rem;\\n  font-size: 1.2rem;\\n  text-decoration: none;\\n  padding: 0.6rem;\\n  margin: 0.4rem 1rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  transition: background 0.4s;\\n}\\n\\n.navContainer a:hover {\\n  background: var(--color-primary-darker);\\n}\\n\\n.menuContainer {\\n  background: var(--color-text-complement);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding-bottom: 0.4rem;\\n}\\n\\n.menuContainer a {\\n  height: 0.6rem;\\n  width: 4.8rem;\\n  color: var(--color-title-in-primary);\\n  border-radius: 0.6rem;\\n  font-size: 1.2rem;\\n  text-decoration: none;\\n  padding: 0.6rem;\\n  margin: 0.4rem 0.8rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  transition: background 0.4s;\\n}\\n\\n.menuContainer a:hover {\\n  background: var(--color-text-base);\\n}\\n\\n\\n\\nbody {\\n  background-color: white !important ;\\n}\\n\\n.head {\\n  color: red !important;\\n  font-size: 30px;\\n}\\n\\n.sub {\\n  color: yellow !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL3N0eWxlLmNzcz84MGM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzJHO0FBQzNHLDhCQUE4QixxR0FBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxVQUFVLHlEQUF5RCxxQ0FBcUMsbUNBQW1DLDZCQUE2QixrQ0FBa0Msb0NBQW9DLCtCQUErQixvQ0FBb0Msc0NBQXNDLHFDQUFxQyxnQ0FBZ0MscUNBQXFDLCtCQUErQixtQ0FBbUMsc0NBQXNDLGlDQUFpQyw4QkFBOEIsZ0NBQWdDLGdDQUFnQyx3RUFBd0Usa0NBQWtDLGdCQUFnQixjQUFjLGVBQWUsR0FBRyx3QkFBd0IsNENBQTRDLHdCQUF3QixvQkFBb0IsNkNBQTZDLDhCQUE4QiwyQ0FBMkMsZ0NBQWdDLDhCQUE4QixnQ0FBZ0MsR0FBRyxrQkFBa0IsMEJBQTBCLHNCQUFzQixrQkFBa0Isb0NBQW9DLDZCQUE2QixvQ0FBb0Msd0JBQXdCLEdBQUcsc0JBQXNCLHlDQUF5QyxvREFBb0QsMEJBQTBCLHNCQUFzQixvQ0FBb0MsNkJBQTZCLG9DQUFvQyxnQ0FBZ0MsOEJBQThCLGdDQUFnQywwQkFBMEIsb0JBQW9CLEdBQUcseUJBQXlCLDBCQUEwQixzQkFBc0Isa0JBQWtCLG9DQUFvQyw2QkFBNkIsb0NBQW9DLG9CQUFvQixHQUFHLG1CQUFtQiwwQkFBMEIsaUJBQWlCLHdCQUF3QiwwQ0FBMEMsaUJBQWlCLG1CQUFtQixxQ0FBcUMsZ0NBQWdDLGtCQUFrQixHQUFHLHVCQUF1Qiw0Q0FBNEMsR0FBRyxrQkFBa0IsaUJBQWlCLDBCQUEwQixpQkFBaUIsa0JBQWtCLEdBQUcsbUJBQW1CLDBDQUEwQywwQkFBMEIsc0JBQXNCLGtCQUFrQixvQ0FBb0MsNkJBQTZCLG9DQUFvQyxnQ0FBZ0MsOEJBQThCLGdDQUFnQyxHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLHlDQUF5QywwQkFBMEIsc0JBQXNCLDBCQUEwQixvQkFBb0Isd0JBQXdC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QkFBd0IsR0FBRyxxQkFBcUIsaUJBQWlCLGtCQUFrQix5Q0FBeUMsMEJBQTBCLHNCQUFzQiwwQkFBMEIsb0JBQW9CLHdCQUF3QixrQkFBa0IsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsR0FBRywyQkFBMkIsNENBQTRDLEdBQUcsb0JBQW9CLDZDQUE2QyxrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsR0FBRyxzQkFBc0IsbUJBQW1CLGtCQUFrQix5Q0FBeUMsMEJBQTBCLHNCQUFzQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixrQkFBa0IsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsR0FBRyw0QkFBNEIsdUNBQXVDLEdBQUcsY0FBYyx3Q0FBd0MsR0FBRyxXQUFXLDBCQUEwQixvQkFBb0IsR0FBRyxVQUFVLDZCQUE2QixHQUFHLHFCQUFxQjtBQUMvN1M7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL2Nzcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKnZhdmnDoXZlaXMgbm8gQ1NTICovXFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAtLWNvbG9yLXByaW1hcnktbGlnaHRlcjogIzk4NzFGNTtcXG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogIzFENDk4ODtcXG4gIC0tY29sb3ItcHJpbWFyeTogIzgyNTdFNTtcXG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjRjM2QjIxO1xcbiAgLS1jb2xvci1wcmltYXJ5LWRhcmtlcjogI2JkNDUwNTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjMDREMzYxO1xcbiAgLS1jb2xvci1zZWNvbmRhcnktZGFyazogIzAzOWM0ODtcXG4gIC0tY29sb3ItdGl0bGUtaW4tcHJpbWFyeTogI0ZGRkZGRjtcXG4gIC0tY29sb3ItdGV4dC1pbi1wcmltYXJ5OiAjRDRDMkZGO1xcbiAgLS1jb2xvci10ZXh0LXRpdGxlOiAjMzIyNjREO1xcbiAgLS1jb2xvci10ZXh0LWNvbXBsZW1lbnQ6ICM5Qzk4QTY7XFxuICAtLWNvbG9yLXRleHQtYmFzZTogIzZBNjE4MDtcXG4gIC0tY29sb3ItbGluZS1pbi13aGl0ZTogI0U2RTZGMDtcXG4gIC0tY29sb3ItaW5wdXQtYmFja2dyb3VuZDogI0Y4RjhGQztcXG4gIC0tY29sb3ItYnV0dG9uLXRleHQ6ICNGRkZGRkY7XFxuICAtLWNvbG9yLWJveC1iYXNlOiAjRkZGRkZGO1xcbiAgLS1jb2xvci1ib3gtZm9vdGVyOiAjRkFGQUZDO1xcbiAgLS1jb2xvci1zbWFsbC1pbmZvOiAjQzFCQ0NDO1xcbiAgLyogdGFtYW5obyBkYSBmb250ZSBwYWRyw6NvOiAxNnB4IC0gMTAwJSAtIDFyZW0gKi9cXG4gIGZvbnQtc2l6ZTogNjAlOyAvKiBjb250cm9sZSBkYXMgbWVkaWRhcyByZW0gKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG4uc2VhcmNoQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1kYXJrKTtcXG4gIGdyaWQtYXJlYTogbG9nb0FyZWE7XFxuICAvKmRpc3BsYXk6IGZsZXg7Ki9cXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxvZ29Db250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMC40cmVtO1xcbn1cXG5cXG4ubG9nb0NvbnRhaW5lciBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZS1pbi1wcmltYXJ5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRpdGxlLWluLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5zZWFyY2hGb3JDb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbiNzZWFyY2hCdXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDIuOHJlbTtcXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmtlcik7XFxufVxcblxcbiNzZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMTVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmF2Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZDb250YWluZXIgYSB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMy44cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlLWluLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBtYXJnaW46IDAuNHJlbSAxcmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XFxufVxcblxcbi5uYXZDb250YWluZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmtlcik7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQtY29tcGxlbWVudCk7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciBhIHtcXG4gIGhlaWdodDogMC42cmVtO1xcbiAgd2lkdGg6IDQuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZS1pbi1wcmltYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgbWFyZ2luOiAwLjRyZW0gMC44cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGV4dC1iYXNlKTtcXG59XFxuXFxuXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50IDtcXG59XFxuXFxuLmhlYWQge1xcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uc3ViIHtcXG4gIGNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLGdEQUFnRDtFQUNoRCxjQUFjLEVBQUUsNkJBQTZCO0FBQy9DOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBR0E7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQ0FBOEI7S0FBOUIsc0JBQThCO1VBQTlCLDhCQUE4QjtFQUM5QiwyQkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiwrQkFBdUI7S0FBdkIscUJBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsK0NBQStDO0VBQy9DLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsK0JBQXVCO0tBQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLCtCQUF1QjtLQUF2QixxQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQ0FBMkI7RUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2IsK0JBQXVCO0tBQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2IsK0JBQXVCO0tBQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0NBQTJCO0VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLCtCQUF1QjtLQUF2QixxQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtLQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiwrQkFBdUI7S0FBdkIscUJBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQ0FBMkI7RUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOzs7O0FBSUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKnZhdmnDoXZlaXMgbm8gQ1NTICovXFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAtLWNvbG9yLXByaW1hcnktbGlnaHRlcjogIzk4NzFGNTtcXG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogIzFENDk4ODtcXG4gIC0tY29sb3ItcHJpbWFyeTogIzgyNTdFNTtcXG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjRjM2QjIxO1xcbiAgLS1jb2xvci1wcmltYXJ5LWRhcmtlcjogI2JkNDUwNTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjMDREMzYxO1xcbiAgLS1jb2xvci1zZWNvbmRhcnktZGFyazogIzAzOWM0ODtcXG4gIC0tY29sb3ItdGl0bGUtaW4tcHJpbWFyeTogI0ZGRkZGRjtcXG4gIC0tY29sb3ItdGV4dC1pbi1wcmltYXJ5OiAjRDRDMkZGO1xcbiAgLS1jb2xvci10ZXh0LXRpdGxlOiAjMzIyNjREO1xcbiAgLS1jb2xvci10ZXh0LWNvbXBsZW1lbnQ6ICM5Qzk4QTY7XFxuICAtLWNvbG9yLXRleHQtYmFzZTogIzZBNjE4MDtcXG4gIC0tY29sb3ItbGluZS1pbi13aGl0ZTogI0U2RTZGMDtcXG4gIC0tY29sb3ItaW5wdXQtYmFja2dyb3VuZDogI0Y4RjhGQztcXG4gIC0tY29sb3ItYnV0dG9uLXRleHQ6ICNGRkZGRkY7XFxuICAtLWNvbG9yLWJveC1iYXNlOiAjRkZGRkZGO1xcbiAgLS1jb2xvci1ib3gtZm9vdGVyOiAjRkFGQUZDO1xcbiAgLS1jb2xvci1zbWFsbC1pbmZvOiAjQzFCQ0NDO1xcbiAgLyogdGFtYW5obyBkYSBmb250ZSBwYWRyw6NvOiAxNnB4IC0gMTAwJSAtIDFyZW0gKi9cXG4gIGZvbnQtc2l6ZTogNjAlOyAvKiBjb250cm9sZSBkYXMgbWVkaWRhcyByZW0gKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG4uc2VhcmNoQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1kYXJrKTtcXG4gIGdyaWQtYXJlYTogbG9nb0FyZWE7XFxuICAvKmRpc3BsYXk6IGZsZXg7Ki9cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sb2dvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAwLjRyZW07XFxufVxcblxcbi5sb2dvQ29udGFpbmVyIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlLWluLXByaW1hcnkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGl0bGUtaW4tcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLnNlYXJjaEZvckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbiNzZWFyY2hCdXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDIuOHJlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNzZWFyY2hCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrZXIpO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQge1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5hdkNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdkNvbnRhaW5lciBhIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAzLjhyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUtaW4tcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIG1hcmdpbjogMC40cmVtIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xcbn1cXG5cXG4ubmF2Q29udGFpbmVyIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrZXIpO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXh0LWNvbXBsZW1lbnQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5tZW51Q29udGFpbmVyIGEge1xcbiAgaGVpZ2h0OiAwLjZyZW07XFxuICB3aWR0aDogNC44cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlLWluLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBtYXJnaW46IDAuNHJlbSAwLjhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQtYmFzZSk7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudCA7XFxufVxcblxcbi5oZWFkIHtcXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnN1YiB7XFxuICBjb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./css/style.css\n");

/***/ })

})