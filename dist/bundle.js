/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./insert-function.js":
/*!****************************!*\
  !*** ./insert-function.js ***!
  \****************************/
/***/ ((module) => {

eval("function insertIntoTarget(element, options) {\n  var parent = options.target || document.head;\n    parent.appendChild(element);\n}\n\nmodule.exports = insertIntoTarget;\n\n//source: https://webpack.js.org/loaders/style-loader/#insert\n\n\n\n//# sourceURL=webpack://web-component-charts/./insert-function.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/bar-chart/bar-chart.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/bar-chart/bar-chart.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:host {\n    --light-grey: #efefef;\n    --dark-grey: #555;\n    --white: #fff;\n    all: initial;\n    font-size: 16px;\n    font-family: 'Arial', sans-serif;\n}\n\n.bar-chart__bar-value {\n    margin-bottom: .2rem;\n    font-size: .5rem;\n    order: 1;\n    color: var(--dark-grey);\n    text-align: center;\n}\n\n.bar-chart__figure {\n    border: 1px solid var(--light-grey);\n    border-radius: .5rem;\n    padding-top: 1rem;\n    margin: 1rem auto;\n    background-color: var(--white);\n}\n\n.bar-chart__caption {\n    margin-top: 1rem;\n    padding: 1rem;\n    background-color: var(--light-grey);\n}\n\n.bar-chart__container {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(4rem, auto);\n    align-items: end;\n    justify-content: start;\n    overflow-x: scroll;\n}\n\n.bar-chart__bar-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin: .3rem;\n}\n\n.bar-chart__bar {\n    display: block;\n    margin: 0 auto;\n    width: 3rem;\n    position: relative;\n    border-top-right-radius: .2rem;\n    border-top-left-radius: .2rem;\n    order: 2;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n    .bar-chart__bar {\n        height: 0px;\n        transition: height 1s ease;\n      }\n  }\n\n\n.bar-chart__bar-label {\n    order: 3;\n    text-align: center;\n    padding: .5rem;\n    display: block;\n    font-size: .9rem;\n}\n\n.bar-chart__error {\n    color: red;\n    padding: 1rem;\n    font-size: .9rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web-component-charts/./src/components/bar-chart/bar-chart.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://web-component-charts/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://web-component-charts/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/bar-chart/bar-chart.html":
/*!*************************************************!*\
  !*** ./src/components/bar-chart/bar-chart.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<figure class=\\\"bar-chart__figure\\\">\\n  <span class=\\\"bar-chart__container\\\"></span>\\n  <figcaption class=\\\"bar-chart__caption\\\">\\n    <slot name=\\\"caption-text\\\">\\n      <i>Placeholder - please add a screen reader friendly description.</i>\\n    </slot>\\n    <br />\\n    <slot name=\\\"no-script\\\">\\n      <i>Noscript tag placeholder - please add an instructive text.</i>\\n    </slot>\\n  </figcaption>\\n</figure>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://web-component-charts/./src/components/bar-chart/bar-chart.html?");

/***/ }),

/***/ "./src/components/bar-chart/bar-chart.css":
/*!************************************************!*\
  !*** ./src/components/bar-chart/bar-chart.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _insert_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../insert-function.js */ \"./insert-function.js\");\n/* harmony import */ var _insert_function_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_insert_function_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_bar_chart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./bar-chart.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/bar-chart/bar-chart.css\");\n\n      var exported = {};\n\n      \n      \n      \n      \n      \n      \n      \n      \n      if (_node_modules_css_loader_dist_cjs_js_bar_chart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_bar_chart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals) {\n              exported.locals = _node_modules_css_loader_dist_cjs_js_bar_chart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n            }\n            \n\nvar refs = 0;\nvar update;\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = (_insert_function_js__WEBPACK_IMPORTED_MODULE_2___default());\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nexported.use = function(insertOptions) {\n  options.options = insertOptions || {};\n\n  if (!(refs++)) {\n    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_bar_chart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n  }\n\n  return exported;\n};\nexported.unuse = function() {\n  if (refs > 0 && !--refs) {\n    update();\n    update = null;\n  }\n};\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exported);\n\n\n//# sourceURL=webpack://web-component-charts/./src/components/bar-chart/bar-chart.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://web-component-charts/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://web-component-charts/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://web-component-charts/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://web-component-charts/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://web-component-charts/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/bar-chart/bar-chart.ts":
/*!***********************************************!*\
  !*** ./src/components/bar-chart/bar-chart.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/intersection-observer */ \"./src/helper/intersection-observer.ts\");\n/* harmony import */ var _helper_load_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/load-json */ \"./src/helper/load-json.ts\");\n/* harmony import */ var _helper_calculate_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/calculate-sizes */ \"./src/helper/calculate-sizes.ts\");\n/* harmony import */ var _helper_get_random_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/get-random-color */ \"./src/helper/get-random-color.ts\");\n/* harmony import */ var _helper_create_span__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/create-span */ \"./src/helper/create-span.ts\");\n/* harmony import */ var _helper_get_readable_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/get-readable-number */ \"./src/helper/get-readable-number.ts\");\n/* harmony import */ var _bar_chart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar-chart.css */ \"./src/components/bar-chart/bar-chart.css\");\n\n\n\n\n\n\n\nclass BarChart extends HTMLElement {\n    constructor() {\n        super();\n        this._data = [];\n        this.setIsInView = (inView) => {\n            if (inView) {\n                this._internals.states.add('inview');\n            }\n            else {\n                this._internals.states.delete('inview');\n            }\n        };\n        this.getIsInView = () => {\n            return this._internals.states.has('inview');\n        };\n        this.getColor = (name, color) => {\n            let hexColor = color;\n            if (typeof hexColor === 'undefined') {\n                hexColor = (0,_helper_get_random_color__WEBPACK_IMPORTED_MODULE_3__.getRandomColor)();\n            }\n            return `:host(bar-chart) > .bar-chart__figure > .bar-chart__container > .bar-chart__bar-wrapper > .bar-chart__bar--${name} { background-color: ${hexColor}; } `;\n        };\n        this.createBars = (container, data) => {\n            const maxNum = (0,_helper_calculate_sizes__WEBPACK_IMPORTED_MODULE_2__.getRange)(data);\n            let style = '';\n            const styleElement = document.createElement('style');\n            data.forEach((item) => {\n                const { name, value, unit, color } = item;\n                const modifier = name.split(' ').join('-');\n                //create bar elements\n                const barWrapper = (0,_helper_create_span__WEBPACK_IMPORTED_MODULE_4__.createSpan)([`bar-chart__bar-wrapper`, `bar-chart__bar-wrapper--${modifier}`]);\n                const barLabel = (0,_helper_create_span__WEBPACK_IMPORTED_MODULE_4__.createSpan)([`bar-chart__bar-label`], name);\n                const valueLabel = (0,_helper_create_span__WEBPACK_IMPORTED_MODULE_4__.createSpan)(['bar-chart__bar-value'], `${(0,_helper_get_readable_number__WEBPACK_IMPORTED_MODULE_5__.getReadableNumber)(value)} ${unit}`);\n                const bar = (0,_helper_create_span__WEBPACK_IMPORTED_MODULE_4__.createSpan)([`bar-chart__bar`, `bar-chart__bar--${modifier}`]);\n                //add tabIndex and aria-live settings\n                bar.setAttribute('aria-hidden', 'true');\n                //add styles\n                style += this.addAnimationStyle(maxNum, value, name);\n                style += this.getColor(name, color);\n                //assemble bar & screen reader text\n                barWrapper.append(barLabel);\n                barWrapper.append(valueLabel);\n                barWrapper.append(bar);\n                container.append(barWrapper);\n            });\n            styleElement.textContent = style;\n            this.shadowRoot.prepend(styleElement);\n            return container;\n        };\n        this.addAnimationStyle = (maxNum, value, name) => {\n            let style = '';\n            const height = (0,_helper_calculate_sizes__WEBPACK_IMPORTED_MODULE_2__.getHeight)(maxNum, value, 300);\n            const cssClasses = '.bar-chart__figure > .bar-chart__container > .bar-chart__bar-wrapper';\n            style += `:host(bar-chart) > ${cssClasses}--${name} { height: ${height}; } `;\n            style += `:host(bar-chart:state(inview)) > ${cssClasses} > .bar-chart__bar--${name} { height: ${height}; } `;\n            return style;\n        };\n        this.showError = (error) => {\n            const errorMessage = (0,_helper_create_span__WEBPACK_IMPORTED_MODULE_4__.createSpan)(['bar-chart__error'], error.message);\n            const container = this._shadowRoot.querySelector('.bar-chart__container');\n            container.append(errorMessage);\n        };\n        const template = document.getElementById(\"bar-chart\");\n        this._clone = template.content.cloneNode(true);\n        this._internals = this.attachInternals();\n        this._shadowRoot = this.attachShadow({ mode: \"open\" });\n        this._shadowRoot.appendChild(this._clone);\n        _bar_chart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use({ target: this._shadowRoot });\n    }\n    set data(data) {\n        this._data = data;\n        const container = this._shadowRoot.querySelector('.bar-chart__container');\n        this.createBars(container, this.data);\n    }\n    ;\n    get data() {\n        return this._data;\n    }\n    ;\n    connectedCallback() {\n        (0,_helper_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.isElementInview)(this, this.setIsInView);\n    }\n    attributeChangedCallback(name, oldValue, newValue = '') {\n        if (name === 'data-json' && newValue.length > 0) {\n            const resolve = (data) => {\n                this.data = data;\n            };\n            const reject = (error) => {\n                this.showError(error);\n            };\n            (0,_helper_load_json__WEBPACK_IMPORTED_MODULE_1__.loadJSON)(newValue, resolve, reject);\n        }\n    }\n}\nBarChart.observedAttributes = [\"data-json\",];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarChart);\n\n\n//# sourceURL=webpack://web-component-charts/./src/components/bar-chart/bar-chart.ts?");

/***/ }),

/***/ "./src/helper/calculate-sizes.ts":
/*!***************************************!*\
  !*** ./src/helper/calculate-sizes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHeight: () => (/* binding */ getHeight),\n/* harmony export */   getRange: () => (/* binding */ getRange)\n/* harmony export */ });\nconst getRange = (arr) => {\n    const range = [];\n    arr.forEach(item => {\n        range.push(item.value);\n    });\n    return Math.max(...range);\n};\nconst getHeight = (maxNum, value, maxHeight = 100) => {\n    const factor = maxHeight / maxNum;\n    const height = (value * factor).toString();\n    return `${height}px`;\n};\n/*\n\nif num > 1000\ndivide by 1000 and add K\nif num > 1,000,000 divide by 1,000,000 and add mio\n\n*/ \n\n\n//# sourceURL=webpack://web-component-charts/./src/helper/calculate-sizes.ts?");

/***/ }),

/***/ "./src/helper/create-span.ts":
/*!***********************************!*\
  !*** ./src/helper/create-span.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSpan: () => (/* binding */ createSpan)\n/* harmony export */ });\nconst createSpan = (classNames = [], textContent = '') => {\n    const span = document.createElement('span');\n    // add css classes\n    classNames.forEach(className => {\n        if (className.length > 0) {\n            span.classList.add(className);\n        }\n    });\n    // add text\n    if (textContent.length > 0) {\n        span.textContent = textContent;\n    }\n    return span;\n};\n\n\n//# sourceURL=webpack://web-component-charts/./src/helper/create-span.ts?");

/***/ }),

/***/ "./src/helper/create-template.ts":
/*!***************************************!*\
  !*** ./src/helper/create-template.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createTemplate = (html, attributes) => {\n    const template = document.createElement('template');\n    const attributeNames = Object.keys(attributes);\n    attributeNames.forEach((key) => {\n        template.setAttribute(key, attributes[key]);\n    });\n    template.innerHTML = html;\n    return template;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTemplate);\n\n\n//# sourceURL=webpack://web-component-charts/./src/helper/create-template.ts?");

/***/ }),

/***/ "./src/helper/get-random-color.ts":
/*!****************************************!*\
  !*** ./src/helper/get-random-color.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomColor: () => (/* binding */ getRandomColor)\n/* harmony export */ });\nconst getRandomColor = () => {\n    return '#' + Math.floor(Math.random() * 16777215).toString(16);\n    //source: https://css-tricks.com/snippets/javascript/random-hex-color/\n};\n\n\n//# sourceURL=webpack://web-component-charts/./src/helper/get-random-color.ts?");

/***/ }),

/***/ "./src/helper/get-readable-number.ts":
/*!*******************************************!*\
  !*** ./src/helper/get-readable-number.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getReadableNumber: () => (/* binding */ getReadableNumber)\n/* harmony export */ });\nconst roundToOneDecimal = (num) => {\n    return Math.round(num * 10) / 10;\n};\nconst divideByThousand = (num, currentIndex, maxNumOfRecursions) => {\n    const result = num / 1000;\n    if (result < 1000 || currentIndex === maxNumOfRecursions) {\n        return {\n            value: roundToOneDecimal(result),\n            index: currentIndex,\n        };\n    }\n    return divideByThousand(result, currentIndex + 1, maxNumOfRecursions); // recursion!\n};\nconst getReadableNumber = (num) => {\n    if (num < 1000) {\n        return `${num}`;\n    }\n    const units = ['K', 'M', 'B', 'T'];\n    const { value, index } = divideByThousand(num, 0, units.length - 1);\n    return `${value} ${units[index]}`;\n};\n\n\n//# sourceURL=webpack://web-component-charts/./src/helper/get-readable-number.ts?");

/***/ }),

/***/ "./src/helper/intersection-observer.ts":
/*!*********************************************!*\
  !*** ./src/helper/intersection-observer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isElementInview: () => (/* binding */ isElementInview)\n/* harmony export */ });\nconst isElementInview = (target, callback) => {\n    const options = {\n        rootMargin: \"0px\",\n        threshold: .5,\n    };\n    const observerCallback = (entries) => {\n        callback(entries[0].isIntersecting);\n    };\n    const observer = new IntersectionObserver(observerCallback, options);\n    return observer.observe(target);\n};\n\n\n//# sourceURL=webpack://web-component-charts/./src/helper/intersection-observer.ts?");

/***/ }),

/***/ "./src/helper/load-json.ts":
/*!*********************************!*\
  !*** ./src/helper/load-json.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadJSON: () => (/* binding */ loadJSON)\n/* harmony export */ });\nconst loadJSON = (fileName, resolve, reject) => {\n    __webpack_require__(\"./src/data lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${fileName}.json`)\n        .then((module) => {\n        const data = module.default;\n        if (!Object.keys(data).includes('data')) {\n            return [];\n        }\n        return data.data;\n    })\n        .then((data) => {\n        resolve(data);\n    })\n        .catch(error => {\n        reject(error);\n    });\n};\n\n\n//# sourceURL=webpack://web-component-charts/./src/helper/load-json.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_create_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/create-template */ \"./src/helper/create-template.ts\");\n/* harmony import */ var _components_bar_chart_bar_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bar-chart/bar-chart */ \"./src/components/bar-chart/bar-chart.ts\");\n/* harmony import */ var _components_bar_chart_bar_chart_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bar-chart/bar-chart.html */ \"./src/components/bar-chart/bar-chart.html\");\n\n\n\nconst body = document.querySelector('body');\n// add custom bar chart element\nconst barChartTemplate = (0,_helper_create_template__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_components_bar_chart_bar_chart_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { 'id': 'bar-chart', 'data-json': 'example-data' });\nbody.prepend(barChartTemplate);\ncustomElements.define('bar-chart', _components_bar_chart_bar_chart__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://web-component-charts/./src/index.ts?");

/***/ }),

/***/ "./src/data lazy recursive ^\\.\\/.*\\.json$":
/*!********************************************************!*\
  !*** ./src/data/ lazy ^\.\/.*\.json$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./example-data.json\": [\n\t\t\"./src/data/example-data.json\",\n\t\t\"src_data_example-data_json\"\n\t],\n\t\"./fruit-consumption.json\": [\n\t\t\"./src/data/fruit-consumption.json\",\n\t\t\"src_data_fruit-consumption_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/data lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://web-component-charts/./src/data/_lazy_^\\.\\/.*\\.json$_namespace_object?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "web-component-charts:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb_component_charts"] = self["webpackChunkweb_component_charts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;