/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss ***!
  \**********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#game > div {\n  margin: 2rem 0; }\n\n#game #grid {\n  display: grid;\n  grid-template-columns: repeat(5, 120px);\n  grid-template-rows: repeat(5, 80px);\n  column-gap: 10px;\n  row-gap: 10px; }\n  #game #grid .box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #000000;\n    cursor: pointer; }\n\n.box-spymaster-red {\n  color: red;\n  color: red; }\n\n.box-spymaster-blue {\n  color: blue; }\n\n.box-spymaster-neutral {\n  color: darkgray; }\n\n.box-spymaster-black {\n  color: #000000; }\n\n.box-red {\n  background-color: red;\n  color: #fff; }\n\n.box-blue {\n  background-color: blue;\n  color: #fff; }\n\n.box-neutral {\n  background-color: lightgray; }\n\n.box-black {\n  background-color: #000000;\n  color: #ffffff; }\n", "",{"version":3,"sources":["webpack://./src/styles/app.scss"],"names":[],"mappings":"AAAA;EAEI,cAAc,EAAA;;AAFlB;EAMI,aAAa;EACb,uCAAuC;EACvC,mCAAmC;EACnC,gBAAgB;EAChB,aAAa,EAAA;EAVjB;IAaM,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,eAAe,EAAA;;AAKrB;EACE,UAAU;EACV,UAAU,EAAA;;AAGZ;EACE,WAAW,EAAA;;AAGb;EACE,eAAe,EAAA;;AAGjB;EACE,cAAc,EAAA;;AAGhB;EACE,qBAAqB;EACrB,WAAW,EAAA;;AAGb;EACE,sBAAsB;EACtB,WAAW,EAAA;;AAGb;EACE,2BAA2B,EAAA;;AAG7B;EACE,yBAAyB;EACzB,cAAc,EAAA","sourcesContent":["#game {\n  >div {\n    margin: 2rem 0;\n  }\n\n  #grid {\n    display: grid;\n    grid-template-columns: repeat(5, 120px);\n    grid-template-rows: repeat(5, 80px);\n    column-gap: 10px;\n    row-gap: 10px;\n\n    .box {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border: 1px solid #000000;\n      cursor: pointer;\n    }\n  }\n}\n\n.box-spymaster-red {\n  color: red;\n  color: red;\n}\n\n.box-spymaster-blue {\n  color: blue;\n}\n\n.box-spymaster-neutral {\n  color: darkgray;\n}\n\n.box-spymaster-black {\n  color: #000000;\n}\n\n.box-red {\n  background-color: red;\n  color: #fff;\n}\n\n.box-blue {\n  background-color: blue;\n  color: #fff;\n}\n\n.box-neutral {\n  background-color: lightgray;\n}\n\n.box-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/app.scss */ "./src/styles/app.scss");
var Grid_1 = __importDefault(__webpack_require__(/*! ./scripts/App/Grid */ "./src/scripts/App/Grid.ts"));
var App = /** @class */ (function () {
    function App() {
    }
    App.init = function () {
        var grid = new Grid_1.default();
        var resetBtn = document.getElementById('reset');
        resetBtn.addEventListener('click', grid.reset.bind(grid, false));
        var endTurnBtn = document.getElementById('end-turn');
        endTurnBtn.addEventListener('click', grid.changeTurns.bind(grid));
        var spymasterBtn = document.getElementById('toggle-spymaster');
        spymasterBtn.addEventListener('click', grid.toggleSpymasterView.bind(grid));
    };
    return App;
}());
App.init();


/***/ }),

/***/ "./src/scripts/App/Box.ts":
/*!********************************!*\
  !*** ./src/scripts/App/Box.ts ***!
  \********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Box = /** @class */ (function () {
    function Box(id, text, type, determineWinnerFunction) {
        this.id = id;
        this.text = text;
        this.type = type;
        this.disabled = false;
        this.determineWinnerHandler = determineWinnerFunction;
        this.gridEl = document.getElementById('grid');
        this.boxEl = document.createElement('div');
    }
    Box.prototype.boxClickHandler = function () {
        // eslint-disable-next-line no-console
        console.log(this);
        if (!this.disabled) {
            var isGameOver = this.determineWinnerHandler(this);
            if (!isGameOver) {
                this.adjustColors();
                this.disabled = true;
            }
        }
    };
    Box.prototype.adjustColors = function (isSpymaster) {
        if (isSpymaster === void 0) { isSpymaster = false; }
        if (isSpymaster && !this.disabled) {
            this.boxEl.classList.add("box-spymaster-" + this.type);
        }
        else if (!this.disabled) {
            this.boxEl.classList.add("box-" + this.type);
        }
    };
    Box.prototype.removeColors = function (spymasterOnly) {
        var _this = this;
        if (spymasterOnly === void 0) { spymasterOnly = false; }
        if (spymasterOnly) {
            this.boxEl.className.split(' ').forEach(function (value) {
                if (value.includes('spymaster')) {
                    _this.boxEl.classList.remove(value);
                }
            });
        }
        else {
            this.boxEl.className = 'box';
        }
    };
    Box.prototype.renderToGrid = function () {
        this.gridEl.insertAdjacentElement('beforeend', this.boxEl);
    };
    Box.prototype.reset = function (boxObject, word) {
        var box = boxObject;
        box.text = word;
        box.disabled = false;
        this.boxEl.className = 'box';
        this.boxEl.textContent = word;
        this.boxEl.remove();
        this.renderToGrid();
    };
    Box.prototype.render = function () {
        this.boxEl.id = this.id;
        this.boxEl.className = 'box';
        this.boxEl.textContent = this.text;
        this.boxEl.addEventListener('click', this.boxClickHandler.bind(this));
        this.renderToGrid();
    };
    return Box;
}());
exports.default = Box;


/***/ }),

/***/ "./src/scripts/App/Grid.ts":
/*!*********************************!*\
  !*** ./src/scripts/App/Grid.ts ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var WordList_1 = __importDefault(__webpack_require__(/*! ./WordList */ "./src/scripts/App/WordList.ts"));
var Box_1 = __importDefault(__webpack_require__(/*! ./Box */ "./src/scripts/App/Box.ts"));
var Api_1 = __importDefault(__webpack_require__(/*! ../Utility/Api */ "./src/scripts/Utility/Api.ts"));
var default_1 = /** @class */ (function () {
    function default_1() {
        this.messageEl = document.getElementById('message');
        this.gameId = 9999;
        this.api = new Api_1.default(this.gameId);
        this.boxes = this.getBoxes();
        this.reset(true);
        this.gameStateInterval(5000);
        this.render();
    }
    default_1.prototype.shuffleBoxes = function () {
        this.boxes.sort(function () { return 0.5 - Math.random(); });
    };
    default_1.prototype.getBoxes = function () {
        var words = new WordList_1.default();
        var boxes = [];
        for (var i = 1; i <= 25; i += 1) {
            var boxId = "box" + i.toString();
            var randomWord = words.getRandomWord();
            var type = 'neutral';
            if (i <= 8) {
                type = 'red';
            }
            else if (i > 8 && i <= 16) {
                type = 'blue';
            }
            else if (i === 25) {
                type = 'black';
            }
            boxes.push(new Box_1.default(boxId, randomWord, type, this.determineWinner.bind(this)));
        }
        return boxes;
    };
    default_1.prototype.reset = function (firstReset) {
        if (firstReset === void 0) { firstReset = false; }
        this.shuffleBoxes();
        this.redCount = 0;
        this.blueCount = 0;
        this.gameOver = false;
        this.spymasterView = false;
        this.changeTurns();
        this.updateScore();
        if (!firstReset) {
            var words_1 = new WordList_1.default();
            this.boxes.forEach(function (box) { return box.reset(box, words_1.getRandomWord()); });
        }
    };
    default_1.prototype.gameStateInterval = function (interval) {
        var _this = this;
        setInterval(function () {
            _this.api.gameState();
        }, interval);
    };
    default_1.prototype.toggleSpymasterView = function () {
        var _this = this;
        this.spymasterView = !this.spymasterView;
        this.boxes.forEach(function (box) {
            if (_this.spymasterView) {
                box.adjustColors(true);
            }
            else {
                box.removeColors(true);
            }
        });
    };
    default_1.prototype.determineWinner = function (box) {
        if (this.gameOver) {
            return this.gameOver;
        }
        this.api.guess();
        if (box.type === 'black') {
            this.gameOver = true;
            this.messageEl.textContent = this.turn + " Team Loses!";
        }
        else if (box.type === 'red') {
            this.redCount += 1;
            if (this.redCount === 8) {
                this.gameOver = true;
                this.messageEl.textContent = 'Red Team Wins';
            }
        }
        else if (box.type === 'blue') {
            this.blueCount += 1;
            if (this.blueCount === 8) {
                this.gameOver = true;
                this.messageEl.textContent = 'Blue Team Wins';
            }
        }
        if (this.gameOver) {
            box.adjustColors(); // Adjust color of tile one last time before ending game
        }
        else {
            this.determineTurnChange(box.type);
        }
        this.updateScore();
        return this.gameOver;
    };
    default_1.prototype.updateScore = function () {
        var scoreEl = document.getElementById('score');
        scoreEl.textContent = "Red: " + this.redCount + " vs Blue: " + this.blueCount;
    };
    default_1.prototype.determineTurnChange = function (boxType) {
        if (boxType !== this.turn) {
            this.changeTurns();
        }
    };
    default_1.prototype.changeTurns = function () {
        this.turn = this.turn === 'red' ? 'blue' : 'red';
        var turnEl = document.getElementById('turn');
        var turnLabel = this.turn.charAt(0).toUpperCase() + this.turn.slice(1);
        turnEl.textContent = turnLabel + " Team's Turn";
    };
    default_1.prototype.render = function () {
        this.boxes.forEach(function (box) { return box.render(); });
    };
    return default_1;
}());
exports.default = default_1;


/***/ }),

/***/ "./src/scripts/App/WordList.ts":
/*!*************************************!*\
  !*** ./src/scripts/App/WordList.ts ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var default_1 = /** @class */ (function () {
    function default_1() {
        this.words = [
            'Horse',
            'Car',
            'Life',
            'Spaceship',
            'Banana',
            'Jogging',
            'Gym',
            'Slug',
            'Hockey',
            'Visor',
            'Eye',
            'Head',
            'School',
            'Bus',
            'Janitor',
            'Dinosaur',
            'Montreal',
            'Canada',
            'Europe',
            'Russia',
            'Spoon',
            'Knife',
            'Computer',
            'Post',
            'Page',
            'Letter',
            'Tablet',
            'Phone',
        ];
    }
    default_1.prototype.getRandomWord = function () {
        var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
        this.words = this.words.filter(function (word) { return word !== randomWord; });
        return randomWord;
    };
    return default_1;
}());
exports.default = default_1;


/***/ }),

/***/ "./src/scripts/Utility/Api.ts":
/*!************************************!*\
  !*** ./src/scripts/Utility/Api.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var default_1 = /** @class */ (function () {
    function default_1(gameId) {
        this.gameId = gameId;
        this.apiUrl = 'http://localhost:3000';
    }
    default_1.prototype.guess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, postData, response, responseData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/guess";
                        postData = {
                            gameId: this.gameId,
                        };
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(postData),
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        return [2 /*return*/, responseData];
                }
            });
        });
    };
    default_1.prototype.gameState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, responseData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/game-state/" + this.gameId;
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        console.log('gameState', responseData);
                        return [2 /*return*/, responseData];
                }
            });
        });
    };
    return default_1;
}());
exports.default = default_1;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/app.ts");
/******/ })()
;
//# sourceMappingURL=app.js.map