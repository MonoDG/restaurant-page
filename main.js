/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons.png */ \"./src/icons.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./3395.jpg */ \"./src/3395.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Pacifico&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Special+Elite&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: repeat;\n  background-size: 320px;\n  background-color: #EADDCA;\n  margin: 10px;\n}\n\nbody,\n.nav button {\n  font-family: 'Pacifico', serif;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n.main {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-rows: 1fr auto;\n}\n\n.nav {\n  display: flex;\n  justify-content: end;\n  margin-right: 20px;\n}\n\n.nav ul {\n  display: flex;\n  justify-content: center;\n  list-style-type: none;\n}\n\n.nav button {\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-right: 2px solid black;\n  border-bottom: none;\n  padding: 10px;\n  font-size: 1.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.nav button:hover,\n.nav button.btn-active {\n  background-color: #FFBF00;\n}\n\n.nav li:first-child button {\n  border-top-left-radius: 10px;\n}\n\n.nav li:last-child button {\n  border-top-right-radius: 10px;\n  box-shadow: 2px 2px 5px 0 gray;\n}\n\n.nav li:first-child+li:not(li:last-child) button {\n  border-left: none;\n  border-right: none;\n}\n\n.nav button,\n.main-content,\n.footer {\n  background-color: #FFFF8F;\n}\n\n.main-content {\n  box-shadow: 5px 5px 5px 0 gray;\n  border-radius: 10px;\n  border: 2px solid black;\n}\n\n.hero-image {\n  height: 25vh;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: 2px solid black;\n}\n\n.hero-text {\n  margin: 10px;\n  text-align: center;\n  font-size: 4rem;\n}\n\n.home-content {\n  text-align: center;\n  padding: 10px;\n  display: flex;\n  font-family: \"Special Elite\", serif;\n  font-size: 1.2rem;\n  line-height: 3ch;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n}\n\n.menu .menu-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  font-family: \"Special Elite\", serif;\n  font-size: 1.3rem;\n  line-height: 3ch;\n  padding: 20px;\n}\n\n.menu .menu-card:not(.menu .menu-card:last-child) {\n  border-bottom: 2px solid black;\n}\n\n.menu .menu-card-header {\n  text-align: center;\n}\n\n.menu-card-image {\n  width: 300px;\n  border-radius: 50%;\n  margin-top: 20px;\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  gap: 20px;\n}\n\n.contact-info {\n  text-align: center;\n  border-bottom: 2px solid black;\n}\n\n.contact-mailbox {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.contact-mailbox label {\n  display: inline-block;\n  width: 85px;\n}\n\n#trex-pajama {\n  width: 300px;\n  border-radius: 50%;\n}\n\n.footer {\n  padding: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer a {\n  text-decoration: none;\n}\n\n.footer a:visited {\n  color: #6082B6;\n}\n\n@media only screen and (max-width: 500px) {\n  .main-content {\n    border-radius: 0;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _trex_pajama_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trex_pajama.jpeg */ \"./src/trex_pajama.jpeg\");\n\n\nfunction createContact() {\n    const contact = document.createElement(\"section\");\n    contact.classList.add(\"contact\")\n    contact.setAttribute(\"id\", \"contact\");\n\n    const contactInfo = document.createElement(\"div\");\n    contactInfo.classList.add(\"contact-info\");\n\n    const pTel = document.createElement(\"p\");\n    const pEmail = document.createElement(\"p\");\n\n    pTel.textContent = \"Tel: 889-112-TREX\";\n    pEmail.textContent = \"Email: coffeesaurus@trex.din\";\n\n    const image = new Image();\n    image.src = _trex_pajama_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    image.id = \"trex-pajama\";\n\n    const contactMailbox = document.createElement(\"div\");\n    contactMailbox.classList.add(\"contact-mailbox\");\n\n    const nameDiv = document.createElement(\"div\");\n    const nameLabel = document.createElement(\"label\");\n    const nameInput = document.createElement(\"input\");\n\n    const emailDiv = document.createElement(\"div\");\n    const emailLabel = document.createElement(\"label\");\n    const emailInput = document.createElement(\"input\");\n\n    const descriptionDiv = document.createElement(\"div\");\n    const descriptionLabel = document.createElement(\"label\");\n    const descriptionTextArea = document.createElement(\"textarea\");\n\n    nameLabel.textContent = \"Name:\";\n    emailLabel.textContent = \"Email:\";\n    descriptionLabel.textContent = \"Description:\";\n\n    nameDiv.appendChild(nameLabel);\n    nameDiv.appendChild(nameInput);\n\n    emailDiv.appendChild(emailLabel);\n    emailDiv.appendChild(emailInput);\n\n    descriptionDiv.appendChild(descriptionLabel);\n    descriptionDiv.appendChild(descriptionTextArea);\n\n    contactInfo.appendChild(image);\n    contactInfo.appendChild(pTel);\n    contactInfo.appendChild(pEmail);\n\n    contactMailbox.appendChild(nameDiv);\n    contactMailbox.appendChild(emailDiv);\n    contactMailbox.appendChild(descriptionDiv);\n\n    contact.appendChild(contactInfo);\n    contact.appendChild(contactMailbox);\n\n    return contact;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\n    const footer = document.createElement(\"section\");\n    footer.classList.add(\"footer\");\n\n    const aIcons = document.createElement(\"a\");\n    const aImage = document.createElement(\"a\");\n\n    aIcons.setAttribute(\"href\", \"https://www.flaticon.com/icons\");\n    aImage.setAttribute(\"href\", \"https://www.freepik.com/free-vector/coffee-shop-with-wooden-counter-stools-sofas-tables_9886872.htm#query=anime%20cafe%20background&position=27&from_view=search&track=ais\");\n\n    aIcons.textContent = \"Background Icons created by Freepik - Flaticon\";\n    aImage.textContent = \"Image by upklyak on Freepik\";\n\n    footer.appendChild(aIcons);\n    footer.appendChild(aImage);\n\n    return footer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement(\"section\");\n    home.classList.add(\"home\")\n    home.setAttribute(\"id\", \"home\");\n\n    const heroHeader = document.createElement(\"header\");\n    heroHeader.classList.add(\"hero\");\n\n    const heroImage = document.createElement(\"div\");\n    heroImage.classList.add(\"hero-image\");\n\n    const heroText = document.createElement(\"div\");\n    heroText.classList.add(\"hero-text\");\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Coffeesaurus\";\n\n    heroText.appendChild(h1);\n    heroHeader.appendChild(heroImage);\n    heroHeader.appendChild(heroText);\n\n    const homeContent = document.createElement(\"section\");\n    homeContent.classList.add(\"home-content\");\n\n    const p = document.createElement(\"p\");\n    p.textContent = \"Step into the prehistoric paradise of Coffeesaurus, where the enchanting world of dinosaurs meets the rich and invigorating world of coffee. Our café is a haven for coffee aficionados and dino-enthusiasts alike. Sip on our meticulously crafted coffee creations, each sip taking you on a journey through a myriad of flavors, from the bold \\\"Velociraptor Roast\\\" to the smooth \\\"Triceratops Mocha.\\\" As you savor your beverage, immerse yourself in the Mesozoic ambiance of our coffee shop, with life-sized dinosaur replicas and captivating murals that transport you back in time. At Coffeesaurus, we combine the magic of coffee with the awe-inspiring wonder of dinosaurs to create an experience like no other. Come and awaken your taste buds and your inner paleontologist at Coffeesaurus today!\"\n\n    homeContent.appendChild(p);\n\n    home.appendChild(heroHeader);\n    home.appendChild(homeContent);\n\n    return home;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst btnHome = document.querySelector(\"#btn-home\");\nconst btnMenu = document.querySelector(\"#btn-menu\");\nconst btnContact = document.querySelector(\"#btn-contact\");\nconst mainContent = document.querySelector(\".main-content\");\n\nbtnHome.classList.add(\"btn-active\");\n\nbtnHome.addEventListener(\"click\", () => {\n    btnMenu.classList.remove(\"btn-active\");\n    btnContact.classList.remove(\"btn-active\");\n    btnHome.classList.add(\"btn-active\");\n    mainContent.replaceChildren();\n    mainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    mainContent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\n\nbtnMenu.addEventListener(\"click\", () => {\n    btnHome.classList.remove(\"btn-active\");\n    btnContact.classList.remove(\"btn-active\");\n    btnMenu.classList.add(\"btn-active\");\n    mainContent.replaceChildren();\n    mainContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    mainContent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\n\nbtnContact.addEventListener(\"click\", () => {\n    btnHome.classList.remove(\"btn-active\");\n    btnMenu.classList.remove(\"btn-active\");\n    btnContact.classList.add(\"btn-active\");\n    mainContent.replaceChildren();\n    mainContent.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    mainContent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\n/* harmony import */ var _velociraptor_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./velociraptor.jpeg */ \"./src/velociraptor.jpeg\");\n/* harmony import */ var _triceratops_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triceratops.jpeg */ \"./src/triceratops.jpeg\");\n/* harmony import */ var _stegosaurus_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stegosaurus.jpeg */ \"./src/stegosaurus.jpeg\");\n/* harmony import */ var _pterodactyl_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pterodactyl.jpeg */ \"./src/pterodactyl.jpeg\");\n/* harmony import */ var _brachiosaurus_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brachiosaurus.jpeg */ \"./src/brachiosaurus.jpeg\");\n\n\n\n\n\n\n\nfunction createMenu() {\n    const menu = document.createElement(\"section\");\n    menu.classList.add(\"menu\")\n    menu.setAttribute(\"id\", \"menu\");\n    const menuRecipes = _menu_json__WEBPACK_IMPORTED_MODULE_0__.menu;\n\n    const menuImages = {\n        \"./velociraptor.jpeg\": _velociraptor_jpeg__WEBPACK_IMPORTED_MODULE_1__,\n        \"./triceratops.jpeg\": _triceratops_jpeg__WEBPACK_IMPORTED_MODULE_2__,\n        \"./stegosaurus.jpeg\": _stegosaurus_jpeg__WEBPACK_IMPORTED_MODULE_3__,\n        \"./pterodactyl.jpeg\": _pterodactyl_jpeg__WEBPACK_IMPORTED_MODULE_4__,\n        \"./brachiosaurus.jpeg\": _brachiosaurus_jpeg__WEBPACK_IMPORTED_MODULE_5__\n    }\n\n    menuRecipes.forEach(recipe => {\n        const recipeCard = document.createElement(\"div\");\n        recipeCard.classList.add(\"menu-card\");\n        recipeCard.setAttribute(\"id\", recipe.id)\n\n        const recipeCardHeader = document.createElement(\"div\");\n        recipeCardHeader.classList.add(\"menu-card-header\");\n\n        const recipeCardTitle = document.createElement(\"h2\");\n        recipeCardTitle.textContent = recipe.title\n\n        const image = new Image()\n        image.src = menuImages[recipe.imageUrl];\n        image.classList.add(\"menu-card-image\")\n\n        const recipeCardDescription = document.createElement(\"div\")\n        recipeCardDescription.classList.add(\"menu-card-description\");\n\n        const pDescription = document.createElement(\"p\");\n        pDescription.textContent = recipe.description;\n\n        recipeCardDescription.appendChild(pDescription);\n        recipeCardHeader.appendChild(recipeCardTitle);\n        recipeCardHeader.appendChild(image);\n        recipeCard.appendChild(recipeCardHeader);\n        recipeCard.appendChild(recipeCardDescription);\n        menu.appendChild(recipeCard);\n    });\n\n    return menu;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNav)\n/* harmony export */ });\nfunction createNav() {\n    const nav = document.createElement(\"section\");\n    nav.classList.add(\"nav\");\n\n    const ul = document.createElement(\"ul\");\n    const liHome = document.createElement(\"li\");\n    const liMenu = document.createElement(\"li\");\n    const liContact = document.createElement(\"li\");\n\n    const btnHome = document.createElement(\"button\");\n    const btnMenu = document.createElement(\"button\");\n    const btnContact = document.createElement(\"button\");\n\n    btnHome.setAttribute(\"id\", \"btn-home\");\n    btnMenu.setAttribute(\"id\", \"btn-menu\");\n    btnContact.setAttribute(\"id\", \"btn-contact\");\n\n    btnHome.textContent = \"Home\";\n    btnMenu.textContent = \"Menu\";\n    btnContact.textContent = \"Contact\";\n\n    liHome.appendChild(btnHome);\n    liMenu.appendChild(btnMenu);\n    liContact.appendChild(btnContact);\n\n    ul.appendChild(liHome);\n    ul.appendChild(liMenu);\n    ul.appendChild(liContact);\n\n    nav.appendChild(ul);\n\n    return nav;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\nfunction pageLoad() {\n    const content = document.querySelector(\"#content\");\n\n    const main = document.createElement(\"div\");\n    main.classList.add(\"main\")\n\n    const mainContent = document.createElement(\"section\");\n    mainContent.classList.add(\"main-content\");\n    // Add Home content on initial page load\n    mainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    mainContent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n    main.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    main.appendChild(mainContent);\n\n    content.appendChild(main);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/3395.jpg":
/*!**********************!*\
  !*** ./src/3395.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0eb554be4d61b77c2994.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/3395.jpg?");

/***/ }),

/***/ "./src/brachiosaurus.jpeg":
/*!********************************!*\
  !*** ./src/brachiosaurus.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02c5d27cea5a7ee57275.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/brachiosaurus.jpeg?");

/***/ }),

/***/ "./src/icons.png":
/*!***********************!*\
  !*** ./src/icons.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5839b2a7afaca3acaf1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/icons.png?");

/***/ }),

/***/ "./src/pterodactyl.jpeg":
/*!******************************!*\
  !*** ./src/pterodactyl.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b575ef852a3aa42fa3d.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pterodactyl.jpeg?");

/***/ }),

/***/ "./src/stegosaurus.jpeg":
/*!******************************!*\
  !*** ./src/stegosaurus.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f50b4ab45ad835a5e467.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/stegosaurus.jpeg?");

/***/ }),

/***/ "./src/trex_pajama.jpeg":
/*!******************************!*\
  !*** ./src/trex_pajama.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"536982fc3bf7724520b8.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/trex_pajama.jpeg?");

/***/ }),

/***/ "./src/triceratops.jpeg":
/*!******************************!*\
  !*** ./src/triceratops.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16a62d27be4f9f52f19b.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/triceratops.jpeg?");

/***/ }),

/***/ "./src/velociraptor.jpeg":
/*!*******************************!*\
  !*** ./src/velociraptor.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd06b10e6eb4284d2523.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/velociraptor.jpeg?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"menu\":[{\"id\":1,\"title\":\"Velociraptor Roast\",\"imageUrl\":\"./velociraptor.jpeg\",\"description\":\"Unleash your inner coffee predator with our \\\\\"Velociraptor Roast.\\\\\" This bold and robust coffee is as agile and fierce as the namesake dinosaur. With a sharp, intense flavor, it\\'s perfect for those who crave an adrenaline-packed coffee experience. The Velociraptor Roast boasts a hint of earthy undertones and a surprisingly smooth finish, making it a truly captivating and invigorating brew.\"},{\"id\":2,\"title\":\"Triceratops Mocha\",\"imageUrl\":\"./triceratops.jpeg\",\"description\":\"The \\\\\"Triceratops Mocha\\\\\" is a majestic fusion of flavors that combines the strength of a Triceratops with the sweetness of a classic mocha. This coffee blend marries the full-bodied richness of our finest coffee beans with a velvety cocoa infusion. Just like the three-horned Triceratops, it offers a harmonious balance of flavors, resulting in a comforting and indulgent coffee experience that\\'s both robust and delightfully sweet.\"},{\"id\":3,\"title\":\"Stegosaurus Caramel Delight\",\"imageUrl\":\"./stegosaurus.jpeg\",\"description\":\"Experience the perfect blend of our rich, dark coffee with a velvety caramel infusion. Just like the gentle giant of the prehistoric era, this coffee flavor combines strength and sweetness for a delightful sip.\"},{\"id\":4,\"title\":\"Pterodactyl Vanilla Swirl\",\"imageUrl\":\"./pterodactyl.jpeg\",\"description\":\"Soar to new heights of flavor with our Pterodactyl Vanilla Swirl. This coffee creation features a smooth vanilla twist that will take your taste buds on a journey through the skies of deliciousness.\"},{\"id\":5,\"title\":\"Brachiosaurus Hazelnut Heaven\",\"imageUrl\":\"./brachiosaurus.jpeg\",\"description\":\"Unearth the sublime taste of our Brachiosaurus Hazelnut Heaven. This coffee blend is as towering and majestic as the Brachiosaurus itself, with the warm and nutty essence of hazelnuts that will transport you to coffee paradise.\"}]}');\n\n//# sourceURL=webpack://restaurant-page/./src/menu.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;