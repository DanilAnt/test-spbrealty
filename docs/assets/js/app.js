/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const search =document.getElementById(\"search\");\r\n    const cards = document.querySelectorAll('[data-card]')\r\n    const filters = document.querySelectorAll('[data-filter]');\r\n    const filter = document.getElementById(\"filter\");\r\n    const filterMask = document.getElementById(\"filterMask\");\r\n    const checkboxCheckAll = document.getElementById(\"checkAll\");\r\n    filter.addEventListener(\"click\", (e) => {\r\n        if (e.target !== filterMask) {\r\n            filter.classList.add('show');\r\n        }\r\n    });\r\n    filterMask.addEventListener(\"click\", (e) => {\r\n        if (e.target === filterMask) {\r\n            filter.classList.remove('show');\r\n        }\r\n    })\r\n\r\n    cards.forEach(card => {\r\n        let id = card.getAttribute('data-card')\r\n\r\n        let checkbox = document.getElementById(id);\r\n        card.addEventListener(\"click\", (e) => {\r\n            if (checkbox.checked === true) {\r\n                checkbox.checked = false;\r\n                checkboxCheckAll.checked = false;\r\n            } else {\r\n                checkbox.checked = true;\r\n                let isAllChecked = true;\r\n                \r\n                cards.forEach(c => {\r\n                    let id = c.getAttribute('data-card')\r\n                    let checkbox = document.getElementById(id);\r\n                    \r\n                    // console.log(1,checkbox.checked, c.getAttribute('data-hidden') , c.getAttribute('data-card'), c);\r\n                    \r\n                    if (checkbox.checked !== true && c.getAttribute('data-hidden') === 'false') { isAllChecked = false; }\r\n                })\r\n                if (isAllChecked === true) {\r\n                    checkboxCheckAll.checked = true;\r\n                }\r\n            }\r\n            \r\n\r\n        })\r\n    })\r\n\r\n    checkboxCheckAll.addEventListener('click', () => {\r\n        if (checkboxCheckAll.checked === true) {\r\n            cards.forEach(card => {\r\n                let id = card.getAttribute('data-card')\r\n\r\n                let checkbox = document.getElementById(id);\r\n                checkbox.checked = true;\r\n            })\r\n        } else {\r\n            cards.forEach(card => {\r\n                let id = card.getAttribute('data-card')\r\n\r\n                let checkbox = document.getElementById(id);\r\n                checkbox.checked = false;\r\n            })\r\n        }\r\n    })\r\n\r\n    filters.forEach((filter) => {\r\n        filter.addEventListener('change', () => {\r\n           \r\n           \r\n           \r\n            if (filter.checked === true ) {\r\n                cards.forEach(card => {\r\n                    let isIncludesSearch = false;\r\n                    for(let node of card.getElementsByTagName(\"*\")){\r\n                        if(node.innerText && node.innerText.toLowerCase().includes(search.value.toLowerCase())){\r\n                            isIncludesSearch = true;\r\n                        }\r\n                    \r\n                    }\r\n                    if (card.getAttribute('data-status') === filter.getAttribute('data-filter')&& isIncludesSearch) {\r\n                        card.setAttribute('data-hidden', 'false');\r\n                        card.classList.remove('hidden');\r\n\r\n                    }\r\n                })\r\n            } else {\r\n                cards.forEach(card => {\r\n\r\n                    if (card.getAttribute('data-status') === filter.getAttribute('data-filter')) {\r\n                        card.setAttribute('data-hidden', 'true');\r\n\r\n                        card.classList.add('hidden');\r\n                    }\r\n                })\r\n            }\r\n            let isAllCardsChecked = true;\r\n            cards.forEach(card => {\r\n                if (card.getAttribute('data-hidden') === 'false') {\r\n                    let id = card.getAttribute('data-card')\r\n                    let checkbox = document.getElementById(id);\r\n                    if (!checkbox.checked) {\r\n                        isAllCardsChecked = false;\r\n                    }\r\n                }\r\n            });\r\n            if (isAllCardsChecked) {\r\n                checkboxCheckAll.checked = true;\r\n            } else {\r\n                checkboxCheckAll.checked = false;\r\n            }\r\n\r\n        })\r\n    })\r\n\r\n    search.oninput=()=>{\r\n        // console.log(search.value);\r\n        \r\n        cards.forEach(card => {\r\n            // console.log(card.getElementsByTagName(\"*\"));\r\n            let isIncludesSearch = false;\r\n            \r\n            for(let node of card.getElementsByTagName(\"*\")){\r\n                if(node.innerText && node.innerText.toLowerCase().includes(search.value.toLowerCase())){\r\n                    isIncludesSearch = true;\r\n                }\r\n            \r\n            }\r\n            let isIncludesFilter = false;\r\n            filters.forEach((filter) => {\r\n                if (card.getAttribute('data-status') === filter.getAttribute('data-filter')&&filter.checked=== true){\r\n                    isIncludesFilter=true;\r\n                }\r\n            })\r\n            if(isIncludesSearch&&isIncludesFilter){\r\n                card.setAttribute('data-hidden', 'false');\r\n\r\n                card.classList.remove('hidden');\r\n            }else{\r\n                card.setAttribute('data-hidden', 'true');\r\n\r\n                        card.classList.add('hidden');\r\n            }\r\n\r\n        })\r\n        let isAllCardsChecked = true;\r\n            cards.forEach(card => {\r\n                if (card.getAttribute('data-hidden') === 'false') {\r\n                    let id = card.getAttribute('data-card')\r\n                    let checkbox = document.getElementById(id);\r\n                    if (!checkbox.checked) {\r\n                        isAllCardsChecked = false;\r\n                    }\r\n                }\r\n            });\r\n            if (isAllCardsChecked) {\r\n                checkboxCheckAll.checked = true;\r\n            } else {\r\n                checkboxCheckAll.checked = false;\r\n            }\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });