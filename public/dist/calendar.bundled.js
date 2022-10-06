/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/tui-date-picker/dist/tui-date-picker.js":
/*!**************************************************************!*\
  !*** ./node_modules/tui-date-picker/dist/tui-date-picker.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * TOAST UI Date Picker
 * @version 4.3.1
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(/*! tui-time-picker */ "./node_modules/tui-time-picker/dist/tui-time-picker.js"));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! tui-time-picker */ "./node_modules/tui-time-picker/dist/tui-time-picker.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE__43__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_1389__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1389__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_1389__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __nested_webpack_require_1389__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __nested_webpack_require_1389__.d = function (exports, name, getter) {
        /******/
        if (!__nested_webpack_require_1389__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __nested_webpack_require_1389__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __nested_webpack_require_1389__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __nested_webpack_require_1389__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __nested_webpack_require_1389__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __nested_webpack_require_1389__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __nested_webpack_require_1389__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __nested_webpack_require_1389__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __nested_webpack_require_1389__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __nested_webpack_require_1389__.p = "dist";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __nested_webpack_require_1389__(__nested_webpack_require_1389__.s = 34);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __nested_webpack_require_6106__) {
      "use strict";
      /**
       * @fileoverview
       * This module provides a function to make a constructor
       * that can inherit from the other constructors like the CLASS easily.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var inherit = __nested_webpack_require_6106__(35);

      var extend = __nested_webpack_require_6106__(7);
      /**
       * @module defineClass
       */

      /**
       * Help a constructor to be defined and to inherit from the other constructors
       * @param {*} [parent] Parent constructor
       * @param {Object} props Members of constructor
       *  @param {Function} props.init Initialization method
       *  @param {Object} [props.static] Static members of constructor
       * @returns {*} Constructor
       * @memberof module:defineClass
       * @example
       * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
       *
       * //-- #2. Use property --//
       * var Parent = defineClass({
       *     init: function() { // constuructor
       *         this.name = 'made by def';
       *     },
       *     method: function() {
       *         // ...
       *     },
       *     static: {
       *         staticMethod: function() {
       *              // ...
       *         }
       *     }
       * });
       *
       * var Child = defineClass(Parent, {
       *     childMethod: function() {}
       * });
       *
       * Parent.staticMethod();
       *
       * var parentInstance = new Parent();
       * console.log(parentInstance.name); //made by def
       * parentInstance.staticMethod(); // Error
       *
       * var childInstance = new Child();
       * childInstance.method();
       * childInstance.childMethod();
       */


      function defineClass(parent, props) {
        var obj;

        if (!props) {
          props = parent;
          parent = null;
        }

        obj = props.init || function () {};

        if (parent) {
          inherit(obj, parent);
        }

        if (props.hasOwnProperty('static')) {
          extend(obj, props['static']);
          delete props['static'];
        }

        extend(obj.prototype, props);
        return obj;
      }

      module.exports = defineClass;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Constants of date-picker
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      module.exports = {
        TYPE_DATE: 'date',
        TYPE_MONTH: 'month',
        TYPE_YEAR: 'year',
        TYPE_HOUR: 'hour',
        TYPE_MINUTE: 'minute',
        TYPE_MERIDIEM: 'meridiem',
        MIN_DATE: new Date(1900, 0, 1),
        MAX_DATE: new Date(2999, 11, 31),
        DEFAULT_LANGUAGE_TYPE: 'en',
        CLASS_NAME_SELECTED: 'tui-is-selected',
        CLASS_NAME_PREV_MONTH_BTN: 'tui-calendar-btn-prev-month',
        CLASS_NAME_PREV_YEAR_BTN: 'tui-calendar-btn-prev-year',
        CLASS_NAME_NEXT_YEAR_BTN: 'tui-calendar-btn-next-year',
        CLASS_NAME_NEXT_MONTH_BTN: 'tui-calendar-btn-next-month',
        CLASS_NAME_TITLE_TODAY: 'tui-calendar-title-today',
        DEFAULT_WEEK_START_DAY: 'Sun',
        WEEK_START_DAY_MAP: {
          sun: 0,
          mon: 1,
          tue: 2,
          wed: 3,
          thu: 4,
          fri: 5,
          sat: 6
        }
      };
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Execute the provided callback once for each element present
       * in the array(or Array-like object) in ascending order.
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the element
       *  2) The index of the element
       *  3) The array(or Array-like object) being traversed
       * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
       * @param {function} iteratee Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEachArray([1,2,3], function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       */

      function forEachArray(arr, iteratee, context) {
        var index = 0;
        var len = arr.length;
        context = context || null;

        for (; index < len; index += 1) {
          if (iteratee.call(context, arr[index], index, arr) === false) {
            break;
          }
        }
      }

      module.exports = forEachArray;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __nested_webpack_require_11267__) {
      "use strict";
      /* eslint-disable complexity */

      /**
       * @fileoverview Returns the first index at which a given element can be found in the array.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isArray = __nested_webpack_require_11267__(6);
      /**
       * @module array
       */

      /**
       * Returns the first index at which a given element can be found in the array
       * from start index(default 0), or -1 if it is not present.
       * It compares searchElement to elements of the Array using strict equality
       * (the same method used by the ===, or triple-equals, operator).
       * @param {*} searchElement Element to locate in the array
       * @param {Array} array Array that will be traversed.
       * @param {number} startIndex Start index in array for searching (default 0)
       * @returns {number} the First index at which a given element, or -1 if it is not present
       * @memberof module:array
       * @example
       * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
       *
       * var arr = ['one', 'two', 'three', 'four'];
       * var idx1 = inArray('one', arr, 3); // -1
       * var idx2 = inArray('one', arr); // 0
       */


      function inArray(searchElement, array, startIndex) {
        var i;
        var length;
        startIndex = startIndex || 0;

        if (!isArray(array)) {
          return -1;
        }

        if (Array.prototype.indexOf) {
          return Array.prototype.indexOf.call(array, searchElement, startIndex);
        }

        length = array.length;

        for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
          if (array[i] === searchElement) {
            return i;
          }
        }

        return -1;
      }

      module.exports = inArray;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __nested_webpack_require_13193__) {
      "use strict";
      /**
       * @fileoverview Utils for Datepicker component
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_13193__(2);

      var isHTMLNode = __nested_webpack_require_13193__(46);

      var sendHostname = __nested_webpack_require_13193__(47);

      var currentId = 0;
      var utils = {
        /**
         * Get a target element
         * @param {Event} ev Event object
         * @returns {HTMLElement} An event target element
         */
        getTarget: function getTarget(ev) {
          return ev.target || ev.srcElement;
        },

        /**
         * Return the same element with an element or a matched element searched by a selector.
         * @param {HTMLElement|string} param HTMLElement or selector
         * @returns {HTMLElement} A matched element
         */
        getElement: function getElement(param) {
          return isHTMLNode(param) ? param : document.querySelector(param);
        },

        /**
         * Get a selector of the element.
         * @param {HTMLElement} elem An element
         * @returns {string}
         */
        getSelector: function getSelector(elem) {
          var selector = '';

          if (elem.id) {
            selector = '#' + elem.id;
          } else if (elem.className) {
            selector = '.' + elem.className.split(' ')[0];
          }

          return selector;
        },

        /**
         * Create an unique id.
         * @returns {number}
         */
        generateId: function generateId() {
          currentId += 1;
          return currentId;
        },

        /**
         * Create a new array with all elements that pass the test implemented by the provided function.
         * @param {Array} arr - Array that will be traversed
         * @param {function} iteratee - iteratee callback function
         * @returns {Array}
         */
        filter: function filter(arr, iteratee) {
          var result = [];
          forEachArray(arr, function (item) {
            if (iteratee(item)) {
              result.push(item);
            }
          });
          return result;
        },

        /**
         * Send hostname for GA
         * @ignore
         */
        sendHostName: function sendHostName() {
          sendHostname('date-picker', 'UA-129987462-1');
        }
      };
      module.exports = utils;
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __nested_webpack_require_15678__) {
      "use strict";
      /**
       * @fileoverview Utils for DatePicker component
       * @author NHN. FE dev Lab. <dl_javascript@nhn.com>
       */

      var isDate = __nested_webpack_require_15678__(28);

      var isNumber = __nested_webpack_require_15678__(15);

      var constants = __nested_webpack_require_15678__(1);

      var TYPE_DATE = constants.TYPE_DATE;
      var TYPE_MONTH = constants.TYPE_MONTH;
      var TYPE_YEAR = constants.TYPE_YEAR;
      /**
       * Utils of calendar
       * @namespace dateUtil
       * @ignore
       */

      var utils = {
        /**
         * Get weeks count by paramenter
         * @param {number} year A year
         * @param {number} month A month
         * @returns {number} Weeks count (4~6)
         **/
        getWeeksCount: function getWeeksCount(year, month) {
          var firstDay = utils.getFirstDay(year, month),
              lastDate = utils.getLastDayInMonth(year, month);
          return Math.ceil((firstDay + lastDate) / 7);
        },

        /**
         * @param {Date} date - Date instance
         * @returns {boolean}
         */
        isValidDate: function isValidDate(date) {
          return isDate(date) && !isNaN(date.getTime());
        },

        /**
         * Get which day is first by parameters that include year and month information.
         * @param {number} year A year
         * @param {number} month A month
         * @returns {number} (0~6)
         */
        getFirstDay: function getFirstDay(year, month) {
          return new Date(year, month - 1, 1).getDay();
        },

        /**
         * Get timestamp of the first day.
         * @param {number} year A year
         * @param {number} month A month
         * @returns {number} timestamp
         */
        getFirstDayTimestamp: function getFirstDayTimestamp(year, month) {
          return new Date(year, month, 1).getTime();
        },

        /**
         * Get last date by parameters that include year and month information.
         * @param {number} year A year
         * @param {number} month A month
         * @returns {number} (1~31)
         */
        getLastDayInMonth: function getLastDayInMonth(year, month) {
          return new Date(year, month, 0).getDate();
        },

        /**
         * Chagne number 0~9 to '00~09'
         * @param {number} number number
         * @returns {string}
         * @example
         *  dateUtil.prependLeadingZero(0); //  '00'
         *  dateUtil.prependLeadingZero(9); //  '09'
         *  dateUtil.prependLeadingZero(12); //  '12'
         */
        prependLeadingZero: function prependLeadingZero(number) {
          var prefix = '';

          if (number < 10) {
            prefix = '0';
          }

          return prefix + number;
        },

        /**
         * Get meridiem hour
         * @param {number} hour - Original hour
         * @returns {number} Converted meridiem hour
         */
        getMeridiemHour: function getMeridiemHour(hour) {
          hour %= 12;

          if (hour === 0) {
            hour = 12;
          }

          return hour;
        },

        /**
         * Returns number or default
         * @param {*} any - Any value
         * @param {number} defaultNumber - Default number
         * @throws Will throw an error if the defaultNumber is invalid.
         * @returns {number}
         */
        getSafeNumber: function getSafeNumber(any, defaultNumber) {
          if (isNaN(defaultNumber) || !isNumber(defaultNumber)) {
            throw Error('The defaultNumber must be a valid number.');
          }

          if (isNaN(any)) {
            return defaultNumber;
          }

          return Number(any);
        },

        /**
         * Return date of the week
         * @param {number} year - Year
         * @param {number} month - Month
         * @param {number} weekNumber - Week number (0~5)
         * @param {number} dayNumber - Day number (0: sunday, 1: monday, ....)
         * @returns {number}
         */
        getDateOfWeek: function getDateOfWeek(year, month, weekNumber, dayNumber) {
          var firstDayOfMonth = new Date(year, month - 1).getDay();
          var dateOffset = firstDayOfMonth - dayNumber - 1;
          return new Date(year, month - 1, weekNumber * 7 - dateOffset);
        },

        /**
         * Returns range arr
         * @param {number} start - Start value
         * @param {number} end - End value
         * @returns {Array}
         */
        getRangeArr: function getRangeArr(start, end) {
          var arr = [];
          var i;

          if (start > end) {
            for (i = end; i >= start; i -= 1) {
              arr.push(i);
            }
          } else {
            for (i = start; i <= end; i += 1) {
              arr.push(i);
            }
          }

          return arr;
        },

        /**
         * Returns cloned date with the start of a unit of time
         * @param {Date|number} date - Original date
         * @param {string} [type = TYPE_DATE] - Unit type
         * @throws {Error}
         * @returns {Date}
         */
        cloneWithStartOf: function cloneWithStartOf(date, type) {
          type = type || TYPE_DATE;
          date = new Date(date); // Does not consider time-level yet.

          date.setHours(0, 0, 0, 0);

          switch (type) {
            case TYPE_DATE:
              break;

            case TYPE_MONTH:
              date.setDate(1);
              break;

            case TYPE_YEAR:
              date.setMonth(0, 1);
              break;

            default:
              throw Error('Unsupported type: ' + type);
          }

          return date;
        },

        /**
         * Returns cloned date with the end of a unit of time
         * @param {Date|number} date - Original date
         * @param {string} [type = TYPE_DATE] - Unit type
         * @throws {Error}
         * @returns {Date}
         */
        cloneWithEndOf: function cloneWithEndOf(date, type) {
          type = type || TYPE_DATE;
          date = new Date(date); // Does not consider time-level yet.

          date.setHours(23, 59, 59, 999);

          switch (type) {
            case TYPE_DATE:
              break;

            case TYPE_MONTH:
              date.setMonth(date.getMonth() + 1, 0);
              break;

            case TYPE_YEAR:
              date.setMonth(11, 31);
              break;

            default:
              throw Error('Unsupported type: ' + type);
          }

          return date;
        },

        /**
         * Compare two dates
         * @param {Date|number} dateA - Date
         * @param {Date|number} dateB - Date
         * @param {string} [cmpLevel] - Comparing level
         * @returns {number}
         */
        compare: function compare(dateA, dateB, cmpLevel) {
          var aTimestamp, bTimestamp;

          if (!(utils.isValidDate(dateA) && utils.isValidDate(dateB))) {
            return NaN;
          }

          if (!cmpLevel) {
            aTimestamp = dateA.getTime();
            bTimestamp = dateB.getTime();
          } else {
            aTimestamp = utils.cloneWithStartOf(dateA, cmpLevel).getTime();
            bTimestamp = utils.cloneWithStartOf(dateB, cmpLevel).getTime();
          }

          if (aTimestamp > bTimestamp) {
            return 1;
          }

          return aTimestamp === bTimestamp ? 0 : -1;
        },

        /**
         * Returns whether two dates are same
         * @param {Date|number} dateA - Date
         * @param {Date|number} dateB - Date
         * @param {string} [cmpLevel] - Comparing level
         * @returns {boolean}
         */
        isSame: function isSame(dateA, dateB, cmpLevel) {
          return utils.compare(dateA, dateB, cmpLevel) === 0;
        },

        /**
         * Returns whether the target is in range
         * @param {Date|number} start - Range start
         * @param {Date|number} end - Range end
         * @param {Date|number} target - Target
         * @param {string} [cmpLevel = TYPE_DATE] - Comparing level
         * @returns {boolean}
         */
        inRange: function inRange(start, end, target, cmpLevel) {
          return utils.compare(start, target, cmpLevel) < 1 && utils.compare(end, target, cmpLevel) > -1;
        }
      };
      module.exports = utils;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is an instance of Array or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is an instance of Array or not.
       * If the given variable is an instance of Array, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is array instance?
       * @memberof module:type
       */

      function isArray(obj) {
        return obj instanceof Array;
      }

      module.exports = isArray;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Extend the target object from other objects.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * @module object
       */

      /**
       * Extend the target object from other objects.
       * @param {object} target - Object that will be extended
       * @param {...object} objects - Objects as sources
       * @returns {object} Extended object
       * @memberof module:object
       */

      function extend(target, objects) {
        // eslint-disable-line no-unused-vars
        var hasOwnProp = Object.prototype.hasOwnProperty;
        var source, prop, i, len;

        for (i = 1, len = arguments.length; i < len; i += 1) {
          source = arguments[i];

          for (prop in source) {
            if (hasOwnProp.call(source, prop)) {
              target[prop] = source[prop];
            }
          }
        }

        return target;
      }

      module.exports = extend;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __nested_webpack_require_25847__) {
      "use strict";
      /**
       * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var extend = __nested_webpack_require_25847__(7);

      var isExisty = __nested_webpack_require_25847__(37);

      var isString = __nested_webpack_require_25847__(13);

      var isObject = __nested_webpack_require_25847__(22);

      var isArray = __nested_webpack_require_25847__(6);

      var isFunction = __nested_webpack_require_25847__(39);

      var forEach = __nested_webpack_require_25847__(9);

      var R_EVENTNAME_SPLIT = /\s+/g;
      /**
       * @class
       * @example
       * // node, commonjs
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
       */

      function CustomEvents() {
        /**
           * @type {HandlerItem[]}
           */
        this.events = null;
        /**
           * only for checking specific context event was binded
           * @type {object[]}
           */

        this.contexts = null;
      }
      /**
       * Mixin custom events feature to specific constructor
       * @param {function} func - constructor
       * @example
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * var model;
       * function Model() {
       *     this.name = '';
       * }
       * CustomEvents.mixin(Model);
       *
       * model = new Model();
       * model.on('change', function() { this.name = 'model'; }, this);
       * model.fire('change');
       * alert(model.name); // 'model';
       */


      CustomEvents.mixin = function (func) {
        extend(func.prototype, CustomEvents.prototype);
      };
      /**
       * Get HandlerItem object
       * @param {function} handler - handler function
       * @param {object} [context] - context for handler
       * @returns {HandlerItem} HandlerItem object
       * @private
       */


      CustomEvents.prototype._getHandlerItem = function (handler, context) {
        var item = {
          handler: handler
        };

        if (context) {
          item.context = context;
        }

        return item;
      };
      /**
       * Get event object safely
       * @param {string} [eventName] - create sub event map if not exist.
       * @returns {(object|array)} event object. if you supplied `eventName`
       *  parameter then make new array and return it
       * @private
       */


      CustomEvents.prototype._safeEvent = function (eventName) {
        var events = this.events;
        var byName;

        if (!events) {
          events = this.events = {};
        }

        if (eventName) {
          byName = events[eventName];

          if (!byName) {
            byName = [];
            events[eventName] = byName;
          }

          events = byName;
        }

        return events;
      };
      /**
       * Get context array safely
       * @returns {array} context array
       * @private
       */


      CustomEvents.prototype._safeContext = function () {
        var context = this.contexts;

        if (!context) {
          context = this.contexts = [];
        }

        return context;
      };
      /**
       * Get index of context
       * @param {object} ctx - context that used for bind custom event
       * @returns {number} index of context
       * @private
       */


      CustomEvents.prototype._indexOfContext = function (ctx) {
        var context = this._safeContext();

        var index = 0;

        while (context[index]) {
          if (ctx === context[index][0]) {
            return index;
          }

          index += 1;
        }

        return -1;
      };
      /**
       * Memorize supplied context for recognize supplied object is context or
       *  name: handler pair object when off()
       * @param {object} ctx - context object to memorize
       * @private
       */


      CustomEvents.prototype._memorizeContext = function (ctx) {
        var context, index;

        if (!isExisty(ctx)) {
          return;
        }

        context = this._safeContext();
        index = this._indexOfContext(ctx);

        if (index > -1) {
          context[index][1] += 1;
        } else {
          context.push([ctx, 1]);
        }
      };
      /**
       * Forget supplied context object
       * @param {object} ctx - context object to forget
       * @private
       */


      CustomEvents.prototype._forgetContext = function (ctx) {
        var context, contextIndex;

        if (!isExisty(ctx)) {
          return;
        }

        context = this._safeContext();
        contextIndex = this._indexOfContext(ctx);

        if (contextIndex > -1) {
          context[contextIndex][1] -= 1;

          if (context[contextIndex][1] <= 0) {
            context.splice(contextIndex, 1);
          }
        }
      };
      /**
       * Bind event handler
       * @param {(string|{name:string, handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {(function|object)} [handler] - handler function or context
       * @param {object} [context] - context for binding
       * @private
       */


      CustomEvents.prototype._bindEvent = function (eventName, handler, context) {
        var events = this._safeEvent(eventName);

        this._memorizeContext(context);

        events.push(this._getHandlerItem(handler, context));
      };
      /**
       * Bind event handlers
       * @param {(string|{name:string, handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {(function|object)} [handler] - handler function or context
       * @param {object} [context] - context for binding
       * //-- #1. Get Module --//
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * //-- #2. Use method --//
       * // # 2.1 Basic Usage
       * CustomEvents.on('onload', handler);
       *
       * // # 2.2 With context
       * CustomEvents.on('onload', handler, myObj);
       *
       * // # 2.3 Bind by object that name, handler pairs
       * CustomEvents.on({
       *     'play': handler,
       *     'pause': handler2
       * });
       *
       * // # 2.4 Bind by object that name, handler pairs with context object
       * CustomEvents.on({
       *     'play': handler
       * }, myObj);
       */


      CustomEvents.prototype.on = function (eventName, handler, context) {
        var self = this;

        if (isString(eventName)) {
          // [syntax 1, 2]
          eventName = eventName.split(R_EVENTNAME_SPLIT);
          forEach(eventName, function (name) {
            self._bindEvent(name, handler, context);
          });
        } else if (isObject(eventName)) {
          // [syntax 3, 4]
          context = handler;
          forEach(eventName, function (func, name) {
            self.on(name, func, context);
          });
        }
      };
      /**
       * Bind one-shot event handlers
       * @param {(string|{name:string,handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {function|object} [handler] - handler function or context
       * @param {object} [context] - context for binding
       */


      CustomEvents.prototype.once = function (eventName, handler, context) {
        var self = this;

        if (isObject(eventName)) {
          context = handler;
          forEach(eventName, function (func, name) {
            self.once(name, func, context);
          });
          return;
        }

        function onceHandler() {
          // eslint-disable-line require-jsdoc
          handler.apply(context, arguments);
          self.off(eventName, onceHandler, context);
        }

        this.on(eventName, onceHandler, context);
      };
      /**
       * Splice supplied array by callback result
       * @param {array} arr - array to splice
       * @param {function} predicate - function return boolean
       * @private
       */


      CustomEvents.prototype._spliceMatches = function (arr, predicate) {
        var i = 0;
        var len;

        if (!isArray(arr)) {
          return;
        }

        for (len = arr.length; i < len; i += 1) {
          if (predicate(arr[i]) === true) {
            arr.splice(i, 1);
            len -= 1;
            i -= 1;
          }
        }
      };
      /**
       * Get matcher for unbind specific handler events
       * @param {function} handler - handler function
       * @returns {function} handler matcher
       * @private
       */


      CustomEvents.prototype._matchHandler = function (handler) {
        var self = this;
        return function (item) {
          var needRemove = handler === item.handler;

          if (needRemove) {
            self._forgetContext(item.context);
          }

          return needRemove;
        };
      };
      /**
       * Get matcher for unbind specific context events
       * @param {object} context - context
       * @returns {function} object matcher
       * @private
       */


      CustomEvents.prototype._matchContext = function (context) {
        var self = this;
        return function (item) {
          var needRemove = context === item.context;

          if (needRemove) {
            self._forgetContext(item.context);
          }

          return needRemove;
        };
      };
      /**
       * Get matcher for unbind specific hander, context pair events
       * @param {function} handler - handler function
       * @param {object} context - context
       * @returns {function} handler, context matcher
       * @private
       */


      CustomEvents.prototype._matchHandlerAndContext = function (handler, context) {
        var self = this;
        return function (item) {
          var matchHandler = handler === item.handler;
          var matchContext = context === item.context;
          var needRemove = matchHandler && matchContext;

          if (needRemove) {
            self._forgetContext(item.context);
          }

          return needRemove;
        };
      };
      /**
       * Unbind event by event name
       * @param {string} eventName - custom event name to unbind
       * @param {function} [handler] - handler function
       * @private
       */


      CustomEvents.prototype._offByEventName = function (eventName, handler) {
        var self = this;
        var andByHandler = isFunction(handler);

        var matchHandler = self._matchHandler(handler);

        eventName = eventName.split(R_EVENTNAME_SPLIT);
        forEach(eventName, function (name) {
          var handlerItems = self._safeEvent(name);

          if (andByHandler) {
            self._spliceMatches(handlerItems, matchHandler);
          } else {
            forEach(handlerItems, function (item) {
              self._forgetContext(item.context);
            });
            self.events[name] = [];
          }
        });
      };
      /**
       * Unbind event by handler function
       * @param {function} handler - handler function
       * @private
       */


      CustomEvents.prototype._offByHandler = function (handler) {
        var self = this;

        var matchHandler = this._matchHandler(handler);

        forEach(this._safeEvent(), function (handlerItems) {
          self._spliceMatches(handlerItems, matchHandler);
        });
      };
      /**
       * Unbind event by object(name: handler pair object or context object)
       * @param {object} obj - context or {name: handler} pair object
       * @param {function} handler - handler function
       * @private
       */


      CustomEvents.prototype._offByObject = function (obj, handler) {
        var self = this;
        var matchFunc;

        if (this._indexOfContext(obj) < 0) {
          forEach(obj, function (func, name) {
            self.off(name, func);
          });
        } else if (isString(handler)) {
          matchFunc = this._matchContext(obj);

          self._spliceMatches(this._safeEvent(handler), matchFunc);
        } else if (isFunction(handler)) {
          matchFunc = this._matchHandlerAndContext(handler, obj);
          forEach(this._safeEvent(), function (handlerItems) {
            self._spliceMatches(handlerItems, matchFunc);
          });
        } else {
          matchFunc = this._matchContext(obj);
          forEach(this._safeEvent(), function (handlerItems) {
            self._spliceMatches(handlerItems, matchFunc);
          });
        }
      };
      /**
       * Unbind custom events
       * @param {(string|object|function)} eventName - event name or context or
       *  {name: handler} pair object or handler function
       * @param {(function)} handler - handler function
       * @example
       * //-- #1. Get Module --//
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * //-- #2. Use method --//
       * // # 2.1 off by event name
       * CustomEvents.off('onload');
       *
       * // # 2.2 off by event name and handler
       * CustomEvents.off('play', handler);
       *
       * // # 2.3 off by handler
       * CustomEvents.off(handler);
       *
       * // # 2.4 off by context
       * CustomEvents.off(myObj);
       *
       * // # 2.5 off by context and handler
       * CustomEvents.off(myObj, handler);
       *
       * // # 2.6 off by context and event name
       * CustomEvents.off(myObj, 'onload');
       *
       * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
       * CustomEvents.off({
       *   'play': handler,
       *   'pause': handler2
       * });
       *
       * // # 2.8 off the all events
       * CustomEvents.off();
       */


      CustomEvents.prototype.off = function (eventName, handler) {
        if (isString(eventName)) {
          // [syntax 1, 2]
          this._offByEventName(eventName, handler);
        } else if (!arguments.length) {
          // [syntax 8]
          this.events = {};
          this.contexts = [];
        } else if (isFunction(eventName)) {
          // [syntax 3]
          this._offByHandler(eventName);
        } else if (isObject(eventName)) {
          // [syntax 4, 5, 6]
          this._offByObject(eventName, handler);
        }
      };
      /**
       * Fire custom event
       * @param {string} eventName - name of custom event
       */


      CustomEvents.prototype.fire = function (eventName) {
        // eslint-disable-line
        this.invoke.apply(this, arguments);
      };
      /**
       * Fire a event and returns the result of operation 'boolean AND' with all
       *  listener's results.
       *
       * So, It is different from {@link CustomEvents#fire}.
       *
       * In service code, use this as a before event in component level usually
       *  for notifying that the event is cancelable.
       * @param {string} eventName - Custom event name
       * @param {...*} data - Data for event
       * @returns {boolean} The result of operation 'boolean AND'
       * @example
       * var map = new Map();
       * map.on({
       *     'beforeZoom': function() {
       *         // It should cancel the 'zoom' event by some conditions.
       *         if (that.disabled && this.getState()) {
       *             return false;
       *         }
       *         return true;
       *     }
       * });
       *
       * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
       *     // if true,
       *     // doSomething
       * }
       */


      CustomEvents.prototype.invoke = function (eventName) {
        var events, args, index, item;

        if (!this.hasListener(eventName)) {
          return true;
        }

        events = this._safeEvent(eventName);
        args = Array.prototype.slice.call(arguments, 1);
        index = 0;

        while (events[index]) {
          item = events[index];

          if (item.handler.apply(item.context, args) === false) {
            return false;
          }

          index += 1;
        }

        return true;
      };
      /**
       * Return whether at least one of the handlers is registered in the given
       *  event name.
       * @param {string} eventName - Custom event name
       * @returns {boolean} Is there at least one handler in event name?
       */


      CustomEvents.prototype.hasListener = function (eventName) {
        return this.getListenerLength(eventName) > 0;
      };
      /**
       * Return a count of events registered.
       * @param {string} eventName - Custom event name
       * @returns {number} number of event
       */


      CustomEvents.prototype.getListenerLength = function (eventName) {
        var events = this._safeEvent(eventName);

        return events.length;
      };

      module.exports = CustomEvents;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __nested_webpack_require_42840__) {
      "use strict";
      /**
       * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isArray = __nested_webpack_require_42840__(6);

      var forEachArray = __nested_webpack_require_42840__(2);

      var forEachOwnProperties = __nested_webpack_require_42840__(23);
      /**
       * @module collection
       */

      /**
       * Execute the provided callback once for each property of object(or element of array) which actually exist.
       * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the property(or The value of the element)
       *  2) The name of the property(or The index of the element)
       *  3) The object being traversed
       * @param {Object} obj The object that will be traversed
       * @param {function} iteratee Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEach([1,2,3], function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       *
       * // In case of Array-like object
       * var array = Array.prototype.slice.call(arrayLike); // change to array
       * forEach(array, function(value){
       *     sum += value;
       * });
       */


      function forEach(obj, iteratee, context) {
        if (isArray(obj)) {
          forEachArray(obj, iteratee, context);
        } else {
          forEachOwnProperties(obj, iteratee, context);
        }
      }

      module.exports = forEach;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Default locale texts
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      module.exports = {
        en: {
          titles: {
            DD: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            D: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          },
          titleFormat: 'MMMM yyyy',
          todayFormat: 'To\\d\\ay: DD, MMMM d, yyyy',
          time: 'Time',
          date: 'Date'
        },
        ko: {
          titles: {
            DD: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            D: ['일', '월', '화', '수', '목', '금', '토'],
            MMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            MMMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
          },
          titleFormat: 'yyyy.MM',
          todayFormat: '오늘: yyyy.MM.dd (D)',
          date: '날짜',
          time: '시간'
        }
      };
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __nested_webpack_require_46258__) {
      "use strict";
      /**
       * @fileoverview Convert text by binding expressions with context.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_46258__(3);

      var forEach = __nested_webpack_require_46258__(9);

      var isArray = __nested_webpack_require_46258__(6);

      var isString = __nested_webpack_require_46258__(13);

      var extend = __nested_webpack_require_46258__(7); // IE8 does not support capture groups.


      var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
      var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
      var BRACKET_REGEXP = /\[\s?|\s?\]/;
      var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
      var DOT_REGEXP = /\./;
      var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
      var STRING_REGEXP = /"|'/g;
      var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
      var EXPRESSION_INTERVAL = 2;
      var BLOCK_HELPERS = {
        'if': handleIf,
        'each': handleEach,
        'with': handleWith
      };
      var isValidSplit = 'a'.split(/a/).length === 3;
      /**
       * Split by RegExp. (Polyfill for IE8)
       * @param {string} text - text to be splitted\
       * @param {RegExp} regexp - regular expression
       * @returns {Array.<string>}
       */

      var splitByRegExp = function () {
        if (isValidSplit) {
          return function (text, regexp) {
            return text.split(regexp);
          };
        }

        return function (text, regexp) {
          var result = [];
          var prevIndex = 0;
          var match, index;

          if (!regexp.global) {
            regexp = new RegExp(regexp, 'g');
          }

          match = regexp.exec(text);

          while (match !== null) {
            index = match.index;
            result.push(text.slice(prevIndex, index));
            prevIndex = index + match[0].length;
            match = regexp.exec(text);
          }

          result.push(text.slice(prevIndex));
          return result;
        };
      }();
      /**
       * Find value in the context by an expression.
       * @param {string} exp - an expression
       * @param {object} context - context
       * @returns {*}
       * @private
       */
      // eslint-disable-next-line complexity


      function getValueFromContext(exp, context) {
        var splitedExps;
        var value = context[exp];

        if (exp === 'true') {
          value = true;
        } else if (exp === 'false') {
          value = false;
        } else if (STRING_NOTATION_REGEXP.test(exp)) {
          value = exp.replace(STRING_REGEXP, '');
        } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
          splitedExps = exp.split(BRACKET_REGEXP);
          value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
        } else if (DOT_NOTATION_REGEXP.test(exp)) {
          splitedExps = exp.split(DOT_REGEXP);
          value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
        } else if (NUMBER_REGEXP.test(exp)) {
          value = parseFloat(exp);
        }

        return value;
      }
      /**
       * Extract elseif and else expressions.
       * @param {Array.<string>} ifExps - args of if expression
       * @param {Array.<string>} sourcesInsideBlock - sources inside if block
       * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
       * @private
       */


      function extractElseif(ifExps, sourcesInsideBlock) {
        var exps = [ifExps];
        var sourcesInsideIf = [];
        var otherIfCount = 0;
        var start = 0; // eslint-disable-next-line complexity

        forEach(sourcesInsideBlock, function (source, index) {
          if (source.indexOf('if') === 0) {
            otherIfCount += 1;
          } else if (source === '/if') {
            otherIfCount -= 1;
          } else if (!otherIfCount && (source.indexOf('elseif') === 0 || source === 'else')) {
            exps.push(source === 'else' ? ['true'] : source.split(' ').slice(1));
            sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
            start = index + 1;
          }
        });
        sourcesInsideIf.push(sourcesInsideBlock.slice(start));
        return {
          exps: exps,
          sourcesInsideIf: sourcesInsideIf
        };
      }
      /**
       * Helper function for "if". 
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleIf(exps, sourcesInsideBlock, context) {
        var analyzed = extractElseif(exps, sourcesInsideBlock);
        var result = false;
        var compiledSource = '';
        forEach(analyzed.exps, function (exp, index) {
          result = handleExpression(exp, context);

          if (result) {
            compiledSource = compile(analyzed.sourcesInsideIf[index], context);
          }

          return !result;
        });
        return compiledSource;
      }
      /**
       * Helper function for "each".
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleEach(exps, sourcesInsideBlock, context) {
        var collection = handleExpression(exps, context);
        var additionalKey = isArray(collection) ? '@index' : '@key';
        var additionalContext = {};
        var result = '';
        forEach(collection, function (item, key) {
          additionalContext[additionalKey] = key;
          additionalContext['@this'] = item;
          extend(context, additionalContext);
          result += compile(sourcesInsideBlock.slice(), context);
        });
        return result;
      }
      /**
       * Helper function for "with ... as"
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleWith(exps, sourcesInsideBlock, context) {
        var asIndex = inArray('as', exps);
        var alias = exps[asIndex + 1];
        var result = handleExpression(exps.slice(0, asIndex), context);
        var additionalContext = {};
        additionalContext[alias] = result;
        return compile(sourcesInsideBlock, extend(context, additionalContext)) || '';
      }
      /**
       * Extract sources inside block in place.
       * @param {Array.<string>} sources - array of sources
       * @param {number} start - index of start block
       * @param {number} end - index of end block
       * @returns {Array.<string>}
       * @private
       */


      function extractSourcesInsideBlock(sources, start, end) {
        var sourcesInsideBlock = sources.splice(start + 1, end - start);
        sourcesInsideBlock.pop();
        return sourcesInsideBlock;
      }
      /**
       * Handle block helper function
       * @param {string} helperKeyword - helper keyword (ex. if, each, with)
       * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
       * @param {object} context - context
       * @returns {Array.<string>}
       * @private
       */


      function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
        var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
        var helperCount = 1;
        var startBlockIndex = 0;
        var endBlockIndex;
        var index = startBlockIndex + EXPRESSION_INTERVAL;
        var expression = sourcesToEnd[index];

        while (helperCount && isString(expression)) {
          if (expression.indexOf(helperKeyword) === 0) {
            helperCount += 1;
          } else if (expression.indexOf('/' + helperKeyword) === 0) {
            helperCount -= 1;
            endBlockIndex = index;
          }

          index += EXPRESSION_INTERVAL;
          expression = sourcesToEnd[index];
        }

        if (helperCount) {
          throw Error(helperKeyword + ' needs {{/' + helperKeyword + '}} expression.');
        }

        sourcesToEnd[startBlockIndex] = executeBlockHelper(sourcesToEnd[startBlockIndex].split(' ').slice(1), extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex), context);
        return sourcesToEnd;
      }
      /**
       * Helper function for "custom helper".
       * If helper is not a function, return helper itself.
       * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleExpression(exps, context) {
        var result = getValueFromContext(exps[0], context);

        if (result instanceof Function) {
          return executeFunction(result, exps.slice(1), context);
        }

        return result;
      }
      /**
       * Execute a helper function.
       * @param {Function} helper - helper function
       * @param {Array.<string>} argExps - expressions of arguments
       * @param {object} context - context
       * @returns {string} - result of executing the function with arguments
       * @private
       */


      function executeFunction(helper, argExps, context) {
        var args = [];
        forEach(argExps, function (exp) {
          args.push(getValueFromContext(exp, context));
        });
        return helper.apply(null, args);
      }
      /**
       * Get a result of compiling an expression with the context.
       * @param {Array.<string>} sources - array of sources split by regexp of expression.
       * @param {object} context - context
       * @returns {Array.<string>} - array of sources that bind with its context
       * @private
       */


      function compile(sources, context) {
        var index = 1;
        var expression = sources[index];
        var exps, firstExp, result;

        while (isString(expression)) {
          exps = expression.split(' ');
          firstExp = exps[0];

          if (BLOCK_HELPERS[firstExp]) {
            result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
            sources = sources.concat(result);
          } else {
            sources[index] = handleExpression(exps, context);
          }

          index += EXPRESSION_INTERVAL;
          expression = sources[index];
        }

        return sources.join('');
      }
      /**
       * Convert text by binding expressions with context.
       * <br>
       * If expression exists in the context, it will be replaced.
       * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
       * An array or object can be accessed using bracket and dot notation.
       * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
       * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
       * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
       * <br>
       * If replaced expression is a function, next expressions will be arguments of the function.
       * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
       * <br>
       * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
       * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
       * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
       * 3) 'with ... as ...' provides an alias.
       * @param {string} text - text with expressions
       * @param {object} context - context
       * @returns {string} - text that bind with its context
       * @memberof module:domUtil
       * @example
       * var template = require('tui-code-snippet/domUtil/template');
       * 
       * var source = 
       *     '<h1>'
       *   +   '{{if isValidNumber title}}'
       *   +     '{{title}}th'
       *   +   '{{elseif isValidDate title}}'
       *   +     'Date: {{title}}'
       *   +   '{{/if}}'
       *   + '</h1>'
       *   + '{{each list}}'
       *   +   '{{with addOne @index as idx}}'
       *   +     '<p>{{idx}}: {{@this}}</p>'
       *   +   '{{/with}}'
       *   + '{{/each}}';
       * 
       * var context = {
       *   isValidDate: function(text) {
       *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
       *   },
       *   isValidNumber: function(text) {
       *     return /^\d+$/.test(text);
       *   }
       *   title: '2019-11-25',
       *   list: ['Clean the room', 'Wash the dishes'],
       *   addOne: function(num) {
       *     return num + 1;
       *   }
       * };
       * 
       * var result = template(source, context);
       * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
       */


      function template(text, context) {
        return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
      }

      module.exports = template;
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is undefined or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is undefined or not.
       * If the given variable is undefined, returns true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is undefined?
       * @memberof module:type
       */

      function isUndefined(obj) {
        return obj === undefined; // eslint-disable-line no-undefined
      }

      module.exports = isUndefined;
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a string or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a string or not.
       * If the given variable is a string, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is string?
       * @memberof module:type
       */

      function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
      }

      module.exports = isString;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Remove element from parent node.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Remove element from parent node.
       * @param {HTMLElement} element - element to remove.
       * @memberof module:domUtil
       */

      function removeElement(element) {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }

      module.exports = removeElement;
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a number or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a number or not.
       * If the given variable is a number, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is number?
       * @memberof module:type
       */

      function isNumber(obj) {
        return typeof obj === 'number' || obj instanceof Number;
      }

      module.exports = isNumber;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __nested_webpack_require_62431__) {
      "use strict";
      /**
       * @fileoverview Add css class to element
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEach = __nested_webpack_require_62431__(9);

      var inArray = __nested_webpack_require_62431__(3);

      var getClass = __nested_webpack_require_62431__(17);

      var setClassName = __nested_webpack_require_62431__(24);
      /**
       * domUtil module
       * @module domUtil
       */

      /**
       * Add css class to element
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {...string} cssClass - css classes to add
       * @memberof module:domUtil
       */


      function addClass(element) {
        var cssClass = Array.prototype.slice.call(arguments, 1);
        var classList = element.classList;
        var newClass = [];
        var origin;

        if (classList) {
          forEach(cssClass, function (name) {
            element.classList.add(name);
          });
          return;
        }

        origin = getClass(element);

        if (origin) {
          cssClass = [].concat(origin.split(/\s+/), cssClass);
        }

        forEach(cssClass, function (cls) {
          if (inArray(cls, newClass) < 0) {
            newClass.push(cls);
          }
        });
        setClassName(element, newClass);
      }

      module.exports = addClass;
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __nested_webpack_require_63859__) {
      "use strict";
      /**
       * @fileoverview Get HTML element's design classes.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isUndefined = __nested_webpack_require_63859__(12);
      /**
       * Get HTML element's design classes.
       * @param {(HTMLElement|SVGElement)} element target element
       * @returns {string} element css class name
       * @memberof module:domUtil
       */


      function getClass(element) {
        if (!element || !element.className) {
          return '';
        }

        if (isUndefined(element.className.baseVal)) {
          return element.className;
        }

        return element.className.baseVal;
      }

      module.exports = getClass;
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __nested_webpack_require_64682__) {
      "use strict";
      /**
       * @fileoverview Remove css class from element
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_64682__(2);

      var inArray = __nested_webpack_require_64682__(3);

      var getClass = __nested_webpack_require_64682__(17);

      var setClassName = __nested_webpack_require_64682__(24);
      /**
       * Remove css class from element
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {...string} cssClass - css classes to remove
       * @memberof module:domUtil
       */


      function removeClass(element) {
        var cssClass = Array.prototype.slice.call(arguments, 1);
        var classList = element.classList;
        var origin, newClass;

        if (classList) {
          forEachArray(cssClass, function (name) {
            classList.remove(name);
          });
          return;
        }

        origin = getClass(element).split(/\s+/);
        newClass = [];
        forEachArray(origin, function (name) {
          if (inArray(name, cssClass) < 0) {
            newClass.push(name);
          }
        });
        setClassName(element, newClass);
      }

      module.exports = removeClass;
      /***/
    },
    /* 19 */

    /***/
    function (module, exports, __nested_webpack_require_65992__) {
      "use strict";
      /**
       * @fileoverview Set mouse-touch event
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var _on = __nested_webpack_require_65992__(31);

      var _off = __nested_webpack_require_65992__(33);

      var mouseTouchEvent = {
        /**
         * Detect mobile browser
         * @type {boolean} Whether using Mobile browser
         * @private
         */
        _isMobile: function () {
          return /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
        }(),

        /**
         * Return a matched event type by a mouse event type
         * @param {string} type A mouse event type - mousedown, click
         * @returns {string}
         * @private
         */
        _getEventType: function _getEventType(type) {
          if (this._isMobile) {
            if (type === 'mousedown') {
              type = 'touchstart';
            } else if (type === 'click') {
              type = 'touchend';
            }
          }

          return type;
        },

        /**
         * Bind touch or mouse events
         * @param {HTMLElement} element An element to bind
         * @param {string} type A mouse event type - mousedown, click
         * @param {Function} handler A handler function
         * @param {object} [context] A context for handler.
         */
        on: function on(element, type, handler, context) {
          _on(element, this._getEventType(type), handler, context);
        },

        /**
         * Unbind touch or mouse events
         * @param {HTMLElement} element - Target element
         * @param {string} type A mouse event type - mousedown, click
         * @param {Function} handler - Handler
         */
        off: function off(element, type, handler) {
          _off(element, this._getEventType(type), handler);
        }
      };
      module.exports = mouseTouchEvent;
      /***/
    },
    /* 20 */

    /***/
    function (module, exports, __nested_webpack_require_68006__) {
      "use strict";
      /**
       * @fileoverview Layer base
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_68006__(0);

      var removeElement = __nested_webpack_require_68006__(14);

      var localeText = __nested_webpack_require_68006__(10);

      var DEFAULT_LANGUAGE_TYPE = __nested_webpack_require_68006__(1).DEFAULT_LANGUAGE_TYPE;
      /**
       * @abstract
       * @class
       * @ignore
       * @param {string} language - Initial language
       * Layer base
       */


      var LayerBase = defineClass(
      /** @lends LayerBase.prototype */
      {
        init: function init(language) {
          language = language || DEFAULT_LANGUAGE_TYPE;
          /**
           * Layer element
           * @type {HTMLElement}
           * @private
           */

          this._element = null;
          /**
           * Language type
           * @type {string}
           * @private
           */

          this._localeText = localeText[language];
          /**
           * Layer type
           * @type {string}
           * @private
           */

          this._type = 'base';
        },

        /**
         * Make context
         * @abstract
         * @throws {Error}
         * @returns {object}
         * @private
         */
        _makeContext: function _makeContext() {
          throwOverrideError(this.getType(), '_makeContext');
        },

        /**
         * Render the layer element
         * @abstract
         * @throws {Error}
         */
        render: function render() {
          throwOverrideError(this.getType(), 'render');
        },

        /**
         * Returns date elements
         * @abstract
         * @throws {Error}
         * @returns {HTMLElement[]}
         */
        getDateElements: function getDateElements() {
          throwOverrideError(this.getType(), 'getDateElements');
        },

        /**
         * Returns layer type
         * @returns {string}
         */
        getType: function getType() {
          return this._type;
        },

        /**
         * Set language
         * @param {string} language - Language name
         */
        changeLanguage: function changeLanguage(language) {
          this._localeText = localeText[language];
        },

        /**
         * Remove elements
         */
        remove: function remove() {
          if (this._element) {
            removeElement(this._element);
          }

          this._element = null;
        }
      });
      /**
       * Throw - method override error
       * @ignore
       * @param {string} layerType - Layer type
       * @param {string} methodName - Method name
       * @throws {Error}
       */

      function throwOverrideError(layerType, methodName) {
        throw new Error(layerType + ' layer does not have the "' + methodName + '" method.');
      }

      module.exports = LayerBase;
      /***/
    },
    /* 21 */

    /***/
    function (module, exports, __nested_webpack_require_71002__) {
      "use strict";
      /**
       * @fileoverview DatePicker component
       * @author NHN. FE dev Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_71002__(3);

      var forEachArray = __nested_webpack_require_71002__(2);

      var defineClass = __nested_webpack_require_71002__(0);

      var CustomEvents = __nested_webpack_require_71002__(8);

      var addClass = __nested_webpack_require_71002__(16);

      var closest = __nested_webpack_require_71002__(25);

      var getData = __nested_webpack_require_71002__(26);

      var hasClass = __nested_webpack_require_71002__(27);

      var removeClass = __nested_webpack_require_71002__(18);

      var removeElement = __nested_webpack_require_71002__(14);

      var extend = __nested_webpack_require_71002__(7);

      var isArray = __nested_webpack_require_71002__(6);

      var isDate = __nested_webpack_require_71002__(28);

      var isNumber = __nested_webpack_require_71002__(15);

      var isObject = __nested_webpack_require_71002__(22);

      var TimePicker = __nested_webpack_require_71002__(43);

      var Calendar = __nested_webpack_require_71002__(29);

      var RangeModel = __nested_webpack_require_71002__(56);

      var constants = __nested_webpack_require_71002__(1);

      var localeTexts = __nested_webpack_require_71002__(10);

      var dateUtil = __nested_webpack_require_71002__(5);

      var util = __nested_webpack_require_71002__(4);

      var mouseTouchEvent = __nested_webpack_require_71002__(19);

      var tmpl = __nested_webpack_require_71002__(58);

      var DatePickerInput = __nested_webpack_require_71002__(59);

      var DEFAULT_WEEK_START_DAY = constants.DEFAULT_WEEK_START_DAY;
      var DEFAULT_LANGUAGE_TYPE = constants.DEFAULT_LANGUAGE_TYPE;
      var TYPE_DATE = constants.TYPE_DATE;
      var TYPE_MONTH = constants.TYPE_MONTH;
      var TYPE_YEAR = constants.TYPE_YEAR;
      var CLASS_NAME_NEXT_YEAR_BTN = constants.CLASS_NAME_NEXT_YEAR_BTN;
      var CLASS_NAME_NEXT_MONTH_BTN = constants.CLASS_NAME_NEXT_MONTH_BTN;
      var CLASS_NAME_PREV_YEAR_BTN = constants.CLASS_NAME_PREV_YEAR_BTN;
      var CLASS_NAME_PREV_MONTH_BTN = constants.CLASS_NAME_PREV_MONTH_BTN;
      var CLASS_NAME_SELECTED = constants.CLASS_NAME_SELECTED;
      var CLASS_NAME_TITLE_TODAY = constants.CLASS_NAME_TITLE_TODAY;
      var CLASS_NAME_SELECTABLE = 'tui-is-selectable';
      var CLASS_NAME_BLOCKED = 'tui-is-blocked';
      var CLASS_NAME_CHECKED = 'tui-is-checked';
      var CLASS_NAME_SELECTOR_BUTTON = 'tui-datepicker-selector-button';
      var CLASS_NAME_TODAY = 'tui-calendar-today';
      var CLASS_NAME_HIDDEN = 'tui-hidden';
      var SELECTOR_BODY = '.tui-datepicker-body';
      var SELECTOR_DATE_ICO = '.tui-ico-date';
      var SELECTOR_CALENDAR_TITLE = '.tui-calendar-title';
      var SELECTOR_CALENDAR_CONTAINER = '.tui-calendar-container';
      var SELECTOR_TIMEPICKER_CONTAINER = '.tui-timepicker-container';
      /**
       * Merge default option
       * @ignore
       * @param {object} option - DatePicker option
       * @returns {object}
       */

      var mergeDefaultOption = function mergeDefaultOption(option) {
        option = extend({
          language: DEFAULT_LANGUAGE_TYPE,
          calendar: {},
          input: {
            element: null,
            format: null
          },
          timePicker: null,
          date: null,
          showAlways: false,
          type: TYPE_DATE,
          selectableRanges: null,
          openers: [],
          autoClose: true,
          usageStatistics: true,
          weekStartDay: DEFAULT_WEEK_START_DAY
        }, option);
        option.selectableRanges = option.selectableRanges || [[constants.MIN_DATE, constants.MAX_DATE]];

        if (!isObject(option.calendar)) {
          throw new Error('Calendar option must be an object');
        }

        if (!isObject(option.input)) {
          throw new Error('Input option must be an object');
        }

        if (!isArray(option.selectableRanges)) {
          throw new Error('Selectable-ranges must be a 2d-array');
        }

        option.localeText = localeTexts[option.language]; // override calendar option

        option.calendar.language = option.language;
        option.calendar.type = option.type; // @TODO: after v5.0.0, remove option.timepicker

        option.timePicker = option.timePicker || option.timepicker;
        return option;
      };
      /**
       * @class
       * @description
       * Create a date picker.
       * @see {@link /tutorial-example01-basic DatePicker example}
       * @param {HTMLElement|string} container - Container element or selector of DatePicker
       * @param {Object} [options] - Options
       *      @param {Date|number} [options.date = null] - Initial date. Set by a Date instance or a number(timestamp). (default: no initial date)
       *      @param {('date'|'month'|'year')} [options.type = 'date'] - DatePicker type. Determine whether to choose a date, month, or year.
       *      @param {string} [options.language='en'] - Language code. English('en') and Korean('ko') are provided as default. To set to the other languages, use {@link DatePicker#localeTexts DatePicker.localeTexts}.
       *      @param {object|boolean} [options.timePicker] - [TimePicker](https://nhn.github.io/tui.time-picker/latest) options. Refer to the [TimePicker instance's options](https://nhn.github.io/tui.time-picker/latest/TimePicker). To create the TimePicker without customization, set to true.
       *      @param {object} [options.calendar] - {@link Calendar} options. Refer to the {@link Calendar Calendar instance's options}.
       *      @param {object} [options.input] - Input option
       *      @param {HTMLElement|string} [options.input.element] - Input element or selector
       *      @param {string} [options.input.format = 'yyyy-mm-dd'] - Format of the Date string
       *      @param {Array.<Array.<Date|number>>} [options.selectableRanges = 1900/1/1 ~ 2999/12/31]
       *        - Ranges of selectable date. Set by Date instances or numbers(timestamp).
       *      @param {Array<HTMLElement|string>} [options.openers = []] - List of the openers to open the DatePicker (example - icon, button, etc.)
       *      @param {boolean} [options.showAlways = false] - Show the DatePicker always
       *      @param {boolean} [options.autoClose = true] - Close the DatePicker after clicking the date
       *      @param {boolean} [options.usageStatistics = true] - Send a hostname to Google Analytics (default: true)
       *      @param {string} [options.weekStartDay = 'Sun'] - Start of the week. 'Sun', 'Mon', ..., 'Sat'(default: 'Sun'(start on Sunday))
       * @example
       * // ES6
       * import DatePicker from 'tui-date-picker'
       *
       * // CommonJS
       * const DatePicker = require('tui-date-picker');
       *
       * // Browser
       * const DatePicker = tui.DatePicker;
       *
       * const range1 = [new Date(2015, 2, 1), new Date(2015, 3, 1)];
       * const range2 = [1465570800000, 1481266182155]; // timestamps
       *
       * const picker1 = new DatePicker('#datepicker-container1', {
       *     showAlways: true
       * });
       *
       * const picker2 = new DatePicker('#datepicker-container2', {
       *    showAlways: true,
       *    timePicker: true
       * });
       *
       * const picker3 = new DatePicker('#datepicker-container3', {
       *     language: 'ko',
       *     calendar: {
       *         showToday: true
       *     },
       *     timePicker: {
       *         showMeridiem: true,
       *         defaultHour: 13,
       *         defaultMinute: 24
       *     },
       *     input: {
       *         element: '#datepicker-input',
       *         format: 'yyyy년 MM월 dd일 hh:mm A'
       *     }
       *     type: 'date',
       *     date: new Date(2015, 0, 1)
       *     selectableRanges: [range1, range2],
       *     openers: ['#opener'],
       *     weekStartDay: 'Mon',
       * });
       */


      var DatePicker = defineClass(
      /** @lends DatePicker.prototype */
      {
        "static": {
          /**
           * Locale text data. English('en') and Korean('ko') are provided as default.
           * @type {object}
           * @memberof DatePicker
           * @static
           * @example
           * DatePicker.localeTexts['customKey'] = {
           *     titles: {
           *         // days
           *         DD: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
           *         // daysShort
           *         D: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
           *         // months
           *         MMMM: [
           *             'January', 'February', 'March', 'April', 'May', 'June',
           *             'July', 'August', 'September', 'October', 'November', 'December'
           *         ],
           *         // monthsShort
           *         MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
           *     },
           *     titleFormat: 'MMM yyyy',
           *     todayFormat: 'D, MMMM dd, yyyy',
           *     date: 'Date',
           *     time: 'Time'
           * };
           *
           * const datepicker = new DatePicker('#datepicker-container', {
           *     language: 'customKey'
           * });
           */
          localeTexts: localeTexts
        },
        init: function init(container, options) {
          options = mergeDefaultOption(options);
          /**
           * Language type
           * @type {string}
           * @private
           */

          this._language = options.language;
          /**
           * DatePicker container
           * @type {HTMLElement}
           * @private
           */

          this._container = util.getElement(container);
          this._container.innerHTML = tmpl(extend(options, {
            isTab: options.timePicker && options.timePicker.layoutType === 'tab'
          }));
          /**
           * DatePicker element
           * @type {HTMLElement}
           * @private
           */

          this._element = this._container.firstChild;
          /**
           * Calendar instance
           * @type {Calendar}
           * @private
           */

          this._calendar = new Calendar(this._element.querySelector(SELECTOR_CALENDAR_CONTAINER), extend(options.calendar, {
            usageStatistics: options.usageStatistics,
            weekStartDay: options.weekStartDay
          }));
          /**
           * TimePicker instance
           * @type {TimePicker}
           * @private
           */

          this._timePicker = null;
          /**
           * DatePicker input
           * @type {DatePickerInput}
           * @private
           */

          this._datepickerInput = null;
          /**
           * Object having date values
           * @type {Date}
           * @private
           */

          this._date = null;
          /**
           * Selectable date-ranges model
           * @type {RangeModel}
           * @private
           */

          this._rangeModel = null;
          /**
           * openers - opener list
           * @type {Array}
           * @private
           */

          this._openers = [];
          /**
           * State of picker enable
           * @type {boolean}
           * @private
           */

          this._isEnabled = true;
          /**
           * ID of instance
           * @type {number}
           * @private
           */

          this._id = 'tui-datepicker-' + util.generateId();
          /**
           * DatePicker type
           * @type {TYPE_DATE|TYPE_MONTH|TYPE_YEAR}
           * @private
           */

          this._type = options.type;
          /**
           * Show always or not
           * @type {boolean}
           */

          this.showAlways = options.showAlways;
          /**
           * Close after select a date
           * @type {boolean}
           */

          this.autoClose = options.autoClose;

          this._initializeDatePicker(options);
        },

        /**
         * Initialize method
         * @param {Object} option - user option
         * @private
         */
        _initializeDatePicker: function _initializeDatePicker(option) {
          this.setRanges(option.selectableRanges);

          this._setEvents();

          this._initTimePicker(option.timePicker, option.usageStatistics);

          this.setInput(option.input.element);
          this.setDateFormat(option.input.format);
          this.setDate(option.date);
          forEachArray(option.openers, this.addOpener, this);

          if (!this.showAlways) {
            this._hide();
          }

          if (this.getType() === TYPE_DATE) {
            addClass(this._element.querySelector(SELECTOR_BODY), 'tui-datepicker-type-date');
          }
        },

        /**
         * Set events on the date picker's element
         * @param {object} option - Constructor option
         * @private
         */
        _setEvents: function _setEvents() {
          mouseTouchEvent.on(this._element, 'click', this._onClickHandler, this);

          this._calendar.on('draw', this._onDrawCalendar, this);
        },

        /**
         * Remove events on the date picker's element
         * @private
         */
        _removeEvents: function _removeEvents() {
          mouseTouchEvent.off(this._element, 'click', this._onClickHandler, this);

          this._calendar.off();
        },

        /**
         * Set events on the document
         * @private
         */
        _setDocumentEvents: function _setDocumentEvents() {
          mouseTouchEvent.on(document, 'mousedown', this._onMousedownDocument, this);
        },

        /**
         * Remove events on the document
         * @private
         */
        _removeDocumentEvents: function _removeDocumentEvents() {
          mouseTouchEvent.off(document, 'mousedown', this._onMousedownDocument);
        },

        /**
         * Set events on the opener
         * @param {HTMLElement} opener An opener to bind the events
         * @private
         */
        _setOpenerEvents: function _setOpenerEvents(opener) {
          mouseTouchEvent.on(opener, 'click', this.toggle, this);
        },

        /**
         * Remove events on the opener
         * @param {HTMLElement} opener An opener to unbind the events
         * @private
         */
        _removeOpenerEvents: function _removeOpenerEvents(opener) {
          mouseTouchEvent.off(opener, 'click', this.toggle);
        },

        /**
         * Set TimePicker instance
         * @param {object|boolean} opTimePicker - TimePicker instance options
         * @param {boolean} usageStatistics - GA tracking options
         * @private
         */
        _initTimePicker: function _initTimePicker(opTimePicker, usageStatistics) {
          var layoutType;

          if (!opTimePicker) {
            return;
          }

          layoutType = opTimePicker.layoutType || '';

          if (isObject(opTimePicker)) {
            opTimePicker.usageStatistics = usageStatistics;
          } else {
            opTimePicker = {
              usageStatistics: usageStatistics
            };
          }

          this._timePicker = new TimePicker(this._element.querySelector(SELECTOR_TIMEPICKER_CONTAINER), opTimePicker);

          if (layoutType.toLowerCase() === 'tab') {
            this._timePicker.hide();
          }

          this._timePicker.on('change', function (ev) {
            var prevDate;

            if (this._date) {
              prevDate = new Date(this._date);
              this.setDate(prevDate.setHours(ev.hour, ev.minute));
            }
          }, this);
        },

        /**
         * Change picker's type by a selector button.
         * @param {HTMLElement} target A target element
         * @private
         */
        _changePicker: function _changePicker(target) {
          var btnSelector = '.' + CLASS_NAME_SELECTOR_BUTTON;
          var selectedBtn = closest(target, btnSelector);
          var isDateElement = !!selectedBtn.querySelector(SELECTOR_DATE_ICO);

          if (isDateElement) {
            this._calendar.show();

            this._timePicker.hide();
          } else {
            this._calendar.hide();

            this._timePicker.show();
          }

          removeClass(this._element.querySelector('.' + CLASS_NAME_CHECKED), CLASS_NAME_CHECKED);
          addClass(selectedBtn, CLASS_NAME_CHECKED);
        },

        /**
         * Returns whether the element is opener
         * @param {string|HTMLElement} element - Element or selector
         * @returns {boolean}
         * @private
         */
        _isOpener: function _isOpener(element) {
          var el = util.getElement(element);
          return inArray(el, this._openers) > -1;
        },

        /**
         * add/remove today-class-name to date element
         * @param {HTMLElement} el - date element
         * @private
         */
        _setTodayClassName: function _setTodayClassName(el) {
          var timestamp, isToday;

          if (this.getCalendarType() !== TYPE_DATE) {
            return;
          }

          timestamp = Number(getData(el, 'timestamp'));
          isToday = timestamp === new Date().setHours(0, 0, 0, 0);

          if (isToday) {
            addClass(el, CLASS_NAME_TODAY);
          } else {
            removeClass(el, CLASS_NAME_TODAY);
          }
        },

        /**
         * add/remove selectable-class-name to date element
         * @param {HTMLElement} el - date element
         * @private
         */
        _setSelectableClassName: function _setSelectableClassName(el) {
          var elDate = new Date(Number(getData(el, 'timestamp')));

          if (this._isSelectableOnCalendar(elDate)) {
            addClass(el, CLASS_NAME_SELECTABLE);
            removeClass(el, CLASS_NAME_BLOCKED);
          } else {
            removeClass(el, CLASS_NAME_SELECTABLE);
            addClass(el, CLASS_NAME_BLOCKED);
          }
        },

        /**
         * add/remove selected-class-name to date element
         * @param {HTMLElement} el - date element
         * @private
         */
        _setSelectedClassName: function _setSelectedClassName(el) {
          var elDate = new Date(Number(getData(el, 'timestamp')));

          if (this._isSelectedOnCalendar(elDate)) {
            addClass(el, CLASS_NAME_SELECTED);
          } else {
            removeClass(el, CLASS_NAME_SELECTED);
          }
        },

        /**
         * Returns whether the date is selectable on calendar
         * @param {Date} date - Date instance
         * @returns {boolean}
         * @private
         */
        _isSelectableOnCalendar: function _isSelectableOnCalendar(date) {
          var type = this.getCalendarType();
          var start = dateUtil.cloneWithStartOf(date, type).getTime();
          var end = dateUtil.cloneWithEndOf(date, type).getTime();
          return this._rangeModel.hasOverlap(start, end);
        },

        /**
         * Returns whether the date is selected on calendar
         * @param {Date} date - Date instance
         * @returns {boolean}
         * @private
         */
        _isSelectedOnCalendar: function _isSelectedOnCalendar(date) {
          var curDate = this.getDate();
          var calendarType = this.getCalendarType();
          return curDate && dateUtil.isSame(curDate, date, calendarType);
        },

        /**
         * Show the date picker element
         * @private
         */
        _show: function _show() {
          removeClass(this._element, CLASS_NAME_HIDDEN);
        },

        /**
         * Hide the date picker element
         * @private
         */
        _hide: function _hide() {
          addClass(this._element, CLASS_NAME_HIDDEN);
        },

        /**
         * Set value a date-string of current this instance to input element
         * @private
         */
        _syncToInput: function _syncToInput() {
          if (!this._date) {
            return;
          }

          this._datepickerInput.setDate(this._date);
        },

        /**
         * Set date from input value
         * @param {boolean} [shouldRollback = false] - Should rollback from unselectable or error
         * @private
         */
        _syncFromInput: function _syncFromInput(shouldRollback) {
          var isFailed = false;
          var date;

          try {
            date = this._datepickerInput.getDate();

            if (this.isSelectable(date)) {
              if (this._timePicker) {
                this._timePicker.setTime(date.getHours(), date.getMinutes());
              }

              this.setDate(date);
            } else {
              isFailed = true;
            }
          } catch (err) {
            this.fire('error', {
              type: 'ParsingError',
              message: err.message
            });
            isFailed = true;
          } finally {
            if (isFailed) {
              if (shouldRollback) {
                this._syncToInput();
              } else {
                this.setNull();
              }
            }
          }
        },

        /**
         * Event handler for mousedown of document<br>
         * - When click the out of layer, close the layer
         * @param {Event} ev - Event object
         * @private
         */
        _onMousedownDocument: function _onMousedownDocument(ev) {
          var target = util.getTarget(ev);
          var selector = util.getSelector(target);
          var isContain = selector ? this._element.querySelector(selector) : false;

          var isInput = this._datepickerInput.is(target);

          var isInOpener = inArray(target, this._openers) > -1;
          var shouldClose = !(this.showAlways || isInput || isContain || isInOpener);

          if (shouldClose) {
            this.close();
          }
        },

        /**
         * Event handler for click of calendar
         * @param {Event} ev An event object
         * @private
         */
        _onClickHandler: function _onClickHandler(ev) {
          var target = util.getTarget(ev);

          if (closest(target, '.' + CLASS_NAME_SELECTABLE)) {
            ev.preventDefault();

            this._updateDate(target);
          } else if (closest(target, '.' + CLASS_NAME_TITLE_TODAY)) {
            ev.preventDefault();

            this._updateDateToToday();
          } else if (closest(target, SELECTOR_CALENDAR_TITLE)) {
            this.drawUpperCalendar(this._date);
          } else if (closest(target, '.' + CLASS_NAME_SELECTOR_BUTTON)) {
            this._changePicker(target);
          }
        },

        /**
         * Update date to today
         * @private
         */
        _updateDateToToday: function _updateDateToToday() {
          this.setDate(Date.now());
          this.close();
        },

        /**
         * Update date from event-target
         * @param {HTMLElement} target An event target element
         * @private
         */
        _updateDate: function _updateDate(target) {
          var timestamp = Number(getData(target, 'timestamp'));
          var newDate = new Date(timestamp);
          var timePicker = this._timePicker;
          var prevDate = this._date;
          var calendarType = this.getCalendarType();
          var pickerType = this.getType();

          if (calendarType !== pickerType) {
            this.drawLowerCalendar(newDate);
          } else {
            if (timePicker) {
              newDate.setHours(timePicker.getHour(), timePicker.getMinute());
            } else if (prevDate) {
              newDate.setHours(prevDate.getHours(), prevDate.getMinutes());
            }

            this.setDate(newDate);

            if (!this.showAlways && this.autoClose) {
              this.close();
            }
          }
        },

        /**
         * Event handler for 'draw'-custom event of calendar
         * @param {Object} eventData - custom event data
         * @see {@link Calendar#draw}
         * @private
         */
        _onDrawCalendar: function _onDrawCalendar(eventData) {
          forEachArray(eventData.dateElements, function (el) {
            this._setTodayClassName(el);

            this._setSelectableClassName(el);

            this._setSelectedClassName(el);
          }, this);

          this._setDisplayHeadButtons();
          /**
           * Occur after the calendar is drawn.
           * @event DatePicker#draw
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on datepicker.on()} to bind event handlers.
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off datepicker.off()} to unbind event handlers.
           * @see Refer to {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents from tui-code-snippet} for more methods. DatePicker mixes in the methods from CustomEvents.
           * @property {Date} date - Calendar date
           * @property {('date'|'month'|'year')} type - Calendar type
           * @property {HTMLElement[]} dateElements - elements for dates
           * @example
           * // bind the 'draw' event
           * datepicker.on('draw', (event) => {
           *     console.log(`Draw the ${event.type} calendar and its date is ${event.date}.`);
           * });
           *
           * // unbind the 'draw' event
           * datepicker.off('draw');
           */


          this.fire('draw', eventData);
        },

        /**
         * Hide useless buttons (next, next-year, prev, prev-year)
         * @see Don't save buttons reference. The buttons are rerendered every "calendar.draw".
         * @private
         */
        _setDisplayHeadButtons: function _setDisplayHeadButtons() {
          var nextYearDate = this._calendar.getNextYearDate();

          var prevYearDate = this._calendar.getPrevYearDate();

          var maxTimestamp = this._rangeModel.getMaximumValue();

          var minTimestamp = this._rangeModel.getMinimumValue();

          var nextYearBtn = this._element.querySelector('.' + CLASS_NAME_NEXT_YEAR_BTN);

          var prevYearBtn = this._element.querySelector('.' + CLASS_NAME_PREV_YEAR_BTN);

          var nextMonthDate, prevMonthDate, nextMonBtn, prevMonBtn;

          if (this.getCalendarType() === TYPE_DATE) {
            nextMonthDate = dateUtil.cloneWithStartOf(this._calendar.getNextDate(), TYPE_MONTH);
            prevMonthDate = dateUtil.cloneWithEndOf(this._calendar.getPrevDate(), TYPE_MONTH);
            nextMonBtn = this._element.querySelector('.' + CLASS_NAME_NEXT_MONTH_BTN);
            prevMonBtn = this._element.querySelector('.' + CLASS_NAME_PREV_MONTH_BTN);

            this._setDisplay(nextMonBtn, nextMonthDate.getTime() <= maxTimestamp);

            this._setDisplay(prevMonBtn, prevMonthDate.getTime() >= minTimestamp);

            prevYearDate.setDate(1);
            nextYearDate.setDate(1);
          } else {
            prevYearDate.setMonth(12, 0);
            nextYearDate.setMonth(0, 1);
          }

          this._setDisplay(nextYearBtn, nextYearDate.getTime() <= maxTimestamp);

          this._setDisplay(prevYearBtn, prevYearDate.getTime() >= minTimestamp);
        },

        /**
         * Set display show/hide by condition
         * @param {HTMLElement} el - An Element
         * @param {boolean} shouldShow - Condition
         * @private
         */
        _setDisplay: function _setDisplay(el, shouldShow) {
          if (el) {
            if (shouldShow) {
              removeClass(el, CLASS_NAME_HIDDEN);
            } else {
              addClass(el, CLASS_NAME_HIDDEN);
            }
          }
        },

        /**
         * Input change handler
         * @private
         * @throws {Error}
         */
        _onChangeInput: function _onChangeInput() {
          this._syncFromInput(true);
        },

        /**
         * Returns whether the date is changed
         * @param {Date} date - Date
         * @returns {boolean}
         * @private
         */
        _isChanged: function _isChanged(date) {
          var prevDate = this.getDate();
          return !prevDate || date.getTime() !== prevDate.getTime();
        },

        /**
         * Refresh datepicker
         * @private
         */
        _refreshFromRanges: function _refreshFromRanges() {
          if (!this.isSelectable(this._date)) {
            this.setNull();
          } else {
            this._calendar.draw(); // view update

          }
        },

        /**
         * Return the current calendar's type.
         * @returns {('date'|'month'|'year')}
         */
        getCalendarType: function getCalendarType() {
          return this._calendar.getType();
        },

        /**
         * Return the date picker's type.
         * @returns {('date'|'month'|'year')}
         */
        getType: function getType() {
          return this._type;
        },

        /**
         * Return whether the date is selectable.
         * @param {Date} date - Date to check
         * @returns {boolean}
         */
        isSelectable: function isSelectable(date) {
          var type = this.getType();
          var start, end;

          if (!dateUtil.isValidDate(date)) {
            return false;
          }

          start = dateUtil.cloneWithStartOf(date, type).getTime();
          end = dateUtil.cloneWithEndOf(date, type).getTime();
          return this._rangeModel.hasOverlap(start, end);
        },

        /**
         * Return whether the date is selected.
         * @param {Date} date - Date to check
         * @returns {boolean}
         */
        isSelected: function isSelected(date) {
          return dateUtil.isValidDate(date) && dateUtil.isSame(this._date, date, this.getType());
        },

        /**
         * Set selectable ranges. Previous ranges will be removed.
         * @param {Array.<Array<Date|number>>} ranges - Selectable ranges. Use Date instances or numbers(timestamp).
         * @example
         * datepicker.setRanges([
         *     [new Date(2017, 0, 1), new Date(2018, 0, 2)],
         *     [new Date(2015, 2, 3), new Date(2016, 4, 2)]
         * ]);
         */
        setRanges: function setRanges(ranges) {
          var result = [];
          forEachArray(ranges, function (range) {
            var start = new Date(range[0]).getTime();
            var end = new Date(range[1]).getTime();
            result.push([start, end]);
          });
          this._rangeModel = new RangeModel(result);

          this._refreshFromRanges();
        },

        /**
         * Set the calendar's type.
         * @param {('date'|'month'|'year')} type - Calendar type
         * @example
         * datepicker.setType('month');
         */
        setType: function setType(type) {
          this._type = type;
        },

        /**
         * Add a selectable range. Use Date instances or numbers(timestamp).
         * @param {Date|number} start - the start date
         * @param {Date|number} end - the end date
         * @example
         * const start = new Date(2015, 1, 3);
         * const end = new Date(2015, 2, 6);
         *
         * datepicker.addRange(start, end);
         */
        addRange: function addRange(start, end) {
          start = new Date(start).getTime();
          end = new Date(end).getTime();

          this._rangeModel.add(start, end);

          this._refreshFromRanges();
        },

        /**
         * Remove a range. Use Date instances or numbers(timestamp).
         * @param {Date|number} start - the start date
         * @param {Date|number} end - the end date
         * @param {null|'date'|'month'|'year'} type - Range type. If falsy, start and end values are considered as timestamp
         * @example
         * const start = new Date(2015, 1, 3);
         * const end = new Date(2015, 2, 6);
         *
         * datepicker.removeRange(start, end);
         */
        removeRange: function removeRange(start, end, type) {
          start = new Date(start);
          end = new Date(end);

          if (type) {
            // @todo Consider time-range on timePicker
            start = dateUtil.cloneWithStartOf(start, type);
            end = dateUtil.cloneWithEndOf(end, type);
          }

          this._rangeModel.exclude(start.getTime(), end.getTime());

          this._refreshFromRanges();
        },

        /**
         * Add an opener.
         * @param {HTMLElement|string} opener - element or selector of opener
         */
        addOpener: function addOpener(opener) {
          opener = util.getElement(opener);

          if (!this._isOpener(opener)) {
            this._openers.push(opener);

            this._setOpenerEvents(opener);
          }
        },

        /**
         * Remove an opener.
         * @param {HTMLElement|string} opener - element or selector of opener
         */
        removeOpener: function removeOpener(opener) {
          var index;
          opener = util.getElement(opener);
          index = inArray(opener, this._openers);

          if (index > -1) {
            this._removeOpenerEvents(opener);

            this._openers.splice(index, 1);
          }
        },

        /**
         * Remove all openers.
         */
        removeAllOpeners: function removeAllOpeners() {
          forEachArray(this._openers, function (opener) {
            this._removeOpenerEvents(opener);
          }, this);
          this._openers = [];
        },

        /**
         * Open the date picker.
         * @example
         * datepicker.open();
         */
        open: function open() {
          if (this.isOpened() || !this._isEnabled) {
            return;
          }

          this._calendar.draw({
            date: this._date,
            type: this._type
          });

          this._show();

          if (!this.showAlways) {
            this._setDocumentEvents();
          }
          /**
           * Occur after the date picker opens.
           * @event DatePicker#open
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on datepicker.on()} to bind event handlers.
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off datepicker.off()} to unbind event handlers.
           * @see Refer to {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents from tui-code-snippet} for more methods. DatePicker mixes in the methods from CustomEvents.
           * @example
           * // bind the 'open' event
           * datepicker.on('open', () => {
           *     alert('open');
           * });
           *
           * // unbind the 'open' event
           * datepicker.off('open');
           */


          this.fire('open');
        },

        /**
         * Raise the calendar type. (date -> month -> year)
         * @param {Date} [date] - Date to set
         */
        drawUpperCalendar: function drawUpperCalendar(date) {
          var calendarType = this.getCalendarType();

          if (calendarType === TYPE_DATE) {
            this._calendar.draw({
              date: date,
              type: TYPE_MONTH
            });
          } else if (calendarType === TYPE_MONTH) {
            this._calendar.draw({
              date: date,
              type: TYPE_YEAR
            });
          }
        },

        /**
         * Lower the calendar type. (year -> month -> date)
         * @param {Date} [date] - Date to set
         */
        drawLowerCalendar: function drawLowerCalendar(date) {
          var calendarType = this.getCalendarType();
          var pickerType = this.getType();
          var isLast = calendarType === pickerType;

          if (isLast) {
            return;
          }

          if (calendarType === TYPE_MONTH) {
            this._calendar.draw({
              date: date,
              type: TYPE_DATE
            });
          } else if (calendarType === TYPE_YEAR) {
            this._calendar.draw({
              date: date,
              type: TYPE_MONTH
            });
          }
        },

        /**
         * Close the date picker.
         * @exmaple
         * datepicker.close();
         */
        close: function close() {
          if (!this.isOpened()) {
            return;
          }

          this._removeDocumentEvents();

          this._hide();
          /**
           * Occur after the date picker closes.
           * @event DatePicker#close
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on datepicker.on()} to bind event handlers.
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off datepicker.off()} to unbind event handlers.
           * @see Refer to {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents from tui-code-snippet} for more methods. DatePicker mixes in the methods from CustomEvents.
           * @example
           * // bind the 'close' event
           * datepicker.on('close', () => {
           *     alert('close');
           * });
           *
           * // unbind the 'close' event
           * datepicker.off('close');
           */


          this.fire('close');
        },

        /**
         * Toggle the date picker.
         * @example
         * datepicker.toggle();
         */
        toggle: function toggle() {
          if (this.isOpened()) {
            this.close();
          } else {
            this.open();
          }
        },

        /**
         * Return the selected date.
         * @returns {?Date} - selected date
         * @example
         * // 2015-04-13
         * datepicker.getDate(); // new Date(2015, 3, 13)
         */
        getDate: function getDate() {
          if (!this._date) {
            return null;
          }

          return new Date(this._date);
        },

        /**
         * Select the date.
         * @param {Date|number} date - Date instance or timestamp to set
         * @example
         * datepicker.setDate(new Date()); // Set today
         */
        // eslint-disable-next-line complexity
        setDate: function setDate(date) {
          var isValidInput, newDate, shouldUpdate;

          if (date === null) {
            this.setNull();
            return;
          }

          isValidInput = isNumber(date) || isDate(date);
          newDate = new Date(date);
          shouldUpdate = isValidInput && this._isChanged(newDate) && this.isSelectable(newDate);

          if (shouldUpdate) {
            newDate = new Date(date);
            this._date = newDate;

            this._calendar.draw({
              date: newDate
            });

            if (this._timePicker) {
              this._timePicker.setTime(newDate.getHours(), newDate.getMinutes());
            }

            this._syncToInput();
            /**
             * Occur after the selected date is changed.
             * @event DatePicker#change
             * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on datepicker.on()} to bind event handlers.
             * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off datepicker.off()} to unbind event handlers.
             * @see Refer to {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents from tui-code-snippet} for more methods. DatePicker mixes in the methods from CustomEvents.
             * @example
             * // bind the 'change' event
             * datepicker.on('change', () => {
             *     console.log(`Selected date: ${datepicker.getDate()}`);
             * });
             *
             * // unbind the 'change' event
             * datepicker.off('change');
             */


            this.fire('change');
          }
        },

        /**
         * Set no date to be selected. (Selected date: null)
         */
        setNull: function setNull() {
          var calendarDate = this._calendar.getDate();

          var isChagned = this._date !== null;
          this._date = null;

          if (this._datepickerInput) {
            this._datepickerInput.clearText();
          }

          if (this._timePicker) {
            this._timePicker.setTime(0, 0);
          } // View update


          if (!this.isSelectable(calendarDate)) {
            this._calendar.draw({
              date: new Date(this._rangeModel.getMinimumValue())
            });
          } else {
            this._calendar.draw();
          }

          if (isChagned) {
            this.fire('change');
          }
        },

        /**
         * Select the date by the date string format.
         * @param {String} [format] - Date string format
         * @example
         * datepicker.setDateFormat('yyyy-MM-dd');
         * datepicker.setDateFormat('MM-dd, yyyy');
         * datepicker.setDateFormat('yy/M/d');
         * datepicker.setDateFormat('yy/MM/dd');
         */
        setDateFormat: function setDateFormat(format) {
          this._datepickerInput.setFormat(format);

          this._syncToInput();
        },

        /**
         * Return whether the datepicker opens or not
         * @returns {boolean}
         * @example
         * datepicker.close();
         * datepicker.isOpened(); // false
         *
         * datepicker.open();
         * datepicker.isOpened(); // true
         */
        isOpened: function isOpened() {
          return !hasClass(this._element, CLASS_NAME_HIDDEN);
        },

        /**
         * Return the time picker instance
         * @returns {?TimePicker} - TimePicker instance
         * @see {@link https://nhn.github.io/tui.time-picker/latest tui-time-picker}
         * @example
         * const timePicker = this.getTimePicker();
         */
        getTimePicker: function getTimePicker() {
          return this._timePicker;
        },

        /**
         * Return the calendar instance.
         * @see {@link calendar Calendar}
         * @returns {Calendar}
         */
        getCalendar: function getCalendar() {
          return this._calendar;
        },

        /**
         * Return the locale text object.
         * @see {@link DatePicker#localeTexts DatePicker.localeTexts}
         * @returns {object}
         */
        getLocaleText: function getLocaleText() {
          return localeTexts[this._language] || localeTexts[DEFAULT_LANGUAGE_TYPE];
        },

        /**
         * Set the input element
         * @param {string|HTMLElement} element - Input element or selector
         * @param {object} [options] - Input option
         * @param {string} [options.format = prevInput.format] - Format of the Date string in the input
         * @param {boolean} [options.syncFromInput = false] - Whether set the date from the input
         */
        setInput: function setInput(element, options) {
          var prev = this._datepickerInput;
          var localeText = this.getLocaleText();
          var prevFormat;
          options = options || {};

          if (prev) {
            prevFormat = prev.getFormat();
            prev.destroy();
          }

          this._datepickerInput = new DatePickerInput(element, {
            format: options.format || prevFormat,
            id: this._id,
            localeText: localeText
          });

          this._datepickerInput.on({
            change: this._onChangeInput,
            click: this.open
          }, this);

          if (options.syncFromInput) {
            this._syncFromInput();
          } else {
            this._syncToInput();
          }
        },

        /**
         * Enable the date picker.
         */
        enable: function enable() {
          if (this._isEnabled) {
            return;
          }

          this._isEnabled = true;

          this._datepickerInput.enable();

          forEachArray(this._openers, function (opener) {
            opener.removeAttribute('disabled');

            this._setOpenerEvents(opener);
          }, this);
        },

        /**
         * Disable the date picker.
         */
        disable: function disable() {
          if (!this._isEnabled) {
            return;
          }

          this._isEnabled = false;
          this.close();

          this._datepickerInput.disable();

          forEachArray(this._openers, function (opener) {
            opener.setAttribute('disabled', true);

            this._removeOpenerEvents(opener);
          }, this);
        },

        /**
         * Return whether the date picker is disabled
         * @returns {boolean}
         */
        isDisabled: function isDisabled() {
          // @todo this._isEnabled --> this._isDisabled
          return !this._isEnabled;
        },

        /**
         * Apply a CSS class to the date picker.
         * @param {string} className - Class name
         */
        addCssClass: function addCssClass(className) {
          addClass(this._element, className);
        },

        /**
         * Remove a CSS class from the date picker.
         * @param {string} className - Class name
         */
        removeCssClass: function removeCssClass(className) {
          removeClass(this._element, className);
        },

        /**
         * Return the date elements on the calendar.
         * @returns {HTMLElement[]}
         */
        getDateElements: function getDateElements() {
          return this._calendar.getDateElements();
        },

        /**
         * Return the first overlapped range from the point or range.
         * @param {Date|number} startDate - Start date to find overlapped range
         * @param {Date|number} endDate - End date to find overlapped range
         * @returns {Array.<Date>} - \[startDate, endDate]
         */
        findOverlappedRange: function findOverlappedRange(startDate, endDate) {
          var startTimestamp = new Date(startDate).getTime();
          var endTimestamp = new Date(endDate).getTime();

          var overlappedRange = this._rangeModel.findOverlappedRange(startTimestamp, endTimestamp);

          return [new Date(overlappedRange[0]), new Date(overlappedRange[1])];
        },

        /**
         * Change language.
         * @param {string} language - Language code. English('en') and Korean('ko') are provided as default.
         * @see To set to the other languages, use {@link DatePicker#localeTexts DatePicker.localeTexts}.
         */
        changeLanguage: function changeLanguage(language) {
          this._language = language;

          this._calendar.changeLanguage(this._language);

          this._datepickerInput.changeLocaleTitles(this.getLocaleText().titles);

          this.setDateFormat(this._datepickerInput.getFormat());

          if (this._timePicker) {
            this._timePicker.changeLanguage(this._language);
          }
        },

        /**
         * Destroy the date picker.
         */
        destroy: function destroy() {
          this._removeDocumentEvents();

          this._calendar.destroy();

          if (this._timePicker) {
            this._timePicker.destroy();
          }

          if (this._datepickerInput) {
            this._datepickerInput.destroy();
          }

          this._removeEvents();

          removeElement(this._element);
          this.removeAllOpeners();
          this._calendar = this._timePicker = this._datepickerInput = this._container = this._element = this._date = this._rangeModel = this._openers = this._isEnabled = this._id = null;
        }
      });
      CustomEvents.mixin(DatePicker);
      module.exports = DatePicker;
      /***/
    },
    /* 22 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is an object or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is an object or not.
       * If the given variable is an object, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is object?
       * @memberof module:type
       */

      function isObject(obj) {
        return obj === Object(obj);
      }

      module.exports = isObject;
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Execute the provided callback once for each property of object which actually exist.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Execute the provided callback once for each property of object which actually exist.
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the property
       *  2) The name of the property
       *  3) The object being traversed
       * @param {Object} obj The object that will be traversed
       * @param {function} iteratee  Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEachOwnProperties({a:1,b:2,c:3}, function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       */

      function forEachOwnProperties(obj, iteratee, context) {
        var key;
        context = context || null;

        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iteratee.call(context, obj[key], key, obj) === false) {
              break;
            }
          }
        }
      }

      module.exports = forEachOwnProperties;
      /***/
    },
    /* 24 */

    /***/
    function (module, exports, __nested_webpack_require_120684__) {
      "use strict";
      /**
       * @fileoverview Set className value
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isArray = __nested_webpack_require_120684__(6);

      var isUndefined = __nested_webpack_require_120684__(12);
      /**
       * Set className value
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {(string|string[])} cssClass - class names
       * @private
       */


      function setClassName(element, cssClass) {
        cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;
        cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

        if (isUndefined(element.className.baseVal)) {
          element.className = cssClass;
          return;
        }

        element.className.baseVal = cssClass;
      }

      module.exports = setClassName;
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __nested_webpack_require_121633__) {
      "use strict";
      /**
       * @fileoverview Find parent element recursively
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var matches = __nested_webpack_require_121633__(40);
      /**
       * Find parent element recursively
       * @param {HTMLElement} element - base element to start find
       * @param {string} selector - selector string for find
       * @returns {HTMLElement} - element finded or null
       * @memberof module:domUtil
       */


      function closest(element, selector) {
        var parent = element.parentNode;

        if (matches(element, selector)) {
          return element;
        }

        while (parent && parent !== document) {
          if (matches(parent, selector)) {
            return parent;
          }

          parent = parent.parentNode;
        }

        return null;
      }

      module.exports = closest;
      /***/
    },
    /* 26 */

    /***/
    function (module, exports, __nested_webpack_require_122624__) {
      "use strict";
      /**
       * @fileoverview Get data value from data-attribute
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var convertToKebabCase = __nested_webpack_require_122624__(42);
      /**
       * Get data value from data-attribute
       * @param {HTMLElement} element - target element
       * @param {string} key - key
       * @returns {string} value
       * @memberof module:domUtil
       */


      function getData(element, key) {
        if (element.dataset) {
          return element.dataset[key];
        }

        return element.getAttribute('data-' + convertToKebabCase(key));
      }

      module.exports = getData;
      /***/
    },
    /* 27 */

    /***/
    function (module, exports, __nested_webpack_require_123396__) {
      "use strict";
      /**
       * @fileoverview Check element has specific css class
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_123396__(3);

      var getClass = __nested_webpack_require_123396__(17);
      /**
       * Check element has specific css class
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {string} cssClass - css class
       * @returns {boolean}
       * @memberof module:domUtil
       */


      function hasClass(element, cssClass) {
        var origin;

        if (element.classList) {
          return element.classList.contains(cssClass);
        }

        origin = getClass(element).split(/\s+/);
        return inArray(cssClass, origin) > -1;
      }

      module.exports = hasClass;
      /***/
    },
    /* 28 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is an instance of Date or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is an instance of Date or not.
       * If the given variables is an instance of Date, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is an instance of Date?
       * @memberof module:type
       */

      function isDate(obj) {
        return obj instanceof Date;
      }

      module.exports = isDate;
      /***/
    },
    /* 29 */

    /***/
    function (module, exports, __nested_webpack_require_124982__) {
      "use strict";
      /**
       * @fileoverview Calendar component
       * @author NHN. FE dev Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_124982__(0);

      var CustomEvents = __nested_webpack_require_124982__(8);

      var addClass = __nested_webpack_require_124982__(16);

      var hasClass = __nested_webpack_require_124982__(27);

      var removeClass = __nested_webpack_require_124982__(18);

      var removeElement = __nested_webpack_require_124982__(14);

      var extend = __nested_webpack_require_124982__(7);

      var Header = __nested_webpack_require_124982__(44);

      var Body = __nested_webpack_require_124982__(49);

      var localeTexts = __nested_webpack_require_124982__(10);

      var constants = __nested_webpack_require_124982__(1);

      var dateUtil = __nested_webpack_require_124982__(5);

      var util = __nested_webpack_require_124982__(4);

      var DEFAULT_WEEK_START_DAY = constants.DEFAULT_WEEK_START_DAY;
      var DEFAULT_LANGUAGE_TYPE = constants.DEFAULT_LANGUAGE_TYPE;
      var TYPE_DATE = constants.TYPE_DATE;
      var TYPE_MONTH = constants.TYPE_MONTH;
      var TYPE_YEAR = constants.TYPE_YEAR;
      var CLASS_NAME_PREV_MONTH_BTN = constants.CLASS_NAME_PREV_MONTH_BTN;
      var CLASS_NAME_PREV_YEAR_BTN = constants.CLASS_NAME_PREV_YEAR_BTN;
      var CLASS_NAME_NEXT_YEAR_BTN = constants.CLASS_NAME_NEXT_YEAR_BTN;
      var CLASS_NAME_NEXT_MONTH_BTN = constants.CLASS_NAME_NEXT_MONTH_BTN;
      var CLASS_NAME_CALENDAR_MONTH = 'tui-calendar-month';
      var CLASS_NAME_CALENDAR_YEAR = 'tui-calendar-year';
      var CLASS_NAME_HIDDEN = 'tui-hidden';
      var HEADER_SELECTOR = '.tui-calendar-header';
      var BODY_SELECTOR = '.tui-calendar-body';
      /**
       * @class
       * @description
       * Create a calendar by {@link DatePicker#createCalendar DatePicker.createCalendar()}.
       * @see {@link /tutorial-example07-calendar Calendar example}
       * @param {HTMLElement|string} container - Container or selector of the Calendar
       * @param {Object} [options] - Calendar options
       *     @param {Date} [options.date = new Date()] - Initial date (default: today)
       *     @param {('date'|'month'|'year')} [options.type = 'date'] - Calendar type. Determine whether to show a date, month, or year.
       *     @param {string} [options.language = 'en'] - Language code. English('en') and Korean('ko') are provided as default. To use the other languages, use {@link DatePicker#localeTexts DatePicker.localeTexts}.
       *     @param {boolean} [options.showToday = true] - Show today.
       *     @param {boolean} [options.showJumpButtons = false] - Show the yearly jump buttons (move to the previous and next year in 'date' Calendar)
       *     @param {boolean} [options.usageStatistics = true] - Send a hostname to Google Analytics (default: true)
       *     @param {string} [options.weekStartDay = 'Sun'] - Start of the week. 'Sun', 'Mon', ..., 'Sat'(default: 'Sun'(start on Sunday))
       * @example
       * //ES6
       * import DatePicker from 'tui-date-picker'
       *
       * // CommonJS
       * const DatePicker = require('tui-date-picker');
       *
       * // Browser
       * const DatePicker = tui.DatePicker;
       *
       * const calendar = DatePicker.createCalendar('#calendar-wrapper', {
       *     language: 'en',
       *     showToday: true,
       *     showJumpButtons: false,
       *     date: new Date(),
       *     type: 'date',
       *     weekStartDay: 'Mon',
       * });
       *
       * calendar.on('draw', (event) => {
       *     console.log(event.date);
       *     console.log(event.type);
       *     for (let i = 0, len = event.dateElements.length; i < len; i += 1) {
       *         const el = event.dateElements[i];
       *         const date = new Date(getData(el, 'timestamp'));
       *         console.log(date);
       *     }
       * });
       */

      var Calendar = defineClass(
      /** @lends Calendar.prototype */
      {
        "static": {
          localeTexts: localeTexts
        },
        init: function init(container, options) {
          options = extend({
            language: DEFAULT_LANGUAGE_TYPE,
            showToday: true,
            showJumpButtons: false,
            date: new Date(),
            type: TYPE_DATE,
            usageStatistics: true,
            weekStartDay: DEFAULT_WEEK_START_DAY
          }, options);
          /**
           * Container element
           * @type {HTMLElement}
           * @private
           */

          this._container = util.getElement(container);
          this._container.innerHTML = '<div class="tui-calendar">' + '    <div class="tui-calendar-header"></div>' + '    <div class="tui-calendar-body"></div>' + '</div>';
          /**
           * Wrapper element
           * @type {HTMLElement}
           * @private
           */

          this._element = this._container.firstChild;
          /**
           * Date
           * @type {Date}
           * @private
           */

          this._date = null;
          /**
           * Layer type
           * @type {string}
           * @private
           */

          this._type = null;
          /**
           * Header box
           * @type {Header}
           * @private
           */

          this._header = null;
          /**
           * Body box
           * @type {Body}
           * @private
           */

          this._body = null;

          this._initHeader(options);

          this._initBody(options);

          this.draw({
            date: options.date,
            type: options.type
          });

          if (options.usageStatistics) {
            util.sendHostName();
          }
        },

        /**
         * Initialize header
         * @param {object} options - Header options
         * @private
         */
        _initHeader: function _initHeader(options) {
          var headerContainer = this._element.querySelector(HEADER_SELECTOR);

          this._header = new Header(headerContainer, options);

          this._header.on('click', function (ev) {
            var target = util.getTarget(ev);

            if (hasClass(target, CLASS_NAME_PREV_MONTH_BTN)) {
              this.drawPrev();
            } else if (hasClass(target, CLASS_NAME_PREV_YEAR_BTN)) {
              this._onClickPrevYear();
            } else if (hasClass(target, CLASS_NAME_NEXT_MONTH_BTN)) {
              this.drawNext();
            } else if (hasClass(target, CLASS_NAME_NEXT_YEAR_BTN)) {
              this._onClickNextYear();
            }
          }, this);
        },

        /**
         * Initialize body
         * @param {object} options - Body options
         * @private
         */
        _initBody: function _initBody(options) {
          var bodyContainer = this._element.querySelector(BODY_SELECTOR);

          this._body = new Body(bodyContainer, options);
        },

        /**
         * clickHandler - prev year button
         * @private
         */
        _onClickPrevYear: function _onClickPrevYear() {
          if (this.getType() === TYPE_DATE) {
            this.draw({
              date: this._getRelativeDate(-12)
            });
          } else {
            this.drawPrev();
          }
        },

        /**
         * clickHandler - next year button
         * @private
         */
        _onClickNextYear: function _onClickNextYear() {
          if (this.getType() === TYPE_DATE) {
            this.draw({
              date: this._getRelativeDate(12)
            });
          } else {
            this.drawNext();
          }
        },

        /**
         * Returns whether the layer type is valid
         * @param {string} type - Layer type to check
         * @returns {boolean}
         * @private
         */
        _isValidType: function _isValidType(type) {
          return type === TYPE_DATE || type === TYPE_MONTH || type === TYPE_YEAR;
        },

        /**
         * @param {Date} date - Date to draw
         * @param {string} type - Layer type to draw
         * @returns {boolean}
         * @private
         */
        _shouldUpdate: function _shouldUpdate(date, type) {
          var prevDate = this._date;

          if (!dateUtil.isValidDate(date)) {
            throw new Error('Invalid date');
          }

          if (!this._isValidType(type)) {
            throw new Error('Invalid layer type');
          }

          return !prevDate || prevDate.getFullYear() !== date.getFullYear() || prevDate.getMonth() !== date.getMonth() || this.getType() !== type;
        },

        /**
         * Render header & body elements
         * @private
         */
        _render: function _render() {
          var date = this._date;
          var type = this.getType();

          this._header.render(date, type);

          this._body.render(date, type);

          removeClass(this._element, CLASS_NAME_CALENDAR_MONTH, CLASS_NAME_CALENDAR_YEAR);

          switch (type) {
            case TYPE_MONTH:
              addClass(this._element, CLASS_NAME_CALENDAR_MONTH);
              break;

            case TYPE_YEAR:
              addClass(this._element, CLASS_NAME_CALENDAR_YEAR);
              break;

            default:
              break;
          }
        },

        /**
         * Returns relative date
         * @param {number} step - Month step
         * @returns {Date}
         * @private
         */
        _getRelativeDate: function _getRelativeDate(step) {
          var prev = this._date;
          return new Date(prev.getFullYear(), prev.getMonth() + step);
        },

        /**
         * Draw the calendar.
         * @param {Object} [options] - Draw options
         *   @param {Date} [options.date] - Date to set
         *   @param {('date'|'month'|'year')} [options.type = 'date'] - Calendar type. Determine whether to show a date, month, or year.
         * @example
         * calendar.draw();
         * calendar.draw({
         *     date: new Date()
         * });
         * calendar.draw({
         *     type: 'month'
         * });
         * calendar.draw({
         *     type: 'month',
         *     date: new Date()
         * });
         */
        draw: function draw(options) {
          var date, type;
          options = options || {};
          date = options.date || this._date;
          type = (options.type || this.getType()).toLowerCase();

          if (this._shouldUpdate(date, type)) {
            this._date = date;
            this._type = type;

            this._render();
          }
          /**
           * Occur after the calendar draws.
           * @event Calendar#draw
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on calendar.on()} to bind event handlers.
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off calendar.off()} to unbind event handlers.
           * @see Refer to {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents from tui-code-snippet} for more methods. Calendar mixes in the methods from CustomEvents.
           * @property {Date} date - Calendar date
           * @property {('date'|'month'|'year')} type - Calendar type
           * @property {HTMLElement[]} dateElements - elements for dates
           * @example
           * // bind the 'draw' event
           * calendar.on('draw', ({type, date}) => {
           *     console.log(`Draw the ${type} calendar and its date is ${date}.`);
           * });
           *
           * // unbind the 'draw' event
           * calendar.off('draw');
           */


          this.fire('draw', {
            date: this._date,
            type: type,
            dateElements: this._body.getDateElements()
          });
        },

        /**
         * Show the calendar.
         */
        show: function show() {
          removeClass(this._element, CLASS_NAME_HIDDEN);
        },

        /**
         * Hide the calendar.
         */
        hide: function hide() {
          addClass(this._element, CLASS_NAME_HIDDEN);
        },

        /**
         * Draw the next page.
         */
        drawNext: function drawNext() {
          this.draw({
            date: this.getNextDate()
          });
        },

        /**
         * Draw the previous page.
         */
        drawPrev: function drawPrev() {
          this.draw({
            date: this.getPrevDate()
          });
        },

        /**
         * Return the next date.
         * @returns {Date}
         */
        getNextDate: function getNextDate() {
          if (this.getType() === TYPE_DATE) {
            return this._getRelativeDate(1);
          }

          return this.getNextYearDate();
        },

        /**
         * Return the previous date.
         * @returns {Date}
         */
        getPrevDate: function getPrevDate() {
          if (this.getType() === TYPE_DATE) {
            return this._getRelativeDate(-1);
          }

          return this.getPrevYearDate();
        },

        /**
         * Return the date a year later.
         * @returns {Date}
         */
        getNextYearDate: function getNextYearDate() {
          switch (this.getType()) {
            case TYPE_DATE:
            case TYPE_MONTH:
              return this._getRelativeDate(12);
            // 12 months = 1 year

            case TYPE_YEAR:
              return this._getRelativeDate(108);
            // 108 months = 9 years = 12 * 9

            default:
              throw new Error('Unknown layer type');
          }
        },

        /**
         * Return the date a year previously.
         * @returns {Date}
         */
        getPrevYearDate: function getPrevYearDate() {
          switch (this.getType()) {
            case TYPE_DATE:
            case TYPE_MONTH:
              return this._getRelativeDate(-12);
            // 12 months = 1 year

            case TYPE_YEAR:
              return this._getRelativeDate(-108);
            // 108 months = 9 years = 12 * 9

            default:
              throw new Error('Unknown layer type');
          }
        },

        /**
         * Change language.
         * @param {string} language - Language code. English('en') and Korean('ko') are provided as default.
         * @see To set to the other languages, use {@link DatePicker#localeTexts DatePicker.localeTexts}.
         */
        changeLanguage: function changeLanguage(language) {
          this._header.changeLanguage(language);

          this._body.changeLanguage(language);

          this._render();
        },

        /**
         * Return the rendered date.
         * @returns {Date}
         */
        getDate: function getDate() {
          return new Date(this._date);
        },

        /**
         * Return the calendar's type.
         * @returns {('date'|'month'|'year')}
         */
        getType: function getType() {
          return this._type;
        },

        /**
         * Returns HTML elements for dates.
         * @returns {HTMLElement[]}
         */
        getDateElements: function getDateElements() {
          return this._body.getDateElements();
        },

        /**
         * Apply a CSS class to the calendar.
         * @param {string} className - Class name
         */
        addCssClass: function addCssClass(className) {
          addClass(this._element, className);
        },

        /**
         * Remove a CSS class from the calendar.
         * @param {string} className - Class name
         */
        removeCssClass: function removeCssClass(className) {
          removeClass(this._element, className);
        },

        /**
         * Destroy the calendar.
         */
        destroy: function destroy() {
          this._header.destroy();

          this._body.destroy();

          removeElement(this._element);
          this._type = this._date = this._container = this._element = this._header = this._body = null;
        }
      });
      CustomEvents.mixin(Calendar);
      module.exports = Calendar;
      /***/
    },
    /* 30 */

    /***/
    function (module, exports, __nested_webpack_require_140964__) {
      "use strict";
      /**
       * @fileoverview Date <-> Text formatting module
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_140964__(3);

      var forEachArray = __nested_webpack_require_140964__(2);

      var defineClass = __nested_webpack_require_140964__(0);

      var util = __nested_webpack_require_140964__(4);

      var dateUtil = __nested_webpack_require_140964__(5);

      var constants = __nested_webpack_require_140964__(1);

      var localeTexts = __nested_webpack_require_140964__(10);

      var rFormableKeys = /\\?(yyyy|yy|mmmm|mmm|mm|m|dd|d|hh|h|a)/gi;
      var mapForConverting = {
        yyyy: {
          expression: '(\\d{4}|\\d{2})',
          type: constants.TYPE_YEAR
        },
        yy: {
          expression: '(\\d{4}|\\d{2})',
          type: constants.TYPE_YEAR
        },
        y: {
          expression: '(\\d{4}|\\d{2})',
          type: constants.TYPE_YEAR
        },
        M: {
          expression: '(1[012]|0[1-9]|[1-9])',
          type: constants.TYPE_MONTH
        },
        MM: {
          expression: '(1[012]|0[1-9]|[1-9])',
          type: constants.TYPE_MONTH
        },
        MMM: {
          expression: '(1[012]|0[1-9]|[1-9])',
          type: constants.TYPE_MONTH
        },
        MMMM: {
          expression: '(1[012]|0[1-9]|[1-9])',
          type: constants.TYPE_MONTH
        },
        mmm: {
          expression: '(1[012]|0[1-9]|[1-9])',
          type: constants.TYPE_MONTH
        },
        mmmm: {
          expression: '(1[012]|0[1-9]|[1-9])',
          type: constants.TYPE_MONTH
        },
        dd: {
          expression: '([12]\\d{1}|3[01]|0[1-9]|[1-9])',
          type: constants.TYPE_DATE
        },
        d: {
          expression: '([12]\\d{1}|3[01]|0[1-9]|[1-9])',
          type: constants.TYPE_DATE
        },
        D: {
          expression: '([12]\\d{1}|3[01]|0[1-9]|[1-9])',
          type: constants.TYPE_DATE
        },
        DD: {
          expression: '([12]\\d{1}|3[01]|0[1-9]|[1-9])',
          type: constants.TYPE_DATE
        },
        h: {
          expression: '(d{1}|0\\d{1}|1\\d{1}|2[0123])',
          type: constants.TYPE_HOUR
        },
        hh: {
          expression: '(d{1}|[01]\\d{1}|2[0123])',
          type: constants.TYPE_HOUR
        },
        H: {
          expression: '(d{1}|0\\d{1}|1\\d{1}|2[0123])',
          type: constants.TYPE_HOUR
        },
        HH: {
          expression: '(d{1}|[01]\\d{1}|2[0123])',
          type: constants.TYPE_HOUR
        },
        m: {
          expression: '(d{1}|[012345]\\d{1})',
          type: constants.TYPE_MINUTE
        },
        mm: {
          expression: '(d{1}|[012345]\\d{1})',
          type: constants.TYPE_MINUTE
        },
        a: {
          expression: '([ap]m)',
          type: constants.TYPE_MERIDIEM
        },
        A: {
          expression: '([ap]m)',
          type: constants.TYPE_MERIDIEM
        }
      };
      /**
       * @class
       * @ignore
       */

      var DateTimeFormatter = defineClass(
      /** @lends DateTimeFormatter.prototype */
      {
        init: function init(rawStr, titles) {
          /**
           * @type {string}
           * @private
           */
          this._rawStr = rawStr;
          /**
           * @type {Array}
           * @private
           * @example
           *  rawStr = "yyyy-MM-dd" --> keyOrder = ['year', 'month', 'date']
           *  rawStr = "MM/dd, yyyy" --> keyOrder = ['month', 'date', 'year']
           */

          this._keyOrder = null;
          /**
           * @type {RegExp}
           * @private
           */

          this._regExp = null;
          /**
           * Titles
           * @type {object}
           * @private
           */

          this._titles = titles || localeTexts.en.titles;

          this._parseFormat();
        },

        /**
         * Parse initial format and make the keyOrder, regExp
         * @private
         */
        _parseFormat: function _parseFormat() {
          var regExpStr = '^';

          var matchedKeys = this._rawStr.match(rFormableKeys);

          var keyOrder = [];
          matchedKeys = util.filter(matchedKeys, function (key) {
            return key[0] !== '\\';
          });
          forEachArray(matchedKeys, function (key, index) {
            if (!/m/i.test(key)) {
              key = key.toLowerCase();
            }

            regExpStr += mapForConverting[key].expression + '[\\D\\s]*';
            keyOrder[index] = mapForConverting[key].type;
          }); // This formatter does not allow additional numbers at the end of string.

          regExpStr += '$';
          this._keyOrder = keyOrder;
          this._regExp = new RegExp(regExpStr, 'gi');
        },

        /**
         * Parse string to dateHash
         * @param {string} str - Date string
         * @returns {Date}
         */
        parse: function parse(str) {
          var dateHash = {
            year: 0,
            month: 1,
            date: 1,
            hour: 0,
            minute: 0
          };
          var hasMeridiem = false;
          var isPM = false;
          var matched;
          this._regExp.lastIndex = 0;
          matched = this._regExp.exec(str);

          if (!matched) {
            throw Error('DateTimeFormatter: Not matched - "' + str + '"');
          } // eslint-disable-next-line complexity


          forEachArray(this._keyOrder, function (name, index) {
            var value = matched[index + 1];

            if (name === constants.TYPE_MERIDIEM && /[ap]m/i.test(value)) {
              hasMeridiem = true;
              isPM = /pm/i.test(value);
            } else {
              value = Number(value);

              if (value !== 0 && !value) {
                throw Error('DateTimeFormatter: Unknown value - ' + matched[index + 1]);
              }

              if (name === constants.TYPE_YEAR && value < 100) {
                value += 2000;
              }

              dateHash[name] = value;
            }
          });

          if (hasMeridiem) {
            isPM = isPM || dateHash.hour > 12;
            dateHash.hour %= 12;

            if (isPM) {
              dateHash.hour += 12;
            }
          }

          return new Date(dateHash.year, dateHash.month - 1, dateHash.date, dateHash.hour, dateHash.minute);
        },

        /**
         * Returns raw string of format
         * @returns {string}
         */
        getRawString: function getRawString() {
          return this._rawStr;
        },

        /**
         * Format date to string
         * @param {Date} dateObj - Date object
         * @returns {string}
         */
        format: function format(dateObj) {
          var year = dateObj.getFullYear();
          var month = dateObj.getMonth() + 1;
          var dayInMonth = dateObj.getDate();
          var day = dateObj.getDay();
          var hour = dateObj.getHours();
          var minute = dateObj.getMinutes();
          var meridiem = 'a'; // Default value for unusing meridiem format

          var replaceMap;

          if (inArray(constants.TYPE_MERIDIEM, this._keyOrder) > -1) {
            meridiem = hour >= 12 ? 'pm' : 'am';
            hour = dateUtil.getMeridiemHour(hour);
          }

          replaceMap = {
            yyyy: year,
            yy: String(year).substr(2, 2),
            M: month,
            MM: dateUtil.prependLeadingZero(month),
            MMM: this._titles.MMM[month - 1],
            MMMM: this._titles.MMMM[month - 1],
            d: dayInMonth,
            dd: dateUtil.prependLeadingZero(dayInMonth),
            D: this._titles.D[day],
            DD: this._titles.DD[day],
            hh: dateUtil.prependLeadingZero(hour),
            h: hour,
            mm: dateUtil.prependLeadingZero(minute),
            m: minute,
            A: meridiem.toUpperCase(),
            a: meridiem
          };
          return this._rawStr.replace(rFormableKeys, function (key) {
            if (key[0] === '\\') {
              return key.substr(1);
            }

            return replaceMap[key] || replaceMap[key.toLowerCase()] || '';
          });
        }
      });
      module.exports = DateTimeFormatter;
      /***/
    },
    /* 31 */

    /***/
    function (module, exports, __nested_webpack_require_149228__) {
      "use strict";
      /**
       * @fileoverview Bind DOM events
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isString = __nested_webpack_require_149228__(13);

      var forEach = __nested_webpack_require_149228__(9);

      var safeEvent = __nested_webpack_require_149228__(32);
      /**
       * Bind DOM events.
       * @param {HTMLElement} element - element to bind events
       * @param {(string|object)} types - Space splitted events names or eventName:handler object
       * @param {(function|object)} handler - handler function or context for handler method
       * @param {object} [context] context - context for handler method.
       * @memberof module:domEvent
       * @example
       * var div = document.querySelector('div');
       * 
       * // Bind one event to an element.
       * on(div, 'click', toggle);
       * 
       * // Bind multiple events with a same handler to multiple elements at once.
       * // Use event names splitted by a space.
       * on(div, 'mouseenter mouseleave', changeColor);
       * 
       * // Bind multiple events with different handlers to an element at once.
       * // Use an object which of key is an event name and value is a handler function.
       * on(div, {
       *   keydown: highlight,
       *   keyup: dehighlight
       * });
       * 
       * // Set a context for handler method.
       * var name = 'global';
       * var repository = {name: 'CodeSnippet'};
       * on(div, 'drag', function() {
       *  console.log(this.name);
       * }, repository);
       * // Result when you drag a div: "CodeSnippet"
       */


      function on(element, types, handler, context) {
        if (isString(types)) {
          forEach(types.split(/\s+/g), function (type) {
            bindEvent(element, type, handler, context);
          });
          return;
        }

        forEach(types, function (func, type) {
          bindEvent(element, type, func, handler);
        });
      }
      /**
       * Bind DOM events
       * @param {HTMLElement} element - element to bind events
       * @param {string} type - events name
       * @param {function} handler - handler function or context for handler method
       * @param {object} [context] context - context for handler method.
       * @private
       */


      function bindEvent(element, type, handler, context) {
        /**
           * Event handler
           * @param {Event} e - event object
           */
        function eventHandler(e) {
          handler.call(context || element, e || window.event);
        }

        if ('addEventListener' in element) {
          element.addEventListener(type, eventHandler);
        } else if ('attachEvent' in element) {
          element.attachEvent('on' + type, eventHandler);
        }

        memorizeHandler(element, type, handler, eventHandler);
      }
      /**
       * Memorize DOM event handler for unbinding.
       * @param {HTMLElement} element - element to bind events
       * @param {string} type - events name
       * @param {function} handler - handler function that user passed at on() use
       * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
       * @private
       */


      function memorizeHandler(element, type, handler, wrappedHandler) {
        var events = safeEvent(element, type);
        var existInEvents = false;
        forEach(events, function (obj) {
          if (obj.handler === handler) {
            existInEvents = true;
            return false;
          }

          return true;
        });

        if (!existInEvents) {
          events.push({
            handler: handler,
            wrappedHandler: wrappedHandler
          });
        }
      }

      module.exports = on;
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Get event collection for specific HTML element
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var EVENT_KEY = '_feEventKey';
      /**
       * Get event collection for specific HTML element
       * @param {HTMLElement} element - HTML element
       * @param {string} type - event type
       * @returns {array}
       * @private
       */

      function safeEvent(element, type) {
        var events = element[EVENT_KEY];
        var handlers;

        if (!events) {
          events = element[EVENT_KEY] = {};
        }

        handlers = events[type];

        if (!handlers) {
          handlers = events[type] = [];
        }

        return handlers;
      }

      module.exports = safeEvent;
      /***/
    },
    /* 33 */

    /***/
    function (module, exports, __nested_webpack_require_153991__) {
      "use strict";
      /**
       * @fileoverview Unbind DOM events
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isString = __nested_webpack_require_153991__(13);

      var forEach = __nested_webpack_require_153991__(9);

      var safeEvent = __nested_webpack_require_153991__(32);
      /**
       * Unbind DOM events
       * If a handler function is not passed, remove all events of that type.
       * @param {HTMLElement} element - element to unbind events
       * @param {(string|object)} types - Space splitted events names or eventName:handler object
       * @param {function} [handler] - handler function
       * @memberof module:domEvent
       * @example
       * // Following the example of domEvent#on
       * 
       * // Unbind one event from an element.
       * off(div, 'click', toggle);
       * 
       * // Unbind multiple events with a same handler from multiple elements at once.
       * // Use event names splitted by a space.
       * off(element, 'mouseenter mouseleave', changeColor);
       * 
       * // Unbind multiple events with different handlers from an element at once.
       * // Use an object which of key is an event name and value is a handler function.
       * off(div, {
       *   keydown: highlight,
       *   keyup: dehighlight
       * });
       * 
       * // Unbind events without handlers.
       * off(div, 'drag');
       */


      function off(element, types, handler) {
        if (isString(types)) {
          forEach(types.split(/\s+/g), function (type) {
            unbindEvent(element, type, handler);
          });
          return;
        }

        forEach(types, function (func, type) {
          unbindEvent(element, type, func);
        });
      }
      /**
       * Unbind DOM events
       * If a handler function is not passed, remove all events of that type.
       * @param {HTMLElement} element - element to unbind events
       * @param {string} type - events name
       * @param {function} [handler] - handler function
       * @private
       */


      function unbindEvent(element, type, handler) {
        var events = safeEvent(element, type);
        var index;

        if (!handler) {
          forEach(events, function (item) {
            removeHandler(element, type, item.wrappedHandler);
          });
          events.splice(0, events.length);
        } else {
          forEach(events, function (item, idx) {
            if (handler === item.handler) {
              removeHandler(element, type, item.wrappedHandler);
              index = idx;
              return false;
            }

            return true;
          });
          events.splice(index, 1);
        }
      }
      /**
       * Remove an event handler
       * @param {HTMLElement} element - An element to remove an event
       * @param {string} type - event type
       * @param {function} handler - event handler
       * @private
       */


      function removeHandler(element, type, handler) {
        if ('removeEventListener' in element) {
          element.removeEventListener(type, handler);
        } else if ('detachEvent' in element) {
          element.detachEvent('on' + type, handler);
        }
      }

      module.exports = off;
      /***/
    },
    /* 34 */

    /***/
    function (module, exports, __nested_webpack_require_157311__) {
      "use strict";
      /**
       * @fileoverview The entry file of DatePicker components
       * @author NHN. FE Development Team
       */

      var DatePicker = __nested_webpack_require_157311__(21);

      var DateRangePicker = __nested_webpack_require_157311__(60);

      var Calendar = __nested_webpack_require_157311__(29);

      __nested_webpack_require_157311__(61);
      /**
       * Create a calendar.
       * @see {@link Calendar}
       * @see {@link /tutorial-example07-calendar Calendar example}
       * @static
       * @param {HTMLElement|string} wrapperElement - Container element or selector of the Calendar
       * @param {Object} [options] - {@link Calendar} options. Refer to the {@link Calendar Calendar instance's options}.
       * @returns {Calendar}
       * @example
       * const calendar = DatePicker.createCalendar('#calendar-wrapper', {
       *    language: 'en',
       *    showToday: true,
       *    showJumpButtons: false,
       *    date: new Date(),
       *    type: 'date'
       * });
       */


      DatePicker.createCalendar = function (wrapperElement, options) {
        return new Calendar(wrapperElement, options);
      };
      /**
       * Create a date-range picker.
       * @see {@link DateRangePicker}
       * @see {@link /tutorial-example08-daterangepicker DateRangePicker example}
       * @static
       * @param {object} options - {@link DateRangePicker} options. Refer to the {@link DateRangePicker DateRangePicker instance's options}.
       * @returns {DateRangePicker}
       * @example
       * const rangepicker = DatePicker.createRangePicker({
       *     startpicker: {
       *         input: '#start-input',
       *         container: '#start-container'
       *     },
       *     endpicker: {
       *         input: '#end-input',
       *         container: '#end-container'
       *     },
       *     type: 'date',
       *     format: 'yyyy-MM-dd'
       *     selectableRanges: [
       *         [new Date(2017, 3, 1), new Date(2017, 5, 1)],
       *         [new Date(2017, 6, 3), new Date(2017, 10, 5)]
       *     ]
       * });
       */


      DatePicker.createRangePicker = function (options) {
        return new DateRangePicker(options);
      };

      module.exports = DatePicker;
      /***/
    },
    /* 35 */

    /***/
    function (module, exports, __nested_webpack_require_159643__) {
      "use strict";
      /**
       * @fileoverview Provide a simple inheritance in prototype-oriented.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var createObject = __nested_webpack_require_159643__(36);
      /**
       * Provide a simple inheritance in prototype-oriented.
       * Caution :
       *  Don't overwrite the prototype of child constructor.
       *
       * @param {function} subType Child constructor
       * @param {function} superType Parent constructor
       * @memberof module:inheritance
       * @example
       * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
       *
       * // Parent constructor
       * function Animal(leg) {
       *     this.leg = leg;
       * }
       * Animal.prototype.growl = function() {
       *     // ...
       * };
       *
       * // Child constructor
       * function Person(name) {
       *     this.name = name;
       * }
       *
       * // Inheritance
       * inherit(Person, Animal);
       *
       * // After this inheritance, please use only the extending of property.
       * // Do not overwrite prototype.
       * Person.prototype.walk = function(direction) {
       *     // ...
       * };
       */


      function inherit(subType, superType) {
        var prototype = createObject(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
      }

      module.exports = inherit;
      /***/
    },
    /* 36 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Create a new object with the specified prototype object and properties.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * @module inheritance
       */

      /**
       * Create a new object with the specified prototype object and properties.
       * @param {Object} obj This object will be a prototype of the newly-created object.
       * @returns {Object}
       * @memberof module:inheritance
       */

      function createObject(obj) {
        function F() {} // eslint-disable-line require-jsdoc


        F.prototype = obj;
        return new F();
      }

      module.exports = createObject;
      /***/
    },
    /* 37 */

    /***/
    function (module, exports, __nested_webpack_require_162009__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is existing or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isUndefined = __nested_webpack_require_162009__(12);

      var isNull = __nested_webpack_require_162009__(38);
      /**
       * Check whether the given variable is existing or not.
       * If the given variable is not null and not undefined, returns true.
       * @param {*} param - Target for checking
       * @returns {boolean} Is existy?
       * @memberof module:type
       * @example
       * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
       *
       * isExisty(''); //true
       * isExisty(0); //true
       * isExisty([]); //true
       * isExisty({}); //true
       * isExisty(null); //false
       * isExisty(undefined); //false
      */


      function isExisty(param) {
        return !isUndefined(param) && !isNull(param);
      }

      module.exports = isExisty;
      /***/
    },
    /* 38 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is null or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is null or not.
       * If the given variable(arguments[0]) is null, returns true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is null?
       * @memberof module:type
       */

      function isNull(obj) {
        return obj === null;
      }

      module.exports = isNull;
      /***/
    },
    /* 39 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a function or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a function or not.
       * If the given variable is a function, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is function?
       * @memberof module:type
       */

      function isFunction(obj) {
        return obj instanceof Function;
      }

      module.exports = isFunction;
      /***/
    },
    /* 40 */

    /***/
    function (module, exports, __nested_webpack_require_164381__) {
      "use strict";
      /**
       * @fileoverview Check element match selector
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_164381__(3);

      var toArray = __nested_webpack_require_164381__(41);

      var elProto = Element.prototype;

      var matchSelector = elProto.matches || elProto.webkitMatchesSelector || elProto.mozMatchesSelector || elProto.msMatchesSelector || function (selector) {
        var doc = this.document || this.ownerDocument;
        return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
      };
      /**
       * Check element match selector
       * @param {HTMLElement} element - element to check
       * @param {string} selector - selector to check
       * @returns {boolean} is selector matched to element?
       * @memberof module:domUtil
       */


      function matches(element, selector) {
        return matchSelector.call(element, selector);
      }

      module.exports = matches;
      /***/
    },
    /* 41 */

    /***/
    function (module, exports, __nested_webpack_require_165469__) {
      "use strict";
      /**
       * @fileoverview Transform the Array-like object to Array.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_165469__(2);
      /**
       * Transform the Array-like object to Array.
       * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
       * @param {*} arrayLike Array-like object
       * @returns {Array} Array
       * @memberof module:collection
       * @example
       * var toArray = require('tui-code-snippet/collection/toArray'); // node, commonjs
       *
       * var arrayLike = {
       *     0: 'one',
       *     1: 'two',
       *     2: 'three',
       *     3: 'four',
       *     length: 4
       * };
       * var result = toArray(arrayLike);
       *
       * alert(result instanceof Array); // true
       * alert(result); // one,two,three,four
       */


      function toArray(arrayLike) {
        var arr;

        try {
          arr = Array.prototype.slice.call(arrayLike);
        } catch (e) {
          arr = [];
          forEachArray(arrayLike, function (value) {
            arr.push(value);
          });
        }

        return arr;
      }

      module.exports = toArray;
      /***/
    },
    /* 42 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Convert kebab-case
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Convert kebab-case
       * @param {string} key - string to be converted to Kebab-case
       * @private
       */

      function convertToKebabCase(key) {
        return key.replace(/([A-Z])/g, function (match) {
          return '-' + match.toLowerCase();
        });
      }

      module.exports = convertToKebabCase;
      /***/
    },
    /* 43 */

    /***/
    function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE__43__;
      /***/
    },
    /* 44 */

    /***/
    function (module, exports, __nested_webpack_require_167551__) {
      "use strict";
      /**
       * @fileoverview Calendar Header
       * @author NHN. FE dev Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_167551__(0);

      var CustomEvents = __nested_webpack_require_167551__(8);

      var closest = __nested_webpack_require_167551__(25);

      var removeElement = __nested_webpack_require_167551__(14);

      var localeTexts = __nested_webpack_require_167551__(10);

      var headerTmpl = __nested_webpack_require_167551__(45);

      var DateTimeFormatter = __nested_webpack_require_167551__(30);

      var constants = __nested_webpack_require_167551__(1);

      var util = __nested_webpack_require_167551__(4);

      var mouseTouchEvent = __nested_webpack_require_167551__(19);

      var TYPE_DATE = constants.TYPE_DATE;
      var TYPE_MONTH = constants.TYPE_MONTH;
      var TYPE_YEAR = constants.TYPE_YEAR;
      var CLASS_NAME_TITLE_MONTH = 'tui-calendar-title-month';
      var CLASS_NAME_TITLE_YEAR = 'tui-calendar-title-year';
      var CLASS_NAME_TITLE_YEAR_TO_YEAR = 'tui-calendar-title-year-to-year';
      var SELECTOR_INNER_ELEM = '.tui-calendar-header-inner';
      var SELECTOR_INFO_ELEM = '.tui-calendar-header-info';
      var SELECTOR_BTN = '.tui-calendar-btn';
      var YEAR_TITLE_FORMAT = 'yyyy';
      /**
       * @ignore
       * @class
       * @param {string|HTMLElement} container - Header container or selector
       * @param {object} option - Header option
       * @param {string} option.language - Header language
       * @param {boolean} option.showToday - Has today box or not.
       * @param {boolean} option.showJumpButtons - Has jump buttons or not.
       */

      var Header = defineClass(
      /** @lends Header.prototype */
      {
        init: function init(container, option) {
          /**
           * Container element
           * @type {HTMLElement}
           * @private
           */
          this._container = util.getElement(container);
          /**
           * Header inner element
           * @type {HTMLElement}
           * @private
           */

          this._innerElement = null;
          /**
           * Header info element
           * @type {HTMLElement}
           * @private
           */

          this._infoElement = null;
          /**
           * Render today box or not
           * @type {boolean}
           * @private
           */

          this._showToday = option.showToday;
          /**
           * Render jump buttons or not (next,prev year on date calendar)
           * @type {boolean}
           * @private
           */

          this._showJumpButtons = option.showJumpButtons;
          /**
           * Year_Month title formatter
           * @type {DateTimeFormatter}
           * @private
           */

          this._yearMonthTitleFormatter = null;
          /**
           * Year title formatter
           * @type {DateTimeFormatter}
           * @private
           */

          this._yearTitleFormatter = null;
          /**
           * Today formatter
           * @type {DateTimeFormatter}
           * @private
           */

          this._todayFormatter = null;

          this._setFormatters(localeTexts[option.language]);

          this._setEvents(option);
        },

        /**
         * @param {object} localeText - Locale text
         * @private
         */
        _setFormatters: function _setFormatters(localeText) {
          this._yearMonthTitleFormatter = new DateTimeFormatter(localeText.titleFormat, localeText.titles);
          this._yearTitleFormatter = new DateTimeFormatter(YEAR_TITLE_FORMAT, localeText.titles);
          this._todayFormatter = new DateTimeFormatter(localeText.todayFormat, localeText.titles);
        },

        /**
         * @param {object} option - Constructor option
         * @private
         */
        _setEvents: function _setEvents() {
          mouseTouchEvent.on(this._container, 'click', this._onClickHandler, this);
        },

        /**
         * @private
         */
        _removeEvents: function _removeEvents() {
          this.off();
          mouseTouchEvent.off(this._container, 'click', this._onClickHandler);
        },

        /**
         * Fire customEvents
         * @param {Event} ev An event object
         * @private
         */
        _onClickHandler: function _onClickHandler(ev) {
          var target = util.getTarget(ev);

          if (closest(target, SELECTOR_BTN)) {
            this.fire('click', ev);
          }
        },

        /**
         * @param {string} type - Calendar type
         * @returns {string}
         * @private
         */
        _getTitleClass: function _getTitleClass(type) {
          switch (type) {
            case TYPE_DATE:
              return CLASS_NAME_TITLE_MONTH;

            case TYPE_MONTH:
              return CLASS_NAME_TITLE_YEAR;

            case TYPE_YEAR:
              return CLASS_NAME_TITLE_YEAR_TO_YEAR;

            default:
              return '';
          }
        },

        /**
         * @param {Date} date - date
         * @param {string} type - Calendar type
         * @returns {string}
         * @private
         */
        _getTitleText: function _getTitleText(date, type) {
          var currentYear, start, end;

          switch (type) {
            case TYPE_DATE:
              return this._yearMonthTitleFormatter.format(date);

            case TYPE_MONTH:
              return this._yearTitleFormatter.format(date);

            case TYPE_YEAR:
              currentYear = date.getFullYear();
              start = new Date(currentYear - 4, 0, 1);
              end = new Date(currentYear + 4, 0, 1);
              return this._yearTitleFormatter.format(start) + ' - ' + this._yearTitleFormatter.format(end);

            default:
              return '';
          }
        },

        /**
         * Change langauge
         * @param {string} language - Language
         */
        changeLanguage: function changeLanguage(language) {
          this._setFormatters(localeTexts[language]);
        },

        /**
         * Render header
         * @param {Date} date - date
         * @param {string} type - Calendar type
         */
        render: function render(date, type) {
          var context = {
            showToday: this._showToday,
            showJumpButtons: this._showJumpButtons,
            todayText: this._todayFormatter.format(new Date()),
            isDateCalendar: type === TYPE_DATE,
            titleClass: this._getTitleClass(type),
            title: this._getTitleText(date, type)
          };
          this._container.innerHTML = headerTmpl(context).replace(/^\s+|\s+$/g, '');
          this._innerElement = this._container.querySelector(SELECTOR_INNER_ELEM);

          if (context.showToday) {
            this._infoElement = this._container.querySelector(SELECTOR_INFO_ELEM);
          }
        },

        /**
         * Destroy header
         */
        destroy: function destroy() {
          this._removeEvents();

          removeElement(this._innerElement);
          removeElement(this._infoElement);
          this._container = this._showToday = this._showJumpButtons = this._yearMonthTitleFormatter = this._yearTitleFormatter = this._todayFormatter = this._innerElement = this._infoElement = null;
        }
      });
      CustomEvents.mixin(Header);
      module.exports = Header;
      /***/
    },
    /* 45 */

    /***/
    function (module, exports, __nested_webpack_require_174924__) {
      "use strict";

      var template = __nested_webpack_require_174924__(11);

      module.exports = function (context) {
        var source = '{{if isDateCalendar}}' + '  {{if showJumpButtons}}' + '    <div class="tui-calendar-header-inner tui-calendar-has-btns">' + '      <button class="tui-calendar-btn tui-calendar-btn-prev-year">Prev year</button>' + '      <button class="tui-calendar-btn tui-calendar-btn-prev-month">Prev month</button>' + '      <em class="tui-calendar-title {{titleClass}}">{{title}}</em>' + '      <button class="tui-calendar-btn tui-calendar-btn-next-month">Next month</button>' + '      <button class="tui-calendar-btn tui-calendar-btn-next-year">Next year</button>' + '    </div>' + '  {{else}}' + '    <div class="tui-calendar-header-inner">' + '      <button class="tui-calendar-btn tui-calendar-btn-prev-month">Prev month</button>' + '      <em class="tui-calendar-title {{titleClass}}">{{title}}</em>' + '      <button class="tui-calendar-btn tui-calendar-btn-next-month">Next month</button>' + '    </div>' + '  {{/if}}' + '{{else}}' + '  <div class="tui-calendar-header-inner">' + '    <button class="tui-calendar-btn tui-calendar-btn-prev-year">Prev year</button>' + '    <em class="tui-calendar-title {{titleClass}}">{{title}}</em>' + '    <button class="tui-calendar-btn tui-calendar-btn-next-year">Next year</button>' + '  </div>' + '{{/if}}' + '{{if showToday}}' + '  <div class="tui-calendar-header-info">' + '    <p class="tui-calendar-title-today">{{todayText}}</p>' + '  </div>' + '{{/if}}';
        return template(source, context);
      };
      /***/

    },
    /* 46 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a instance of HTMLNode or not.
       * If the given variables is a instance of HTMLNode, return true.
       * @param {*} html - Target for checking
       * @returns {boolean} Is HTMLNode ?
       * @memberof module:type
       */

      function isHTMLNode(html) {
        if ((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object') {
          return html && (html instanceof HTMLElement || !!html.nodeType);
        }

        return !!(html && html.nodeType);
      }

      module.exports = isHTMLNode;
      /***/
    },
    /* 47 */

    /***/
    function (module, exports, __nested_webpack_require_177490__) {
      "use strict";
      /**
       * @fileoverview Send hostname on DOMContentLoaded.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isUndefined = __nested_webpack_require_177490__(12);

      var imagePing = __nested_webpack_require_177490__(48);

      var ms7days = 7 * 24 * 60 * 60 * 1000;
      /**
       * Check if the date has passed 7 days
       * @param {number} date - milliseconds
       * @returns {boolean}
       * @private
       */

      function isExpired(date) {
        var now = new Date().getTime();
        return now - date > ms7days;
      }
      /**
       * Send hostname on DOMContentLoaded.
       * To prevent hostname set tui.usageStatistics to false.
       * @param {string} appName - application name
       * @param {string} trackingId - GA tracking ID
       * @ignore
       */


      function sendHostname(appName, trackingId) {
        var url = 'https://www.google-analytics.com/collect';
        var hostname = location.hostname;
        var hitType = 'event';
        var eventCategory = 'use';
        var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
        var date = window.localStorage.getItem(applicationKeyForStorage); // skip if the flag is defined and is set to false explicitly

        if (!isUndefined(window.tui) && window.tui.usageStatistics === false) {
          return;
        } // skip if not pass seven days old


        if (date && !isExpired(date)) {
          return;
        }

        window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
        setTimeout(function () {
          if (document.readyState === 'interactive' || document.readyState === 'complete') {
            imagePing(url, {
              v: 1,
              t: hitType,
              tid: trackingId,
              cid: hostname,
              dp: hostname,
              dh: appName,
              el: appName,
              ec: eventCategory
            });
          }
        }, 1000);
      }

      module.exports = sendHostname;
      /***/
    },
    /* 48 */

    /***/
    function (module, exports, __nested_webpack_require_179643__) {
      "use strict";
      /**
       * @fileoverview Request image ping.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachOwnProperties = __nested_webpack_require_179643__(23);
      /**
       * @module request
       */

      /**
       * Request image ping.
       * @param {String} url url for ping request
       * @param {Object} trackingInfo infos for make query string
       * @returns {HTMLElement}
       * @memberof module:request
       * @example
       * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
       *
       * imagePing('https://www.google-analytics.com/collect', {
       *     v: 1,
       *     t: 'event',
       *     tid: 'trackingid',
       *     cid: 'cid',
       *     dp: 'dp',
       *     dh: 'dh'
       * });
       */


      function imagePing(url, trackingInfo) {
        var trackingElement = document.createElement('img');
        var queryString = '';
        forEachOwnProperties(trackingInfo, function (value, key) {
          queryString += '&' + key + '=' + value;
        });
        queryString = queryString.substring(1);
        trackingElement.src = url + '?' + queryString;
        trackingElement.style.display = 'none';
        document.body.appendChild(trackingElement);
        document.body.removeChild(trackingElement);
        return trackingElement;
      }

      module.exports = imagePing;
      /***/
    },
    /* 49 */

    /***/
    function (module, exports, __nested_webpack_require_181162__) {
      "use strict";
      /**
       * @fileoverview Calendar body
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_181162__(2);

      var defineClass = __nested_webpack_require_181162__(0);

      var DateLayer = __nested_webpack_require_181162__(50);

      var MonthLayer = __nested_webpack_require_181162__(52);

      var YearLayer = __nested_webpack_require_181162__(54);

      var constants = __nested_webpack_require_181162__(1);

      var TYPE_DATE = constants.TYPE_DATE;
      var TYPE_MONTH = constants.TYPE_MONTH;
      var TYPE_YEAR = constants.TYPE_YEAR;
      /**
       * @ignore
       * @class
       */

      var Body = defineClass(
      /** @lends Body.prototype */
      {
        init: function init(bodyContainer, options) {
          var language = options.language;
          var weekStartDay = options.weekStartDay;
          /**
           * Body container element
           * @type {HTMLElement}
           * @private
           */

          this._container = bodyContainer;
          /**
           * DateLayer
           * @type {DateLayer}
           * @private
           */

          this._dateLayer = new DateLayer(language, weekStartDay);
          /**
           * MonthLayer
           * @type {MonthLayer}
           * @private
           */

          this._monthLayer = new MonthLayer(language);
          /**
           * YearLayer
           * @type {YearLayer}
           * @private
           */

          this._yearLayer = new YearLayer(language);
          /**
           * Current Layer
           * @type {DateLayer|MonthLayer|YearLayer}
           * @private
           */

          this._currentLayer = this._dateLayer;
        },

        /**
         * Returns matched layer
         * @param {string} type - Layer type
         * @returns {Base} - Layer
         * @private
         */
        _getLayer: function _getLayer(type) {
          switch (type) {
            case TYPE_DATE:
              return this._dateLayer;

            case TYPE_MONTH:
              return this._monthLayer;

            case TYPE_YEAR:
              return this._yearLayer;

            default:
              return this._currentLayer;
          }
        },

        /**
         * Iterate each layer
         * @param {Function} fn - function
         * @private
         */
        _eachLayer: function _eachLayer(fn) {
          forEachArray([this._dateLayer, this._monthLayer, this._yearLayer], fn);
        },

        /**
         * Change language
         * @param {string} language - Language
         */
        changeLanguage: function changeLanguage(language) {
          this._eachLayer(function (layer) {
            layer.changeLanguage(language);
          });
        },

        /**
         * Render body
         * @param {Date} date - date
         * @param {string} type - Layer type
         */
        render: function render(date, type) {
          var nextLayer = this._getLayer(type);

          var prevLayer = this._currentLayer;
          prevLayer.remove();
          nextLayer.render(date, this._container);
          this._currentLayer = nextLayer;
        },

        /**
         * Returns date elements
         * @returns {HTMLElement[]}
         */
        getDateElements: function getDateElements() {
          return this._currentLayer.getDateElements();
        },

        /**
         * Destory
         */
        destroy: function destroy() {
          this._eachLayer(function (layer) {
            layer.remove();
          });

          this._container = this._currentLayer = this._dateLayer = this._monthLayer = this._yearLayer = null;
        }
      });
      module.exports = Body;
      /***/
    },
    /* 50 */

    /***/
    function (module, exports, __nested_webpack_require_184939__) {
      "use strict";
      /**
       * @fileoverview Date layer
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_184939__(0);

      var dateUtil = __nested_webpack_require_184939__(5);

      var bodyTmpl = __nested_webpack_require_184939__(51);

      var LayerBase = __nested_webpack_require_184939__(20);

      var TYPE_DATE = __nested_webpack_require_184939__(1).TYPE_DATE;

      var WEEK_START_DAY_MAP = __nested_webpack_require_184939__(1).WEEK_START_DAY_MAP;

      var DATE_SELECTOR = '.tui-calendar-date';
      var DAYS_OF_WEEK = 7;
      /**
       * @ignore
       * @class
       * @extends LayerBase
       * @param {string} language - Initial language
       */

      var DateLayer = defineClass(LayerBase,
      /** @lends DateLayer.prototype */
      {
        init: function init(language, weekStartDay) {
          LayerBase.call(this, language);
          this.weekStartDay = WEEK_START_DAY_MAP[String(weekStartDay).toLowerCase()] || 0;
        },

        /**
         * Layer type
         * @type {string}
         * @private
         */
        _type: TYPE_DATE,

        /**
         * @override
         * @private
         * @returns {object} Template context
         */
        _makeContext: function _makeContext(date) {
          var daysShort = this._localeText.titles.D;
          var year, month, days, i;
          date = date || new Date();
          year = date.getFullYear();
          month = date.getMonth() + 1;

          if (this.weekStartDay) {
            days = daysShort.slice();

            for (i = 0; i < this.weekStartDay; i += 1) {
              days.push(days.shift());
            }

            daysShort = days;
          }

          return {
            Sun: daysShort[0],
            Mon: daysShort[1],
            Tue: daysShort[2],
            Wed: daysShort[3],
            Thu: daysShort[4],
            Fri: daysShort[5],
            Sat: daysShort[6],
            year: year,
            month: month,
            weeks: this._getWeeks(year, month)
          };
        },

        /**
         * weeks (templating) for date-calendar
         * @param {number} year - Year
         * @param {number} month - Month
         * @returns {Array.<Array.<Date>>}
         * @private
         */
        _getWeeks: function _getWeeks(year, month) {
          var weekNumber = 0;
          var weeksCount = 6; // Fix for no changing height

          var weeks = [];
          var week, dates, i;

          while (weekNumber < weeksCount) {
            dates = [];

            for (i = this.weekStartDay; i < DAYS_OF_WEEK + this.weekStartDay; i += 1) {
              dates.push(dateUtil.getDateOfWeek(year, month, weekNumber, i));
            }

            week = this._getWeek(year, month, dates);

            if (this.weekStartDay && !_isFirstWeek(weekNumber, week[0].dayInMonth)) {
              weeks.push(this._getFirstWeek(year, month));
              weeksCount -= 1; // Fix for no changing height
            }

            weeks.push(week);
            weekNumber += 1;
          }

          return weeks;
        },

        /**
         * week (templating) for date-calendar
         * @param {number} currentYear
         * @param {number} currentMonth
         * @param {Array.<Date>} dates
         * @private
         */
        _getWeek: function _getWeek(currentYear, currentMonth, dates) {
          var firstDateOfCurrentMonth = new Date(currentYear, currentMonth - 1, 1);
          var lastDateOfCurrentMonth = new Date(currentYear, currentMonth, 0);
          var contexts = [];
          var i = 0;
          var length = dates.length;
          var date, className;

          for (; i < length; i += 1) {
            className = 'tui-calendar-date';
            date = dates[i];

            if (date < firstDateOfCurrentMonth) {
              className += ' tui-calendar-prev-month';
            }

            if (date > lastDateOfCurrentMonth) {
              className += ' tui-calendar-next-month';
            }

            if (date.getDay() === 0) {
              className += ' tui-calendar-sun';
            } else if (date.getDay() === 6) {
              className += ' tui-calendar-sat';
            }

            contexts.push({
              dayInMonth: date.getDate(),
              className: className,
              timestamp: date.getTime()
            });
          }

          return contexts;
        },

        /**
         * Render date-layer
         * @override
         * @param {Date} date Date to render
         * @param {HTMLElement} container A container element for the rendered element
         */
        render: function render(date, container) {
          var context = this._makeContext(date);

          container.innerHTML = bodyTmpl(context);
          this._element = container.firstChild;
        },

        /**
         * Return date elements
         * @override
         * @returns {HTMLElement[]}
         */
        getDateElements: function getDateElements() {
          return this._element.querySelectorAll(DATE_SELECTOR);
        },
        _getFirstWeek: function _getFirstWeek(year, month) {
          var firstWeekDates = [];
          var i;

          for (i = this.weekStartDay; i < DAYS_OF_WEEK + this.weekStartDay; i += 1) {
            firstWeekDates.push(dateUtil.getDateOfWeek(year, month, -1, i));
          }

          return this._getWeek(year, month, firstWeekDates);
        }
      });

      function _isFirstWeek(weekIndex, dayInMonth) {
        return weekIndex || dayInMonth === 1 || dayInMonth > DAYS_OF_WEEK;
      }

      module.exports = DateLayer;
      /***/
    },
    /* 51 */

    /***/
    function (module, exports, __nested_webpack_require_190651__) {
      "use strict";

      var template = __nested_webpack_require_190651__(11);

      module.exports = function (context) {
        var source = '<table class="tui-calendar-body-inner" cellspacing="0" cellpadding="0">' + '  <caption><span>Dates</span></caption>' + '  <thead class="tui-calendar-body-header">' + '    <tr>' + '      <th class="tui-sun" scope="col">{{Sun}}</th>' + '      <th scope="col">{{Mon}}</th>' + '      <th scope="col">{{Tue}}</th>' + '      <th scope="col">{{Wed}}</th>' + '      <th scope="col">{{Thu}}</th>' + '      <th scope="col">{{Fri}}</th>' + '      <th class="tui-sat" scope="col">{{Sat}}</th>' + '    </tr>' + '  </thead>' + '  <tbody>' + '    {{each weeks}}' + '    <tr class="tui-calendar-week">' + '      {{each @this}}' + '      <td class="{{@this["className"]}}" data-timestamp="{{@this["timestamp"]}}">{{@this["dayInMonth"]}}</td>' + '      {{/each}}' + '    </tr>' + '    {{/each}}' + '  </tbody>' + '</table>';
        return template(source, context);
      };
      /***/

    },
    /* 52 */

    /***/
    function (module, exports, __nested_webpack_require_191741__) {
      "use strict";
      /**
       * @fileoverview Month layer
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_191741__(0);

      var bodyTmpl = __nested_webpack_require_191741__(53);

      var LayerBase = __nested_webpack_require_191741__(20);

      var TYPE_MONTH = __nested_webpack_require_191741__(1).TYPE_MONTH;

      var dateUtil = __nested_webpack_require_191741__(5);

      var DATE_SELECTOR = '.tui-calendar-month';
      /**
       * @class
       * @extends LayerBase
       * @param {string} language - Initial language
       * @ignore
       */

      var MonthLayer = defineClass(LayerBase,
      /** @lends MonthLayer.prototype */
      {
        init: function init(language) {
          LayerBase.call(this, language);
        },

        /**
         * Layer type
         * @type {string}
         * @private
         */
        _type: TYPE_MONTH,

        /**
         * @override
         * @returns {object} Template context
         * @private
         */
        _makeContext: function _makeContext(date) {
          var monthsShort = this._localeText.titles.MMM;
          return {
            year: date.getFullYear(),
            Jan: monthsShort[0],
            Feb: monthsShort[1],
            Mar: monthsShort[2],
            Apr: monthsShort[3],
            May: monthsShort[4],
            Jun: monthsShort[5],
            Jul: monthsShort[6],
            Aug: monthsShort[7],
            Sep: monthsShort[8],
            Oct: monthsShort[9],
            Nov: monthsShort[10],
            Dec: monthsShort[11],
            getFirstDayTimestamp: dateUtil.getFirstDayTimestamp
          };
        },

        /**
         * Render month-layer element
         * @override
         * @param {Date} date Date to render
         * @param {HTMLElement} container A container element for the rendered element
         */
        render: function render(date, container) {
          var context = this._makeContext(date);

          container.innerHTML = bodyTmpl(context);
          this._element = container.firstChild;
        },

        /**
         * Returns month elements
         * @override
         * @returns {HTMLElement[]}
         */
        getDateElements: function getDateElements() {
          return this._element.querySelectorAll(DATE_SELECTOR);
        }
      });
      module.exports = MonthLayer;
      /***/
    },
    /* 53 */

    /***/
    function (module, exports, __nested_webpack_require_194200__) {
      "use strict";

      var template = __nested_webpack_require_194200__(11);

      module.exports = function (context) {
        var source = '<table class="tui-calendar-body-inner">' + '  <caption><span>Months</span></caption>' + '  <tbody>' + '    <tr class="tui-calendar-month-group">' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 0}}>{{Jan}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 1}}>{{Feb}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 2}}>{{Mar}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 3}}>{{Apr}}</td>' + '    </tr>' + '    <tr class="tui-calendar-month-group">' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 4}}>{{May}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 5}}>{{Jun}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 6}}>{{Jul}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 7}}>{{Aug}}</td>' + '    </tr>' + '    <tr class="tui-calendar-month-group">' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 8}}>{{Sep}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 9}}>{{Oct}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 10}}>{{Nov}}</td>' + '      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 11}}>{{Dec}}</td>' + '    </tr>' + '  </tbody>' + '</table>';
        return template(source, context);
      };
      /***/

    },
    /* 54 */

    /***/
    function (module, exports, __nested_webpack_require_196006__) {
      "use strict";
      /**
       * @fileoverview Year layer
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_196006__(0);

      var bodyTmpl = __nested_webpack_require_196006__(55);

      var LayerBase = __nested_webpack_require_196006__(20);

      var TYPE_YEAR = __nested_webpack_require_196006__(1).TYPE_YEAR;

      var dateUtil = __nested_webpack_require_196006__(5);

      var DATE_SELECTOR = '.tui-calendar-year';
      /**
       * @class
       * @extends LayerBase
       * @param {string} language - Initial language
       * @ignore
       */

      var YearLayer = defineClass(LayerBase,
      /** @lends YearLayer.prototype */
      {
        init: function init(language) {
          LayerBase.call(this, language);
        },

        /**
         * Layer type
         * @type {string}
         * @private
         */
        _type: TYPE_YEAR,

        /**
         * @override
         * @returns {object} Template context
         * @private
         */
        _makeContext: function _makeContext(date) {
          var year = date.getFullYear();
          return {
            yearGroups: [dateUtil.getRangeArr(year - 4, year - 2), dateUtil.getRangeArr(year - 1, year + 1), dateUtil.getRangeArr(year + 2, year + 4)],
            getFirstDayTimestamp: dateUtil.getFirstDayTimestamp
          };
        },

        /**
         * Render year-layer element
         * @override
         * @param {Date} date Date to render
         * @param {HTMLElement} container A container element for the rendered element
         */
        render: function render(date, container) {
          var context = this._makeContext(date);

          container.innerHTML = bodyTmpl(context);
          this._element = container.firstChild;
        },

        /**
         * Returns year elements
         * @override
         * @returns {HTMLElement[]}
         */
        getDateElements: function getDateElements() {
          return this._element.querySelectorAll(DATE_SELECTOR);
        }
      });
      module.exports = YearLayer;
      /***/
    },
    /* 55 */

    /***/
    function (module, exports, __nested_webpack_require_198155__) {
      "use strict";

      var template = __nested_webpack_require_198155__(11);

      module.exports = function (context) {
        var source = '<table class="tui-calendar-body-inner">' + '  <caption><span>Years</span></caption>' + '  <tbody>' + '    {{each yearGroups}}' + '    <tr class="tui-calendar-year-group">' + '      {{each @this}}' + '      <td class="tui-calendar-year" data-timestamp={{getFirstDayTimestamp @this 0}}>' + '        {{@this}}' + '      </td>' + '      {{/each}}' + '    </tr>' + '    {{/each}}' + '  </tbody>' + '</table>';
        return template(source, context);
      };
      /***/

    },
    /* 56 */

    /***/
    function (module, exports, __nested_webpack_require_198843__) {
      "use strict";
      /**
       * @fileoverview RangeModel
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_198843__(2);

      var defineClass = __nested_webpack_require_198843__(0);

      var isNumber = __nested_webpack_require_198843__(15);

      var Range = __nested_webpack_require_198843__(57);

      var util = __nested_webpack_require_198843__(4);
      /**
       * @class
       * @ignore
       * @param {Array.<Array.<number>>} ranges - Ranges
       */


      var RangeModel = defineClass(
      /** @lends RangeModel.prototype */
      {
        init: function init(ranges) {
          ranges = ranges || [];
          /**
           * @type {Array.<Range>}
           * @private
           */

          this._ranges = [];
          forEachArray(ranges, function (range) {
            this.add(range[0], range[1]);
          }, this);
        },

        /**
         * Whether the ranges contain a time or time-range
         * @param {number} start - Start
         * @param {number} [end] - End
         * @returns {boolean}
         */
        contains: function contains(start, end) {
          var i = 0;
          var length = this._ranges.length;
          var range;

          for (; i < length; i += 1) {
            range = this._ranges[i];

            if (range.contains(start, end)) {
              return true;
            }
          }

          return false;
        },

        /**
         * Whether overlaps with a point or range
         * @param {number} start - Start
         * @param {number} [end] - End
         * @returns {boolean}
         */
        hasOverlap: function hasOverlap(start, end) {
          var i = 0;
          var length = this._ranges.length;
          var range;

          for (; i < length; i += 1) {
            range = this._ranges[i];

            if (range.isOverlapped(start, end)) {
              return true;
            }
          }

          return false;
        },

        /**
         * Add range
         * @param {number} start - Start
         * @param {number} [end] - End
         */
        add: function add(start, end) {
          var overlapped = false;
          var i = 0;
          var len = this._ranges.length;
          var range;

          for (; i < len; i += 1) {
            range = this._ranges[i];
            overlapped = range.isOverlapped(start, end);

            if (overlapped) {
              range.merge(start, end);
              break;
            }

            if (start < range.start) {
              break;
            }
          }

          if (!overlapped) {
            this._ranges.splice(i, 0, new Range(start, end));
          }
        },

        /**
         * Returns minimum value in ranges
         * @returns {number}
         */
        getMinimumValue: function getMinimumValue() {
          return this._ranges[0].start;
        },

        /**
         * Returns maximum value in ranges
         * @returns {number}
         */
        getMaximumValue: function getMaximumValue() {
          var length = this._ranges.length;
          return this._ranges[length - 1].end;
        },

        /**
         * @param {number} start - Start
         * @param {number} [end] - End
         */
        exclude: function exclude(start, end) {
          if (!isNumber(end)) {
            end = start;
          }

          forEachArray(this._ranges, function (range) {
            var rangeEnd;

            if (range.isOverlapped(start, end)) {
              rangeEnd = range.end; // Save before excluding

              range.exclude(start, end);

              if (end + 1 <= rangeEnd) {
                this.add(end + 1, rangeEnd); // Add split range
              }
            }
          }, this); // Reduce empty ranges

          this._ranges = util.filter(this._ranges, function (range) {
            return !range.isEmpty();
          });
        },

        /**
         * Returns the first overlapped range from the point or range
         * @param {number} start - Start
         * @param {number} end - End
         * @returns {Array.<number>} - [start, end]
         */
        findOverlappedRange: function findOverlappedRange(start, end) {
          var i = 0;
          var len = this._ranges.length;
          var range;

          for (; i < len; i += 1) {
            range = this._ranges[i];

            if (range.isOverlapped(start, end)) {
              return [range.start, range.end];
            }
          }

          return null;
        }
      });
      module.exports = RangeModel;
      /***/
    },
    /* 57 */

    /***/
    function (module, exports, __nested_webpack_require_203506__) {
      "use strict";
      /**
       * @fileoverview Range (in RangeModel)
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_203506__(0);

      var isNumber = __nested_webpack_require_203506__(15);
      /**
       * @class
       * @ignore
       * @param {number} start - Start of range
       * @param {number} [end] - End of range
       */


      var Range = defineClass(
      /** @lends Range.prototype */
      {
        init: function init(start, end) {
          this.setRange(start, end);
        },

        /**
         * Set range
         * @param {number} start - Start number
         * @param {number} [end] - End number
         */
        setRange: function setRange(start, end) {
          if (!isNumber(end)) {
            end = start;
          }

          this.start = Math.min(start, end);
          this.end = Math.max(start, end);
        },

        /**
         * Merge range
         * @param {number} start - Start
         * @param {number} [end] - End
         */
        merge: function merge(start, end) {
          if (!isNumber(start) || !isNumber(end) || !this.isOverlapped(start, end)) {
            return;
          }

          this.start = Math.min(start, this.start);
          this.end = Math.max(end, this.end);
        },

        /**
         * Whether being empty.
         * @returns {boolean}
         */
        isEmpty: function isEmpty() {
          return !isNumber(this.start) || !isNumber(this.end);
        },

        /**
         * Set empty
         */
        setEmpty: function setEmpty() {
          this.start = this.end = null;
        },

        /**
         * Whether containing a range.
         * @param {number} start - Start
         * @param {number} [end] - End
         * @returns {boolean}
         */
        contains: function contains(start, end) {
          if (!isNumber(end)) {
            end = start;
          }

          return this.start <= start && end <= this.end;
        },

        /**
         * Whether overlaps with a range
         * @param {number} start - Start
         * @param {number} [end] - End
         * @returns {boolean}
         */
        isOverlapped: function isOverlapped(start, end) {
          if (!isNumber(end)) {
            end = start;
          }

          return this.start <= end && this.end >= start;
        },

        /**
         * Exclude a range
         * @param {number} start - Start
         * @param {number} end - End
         */
        exclude: function exclude(start, end) {
          if (start <= this.start && end >= this.end) {
            // Excluding range contains this
            this.setEmpty();
          } else if (this.contains(start)) {
            this.setRange(this.start, start - 1);
          } else if (this.contains(end)) {
            this.setRange(end + 1, this.end);
          }
        }
      });
      module.exports = Range;
      /***/
    },
    /* 58 */

    /***/
    function (module, exports, __nested_webpack_require_206546__) {
      "use strict";

      var template = __nested_webpack_require_206546__(11);

      module.exports = function (context) {
        var source = '<div class="tui-datepicker">' + '  {{if timePicker}}' + '    {{if isTab}}' + '      <div class="tui-datepicker-selector">' + '        <button type="button" class="tui-datepicker-selector-button tui-is-checked" aria-label="selected">' + '          <span class="tui-ico-date"></span>{{localeText["date"]}}' + '        </button>' + '        <button type="button" class="tui-datepicker-selector-button">' + '          <span class="tui-ico-time"></span>{{localeText["time"]}}' + '        </button>' + '      </div>' + '      <div class="tui-datepicker-body">' + '        <div class="tui-calendar-container"></div>' + '        <div class="tui-timepicker-container"></div>' + '      </div>' + '    {{else}}' + '      <div class="tui-datepicker-body">' + '        <div class="tui-calendar-container"></div>' + '      </div>' + '      <div class="tui-datepicker-footer">' + '        <div class="tui-timepicker-container"></div>' + '      </div>' + '    {{/if}}' + '  {{else}}' + '    <div class="tui-datepicker-body">' + '      <div class="tui-calendar-container"></div>' + '    </div>' + '  {{/if}}' + '</div>';
        return template(source, context);
      };
      /***/

    },
    /* 59 */

    /***/
    function (module, exports, __nested_webpack_require_207933__) {
      "use strict";
      /**
       * @fileoverview DatePicker input(element) component
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var defineClass = __nested_webpack_require_207933__(0);

      var CustomEvents = __nested_webpack_require_207933__(8);

      var on = __nested_webpack_require_207933__(31);

      var off = __nested_webpack_require_207933__(33);

      var DateTimeFormatter = __nested_webpack_require_207933__(30);

      var mouseTouchEvent = __nested_webpack_require_207933__(19);

      var util = __nested_webpack_require_207933__(4);

      var DEFAULT_FORMAT = 'yyyy-MM-dd';
      /**
       * DatePicker Input
       * @ignore
       * @class
       * @param {string|HTMLElement} inputElement - Input element or selector
       * @param {object} option - Option
       * @param {string} option.id - Id
       * @param {string} option.format - Text format
       */

      var DatePickerInput = defineClass(
      /** @lends DatePickerInput.prototype */
      {
        init: function init(inputElement, option) {
          option.format = option.format || DEFAULT_FORMAT;
          /**
           * Input element
           * @type {HTMLElement}
           * @private
           */

          this._input = util.getElement(inputElement);
          /**
           * Id
           * @type {string}
           * @private
           */

          this._id = option.id;
          /**
           * LocaleText titles
           * @type {Object}
           * @private
           */

          this._titles = option.localeText.titles;
          /**
           * Text<->DateTime Formatter
           * @type {DateTimeFormatter}
           * @private
           */

          this._formatter = new DateTimeFormatter(option.format, this._titles);

          this._setEvents();
        },

        /**
         * Change locale titles
         * @param {object} titles - locale text in format
         */
        changeLocaleTitles: function changeLocaleTitles(titles) {
          this._titles = titles;
        },

        /**
         * Set input 'click', 'change' event
         * @private
         */
        _setEvents: function _setEvents() {
          if (this._input) {
            on(this._input, 'change', this._onChangeHandler, this);
            mouseTouchEvent.on(this._input, 'click', this._onClickHandler, this);
          }
        },

        /**
         * Remove events
         * @private
         */
        _removeEvents: function _removeEvents() {
          this.off();

          if (this._input) {
            off(this._input, 'change', this._onChangeHandler);
            mouseTouchEvent.off(this._input, 'click', this._onClickHandler);
          }
        },

        /**
         * Onchange handler
         */
        _onChangeHandler: function _onChangeHandler() {
          this.fire('change');
        },

        /**
         * Onclick handler
         */
        _onClickHandler: function _onClickHandler() {
          this.fire('click');
        },

        /**
         * Check element is same as the input element.
         * @param {HTMLElement} el - To check matched set of elements
         * @returns {boolean}
         */
        is: function is(el) {
          return this._input === el;
        },

        /**
         * Enable input
         */
        enable: function enable() {
          if (this._input) {
            this._input.removeAttribute('disabled');
          }
        },

        /**
         * Disable input
         */
        disable: function disable() {
          if (this._input) {
            this._input.setAttribute('disabled', true);
          }
        },

        /**
         * Return format
         * @returns {string}
         */
        getFormat: function getFormat() {
          return this._formatter.getRawString();
        },

        /**
         * Set format
         * @param {string} format - Format
         */
        setFormat: function setFormat(format) {
          if (!format) {
            return;
          }

          this._formatter = new DateTimeFormatter(format, this._titles);
        },

        /**
         * Clear text
         */
        clearText: function clearText() {
          if (this._input) {
            this._input.value = '';
          }
        },

        /**
         * Set value from date
         * @param {Date} date - Date
         */
        setDate: function setDate(date) {
          if (this._input) {
            this._input.value = this._formatter.format(date);
          }
        },

        /**
         * Returns date from input-text
         * @returns {Date}
         * @throws {Error}
         */
        getDate: function getDate() {
          var value = '';

          if (this._input) {
            value = this._input.value;
          }

          return this._formatter.parse(value);
        },

        /**
         * Destroy
         */
        destroy: function destroy() {
          this._removeEvents();

          this._input = this._id = this._formatter = null;
        }
      });
      CustomEvents.mixin(DatePickerInput);
      module.exports = DatePickerInput;
      /***/
    },
    /* 60 */

    /***/
    function (module, exports, __nested_webpack_require_213097__) {
      "use strict";
      /**
       * @fileoverview Date-Range picker
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_213097__(2);

      var defineClass = __nested_webpack_require_213097__(0);

      var CustomEvents = __nested_webpack_require_213097__(8);

      var addClass = __nested_webpack_require_213097__(16);

      var getData = __nested_webpack_require_213097__(26);

      var removeClass = __nested_webpack_require_213097__(18);

      var extend = __nested_webpack_require_213097__(7);

      var DatePicker = __nested_webpack_require_213097__(21);

      var dateUtil = __nested_webpack_require_213097__(5);

      var constants = __nested_webpack_require_213097__(1);

      var util = __nested_webpack_require_213097__(4);

      var CLASS_NAME_RANGE_PICKER = 'tui-rangepicker';
      var CLASS_NAME_SELECTED = constants.CLASS_NAME_SELECTED;
      var CLASS_NAME_SELECTED_RANGE = 'tui-is-selected-range';
      /**
       * @class
       * @description
       * Create a date-range picker by {@link DatePicker#createRangePicker DatePicker.createRangePicker()}.
       * @see {@link /tutorial-example08-daterangepicker DateRangePicker example}
       * @param {object} options - DateRangePicker options
       *     @param {object} options.startpicker - Startpicker options
       *         @param {HTMLElement|string} options.startpicker.input - Startpicker input element or selector
       *         @param {HTMLElement|string} options.startpicker.container - Startpicker container element or selector
       *         @param {Date|number} [options.startpicker.date] - Initial date of the start picker. Set by a Date instance or a number(timestamp). (default: no initial date)
       *         @param {string} [options.startpicker.weekStartDay = 'Sun'] - Start of the week. 'Sun', 'Mon', ..., 'Sat'(default: 'Sun'(start on Sunday))
       *     @param {object} options.endpicker - Endpicker options
       *         @param {HTMLElement|string} options.endpicker.input - Endpicker input element or selector
       *         @param {HTMLElement|string} options.endpicker.container - Endpicker container element or selector
       *         @param {Date|number} [options.endpicker.date] - Initial date of the end picker. Set by a Date instance or a number(timestamp). (default: no initial date)
       *         @param {string} [options.endpicker.weekStartDay = 'Sun'] - Start of the week. 'Sun', 'Mon', ..., 'Sat'(default: 'Sun'(start on Sunday))
       *     @param {('date'|'month'|'year')} [options.type = 'date'] - DatePicker type. Determine whether to choose a date, month, or year.
       *     @param {string} [options.language='en'] - Language code. English('en') and Korean('ko') are provided as default. To use the other languages, use {@link DatePicker#localeTexts DatePicker.localeTexts}.
       *     @param {object|boolean} [options.timePicker] - [TimePicker](https://nhn.github.io/tui.time-picker/latest) options. Refer to the [TimePicker instance's options](https://nhn.github.io/tui.time-picker/latest/TimePicker). To create the TimePicker without customization, set to true.
       *     @param {object} [options.calendar] - {@link Calendar} options. Refer to the {@link Calendar Calendar instance's options}.
       *     @param {string} [options.format = 'yyyy-mm-dd'] - Format of the Date string
       *     @param {Array.<Array.<Date|number>>} [options.selectableRanges] - Ranges of selectable date. Set by Date instances or numbers(timestamp).
       *     @param {boolean} [options.showAlways = false] - Show the DateRangePicker always
       *     @param {boolean} [options.autoClose = true] - Close the DateRangePicker after clicking the date
       *     @param {boolean} [options.usageStatistics = true] - Send a hostname to Google Analytics (default: true)
       * @example
       * // ES6
       * import DatePicker from 'tui-date-picker'
       *
       * // CommonJS
       * const DatePicker = require('tui-date-picker');
       *
       * // Browser
       * const DatePicker = tui.DatePicker;
       *
       * const rangePicker = DatePicker.createRangePicker({
       *     startpicker: {
       *         input: '#start-input',
       *         container: '#start-container'
       *         date: new Date(2019, 3, 1),
       *         weekStartDay: 'Mon',
       *     },
       *     endpicker: {
       *         input: '#end-input',
       *         container: '#end-container',
       *         weekStartDay: 'Mon',
       *     },
       *     type: 'date',
       *     format: 'yyyy-MM-dd'
       *     selectableRanges: [
       *         [new Date(2017, 3, 1), new Date(2017, 5, 1)],
       *         [new Date(2017, 6, 3), new Date(2017, 10, 5)]
       *     ]
       * });
       */

      var DateRangePicker = defineClass(
      /** @lends DateRangePicker.prototype */
      {
        init: function init(options) {
          var startpickerOpt, endpickerOpt;
          options = options || {};
          startpickerOpt = options.startpicker;
          endpickerOpt = options.endpicker;

          if (!startpickerOpt) {
            throw new Error('The "startpicker" option is required.');
          }

          if (!endpickerOpt) {
            throw new Error('The "endpicker" option is required.');
          }
          /**
           * Start picker
           * @type {DatePicker}
           * @private
           */


          this._startpicker = null;
          /**
           * End picker
           * @type {DatePicker}
           * @private
           */

          this._endpicker = null;
          this._isRangeSet = false;
          this._preEndPickerDate = new Date().getDate();

          this._initializePickers(options);

          this._syncRangesToEndpicker();
        },

        /**
         * Create picker
         * @param {Object} options - DatePicker options
         * @private
         */
        _initializePickers: function _initializePickers(options) {
          var startpickerContainer = util.getElement(options.startpicker.container);
          var endpickerContainer = util.getElement(options.endpicker.container);
          var startInput = util.getElement(options.startpicker.input);
          var endInput = util.getElement(options.endpicker.input);
          var startpickerOpt = extend({}, options, {
            input: {
              element: startInput,
              format: options.format
            },
            date: options.startpicker.date,
            weekStartDay: options.startpicker.weekStartDay
          });
          var endpickerOpt = extend({}, options, {
            input: {
              element: endInput,
              format: options.format
            },
            date: options.endpicker.date,
            weekStartDay: options.endpicker.weekStartDay
          });
          this._startpicker = new DatePicker(startpickerContainer, startpickerOpt);

          this._startpicker.addCssClass(CLASS_NAME_RANGE_PICKER);

          this._startpicker.on('change', this._onChangeStartpicker, this);

          this._startpicker.on('draw', this._onDrawPicker, this);

          this._endpicker = new DatePicker(endpickerContainer, endpickerOpt);

          this._endpicker.addCssClass(CLASS_NAME_RANGE_PICKER);

          this._endpicker.on('change', this._onChangeEndpicker, this);

          this._endpicker.on('draw', this._onDrawPicker, this);
        },

        /**
         * Set selection-class to elements after calendar drawing
         * @param {Object} eventData - Event data {@link DatePicker#event:draw}
         * @private
         */
        _onDrawPicker: function _onDrawPicker(eventData) {
          var calendarType = eventData.type;

          var startDate = this._startpicker.getDate();

          var endDate = this._endpicker.getDate();

          if (!startDate) {
            return;
          }

          if (!endDate) {
            // Convert null to invaild date.
            endDate = new Date(NaN);
          }

          forEachArray(eventData.dateElements, function (el) {
            var elDate = new Date(Number(getData(el, 'timestamp')));
            var isInRange = dateUtil.inRange(startDate, endDate, elDate, calendarType);
            var isSelected = dateUtil.isSame(startDate, elDate, calendarType) || dateUtil.isSame(endDate, elDate, calendarType);

            this._setRangeClass(el, isInRange);

            this._setSelectedClass(el, isSelected);
          }, this);
        },

        /**
         * Set range class to element
         * @param {HTMLElement} el - Element
         * @param {boolean} isInRange - In range
         * @private
         */
        _setRangeClass: function _setRangeClass(el, isInRange) {
          if (isInRange) {
            addClass(el, CLASS_NAME_SELECTED_RANGE);
          } else {
            removeClass(el, CLASS_NAME_SELECTED_RANGE);
          }
        },

        /**
         * Set selected class to element
         * @param {HTMLElement} el - Element
         * @param {boolean} isSelected - Is selected
         * @private
         */
        _setSelectedClass: function _setSelectedClass(el, isSelected) {
          if (isSelected) {
            addClass(el, CLASS_NAME_SELECTED);
          } else {
            removeClass(el, CLASS_NAME_SELECTED);
          }
        },

        /**
         * Sync ranges to endpicker
         * @private
         */
        _syncRangesToEndpicker: function _syncRangesToEndpicker() {
          var startDate = this._startpicker.getDate();

          var overlappedRange;

          if (startDate) {
            overlappedRange = this._startpicker.findOverlappedRange(dateUtil.cloneWithStartOf(startDate).getTime(), dateUtil.cloneWithEndOf(startDate).getTime());

            this._endpicker.enable();

            this._endpicker.setRanges([[startDate.getTime(), overlappedRange[1].getTime()]]);

            this._setTimeRangeOnEndPicker();
          } else {
            this._endpicker.setNull();

            this._endpicker.disable();
          }
        },

        /**
         * After change on start-picker
         * @private
         */
        _onChangeStartpicker: function _onChangeStartpicker() {
          this._syncRangesToEndpicker();
          /**
           * Occur after the start date is changed.
           * @event DateRangePicker#change:start
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on rangePicker.on()} to bind event handlers.
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off rangePicker.off()} to unbind event handlers.
           * @see Refer to {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents} for more methods. DateRangePicker mixes in the methods from CustomEvents.
           * @example
           * // bind the 'change:start' event
           * rangePicker.on('change:start', () => {
           *     console.log(`Start date: ${rangePicker.getStartDate()}`);
           * });
           *
           * // unbind the 'change:start' event
           * rangePicker.off('change:start');
           */


          this.fire('change:start');
        },

        /**
         * After change on end-picker
         * @private
         */
        _onChangeEndpicker: function _onChangeEndpicker() {
          /**
           * Occur after the end date is changed.
           * @event DateRangePicker#change:end
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on rangePicker.on()} to bind event handlers.
           * @see {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off rangePicker.off()} to unbind event handlers.
           * @see Refer to {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents} for more methods. DateRangePicker mixes in the methods from CustomEvents.
           * @example
           * // bind the 'change:end' event
           * rangePicker.on('change:end', () => {
           *     console.log(`End date: ${rangePicker.getEndDate()}`);
           * });
           *
           * // unbind the 'change:end' event
           * rangePicker.off('change:end');
           */
          var date;

          var endPickerDate = this._endpicker.getDate();

          if (endPickerDate) {
            date = endPickerDate.getDate();

            if (this._preEndPickerDate !== date) {
              this._setTimeRangeOnEndPicker();
            }

            this._preEndPickerDate = date;
          } else {
            this._preEndPickerDate = null;
          }

          this.fire('change:end');
        },

        /**
         * Set time range on end picker
         * @private
         */
        _setTimeRangeOnEndPicker: function _setTimeRangeOnEndPicker() {
          var pickerDate, timeRange;
          var endTimePicker = this._endpicker._timePicker;

          if (!endTimePicker) {
            return;
          }

          pickerDate = this._endpicker.getDate() || this._startpicker.getDate();
          timeRange = this._getTimeRangeFromStartPicker();

          if (pickerDate && timeRange[pickerDate.getDate()]) {
            endTimePicker.setRange(timeRange[pickerDate.getDate()]);
            this._isRangeSet = true;
          } else if (this._isRangeSet) {
            endTimePicker.setRange({
              hour: 0,
              minute: 0
            });
            endTimePicker.resetMinuteRange();
            this._isRangeSet = false;
          }
        },

        /**
         * Return object of time range from start picker.
         * @returns {object}
         * @private
         */
        _getTimeRangeFromStartPicker: function _getTimeRangeFromStartPicker() {
          var startDate = this._startpicker.getDate();

          var timeRange = {};
          timeRange[startDate.getDate()] = {
            hour: startDate.getHours(),
            minute: startDate.getMinutes()
          };
          return timeRange;
        },

        /**
         * Return a start-datepicker.
         * @returns {DatePicker}
         */
        getStartpicker: function getStartpicker() {
          return this._startpicker;
        },

        /**
         * Return a end-datepicker.
         * @returns {DatePicker}
         */
        getEndpicker: function getEndpicker() {
          return this._endpicker;
        },

        /**
         * Set the start date.
         * @param {Date} date - Start date
         */
        setStartDate: function setStartDate(date) {
          this._startpicker.setDate(date);
        },

        /**
         * Return the start date.
         * @returns {?Date}
         */
        getStartDate: function getStartDate() {
          return this._startpicker.getDate();
        },

        /**
         * Return the end date.
         * @returns {?Date}
         */
        getEndDate: function getEndDate() {
          return this._endpicker.getDate();
        },

        /**
         * Set the end date.
         * @param {Date} date - End date
         */
        setEndDate: function setEndDate(date) {
          this._endpicker.setDate(date);
        },

        /**
         * Set selectable ranges.
         * @param {Array.<Array.<number|Date>>} ranges - Selectable ranges. Use Date instances or numbers(timestamp).
         */
        setRanges: function setRanges(ranges) {
          this._startpicker.setRanges(ranges);

          this._syncRangesToEndpicker();
        },

        /**
         * Add a selectable range. Use Date instances or numbers(timestamp).
         * @param {Date|number} start - the start date
         * @param {Date|number} end - the end date
         */
        addRange: function addRange(start, end) {
          this._startpicker.addRange(start, end);

          this._syncRangesToEndpicker();
        },

        /**
         * Remove a range. Use Date instances or numbers(timestamp).
         * @param {Date|number} start - the start date
         * @param {Date|number} end - the end date
         * @param {null|'date'|'month'|'year'} type - Range type. If falsy, start and end values are considered as timestamp
         */
        removeRange: function removeRange(start, end, type) {
          this._startpicker.removeRange(start, end, type);

          this._syncRangesToEndpicker();
        },

        /**
         * Change language.
         * @param {string} language - Language code. English('en') and Korean('ko') are provided as default.
         * @see To set to the other languages, use {@link DatePicker#localeTexts DatePicker.localeTexts}.
         */
        changeLanguage: function changeLanguage(language) {
          this._startpicker.changeLanguage(language);

          this._endpicker.changeLanguage(language);
        },

        /**
         * Destroy the date-range picker.
         */
        destroy: function destroy() {
          this.off();

          this._startpicker.destroy();

          this._endpicker.destroy();

          this._startpicker = this._endpicker = null;
        }
      });
      CustomEvents.mixin(DateRangePicker);
      module.exports = DateRangePicker;
      /***/
    },
    /* 61 */

    /***/
    function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

      /***/
    }
    /******/
    ])
  );
});

/***/ }),

/***/ "./node_modules/tui-time-picker/dist/tui-time-picker.js":
/*!**************************************************************!*\
  !*** ./node_modules/tui-time-picker/dist/tui-time-picker.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * TOAST UI Time Picker
 * @version 2.1.4
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_1263__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1263__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_1263__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __nested_webpack_require_1263__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __nested_webpack_require_1263__.d = function (exports, name, getter) {
        /******/
        if (!__nested_webpack_require_1263__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __nested_webpack_require_1263__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __nested_webpack_require_1263__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __nested_webpack_require_1263__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __nested_webpack_require_1263__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __nested_webpack_require_1263__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __nested_webpack_require_1263__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __nested_webpack_require_1263__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __nested_webpack_require_1263__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __nested_webpack_require_1263__.p = "dist";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __nested_webpack_require_1263__(__nested_webpack_require_1263__.s = 20);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __nested_webpack_require_5980__) {
      "use strict";
      /* eslint-disable complexity */

      /**
       * @fileoverview Returns the first index at which a given element can be found in the array.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isArray = __nested_webpack_require_5980__(3);
      /**
       * @module array
       */

      /**
       * Returns the first index at which a given element can be found in the array
       * from start index(default 0), or -1 if it is not present.
       * It compares searchElement to elements of the Array using strict equality
       * (the same method used by the ===, or triple-equals, operator).
       * @param {*} searchElement Element to locate in the array
       * @param {Array} array Array that will be traversed.
       * @param {number} startIndex Start index in array for searching (default 0)
       * @returns {number} the First index at which a given element, or -1 if it is not present
       * @memberof module:array
       * @example
       * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
       *
       * var arr = ['one', 'two', 'three', 'four'];
       * var idx1 = inArray('one', arr, 3); // -1
       * var idx2 = inArray('one', arr); // 0
       */


      function inArray(searchElement, array, startIndex) {
        var i;
        var length;
        startIndex = startIndex || 0;

        if (!isArray(array)) {
          return -1;
        }

        if (Array.prototype.indexOf) {
          return Array.prototype.indexOf.call(array, searchElement, startIndex);
        }

        length = array.length;

        for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
          if (array[i] === searchElement) {
            return i;
          }
        }

        return -1;
      }

      module.exports = inArray;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Execute the provided callback once for each element present
       * in the array(or Array-like object) in ascending order.
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the element
       *  2) The index of the element
       *  3) The array(or Array-like object) being traversed
       * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
       * @param {function} iteratee Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEachArray([1,2,3], function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       */

      function forEachArray(arr, iteratee, context) {
        var index = 0;
        var len = arr.length;
        context = context || null;

        for (; index < len; index += 1) {
          if (iteratee.call(context, arr[index], index, arr) === false) {
            break;
          }
        }
      }

      module.exports = forEachArray;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Extend the target object from other objects.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * @module object
       */

      /**
       * Extend the target object from other objects.
       * @param {object} target - Object that will be extended
       * @param {...object} objects - Objects as sources
       * @returns {object} Extended object
       * @memberof module:object
       */

      function extend(target, objects) {
        // eslint-disable-line no-unused-vars
        var hasOwnProp = Object.prototype.hasOwnProperty;
        var source, prop, i, len;

        for (i = 1, len = arguments.length; i < len; i += 1) {
          source = arguments[i];

          for (prop in source) {
            if (hasOwnProp.call(source, prop)) {
              target[prop] = source[prop];
            }
          }
        }

        return target;
      }

      module.exports = extend;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is an instance of Array or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is an instance of Array or not.
       * If the given variable is an instance of Array, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is array instance?
       * @memberof module:type
       */

      function isArray(obj) {
        return obj instanceof Array;
      }

      module.exports = isArray;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __nested_webpack_require_11333__) {
      "use strict";
      /**
       * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isArray = __nested_webpack_require_11333__(3);

      var forEachArray = __nested_webpack_require_11333__(1);

      var forEachOwnProperties = __nested_webpack_require_11333__(16);
      /**
       * @module collection
       */

      /**
       * Execute the provided callback once for each property of object(or element of array) which actually exist.
       * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the property(or The value of the element)
       *  2) The name of the property(or The index of the element)
       *  3) The object being traversed
       * @param {Object} obj The object that will be traversed
       * @param {function} iteratee Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEach([1,2,3], function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       *
       * // In case of Array-like object
       * var array = Array.prototype.slice.call(arrayLike); // change to array
       * forEach(array, function(value){
       *     sum += value;
       * });
       */


      function forEach(obj, iteratee, context) {
        if (isArray(obj)) {
          forEachArray(obj, iteratee, context);
        } else {
          forEachOwnProperties(obj, iteratee, context);
        }
      }

      module.exports = forEach;
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is undefined or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is undefined or not.
       * If the given variable is undefined, returns true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is undefined?
       * @memberof module:type
       */

      function isUndefined(obj) {
        return obj === undefined; // eslint-disable-line no-undefined
      }

      module.exports = isUndefined;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a string or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a string or not.
       * If the given variable is a string, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is string?
       * @memberof module:type
       */

      function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
      }

      module.exports = isString;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __nested_webpack_require_14742__) {
      "use strict";
      /**
       * @fileoverview Convert text by binding expressions with context.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_14742__(0);

      var forEach = __nested_webpack_require_14742__(4);

      var isArray = __nested_webpack_require_14742__(3);

      var isString = __nested_webpack_require_14742__(6);

      var extend = __nested_webpack_require_14742__(2); // IE8 does not support capture groups.


      var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
      var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
      var BRACKET_REGEXP = /\[\s?|\s?\]/;
      var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
      var DOT_REGEXP = /\./;
      var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
      var STRING_REGEXP = /"|'/g;
      var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
      var EXPRESSION_INTERVAL = 2;
      var BLOCK_HELPERS = {
        'if': handleIf,
        'each': handleEach,
        'with': handleWith
      };
      var isValidSplit = 'a'.split(/a/).length === 3;
      /**
       * Split by RegExp. (Polyfill for IE8)
       * @param {string} text - text to be splitted\
       * @param {RegExp} regexp - regular expression
       * @returns {Array.<string>}
       */

      var splitByRegExp = function () {
        if (isValidSplit) {
          return function (text, regexp) {
            return text.split(regexp);
          };
        }

        return function (text, regexp) {
          var result = [];
          var prevIndex = 0;
          var match, index;

          if (!regexp.global) {
            regexp = new RegExp(regexp, 'g');
          }

          match = regexp.exec(text);

          while (match !== null) {
            index = match.index;
            result.push(text.slice(prevIndex, index));
            prevIndex = index + match[0].length;
            match = regexp.exec(text);
          }

          result.push(text.slice(prevIndex));
          return result;
        };
      }();
      /**
       * Find value in the context by an expression.
       * @param {string} exp - an expression
       * @param {object} context - context
       * @returns {*}
       * @private
       */
      // eslint-disable-next-line complexity


      function getValueFromContext(exp, context) {
        var splitedExps;
        var value = context[exp];

        if (exp === 'true') {
          value = true;
        } else if (exp === 'false') {
          value = false;
        } else if (STRING_NOTATION_REGEXP.test(exp)) {
          value = exp.replace(STRING_REGEXP, '');
        } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
          splitedExps = exp.split(BRACKET_REGEXP);
          value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
        } else if (DOT_NOTATION_REGEXP.test(exp)) {
          splitedExps = exp.split(DOT_REGEXP);
          value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
        } else if (NUMBER_REGEXP.test(exp)) {
          value = parseFloat(exp);
        }

        return value;
      }
      /**
       * Extract elseif and else expressions.
       * @param {Array.<string>} ifExps - args of if expression
       * @param {Array.<string>} sourcesInsideBlock - sources inside if block
       * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
       * @private
       */


      function extractElseif(ifExps, sourcesInsideBlock) {
        var exps = [ifExps];
        var sourcesInsideIf = [];
        var otherIfCount = 0;
        var start = 0; // eslint-disable-next-line complexity

        forEach(sourcesInsideBlock, function (source, index) {
          if (source.indexOf('if') === 0) {
            otherIfCount += 1;
          } else if (source === '/if') {
            otherIfCount -= 1;
          } else if (!otherIfCount && (source.indexOf('elseif') === 0 || source === 'else')) {
            exps.push(source === 'else' ? ['true'] : source.split(' ').slice(1));
            sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
            start = index + 1;
          }
        });
        sourcesInsideIf.push(sourcesInsideBlock.slice(start));
        return {
          exps: exps,
          sourcesInsideIf: sourcesInsideIf
        };
      }
      /**
       * Helper function for "if". 
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleIf(exps, sourcesInsideBlock, context) {
        var analyzed = extractElseif(exps, sourcesInsideBlock);
        var result = false;
        var compiledSource = '';
        forEach(analyzed.exps, function (exp, index) {
          result = handleExpression(exp, context);

          if (result) {
            compiledSource = compile(analyzed.sourcesInsideIf[index], context);
          }

          return !result;
        });
        return compiledSource;
      }
      /**
       * Helper function for "each".
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleEach(exps, sourcesInsideBlock, context) {
        var collection = handleExpression(exps, context);
        var additionalKey = isArray(collection) ? '@index' : '@key';
        var additionalContext = {};
        var result = '';
        forEach(collection, function (item, key) {
          additionalContext[additionalKey] = key;
          additionalContext['@this'] = item;
          extend(context, additionalContext);
          result += compile(sourcesInsideBlock.slice(), context);
        });
        return result;
      }
      /**
       * Helper function for "with ... as"
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleWith(exps, sourcesInsideBlock, context) {
        var asIndex = inArray('as', exps);
        var alias = exps[asIndex + 1];
        var result = handleExpression(exps.slice(0, asIndex), context);
        var additionalContext = {};
        additionalContext[alias] = result;
        return compile(sourcesInsideBlock, extend(context, additionalContext)) || '';
      }
      /**
       * Extract sources inside block in place.
       * @param {Array.<string>} sources - array of sources
       * @param {number} start - index of start block
       * @param {number} end - index of end block
       * @returns {Array.<string>}
       * @private
       */


      function extractSourcesInsideBlock(sources, start, end) {
        var sourcesInsideBlock = sources.splice(start + 1, end - start);
        sourcesInsideBlock.pop();
        return sourcesInsideBlock;
      }
      /**
       * Handle block helper function
       * @param {string} helperKeyword - helper keyword (ex. if, each, with)
       * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
       * @param {object} context - context
       * @returns {Array.<string>}
       * @private
       */


      function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
        var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
        var helperCount = 1;
        var startBlockIndex = 0;
        var endBlockIndex;
        var index = startBlockIndex + EXPRESSION_INTERVAL;
        var expression = sourcesToEnd[index];

        while (helperCount && isString(expression)) {
          if (expression.indexOf(helperKeyword) === 0) {
            helperCount += 1;
          } else if (expression.indexOf('/' + helperKeyword) === 0) {
            helperCount -= 1;
            endBlockIndex = index;
          }

          index += EXPRESSION_INTERVAL;
          expression = sourcesToEnd[index];
        }

        if (helperCount) {
          throw Error(helperKeyword + ' needs {{/' + helperKeyword + '}} expression.');
        }

        sourcesToEnd[startBlockIndex] = executeBlockHelper(sourcesToEnd[startBlockIndex].split(' ').slice(1), extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex), context);
        return sourcesToEnd;
      }
      /**
       * Helper function for "custom helper".
       * If helper is not a function, return helper itself.
       * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
       * @param {object} context - context
       * @returns {string}
       * @private
       */


      function handleExpression(exps, context) {
        var result = getValueFromContext(exps[0], context);

        if (result instanceof Function) {
          return executeFunction(result, exps.slice(1), context);
        }

        return result;
      }
      /**
       * Execute a helper function.
       * @param {Function} helper - helper function
       * @param {Array.<string>} argExps - expressions of arguments
       * @param {object} context - context
       * @returns {string} - result of executing the function with arguments
       * @private
       */


      function executeFunction(helper, argExps, context) {
        var args = [];
        forEach(argExps, function (exp) {
          args.push(getValueFromContext(exp, context));
        });
        return helper.apply(null, args);
      }
      /**
       * Get a result of compiling an expression with the context.
       * @param {Array.<string>} sources - array of sources split by regexp of expression.
       * @param {object} context - context
       * @returns {Array.<string>} - array of sources that bind with its context
       * @private
       */


      function compile(sources, context) {
        var index = 1;
        var expression = sources[index];
        var exps, firstExp, result;

        while (isString(expression)) {
          exps = expression.split(' ');
          firstExp = exps[0];

          if (BLOCK_HELPERS[firstExp]) {
            result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
            sources = sources.concat(result);
          } else {
            sources[index] = handleExpression(exps, context);
          }

          index += EXPRESSION_INTERVAL;
          expression = sources[index];
        }

        return sources.join('');
      }
      /**
       * Convert text by binding expressions with context.
       * <br>
       * If expression exists in the context, it will be replaced.
       * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
       * An array or object can be accessed using bracket and dot notation.
       * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
       * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
       * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
       * <br>
       * If replaced expression is a function, next expressions will be arguments of the function.
       * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
       * <br>
       * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
       * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
       * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
       * 3) 'with ... as ...' provides an alias.
       * @param {string} text - text with expressions
       * @param {object} context - context
       * @returns {string} - text that bind with its context
       * @memberof module:domUtil
       * @example
       * var template = require('tui-code-snippet/domUtil/template');
       * 
       * var source = 
       *     '<h1>'
       *   +   '{{if isValidNumber title}}'
       *   +     '{{title}}th'
       *   +   '{{elseif isValidDate title}}'
       *   +     'Date: {{title}}'
       *   +   '{{/if}}'
       *   + '</h1>'
       *   + '{{each list}}'
       *   +   '{{with addOne @index as idx}}'
       *   +     '<p>{{idx}}: {{@this}}</p>'
       *   +   '{{/with}}'
       *   + '{{/each}}';
       * 
       * var context = {
       *   isValidDate: function(text) {
       *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
       *   },
       *   isValidNumber: function(text) {
       *     return /^\d+$/.test(text);
       *   }
       *   title: '2019-11-25',
       *   list: ['Clean the room', 'Wash the dishes'],
       *   addOne: function(num) {
       *     return num + 1;
       *   }
       * };
       * 
       * var result = template(source, context);
       * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
       */


      function template(text, context) {
        return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
      }

      module.exports = template;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __nested_webpack_require_28272__) {
      "use strict";
      /**
       * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var extend = __nested_webpack_require_28272__(2);

      var isExisty = __nested_webpack_require_28272__(23);

      var isString = __nested_webpack_require_28272__(6);

      var isObject = __nested_webpack_require_28272__(25);

      var isArray = __nested_webpack_require_28272__(3);

      var isFunction = __nested_webpack_require_28272__(26);

      var forEach = __nested_webpack_require_28272__(4);

      var R_EVENTNAME_SPLIT = /\s+/g;
      /**
       * @class
       * @example
       * // node, commonjs
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
       */

      function CustomEvents() {
        /**
           * @type {HandlerItem[]}
           */
        this.events = null;
        /**
           * only for checking specific context event was binded
           * @type {object[]}
           */

        this.contexts = null;
      }
      /**
       * Mixin custom events feature to specific constructor
       * @param {function} func - constructor
       * @example
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * var model;
       * function Model() {
       *     this.name = '';
       * }
       * CustomEvents.mixin(Model);
       *
       * model = new Model();
       * model.on('change', function() { this.name = 'model'; }, this);
       * model.fire('change');
       * alert(model.name); // 'model';
       */


      CustomEvents.mixin = function (func) {
        extend(func.prototype, CustomEvents.prototype);
      };
      /**
       * Get HandlerItem object
       * @param {function} handler - handler function
       * @param {object} [context] - context for handler
       * @returns {HandlerItem} HandlerItem object
       * @private
       */


      CustomEvents.prototype._getHandlerItem = function (handler, context) {
        var item = {
          handler: handler
        };

        if (context) {
          item.context = context;
        }

        return item;
      };
      /**
       * Get event object safely
       * @param {string} [eventName] - create sub event map if not exist.
       * @returns {(object|array)} event object. if you supplied `eventName`
       *  parameter then make new array and return it
       * @private
       */


      CustomEvents.prototype._safeEvent = function (eventName) {
        var events = this.events;
        var byName;

        if (!events) {
          events = this.events = {};
        }

        if (eventName) {
          byName = events[eventName];

          if (!byName) {
            byName = [];
            events[eventName] = byName;
          }

          events = byName;
        }

        return events;
      };
      /**
       * Get context array safely
       * @returns {array} context array
       * @private
       */


      CustomEvents.prototype._safeContext = function () {
        var context = this.contexts;

        if (!context) {
          context = this.contexts = [];
        }

        return context;
      };
      /**
       * Get index of context
       * @param {object} ctx - context that used for bind custom event
       * @returns {number} index of context
       * @private
       */


      CustomEvents.prototype._indexOfContext = function (ctx) {
        var context = this._safeContext();

        var index = 0;

        while (context[index]) {
          if (ctx === context[index][0]) {
            return index;
          }

          index += 1;
        }

        return -1;
      };
      /**
       * Memorize supplied context for recognize supplied object is context or
       *  name: handler pair object when off()
       * @param {object} ctx - context object to memorize
       * @private
       */


      CustomEvents.prototype._memorizeContext = function (ctx) {
        var context, index;

        if (!isExisty(ctx)) {
          return;
        }

        context = this._safeContext();
        index = this._indexOfContext(ctx);

        if (index > -1) {
          context[index][1] += 1;
        } else {
          context.push([ctx, 1]);
        }
      };
      /**
       * Forget supplied context object
       * @param {object} ctx - context object to forget
       * @private
       */


      CustomEvents.prototype._forgetContext = function (ctx) {
        var context, contextIndex;

        if (!isExisty(ctx)) {
          return;
        }

        context = this._safeContext();
        contextIndex = this._indexOfContext(ctx);

        if (contextIndex > -1) {
          context[contextIndex][1] -= 1;

          if (context[contextIndex][1] <= 0) {
            context.splice(contextIndex, 1);
          }
        }
      };
      /**
       * Bind event handler
       * @param {(string|{name:string, handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {(function|object)} [handler] - handler function or context
       * @param {object} [context] - context for binding
       * @private
       */


      CustomEvents.prototype._bindEvent = function (eventName, handler, context) {
        var events = this._safeEvent(eventName);

        this._memorizeContext(context);

        events.push(this._getHandlerItem(handler, context));
      };
      /**
       * Bind event handlers
       * @param {(string|{name:string, handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {(function|object)} [handler] - handler function or context
       * @param {object} [context] - context for binding
       * //-- #1. Get Module --//
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * //-- #2. Use method --//
       * // # 2.1 Basic Usage
       * CustomEvents.on('onload', handler);
       *
       * // # 2.2 With context
       * CustomEvents.on('onload', handler, myObj);
       *
       * // # 2.3 Bind by object that name, handler pairs
       * CustomEvents.on({
       *     'play': handler,
       *     'pause': handler2
       * });
       *
       * // # 2.4 Bind by object that name, handler pairs with context object
       * CustomEvents.on({
       *     'play': handler
       * }, myObj);
       */


      CustomEvents.prototype.on = function (eventName, handler, context) {
        var self = this;

        if (isString(eventName)) {
          // [syntax 1, 2]
          eventName = eventName.split(R_EVENTNAME_SPLIT);
          forEach(eventName, function (name) {
            self._bindEvent(name, handler, context);
          });
        } else if (isObject(eventName)) {
          // [syntax 3, 4]
          context = handler;
          forEach(eventName, function (func, name) {
            self.on(name, func, context);
          });
        }
      };
      /**
       * Bind one-shot event handlers
       * @param {(string|{name:string,handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {function|object} [handler] - handler function or context
       * @param {object} [context] - context for binding
       */


      CustomEvents.prototype.once = function (eventName, handler, context) {
        var self = this;

        if (isObject(eventName)) {
          context = handler;
          forEach(eventName, function (func, name) {
            self.once(name, func, context);
          });
          return;
        }

        function onceHandler() {
          // eslint-disable-line require-jsdoc
          handler.apply(context, arguments);
          self.off(eventName, onceHandler, context);
        }

        this.on(eventName, onceHandler, context);
      };
      /**
       * Splice supplied array by callback result
       * @param {array} arr - array to splice
       * @param {function} predicate - function return boolean
       * @private
       */


      CustomEvents.prototype._spliceMatches = function (arr, predicate) {
        var i = 0;
        var len;

        if (!isArray(arr)) {
          return;
        }

        for (len = arr.length; i < len; i += 1) {
          if (predicate(arr[i]) === true) {
            arr.splice(i, 1);
            len -= 1;
            i -= 1;
          }
        }
      };
      /**
       * Get matcher for unbind specific handler events
       * @param {function} handler - handler function
       * @returns {function} handler matcher
       * @private
       */


      CustomEvents.prototype._matchHandler = function (handler) {
        var self = this;
        return function (item) {
          var needRemove = handler === item.handler;

          if (needRemove) {
            self._forgetContext(item.context);
          }

          return needRemove;
        };
      };
      /**
       * Get matcher for unbind specific context events
       * @param {object} context - context
       * @returns {function} object matcher
       * @private
       */


      CustomEvents.prototype._matchContext = function (context) {
        var self = this;
        return function (item) {
          var needRemove = context === item.context;

          if (needRemove) {
            self._forgetContext(item.context);
          }

          return needRemove;
        };
      };
      /**
       * Get matcher for unbind specific hander, context pair events
       * @param {function} handler - handler function
       * @param {object} context - context
       * @returns {function} handler, context matcher
       * @private
       */


      CustomEvents.prototype._matchHandlerAndContext = function (handler, context) {
        var self = this;
        return function (item) {
          var matchHandler = handler === item.handler;
          var matchContext = context === item.context;
          var needRemove = matchHandler && matchContext;

          if (needRemove) {
            self._forgetContext(item.context);
          }

          return needRemove;
        };
      };
      /**
       * Unbind event by event name
       * @param {string} eventName - custom event name to unbind
       * @param {function} [handler] - handler function
       * @private
       */


      CustomEvents.prototype._offByEventName = function (eventName, handler) {
        var self = this;
        var andByHandler = isFunction(handler);

        var matchHandler = self._matchHandler(handler);

        eventName = eventName.split(R_EVENTNAME_SPLIT);
        forEach(eventName, function (name) {
          var handlerItems = self._safeEvent(name);

          if (andByHandler) {
            self._spliceMatches(handlerItems, matchHandler);
          } else {
            forEach(handlerItems, function (item) {
              self._forgetContext(item.context);
            });
            self.events[name] = [];
          }
        });
      };
      /**
       * Unbind event by handler function
       * @param {function} handler - handler function
       * @private
       */


      CustomEvents.prototype._offByHandler = function (handler) {
        var self = this;

        var matchHandler = this._matchHandler(handler);

        forEach(this._safeEvent(), function (handlerItems) {
          self._spliceMatches(handlerItems, matchHandler);
        });
      };
      /**
       * Unbind event by object(name: handler pair object or context object)
       * @param {object} obj - context or {name: handler} pair object
       * @param {function} handler - handler function
       * @private
       */


      CustomEvents.prototype._offByObject = function (obj, handler) {
        var self = this;
        var matchFunc;

        if (this._indexOfContext(obj) < 0) {
          forEach(obj, function (func, name) {
            self.off(name, func);
          });
        } else if (isString(handler)) {
          matchFunc = this._matchContext(obj);

          self._spliceMatches(this._safeEvent(handler), matchFunc);
        } else if (isFunction(handler)) {
          matchFunc = this._matchHandlerAndContext(handler, obj);
          forEach(this._safeEvent(), function (handlerItems) {
            self._spliceMatches(handlerItems, matchFunc);
          });
        } else {
          matchFunc = this._matchContext(obj);
          forEach(this._safeEvent(), function (handlerItems) {
            self._spliceMatches(handlerItems, matchFunc);
          });
        }
      };
      /**
       * Unbind custom events
       * @param {(string|object|function)} eventName - event name or context or
       *  {name: handler} pair object or handler function
       * @param {(function)} handler - handler function
       * @example
       * //-- #1. Get Module --//
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * //-- #2. Use method --//
       * // # 2.1 off by event name
       * CustomEvents.off('onload');
       *
       * // # 2.2 off by event name and handler
       * CustomEvents.off('play', handler);
       *
       * // # 2.3 off by handler
       * CustomEvents.off(handler);
       *
       * // # 2.4 off by context
       * CustomEvents.off(myObj);
       *
       * // # 2.5 off by context and handler
       * CustomEvents.off(myObj, handler);
       *
       * // # 2.6 off by context and event name
       * CustomEvents.off(myObj, 'onload');
       *
       * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
       * CustomEvents.off({
       *   'play': handler,
       *   'pause': handler2
       * });
       *
       * // # 2.8 off the all events
       * CustomEvents.off();
       */


      CustomEvents.prototype.off = function (eventName, handler) {
        if (isString(eventName)) {
          // [syntax 1, 2]
          this._offByEventName(eventName, handler);
        } else if (!arguments.length) {
          // [syntax 8]
          this.events = {};
          this.contexts = [];
        } else if (isFunction(eventName)) {
          // [syntax 3]
          this._offByHandler(eventName);
        } else if (isObject(eventName)) {
          // [syntax 4, 5, 6]
          this._offByObject(eventName, handler);
        }
      };
      /**
       * Fire custom event
       * @param {string} eventName - name of custom event
       */


      CustomEvents.prototype.fire = function (eventName) {
        // eslint-disable-line
        this.invoke.apply(this, arguments);
      };
      /**
       * Fire a event and returns the result of operation 'boolean AND' with all
       *  listener's results.
       *
       * So, It is different from {@link CustomEvents#fire}.
       *
       * In service code, use this as a before event in component level usually
       *  for notifying that the event is cancelable.
       * @param {string} eventName - Custom event name
       * @param {...*} data - Data for event
       * @returns {boolean} The result of operation 'boolean AND'
       * @example
       * var map = new Map();
       * map.on({
       *     'beforeZoom': function() {
       *         // It should cancel the 'zoom' event by some conditions.
       *         if (that.disabled && this.getState()) {
       *             return false;
       *         }
       *         return true;
       *     }
       * });
       *
       * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
       *     // if true,
       *     // doSomething
       * }
       */


      CustomEvents.prototype.invoke = function (eventName) {
        var events, args, index, item;

        if (!this.hasListener(eventName)) {
          return true;
        }

        events = this._safeEvent(eventName);
        args = Array.prototype.slice.call(arguments, 1);
        index = 0;

        while (events[index]) {
          item = events[index];

          if (item.handler.apply(item.context, args) === false) {
            return false;
          }

          index += 1;
        }

        return true;
      };
      /**
       * Return whether at least one of the handlers is registered in the given
       *  event name.
       * @param {string} eventName - Custom event name
       * @returns {boolean} Is there at least one handler in event name?
       */


      CustomEvents.prototype.hasListener = function (eventName) {
        return this.getListenerLength(eventName) > 0;
      };
      /**
       * Return a count of events registered.
       * @param {string} eventName - Custom event name
       * @returns {number} number of event
       */


      CustomEvents.prototype.getListenerLength = function (eventName) {
        var events = this._safeEvent(eventName);

        return events.length;
      };

      module.exports = CustomEvents;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __nested_webpack_require_45264__) {
      "use strict";
      /**
       * @fileoverview
       * This module provides a function to make a constructor
       * that can inherit from the other constructors like the CLASS easily.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var inherit = __nested_webpack_require_45264__(27);

      var extend = __nested_webpack_require_45264__(2);
      /**
       * @module defineClass
       */

      /**
       * Help a constructor to be defined and to inherit from the other constructors
       * @param {*} [parent] Parent constructor
       * @param {Object} props Members of constructor
       *  @param {Function} props.init Initialization method
       *  @param {Object} [props.static] Static members of constructor
       * @returns {*} Constructor
       * @memberof module:defineClass
       * @example
       * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
       *
       * //-- #2. Use property --//
       * var Parent = defineClass({
       *     init: function() { // constuructor
       *         this.name = 'made by def';
       *     },
       *     method: function() {
       *         // ...
       *     },
       *     static: {
       *         staticMethod: function() {
       *              // ...
       *         }
       *     }
       * });
       *
       * var Child = defineClass(Parent, {
       *     childMethod: function() {}
       * });
       *
       * Parent.staticMethod();
       *
       * var parentInstance = new Parent();
       * console.log(parentInstance.name); //made by def
       * parentInstance.staticMethod(); // Error
       *
       * var childInstance = new Child();
       * childInstance.method();
       * childInstance.childMethod();
       */


      function defineClass(parent, props) {
        var obj;

        if (!props) {
          props = parent;
          parent = null;
        }

        obj = props.init || function () {};

        if (parent) {
          inherit(obj, parent);
        }

        if (props.hasOwnProperty('static')) {
          extend(obj, props['static']);
          delete props['static'];
        }

        extend(obj.prototype, props);
        return obj;
      }

      module.exports = defineClass;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __nested_webpack_require_47620__) {
      "use strict";
      /**
       * @fileoverview Bind DOM events
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isString = __nested_webpack_require_47620__(6);

      var forEach = __nested_webpack_require_47620__(4);

      var safeEvent = __nested_webpack_require_47620__(17);
      /**
       * Bind DOM events.
       * @param {HTMLElement} element - element to bind events
       * @param {(string|object)} types - Space splitted events names or eventName:handler object
       * @param {(function|object)} handler - handler function or context for handler method
       * @param {object} [context] context - context for handler method.
       * @memberof module:domEvent
       * @example
       * var div = document.querySelector('div');
       * 
       * // Bind one event to an element.
       * on(div, 'click', toggle);
       * 
       * // Bind multiple events with a same handler to multiple elements at once.
       * // Use event names splitted by a space.
       * on(div, 'mouseenter mouseleave', changeColor);
       * 
       * // Bind multiple events with different handlers to an element at once.
       * // Use an object which of key is an event name and value is a handler function.
       * on(div, {
       *   keydown: highlight,
       *   keyup: dehighlight
       * });
       * 
       * // Set a context for handler method.
       * var name = 'global';
       * var repository = {name: 'CodeSnippet'};
       * on(div, 'drag', function() {
       *  console.log(this.name);
       * }, repository);
       * // Result when you drag a div: "CodeSnippet"
       */


      function on(element, types, handler, context) {
        if (isString(types)) {
          forEach(types.split(/\s+/g), function (type) {
            bindEvent(element, type, handler, context);
          });
          return;
        }

        forEach(types, function (func, type) {
          bindEvent(element, type, func, handler);
        });
      }
      /**
       * Bind DOM events
       * @param {HTMLElement} element - element to bind events
       * @param {string} type - events name
       * @param {function} handler - handler function or context for handler method
       * @param {object} [context] context - context for handler method.
       * @private
       */


      function bindEvent(element, type, handler, context) {
        /**
           * Event handler
           * @param {Event} e - event object
           */
        function eventHandler(e) {
          handler.call(context || element, e || window.event);
        }

        if ('addEventListener' in element) {
          element.addEventListener(type, eventHandler);
        } else if ('attachEvent' in element) {
          element.attachEvent('on' + type, eventHandler);
        }

        memorizeHandler(element, type, handler, eventHandler);
      }
      /**
       * Memorize DOM event handler for unbinding.
       * @param {HTMLElement} element - element to bind events
       * @param {string} type - events name
       * @param {function} handler - handler function that user passed at on() use
       * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
       * @private
       */


      function memorizeHandler(element, type, handler, wrappedHandler) {
        var events = safeEvent(element, type);
        var existInEvents = false;
        forEach(events, function (obj) {
          if (obj.handler === handler) {
            existInEvents = true;
            return false;
          }

          return true;
        });

        if (!existInEvents) {
          events.push({
            handler: handler,
            wrappedHandler: wrappedHandler
          });
        }
      }

      module.exports = on;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __nested_webpack_require_51494__) {
      "use strict";
      /**
       * @fileoverview Unbind DOM events
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isString = __nested_webpack_require_51494__(6);

      var forEach = __nested_webpack_require_51494__(4);

      var safeEvent = __nested_webpack_require_51494__(17);
      /**
       * Unbind DOM events
       * If a handler function is not passed, remove all events of that type.
       * @param {HTMLElement} element - element to unbind events
       * @param {(string|object)} types - Space splitted events names or eventName:handler object
       * @param {function} [handler] - handler function
       * @memberof module:domEvent
       * @example
       * // Following the example of domEvent#on
       * 
       * // Unbind one event from an element.
       * off(div, 'click', toggle);
       * 
       * // Unbind multiple events with a same handler from multiple elements at once.
       * // Use event names splitted by a space.
       * off(element, 'mouseenter mouseleave', changeColor);
       * 
       * // Unbind multiple events with different handlers from an element at once.
       * // Use an object which of key is an event name and value is a handler function.
       * off(div, {
       *   keydown: highlight,
       *   keyup: dehighlight
       * });
       * 
       * // Unbind events without handlers.
       * off(div, 'drag');
       */


      function off(element, types, handler) {
        if (isString(types)) {
          forEach(types.split(/\s+/g), function (type) {
            unbindEvent(element, type, handler);
          });
          return;
        }

        forEach(types, function (func, type) {
          unbindEvent(element, type, func);
        });
      }
      /**
       * Unbind DOM events
       * If a handler function is not passed, remove all events of that type.
       * @param {HTMLElement} element - element to unbind events
       * @param {string} type - events name
       * @param {function} [handler] - handler function
       * @private
       */


      function unbindEvent(element, type, handler) {
        var events = safeEvent(element, type);
        var index;

        if (!handler) {
          forEach(events, function (item) {
            removeHandler(element, type, item.wrappedHandler);
          });
          events.splice(0, events.length);
        } else {
          forEach(events, function (item, idx) {
            if (handler === item.handler) {
              removeHandler(element, type, item.wrappedHandler);
              index = idx;
              return false;
            }

            return true;
          });
          events.splice(index, 1);
        }
      }
      /**
       * Remove an event handler
       * @param {HTMLElement} element - An element to remove an event
       * @param {string} type - event type
       * @param {function} handler - event handler
       * @private
       */


      function removeHandler(element, type, handler) {
        if ('removeEventListener' in element) {
          element.removeEventListener(type, handler);
        } else if ('detachEvent' in element) {
          element.detachEvent('on' + type, handler);
        }
      }

      module.exports = off;
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __nested_webpack_require_54813__) {
      "use strict";
      /**
       * @fileoverview Find parent element recursively
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var matches = __nested_webpack_require_54813__(30);
      /**
       * Find parent element recursively
       * @param {HTMLElement} element - base element to start find
       * @param {string} selector - selector string for find
       * @returns {HTMLElement} - element finded or null
       * @memberof module:domUtil
       */


      function closest(element, selector) {
        var parent = element.parentNode;

        if (matches(element, selector)) {
          return element;
        }

        while (parent && parent !== document) {
          if (matches(parent, selector)) {
            return parent;
          }

          parent = parent.parentNode;
        }

        return null;
      }

      module.exports = closest;
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Remove element from parent node.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Remove element from parent node.
       * @param {HTMLElement} element - element to remove.
       * @memberof module:domUtil
       */

      function removeElement(element) {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }

      module.exports = removeElement;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a instance of HTMLNode or not.
       * If the given variables is a instance of HTMLNode, return true.
       * @param {*} html - Target for checking
       * @returns {boolean} Is HTMLNode ?
       * @memberof module:type
       */

      function isHTMLNode(html) {
        if ((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object') {
          return html && (html instanceof HTMLElement || !!html.nodeType);
        }

        return !!(html && html.nodeType);
      }

      module.exports = isHTMLNode;
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __nested_webpack_require_57300__) {
      "use strict";
      /**
       * @fileoverview Utils for Timepicker component
       * @author NHN. FE dev Lab. <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_57300__(0);

      var forEachArray = __nested_webpack_require_57300__(1);

      var sendHostname = __nested_webpack_require_57300__(35);

      var uniqueId = 0;
      /**
       * Utils
       * @namespace util
       * @ignore
       */

      var utils = {
        /**
         * Returns unique id
         * @returns {number}
         */
        getUniqueId: function getUniqueId() {
          uniqueId += 1;
          return uniqueId;
        },

        /**
         * Convert a value to meet the format
         * @param {number|string} value 
         * @param {string} format - ex) hh, h, mm, m
         * @returns {string}
         */
        formatTime: function formatTime(value, format) {
          var PADDING_ZERO_TYPES = ['hh', 'mm'];
          value = String(value);
          return inArray(format, PADDING_ZERO_TYPES) >= 0 && value.length === 1 ? '0' + value : value;
        },

        /**
         * Get meridiem hour
         * @param {number} hour - Original hour
         * @returns {number} Converted meridiem hour
         */
        getMeridiemHour: function getMeridiemHour(hour) {
          hour %= 12;

          if (hour === 0) {
            hour = 12;
          }

          return hour;
        },

        /**
         * Returns range arr
         * @param {number} start - Start value
         * @param {number} end - End value
         * @param {number} [step] - Step value
         * @returns {Array}
         */
        getRangeArr: function getRangeArr(start, end, step) {
          var arr = [];
          var i;
          step = step || 1;

          if (start > end) {
            for (i = end; i >= start; i -= step) {
              arr.push(i);
            }
          } else {
            for (i = start; i <= end; i += step) {
              arr.push(i);
            }
          }

          return arr;
        },

        /**
         * Returns array filled with selected value
         * @param {number} start - Start index of array to fill
         * @param {number} end - End index of array to fill
         * @param {number} value - Value to be filled
         * @param {Array} [target] - Array to fill
         * @returns {Array}
         */
        fill: function fill(start, end, value, target) {
          var arr = target || [];
          var replaceEnd = Math.min(arr.length - 1, end);
          var i;

          for (i = start; i <= replaceEnd; i += 1) {
            arr[i] = value;
          }

          for (i = replaceEnd; i <= end; i += 1) {
            arr.push(value);
          }

          return arr;
        },

        /**
         * Get a target element
         * @param {Event} ev Event object
         * @returns {HTMLElement} An event target element
         */
        getTarget: function getTarget(ev) {
          return ev.target || ev.srcElement;
        },

        /**
         * send host name
         * @ignore
         */
        sendHostName: function sendHostName() {
          sendHostname('time-picker', 'UA-129987462-1');
        },

        /**
         * Get disabled minute array
         * @param {Array} enableRanges array of object which contains range
         */
        getDisabledMinuteArr: function getDisabledMinuteArr(enableRanges, minuteStep) {
          var arr = this.fill(0, Math.floor(60 / minuteStep) - 2, false);

          function setDisabled(enableRange) {
            var beginDisabledMinute = Math.ceil(enableRange.begin / minuteStep);
            var endDisabledMinute = Math.floor(enableRange.end / minuteStep);
            arr = this.fill(beginDisabledMinute, endDisabledMinute, true, arr);
          }

          forEachArray(enableRanges, setDisabled.bind(this));
          return arr;
        },

        /**
         * Set disabled on target element
         * @param {HTMLInputElement} el target element
         * @param {boolean} isDisabled target element
         */
        setDisabled: function setDisabled(el, isDisabled) {
          el.disabled = isDisabled;
        }
      };
      module.exports = utils;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Execute the provided callback once for each property of object which actually exist.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Execute the provided callback once for each property of object which actually exist.
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the property
       *  2) The name of the property
       *  3) The object being traversed
       * @param {Object} obj The object that will be traversed
       * @param {function} iteratee  Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEachOwnProperties({a:1,b:2,c:3}, function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       */

      function forEachOwnProperties(obj, iteratee, context) {
        var key;
        context = context || null;

        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iteratee.call(context, obj[key], key, obj) === false) {
              break;
            }
          }
        }
      }

      module.exports = forEachOwnProperties;
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Get event collection for specific HTML element
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var EVENT_KEY = '_feEventKey';
      /**
       * Get event collection for specific HTML element
       * @param {HTMLElement} element - HTML element
       * @param {string} type - event type
       * @returns {array}
       * @private
       */

      function safeEvent(element, type) {
        var events = element[EVENT_KEY];
        var handlers;

        if (!events) {
          events = element[EVENT_KEY] = {};
        }

        handlers = events[type];

        if (!handlers) {
          handlers = events[type] = [];
        }

        return handlers;
      }

      module.exports = safeEvent;
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __nested_webpack_require_64065__) {
      "use strict";
      /**
       * @fileoverview Get HTML element's design classes.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isUndefined = __nested_webpack_require_64065__(5);
      /**
       * Get HTML element's design classes.
       * @param {(HTMLElement|SVGElement)} element target element
       * @returns {string} element css class name
       * @memberof module:domUtil
       */


      function getClass(element) {
        if (!element || !element.className) {
          return '';
        }

        if (isUndefined(element.className.baseVal)) {
          return element.className;
        }

        return element.className.baseVal;
      }

      module.exports = getClass;
      /***/
    },
    /* 19 */

    /***/
    function (module, exports, __nested_webpack_require_64887__) {
      "use strict";
      /**
       * @fileoverview Set className value
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isArray = __nested_webpack_require_64887__(3);

      var isUndefined = __nested_webpack_require_64887__(5);
      /**
       * Set className value
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {(string|string[])} cssClass - class names
       * @private
       */


      function setClassName(element, cssClass) {
        cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;
        cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

        if (isUndefined(element.className.baseVal)) {
          element.className = cssClass;
          return;
        }

        element.className.baseVal = cssClass;
      }

      module.exports = setClassName;
      /***/
    },
    /* 20 */

    /***/
    function (module, exports, __nested_webpack_require_65835__) {
      "use strict";
      /**
       * @fileoverview The entry file of TimePicker components
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      __nested_webpack_require_65835__(21);

      module.exports = __nested_webpack_require_65835__(22);
      /***/
    },
    /* 21 */

    /***/
    function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

      /***/
    },
    /* 22 */

    /***/
    function (module, exports, __nested_webpack_require_66318__) {
      "use strict";
      /**
       * @fileoverview TimePicker component
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_66318__(0);

      var forEachArray = __nested_webpack_require_66318__(1);

      var CustomEvents = __nested_webpack_require_66318__(8);

      var defineClass = __nested_webpack_require_66318__(9);

      var extend = __nested_webpack_require_66318__(2);

      var on = __nested_webpack_require_66318__(10);

      var off = __nested_webpack_require_66318__(11);

      var addClass = __nested_webpack_require_66318__(29);

      var closest = __nested_webpack_require_66318__(12);

      var removeElement = __nested_webpack_require_66318__(13);

      var removeClass = __nested_webpack_require_66318__(32);

      var isHTMLNode = __nested_webpack_require_66318__(14);

      var isNumber = __nested_webpack_require_66318__(33);

      var Spinbox = __nested_webpack_require_66318__(34);

      var Selectbox = __nested_webpack_require_66318__(38);

      var util = __nested_webpack_require_66318__(15);

      var localeTexts = __nested_webpack_require_66318__(40);

      var tmpl = __nested_webpack_require_66318__(41);

      var meridiemTmpl = __nested_webpack_require_66318__(42);

      var SELECTOR_HOUR_ELEMENT = '.tui-timepicker-hour';
      var SELECTOR_MINUTE_ELEMENT = '.tui-timepicker-minute';
      var SELECTOR_MERIDIEM_ELEMENT = '.tui-timepicker-meridiem';
      var CLASS_NAME_LEFT_MERIDIEM = 'tui-has-left';
      var CLASS_NAME_HIDDEN = 'tui-hidden';
      var CLASS_NAME_CHECKED = 'tui-timepicker-meridiem-checked';
      var INPUT_TYPE_SPINBOX = 'spinbox';
      var INPUT_TYPE_SELECTBOX = 'selectbox';
      var START_NUMBER_OF_TIME = 0;
      var END_NUMBER_OF_MINUTE = 59;
      var END_NUMBER_OF_HOUR = 23;
      var END_NUMBER_OF_HOUR_WITH_MERIDIEM = 12;
      /**
       * Merge default options
       * @ignore
       * @param {object} options - options
       * @returns {object} Merged options
       */

      var mergeDefaultOptions = function mergeDefaultOptions(options) {
        return extend({
          language: 'en',
          initialHour: 0,
          initialMinute: 0,
          showMeridiem: true,
          inputType: 'selectbox',
          hourStep: 1,
          minuteStep: 1,
          meridiemPosition: 'right',
          format: 'h:m',
          disabledHours: [],
          disabledMinutes: {},
          usageStatistics: true
        }, options);
      };
      /**
       * @class
       * @param {string|HTMLElement} container - Container element or selector
       * @param {Object} [options] - Options for initialization
       * @param {number} [options.initialHour = 0] - Initial setting value of hour
       * @param {number} [options.initialMinute = 0] - Initial setting value of minute
       * @param {number} [options.hourStep = 1] - Step value of hour
       * @param {number} [options.minuteStep = 1] - Step value of minute
       * @param {string} [options.inputType = 'selectbox'] - 'selectbox' or 'spinbox'
       * @param {string} [options.format = 'h:m'] - hour, minute format for display
       * @param {boolean} [options.showMeridiem = true] - Show meridiem expression?
       * @param {Array} [options.disabledHours = []] - Registered Hours is disabled.
       * @param {Object} [options.disabledMinutes = {}] - Registered Minutes of selected hours is disabled.
       * @param {Object} [options.disabledMinutes.hour] - Key must be hour(number).
       *                 Value is array which contains only true or false and must be 60 of length
       * @param {string} [options.meridiemPosition = 'right'] - Set location of the meridiem element.
       *                 If this option set 'left', the meridiem element is created in front of the hour element.
       * @param {string} [options.language = 'en'] Set locale texts
       * @param {Boolean} [options.usageStatistics=true|false] send hostname to google analytics [default value is true]
       * @example
       * // ES6
       * import TimePicker from 'tui-time-picker'; 
       * 
       * // CommonJS
       * const TimePicker = require('tui-time-picker'); 
       * 
       * // Browser
       * const TimePicker = tui.TimePicker;
       * 
       * const timepicker = new TimePicker('#timepicker-container', {
       *     initialHour: 15,
       *     initialMinute: 13,
       *     inputType: 'selectbox',
       *     showMeridiem: false
       * });
       */


      var TimePicker = defineClass(
      /** @lends TimePicker.prototype */
      {
        "static": {
          /**
           * Locale text data
           * @type {object}
           * @memberof TimePicker
           * @static
           * @example
           * TimePicker.localeTexts['customKey'] = {
           *     am: 'a.m.',
           *     pm: 'p.m.'
           * };
           *
           * const instance = new TimePicker('#timepicker-container', {
           *     language: 'customKey',
           * });
           */
          localeTexts: localeTexts
        },
        init: function init(container, options) {
          options = mergeDefaultOptions(options);
          /**
           * @type {number}
           * @private
           */

          this.id = util.getUniqueId();
          /**
           * @type {HTMLElement}
           * @private
           */

          this.container = isHTMLNode(container) ? container : document.querySelector(container);
          /**
           * @type {HTMLElement}
           * @private
           */

          this.element = null;
          /**
           * @type {HTMLElement}
           * @private
           */

          this.meridiemElement = null;
          /**
           * @type {HTMLElement}
           * @private
           */

          this.amEl = null;
          /**
           * @type {HTMLElement}
           * @private
           */

          this.pmEl = null;
          /**
           * @type {boolean}
           * @private
           */

          this.showMeridiem = options.showMeridiem;
          /**
           * Meridiem postion
           * @type {'left'|'right'}
           * @private
           */

          this.meridiemPosition = options.meridiemPosition;
          /**
           * @type {Spinbox|Selectbox}
           * @private
           */

          this.hourInput = null;
          /**
           * @type {Spinbox|Selectbox}
           * @private
           */

          this.minuteInput = null;
          /**
           * @type {number}
           * @private
           */

          this.hour = options.initialHour;
          /**
           * @type {number}
           * @private
           */

          this.minute = options.initialMinute;
          /**
           * @type {number}
           * @private
           */

          this.hourStep = options.hourStep;
          /**
           * @type {number}
           * @private
           */

          this.minuteStep = options.minuteStep;
          /**
           * @type {Array}
           * @private
           */

          this.disabledHours = options.disabledHours;
          /**
           * @type {Object}
           * @private
           */

          this.disabledMinutes = options.disabledMinutes;
          /**
           * TimePicker inputType
           * @type {'spinbox'|'selectbox'}
           * @private
           */

          this.inputType = options.inputType;
          /**
           * Locale text for meridiem
           * @type {string}
           * @private
           */

          this.localeText = localeTexts[options.language];
          /**
           * Time format for output
           * @type {string}
           * @private
           */

          this.format = this.getValidTimeFormat(options.format);
          this.render();
          this.setEvents();

          if (options.usageStatistics) {
            util.sendHostName();
          }
        },

        /**
         * Set event handlers to selectors, container
         * @private
         */
        setEvents: function setEvents() {
          this.hourInput.on('change', this.onChangeTimeInput, this);
          this.minuteInput.on('change', this.onChangeTimeInput, this);

          if (this.showMeridiem) {
            if (this.inputType === INPUT_TYPE_SELECTBOX) {
              on(this.meridiemElement.querySelector('select'), 'change', this.onChangeMeridiem, this);
            } else if (this.inputType === INPUT_TYPE_SPINBOX) {
              on(this.meridiemElement, 'click', this.onChangeMeridiem, this);
            }
          }
        },

        /**
         * Remove events
         * @private
         */
        removeEvents: function removeEvents() {
          this.off();
          this.hourInput.destroy();
          this.minuteInput.destroy();

          if (this.showMeridiem) {
            if (this.inputType === INPUT_TYPE_SELECTBOX) {
              off(this.meridiemElement.querySelector('select'), 'change', this.onChangeMeridiem, this);
            } else if (this.inputType === INPUT_TYPE_SPINBOX) {
              off(this.meridiemElement, 'click', this.onChangeMeridiem, this);
            }
          }
        },

        /**
         * Render element
         * @private
         */
        render: function render() {
          var context = {
            showMeridiem: this.showMeridiem,
            isSpinbox: this.inputType === 'spinbox'
          };

          if (this.showMeridiem) {
            extend(context, {
              meridiemElement: this.makeMeridiemHTML()
            });
          }

          if (this.element) {
            removeElement(this.element);
          }

          this.container.innerHTML = tmpl(context);
          this.element = this.container.firstChild;
          this.renderTimeInputs();

          if (this.showMeridiem) {
            this.setMeridiemElement();
          }
        },

        /**
         * Set meridiem element on timepicker
         * @private
         */
        setMeridiemElement: function setMeridiemElement() {
          if (this.meridiemPosition === 'left') {
            addClass(this.element, CLASS_NAME_LEFT_MERIDIEM);
          }

          this.meridiemElement = this.element.querySelector(SELECTOR_MERIDIEM_ELEMENT);
          this.amEl = this.meridiemElement.querySelector('[value="AM"]');
          this.pmEl = this.meridiemElement.querySelector('[value="PM"]');
          this.syncToMeridiemElements();
        },

        /**
         * Make html for meridiem element
         * @returns {HTMLElement} Meridiem element
         * @private
         */
        makeMeridiemHTML: function makeMeridiemHTML() {
          var localeText = this.localeText;
          return meridiemTmpl({
            am: localeText.am,
            pm: localeText.pm,
            radioId: this.id,
            isSpinbox: this.inputType === 'spinbox'
          });
        },

        /**
         * Render time selectors
         * @private
         */
        renderTimeInputs: function renderTimeInputs() {
          var hour = this.hour;
          var showMeridiem = this.showMeridiem;
          var hourElement = this.element.querySelector(SELECTOR_HOUR_ELEMENT);
          var minuteElement = this.element.querySelector(SELECTOR_MINUTE_ELEMENT);
          var BoxComponent = this.inputType.toLowerCase() === 'selectbox' ? Selectbox : Spinbox;
          var formatExplode = this.format.split(':');
          var hourItems = this.getHourItems();

          if (showMeridiem) {
            hour = util.getMeridiemHour(hour);
          }

          this.hourInput = new BoxComponent(hourElement, {
            initialValue: hour,
            items: hourItems,
            format: formatExplode[0],
            disabledItems: this.makeDisabledStatItems(hourItems)
          });
          this.minuteInput = new BoxComponent(minuteElement, {
            initialValue: this.minute,
            items: this.getMinuteItems(),
            format: formatExplode[1]
          });
        },
        makeDisabledStatItems: function makeDisabledStatItems(hourItems) {
          var result = [];
          var disabledHours = this.disabledHours.slice();

          if (this.showMeridiem) {
            disabledHours = this.meridiemableTime(disabledHours);
          }

          forEachArray(hourItems, function (hour) {
            result.push(inArray(hour, disabledHours) >= 0);
          });
          return result;
        },
        meridiemableTime: function meridiemableTime(disabledHours) {
          var diffHour = 0;
          var startHour = 0;
          var endHour = 11;
          var result = [];

          if (this.hour >= 12) {
            diffHour = 12;
            startHour = 12;
            endHour = 23;
          }

          forEachArray(disabledHours, function (hour) {
            if (hour >= startHour && hour <= endHour) {
              result.push(hour - diffHour === 0 ? 12 : hour - diffHour);
            }
          });
          return result;
        },

        /**
         * Return formatted format.
         * @param {string} format - format option
         * @returns {string}
         * @private
         */
        getValidTimeFormat: function getValidTimeFormat(format) {
          if (!format.match(/^[h]{1,2}:[m]{1,2}$/i)) {
            return 'h:m';
          }

          return format.toLowerCase();
        },

        /**
         * Initialize meridiem elements
         * @private
         */
        syncToMeridiemElements: function syncToMeridiemElements() {
          var selectedEl = this.hour >= 12 ? this.pmEl : this.amEl;
          var notSelectedEl = selectedEl === this.pmEl ? this.amEl : this.pmEl;
          selectedEl.setAttribute('selected', true);
          selectedEl.setAttribute('checked', true);
          addClass(selectedEl, CLASS_NAME_CHECKED);
          notSelectedEl.removeAttribute('selected');
          notSelectedEl.removeAttribute('checked');
          removeClass(notSelectedEl, CLASS_NAME_CHECKED);
        },

        /**
         * Set values in spinboxes from time
         * @private
         */
        syncToInputs: function syncToInputs() {
          var hour = this.hour;
          var minute = this.minute;

          if (this.showMeridiem) {
            hour = util.getMeridiemHour(hour);
          }

          this.hourInput.setValue(hour);
          this.minuteInput.setValue(minute);
        },

        /**
         * DOM event handler
         * @param {Event} ev - Change event on meridiem element
         * @private
         */
        onChangeMeridiem: function onChangeMeridiem(ev) {
          var hour = this.hour;
          var target = util.getTarget(ev);

          if (target.value && closest(target, SELECTOR_MERIDIEM_ELEMENT)) {
            hour = this.to24Hour(target.value === 'PM', hour);
            this.setTime(hour, this.minute);
            this.setDisabledHours();
            this.setDisabledMinutes(hour);
          }
        },

        /**
         * Time change event handler
         * @private
         */
        onChangeTimeInput: function onChangeTimeInput() {
          var hour = this.hourInput.getValue();
          var minute = this.minuteInput.getValue();
          var isPM = this.hour >= 12;

          if (this.showMeridiem) {
            hour = this.to24Hour(isPM, hour);
          }

          this.setTime(hour, minute);
          this.setDisabledMinutes(hour);
        },

        /**
         * 12Hour-expression to 24Hour-expression
         * @param {boolean} isPM - Is pm?
         * @param {number} hour - Hour
         * @returns {number}
         * @private
         */
        to24Hour: function to24Hour(isPM, hour) {
          hour %= 12;

          if (isPM) {
            hour += 12;
          }

          return hour;
        },
        setDisabledHours: function setDisabledHours() {
          var hourItems = this.getHourItems();
          var disabledItems = this.makeDisabledStatItems(hourItems);
          this.hourInput.setDisabledItems(disabledItems);
        },
        setDisabledMinutes: function setDisabledMinutes(hour) {
          var disabledItems;
          disabledItems = this.disabledMinutes[hour] || [];
          this.minuteInput.setDisabledItems(disabledItems);
        },

        /**
         * Get items of hour
         * @returns {array} Hour item list
         * @private
         */
        getHourItems: function getHourItems() {
          var step = this.hourStep;
          return this.showMeridiem ? util.getRangeArr(1, 12, step) : util.getRangeArr(0, 23, step);
        },

        /**
         * Get items of minute
         * @returns {array} Minute item list
         * @private
         */
        getMinuteItems: function getMinuteItems() {
          return util.getRangeArr(0, 59, this.minuteStep);
        },

        /**
         * Whether the hour and minute are in valid items or not
         * @param {number} hour - Hour value
         * @param {number} minute - Minute value
         * @returns {boolean} State
         * @private
         */
        validItems: function validItems(hour, minute) {
          if (!isNumber(hour) || !isNumber(minute)) {
            return false;
          }

          if (this.showMeridiem) {
            hour = util.getMeridiemHour(hour);
          }

          return inArray(hour, this.getHourItems()) > -1 && inArray(minute, this.getMinuteItems()) > -1;
        },

        /**
         * Set step of hour
         * @param {array} step - Step to create items of hour
         */
        setHourStep: function setHourStep(step) {
          this.hourStep = step;
          this.hourInput.fire('changeItems', this.getHourItems());
        },

        /**
         * Get step of hour
         * @returns {number} Step of hour
         */
        getHourStep: function getHourStep() {
          return this.hourStep;
        },

        /**
         * Set step of minute
         * @param {array} step - Step to create items of minute
         */
        setMinuteStep: function setMinuteStep(step) {
          this.minuteStep = step;
          this.minuteInput.fire('changeItems', this.getMinuteItems());
        },

        /**
         * Get step of minute
         * @returns {number} Step of minute
         */
        getMinuteStep: function getMinuteStep() {
          return this.minuteStep;
        },

        /**
         * Show time picker element
         */
        show: function show() {
          removeClass(this.element, CLASS_NAME_HIDDEN);
        },

        /**
         * Hide time picker element
         */
        hide: function hide() {
          addClass(this.element, CLASS_NAME_HIDDEN);
        },

        /**
         * Set hour
         * @param {number} hour for time picker - (0~23)
         * @returns {boolean} result of set time
         */
        setHour: function setHour(hour) {
          return this.setTime(hour, this.minute);
        },

        /**
         * Set minute
         * @param {number} minute for time picker
         * @returns {boolean} result of set time
         */
        setMinute: function setMinute(minute) {
          return this.setTime(this.hour, minute);
        },

        /**
         * Set time
         * @param {number} hour for time picker - (0~23)
         * @param {number} minute for time picker
         */
        setTime: function setTime(hour, minute) {
          if (!this.validItems(hour, minute)) {
            return;
          }

          this.hour = hour;
          this.minute = minute;
          this.syncToInputs();

          if (this.showMeridiem) {
            this.syncToMeridiemElements();
          }
          /**
           * Change event - TimePicker
           * @event TimePicker#change
           * @type {object} event - Event object
           * @property {number} hour - changed hour
           * @property {number} minute - changed minute
           * @example
           * timepicker.on('change', (e) => {
           *   console.log(e.hour, e.minute);
           * });
           */


          this.fire('change', {
            hour: this.hour,
            minute: this.minute
          });
        },

        /**
         * Set selectable range 
         * @param {Object} begin - Contain begin hour and minute of range
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {Object} [end] - Contain end hour and minute of range
         * @param {number} end.hour - end hour of range
         * @param {number} end.minute - end minute of range
         */
        setRange: function setRange(begin, end) {
          var beginHour = begin.hour;
          var beginMin = begin.minute;
          var endHour, endMin;

          if (!this.isValidRange(begin, end)) {
            return;
          }

          if (end) {
            endHour = end.hour;
            endMin = end.minute;
          }

          this.setRangeHour(beginHour, endHour);
          this.setRangeMinute(beginHour, beginMin, endHour, endMin);
          this.applyRange(beginHour, beginMin, endHour);
        },

        /**
         * Set selectable range on hour
         * @param {number} begin.hour - begin hour of range
         * @param {number} [end.hour] - end hour of range
         * @private
         */
        setRangeHour: function setRangeHour(beginHour, endHour) {
          var disabledHours = util.getRangeArr(START_NUMBER_OF_TIME, beginHour - 1);

          if (endHour) {
            disabledHours = disabledHours.concat(util.getRangeArr(endHour + 1, END_NUMBER_OF_HOUR));
          }

          this.disabledHours = disabledHours.slice();
        },

        /**
         * Set selectable range on minute
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {number} [end.hour] - end hour of range
         * @param {number} [end.minute] - end minute of range
         * @private
         */
        setRangeMinute: function setRangeMinute(beginHour, beginMin, endHour, endMin) {
          var disabledMinRanges = [];

          if (!beginHour && !beginMin) {
            return;
          }

          disabledMinRanges.push({
            begin: START_NUMBER_OF_TIME,
            end: beginMin
          });

          if (endHour && endMin) {
            disabledMinRanges.push({
              begin: endMin,
              end: END_NUMBER_OF_MINUTE
            });

            if (beginHour === endHour) {
              this.disabledMinutes[beginHour] = util.getDisabledMinuteArr(disabledMinRanges, this.minuteStep).slice();
              return;
            }

            this.disabledMinutes[endHour] = util.getDisabledMinuteArr([disabledMinRanges[1]], this.minuteStep).slice();
          }

          this.disabledMinutes[beginHour] = util.getDisabledMinuteArr([disabledMinRanges[0]], this.minuteStep).slice();
        },

        /**
         * Apply range
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {number} [end.hour] - end hour of range
         * @private
         */
        applyRange: function applyRange(beginHour, beginMin, endHour) {
          var targetHour = beginHour;
          var targetMinute = Math.ceil(beginMin / this.minuteStep) * this.minuteStep;

          if (this.isLaterThanSetTime(beginHour, beginMin)) {
            if (this.hourStep !== 1 && beginHour % this.hourStep !== 1) {
              targetHour = beginHour + beginHour % this.hourStep + 1;
              targetMinute = 0;
            }

            this.setTime(targetHour, targetMinute);
          }

          this.setDisabledHours();

          if (this.showMeridiem) {
            this.syncToMeridiemElements();
            util.setDisabled(this.amEl, beginHour >= END_NUMBER_OF_HOUR_WITH_MERIDIEM);
            util.setDisabled(this.pmEl, endHour < END_NUMBER_OF_HOUR_WITH_MERIDIEM);
          }
        },

        /**
         * Reset minute selectable range
         */
        resetMinuteRange: function resetMinuteRange() {
          var i;
          this.disabledMinutes = {};

          for (i = 0; i <= END_NUMBER_OF_HOUR; i += 1) {
            this.setDisabledMinutes(this.hour);
          }
        },

        /**
         * Whether the given range a valid range 
         * @param {Object} begin - Contain begin hour and minute of range
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {Object} [end] - Contain end hour and minute of range
         * @param {number} end.hour - end hour of range
         * @param {number} end.minute - end minute of range
         * @returns {boolean} result of range validation
         * @private
         */
        isValidRange: function isValidRange(begin, end) {
          var beginHour = begin.hour;
          var beginMin = begin.minute;
          var endHour, endMin;

          if (!this.isValidTime(beginHour, beginMin)) {
            return false;
          }

          if (!end) {
            return true;
          }

          endHour = end.hour;
          endMin = end.minute;
          return this.isValidTime(endHour, endMin) && this.compareTimes(begin, end) > 0;
        },

        /**
         * Whether the given time a valid time 
         * @param {number} hour - hour for validation
         * @param {number} minute - minute for validation
         * @returns {boolean} result of time validation
         * @private
         */
        isValidTime: function isValidTime(hour, minute) {
          return hour >= START_NUMBER_OF_TIME && hour <= END_NUMBER_OF_HOUR && minute >= START_NUMBER_OF_TIME && minute <= END_NUMBER_OF_MINUTE;
        },

        /**
         * Compare given time with set time 
         * @param {number} hour - given hour
         * @param {number} minute - given minute
         * @returns {boolean} result of compare
         * @private
         */
        isLaterThanSetTime: function isLaterThanSetTime(hour, minute) {
          return hour > this.hour || hour === this.hour && minute > this.minute;
        },

        /**
         * Compare two times
         * it returns
         *  0: when begin equals end
         *  positive: when end later than begin
         *  negative: when begin later than end
         * @param {Object} begin - Contain begin hour and minute of range
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {Object} end - Contain end hour and minute of range
         * @param {number} end.hour - end hour of range
         * @param {number} end.minute - end minute of range
         * @returns {boolean} result of range validation
         * @private
         */
        compareTimes: function compareTimes(begin, end) {
          var first = new Date(0);
          var second = new Date(0);
          first.setHours(begin.hour, begin.minute);
          second.setHours(end.hour, end.minute);
          return second.getTime() - first.getTime();
        },

        /**
         * Get hour
         * @returns {number} hour - (0~23)
         */
        getHour: function getHour() {
          return this.hour;
        },

        /**
         * Get minute
         * @returns {number} minute
         */
        getMinute: function getMinute() {
          return this.minute;
        },

        /**
         * Change locale text of meridiem by language code
         * @param {string} language - Language code
         */
        changeLanguage: function changeLanguage(language) {
          this.localeText = localeTexts[language];
          this.render();
        },

        /**
         * Destroy
         */
        destroy: function destroy() {
          this.removeEvents();
          removeElement(this.element);
          this.container = this.showMeridiem = this.hourInput = this.minuteInput = this.hour = this.minute = this.inputType = this.element = this.meridiemElement = this.amEl = this.pmEl = null;
        }
      });
      CustomEvents.mixin(TimePicker);
      module.exports = TimePicker;
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __nested_webpack_require_94446__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is existing or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isUndefined = __nested_webpack_require_94446__(5);

      var isNull = __nested_webpack_require_94446__(24);
      /**
       * Check whether the given variable is existing or not.
       * If the given variable is not null and not undefined, returns true.
       * @param {*} param - Target for checking
       * @returns {boolean} Is existy?
       * @memberof module:type
       * @example
       * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
       *
       * isExisty(''); //true
       * isExisty(0); //true
       * isExisty([]); //true
       * isExisty({}); //true
       * isExisty(null); //false
       * isExisty(undefined); //false
      */


      function isExisty(param) {
        return !isUndefined(param) && !isNull(param);
      }

      module.exports = isExisty;
      /***/
    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is null or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is null or not.
       * If the given variable(arguments[0]) is null, returns true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is null?
       * @memberof module:type
       */

      function isNull(obj) {
        return obj === null;
      }

      module.exports = isNull;
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is an object or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is an object or not.
       * If the given variable is an object, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is object?
       * @memberof module:type
       */

      function isObject(obj) {
        return obj === Object(obj);
      }

      module.exports = isObject;
      /***/
    },
    /* 26 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a function or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a function or not.
       * If the given variable is a function, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is function?
       * @memberof module:type
       */

      function isFunction(obj) {
        return obj instanceof Function;
      }

      module.exports = isFunction;
      /***/
    },
    /* 27 */

    /***/
    function (module, exports, __nested_webpack_require_97463__) {
      "use strict";
      /**
       * @fileoverview Provide a simple inheritance in prototype-oriented.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var createObject = __nested_webpack_require_97463__(28);
      /**
       * Provide a simple inheritance in prototype-oriented.
       * Caution :
       *  Don't overwrite the prototype of child constructor.
       *
       * @param {function} subType Child constructor
       * @param {function} superType Parent constructor
       * @memberof module:inheritance
       * @example
       * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
       *
       * // Parent constructor
       * function Animal(leg) {
       *     this.leg = leg;
       * }
       * Animal.prototype.growl = function() {
       *     // ...
       * };
       *
       * // Child constructor
       * function Person(name) {
       *     this.name = name;
       * }
       *
       * // Inheritance
       * inherit(Person, Animal);
       *
       * // After this inheritance, please use only the extending of property.
       * // Do not overwrite prototype.
       * Person.prototype.walk = function(direction) {
       *     // ...
       * };
       */


      function inherit(subType, superType) {
        var prototype = createObject(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
      }

      module.exports = inherit;
      /***/
    },
    /* 28 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Create a new object with the specified prototype object and properties.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * @module inheritance
       */

      /**
       * Create a new object with the specified prototype object and properties.
       * @param {Object} obj This object will be a prototype of the newly-created object.
       * @returns {Object}
       * @memberof module:inheritance
       */

      function createObject(obj) {
        function F() {} // eslint-disable-line require-jsdoc


        F.prototype = obj;
        return new F();
      }

      module.exports = createObject;
      /***/
    },
    /* 29 */

    /***/
    function (module, exports, __nested_webpack_require_99829__) {
      "use strict";
      /**
       * @fileoverview Add css class to element
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEach = __nested_webpack_require_99829__(4);

      var inArray = __nested_webpack_require_99829__(0);

      var getClass = __nested_webpack_require_99829__(18);

      var setClassName = __nested_webpack_require_99829__(19);
      /**
       * domUtil module
       * @module domUtil
       */

      /**
       * Add css class to element
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {...string} cssClass - css classes to add
       * @memberof module:domUtil
       */


      function addClass(element) {
        var cssClass = Array.prototype.slice.call(arguments, 1);
        var classList = element.classList;
        var newClass = [];
        var origin;

        if (classList) {
          forEach(cssClass, function (name) {
            element.classList.add(name);
          });
          return;
        }

        origin = getClass(element);

        if (origin) {
          cssClass = [].concat(origin.split(/\s+/), cssClass);
        }

        forEach(cssClass, function (cls) {
          if (inArray(cls, newClass) < 0) {
            newClass.push(cls);
          }
        });
        setClassName(element, newClass);
      }

      module.exports = addClass;
      /***/
    },
    /* 30 */

    /***/
    function (module, exports, __nested_webpack_require_101257__) {
      "use strict";
      /**
       * @fileoverview Check element match selector
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_101257__(0);

      var toArray = __nested_webpack_require_101257__(31);

      var elProto = Element.prototype;

      var matchSelector = elProto.matches || elProto.webkitMatchesSelector || elProto.mozMatchesSelector || elProto.msMatchesSelector || function (selector) {
        var doc = this.document || this.ownerDocument;
        return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
      };
      /**
       * Check element match selector
       * @param {HTMLElement} element - element to check
       * @param {string} selector - selector to check
       * @returns {boolean} is selector matched to element?
       * @memberof module:domUtil
       */


      function matches(element, selector) {
        return matchSelector.call(element, selector);
      }

      module.exports = matches;
      /***/
    },
    /* 31 */

    /***/
    function (module, exports, __nested_webpack_require_102345__) {
      "use strict";
      /**
       * @fileoverview Transform the Array-like object to Array.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_102345__(1);
      /**
       * Transform the Array-like object to Array.
       * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
       * @param {*} arrayLike Array-like object
       * @returns {Array} Array
       * @memberof module:collection
       * @example
       * var toArray = require('tui-code-snippet/collection/toArray'); // node, commonjs
       *
       * var arrayLike = {
       *     0: 'one',
       *     1: 'two',
       *     2: 'three',
       *     3: 'four',
       *     length: 4
       * };
       * var result = toArray(arrayLike);
       *
       * alert(result instanceof Array); // true
       * alert(result); // one,two,three,four
       */


      function toArray(arrayLike) {
        var arr;

        try {
          arr = Array.prototype.slice.call(arrayLike);
        } catch (e) {
          arr = [];
          forEachArray(arrayLike, function (value) {
            arr.push(value);
          });
        }

        return arr;
      }

      module.exports = toArray;
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __nested_webpack_require_103709__) {
      "use strict";
      /**
       * @fileoverview Remove css class from element
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachArray = __nested_webpack_require_103709__(1);

      var inArray = __nested_webpack_require_103709__(0);

      var getClass = __nested_webpack_require_103709__(18);

      var setClassName = __nested_webpack_require_103709__(19);
      /**
       * Remove css class from element
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {...string} cssClass - css classes to remove
       * @memberof module:domUtil
       */


      function removeClass(element) {
        var cssClass = Array.prototype.slice.call(arguments, 1);
        var classList = element.classList;
        var origin, newClass;

        if (classList) {
          forEachArray(cssClass, function (name) {
            classList.remove(name);
          });
          return;
        }

        origin = getClass(element).split(/\s+/);
        newClass = [];
        forEachArray(origin, function (name) {
          if (inArray(name, cssClass) < 0) {
            newClass.push(name);
          }
        });
        setClassName(element, newClass);
      }

      module.exports = removeClass;
      /***/
    },
    /* 33 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Check whether the given variable is a number or not.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      /**
       * Check whether the given variable is a number or not.
       * If the given variable is a number, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is number?
       * @memberof module:type
       */

      function isNumber(obj) {
        return typeof obj === 'number' || obj instanceof Number;
      }

      module.exports = isNumber;
      /***/
    },
    /* 34 */

    /***/
    function (module, exports, __nested_webpack_require_105691__) {
      "use strict";
      /**
       * @fileoverview Spinbox (in TimePicker)
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_105691__(0);

      var forEachArray = __nested_webpack_require_105691__(1);

      var CustomEvents = __nested_webpack_require_105691__(8);

      var defineClass = __nested_webpack_require_105691__(9);

      var extend = __nested_webpack_require_105691__(2);

      var on = __nested_webpack_require_105691__(10);

      var off = __nested_webpack_require_105691__(11);

      var closest = __nested_webpack_require_105691__(12);

      var removeElement = __nested_webpack_require_105691__(13);

      var isHTMLNode = __nested_webpack_require_105691__(14);

      var util = __nested_webpack_require_105691__(15);

      var tmpl = __nested_webpack_require_105691__(37);

      var SELECTOR_UP_BUTTON = '.tui-timepicker-btn-up';
      var SELECTOR_DOWN_BUTTON = '.tui-timepicker-btn-down';
      /**
       * @class
       * @ignore
       * @param {String|HTMLElement} container - Container of spinbox or selector
       * @param {Object} [options] - Options for initialization
       * @param {number} [options.initialValue] - initial setting value
       * @param {Array.<number>} items - Items
       */

      var Spinbox = defineClass(
      /** @lends Spinbox.prototype */
      {
        init: function init(container, options) {
          options = extend({
            items: []
          }, options);
          /**
           * @type {HTMLElement}
           * @private
           */

          this._container = isHTMLNode(container) ? container : document.querySelector(container);
          /**
           * Spinbox element
           * @type {HTMLElement}
           * @private
           */

          this._element = null;
          /**
           * @type {HTMLElement}
           * @private
           */

          this._inputElement = null;
          /**
           * Spinbox value items
           * @type {Array.<number>}
           * @private
           */

          this._items = options.items;
          /**
           * Selectbox disabled items info
           * @type {Array.<number>}
           * @private
           */

          this._disabledItems = options.disabledItems || [];
          /**
           * @type {number}
           * @private
           */

          this._selectedIndex = Math.max(0, inArray(options.initialValue, this._items));
          /**
           * Time format for output
           * @type {string}
           * @private
           */

          this._format = options.format;

          this._render();

          this._setEvents();
        },

        /**
         * Render spinbox
         * @private
         */
        _render: function _render() {
          var index = inArray(this.getValue(), this._items);
          var context;

          if (this._disabledItems[index]) {
            this._selectedIndex = this._findEnabledIndex();
          }

          context = {
            maxLength: this._getMaxLength(),
            initialValue: this.getValue(),
            format: this._format,
            formatTime: util.formatTime
          };
          this._container.innerHTML = tmpl(context);
          this._element = this._container.firstChild;
          this._inputElement = this._element.querySelector('input');
        },

        /**
         * Find the index of the enabled item
         * @returns {number} - find selected index
         * @private
         */
        _findEnabledIndex: function _findEnabledIndex() {
          return inArray(false, this._disabledItems);
        },

        /**
         * Returns maxlength of value
         * @returns {number}
         * @private
         */
        _getMaxLength: function _getMaxLength() {
          var lengths = [];
          forEachArray(this._items, function (item) {
            lengths.push(String(item).length);
          });
          return Math.max.apply(null, lengths);
        },

        /**
         * Set disabledItems
         * @param {object} disabledItems - disabled status of items
         */
        setDisabledItems: function setDisabledItems(disabledItems) {
          this._disabledItems = disabledItems;

          this._changeToInputValue();
        },

        /**
         * Assign default events to up/down button
         * @private
         */
        _setEvents: function _setEvents() {
          on(this._container, 'click', this._onClickHandler, this);
          on(this._inputElement, 'keydown', this._onKeydownInputElement, this);
          on(this._inputElement, 'change', this._onChangeHandler, this);
          this.on('changeItems', function (items) {
            this._items = items;

            this._render();
          }, this);
        },

        /**
         * Remove events to up/down button
         * @private
         */
        _removeEvents: function _removeEvents() {
          this.off();
          off(this._container, 'click', this._onClickHandler, this);
          off(this._inputElement, 'keydown', this._onKeydownInputElement, this);
          off(this._inputElement, 'change', this._onChangeHandler, this);
        },

        /**
         * Click event handler
         * @param {Event} ev - Change event on up/down buttons.
         */
        _onClickHandler: function _onClickHandler(ev) {
          var target = util.getTarget(ev);

          if (closest(target, SELECTOR_DOWN_BUTTON)) {
            this._setNextValue(true);
          } else if (closest(target, SELECTOR_UP_BUTTON)) {
            this._setNextValue(false);
          }
        },

        /**
         * Set input value
         * @param {boolean} isDown - From down-action?
         * @private
         */
        _setNextValue: function _setNextValue(isDown) {
          var index = this._selectedIndex;

          if (isDown) {
            index = index ? index - 1 : this._items.length - 1;
          } else {
            index = index < this._items.length - 1 ? index + 1 : 0;
          }

          if (this._disabledItems[index]) {
            this._selectedIndex = index;

            this._setNextValue(isDown);
          } else {
            this.setValue(this._items[index]);
          }
        },

        /**
         * DOM(Input element) Keydown Event handler
         * @param {Event} ev event-object
         * @private
         */
        _onKeydownInputElement: function _onKeydownInputElement(ev) {
          var keyCode = ev.which || ev.keyCode;
          var isDown;

          if (closest(util.getTarget(ev), 'input')) {
            switch (keyCode) {
              case 38:
                isDown = false;
                break;

              case 40:
                isDown = true;
                break;

              default:
                return;
            }

            this._setNextValue(isDown);
          }
        },

        /**
         * DOM(Input element) Change Event handler
         * @param {Event} ev Change event on an input element.
         * @private
         */
        _onChangeHandler: function _onChangeHandler(ev) {
          if (closest(util.getTarget(ev), 'input')) {
            this._changeToInputValue();
          }
        },

        /**
         * Change value to input-box if it is valid.
         * @private
         */
        _changeToInputValue: function _changeToInputValue() {
          var newValue = Number(this._inputElement.value);
          var newIndex = inArray(newValue, this._items);

          if (this._disabledItems[newIndex]) {
            newIndex = this._findEnabledIndex();
            newValue = this._items[newIndex];
          } else if (newIndex === this._selectedIndex) {
            return;
          }

          if (newIndex === -1) {
            this.setValue(this._items[this._selectedIndex]);
          } else {
            this._selectedIndex = newIndex;
            this.fire('change', {
              value: newValue
            });
          }
        },

        /**
         * Set value to input-box.
         * @param {number} value - Value
         */
        setValue: function setValue(value) {
          this._inputElement.value = util.formatTime(value, this._format);

          this._changeToInputValue();
        },

        /**
         * Returns current value
         * @returns {number}
         */
        getValue: function getValue() {
          return this._items[this._selectedIndex];
        },

        /**
         * Destory
         */
        destroy: function destroy() {
          this._removeEvents();

          removeElement(this._element);
          this._container = this._element = this._inputElement = this._items = this._selectedIndex = null;
        }
      });
      CustomEvents.mixin(Spinbox);
      module.exports = Spinbox;
      /***/
    },
    /* 35 */

    /***/
    function (module, exports, __nested_webpack_require_114463__) {
      "use strict";
      /**
       * @fileoverview Send hostname on DOMContentLoaded.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var isUndefined = __nested_webpack_require_114463__(5);

      var imagePing = __nested_webpack_require_114463__(36);

      var ms7days = 7 * 24 * 60 * 60 * 1000;
      /**
       * Check if the date has passed 7 days
       * @param {number} date - milliseconds
       * @returns {boolean}
       * @private
       */

      function isExpired(date) {
        var now = new Date().getTime();
        return now - date > ms7days;
      }
      /**
       * Send hostname on DOMContentLoaded.
       * To prevent hostname set tui.usageStatistics to false.
       * @param {string} appName - application name
       * @param {string} trackingId - GA tracking ID
       * @ignore
       */


      function sendHostname(appName, trackingId) {
        var url = 'https://www.google-analytics.com/collect';
        var hostname = location.hostname;
        var hitType = 'event';
        var eventCategory = 'use';
        var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
        var date = window.localStorage.getItem(applicationKeyForStorage); // skip if the flag is defined and is set to false explicitly

        if (!isUndefined(window.tui) && window.tui.usageStatistics === false) {
          return;
        } // skip if not pass seven days old


        if (date && !isExpired(date)) {
          return;
        }

        window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
        setTimeout(function () {
          if (document.readyState === 'interactive' || document.readyState === 'complete') {
            imagePing(url, {
              v: 1,
              t: hitType,
              tid: trackingId,
              cid: hostname,
              dp: hostname,
              dh: appName,
              el: appName,
              ec: eventCategory
            });
          }
        }, 1000);
      }

      module.exports = sendHostname;
      /***/
    },
    /* 36 */

    /***/
    function (module, exports, __nested_webpack_require_116615__) {
      "use strict";
      /**
       * @fileoverview Request image ping.
       * @author NHN FE Development Lab <dl_javascript@nhn.com>
       */

      var forEachOwnProperties = __nested_webpack_require_116615__(16);
      /**
       * @module request
       */

      /**
       * Request image ping.
       * @param {String} url url for ping request
       * @param {Object} trackingInfo infos for make query string
       * @returns {HTMLElement}
       * @memberof module:request
       * @example
       * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
       *
       * imagePing('https://www.google-analytics.com/collect', {
       *     v: 1,
       *     t: 'event',
       *     tid: 'trackingid',
       *     cid: 'cid',
       *     dp: 'dp',
       *     dh: 'dh'
       * });
       */


      function imagePing(url, trackingInfo) {
        var trackingElement = document.createElement('img');
        var queryString = '';
        forEachOwnProperties(trackingInfo, function (value, key) {
          queryString += '&' + key + '=' + value;
        });
        queryString = queryString.substring(1);
        trackingElement.src = url + '?' + queryString;
        trackingElement.style.display = 'none';
        document.body.appendChild(trackingElement);
        document.body.removeChild(trackingElement);
        return trackingElement;
      }

      module.exports = imagePing;
      /***/
    },
    /* 37 */

    /***/
    function (module, exports, __nested_webpack_require_118134__) {
      "use strict";

      var template = __nested_webpack_require_118134__(7);

      module.exports = function (context) {
        var source = '<div class="tui-timepicker-btn-area">' + '  <input type="text" class="tui-timepicker-spinbox-input"' + '        maxlength="{{maxLength}}"' + '        size="{{maxLength}}"' + '        value="{{formatTime initialValue format}}"' + '        aria-label="TimePicker spinbox value">' + '  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-up">' + '    <span class="tui-ico-t-btn">Increase</span>' + '  </button>' + '  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-down">' + '    <span class="tui-ico-t-btn">Decrease</span>' + '  </button>' + '</div>';
        return template(source, context);
      };
      /***/

    },
    /* 38 */

    /***/
    function (module, exports, __nested_webpack_require_119000__) {
      "use strict";
      /**
       * @fileoverview Selectbox (in TimePicker)
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      var inArray = __nested_webpack_require_119000__(0);

      var CustomEvents = __nested_webpack_require_119000__(8);

      var defineClass = __nested_webpack_require_119000__(9);

      var extend = __nested_webpack_require_119000__(2);

      var on = __nested_webpack_require_119000__(10);

      var off = __nested_webpack_require_119000__(11);

      var closest = __nested_webpack_require_119000__(12);

      var removeElement = __nested_webpack_require_119000__(13);

      var isHTMLNode = __nested_webpack_require_119000__(14);

      var util = __nested_webpack_require_119000__(15);

      var tmpl = __nested_webpack_require_119000__(39);
      /**
       * @class
       * @ignore
       * @param {string|HTMLElement} container - Container element or selector
       * @param {object} options - Options
       * @param {Array.<number>} options.items - Items
       * @param {number} options.initialValue - Initial value
       */


      var Selectbox = defineClass(
      /** @lends Selectbox.prototype */
      {
        init: function init(container, options) {
          options = extend({
            items: []
          }, options);
          /**
           * Container element
           * @type {HTMLElement}
           * @private
           */

          this._container = isHTMLNode(container) ? container : document.querySelector(container);
          /**
           * Selectbox items
           * @type {Array.<number>}
           * @private
           */

          this._items = options.items || [];
          /**
           * Selectbox disabled items info
           * @type {Array.<number>}
           * @private
           */

          this._disabledItems = options.disabledItems || [];
          /**
           * Selected index
           * @type {number}
           * @private
           */

          this._selectedIndex = Math.max(0, inArray(options.initialValue, this._items));
          /**
           * Time format for output
           * @type {string}
           * @private
           */

          this._format = options.format;
          /**
           * Select element
           * @type {HTMLElement}
           * @private
           */

          this._element = null;

          this._render();

          this._setEvents();
        },

        /**
         * Render selectbox
         * @private
         */
        _render: function _render() {
          var context;

          this._changeEnabledIndex();

          context = {
            items: this._items,
            format: this._format,
            initialValue: this.getValue(),
            disabledItems: this._disabledItems,
            formatTime: util.formatTime,
            equals: function equals(a, b) {
              return a === b;
            }
          };

          if (this._element) {
            this._removeElement();
          }

          this._container.innerHTML = tmpl(context);
          this._element = this._container.firstChild;
          on(this._element, 'change', this._onChangeHandler, this);
        },

        /**
         * Change the index of the enabled item
         * @private
         */
        _changeEnabledIndex: function _changeEnabledIndex() {
          var index = inArray(this.getValue(), this._items);

          if (this._disabledItems[index]) {
            this._selectedIndex = inArray(false, this._disabledItems);
          }
        },

        /**
         * Set disabledItems
         * @param {object} disabledItems - disabled status of items
         * @private
         */
        setDisabledItems: function setDisabledItems(disabledItems) {
          this._disabledItems = disabledItems;

          this._render();
        },

        /**
         * Set events
         * @private
         */
        _setEvents: function _setEvents() {
          this.on('changeItems', function (items) {
            this._items = items;

            this._render();
          }, this);
        },

        /**
         * Remove events
         * @private
         */
        _removeEvents: function _removeEvents() {
          this.off();
        },

        /**
         * Remove element
         * @private
         */
        _removeElement: function _removeElement() {
          off(this._element, 'change', this._onChangeHandler, this);
          removeElement(this._element);
        },

        /**
         * Change event handler
         * @param {Event} ev Change event on a select element.
         * @private
         */
        _onChangeHandler: function _onChangeHandler(ev) {
          if (closest(util.getTarget(ev), 'select')) {
            this._setNewValue();
          }
        },

        /**
         * Set new value
         * @private
         */
        _setNewValue: function _setNewValue() {
          var newValue = Number(this._element.value);
          this._selectedIndex = inArray(newValue, this._items);
          this.fire('change', {
            value: newValue
          });
        },

        /**
         * Returns current value
         * @returns {number}
         */
        getValue: function getValue() {
          return this._items[this._selectedIndex];
        },

        /**
         * Set value
         * @param {number} value - New value
         */
        setValue: function setValue(value) {
          var newIndex = inArray(value, this._items);

          if (newIndex > -1 && newIndex !== this._selectedIndex) {
            this._selectedIndex = newIndex;
            this._element.value = value;

            this._setNewValue();
          }
        },

        /**
         * Destory
         */
        destroy: function destroy() {
          this._removeEvents();

          this._removeElement();

          this._container = this._items = this._selectedIndex = this._element = null;
        }
      });
      CustomEvents.mixin(Selectbox);
      module.exports = Selectbox;
      /***/
    },
    /* 39 */

    /***/
    function (module, exports, __nested_webpack_require_124995__) {
      "use strict";

      var template = __nested_webpack_require_124995__(7);

      module.exports = function (context) {
        var source = '<select class="tui-timepicker-select" aria-label="Time">' + '  {{each items}}' + '    {{if equals initialValue @this}}' + '      <option value="{{@this}}" selected {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>' + '    {{else}}' + '      <option value="{{@this}}" {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>' + '    {{/if}}' + '  {{/each}}' + '</select>';
        return template(source, context);
      };
      /***/

    },
    /* 40 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * @fileoverview Default locale texts
       * @author NHN. FE Development Lab <dl_javascript@nhn.com>
       */

      module.exports = {
        en: {
          am: 'AM',
          pm: 'PM'
        },
        ko: {
          am: '오전',
          pm: '오후'
        }
      };
      /***/
    },
    /* 41 */

    /***/
    function (module, exports, __nested_webpack_require_126112__) {
      "use strict";

      var template = __nested_webpack_require_126112__(7);

      module.exports = function (context) {
        var source = '<div class="tui-timepicker">' + '  <div class="tui-timepicker-body">' + '    <div class="tui-timepicker-row">' + '      {{if isSpinbox}}' + '        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-hour"></div>' + '        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>' + '        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-minute"></div>' + '        {{if showMeridiem}}' + '          {{meridiemElement}}' + '        {{/if}}' + '      {{else}}' + '        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-hour"></div>' + '        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>' + '        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-minute"></div>' + '        {{if showMeridiem}}' + '          {{meridiemElement}}' + '        {{/if}}' + '      {{/if}}' + '    </div>' + '  </div>' + '</div>';
        return template(source, context);
      };
      /***/

    },
    /* 42 */

    /***/
    function (module, exports, __nested_webpack_require_127403__) {
      "use strict";

      var template = __nested_webpack_require_127403__(7);

      module.exports = function (context) {
        var source = '{{if isSpinbox}}' + '  <div class="tui-timepicker-column tui-timepicker-checkbox tui-timepicker-meridiem">' + '    <div class="tui-timepicker-check-area">' + '      <ul class="tui-timepicker-check-lst">' + '        <li class="tui-timepicker-check">' + '          <div class="tui-timepicker-radio">' + '            <input type="radio"' + '                  name="optionsRadios-{{radioId}}"' + '                  value="AM"' + '                  class="tui-timepicker-radio-am"' + '                  id="tui-timepicker-radio-am-{{radioId}}">' + '            <label for="tui-timepicker-radio-am-{{radioId}}" class="tui-timepicker-radio-label">' + '              <span class="tui-timepicker-input-radio"></span>{{am}}' + '            </label>' + '          </div>' + '        </li>' + '        <li class="tui-timepicker-check">' + '          <div class="tui-timepicker-radio">' + '            <input type="radio"' + '                  name="optionsRadios-{{radioId}}"' + '                  value="PM"' + '                  class="tui-timepicker-radio-pm"' + '                  id="tui-timepicker-radio-pm-{{radioId}}">' + '            <label for="tui-timepicker-radio-pm-{{radioId}}" class="tui-timepicker-radio-label">' + '              <span class="tui-timepicker-input-radio"></span>{{pm}}' + '            </label>' + '          </div>' + '        </li>' + '      </ul>' + '    </div>' + '  </div>' + '{{else}}' + '  <div class="tui-timepicker-column tui-timepicker-selectbox tui-is-add-picker tui-timepicker-meridiem">' + '    <select class="tui-timepicker-select" aria-label="AM/PM">' + '      <option value="AM">{{am}}</option>' + '      <option value="PM">{{pm}}</option>' + '    </select>' + '  </div>' + '{{/if}}';
        return template(source, context);
      };
      /***/

    }
    /******/
    ])
  );
});

/***/ }),

/***/ "./node_modules/@toast-ui/calendar/dist/toastui-calendar.min.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@toast-ui/calendar/dist/toastui-calendar.min.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@toast-ui/calendar/dist/toastui-calendar.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@toast-ui/calendar/dist/toastui-calendar.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Day": () => (/* binding */ Day),
/* harmony export */   "Month": () => (/* binding */ Month),
/* harmony export */   "TZDate": () => (/* binding */ TZDate),
/* harmony export */   "Week": () => (/* binding */ Week),
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var tui_date_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tui-date-picker */ "./node_modules/tui-date-picker/dist/tui-date-picker.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
/*!
 * TOAST UI Calendar 2nd Edition
 * @version 2.1.3 | Tue Aug 16 2022
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */

var n$2, l$3, u$3, t$2, o$3, r$3, f$3 = {}, e$1 = [], c$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$3(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function a$3(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function h$3(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      f2[r2] === void 0 && (f2[r2] = l2.defaultProps[r2]);
  return v$3(l2, f2, t2, o2, null);
}
function v$3(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u$3 : r2 };
  return r2 == null && l$3.vnode != null && l$3.vnode(f2), f2;
}
function p$3(n2) {
  return n2.children;
}
function d$3(n2, l2) {
  this.props = n2, this.context = l2;
}
function _$3(n2, l2) {
  if (l2 == null)
    return n2.__ ? _$3(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? _$3(n2) : null;
}
function k$2(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$2(n2);
  }
}
function b$2(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !g$4.__r++ || o$3 !== l$3.debounceRendering) && ((o$3 = l$3.debounceRendering) || setTimeout)(g$4);
}
function g$4() {
  for (var n2; g$4.__r = t$2.length; )
    n2 = t$2.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$2 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s$3({}, t2)).__v = t2.__v + 1, j$3(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? _$3(t2) : o2, t2.__h), z$2(u2, t2), t2.__e != o2 && k$2(t2)));
    });
}
function w$3(n2, l2, u2, i2, t2, o2, r2, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x2 = i2 && i2.__k || e$1, C2 = x2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((k2 = u2.__k[h2] = (k2 = l2[h2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" || typeof k2 == "bigint" ? v$3(null, k2, null, null, k2) : Array.isArray(k2) ? v$3(p$3, { children: k2 }, null, null, null) : k2.__b > 0 ? v$3(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, (d2 = x2[h2]) === null || d2 && k2.key == d2.key && k2.type === d2.type)
        x2[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x2[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x2[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$3(n2, k2, d2 = d2 || f$3, t2, o2, r2, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), b2 != null ? (g2 == null && (g2 = b2), typeof k2.type == "function" && k2.__k === d2.__k ? k2.__d = s2 = m$2(k2, s2, n2) : s2 = A$2(n2, k2, d2, x2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$3(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    x2[h2] != null && (typeof u2.type == "function" && x2[h2].__e != null && x2[h2].__e == u2.__d && (u2.__d = _$3(i2, h2 + 1)), N(x2[h2], x2[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M$2(w2[h2], w2[++h2], w2[++h2]);
}
function m$2(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? m$2(i2, l2, u2) : A$2(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function x$3(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
    x$3(n3, l2);
  }) : l2.push(n2)), l2;
}
function A$2(n2, l2, u2, i2, t2, o2) {
  var r2, f2, e2;
  if (l2.__d !== void 0)
    r2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != o2 || t2.parentNode == null)
    n:
      if (o2 == null || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return r2 !== void 0 ? r2 : t2.nextSibling;
}
function C$1(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || H$2(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || H$2(n2, o2, l2[o2], u2[o2], i2);
}
function $$1(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || c$3.test(l2) ? u2 : u2 + "px";
}
function H$2(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$1(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$2 : I$2, o2) : n2.removeEventListener(l2, o2 ? T$2 : I$2, o2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I$2(n2) {
  this.l[n2.type + false](l$3.event ? l$3.event(n2) : n2);
}
function T$2(n2) {
  this.l[n2.type + true](l$3.event ? l$3.event(n2) : n2);
}
function j$3(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x2, A2, C2, $2, H2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l$3.__b) && a2(u2);
  try {
    n:
      if (typeof H2 == "function") {
        if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x2 = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x2) : (u2.__c = h2 = new d$3(g2, x2), h2.constructor = H2, h2.render = O$2), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), H2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = s$3({}, h2.__s)), s$3(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          H2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (H2.getDerivedStateFromProps == null && g2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(g2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(g2, h2.__s, x2) === false || u2.__v === i2.__v) {
            h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(g2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x2, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l$3.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, h2.getChildContext != null && (t2 = s$3(s$3({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = a2 != null && a2.type === p$3 && a2.key == null ? a2.props.children : a2, w$3(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$2(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (a2 = l$3.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$3.__e(n3, u2, i2);
  }
}
function z$2(n2, u2) {
  l$3.__c && l$3.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$3.__e(n3, u3.__v);
    }
  });
}
function L$2(l2, u2, i2, t2, o2, r2, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if (d2 === "svg" && (o2 = true), r2 != null) {
    for (; k2 < r2.length; k2++)
      if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, r2[k2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r2 = r2 && n$2.call(l2.childNodes), h2 = (y2 = i2.props || f$3).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (r2 != null)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$1(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$3(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && d2 !== "foreignObject", r2, e2, r2 ? r2[0] : i2.__k && _$3(i2, 0), c2), r2 != null)
      for (k2 = r2.length; k2--; )
        r2[k2] != null && a$3(r2[k2]);
    c2 || ("value" in p2 && (k2 = p2.value) !== void 0 && (k2 !== l2.value || d2 === "progress" && !k2 || d2 === "option" && k2 !== y2.value) && H$2(l2, "value", k2, y2.value, false), "checked" in p2 && (k2 = p2.checked) !== void 0 && k2 !== l2.checked && H$2(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
function M$2(n2, u2, i2) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$3.__e(n3, i2);
  }
}
function N(n2, u2, i2) {
  var t2, o2;
  if (l$3.unmount && l$3.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$2(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$3.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, typeof n2.type != "function");
  i2 || n2.__e == null || a$3(n2.__e), n2.__e = n2.__d = void 0;
}
function O$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function P$2(u2, i2, t2) {
  var o2, r2, e2;
  l$3.__ && l$3.__(u2, i2), r2 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i2.__k, e2 = [], j$3(i2, u2 = (!o2 && t2 || i2).__k = h$3(p$3, null, [u2]), r2 || f$3, f$3, i2.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n$2.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z$2(e2, u2);
}
function q$3(l2, u2, i2) {
  var t2, o2, r2, f2 = s$3({}, l2.props);
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), v$3(l2.type, f2, t2 || l2.key, o2 || l2.ref, null);
}
function B$1(n2, l2) {
  var u2 = { __c: l2 = "__cC" + r$3++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(b$2);
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$2 = e$1.slice, l$3 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && o2.getDerivedStateFromError != null && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), t2.componentDidCatch != null && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$3 = 0, d$3.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$3({}, this.state), typeof n2 == "function" && (n2 = n2(s$3({}, u2), this.props)), n2 && s$3(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), b$2(this));
}, d$3.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$2(this));
}, d$3.prototype.render = p$3, t$2 = [], g$4.__r = 0, r$3 = 0;
var t$1, u$2, r$2, o$2, i$2 = 0, c$2 = [], f$2 = [], e = l$3.__b, a$2 = l$3.__r, v$2 = l$3.diffed, l$2 = l$3.__c, m$1 = l$3.unmount;
function p$2(t2, r2) {
  l$3.__h && l$3.__h(u$2, t2, i$2 || r2), i$2 = 0;
  var o2 = u$2.__H || (u$2.__H = { __: [], __h: [] });
  return t2 >= o2.__.length && o2.__.push({ __V: f$2 }), o2.__[t2];
}
function y$1(n2) {
  return i$2 = 1, d$2(z$1, n2);
}
function d$2(n2, r2, o2) {
  var i2 = p$2(t$1++, 2);
  return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : z$1(void 0, r2), function(n3) {
    var t2 = i2.t(i2.__[0], n3);
    i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
  }], i2.__c = u$2), i2.__;
}
function _$2(r2, o2) {
  var i2 = p$2(t$1++, 3);
  !l$3.__s && w$2(i2.__H, o2) && (i2.__ = r2, i2.u = o2, u$2.__H.__h.push(i2));
}
function h$2(r2, o2) {
  var i2 = p$2(t$1++, 4);
  !l$3.__s && w$2(i2.__H, o2) && (i2.__ = r2, i2.u = o2, u$2.__h.push(i2));
}
function s$2(n2) {
  return i$2 = 5, F$2(function() {
    return { current: n2 };
  }, []);
}
function F$2(n2, u2) {
  var r2 = p$2(t$1++, 7);
  return w$2(r2.__H, u2) ? (r2.__V = n2(), r2.u = u2, r2.__h = n2, r2.__V) : r2.__;
}
function T$1(n2, t2) {
  return i$2 = 8, F$2(function() {
    return n2;
  }, t2);
}
function q$2(n2) {
  var r2 = u$2.context[n2.__c], o2 = p$2(t$1++, 9);
  return o2.c = n2, r2 ? (o2.__ == null && (o2.__ = true, r2.sub(u$2)), r2.props.value) : n2.__;
}
function b$1() {
  for (var t2; t2 = c$2.shift(); )
    if (t2.__P)
      try {
        t2.__H.__h.forEach(j$2), t2.__H.__h.forEach(k$1), t2.__H.__h = [];
      } catch (u2) {
        t2.__H.__h = [], l$3.__e(u2, t2.__v);
      }
}
l$3.__b = function(n2) {
  u$2 = null, e && e(n2);
}, l$3.__r = function(n2) {
  a$2 && a$2(n2), t$1 = 0;
  var o2 = (u$2 = n2.__c).__H;
  o2 && (r$2 === u$2 ? (o2.__h = [], u$2.__h = [], o2.__.forEach(function(n3) {
    n3.__V = f$2, n3.u = void 0;
  })) : (o2.__h.forEach(j$2), o2.__h.forEach(k$1), o2.__h = [])), r$2 = u$2;
}, l$3.diffed = function(t2) {
  v$2 && v$2(t2);
  var i2 = t2.__c;
  i2 && i2.__H && (i2.__H.__h.length && (c$2.push(i2) !== 1 && o$2 === l$3.requestAnimationFrame || ((o$2 = l$3.requestAnimationFrame) || function(n2) {
    var t3, u2 = function() {
      clearTimeout(r2), g$3 && cancelAnimationFrame(t3), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    g$3 && (t3 = requestAnimationFrame(u2));
  })(b$1)), i2.__H.__.forEach(function(n2) {
    n2.u && (n2.__H = n2.u), n2.__V !== f$2 && (n2.__ = n2.__V), n2.u = void 0, n2.__V = f$2;
  })), r$2 = u$2 = null;
}, l$3.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(j$2), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || k$1(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], l$3.__e(r2, t3.__v);
    }
  }), l$2 && l$2(t2, u2);
}, l$3.unmount = function(t2) {
  m$1 && m$1(t2);
  var u2, r2 = t2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      j$2(n2);
    } catch (n3) {
      u2 = n3;
    }
  }), u2 && l$3.__e(u2, r2.__v));
};
var g$3 = typeof requestAnimationFrame == "function";
function j$2(n2) {
  var t2 = u$2, r2 = n2.__c;
  typeof r2 == "function" && (n2.__c = void 0, r2()), u$2 = t2;
}
function k$1(n2) {
  var t2 = u$2;
  n2.__c = n2.__(), u$2 = t2;
}
function w$2(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
function z$1(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
function n$1(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r$1(n2) {
  return !!n2 && !!n2[Q$1];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z$1;
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!n2.constructor[L$1] || s$1(n2) || v$1(n2));
}
function i$1(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o$1(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && typeof e2 == "symbol" || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o$1(n2) {
  var r2 = n2[Q$1];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s$1(n2) ? 2 : v$1(n2) ? 3 : 0;
}
function u$1(n2, r2) {
  return o$1(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a$1(n2, r2) {
  return o$1(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f$1(n2, r2, t2) {
  var e2 = o$1(n2);
  e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c$1(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s$1(n2) {
  return X && n2 instanceof Map;
}
function v$1(n2) {
  return q$1 && n2 instanceof Set;
}
function p$1(n2) {
  return n2.o || n2.t;
}
function l$1(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q$1];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d$1(n2, e2) {
  return e2 === void 0 && (e2 = false), y(n2) || r$1(n2) || !t(n2) ? n2 : (o$1(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$1), Object.freeze(n2), e2 && i$1(n2, function(n3, r2) {
    return d$1(r2, true);
  }, true), n2);
}
function h$1() {
  n$1(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n$1(18, r2), t2;
}
function _$1() {
  return U;
}
function j$1(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O$1(n2) {
  g$2(n2), n2.p.forEach(S$1), n2.p = null;
}
function g$2(n2) {
  n2 === U && (U = n2.l);
}
function w$1(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S$1(n2) {
  var r2 = n2[Q$1];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P$1(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = r2 !== void 0 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q$1].P && (O$1(e2), n$1(4)), t(r2) && (r2 = M$1(e2, r2), e2.l || x$2(e2, r2)), e2.u && b("Patches").M(i2[Q$1].t, r2, e2.u, e2.s)) : r2 = M$1(e2, i2, []), O$1(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$1 ? r2 : void 0;
}
function M$1(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q$1];
  if (!e2)
    return i$1(r2, function(i2, o3) {
      return A$1(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x$2(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l$1(e2.k) : e2.o;
    i$1(e2.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A$1(n2, e2, o2, r3, i2, t2);
    }), x$2(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$1(e2, i2, o2, a2, c2, s2) {
  if (r$1(c2)) {
    var v2 = M$1(e2, c2, s2 && i2 && i2.i !== 3 && !u$1(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f$1(o2, a2, v2), !r$1(v2))
      return;
    e2.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M$1(e2, c2), i2 && i2.A.l || x$2(e2, c2);
  }
}
function x$2(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d$1(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q$1];
  return (t2 ? p$1(t2) : n2)[r2];
}
function I$1(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E$1(n2) {
  n2.o || (n2.o = l$1(n2.t));
}
function R$1(n2, r2, t2) {
  var e2 = s$1(r2) ? b("MapSet").N(r2, t2) : v$1(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$1(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _$1()).p.push(e2), e2;
}
function D$1(e2) {
  return r$1(e2) || n$1(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q$1], c2 = o$1(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F$1(r2, c2), u2.I = false;
    } else
      e3 = F$1(r2, c2);
    return i$1(e3, function(r3, t2) {
      u2 && a$1(u2.t, r3) === t2 || f$1(e3, r3, n2(t2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F$1(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$1(n2);
}
var G, U, W$1 = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", X = typeof Map != "undefined", q$1 = typeof Set != "undefined", B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", H$1 = W$1 ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L$1 = W$1 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$1 = W$1 ? Symbol.for("immer-state") : "__$immer_state", Z$1 = "" + Object.prototype.constructor, nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$1)
    return n2;
  var e2 = p$1(n2);
  if (!u$1(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I$1(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E$1(n2), n2.o[r2] = R$1(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$1(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$1(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$1(p$1(n2), r2);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p$1(n2), r2), o2 = i2 == null ? void 0 : i2[Q$1];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c$1(t2, i2) && (t2 !== void 0 || u$1(n2.t, r2)))
      return true;
    E$1(n2), k(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E$1(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$1(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$1(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$1(12);
} }, on = {};
i$1(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un$1 = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n$1(6), o2 !== void 0 && typeof o2 != "function" && n$1(7), t(r3)) {
        var c2 = w$1(e3), s2 = R$1(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O$1(c2) : g$2(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j$1(c2, o2), P$1(n2, c2);
        }, function(n2) {
          throw O$1(c2), n2;
        }) : (j$1(c2, o2), P$1(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H$1 && (f2 = void 0), e3.F && d$1(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n$1(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if (typeof n2 == "function")
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n$1(8), r$1(e3) && (e3 = D$1(e3));
    var i3 = w$1(this), o2 = R$1(this, e3, void 0);
    return o2[Q$1].C = true, g$2(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$1];
    var i3 = e3.A;
    return j$1(i3, t2), P$1(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n$1(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r$1(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un$1(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
var produce = fn;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function isUndefined$3(obj) {
  return obj === void 0;
}
var isUndefined_1 = isUndefined$3;
var isUndefined$2 = isUndefined_1;
function range(start, stop, step) {
  var arr = [];
  var flag;
  if (isUndefined$2(stop)) {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;
  flag = step < 0 ? -1 : 1;
  stop *= flag;
  for (; start * flag < stop; start += step) {
    arr.push(start);
  }
  return arr;
}
var range_1 = range;
const DEFAULT_DAY_NAME_MARGIN_LEFT = "0";
const MONTH_EVENT_HEIGHT = 24;
const MONTH_EVENT_MARGIN_TOP = 2;
const MONTH_CELL_PADDING_TOP = 3;
const MONTH_CELL_BAR_HEIGHT = 27;
const MONTH_MORE_VIEW_PADDING = 5;
const MONTH_MORE_VIEW_MIN_WIDTH = 280;
const MONTH_MORE_VIEW_HEADER_HEIGHT = 44;
const MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM = 12;
const MONTH_MORE_VIEW_HEADER_PADDING_TOP = 12;
const MONTH_MORE_VIEW_HEADER_PADDING = "12px 17px 0";
const WEEK_DAY_NAME_HEIGHT = 42;
const WEEK_DAY_NAME_BORDER = 1;
const WEEK_EVENT_MARGIN_TOP = 2;
const DEFAULT_PANEL_HEIGHT = 72;
const DEFAULT_EVENT_COLORS = {
  color: "#000",
  backgroundColor: "#a1b56c",
  dragBackgroundColor: "#a1b56c",
  borderColor: "#000"
};
const TIME_EVENT_CONTAINER_MARGIN_LEFT = 2;
const COLLAPSED_DUPLICATE_EVENT_WIDTH_PX = 9;
function isBoolean(obj) {
  return typeof obj === "boolean" || obj instanceof Boolean;
}
var isBoolean_1 = isBoolean;
function isNumber(obj) {
  return typeof obj === "number" || obj instanceof Number;
}
var isNumber_1 = isNumber;
function isObject$1(obj) {
  return obj === Object(obj);
}
var isObject_1 = isObject$1;
function isString$1(obj) {
  return typeof obj === "string" || obj instanceof String;
}
var isString_1 = isString$1;
function isNil(value) {
  return isUndefined_1(value) || value === null;
}
function isPresent(value) {
  return !isNil(value);
}
function isFunction$2(value) {
  return typeof value === "function";
}
const CSS_PREFIX = "toastui-calendar-";
function cls(...args) {
  const result = [];
  args.forEach((arg) => {
    if (!arg) {
      return;
    }
    if (isString_1(arg)) {
      result.push(arg);
    } else {
      Object.keys(arg).forEach((className2) => {
        if (arg[className2]) {
          result.push(className2);
        }
      });
    }
  });
  return result.map((str) => `${CSS_PREFIX}${str}`).join(" ");
}
function toPercent(value) {
  return `${value}%`;
}
function toPx(value) {
  return `${value}px`;
}
function extractPercentPx(value) {
  const percentRegexp = /(\d+)%/;
  const percentResult = value.match(percentRegexp);
  const pxRegexp = /(-?)\s?(\d+)px/;
  const pxResult = value.match(pxRegexp);
  return {
    percent: percentResult ? parseInt(percentResult[1], 10) : 0,
    px: pxResult ? parseInt(`${pxResult[1]}${pxResult[2]}`, 10) : 0
  };
}
function getEventColors(uiModel, calendarColor) {
  const eventColors = uiModel.model.getColors();
  return Object.keys(DEFAULT_EVENT_COLORS).reduce((colors, _key) => {
    var _a, _b;
    const key = _key;
    colors[key] = (_b = (_a = eventColors[key]) != null ? _a : calendarColor[key]) != null ? _b : DEFAULT_EVENT_COLORS[key];
    return colors;
  }, {});
}
const rISO8601 = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
function throwNotSupported() {
  throw new Error("This operation is not supported.");
}
function getDateTime(dateString) {
  const match = rISO8601.exec(dateString);
  if (match) {
    const [, y2, M2, d2, h2, m2, s2, , ms, zoneInfo] = match;
    return {
      y: Number(y2),
      M: Number(M2) - 1,
      d: Number(d2),
      h: Number(h2),
      m: Number(m2),
      s: Number(s2),
      ms: Number(ms) || 0,
      zoneInfo
    };
  }
  return null;
}
function createFromDateString(dateString) {
  const info = getDateTime(dateString);
  if (info && !info.zoneInfo) {
    const { y: y2, M: M2, d: d2, h: h2, m: m2, s: s2, ms } = info;
    return new Date(y2, M2, d2, h2, m2, s2, ms);
  }
  return null;
}
class LocalDate {
  constructor(...args) {
    const [firstArg] = args;
    if (firstArg instanceof Date) {
      this.d = new Date(firstArg.getTime());
    } else if (isString_1(firstArg) && args.length === 1) {
      this.d = createFromDateString(firstArg);
    }
    if (!this.d) {
      this.d = new Date(...args);
    }
  }
  setTimezoneOffset() {
    throwNotSupported();
  }
  setTimezoneName() {
    throwNotSupported();
  }
  clone() {
    return new LocalDate(this.d);
  }
  toDate() {
    return new Date(this.d.getTime());
  }
  toString() {
    return this.d.toString();
  }
}
const getterMethods = [
  "getTime",
  "getTimezoneOffset",
  "getFullYear",
  "getMonth",
  "getDate",
  "getHours",
  "getMinutes",
  "getSeconds",
  "getMilliseconds",
  "getDay"
];
const setterMethods = [
  "setTime",
  "setFullYear",
  "setMonth",
  "setDate",
  "setHours",
  "setMinutes",
  "setSeconds",
  "setMilliseconds"
];
getterMethods.forEach((methodName) => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});
setterMethods.forEach((methodName) => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});
class UTCDate extends LocalDate {
  clone() {
    return new UTCDate(this.d);
  }
  getTimezoneOffset() {
    return 0;
  }
}
const getterProperties = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds",
  "Day"
];
const setterProperties = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds"
];
getterProperties.forEach((prop) => {
  const methodName = `get${prop}`;
  UTCDate.prototype[methodName] = function(...args) {
    return this.d[`getUTC${prop}`](...args);
  };
});
setterProperties.forEach((prop) => {
  const methodName = `set${prop}`;
  UTCDate.prototype[methodName] = function(...args) {
    return this.d[`setUTC${prop}`](...args);
  };
});
const INVALID_DATETIME_FORMAT = "Invalid DateTime Format";
const INVALID_TIMEZONE_NAME = "Invalid IANA Timezone Name";
const INVALID_VIEW_TYPE = "Invalid View Type";
const MESSAGE_PREFIX = "@toast-ui/calendar: ";
class InvalidTimezoneNameError extends Error {
  constructor(timezoneName) {
    super(`${MESSAGE_PREFIX}${INVALID_TIMEZONE_NAME} - ${timezoneName}`);
    this.name = "InvalidTimezoneNameError";
  }
}
class InvalidDateTimeFormatError extends Error {
  constructor(dateTimeString) {
    super(`${MESSAGE_PREFIX}${INVALID_DATETIME_FORMAT} - ${dateTimeString}`);
    this.name = "InvalidDateTimeFormatError";
  }
}
class InvalidViewTypeError extends Error {
  constructor(viewType) {
    super(`${MESSAGE_PREFIX}${INVALID_VIEW_TYPE} - ${viewType}`);
    this.name = "InvalidViewTypeError";
  }
}
const logger = {
  error: (firstArg, ...restArgs) => {
    console.error(`${MESSAGE_PREFIX}${firstArg}`, ...restArgs);
  },
  warn: (firstArg, ...restArgs) => {
    console.warn(`${MESSAGE_PREFIX}${firstArg}`, ...restArgs);
  }
};
let Constructor = LocalDate;
function date(...args) {
  return new Constructor(...args);
}
function getLocalTimezoneOffset() {
  return -new Date().getTimezoneOffset();
}
function calculateTimezoneOffset(timezoneName, targetDate = new TZDate()) {
  if (!isIntlDateTimeFormatSupported()) {
    logger.warn("Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.\nYou can use a polyfill to fix this issue.");
    return -targetDate.toDate().getTimezoneOffset();
  }
  validateIANATimezoneName(timezoneName);
  const token = tokenizeTZDate(targetDate, timezoneName);
  const utcDate = tokenToUtcDate(token);
  return Math.round((utcDate.getTime() - targetDate.getTime()) / 60 / 1e3);
}
function isUsingDST(targetDate, timezoneName) {
  if (timezoneName) {
    validateIANATimezoneName(timezoneName);
  }
  const jan = new TZDate(targetDate.getFullYear(), 0, 1);
  const jul = new TZDate(targetDate.getFullYear(), 6, 1);
  if (timezoneName) {
    return Math.max(-calculateTimezoneOffset(timezoneName, jan), -calculateTimezoneOffset(timezoneName, jul)) !== -calculateTimezoneOffset(timezoneName, targetDate);
  }
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) !== targetDate.toDate().getTimezoneOffset();
}
const dtfCache = {};
const timezoneNameValidationCache = {};
function isIntlDateTimeFormatSupported() {
  var _a, _b;
  return isFunction$2((_b = (_a = Intl == null ? void 0 : Intl.DateTimeFormat) == null ? void 0 : _a.prototype) == null ? void 0 : _b.formatToParts);
}
function validateIANATimezoneName(timezoneName) {
  if (timezoneNameValidationCache[timezoneName]) {
    return true;
  }
  try {
    Intl.DateTimeFormat("en-US", { timeZone: timezoneName });
    timezoneNameValidationCache[timezoneName] = true;
    return true;
  } catch (e2) {
    throw new InvalidTimezoneNameError(timezoneName);
  }
}
function getDateTimeFormat(timezoneName) {
  if (dtfCache[timezoneName]) {
    return dtfCache[timezoneName];
  }
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: timezoneName,
    hourCycle: "h23",
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  dtfCache[timezoneName] = dtf;
  return dtf;
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function tokenizeTZDate(tzDate, timezoneName) {
  const dtf = getDateTimeFormat(timezoneName);
  const formatted = dtf.formatToParts(tzDate.toDate());
  return formatted.reduce((result, cur) => {
    const pos = typeToPos[cur.type];
    if (isPresent(pos)) {
      result[pos] = parseInt(cur.value, 10);
    }
    return result;
  }, []);
}
function tokenToUtcDate(token) {
  const [year, monthPlusOne, day, hour, minute, second] = token;
  const month = monthPlusOne - 1;
  return new Date(Date.UTC(year, month, day, hour % 24, minute, second));
}
function getTZOffsetMSDifference(offset) {
  return (getLocalTimezoneOffset() - offset) * MS_PER_MINUTES;
}
class TZDate {
  constructor(...args) {
    this.tzOffset = null;
    if (args[0] instanceof TZDate) {
      this.d = date(args[0].getTime());
    } else {
      this.d = date(...args);
    }
  }
  toString() {
    return this.d.toString();
  }
  addFullYear(y2) {
    this.setFullYear(this.getFullYear() + y2);
    return this;
  }
  addMonth(m2) {
    this.setMonth(this.getMonth() + m2);
    return this;
  }
  addDate(d2) {
    this.setDate(this.getDate() + d2);
    return this;
  }
  addHours(h2) {
    this.setHours(this.getHours() + h2);
    return this;
  }
  addMinutes(M2) {
    this.setMinutes(this.getMinutes() + M2);
    return this;
  }
  addSeconds(s2) {
    this.setSeconds(this.getSeconds() + s2);
    return this;
  }
  addMilliseconds(ms) {
    this.setMilliseconds(this.getMilliseconds() + ms);
    return this;
  }
  setWithRaw(y2, m2, d2, h2, M2, s2, ms) {
    this.setFullYear(y2, m2, d2);
    this.setHours(h2, M2, s2, ms);
    return this;
  }
  toDate() {
    return this.d.toDate();
  }
  valueOf() {
    return this.getTime();
  }
  getTimezoneOffset() {
    var _a;
    return (_a = this.tzOffset) != null ? _a : this.d.getTimezoneOffset();
  }
  getTime() {
    return this.d.getTime();
  }
  getFullYear() {
    return this.d.getFullYear();
  }
  getMonth() {
    return this.d.getMonth();
  }
  getDate() {
    return this.d.getDate();
  }
  getHours() {
    return this.d.getHours();
  }
  getMinutes() {
    return this.d.getMinutes();
  }
  getSeconds() {
    return this.d.getSeconds();
  }
  getMilliseconds() {
    return this.d.getMilliseconds();
  }
  getDay() {
    return this.d.getDay();
  }
  setTime(t2) {
    return this.d.setTime(t2);
  }
  setFullYear(y2, m2 = this.getMonth(), d2 = this.getDate()) {
    return this.d.setFullYear(y2, m2, d2);
  }
  setMonth(m2, d2 = this.getDate()) {
    return this.d.setMonth(m2, d2);
  }
  setDate(d2) {
    return this.d.setDate(d2);
  }
  setHours(h2, M2 = this.getMinutes(), s2 = this.getSeconds(), ms = this.getMilliseconds()) {
    return this.d.setHours(h2, M2, s2, ms);
  }
  setMinutes(M2, s2 = this.getSeconds(), ms = this.getMilliseconds()) {
    return this.d.setMinutes(M2, s2, ms);
  }
  setSeconds(s2, ms = this.getMilliseconds()) {
    return this.d.setSeconds(s2, ms);
  }
  setMilliseconds(ms) {
    return this.d.setMilliseconds(ms);
  }
  tz(tzValue) {
    if (tzValue === "Local") {
      return new TZDate(this.getTime());
    }
    const tzOffset = isString_1(tzValue) ? calculateTimezoneOffset(tzValue, this) : tzValue;
    const newTZDate = new TZDate(this.getTime() - getTZOffsetMSDifference(tzOffset));
    newTZDate.tzOffset = tzOffset;
    return newTZDate;
  }
  local(tzValue) {
    if (isPresent(tzValue)) {
      const tzOffset = isString_1(tzValue) ? calculateTimezoneOffset(tzValue, this) : tzValue;
      return new TZDate(this.getTime() + getTZOffsetMSDifference(tzOffset));
    }
    return new TZDate(this.getTime() + (isPresent(this.tzOffset) ? getTZOffsetMSDifference(this.tzOffset) : 0));
  }
}
function pick(obj, ...propNames) {
  return propNames.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function clone$1(source) {
  return Object.assign(Object.create(Object.getPrototypeOf(source)), source);
}
function mergeObject(target, source = {}) {
  if (!isObject_1(source)) {
    return target;
  }
  Object.keys(source).forEach((k2) => {
    const targetKey = k2;
    const sourceKey = k2;
    if (!Array.isArray(source[sourceKey]) && isObject_1(target[targetKey]) && isObject_1(source[sourceKey]) && !(source[sourceKey] instanceof TZDate)) {
      target[targetKey] = mergeObject(target[targetKey], source[sourceKey]);
    } else {
      target[targetKey] = source[sourceKey];
    }
  });
  return target;
}
const eventUIPropsKey = [
  "top",
  "left",
  "width",
  "height",
  "exceedLeft",
  "exceedRight",
  "croppedStart",
  "croppedEnd",
  "goingDurationHeight",
  "modelDurationHeight",
  "comingDurationHeight",
  "duplicateEvents",
  "duplicateEventIndex",
  "duplicateStarts",
  "duplicateEnds",
  "duplicateLeft",
  "duplicateWidth",
  "collapse",
  "isMain"
];
class EventUIModel {
  constructor(event) {
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.exceedLeft = false;
    this.exceedRight = false;
    this.croppedStart = false;
    this.croppedEnd = false;
    this.goingDurationHeight = 0;
    this.modelDurationHeight = 100;
    this.comingDurationHeight = 0;
    this.duplicateEvents = [];
    this.duplicateEventIndex = -1;
    this.duplicateLeft = "";
    this.duplicateWidth = "";
    this.collapse = false;
    this.isMain = false;
    this.model = event;
  }
  getUIProps() {
    return pick(this, ...eventUIPropsKey);
  }
  setUIProps(props) {
    Object.assign(this, props);
  }
  getStarts() {
    if (this.renderStarts) {
      return this.renderStarts;
    }
    return this.model.getStarts();
  }
  getEnds() {
    if (this.renderEnds) {
      return this.renderEnds;
    }
    return this.model.getEnds();
  }
  cid() {
    return this.model.cid();
  }
  valueOf() {
    return this.model;
  }
  duration() {
    return this.model.duration();
  }
  collidesWith(uiModel, usingTravelTime = true) {
    const infos = [];
    [this, uiModel].forEach((event) => {
      const isDuplicateEvent = event instanceof EventUIModel && event.duplicateEvents.length > 0;
      if (isDuplicateEvent) {
        infos.push({
          start: event.duplicateStarts,
          end: event.duplicateEnds,
          goingDuration: 0,
          comingDuration: 0
        });
      } else {
        infos.push({
          start: event.getStarts(),
          end: event.getEnds(),
          goingDuration: event.valueOf().goingDuration,
          comingDuration: event.valueOf().comingDuration
        });
      }
    });
    const [thisInfo, targetInfo] = infos;
    return collidesWith({
      start: thisInfo.start.getTime(),
      end: thisInfo.end.getTime(),
      targetStart: targetInfo.start.getTime(),
      targetEnd: targetInfo.end.getTime(),
      goingDuration: thisInfo.goingDuration,
      comingDuration: thisInfo.comingDuration,
      targetGoingDuration: targetInfo.goingDuration,
      targetComingDuration: targetInfo.comingDuration,
      usingTravelTime
    });
  }
  clone() {
    const eventUIModelProps = this.getUIProps();
    const clonedEventUIModel = new EventUIModel(this.model);
    clonedEventUIModel.setUIProps(eventUIModelProps);
    if (this.renderStarts) {
      clonedEventUIModel.renderStarts = new TZDate(this.renderStarts);
    }
    if (this.renderEnds) {
      clonedEventUIModel.renderEnds = new TZDate(this.renderEnds);
    }
    return clonedEventUIModel;
  }
}
function compareBooleansASC(a2, b2) {
  if (a2 !== b2) {
    return a2 ? -1 : 1;
  }
  return 0;
}
function compareNumbersASC(a2, b2) {
  return Number(a2) - Number(b2);
}
function compareStringsASC(_a, _b) {
  const a2 = String(_a);
  const b2 = String(_b);
  if (a2 === b2) {
    return 0;
  }
  return a2 > b2 ? 1 : -1;
}
function compareEventsASC(a2, b2) {
  const modelA = a2 instanceof EventUIModel ? a2.model : a2;
  const modelB = b2 instanceof EventUIModel ? b2.model : b2;
  const alldayCompare = compareBooleansASC(modelA.isAllday || modelA.hasMultiDates, modelB.isAllday || modelB.hasMultiDates);
  if (alldayCompare) {
    return alldayCompare;
  }
  const startsCompare = compare(a2.getStarts(), b2.getStarts());
  if (startsCompare) {
    return startsCompare;
  }
  const durationA = a2.duration();
  const durationB = b2.duration();
  if (durationA < durationB) {
    return 1;
  }
  if (durationA > durationB) {
    return -1;
  }
  return modelA.cid() - modelB.cid();
}
function bsearch(arr, search, fn2, compareFn) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentIndex;
  let value;
  let comp;
  compareFn = compareFn || compareStringsASC;
  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    value = fn2 ? fn2(arr[currentIndex]) : arr[currentIndex];
    comp = compareFn(value, search);
    if (comp < 0) {
      minIndex = currentIndex + 1;
    } else if (comp > 0) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return ~maxIndex;
}
var array = {
  bsearch,
  compare: {
    event: {
      asc: compareEventsASC
    },
    num: {
      asc: compareNumbersASC
    }
  }
};
function first(array2) {
  return array2[0];
}
function last(array2) {
  return array2[array2.length - 1];
}
function findLastIndex(array2, predicate) {
  for (let i2 = array2.length - 1; i2 >= 0; i2 -= 1) {
    if (predicate(array2[i2])) {
      return i2;
    }
  }
  return -1;
}
function fill(length, value) {
  if (length > 0) {
    return Array.from({ length }, () => {
      if (Array.isArray(value)) {
        return value.slice();
      }
      return value;
    });
  }
  return [];
}
var Day$2 = /* @__PURE__ */ ((Day2) => {
  Day2[Day2["SUN"] = 0] = "SUN";
  Day2[Day2["MON"] = 1] = "MON";
  Day2[Day2["TUE"] = 2] = "TUE";
  Day2[Day2["WED"] = 3] = "WED";
  Day2[Day2["THU"] = 4] = "THU";
  Day2[Day2["FRI"] = 5] = "FRI";
  Day2[Day2["SAT"] = 6] = "SAT";
  return Day2;
})(Day$2 || {});
const WEEK_DAYS = 7;
const dateFormatRx = /^(\d{4}[-|/]*\d{2}[-|/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/;
const memo = {
  millisecondsTo: {},
  millisecondsFrom: {}
};
const convByTimeUnit = [24, 60, 60, 1e3];
function leadingZero(number, length) {
  let zero = "";
  let i2 = 0;
  if (String(number).length > length) {
    return String(number);
  }
  for (; i2 < length - 1; i2 += 1) {
    zero += "0";
  }
  return (zero + number).slice(length * -1);
}
function getHourForMeridiem(date2) {
  let hour = date2.getHours();
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour % 12;
  }
  return hour;
}
const tokenFunc = {
  YYYYMMDD(date2) {
    return [
      date2.getFullYear(),
      leadingZero(date2.getMonth() + 1, 2),
      leadingZero(date2.getDate(), 2)
    ].join("");
  },
  YYYY(date2) {
    return String(date2.getFullYear());
  },
  MM(date2) {
    return leadingZero(date2.getMonth() + 1, 2);
  },
  DD(date2) {
    return leadingZero(date2.getDate(), 2);
  },
  "HH:mm": function(date2) {
    const hour = date2.getHours();
    const minutes = date2.getMinutes();
    return `${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  "hh:mm": function(date2) {
    const hour = getHourForMeridiem(date2);
    const minutes = date2.getMinutes();
    return `${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  hh(date2) {
    const hour = getHourForMeridiem(date2);
    return String(hour);
  },
  tt(date2) {
    const hour = date2.getHours();
    return hour < 12 ? "am" : "pm";
  }
};
const MS_PER_DAY = 864e5;
const MS_PER_MINUTES = 6e4;
const MS_EVENT_MIN_DURATION = 20 * MS_PER_MINUTES;
const MS_PER_THIRTY_MINUTES = 30 * 60 * 1e3;
function toFormat(date2, strFormat) {
  let result = strFormat;
  Object.entries(tokenFunc).forEach(([token, converter]) => {
    result = result.replace(token, converter(date2));
  });
  return result;
}
function convMilliseconds(type, value, iteratee) {
  const index = {
    date: 0,
    hour: 1,
    minute: 2,
    second: 3
  };
  if (!(type in index) || isNaN(value)) {
    return 0;
  }
  return [value].concat(convByTimeUnit.slice(index[type])).reduce(iteratee);
}
function millisecondsFrom(type, value) {
  const cache = memo.millisecondsFrom;
  const key = type + value;
  if (cache[key]) {
    return cache[key];
  }
  const result = convMilliseconds(type, value, (m2, v2) => m2 * v2);
  if (!result) {
    return 0;
  }
  cache[key] = result;
  return cache[key];
}
function toStartOfDay(date2) {
  const d2 = date2 ? new TZDate(date2) : new TZDate();
  d2.setHours(0, 0, 0, 0);
  return d2;
}
function makeDateRange(startDate, endDate, step) {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const date2 = new TZDate(startDate);
  const result = [];
  let cursor = startTime;
  while (cursor <= endTime && endTime >= date2.getTime()) {
    result.push(new TZDate(date2));
    cursor = cursor + step;
    date2.addMilliseconds(step);
  }
  return result;
}
function clone(date2) {
  return new TZDate(date2);
}
function compare(d1, d2) {
  const _d1 = d1.getTime();
  const _d2 = d2.getTime();
  if (_d1 < _d2) {
    return -1;
  }
  if (_d1 > _d2) {
    return 1;
  }
  return 0;
}
function isSameYear(d1, d2) {
  return d1.getFullYear() === d2.getFullYear();
}
function isSameMonth(d1, d2) {
  return isSameYear(d1, d2) && d1.getMonth() === d2.getMonth();
}
function isSameDate(d1, d2) {
  return isSameMonth(d1, d2) && d1.getDate() === d2.getDate();
}
function max(d1, d2) {
  return compare(d1, d2) === 1 ? d1 : d2;
}
function min(d1, d2) {
  return compare(d1, d2) === -1 ? d1 : d2;
}
function parse(str, fixMonth = -1) {
  const matches = str.match(dateFormatRx);
  let separator;
  let ymd;
  let hms;
  if (!matches) {
    throw new InvalidDateTimeFormatError(str);
  }
  if (str.length > 8) {
    separator = ~str.indexOf("/") ? "/" : "-";
    const result = matches.splice(1);
    ymd = result[0].split(separator);
    hms = result[1] ? result[1].split(":") : [0, 0, 0];
  } else {
    const [result] = matches;
    ymd = [result.substr(0, 4), result.substr(4, 2), result.substr(6, 2)];
    hms = [0, 0, 0];
  }
  return new TZDate().setWithRaw(Number(ymd[0]), Number(ymd[1]) + fixMonth, Number(ymd[2]), Number(hms[0]), Number(hms[1]), Number(hms[2]), 0);
}
function toEndOfDay(date2) {
  const d2 = date2 ? new TZDate(date2) : new TZDate();
  d2.setHours(23, 59, 59, 999);
  return d2;
}
function isWeekend(day) {
  return day === 0 || day === 6;
}
function isSunday(day) {
  return day === 0;
}
function isSaturday(day) {
  return day === 6;
}
function toStartOfMonth(date2) {
  const startDate = new TZDate(date2);
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}
function toEndOfMonth(date2) {
  const endDate = toStartOfMonth(date2);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(endDate.getDate() - 1);
  endDate.setHours(23, 59, 59, 999);
  return endDate;
}
function getRowStyleInfo(days, narrowWeekend, startDayOfWeek, workweek) {
  const limitDaysToApplyNarrowWeekend = 5;
  const uniformWidth = 100 / days;
  const wideWidth = days > limitDaysToApplyNarrowWeekend ? 100 / (days - 1) : uniformWidth;
  let accumulatedWidth = 0;
  const dates = range_1(startDayOfWeek, WEEK_DAYS).concat(range_1(days)).slice(0, WEEK_DAYS);
  narrowWeekend = workweek ? false : narrowWeekend;
  const rowStyleInfo = dates.map((day) => {
    let width = narrowWeekend ? wideWidth : uniformWidth;
    if (days > limitDaysToApplyNarrowWeekend && narrowWeekend && isWeekend(day)) {
      width = wideWidth / 2;
    }
    const model = {
      width,
      left: accumulatedWidth
    };
    accumulatedWidth += width;
    return model;
  });
  const { length } = rowStyleInfo;
  const cellWidthMap = fill(length, fill(length, 0));
  rowStyleInfo.forEach(({ width }, index) => {
    for (let i2 = 0; i2 <= index; i2 += 1) {
      for (let j2 = index; j2 < length; j2 += 1) {
        cellWidthMap[i2][j2] += width;
      }
    }
  });
  cellWidthMap[0][length - 1] = 100;
  return {
    rowStyleInfo,
    cellWidthMap: cellWidthMap.map((widthList) => widthList.map(toPercent))
  };
}
function addMilliseconds(d2, step) {
  const date2 = clone(d2);
  date2.setMilliseconds(d2.getMilliseconds() + step);
  return date2;
}
function addMinutes(d2, step) {
  const date2 = clone(d2);
  date2.setMinutes(d2.getMinutes() + step);
  return date2;
}
function setTimeStrToDate(d2, timeStr) {
  const date2 = clone(d2);
  date2.setHours(...timeStr.split(":").map(Number));
  return date2;
}
function addDate(d2, step) {
  const date2 = clone(d2);
  date2.setDate(d2.getDate() + step);
  return date2;
}
function subtractDate(d2, steps) {
  const date2 = clone(d2);
  date2.setDate(d2.getDate() - steps);
  return date2;
}
function addMonths(d2, step = 1) {
  const date2 = clone(d2);
  if (step !== 0) {
    const dayOfMonth = date2.getDate();
    const endOfDesiredMonth = new TZDate(date2.getTime());
    endOfDesiredMonth.setMonth(date2.getMonth() + step + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
      return endOfDesiredMonth;
    }
    date2.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
  }
  return date2;
}
function getDateDifference(d1, d2) {
  const _d1 = new TZDate(d1.getFullYear(), d1.getMonth(), d1.getDate()).getTime();
  const _d2 = new TZDate(d2.getFullYear(), d2.getMonth(), d2.getDate()).getTime();
  return Math.round((_d1 - _d2) / MS_PER_DAY);
}
function hasCollision(start, end, targetStart, targetEnd) {
  return targetStart > start && targetStart < end || targetEnd > start && targetEnd < end || targetStart <= start && targetEnd >= end;
}
function collidesWith({
  start,
  end,
  targetStart,
  targetEnd,
  goingDuration,
  comingDuration,
  targetGoingDuration,
  targetComingDuration,
  usingTravelTime
}) {
  if (Math.abs(end - start) < MS_EVENT_MIN_DURATION) {
    end += MS_EVENT_MIN_DURATION;
  }
  if (Math.abs(end - start) < MS_EVENT_MIN_DURATION) {
    end += MS_EVENT_MIN_DURATION;
  }
  if (usingTravelTime) {
    start -= millisecondsFrom("minute", goingDuration);
    end += millisecondsFrom("minute", comingDuration);
    targetStart -= millisecondsFrom("minute", targetGoingDuration);
    targetEnd += millisecondsFrom("minute", targetComingDuration);
  }
  return hasCollision(start, end, targetStart, targetEnd);
}
function isSameEvent(event, eventId, calendarId) {
  return event.id === eventId && event.calendarId === calendarId;
}
function idGenerator() {
  let id = 0;
  return {
    next() {
      id += 1;
      return id;
    }
  };
}
const getId = function() {
  const generator = idGenerator();
  return () => generator.next();
}();
function stamp(obj) {
  if (!obj.__fe_id) {
    obj.__fe_id = getId();
  }
  return obj.__fe_id;
}
class EventModel {
  constructor(event = {}) {
    this.id = "";
    this.calendarId = "";
    this.title = "";
    this.body = "";
    this.isAllday = false;
    this.start = new TZDate();
    this.end = new TZDate();
    this.goingDuration = 0;
    this.comingDuration = 0;
    this.location = "";
    this.attendees = [];
    this.category = "time";
    this.dueDateClass = "";
    this.recurrenceRule = "";
    this.state = "Busy";
    this.isVisible = true;
    this.isPending = false;
    this.isFocused = false;
    this.isReadOnly = false;
    this.isPrivate = false;
    this.customStyle = {};
    this.raw = null;
    this.hasMultiDates = false;
    stamp(this);
    this.init(event);
  }
  init({
    id = "",
    calendarId = "",
    title = "",
    body = "",
    isAllday: isAllday2 = false,
    start = new TZDate(),
    end = new TZDate(),
    goingDuration = 0,
    comingDuration = 0,
    location: location2 = "",
    attendees = [],
    category = "time",
    dueDateClass = "",
    recurrenceRule = "",
    state = "Busy",
    isVisible = true,
    isPending = false,
    isFocused = false,
    isReadOnly = false,
    isPrivate = false,
    color,
    backgroundColor,
    dragBackgroundColor,
    borderColor,
    customStyle = {},
    raw = null
  } = {}) {
    this.id = id;
    this.calendarId = calendarId;
    this.title = title;
    this.body = body;
    this.isAllday = category === "allday" ? true : isAllday2;
    this.goingDuration = goingDuration;
    this.comingDuration = comingDuration;
    this.location = location2;
    this.attendees = attendees;
    this.category = category;
    this.dueDateClass = dueDateClass;
    this.recurrenceRule = recurrenceRule;
    this.state = state;
    this.isVisible = isVisible;
    this.isPending = isPending;
    this.isFocused = isFocused;
    this.isReadOnly = isReadOnly;
    this.isPrivate = isPrivate;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.dragBackgroundColor = dragBackgroundColor;
    this.borderColor = borderColor;
    this.customStyle = customStyle;
    this.raw = raw;
    if (this.isAllday) {
      this.setAlldayPeriod(start, end);
    } else {
      this.setTimePeriod(start, end);
    }
    if (category === "milestone" || category === "task") {
      this.start = new TZDate(this.end);
    }
  }
  setAlldayPeriod(start, end) {
    let startedAt;
    let endedAt;
    if (isString_1(start)) {
      startedAt = parse(start.substring(0, 10));
    } else {
      startedAt = new TZDate(start || Date.now());
    }
    if (isString_1(end)) {
      endedAt = parse(end.substring(0, 10));
    } else {
      endedAt = new TZDate(end || this.start);
    }
    this.start = startedAt;
    this.start.setHours(0, 0, 0);
    this.end = endedAt || new TZDate(this.start);
    this.end.setHours(23, 59, 59);
  }
  setTimePeriod(start, end) {
    this.start = new TZDate(start || Date.now());
    this.end = new TZDate(end || this.start);
    if (!end) {
      this.end.setMinutes(this.end.getMinutes() + 30);
    }
    this.hasMultiDates = this.end.getTime() - this.start.getTime() > MS_PER_DAY;
  }
  getStarts() {
    return this.start;
  }
  getEnds() {
    return this.end;
  }
  cid() {
    return stamp(this);
  }
  equals(event) {
    if (this.id !== event.id) {
      return false;
    }
    if (this.title !== event.title) {
      return false;
    }
    if (this.body !== event.body) {
      return false;
    }
    if (this.isAllday !== event.isAllday) {
      return false;
    }
    if (compare(this.getStarts(), event.getStarts()) !== 0) {
      return false;
    }
    if (compare(this.getEnds(), event.getEnds()) !== 0) {
      return false;
    }
    if (this.color !== event.color) {
      return false;
    }
    if (this.backgroundColor !== event.backgroundColor) {
      return false;
    }
    if (this.dragBackgroundColor !== event.dragBackgroundColor) {
      return false;
    }
    if (this.borderColor !== event.borderColor) {
      return false;
    }
    return true;
  }
  duration() {
    const start = Number(this.getStarts());
    const end = Number(this.getEnds());
    let duration;
    if (this.isAllday) {
      duration = Number(toEndOfDay(end)) - Number(toStartOfDay(start));
    } else {
      duration = end - start;
    }
    return duration;
  }
  valueOf() {
    return this;
  }
  collidesWith(event, usingTravelTime = true) {
    event = event instanceof EventUIModel ? event.model : event;
    return collidesWith({
      start: Number(this.getStarts()),
      end: Number(this.getEnds()),
      targetStart: Number(event.getStarts()),
      targetEnd: Number(event.getEnds()),
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      targetGoingDuration: event.goingDuration,
      targetComingDuration: event.comingDuration,
      usingTravelTime
    });
  }
  toEventObject() {
    return {
      id: this.id,
      calendarId: this.calendarId,
      __cid: this.cid(),
      title: this.title,
      body: this.body,
      isAllday: this.isAllday,
      start: this.start,
      end: this.end,
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      location: this.location,
      attendees: this.attendees,
      category: this.category,
      dueDateClass: this.dueDateClass,
      recurrenceRule: this.recurrenceRule,
      state: this.state,
      isVisible: this.isVisible,
      isPending: this.isPending,
      isFocused: this.isFocused,
      isReadOnly: this.isReadOnly,
      isPrivate: this.isPrivate,
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor,
      customStyle: this.customStyle,
      raw: this.raw
    };
  }
  getColors() {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor
    };
  }
}
EventModel.schema = {
  required: ["title"],
  dateRange: ["start", "end"]
};
function isTimeEvent({ model }) {
  const { category, isAllday: isAllday2, hasMultiDates } = model;
  return category === "time" && !isAllday2 && !hasMultiDates;
}
class Collection {
  constructor(getItemIDFn) {
    this.internalMap = /* @__PURE__ */ new Map();
    if (isFunction$2(getItemIDFn)) {
      this.getItemID = getItemIDFn;
    }
  }
  static and(...filterFns) {
    const { length } = filterFns;
    return (item) => {
      for (let i2 = 0; i2 < length; i2 += 1) {
        if (!filterFns[i2].call(null, item)) {
          return false;
        }
      }
      return true;
    };
  }
  static or(...filterFns) {
    const { length } = filterFns;
    if (!length) {
      return () => false;
    }
    return (item) => {
      let result = filterFns[0].call(null, item);
      for (let i2 = 1; i2 < length; i2 += 1) {
        result = result || filterFns[i2].call(null, item);
      }
      return result;
    };
  }
  getItemID(item) {
    var _a;
    return (_a = item == null ? void 0 : item._id) != null ? _a : "";
  }
  getFirstItem() {
    const iterator = this.internalMap.values();
    return iterator.next().value;
  }
  add(...items) {
    items.forEach((item) => {
      const id = this.getItemID(item);
      this.internalMap.set(id, item);
    });
    return this;
  }
  remove(...items) {
    const removeResult = [];
    items.forEach((item) => {
      const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
      if (!this.internalMap.has(id)) {
        return;
      }
      removeResult.push(this.internalMap.get(id));
      this.internalMap["delete"](id);
    });
    return removeResult.length === 1 ? removeResult[0] : removeResult;
  }
  has(item) {
    const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
    return this.internalMap.has(id);
  }
  get(item) {
    var _a;
    const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
    return (_a = this.internalMap.get(id)) != null ? _a : null;
  }
  doWhenHas(id, callback) {
    const item = this.internalMap.get(id);
    if (isNil(item)) {
      return;
    }
    callback(item);
  }
  filter(filterFn) {
    const result = new Collection();
    if (this.hasOwnProperty("getItemID")) {
      result.getItemID = this.getItemID;
    }
    this.internalMap.forEach((item) => {
      if (filterFn(item) === true) {
        result.add(item);
      }
    });
    return result;
  }
  groupBy(groupByFn) {
    const result = {};
    this.internalMap.forEach((item) => {
      var _a;
      let key = isFunction$2(groupByFn) ? groupByFn(item) : item[groupByFn];
      if (isFunction$2(key)) {
        key = key.call(item);
      }
      (_a = result[key]) != null ? _a : result[key] = new Collection(this.getItemID);
      result[key].add(item);
    });
    return result;
  }
  find(findFn) {
    let result = null;
    const items = this.internalMap.values();
    let next = items.next();
    while (next.done === false) {
      if (findFn(next.value)) {
        result = next.value;
        break;
      }
      next = items.next();
    }
    return result;
  }
  sort(compareFn) {
    return this.toArray().sort(compareFn);
  }
  each(iteratee) {
    const entries = this.internalMap.entries();
    let next = entries.next();
    while (next.done === false) {
      const [key, value] = next.value;
      if (iteratee(value, key) === false) {
        break;
      }
      next = entries.next();
    }
  }
  clear() {
    this.internalMap.clear();
  }
  toArray() {
    return Array.from(this.internalMap.values());
  }
  get size() {
    return this.internalMap.size;
  }
}
function createEventCollection(...initItems) {
  const collection = new Collection((event) => event.cid());
  if (initItems.length) {
    collection.add(...initItems);
  }
  return collection;
}
function getDateRange(start, end) {
  return makeDateRange(toStartOfDay(start), toEndOfDay(end), MS_PER_DAY);
}
function isAllday(event) {
  return event.isAllday || event.category === "time" && Number(event.end) - Number(event.start) > MS_PER_DAY;
}
function filterByCategory(uiModel) {
  const { model } = uiModel;
  if (isAllday(model)) {
    return "allday";
  }
  return model.category;
}
function addToMatrix(idsOfDay, event) {
  const containDates = getDateRange(event.getStarts(), event.getEnds());
  containDates.forEach((date2) => {
    const ymd = toFormat(date2, "YYYYMMDD");
    const matrix = idsOfDay[ymd] = idsOfDay[ymd] || [];
    matrix.push(event.cid());
  });
}
function removeFromMatrix(idsOfDay, event) {
  const modelID = event.cid();
  Object.values(idsOfDay).forEach((ids) => {
    const index = ids.indexOf(modelID);
    if (~index) {
      ids.splice(index, 1);
    }
  });
}
function addEvent(calendarData, event) {
  calendarData.events.add(event);
  addToMatrix(calendarData.idsOfDay, event);
  return event;
}
function createEvent(calendarData, eventData) {
  const event = new EventModel(eventData);
  return addEvent(calendarData, event);
}
function createEvents(calendarData, events = []) {
  return events.map((eventData) => createEvent(calendarData, eventData));
}
function updateEvent(calendarData, eventId, calendarId, eventData) {
  const { idsOfDay } = calendarData;
  const event = calendarData.events.find((item) => isSameEvent(item, eventId, calendarId));
  if (!event) {
    return false;
  }
  event.init(__spreadValues(__spreadValues({}, event), eventData));
  removeFromMatrix(idsOfDay, event);
  addToMatrix(idsOfDay, event);
  return true;
}
function deleteEvent(calendarData, event) {
  removeFromMatrix(calendarData.idsOfDay, event);
  calendarData.events.remove(event);
  return event;
}
function clearEvents(calendarData) {
  calendarData.idsOfDay = {};
  calendarData.events.clear();
}
function createCalendarSlice(calendars = []) {
  return {
    calendar: {
      calendars,
      events: createEventCollection(),
      idsOfDay: {}
    }
  };
}
function createCalendarDispatchers(set) {
  return {
    createEvents: (events) => set(produce((state) => {
      createEvents(state.calendar, events);
    })),
    updateEvent: ({ event, eventData }) => set(produce((state) => {
      updateEvent(state.calendar, event.id, event.calendarId, eventData);
    })),
    deleteEvent: (event) => set(produce((state) => {
      deleteEvent(state.calendar, event);
    })),
    clearEvents: () => set(produce((state) => {
      clearEvents(state.calendar);
    })),
    setCalendars: (calendars) => set(produce((state) => {
      state.calendar.calendars = calendars;
    })),
    setCalendarColor: (calendarId, colorOptions) => set(produce((state) => {
      const calendars = state.calendar.calendars.map((calendar) => {
        if (calendar.id === calendarId) {
          return __spreadValues(__spreadValues({}, calendar), colorOptions);
        }
        return calendar;
      });
      const events = state.calendar.events.toArray().map((event) => {
        var _a, _b, _c, _d;
        if (event.calendarId === calendarId) {
          event.color = (_a = colorOptions.color) != null ? _a : event.color;
          event.backgroundColor = (_b = colorOptions.backgroundColor) != null ? _b : event.backgroundColor;
          event.borderColor = (_c = colorOptions.borderColor) != null ? _c : event.borderColor;
          event.dragBackgroundColor = (_d = colorOptions.dragBackgroundColor) != null ? _d : event.dragBackgroundColor;
        }
        return event;
      });
      const collection = createEventCollection(...events);
      state.calendar.calendars = calendars;
      state.calendar.events = collection;
    })),
    setCalendarVisibility: (calendarIds, isVisible) => set(produce((state) => {
      const events = state.calendar.events.toArray();
      state.calendar.events = createEventCollection(...events.map((event) => {
        if (calendarIds.includes(event.calendarId)) {
          event.isVisible = isVisible;
        }
        return event;
      }));
    }))
  };
}
var DraggingState = /* @__PURE__ */ ((DraggingState2) => {
  DraggingState2[DraggingState2["IDLE"] = 0] = "IDLE";
  DraggingState2[DraggingState2["INIT"] = 1] = "INIT";
  DraggingState2[DraggingState2["DRAGGING"] = 2] = "DRAGGING";
  DraggingState2[DraggingState2["CANCELED"] = 3] = "CANCELED";
  return DraggingState2;
})(DraggingState || {});
function createDndSlice() {
  return {
    dnd: {
      draggingItemType: null,
      draggingState: 0,
      initX: null,
      initY: null,
      x: null,
      y: null,
      draggingEventUIModel: null
    }
  };
}
function createDndDispatchers(set) {
  return {
    initDrag: (initState) => {
      set(produce((state) => {
        state.dnd = __spreadProps(__spreadValues(__spreadValues({}, state.dnd), initState), {
          draggingState: 1
        });
      }));
    },
    setDragging: (newState) => {
      set(produce((state) => {
        state.dnd = __spreadProps(__spreadValues(__spreadValues({}, state.dnd), newState), {
          draggingState: 2
        });
      }));
    },
    cancelDrag: () => {
      set(produce((state) => {
        state.dnd = createDndSlice().dnd;
        state.dnd.draggingState = 3;
      }));
    },
    reset: () => {
      set(produce((state) => {
        state.dnd = createDndSlice().dnd;
      }));
    },
    setDraggingEventUIModel: (eventUIModel) => {
      set(produce((state) => {
        var _a;
        state.dnd.draggingEventUIModel = (_a = eventUIModel == null ? void 0 : eventUIModel.clone()) != null ? _a : null;
      }));
    }
  };
}
function createGridSelectionSlice() {
  return {
    gridSelection: {
      dayGridMonth: null,
      dayGridWeek: null,
      timeGrid: null,
      accumulated: {
        dayGridMonth: []
      }
    }
  };
}
function createGridSelectionDispatchers(set) {
  return {
    setGridSelection: (type, gridSelection) => {
      set(produce((state) => {
        state.gridSelection[type] = gridSelection;
      }));
    },
    addGridSelection: (type, gridSelection) => {
      set(produce((state) => {
        if (type === "dayGridMonth" && gridSelection) {
          state.gridSelection.accumulated[type] = [
            ...state.gridSelection.accumulated[type],
            gridSelection
          ];
          state.gridSelection.dayGridMonth = null;
        }
      }));
    },
    clearAll: () => set(produce((state) => {
      state.gridSelection = createGridSelectionSlice().gridSelection;
    }))
  };
}
const DEFAULT_RESIZER_LENGTH = 3;
const DEFAULT_DUPLICATE_EVENT_CID = -1;
function getRestPanelHeight(dayGridRowsState, lastPanelType, initHeight) {
  return Object.keys(dayGridRowsState).reduce((acc, rowName) => {
    if (rowName === lastPanelType) {
      return acc;
    }
    return acc - dayGridRowsState[rowName].height - DEFAULT_RESIZER_LENGTH;
  }, initHeight);
}
function createWeekViewLayoutSlice() {
  return {
    layout: 500,
    weekViewLayout: {
      lastPanelType: null,
      dayGridRows: {},
      selectedDuplicateEventCid: DEFAULT_DUPLICATE_EVENT_CID
    }
  };
}
function createWeekViewLayoutDispatchers(set) {
  return {
    setLastPanelType: (type) => {
      set(produce((state) => {
        state.weekViewLayout.lastPanelType = type;
        if (type) {
          state.weekViewLayout.dayGridRows[type].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, type, state.layout);
        }
      }));
    },
    updateLayoutHeight: (height) => set(produce((state) => {
      const { lastPanelType } = state.weekViewLayout;
      state.layout = height;
      if (lastPanelType) {
        state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, lastPanelType, height);
      }
    })),
    updateDayGridRowHeight: ({ rowName, height }) => set(produce((state) => {
      const { lastPanelType } = state.weekViewLayout;
      state.weekViewLayout.dayGridRows[rowName] = { height };
      if (lastPanelType) {
        state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, lastPanelType, state.layout);
      }
    })),
    updateDayGridRowHeightByDiff: ({ rowName, diff }) => set(produce((state) => {
      var _a, _b, _c;
      const { lastPanelType } = state.weekViewLayout;
      const height = (_c = (_b = (_a = state.weekViewLayout.dayGridRows) == null ? void 0 : _a[rowName]) == null ? void 0 : _b.height) != null ? _c : DEFAULT_PANEL_HEIGHT;
      state.weekViewLayout.dayGridRows[rowName] = { height: height + diff };
      if (lastPanelType) {
        state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(state.weekViewLayout.dayGridRows, lastPanelType, state.layout);
      }
    })),
    setSelectedDuplicateEventCid: (cid) => set(produce((state) => {
      state.weekViewLayout.selectedDuplicateEventCid = cid != null ? cid : DEFAULT_DUPLICATE_EVENT_CID;
    }))
  };
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const DEFAULT_DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const getDayName = (dayIndex) => {
  return DEFAULT_DAY_NAMES[dayIndex];
};
function getDayNames(days, weekDayNamesOption) {
  return days.map((day) => {
    const dayIndex = day.getDay();
    const dayName = weekDayNamesOption.length > 0 ? weekDayNamesOption[dayIndex] : capitalize(getDayName(dayIndex));
    return {
      date: day.getDate(),
      day: day.getDay(),
      dayName,
      isToday: true,
      renderDate: "date",
      dateInstance: day
    };
  });
}
function initializeCollapseDuplicateEvents(options) {
  if (!options) {
    return false;
  }
  const initialCollapseDuplicateEvents = {
    getDuplicateEvents: (targetEvent, events) => events.filter((event) => event.title === targetEvent.title && compare(event.start, targetEvent.start) === 0 && compare(event.end, targetEvent.end) === 0).sort((a2, b2) => a2.calendarId > b2.calendarId ? 1 : -1),
    getMainEvent: (events) => last(events)
  };
  if (isBoolean_1(options)) {
    return initialCollapseDuplicateEvents;
  }
  return __spreadValues(__spreadValues({}, initialCollapseDuplicateEvents), options);
}
function initializeWeekOptions(weekOptions = {}) {
  const week = __spreadValues({
    startDayOfWeek: Day$2.SUN,
    dayNames: [],
    narrowWeekend: false,
    workweek: false,
    showNowIndicator: true,
    showTimezoneCollapseButton: false,
    timezonesCollapsed: false,
    hourStart: 0,
    hourEnd: 24,
    eventView: true,
    taskView: true,
    collapseDuplicateEvents: false
  }, weekOptions);
  week.collapseDuplicateEvents = initializeCollapseDuplicateEvents(week.collapseDuplicateEvents);
  return week;
}
function initializeTimezoneOptions(timezoneOptions = {}) {
  return __spreadValues({
    zones: []
  }, timezoneOptions);
}
function initializeMonthOptions(monthOptions = {}) {
  const month = __spreadValues({
    dayNames: [],
    visibleWeeksCount: 0,
    workweek: false,
    narrowWeekend: false,
    startDayOfWeek: Day$2.SUN,
    isAlways6Weeks: true,
    visibleEventCount: 6
  }, monthOptions);
  if (month.dayNames.length === 0) {
    month.dayNames = DEFAULT_DAY_NAMES.slice();
  }
  return month;
}
function initializeGridSelectionOptions(options) {
  if (isBoolean_1(options)) {
    return {
      enableDblClick: options,
      enableClick: options
    };
  }
  return __spreadValues({
    enableDblClick: true,
    enableClick: true
  }, options);
}
const initialEventFilter = (event) => !!event.isVisible;
function createOptionsSlice(options = {}) {
  var _a, _b, _c, _d, _e, _f;
  return {
    options: {
      defaultView: (_a = options.defaultView) != null ? _a : "week",
      useFormPopup: (_b = options.useFormPopup) != null ? _b : false,
      useDetailPopup: (_c = options.useDetailPopup) != null ? _c : false,
      isReadOnly: (_d = options.isReadOnly) != null ? _d : false,
      week: initializeWeekOptions(options.week),
      month: initializeMonthOptions(options.month),
      gridSelection: initializeGridSelectionOptions(options.gridSelection),
      usageStatistics: (_e = options.usageStatistics) != null ? _e : true,
      eventFilter: (_f = options.eventFilter) != null ? _f : initialEventFilter,
      timezone: initializeTimezoneOptions(options.timezone)
    }
  };
}
function createOptionsDispatchers(set) {
  return {
    setOptions: (newOptions = {}) => set(produce((state) => {
      var _a;
      if (newOptions.gridSelection) {
        newOptions.gridSelection = initializeGridSelectionOptions(newOptions.gridSelection);
      }
      if ((_a = newOptions.week) == null ? void 0 : _a.collapseDuplicateEvents) {
        newOptions.week.collapseDuplicateEvents = initializeCollapseDuplicateEvents(newOptions.week.collapseDuplicateEvents);
      }
      mergeObject(state.options, newOptions);
    }))
  };
}
var PopupType = /* @__PURE__ */ ((PopupType2) => {
  PopupType2["SeeMore"] = "seeMore";
  PopupType2["Form"] = "form";
  PopupType2["Detail"] = "detail";
  return PopupType2;
})(PopupType || {});
function createPopupSlice() {
  return {
    popup: {
      ["seeMore"]: null,
      ["form"]: null,
      ["detail"]: null
    }
  };
}
function createPopupDispatchers(set) {
  return {
    showSeeMorePopup: (param) => set(produce((state) => {
      state.popup["seeMore"] = param;
      state.popup["form"] = null;
      state.popup["detail"] = null;
    })),
    showFormPopup: (param) => set(produce((state) => {
      state.popup["form"] = param;
      state.popup["seeMore"] = null;
      state.popup["detail"] = null;
    })),
    showDetailPopup: (param, isOpenedInSeeMorePopup) => set(produce((state) => {
      state.popup["detail"] = param;
      state.popup["form"] = null;
      if (!isOpenedInSeeMorePopup) {
        state.popup["seeMore"] = null;
      }
    })),
    hideSeeMorePopup: () => set(produce((state) => {
      state.popup["seeMore"] = null;
    })),
    hideFormPopup: () => set(produce((state) => {
      state.popup["form"] = null;
    })),
    hideDetailPopup: () => set(produce((state) => {
      state.popup["detail"] = null;
    })),
    hideAllPopup: () => set(produce((state) => {
      state.popup["seeMore"] = null;
      state.popup["form"] = null;
      state.popup["detail"] = null;
    }))
  };
}
const noop = () => {
};
const CSS_AUTO_REGEX = /^auto$|^$|%/;
function getStyle(el, style) {
  let value = el.style[style];
  if ((!value || value === "auto") && document.defaultView) {
    const css = document.defaultView.getComputedStyle(el, null);
    value = css ? css[style] : null;
  }
  return value === "auto" ? null : value;
}
function invalidateSizeValue(value) {
  if (isString_1(value)) {
    return CSS_AUTO_REGEX.test(value);
  }
  return value === null;
}
function getSize(el) {
  const w2 = getStyle(el, "width");
  const h2 = getStyle(el, "height");
  if ((invalidateSizeValue(w2) || invalidateSizeValue(h2)) && el.getBoundingClientRect) {
    const { width, height } = el.getBoundingClientRect();
    return {
      width: width || el.offsetWidth,
      height: height || el.offsetHeight
    };
  }
  return {
    width: parseFloat(w2 != null ? w2 : "0"),
    height: parseFloat(h2 != null ? h2 : "0")
  };
}
const ElementClass = typeof Element === "undefined" ? noop : Element;
const elProto = ElementClass.prototype;
elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || function(selector) {
  return Array.from(document.querySelectorAll(selector)).includes(this);
};
function stripTags(str) {
  return str.replace(/<([^>]+)>/gi, "");
}
const SIXTY_MINUTES = 60;
const templates = {
  milestone(model) {
    const classNames2 = cls("icon", "ic-milestone");
    return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("span", {
      className: classNames2
    }), /* @__PURE__ */ h$3("span", {
      style: {
        backgroundColor: model.backgroundColor
      }
    }, stripTags(model.title)));
  },
  milestoneTitle() {
    return /* @__PURE__ */ h$3("span", {
      className: cls("left-content")
    }, "Milestone");
  },
  task(model) {
    return `#${model.title}`;
  },
  taskTitle() {
    return /* @__PURE__ */ h$3("span", {
      className: cls("left-content")
    }, "Task");
  },
  alldayTitle() {
    return /* @__PURE__ */ h$3("span", {
      className: cls("left-content")
    }, "All Day");
  },
  allday(model) {
    return stripTags(model.title);
  },
  time(model) {
    const { start, title } = model;
    if (start) {
      return /* @__PURE__ */ h$3("span", null, /* @__PURE__ */ h$3("strong", null, toFormat(start, "HH:mm")), "\xA0", /* @__PURE__ */ h$3("span", null, stripTags(title)));
    }
    return stripTags(title);
  },
  goingDuration(model) {
    const { goingDuration } = model;
    const hour = Math.floor(goingDuration / SIXTY_MINUTES);
    const minutes = goingDuration % SIXTY_MINUTES;
    return `GoingTime ${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  comingDuration(model) {
    const { comingDuration } = model;
    const hour = Math.floor(comingDuration / SIXTY_MINUTES);
    const minutes = comingDuration % SIXTY_MINUTES;
    return `ComingTime ${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  monthMoreTitleDate(moreTitle) {
    const { date: date2, day } = moreTitle;
    const classNameDay = cls("more-title-date");
    const classNameDayLabel = cls("more-title-day");
    const dayName = capitalize(getDayName(day));
    return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("span", {
      className: classNameDay
    }, date2), /* @__PURE__ */ h$3("span", {
      className: classNameDayLabel
    }, dayName));
  },
  monthMoreClose() {
    return "";
  },
  monthGridHeader(model) {
    const date2 = parseInt(model.date.split("-")[2], 10);
    const classNames2 = cls("weekday-grid-date", { "weekday-grid-date-decorator": model.isToday });
    return /* @__PURE__ */ h$3("span", {
      className: classNames2
    }, date2);
  },
  monthGridHeaderExceed(hiddenEvents) {
    const className2 = cls("weekday-grid-more-events");
    return /* @__PURE__ */ h$3("span", {
      className: className2
    }, hiddenEvents, " more");
  },
  monthGridFooter(_model) {
    return "";
  },
  monthGridFooterExceed(_hiddenEvents) {
    return "";
  },
  monthDayName(model) {
    return model.label;
  },
  weekDayName(model) {
    const classDate = cls("day-name__date");
    const className2 = cls("day-name__name");
    return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("span", {
      className: classDate
    }, model.date), "\xA0\xA0", /* @__PURE__ */ h$3("span", {
      className: className2
    }, model.dayName));
  },
  weekGridFooterExceed(hiddenEvents) {
    return `+${hiddenEvents}`;
  },
  collapseBtnTitle() {
    const className2 = cls("collapse-btn-icon");
    return /* @__PURE__ */ h$3("span", {
      className: className2
    });
  },
  timezoneDisplayLabel({ displayLabel, timezoneOffset }) {
    if (isNil(displayLabel) && isPresent(timezoneOffset)) {
      const sign = timezoneOffset < 0 ? "-" : "+";
      const hours = Math.abs(timezoneOffset / SIXTY_MINUTES);
      const minutes = Math.abs(timezoneOffset % SIXTY_MINUTES);
      return `GMT${sign}${leadingZero(hours, 2)}:${leadingZero(minutes, 2)}`;
    }
    return displayLabel;
  },
  timegridDisplayPrimaryTime(props) {
    const { time } = props;
    return toFormat(time, "hh tt");
  },
  timegridDisplayTime(props) {
    const { time } = props;
    return toFormat(time, "HH:mm");
  },
  timegridNowIndicatorLabel(timezone) {
    const { time, format = "HH:mm" } = timezone;
    return toFormat(time, format);
  },
  popupIsAllday() {
    return "All day";
  },
  popupStateFree() {
    return "Free";
  },
  popupStateBusy() {
    return "Busy";
  },
  titlePlaceholder() {
    return "Subject";
  },
  locationPlaceholder() {
    return "Location";
  },
  startDatePlaceholder() {
    return "Start date";
  },
  endDatePlaceholder() {
    return "End date";
  },
  popupSave() {
    return "Save";
  },
  popupUpdate() {
    return "Update";
  },
  popupEdit() {
    return "Edit";
  },
  popupDelete() {
    return "Delete";
  },
  popupDetailTitle({ title }) {
    return title;
  },
  popupDetailDate({ isAllday: isAllday2, start, end }) {
    const dayFormat = "YYYY.MM.DD";
    const timeFormat = "hh:mm tt";
    const detailFormat = `${dayFormat} ${timeFormat}`;
    const startDate = toFormat(start, isAllday2 ? dayFormat : timeFormat);
    const endDateFormat = isSameDate(start, end) ? timeFormat : detailFormat;
    if (isAllday2) {
      return `${startDate}${isSameDate(start, end) ? "" : ` - ${toFormat(end, dayFormat)}`}`;
    }
    return `${toFormat(start, detailFormat)} - ${toFormat(end, endDateFormat)}`;
  },
  popupDetailLocation({ location: location2 }) {
    return location2;
  },
  popupDetailAttendees({ attendees = [] }) {
    return attendees.join(", ");
  },
  popupDetailState({ state }) {
    return state || "Busy";
  },
  popupDetailRecurrenceRule({ recurrenceRule }) {
    return recurrenceRule;
  },
  popupDetailBody({ body }) {
    return body;
  }
};
function createTemplateSlice(templateConfig = {}) {
  return {
    template: __spreadValues(__spreadValues({}, templates), templateConfig)
  };
}
function createTemplateDispatchers(set) {
  return {
    setTemplate: (template) => set(produce((state) => {
      state.template = __spreadValues(__spreadValues({}, state.template), template);
    }))
  };
}
function createViewSlice(initialView = "week") {
  const renderDate = new TZDate();
  renderDate.setHours(0, 0, 0, 0);
  return {
    view: {
      currentView: initialView,
      renderDate
    }
  };
}
function createViewDispatchers(set) {
  return {
    changeView: (nextView) => set(produce((state) => {
      state.view.currentView = nextView;
    })),
    setRenderDate: (date2) => set(produce((state) => {
      state.view.renderDate = toStartOfDay(date2);
    }))
  };
}
const isSSR = isUndefined_1(window) || !window.navigator;
const useIsomorphicLayoutEffect = isSSR ? _$2 : h$2;
function createStoreContext() {
  const StoreContext = B$1(null);
  function StoreProvider2({
    children,
    store
  }) {
    return h$3(StoreContext.Provider, { value: store, children });
  }
  const useStore2 = (selector, equalityFn = Object.is) => {
    const storeCtx = q$2(StoreContext);
    if (isNil(storeCtx)) {
      throw new Error("StoreProvider is not found");
    }
    const [, notify] = d$2((notifyCount) => notifyCount + 1, 0);
    const state = storeCtx.getState();
    const stateRef = s$2(state);
    const selectorRef = s$2(selector);
    const equalityFnRef = s$2(equalityFn);
    const hasErrorRef = s$2(false);
    const currentSliceRef = s$2();
    if (isUndefined_1(currentSliceRef.current)) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    const shouldGetNewSlice = stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || hasErrorRef.current;
    if (shouldGetNewSlice) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      hasErrorRef.current = false;
    });
    const stateBeforeSubscriptionRef = s$2(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = storeCtx.getState();
          const nextStateSlice = selectorRef.current(nextState);
          const shouldUpdateState = !equalityFnRef.current(currentSliceRef.current, nextStateSlice);
          if (shouldUpdateState) {
            stateRef.current = nextState;
            currentSliceRef.current = newStateSlice;
            notify();
          }
        } catch (e2) {
          console.error("[toastui-calendar] failed to update state", e2 == null ? void 0 : e2.message);
          hasErrorRef.current = true;
          notify();
        }
      };
      const unsubscribe = storeCtx.subscribe(listener);
      if (storeCtx.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
  };
  const useInternalStore2 = () => {
    const storeCtx = q$2(StoreContext);
    if (isNil(storeCtx)) {
      throw new Error("StoreProvider is not found");
    }
    return F$2(() => storeCtx, [storeCtx]);
  };
  return {
    StoreProvider: StoreProvider2,
    useStore: useStore2,
    useInternalStore: useInternalStore2
  };
}
function createStore(storeCreator2) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partialStateCreator) => {
    const nextState = partialStateCreator(state);
    if (nextState !== state) {
      const previousState = state;
      state = __spreadValues(__spreadValues({}, state), nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener, selector, equalityFn) => {
    let _listener = listener;
    if (selector) {
      let currentSlice = selector(state);
      const _equalityFn = equalityFn != null ? equalityFn : Object.is;
      _listener = () => {
        const nextSlice = selector(state);
        if (!_equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          currentSlice = nextSlice;
          listener(currentSlice, previousSlice);
        }
      };
    }
    listeners.add(_listener);
    return () => listeners.delete(_listener);
  };
  const clearListeners = () => listeners.clear();
  const internal = { setState, getState, subscribe, clearListeners };
  state = storeCreator2(setState, getState, internal);
  return internal;
}
const storeCreator = (options) => (set) => {
  return __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, createOptionsSlice(options)), createTemplateSlice(options.template)), createPopupSlice()), createWeekViewLayoutSlice()), createCalendarSlice(options.calendars)), createViewSlice(options.defaultView)), createDndSlice()), createGridSelectionSlice()), {
    dispatch: {
      options: createOptionsDispatchers(set),
      popup: createPopupDispatchers(set),
      weekViewLayout: createWeekViewLayoutDispatchers(set),
      calendar: createCalendarDispatchers(set),
      view: createViewDispatchers(set),
      dnd: createDndDispatchers(set),
      gridSelection: createGridSelectionDispatchers(set),
      template: createTemplateDispatchers(set)
    }
  });
};
const initCalendarStore = (options = {}) => createStore(storeCreator(options));
const { StoreProvider, useStore, useInternalStore } = createStoreContext();
function useDispatch(group) {
  return useStore(T$1((state) => {
    if (!group) {
      return state.dispatch;
    }
    return state.dispatch[group];
  }, [group]));
}
function topLevelStateSelector(group) {
  return (state) => state[group];
}
const calendarSelector = topLevelStateSelector("calendar");
const weekViewLayoutSelector = topLevelStateSelector("weekViewLayout");
const templateSelector = topLevelStateSelector("template");
const viewSelector = topLevelStateSelector("view");
const optionsSelector = topLevelStateSelector("options");
const dndSelector = topLevelStateSelector("dnd");
var purify = { exports: {} };
/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _setPrototypeOf(o2, p2) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
        o3.__proto__ = p3;
        return o3;
      };
      return _setPrototypeOf(o2, p2);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a2 = [null];
          a2.push.apply(a2, args2);
          var Constructor2 = Function.bind.apply(Parent2, a2);
          var instance = new Constructor2();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o2, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var freeze = Object.freeze, seal = Object.seal, create = Object.create;
    var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
    if (!apply) {
      apply = function apply2(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }
    if (!freeze) {
      freeze = function freeze2(x2) {
        return x2;
      };
    }
    if (!seal) {
      seal = function seal2(x2) {
        return x2;
      };
    }
    if (!construct) {
      construct = function construct2(Func, args) {
        return _construct(Func, _toConsumableArray(args));
      };
    }
    var arrayForEach = unapply(Array.prototype.forEach);
    var arrayPop = unapply(Array.prototype.pop);
    var arrayPush = unapply(Array.prototype.push);
    var stringToLowerCase = unapply(String.prototype.toLowerCase);
    var stringMatch = unapply(String.prototype.match);
    var stringReplace = unapply(String.prototype.replace);
    var stringIndexOf = unapply(String.prototype.indexOf);
    var stringTrim = unapply(String.prototype.trim);
    var regExpTest = unapply(RegExp.prototype.test);
    var typeErrorCreate = unconstruct(TypeError);
    function unapply(func) {
      return function(thisArg) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return apply(func, thisArg, args);
      };
    }
    function unconstruct(func) {
      return function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return construct(func, args);
      };
    }
    function addToSet(set, array2) {
      if (setPrototypeOf) {
        setPrototypeOf(set, null);
      }
      var l2 = array2.length;
      while (l2--) {
        var element = array2[l2];
        if (typeof element === "string") {
          var lcElement = stringToLowerCase(element);
          if (lcElement !== element) {
            if (!isFrozen(array2)) {
              array2[l2] = lcElement;
            }
            element = lcElement;
          }
        }
        set[element] = true;
      }
      return set;
    }
    function clone2(object) {
      var newObject = create(null);
      var property;
      for (property in object) {
        if (apply(hasOwnProperty, object, [property])) {
          newObject[property] = object[property];
        }
      }
      return newObject;
    }
    function lookupGetter(object, prop) {
      while (object !== null) {
        var desc = getOwnPropertyDescriptor(object, prop);
        if (desc) {
          if (desc.get) {
            return unapply(desc.get);
          }
          if (typeof desc.value === "function") {
            return unapply(desc.value);
          }
        }
        object = getPrototypeOf(object);
      }
      function fallbackValue(element) {
        console.warn("fallback value for", element);
        return null;
      }
      return fallbackValue;
    }
    var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
    var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
    var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
    var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
    var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
    var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
    var text = freeze(["#text"]);
    var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
    var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
    var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
    var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
    var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
    var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
    var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
    var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
    var DOCTYPE_NAME = seal(/^html$/i);
    var getGlobal = function getGlobal2() {
      return typeof window === "undefined" ? null : window;
    };
    var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document2) {
      if (_typeof(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") {
        return null;
      }
      var suffix = null;
      var ATTR_NAME = "data-tt-policy-suffix";
      if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
        suffix = document2.currentScript.getAttribute(ATTR_NAME);
      }
      var policyName = "dompurify" + (suffix ? "#" + suffix : "");
      try {
        return trustedTypes.createPolicy(policyName, {
          createHTML: function createHTML(html2) {
            return html2;
          }
        });
      } catch (_2) {
        console.warn("TrustedTypes policy " + policyName + " could not be created.");
        return null;
      }
    };
    function createDOMPurify() {
      var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
      var DOMPurify = function DOMPurify2(root) {
        return createDOMPurify(root);
      };
      DOMPurify.version = "2.3.8";
      DOMPurify.removed = [];
      if (!window2 || !window2.document || window2.document.nodeType !== 9) {
        DOMPurify.isSupported = false;
        return DOMPurify;
      }
      var originalDocument = window2.document;
      var document2 = window2.document;
      var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element2 = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window2.HTMLFormElement, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
      var ElementPrototype = Element2.prototype;
      var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
      var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
      var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
      var getParentNode = lookupGetter(ElementPrototype, "parentNode");
      if (typeof HTMLTemplateElement === "function") {
        var template = document2.createElement("template");
        if (template.content && template.content.ownerDocument) {
          document2 = template.content.ownerDocument;
        }
      }
      var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
      var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
      var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
      var importNode = originalDocument.importNode;
      var documentMode = {};
      try {
        documentMode = clone2(document2).documentMode ? document2.documentMode : {};
      } catch (_2) {
      }
      var hooks = {};
      DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
      var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
      var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
      var ALLOWED_TAGS = null;
      var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
      var ALLOWED_ATTR = null;
      var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
      var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
        tagNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null
        },
        attributeNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null
        },
        allowCustomizedBuiltInElements: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: false
        }
      }));
      var FORBID_TAGS = null;
      var FORBID_ATTR = null;
      var ALLOW_ARIA_ATTR = true;
      var ALLOW_DATA_ATTR = true;
      var ALLOW_UNKNOWN_PROTOCOLS = false;
      var SAFE_FOR_TEMPLATES = false;
      var WHOLE_DOCUMENT = false;
      var SET_CONFIG = false;
      var FORCE_BODY = false;
      var RETURN_DOM = false;
      var RETURN_DOM_FRAGMENT = false;
      var RETURN_TRUSTED_TYPE = false;
      var SANITIZE_DOM = true;
      var KEEP_CONTENT = true;
      var IN_PLACE = false;
      var USE_PROFILES = {};
      var FORBID_CONTENTS = null;
      var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
      var DATA_URI_TAGS = null;
      var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
      var URI_SAFE_ATTRIBUTES = null;
      var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
      var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
      var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
      var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
      var NAMESPACE = HTML_NAMESPACE;
      var IS_EMPTY_INPUT = false;
      var PARSER_MEDIA_TYPE;
      var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
      var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
      var transformCaseFunc;
      var CONFIG = null;
      var formElement = document2.createElement("form");
      var isRegexOrFunction = function isRegexOrFunction2(testValue) {
        return testValue instanceof RegExp || testValue instanceof Function;
      };
      var _parseConfig = function _parseConfig2(cfg) {
        if (CONFIG && CONFIG === cfg) {
          return;
        }
        if (!cfg || _typeof(cfg) !== "object") {
          cfg = {};
        }
        cfg = clone2(cfg);
        ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone2(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
        DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone2(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
        FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
        FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
        USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
        RETURN_DOM = cfg.RETURN_DOM || false;
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
        FORCE_BODY = cfg.FORCE_BODY || false;
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
        IN_PLACE = cfg.IN_PLACE || false;
        IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
        NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
          CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
          CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
          CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
        transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? function(x2) {
          return x2;
        } : stringToLowerCase;
        if (SAFE_FOR_TEMPLATES) {
          ALLOW_DATA_ATTR = false;
        }
        if (RETURN_DOM_FRAGMENT) {
          RETURN_DOM = true;
        }
        if (USE_PROFILES) {
          ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
          ALLOWED_ATTR = [];
          if (USE_PROFILES.html === true) {
            addToSet(ALLOWED_TAGS, html$1);
            addToSet(ALLOWED_ATTR, html);
          }
          if (USE_PROFILES.svg === true) {
            addToSet(ALLOWED_TAGS, svg$1);
            addToSet(ALLOWED_ATTR, svg);
            addToSet(ALLOWED_ATTR, xml);
          }
          if (USE_PROFILES.svgFilters === true) {
            addToSet(ALLOWED_TAGS, svgFilters);
            addToSet(ALLOWED_ATTR, svg);
            addToSet(ALLOWED_ATTR, xml);
          }
          if (USE_PROFILES.mathMl === true) {
            addToSet(ALLOWED_TAGS, mathMl$1);
            addToSet(ALLOWED_ATTR, mathMl);
            addToSet(ALLOWED_ATTR, xml);
          }
        }
        if (cfg.ADD_TAGS) {
          if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
            ALLOWED_TAGS = clone2(ALLOWED_TAGS);
          }
          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }
        if (cfg.ADD_ATTR) {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone2(ALLOWED_ATTR);
          }
          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
          addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }
        if (cfg.FORBID_CONTENTS) {
          if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
            FORBID_CONTENTS = clone2(FORBID_CONTENTS);
          }
          addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
        }
        if (KEEP_CONTENT) {
          ALLOWED_TAGS["#text"] = true;
        }
        if (WHOLE_DOCUMENT) {
          addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
        }
        if (ALLOWED_TAGS.table) {
          addToSet(ALLOWED_TAGS, ["tbody"]);
          delete FORBID_TAGS.tbody;
        }
        if (freeze) {
          freeze(cfg);
        }
        CONFIG = cfg;
      };
      var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
      var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
      var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
      var ALL_SVG_TAGS = addToSet({}, svg$1);
      addToSet(ALL_SVG_TAGS, svgFilters);
      addToSet(ALL_SVG_TAGS, svgDisallowed);
      var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
      addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
      var _checkValidNamespace = function _checkValidNamespace2(element) {
        var parent = getParentNode(element);
        if (!parent || !parent.tagName) {
          parent = {
            namespaceURI: HTML_NAMESPACE,
            tagName: "template"
          };
        }
        var tagName = stringToLowerCase(element.tagName);
        var parentTagName = stringToLowerCase(parent.tagName);
        if (element.namespaceURI === SVG_NAMESPACE) {
          if (parent.namespaceURI === HTML_NAMESPACE) {
            return tagName === "svg";
          }
          if (parent.namespaceURI === MATHML_NAMESPACE) {
            return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
          }
          return Boolean(ALL_SVG_TAGS[tagName]);
        }
        if (element.namespaceURI === MATHML_NAMESPACE) {
          if (parent.namespaceURI === HTML_NAMESPACE) {
            return tagName === "math";
          }
          if (parent.namespaceURI === SVG_NAMESPACE) {
            return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
          }
          return Boolean(ALL_MATHML_TAGS[tagName]);
        }
        if (element.namespaceURI === HTML_NAMESPACE) {
          if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
            return false;
          }
          if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
            return false;
          }
          return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
        }
        return false;
      };
      var _forceRemove = function _forceRemove2(node) {
        arrayPush(DOMPurify.removed, {
          element: node
        });
        try {
          node.parentNode.removeChild(node);
        } catch (_2) {
          try {
            node.outerHTML = emptyHTML;
          } catch (_3) {
            node.remove();
          }
        }
      };
      var _removeAttribute = function _removeAttribute2(name, node) {
        try {
          arrayPush(DOMPurify.removed, {
            attribute: node.getAttributeNode(name),
            from: node
          });
        } catch (_2) {
          arrayPush(DOMPurify.removed, {
            attribute: null,
            from: node
          });
        }
        node.removeAttribute(name);
        if (name === "is" && !ALLOWED_ATTR[name]) {
          if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
            try {
              _forceRemove(node);
            } catch (_2) {
            }
          } else {
            try {
              node.setAttribute(name, "");
            } catch (_2) {
            }
          }
        }
      };
      var _initDocument = function _initDocument2(dirty) {
        var doc;
        var leadingWhitespace;
        if (FORCE_BODY) {
          dirty = "<remove></remove>" + dirty;
        } else {
          var matches = stringMatch(dirty, /^[\r\n\t ]+/);
          leadingWhitespace = matches && matches[0];
        }
        if (PARSER_MEDIA_TYPE === "application/xhtml+xml") {
          dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
        }
        var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        if (NAMESPACE === HTML_NAMESPACE) {
          try {
            doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
          } catch (_2) {
          }
        }
        if (!doc || !doc.documentElement) {
          doc = implementation.createDocument(NAMESPACE, "template", null);
          try {
            doc.documentElement.innerHTML = IS_EMPTY_INPUT ? "" : dirtyPayload;
          } catch (_2) {
          }
        }
        var body = doc.body || doc.documentElement;
        if (dirty && leadingWhitespace) {
          body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
        }
        if (NAMESPACE === HTML_NAMESPACE) {
          return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
        }
        return WHOLE_DOCUMENT ? doc.documentElement : body;
      };
      var _createIterator = function _createIterator2(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
      };
      var _isClobbered = function _isClobbered2(elm) {
        return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function");
      };
      var _isNode = function _isNode2(object) {
        return _typeof(Node) === "object" ? object instanceof Node : object && _typeof(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
      };
      var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) {
          return;
        }
        arrayForEach(hooks[entryPoint], function(hook) {
          hook.call(DOMPurify, currentNode, data, CONFIG);
        });
      };
      var _sanitizeElements = function _sanitizeElements2(currentNode) {
        var content;
        _executeHook("beforeSanitizeElements", currentNode, null);
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
          return true;
        }
        if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
          _forceRemove(currentNode);
          return true;
        }
        var tagName = transformCaseFunc(currentNode.nodeName);
        _executeHook("uponSanitizeElement", currentNode, {
          tagName,
          allowedTags: ALLOWED_TAGS
        });
        if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
          _forceRemove(currentNode);
          return true;
        }
        if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
            if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
              return false;
            if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
              return false;
          }
          if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
            var parentNode = getParentNode(currentNode) || currentNode.parentNode;
            var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
            if (childNodes && parentNode) {
              var childCount = childNodes.length;
              for (var i2 = childCount - 1; i2 >= 0; --i2) {
                parentNode.insertBefore(cloneNode(childNodes[i2], true), getNextSibling(currentNode));
              }
            }
          }
          _forceRemove(currentNode);
          return true;
        }
        if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
          _forceRemove(currentNode);
          return true;
        }
        if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
          content = currentNode.textContent;
          content = stringReplace(content, MUSTACHE_EXPR$1, " ");
          content = stringReplace(content, ERB_EXPR$1, " ");
          if (currentNode.textContent !== content) {
            arrayPush(DOMPurify.removed, {
              element: currentNode.cloneNode()
            });
            currentNode.textContent = content;
          }
        }
        _executeHook("afterSanitizeElements", currentNode, null);
        return false;
      };
      var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
        if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
          return false;
        }
        if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName))
          ;
        else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName))
          ;
        else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
          if (_basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)))
            ;
          else {
            return false;
          }
        } else if (URI_SAFE_ATTRIBUTES[lcName])
          ;
        else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
          ;
        else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
          ;
        else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
          ;
        else if (!value)
          ;
        else {
          return false;
        }
        return true;
      };
      var _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
        return tagName.indexOf("-") > 0;
      };
      var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
        var attr;
        var value;
        var lcName;
        var l2;
        _executeHook("beforeSanitizeAttributes", currentNode, null);
        var attributes = currentNode.attributes;
        if (!attributes) {
          return;
        }
        var hookEvent = {
          attrName: "",
          attrValue: "",
          keepAttr: true,
          allowedAttributes: ALLOWED_ATTR
        };
        l2 = attributes.length;
        while (l2--) {
          attr = attributes[l2];
          var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
          value = name === "value" ? attr.value : stringTrim(attr.value);
          lcName = transformCaseFunc(name);
          hookEvent.attrName = lcName;
          hookEvent.attrValue = value;
          hookEvent.keepAttr = true;
          hookEvent.forceKeepAttr = void 0;
          _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
          value = hookEvent.attrValue;
          if (hookEvent.forceKeepAttr) {
            continue;
          }
          _removeAttribute(name, currentNode);
          if (!hookEvent.keepAttr) {
            continue;
          }
          if (regExpTest(/\/>/i, value)) {
            _removeAttribute(name, currentNode);
            continue;
          }
          if (SAFE_FOR_TEMPLATES) {
            value = stringReplace(value, MUSTACHE_EXPR$1, " ");
            value = stringReplace(value, ERB_EXPR$1, " ");
          }
          var lcTag = transformCaseFunc(currentNode.nodeName);
          if (!_isValidAttribute(lcTag, lcName, value)) {
            continue;
          }
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              currentNode.setAttribute(name, value);
            }
            arrayPop(DOMPurify.removed);
          } catch (_2) {
          }
        }
        _executeHook("afterSanitizeAttributes", currentNode, null);
      };
      var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
        var shadowNode;
        var shadowIterator = _createIterator(fragment);
        _executeHook("beforeSanitizeShadowDOM", fragment, null);
        while (shadowNode = shadowIterator.nextNode()) {
          _executeHook("uponSanitizeShadowNode", shadowNode, null);
          if (_sanitizeElements(shadowNode)) {
            continue;
          }
          if (shadowNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM2(shadowNode.content);
          }
          _sanitizeAttributes(shadowNode);
        }
        _executeHook("afterSanitizeShadowDOM", fragment, null);
      };
      DOMPurify.sanitize = function(dirty, cfg) {
        var body;
        var importedNode;
        var currentNode;
        var oldNode;
        var returnNode;
        IS_EMPTY_INPUT = !dirty;
        if (IS_EMPTY_INPUT) {
          dirty = "<!-->";
        }
        if (typeof dirty !== "string" && !_isNode(dirty)) {
          if (typeof dirty.toString !== "function") {
            throw typeErrorCreate("toString is not a function");
          } else {
            dirty = dirty.toString();
            if (typeof dirty !== "string") {
              throw typeErrorCreate("dirty is not a string, aborting");
            }
          }
        }
        if (!DOMPurify.isSupported) {
          if (_typeof(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
            if (typeof dirty === "string") {
              return window2.toStaticHTML(dirty);
            }
            if (_isNode(dirty)) {
              return window2.toStaticHTML(dirty.outerHTML);
            }
          }
          return dirty;
        }
        if (!SET_CONFIG) {
          _parseConfig(cfg);
        }
        DOMPurify.removed = [];
        if (typeof dirty === "string") {
          IN_PLACE = false;
        }
        if (IN_PLACE) {
          if (dirty.nodeName) {
            var tagName = transformCaseFunc(dirty.nodeName);
            if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
              throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
            }
          }
        } else if (dirty instanceof Node) {
          body = _initDocument("<!---->");
          importedNode = body.ownerDocument.importNode(dirty, true);
          if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
            body = importedNode;
          } else if (importedNode.nodeName === "HTML") {
            body = importedNode;
          } else {
            body.appendChild(importedNode);
          }
        } else {
          if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
          }
          body = _initDocument(dirty);
          if (!body) {
            return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
          }
        }
        if (body && FORCE_BODY) {
          _forceRemove(body.firstChild);
        }
        var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
        while (currentNode = nodeIterator.nextNode()) {
          if (currentNode.nodeType === 3 && currentNode === oldNode) {
            continue;
          }
          if (_sanitizeElements(currentNode)) {
            continue;
          }
          if (currentNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM(currentNode.content);
          }
          _sanitizeAttributes(currentNode);
          oldNode = currentNode;
        }
        oldNode = null;
        if (IN_PLACE) {
          return dirty;
        }
        if (RETURN_DOM) {
          if (RETURN_DOM_FRAGMENT) {
            returnNode = createDocumentFragment.call(body.ownerDocument);
            while (body.firstChild) {
              returnNode.appendChild(body.firstChild);
            }
          } else {
            returnNode = body;
          }
          if (ALLOWED_ATTR.shadowroot) {
            returnNode = importNode.call(originalDocument, returnNode, true);
          }
          return returnNode;
        }
        var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
        if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
          serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
        }
        if (SAFE_FOR_TEMPLATES) {
          serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
          serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
        }
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
      };
      DOMPurify.setConfig = function(cfg) {
        _parseConfig(cfg);
        SET_CONFIG = true;
      };
      DOMPurify.clearConfig = function() {
        CONFIG = null;
        SET_CONFIG = false;
      };
      DOMPurify.isValidAttribute = function(tag, attr, value) {
        if (!CONFIG) {
          _parseConfig({});
        }
        var lcTag = transformCaseFunc(tag);
        var lcName = transformCaseFunc(attr);
        return _isValidAttribute(lcTag, lcName, value);
      };
      DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== "function") {
          return;
        }
        hooks[entryPoint] = hooks[entryPoint] || [];
        arrayPush(hooks[entryPoint], hookFunction);
      };
      DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
          return arrayPop(hooks[entryPoint]);
        }
      };
      DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
          hooks[entryPoint] = [];
        }
      };
      DOMPurify.removeAllHooks = function() {
        hooks = {};
      };
      return DOMPurify;
    }
    var purify2 = createDOMPurify();
    return purify2;
  });
})(purify);
var browser = window.DOMPurify || (window.DOMPurify = purify.exports.default || purify.exports);
const TEMP_TARGET_ATTRIBUTE = "data-target-temp";
function addAttributeHooks() {
  browser.addHook("beforeSanitizeAttributes", (node) => {
    if (node.tagName === "A") {
      const targetValue = node.getAttribute("target");
      if (targetValue) {
        node.setAttribute(TEMP_TARGET_ATTRIBUTE, targetValue);
      } else {
        node.setAttribute("target", "_self");
      }
    }
  });
  browser.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.hasAttribute(TEMP_TARGET_ATTRIBUTE)) {
      node.setAttribute("target", node.getAttribute(TEMP_TARGET_ATTRIBUTE));
      node.removeAttribute(TEMP_TARGET_ATTRIBUTE);
      if (node.getAttribute("target") === "_blank") {
        node.setAttribute("rel", "noopener");
      }
    }
  });
}
function removeAttributeHooks() {
  browser.removeAllHooks();
}
function sanitize(str) {
  return browser.sanitize(str);
}
function Template({ template, param, as: tagName = "div" }) {
  var _a;
  const templates2 = useStore(templateSelector);
  const templateFunc = templates2[template];
  if (isNil(templateFunc)) {
    return null;
  }
  const htmlOrVnode = templateFunc(param);
  return isString_1(htmlOrVnode) ? h$3(tagName, {
    className: cls(`template-${template}`),
    dangerouslySetInnerHTML: {
      __html: sanitize(htmlOrVnode)
    }
  }) : q$3(htmlOrVnode, {
    className: `${(_a = htmlOrVnode.props.className) != null ? _a : ""} ${cls(`template-${template}`)}`
  });
}
const EventBusContext = B$1(null);
const EventBusProvider = EventBusContext.Provider;
const useEventBus = () => {
  const eventBus = q$2(EventBusContext);
  if (!eventBus) {
    throw new Error("useEventBus must be used within a EventBusProvider");
  }
  return eventBus;
};
const primaryTimezoneSelector = (state) => {
  var _a, _b, _c, _d, _e;
  return (_e = (_d = (_c = (_b = (_a = state.options) == null ? void 0 : _a.timezone) == null ? void 0 : _b.zones) == null ? void 0 : _c[0]) == null ? void 0 : _d.timezoneName) != null ? _e : "Local";
};
const customOffsetCalculatorSelector = (state) => {
  var _a, _b;
  return (_b = (_a = state.options) == null ? void 0 : _a.timezone) == null ? void 0 : _b.customOffsetCalculator;
};
const timezonesSelector = (state) => {
  var _a;
  return (_a = state.options.timezone.zones) != null ? _a : [];
};
function useTZConverter() {
  const customOffsetCalculator = useStore(customOffsetCalculatorSelector);
  const hasCustomOffsetCalculator = isPresent(customOffsetCalculator);
  return T$1((timezoneName, tzDate = new TZDate()) => tzDate.tz(hasCustomOffsetCalculator ? customOffsetCalculator(timezoneName, tzDate.getTime()) : timezoneName), [customOffsetCalculator, hasCustomOffsetCalculator]);
}
function usePrimaryTimezone() {
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const tzConverter = useTZConverter();
  const getNow = T$1(() => tzConverter(primaryTimezoneName), [primaryTimezoneName, tzConverter]);
  return [primaryTimezoneName, getNow];
}
function isWeekDayName(type, dayName) {
  return type === "week";
}
function getWeekDayNameColor({
  dayName,
  theme,
  today
}) {
  var _a, _b;
  const { day, dateInstance } = dayName;
  const isToday = isSameDate(today, dateInstance);
  const isPastDay = !isToday && dateInstance < today;
  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isPastDay) {
    return (_a = theme.week) == null ? void 0 : _a.pastDay.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }
  if (isToday) {
    return (_b = theme.week) == null ? void 0 : _b.today.color;
  }
  return theme.common.dayName.color;
}
function getMonthDayNameColor({
  dayName,
  theme
}) {
  const { day } = dayName;
  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }
  return theme.common.dayName.color;
}
function DayName({ dayName, style, type, theme }) {
  const eventBus = useEventBus();
  const [, getNow] = usePrimaryTimezone();
  const today = getNow();
  const { day } = dayName;
  const color = type === "week" ? getWeekDayNameColor({ dayName, theme, today }) : getMonthDayNameColor({ dayName, theme });
  const templateType = `${type}DayName`;
  const handleClick = () => {
    if (isWeekDayName(type)) {
      eventBus.fire("clickDayName", { date: toFormat(dayName.dateInstance, "YYYY-MM-DD") });
    }
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("day-name-item", type),
    style
  }, /* @__PURE__ */ h$3("span", {
    className: cls({ [`holiday-${getDayName(day)}`]: isWeekend(day) }),
    style: { color },
    onClick: handleClick,
    "data-testid": `dayName-${type}-${getDayName(day)}`
  }, /* @__PURE__ */ h$3(Template, {
    template: templateType,
    param: dayName
  })));
}
const commonThemeSelector = topLevelStateSelector("common");
const monthThemeSelector = topLevelStateSelector("month");
const weekDayGridLeftSelector = (theme) => theme.week.dayGridLeft;
const weekTimeGridLeftSelector = (theme) => theme.week.timeGridLeft;
const monthMoreViewSelector = (theme) => theme.month.moreView;
const monthGridCellSelector = (theme) => theme.month.gridCell;
const DEFAULT_COMMON_THEME = {
  border: "1px solid #e5e5e5",
  backgroundColor: "white",
  holiday: {
    color: "#ff4040"
  },
  saturday: {
    color: "#333"
  },
  dayName: {
    color: "#333"
  },
  today: {
    color: "#fff"
  },
  gridSelection: {
    backgroundColor: "rgba(81, 92, 230, 0.05)",
    border: "1px solid #515ce6"
  }
};
const DEFAULT_WEEK_THEME = {
  dayName: {
    borderLeft: "none",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  today: {
    color: "inherit",
    backgroundColor: "rgba(81, 92, 230, 0.05)"
  },
  pastDay: {
    color: "#bbb"
  },
  panelResizer: {
    border: "1px solid #e5e5e5"
  },
  dayGrid: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  dayGridLeft: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit",
    width: "72px"
  },
  timeGrid: {
    borderRight: "1px solid #e5e5e5"
  },
  timeGridLeft: {
    backgroundColor: "inherit",
    borderRight: "1px solid #e5e5e5",
    width: "72px"
  },
  timeGridLeftAdditionalTimezone: {
    backgroundColor: "white"
  },
  timeGridHalfHourLine: {
    borderBottom: "none"
  },
  timeGridHourLine: {
    borderBottom: "1px solid #e5e5e5"
  },
  nowIndicatorLabel: {
    color: "#515ce6"
  },
  nowIndicatorPast: {
    border: "1px dashed #515ce6"
  },
  nowIndicatorBullet: {
    backgroundColor: "#515ce6"
  },
  nowIndicatorToday: {
    border: "1px solid #515ce6"
  },
  nowIndicatorFuture: {
    border: "none"
  },
  pastTime: {
    color: "#bbb"
  },
  futureTime: {
    color: "#333"
  },
  gridSelection: {
    color: "#515ce6"
  }
};
const DEFAULT_MONTH_THEME = {
  dayName: {
    borderLeft: "none",
    backgroundColor: "inherit"
  },
  holidayExceptThisMonth: {
    color: "rgba(255, 64, 64, 0.4)"
  },
  dayExceptThisMonth: {
    color: "rgba(51, 51, 51, 0.4)"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  moreView: {
    border: "1px solid #d5d5d5",
    boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    width: null,
    height: null
  },
  gridCell: {
    headerHeight: 31,
    footerHeight: null
  },
  moreViewTitle: {
    backgroundColor: "inherit"
  }
};
function createCommonTheme(commonTheme = {}) {
  return {
    common: mergeObject(DEFAULT_COMMON_THEME, commonTheme)
  };
}
function createThemeDispatch(set) {
  return {
    setTheme: (theme) => {
      set(produce((state) => {
        state.common = mergeObject(state.common, theme.common);
        state.week = mergeObject(state.week, theme.week);
        state.month = mergeObject(state.month, theme.month);
      }));
    },
    setCommonTheme: (commonTheme) => {
      set(produce((state) => {
        state.common = mergeObject(state.common, commonTheme);
      }));
    },
    setWeekTheme: (weekTheme) => {
      set(produce((state) => {
        state.week = mergeObject(state.week, weekTheme);
      }));
    },
    setMonthTheme: (monthTheme) => {
      set(produce((state) => {
        state.month = mergeObject(state.month, monthTheme);
      }));
    }
  };
}
function createMonthTheme(monthTheme = {}) {
  return {
    month: mergeObject(DEFAULT_MONTH_THEME, monthTheme)
  };
}
function createWeekTheme(weekTheme = {}) {
  return {
    week: mergeObject(DEFAULT_WEEK_THEME, weekTheme)
  };
}
const themeStoreCreator = (themeOptions = {}) => (set) => {
  return __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, createCommonTheme(themeOptions == null ? void 0 : themeOptions.common)), createWeekTheme(themeOptions == null ? void 0 : themeOptions.week)), createMonthTheme(themeOptions == null ? void 0 : themeOptions.month)), {
    dispatch: __spreadValues({}, createThemeDispatch(set))
  });
};
const initThemeStore = (themeOptions = {}) => createStore(themeStoreCreator(themeOptions));
const {
  StoreProvider: ThemeProvider,
  useInternalStore: useInternalThemeStore,
  useStore: useTheme
} = createStoreContext();
function useCommonTheme() {
  return useTheme(commonThemeSelector);
}
function useMonthTheme() {
  return useTheme(monthThemeSelector);
}
function weekDayNameSelector(theme) {
  return {
    common: {
      saturday: theme.common.saturday,
      holiday: theme.common.holiday,
      today: theme.common.today,
      dayName: theme.common.dayName
    },
    week: {
      pastDay: theme.week.pastDay,
      today: theme.week.today,
      dayName: theme.week.dayName
    }
  };
}
function monthDayNameSelector(theme) {
  return {
    common: {
      saturday: theme.common.saturday,
      holiday: theme.common.holiday,
      today: theme.common.today,
      dayName: theme.common.dayName
    },
    month: {
      dayName: theme.month.dayName
    }
  };
}
function GridHeader({
  dayNames,
  marginLeft = DEFAULT_DAY_NAME_MARGIN_LEFT,
  rowStyleInfo,
  type = "month"
}) {
  var _a, _b;
  const theme = useTheme(type === "month" ? monthDayNameSelector : weekDayNameSelector);
  const _c = (_b = (_a = theme[type]) == null ? void 0 : _a.dayName) != null ? _b : {}, { backgroundColor = "white", borderLeft = null } = _c, rest = __objRest(_c, ["backgroundColor", "borderLeft"]);
  const { borderTop = null, borderBottom = null } = rest;
  return /* @__PURE__ */ h$3("div", {
    "data-testid": `grid-header-${type}`,
    className: cls("day-names", type),
    style: {
      backgroundColor,
      borderTop,
      borderBottom
    }
  }, /* @__PURE__ */ h$3("div", {
    className: cls("day-name-container"),
    style: { marginLeft }
  }, dayNames.map((dayName, index) => /* @__PURE__ */ h$3(DayName, {
    type,
    key: `dayNames-${dayName.day}`,
    dayName,
    style: {
      width: toPercent(rowStyleInfo[index].width),
      left: toPercent(rowStyleInfo[index].left),
      borderLeft
    },
    theme
  }))));
}
const DEFAULT_VISIBLE_WEEKS = 6;
var CellBarType = /* @__PURE__ */ ((CellBarType2) => {
  CellBarType2["header"] = "header";
  CellBarType2["footer"] = "footer";
  return CellBarType2;
})(CellBarType || {});
function getCollisionGroup(events, usingTravelTime = true) {
  const collisionGroups = [];
  let previousEventList;
  if (!events.length) {
    return collisionGroups;
  }
  collisionGroups[0] = [events[0].cid()];
  events.slice(1).forEach((event, index) => {
    previousEventList = events.slice(0, index + 1).reverse();
    const found = previousEventList.find((previous) => event.collidesWith(previous, usingTravelTime));
    if (!found) {
      collisionGroups.push([event.cid()]);
    } else {
      collisionGroups.slice().reverse().some((group) => {
        if (~group.indexOf(found.cid())) {
          group.push(event.cid());
          return true;
        }
        return false;
      });
    }
  });
  return collisionGroups;
}
function getLastRowInColumn(matrix, col) {
  let { length: row } = matrix;
  while (row > 0) {
    row -= 1;
    if (!isUndefined_1(matrix[row][col])) {
      return row;
    }
  }
  return -1;
}
function getMatrices(collection, collisionGroups, usingTravelTime = true) {
  const result = [];
  collisionGroups.forEach((group) => {
    const matrix = [[]];
    group.forEach((eventID) => {
      const event = collection.get(eventID);
      let col = 0;
      let found = false;
      let nextRow;
      let lastRowInColumn;
      while (!found) {
        lastRowInColumn = getLastRowInColumn(matrix, col);
        if (lastRowInColumn === -1) {
          matrix[0].push(event);
          found = true;
        } else if (!event.collidesWith(matrix[lastRowInColumn][col], usingTravelTime)) {
          nextRow = lastRowInColumn + 1;
          if (isUndefined_1(matrix[nextRow])) {
            matrix[nextRow] = [];
          }
          matrix[nextRow][col] = event;
          found = true;
        }
        col += 1;
      }
    });
    result.push(matrix);
  });
  return result;
}
function getEventInDateRangeFilter(start, end) {
  return (model) => {
    const ownStarts = model.getStarts();
    const ownEnds = model.getEnds();
    return !(ownEnds < start || ownStarts > end);
  };
}
function positionUIModels(start, end, matrices, iteratee) {
  const ymdListToRender = makeDateRange(start, end, MS_PER_DAY).map((date2) => toFormat(date2, "YYYYMMDD"));
  matrices.forEach((matrix) => {
    matrix.forEach((column) => {
      column.forEach((uiModel, index) => {
        if (!uiModel) {
          return;
        }
        const ymd = toFormat(uiModel.getStarts(), "YYYYMMDD");
        const dateLength = makeDateRange(toStartOfDay(uiModel.getStarts()), toEndOfDay(uiModel.getEnds()), MS_PER_DAY).length;
        uiModel.top = index;
        uiModel.left = ymdListToRender.indexOf(ymd);
        uiModel.width = dateLength;
        iteratee == null ? void 0 : iteratee(uiModel);
      });
    });
  });
}
function limit$1(start, end, uiModel) {
  if (uiModel.getStarts() < start) {
    uiModel.exceedLeft = true;
    uiModel.renderStarts = new TZDate(start);
  }
  if (uiModel.getEnds() > end) {
    uiModel.exceedRight = true;
    uiModel.renderEnds = new TZDate(end);
  }
  return uiModel;
}
function limitRenderRange(start, end, uiModelColl) {
  if (uiModelColl instanceof Collection) {
    uiModelColl.each((uiModel) => {
      limit$1(start, end, uiModel);
      return true;
    });
    return null;
  }
  return limit$1(start, end, uiModelColl);
}
function convertToUIModel(eventCollection) {
  const uiModelColl = new Collection((uiModel) => {
    return uiModel.cid();
  });
  eventCollection.each(function(event) {
    uiModelColl.add(new EventUIModel(event));
  });
  return uiModelColl;
}
function _isAllday({ model }) {
  return model.isAllday || model.hasMultiDates;
}
function _isNotAllday(uiModel) {
  return !_isAllday(uiModel);
}
function _weightTopValue(uiModel) {
  uiModel.top = uiModel.top || 0;
  uiModel.top += 1;
}
function _adjustRenderRange(start, end, uiModelColl) {
  uiModelColl.each((uiModel) => {
    if (uiModel.model.isAllday || uiModel.model.hasMultiDates) {
      limitRenderRange(toStartOfDay(start), toEndOfDay(end), uiModel);
    }
  });
}
function _getAlldayMaxTopIndexAtYMD(idsOfDay, ymd, uiModelAlldayColl) {
  const topIndexesInDate = [];
  idsOfDay[ymd].forEach((cid) => {
    uiModelAlldayColl.doWhenHas(cid, (uiModel) => {
      topIndexesInDate.push(uiModel.top);
    });
  });
  if (topIndexesInDate.length > 0) {
    return Math.max(...topIndexesInDate);
  }
  return 0;
}
function _adjustTimeTopIndex(idsOfDay, uiModelColl) {
  const vAlldayColl = uiModelColl.filter(_isAllday);
  const sortedTimeEvents = uiModelColl.filter(_isNotAllday).sort(array.compare.event.asc);
  const maxIndexInYMD = {};
  sortedTimeEvents.forEach((timeUIModel) => {
    const eventYMD = toFormat(timeUIModel.getStarts(), "YYYYMMDD");
    let alldayMaxTopInYMD = maxIndexInYMD[eventYMD];
    if (isUndefined_1(alldayMaxTopInYMD)) {
      alldayMaxTopInYMD = maxIndexInYMD[eventYMD] = _getAlldayMaxTopIndexAtYMD(idsOfDay, eventYMD, vAlldayColl);
    }
    maxIndexInYMD[eventYMD] = timeUIModel.top = alldayMaxTopInYMD + 1;
  });
}
function _stackTimeFromTop(idsOfDay, uiModelColl) {
  const uiModelAlldayColl = uiModelColl.filter(_isAllday);
  const sortedTimeEvents = uiModelColl.filter(_isNotAllday).sort(array.compare.event.asc);
  const indiceInYMD = {};
  sortedTimeEvents.forEach((timeUIModel) => {
    const eventYMD = toFormat(timeUIModel.getStarts(), "YYYYMMDD");
    let topArrayInYMD = indiceInYMD[eventYMD];
    if (isUndefined_1(topArrayInYMD)) {
      topArrayInYMD = indiceInYMD[eventYMD] = [];
      idsOfDay[eventYMD].forEach((cid) => {
        uiModelAlldayColl.doWhenHas(cid, (uiModel) => {
          topArrayInYMD.push(uiModel.top);
        });
      });
    }
    if (topArrayInYMD.indexOf(timeUIModel.top) >= 0) {
      const maxTopInYMD = Math.max(...topArrayInYMD) + 1;
      for (let i2 = 1; i2 <= maxTopInYMD; i2 += 1) {
        timeUIModel.top = i2;
        if (topArrayInYMD.indexOf(timeUIModel.top) < 0) {
          break;
        }
      }
    }
    topArrayInYMD.push(timeUIModel.top);
  });
}
function _addMultiDatesInfo$1(uiModelColl) {
  uiModelColl.each((uiModel) => {
    const { model } = uiModel;
    const start = model.getStarts();
    const end = model.getEnds();
    model.hasMultiDates = !isSameDate(start, end);
    if (!model.isAllday && model.hasMultiDates) {
      uiModel.renderStarts = toStartOfDay(start);
      uiModel.renderEnds = toEndOfDay(end);
    }
  });
}
function findByDateRange$1(calendarData, condition) {
  const { start, end, andFilters = [], alldayFirstMode = false } = condition;
  const { events, idsOfDay } = calendarData;
  const filterFn = Collection.and(...[getEventInDateRangeFilter(start, end)].concat(andFilters));
  const coll = events.filter(filterFn);
  const uiModelColl = convertToUIModel(coll);
  _addMultiDatesInfo$1(uiModelColl);
  _adjustRenderRange(start, end, uiModelColl);
  const vList = uiModelColl.sort(array.compare.event.asc);
  const usingTravelTime = false;
  const collisionGroup = getCollisionGroup(vList, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroup, usingTravelTime);
  positionUIModels(start, end, matrices, _weightTopValue);
  if (alldayFirstMode) {
    _adjustTimeTopIndex(idsOfDay, uiModelColl);
  } else {
    _stackTimeFromTop(idsOfDay, uiModelColl);
  }
  return matrices;
}
function _makeHourRangeFilter(hStart, hEnd) {
  return (uiModel) => {
    const ownHourStart = uiModel.getStarts();
    const ownHourEnd = uiModel.getEnds();
    const ownHourStartTime = ownHourStart.getTime();
    const ownHourEndTime = ownHourEnd.getTime();
    const yyyy = ownHourStart.getFullYear();
    const mm = ownHourStart.getMonth();
    const dd = ownHourStart.getDate();
    const hourStart = new TZDate(yyyy, mm, dd).setHours(hStart);
    const hourEnd = new TZDate(yyyy, mm, dd).setHours(hEnd);
    return ownHourStartTime >= hourStart && ownHourStartTime < hourEnd || ownHourEndTime > hourStart && ownHourEndTime <= hourEnd || ownHourStartTime < hourStart && ownHourEndTime > hourStart || ownHourEndTime > hourEnd && ownHourStartTime < hourEnd;
  };
}
function _makeGetUIModelFuncForTimeView(hourStart, hourEnd) {
  if (hourStart === 0 && hourEnd === 24) {
    return (uiModelColl) => {
      return uiModelColl.sort(array.compare.event.asc);
    };
  }
  return (uiModelColl) => {
    return uiModelColl.filter(_makeHourRangeFilter(hourStart, hourEnd)).sort(array.compare.event.asc);
  };
}
function splitEventByDateRange(idsOfDay, start, end, uiModelColl) {
  const result = {};
  const range2 = getDateRange(start, end);
  range2.forEach((date2) => {
    const ymd = toFormat(date2, "YYYYMMDD");
    const ids = idsOfDay[ymd];
    const collection = result[ymd] = new Collection((event) => {
      return event.cid();
    });
    if (ids && ids.length) {
      ids.forEach((id) => {
        uiModelColl.doWhenHas(id, (event) => {
          collection.add(event);
        });
      });
    }
  }, {});
  return result;
}
function getUIModelForTimeView(idsOfDay, condition) {
  const { start, end, uiModelTimeColl, hourStart, hourEnd } = condition;
  const ymdSplitted = splitEventByDateRange(idsOfDay, start, end, uiModelTimeColl);
  const result = {};
  const _getUIModel = _makeGetUIModelFuncForTimeView(hourStart, hourEnd);
  const usingTravelTime = true;
  Object.entries(ymdSplitted).forEach(([ymd, uiModelColl]) => {
    const uiModels = _getUIModel(uiModelColl);
    const collisionGroups = getCollisionGroup(uiModels, usingTravelTime);
    const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
    result[ymd] = matrices;
  });
  return result;
}
function _addMultiDatesInfo(uiModelColl) {
  uiModelColl.each((uiModel) => {
    const { model } = uiModel;
    model.hasMultiDates = true;
    uiModel.renderStarts = toStartOfDay(model.getStarts());
    uiModel.renderEnds = toEndOfDay(model.getEnds());
  });
}
function getUIModelForAlldayView(start, end, uiModelColl) {
  if (!uiModelColl || !uiModelColl.size) {
    return [];
  }
  _addMultiDatesInfo(uiModelColl);
  limitRenderRange(start, end, uiModelColl);
  const uiModels = uiModelColl.sort(array.compare.event.asc);
  const usingTravelTime = true;
  const collisionGroups = getCollisionGroup(uiModels, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
  positionUIModels(start, end, matrices);
  return matrices;
}
function findByDateRange(calendarData, condition) {
  var _a, _b;
  const { start, end, panels, andFilters = [], options } = condition;
  const { events, idsOfDay } = calendarData;
  const hourStart = (_a = options == null ? void 0 : options.hourStart) != null ? _a : 0;
  const hourEnd = (_b = options == null ? void 0 : options.hourEnd) != null ? _b : 24;
  const filterFn = Collection.and(...[getEventInDateRangeFilter(start, end)].concat(andFilters));
  const uiModelColl = convertToUIModel(events.filter(filterFn));
  const group = uiModelColl.groupBy(filterByCategory);
  return panels.reduce((acc, cur) => {
    const { name, type } = cur;
    if (isNil(group[name])) {
      return acc;
    }
    return __spreadProps(__spreadValues({}, acc), {
      [name]: type === "daygrid" ? getUIModelForAlldayView(start, end, group[name]) : getUIModelForTimeView(idsOfDay, {
        start,
        end,
        uiModelTimeColl: group[name],
        hourStart,
        hourEnd
      })
    });
  }, {
    milestone: [],
    task: [],
    allday: [],
    time: {}
  });
}
function limit(value, minArr, maxArr) {
  const v2 = Math.max(value, ...minArr);
  return Math.min(v2, ...maxArr);
}
function ratio(a2, b2, y2) {
  return b2 * y2 / a2;
}
function isBetween$1(value, min2, max2) {
  return min2 <= value && value <= max2;
}
const EVENT_HEIGHT = 22;
const TOTAL_WIDTH = 100;
function forEachMatrix3d(matrices, iteratee) {
  matrices.forEach((matrix) => {
    matrix.forEach((row) => {
      row.forEach((value, index) => {
        iteratee(value, index);
      });
    });
  });
}
function isWithinHeight(containerHeight, eventHeight) {
  return ({ top }) => containerHeight >= top * eventHeight;
}
function isExceededHeight(containerHeight, eventHeight) {
  return ({ top }) => containerHeight < top * eventHeight;
}
function getExceedCount(uiModel, containerHeight, eventHeight) {
  return uiModel.filter(isExceededHeight(containerHeight, eventHeight)).length;
}
const getWeekendCount = (row) => row.filter((cell) => isWeekend(cell.getDay())).length;
function getGridWidthAndLeftPercentValues(row, narrowWeekend, totalWidth) {
  const weekendCount = getWeekendCount(row);
  const gridCellCount = row.length;
  const isAllWeekend = weekendCount === gridCellCount;
  const widthPerDay = totalWidth / (narrowWeekend && !isAllWeekend ? gridCellCount * 2 - weekendCount : gridCellCount);
  const widthList = row.map((cell) => {
    const day = cell.getDay();
    if (!narrowWeekend || isAllWeekend) {
      return widthPerDay;
    }
    return isWeekend(day) ? widthPerDay : widthPerDay * 2;
  });
  const leftList = widthList.reduce((acc, _2, index) => index ? [...acc, acc[index - 1] + widthList[index - 1]] : [0], []);
  return {
    widthList,
    leftList
  };
}
function getWidth(widthList, start, end) {
  return widthList.reduce((acc, width, index) => {
    if (start <= index && index <= end) {
      return acc + width;
    }
    return acc;
  }, 0);
}
const isInGrid = (gridDate) => {
  return (uiModel) => {
    const eventStart = toStartOfDay(uiModel.getStarts());
    const eventEnd = toStartOfDay(uiModel.getEnds());
    return eventStart <= gridDate && gridDate <= eventEnd;
  };
};
function getGridDateIndex(date2, row) {
  return row.findIndex((cell) => date2 >= toStartOfDay(cell) && date2 <= toEndOfDay(cell));
}
const getLeftAndWidth = (startIndex, endIndex, row, narrowWeekend) => {
  const { widthList } = getGridWidthAndLeftPercentValues(row, narrowWeekend, TOTAL_WIDTH);
  return {
    left: !startIndex ? 0 : getWidth(widthList, 0, startIndex - 1),
    width: getWidth(widthList, startIndex != null ? startIndex : 0, endIndex < 0 ? row.length - 1 : endIndex)
  };
};
const getEventLeftAndWidth = (start, end, row, narrowWeekend) => {
  const { widthList } = getGridWidthAndLeftPercentValues(row, narrowWeekend, TOTAL_WIDTH);
  let gridStartIndex = 0;
  let gridEndIndex = row.length - 1;
  row.forEach((cell, index) => {
    if (cell <= start) {
      gridStartIndex = index;
    }
    if (cell <= end) {
      gridEndIndex = index;
    }
  });
  return {
    width: getWidth(widthList, gridStartIndex, gridEndIndex),
    left: !gridStartIndex ? 0 : getWidth(widthList, 0, gridStartIndex - 1)
  };
};
function getEventUIModelWithPosition(uiModel, row, narrowWeekend = false) {
  const modelStart = uiModel.getStarts();
  const modelEnd = uiModel.getEnds();
  const { width, left } = getEventLeftAndWidth(modelStart, modelEnd, row, narrowWeekend);
  uiModel.width = width;
  uiModel.left = left;
  return uiModel;
}
function getRenderedEventUIModels(row, calendarData, narrowWeekend) {
  const { idsOfDay } = calendarData;
  const eventUIModels = findByDateRange$1(calendarData, {
    start: row[0],
    end: toEndOfDay(row[row.length - 1])
  });
  const idEventModelMap = [];
  forEachMatrix3d(eventUIModels, (uiModel) => {
    const cid = uiModel.model.cid();
    idEventModelMap[cid] = getEventUIModelWithPosition(uiModel, row, narrowWeekend);
  });
  const gridDateEventModelMap = Object.keys(idsOfDay).reduce((acc, ymd) => {
    const ids = idsOfDay[ymd];
    acc[ymd] = ids.map((cid) => idEventModelMap[cid]).filter((vm) => !!vm);
    return acc;
  }, {});
  return {
    uiModels: Object.values(idEventModelMap),
    gridDateEventModelMap
  };
}
const getDayGridEventModels = (eventModels, row, narrowWeekend = false) => {
  forEachMatrix3d(eventModels, (uiModel) => {
    const modelStart = uiModel.getStarts();
    const modelEnd = uiModel.getEnds();
    const { width, left } = getEventLeftAndWidth(modelStart, modelEnd, row, narrowWeekend);
    uiModel.width = width;
    uiModel.left = left;
    uiModel.top += 1;
  });
  return flattenMatrix3d(eventModels);
};
const getModels = (models) => models.filter((model) => !!model);
function flattenMatrix3d(matrices) {
  return matrices.flatMap((matrix) => matrix.flatMap((models) => getModels(models)));
}
const getTimeGridEventModels = (eventMatrix) => Array.from(new Set(Object.values(eventMatrix).reduce((result, matrix3d) => result.concat(...flattenMatrix3d(matrix3d)), [])));
const getWeekViewEvents = (row, calendarData, {
  narrowWeekend,
  hourStart,
  hourEnd,
  weekStartDate,
  weekEndDate
}) => {
  const panels = [
    {
      name: "milestone",
      type: "daygrid",
      show: true
    },
    {
      name: "task",
      type: "daygrid",
      show: true
    },
    {
      name: "allday",
      type: "daygrid",
      show: true
    },
    {
      name: "time",
      type: "timegrid",
      show: true
    }
  ];
  const eventModels = findByDateRange(calendarData, {
    start: weekStartDate,
    end: weekEndDate,
    panels,
    andFilters: [],
    options: {
      hourStart,
      hourEnd
    }
  });
  return Object.keys(eventModels).reduce((acc, cur) => {
    const events = eventModels[cur];
    return __spreadProps(__spreadValues({}, acc), {
      [cur]: Array.isArray(events) ? getDayGridEventModels(events, row, narrowWeekend) : getTimeGridEventModels(events)
    });
  }, {
    milestone: [],
    allday: [],
    task: [],
    time: []
  });
};
function createDateMatrixOfMonth(renderTargetDate, {
  workweek = false,
  visibleWeeksCount = 0,
  startDayOfWeek = 0,
  isAlways6Weeks = true
}) {
  const targetDate = new TZDate(renderTargetDate);
  const shouldApplyVisibleWeeksCount = visibleWeeksCount > 0;
  const baseDate = shouldApplyVisibleWeeksCount ? targetDate : toStartOfMonth(targetDate);
  const firstDateOfMatrix = subtractDate(baseDate, baseDate.getDay() - startDayOfWeek + (baseDate.getDay() < startDayOfWeek ? WEEK_DAYS : 0));
  const dayOfFirstDateOfMatrix = firstDateOfMatrix.getDay();
  const totalDatesCountOfMonth = toEndOfMonth(targetDate).getDate();
  const initialDifference = getDateDifference(firstDateOfMatrix, baseDate);
  const totalDatesOfMatrix = totalDatesCountOfMonth + Math.abs(initialDifference);
  let totalWeeksOfMatrix = DEFAULT_VISIBLE_WEEKS;
  if (shouldApplyVisibleWeeksCount) {
    totalWeeksOfMatrix = visibleWeeksCount;
  } else if (isAlways6Weeks === false) {
    totalWeeksOfMatrix = Math.ceil(totalDatesOfMatrix / WEEK_DAYS);
  }
  return range_1(0, totalWeeksOfMatrix).map((weekIndex) => range_1(0, WEEK_DAYS).reduce((weekRow, dayOfWeek) => {
    const steps = weekIndex * WEEK_DAYS + dayOfWeek;
    const currentDay = (steps + dayOfFirstDateOfMatrix) % WEEK_DAYS;
    if (!workweek || workweek && !isWeekend(currentDay)) {
      const date2 = addDate(firstDateOfMatrix, steps);
      weekRow.push(date2);
    }
    return weekRow;
  }, []));
}
function getWeekDates(renderDate, { startDayOfWeek = Day$2.SUN, workweek }) {
  const now = toStartOfDay(renderDate);
  const nowDay = now.getDay();
  const prevDateCount = nowDay - startDayOfWeek;
  const weekDayList = prevDateCount >= 0 ? range_1(-prevDateCount, WEEK_DAYS - prevDateCount) : range_1(-WEEK_DAYS - prevDateCount, -prevDateCount);
  return weekDayList.reduce((acc, day) => {
    const date2 = addDate(now, day);
    if (workweek && isWeekend(date2.getDay())) {
      return acc;
    }
    acc.push(date2);
    return acc;
  }, []);
}
function getColumnsData(datesOfWeek, narrowWeekend = false) {
  const datesCount = datesOfWeek.length;
  const shouldApplyNarrowWeekend = datesCount > 5 && narrowWeekend;
  const defaultWidthByColumns = shouldApplyNarrowWeekend ? 100 / (datesCount - 1) : 100 / datesCount;
  return datesOfWeek.map((date2) => {
    const width = shouldApplyNarrowWeekend && isWeekend(date2.getDay()) ? defaultWidthByColumns / 2 : defaultWidthByColumns;
    return {
      date: date2,
      width
    };
  }).reduce((result, currentDateAndWidth, index) => {
    const prev = result[index - 1];
    result.push(__spreadProps(__spreadValues({}, currentDateAndWidth), {
      left: index === 0 ? 0 : prev.left + prev.width
    }));
    return result;
  }, []);
}
function createTimeGridData(datesOfWeek, options) {
  var _a;
  const columns = getColumnsData(datesOfWeek, (_a = options.narrowWeekend) != null ? _a : false);
  const steps = (options.hourEnd - options.hourStart) * 2;
  const baseHeight = 100 / steps;
  const rows = range_1(steps).map((step, index) => {
    const isOdd = index % 2 === 1;
    const hour = options.hourStart + Math.floor(step / 2);
    const startTime = `${hour}:${isOdd ? "30" : "00"}`.padStart(5, "0");
    const endTime = (isOdd ? `${hour + 1}:00` : `${hour}:30`).padStart(5, "0");
    return {
      top: baseHeight * index,
      height: baseHeight,
      startTime,
      endTime
    };
  });
  return {
    columns,
    rows
  };
}
function getRelativeMousePosition({ clientX, clientY }, { left, top, clientLeft, clientTop }) {
  return [clientX - left - clientLeft, clientY - top - clientTop];
}
function getIndexFromPosition(arrayLength, maxRange, currentPosition) {
  const calculatedIndex = Math.floor(ratio(maxRange, arrayLength, currentPosition));
  return limit(calculatedIndex, [0], [arrayLength - 1]);
}
function createGridPositionFinder({
  rowsCount,
  columnsCount,
  container,
  narrowWeekend = false,
  startDayOfWeek = Day$2.SUN
}) {
  if (isNil(container)) {
    return () => null;
  }
  const dayRange = range_1(startDayOfWeek, startDayOfWeek + columnsCount).map((day) => day % WEEK_DAYS);
  const narrowColumnCount = narrowWeekend ? dayRange.filter((day) => isWeekend(day)).length : 0;
  return function gridPositionFinder(mousePosition) {
    const {
      left: containerLeft,
      top: containerTop,
      width: containerWidth,
      height: containerHeight
    } = container.getBoundingClientRect();
    const [left, top] = getRelativeMousePosition(mousePosition, {
      left: containerLeft,
      top: containerTop,
      clientLeft: container.clientLeft,
      clientTop: container.clientTop
    });
    if (left < 0 || top < 0 || left > containerWidth || top > containerHeight) {
      return null;
    }
    const unitWidth = narrowWeekend ? containerWidth / (columnsCount - narrowColumnCount + 1) : containerWidth / columnsCount;
    const columnWidthList = dayRange.map((dayOfWeek) => narrowWeekend && isWeekend(dayOfWeek) ? unitWidth / 2 : unitWidth);
    const columnLeftList = [];
    columnWidthList.forEach((width, index) => {
      if (index === 0) {
        columnLeftList.push(0);
      } else {
        columnLeftList.push(columnLeftList[index - 1] + columnWidthList[index - 1]);
      }
    });
    const columnIndex = findLastIndex(columnLeftList, (columnLeft) => left >= columnLeft);
    return {
      columnIndex,
      rowIndex: getIndexFromPosition(rowsCount, containerHeight, top)
    };
  };
}
function commonGridSelectionSelector(theme) {
  return theme.common.gridSelection;
}
function GridSelection$1({ type, gridSelectionData, weekDates, narrowWeekend }) {
  const { backgroundColor, border } = useTheme(commonGridSelectionSelector);
  const { startCellIndex, endCellIndex } = gridSelectionData;
  const { left, width } = getLeftAndWidth(Math.min(startCellIndex, endCellIndex), Math.max(startCellIndex, endCellIndex), weekDates, narrowWeekend);
  const style = {
    left: toPercent(left),
    width: toPercent(width),
    height: toPercent(100),
    backgroundColor,
    border
  };
  return width > 0 ? /* @__PURE__ */ h$3("div", {
    className: cls(type, "grid-selection"),
    style
  }) : null;
}
function createSortedGridSelection(initPos, currentPos, isReversed) {
  return {
    startColumnIndex: isReversed ? currentPos.columnIndex : initPos.columnIndex,
    startRowIndex: isReversed ? currentPos.rowIndex : initPos.rowIndex,
    endColumnIndex: isReversed ? initPos.columnIndex : currentPos.columnIndex,
    endRowIndex: isReversed ? initPos.rowIndex : currentPos.rowIndex
  };
}
function calculateTimeGridSelectionByCurrentIndex(timeGridSelection, columnIndex, maxRowIndex) {
  if (isNil(timeGridSelection)) {
    return null;
  }
  const { startColumnIndex, endColumnIndex, endRowIndex, startRowIndex } = timeGridSelection;
  if (!isBetween$1(columnIndex, startColumnIndex, endColumnIndex)) {
    return null;
  }
  const hasMultipleColumns = startColumnIndex !== endColumnIndex;
  const isStartingColumn = columnIndex === startColumnIndex;
  const resultGridSelection = {
    startRowIndex,
    endRowIndex,
    isSelectingMultipleColumns: hasMultipleColumns,
    isStartingColumn
  };
  if (startColumnIndex < columnIndex && columnIndex < endColumnIndex) {
    resultGridSelection.startRowIndex = 0;
    resultGridSelection.endRowIndex = maxRowIndex;
  } else if (startColumnIndex !== endColumnIndex) {
    if (startColumnIndex === columnIndex) {
      resultGridSelection.endRowIndex = maxRowIndex;
    } else if (endColumnIndex === columnIndex) {
      resultGridSelection.startRowIndex = 0;
    }
  }
  return resultGridSelection;
}
const timeGridSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.columnIndex > currentPos.columnIndex || initPos.columnIndex === currentPos.columnIndex && initPos.rowIndex > currentPos.rowIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const timeGridData = dateCollection;
    const startDate = setTimeStrToDate(timeGridData.columns[gridSelection.startColumnIndex].date, timeGridData.rows[gridSelection.startRowIndex].startTime);
    const endDate = setTimeStrToDate(timeGridData.columns[gridSelection.endColumnIndex].date, timeGridData.rows[gridSelection.endRowIndex].endTime);
    return [startDate, endDate];
  },
  calculateSelection: calculateTimeGridSelectionByCurrentIndex
};
function calculateDayGridMonthSelectionByCurrentIndex(gridSelection, currentIndex, weekLength) {
  if (!(isPresent(gridSelection) && isPresent(currentIndex) && isPresent(weekLength))) {
    return null;
  }
  const { startRowIndex, startColumnIndex, endRowIndex, endColumnIndex } = gridSelection;
  if (!isBetween$1(currentIndex, Math.min(startRowIndex, endRowIndex), Math.max(startRowIndex, endRowIndex))) {
    return null;
  }
  let startCellIndex = startColumnIndex;
  let endCellIndex = endColumnIndex;
  if (startRowIndex < currentIndex) {
    startCellIndex = 0;
  }
  if (endRowIndex > currentIndex) {
    endCellIndex = weekLength - 1;
  }
  return { startCellIndex, endCellIndex };
}
const dayGridMonthSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.rowIndex > currentPos.rowIndex || initPos.rowIndex === currentPos.rowIndex && initPos.columnIndex > currentPos.columnIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const dateMatrix = dateCollection;
    return [
      dateMatrix[gridSelection.startRowIndex][gridSelection.startColumnIndex],
      dateMatrix[gridSelection.endRowIndex][gridSelection.endColumnIndex]
    ];
  },
  calculateSelection: calculateDayGridMonthSelectionByCurrentIndex
};
function calculateAlldayGridRowSelectionByCurrentIndex(gridSelection) {
  return isPresent(gridSelection) ? {
    startCellIndex: gridSelection.startColumnIndex,
    endCellIndex: gridSelection.endColumnIndex
  } : null;
}
const alldayGridRowSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.columnIndex > currentPos.columnIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const weekDates = dateCollection;
    return [weekDates[gridSelection.startColumnIndex], weekDates[gridSelection.endColumnIndex]];
  },
  calculateSelection: calculateAlldayGridRowSelectionByCurrentIndex
};
function dayGridWeekSelectionSelector(state) {
  return alldayGridRowSelectionHelper.calculateSelection(state.gridSelection.dayGridWeek);
}
function AlldayGridSelection({ weekDates, narrowWeekend }) {
  const calculatedGridSelection = useStore(dayGridWeekSelectionSelector);
  if (isNil(calculatedGridSelection)) {
    return null;
  }
  return /* @__PURE__ */ h$3(GridSelection$1, {
    type: "allday",
    gridSelectionData: calculatedGridSelection,
    weekDates,
    narrowWeekend
  });
}
function S(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if (e2 !== "__source" && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if (r2 !== "__source" && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E(n2) {
  this.props = n2;
}
function g$1(n2, t2) {
  function e2(n3) {
    var e3 = this.props.ref, r3 = e3 == n3.ref;
    return !r3 && e3 && (e3.call ? e3(null) : e3.current = null), t2 ? !t2(this.props, n3) || !r3 : C(this.props, n3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = e2, h$3(n2, t3);
  }
  return r2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}
(E.prototype = new d$3()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var w = l$3.__b;
l$3.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w && w(n2);
};
var x$1 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function R(n2) {
  function t2(t3) {
    var e2 = S({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = x$1, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var A = l$3.__e;
l$3.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return t2.__e == null && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  A(n2, t2, e2, r2);
};
var O = l$3.unmount;
function T() {
  this.__u = 0, this.t = null, this.__b = null;
}
function L(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function D() {
  this.u = null, this.o = null;
}
l$3.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && n2.__h === true && (n2.type = null), O && O(n2);
}, (T.prototype = new d$3()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(e2);
  var u2 = L(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = function n4(t4, e3, r3) {
          return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n4(t5, e3, r3);
          }), t4.__c && t4.__c.__P === e3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
        }(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, f2 = t2.__h === true;
  r2.__u++ || f2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, T.prototype.componentWillUnmount = function() {
  this.t = [];
}, T.prototype.render = function(n2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var e2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function n3(t3, e3, r3) {
        return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(n4) {
          typeof n4.__c == "function" && n4.__c();
        }), t3.__c.__H = null), (t3 = S({}, t3)).__c != null && (t3.__c.__P === r3 && (t3.__c.__P = e3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
          return n3(t4, e3, r3);
        })), t3;
      }(this.__b, e2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var u2 = t2.__a && h$3(p$3, null, n2.fallback);
  return u2 && (u2.__h = null), [h$3(p$3, null, t2.__a ? null : n2.children), u2];
};
var F = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function I(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function M(n2) {
  var t2 = this, e2 = n2.i;
  t2.componentWillUnmount = function() {
    P$2(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== e2 && t2.componentWillUnmount(), n2.__v ? (t2.l || (t2.i = e2, t2.l = { nodeType: 1, parentNode: e2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, insertBefore: function(n3, e3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t2.i.removeChild(n3);
  } }), P$2(h$3(I, { context: t2.context }, n2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
}
function V(n2, t2) {
  var e2 = h$3(M, { __v: n2, i: t2 });
  return e2.containerInfo = t2, e2;
}
(D.prototype = new d$3()).__a = function(n2) {
  var t2 = this, e2 = L(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), F(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, D.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = x$3(n2.children);
  n2.revealOrder && n2.revealOrder[0] === "b" && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    F(n2, e2, t2);
  });
};
var W = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $ = typeof document != "undefined", j = function(n2) {
  return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
d$3.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
  Object.defineProperty(d$3.prototype, n2, { configurable: true, get: function() {
    return this["UNSAFE_" + n2];
  }, set: function(t2) {
    Object.defineProperty(this, n2, { configurable: true, writable: true, value: t2 });
  } });
});
var H = l$3.event;
function Z() {
}
function Y() {
  return this.cancelBubble;
}
function q() {
  return this.defaultPrevented;
}
l$3.event = function(n2) {
  return H && (n2 = H(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = q, n2.nativeEvent = n2;
};
var J = { configurable: true, get: function() {
  return this.class;
} }, K = l$3.vnode;
l$3.vnode = function(n2) {
  var t2 = n2.type, e2 = n2.props, r2 = e2;
  if (typeof t2 == "string") {
    var u2 = t2.indexOf("-") === -1;
    for (var o2 in r2 = {}, e2) {
      var i2 = e2[o2];
      $ && o2 === "children" && t2 === "noscript" || o2 === "value" && "defaultValue" in e2 && i2 == null || (o2 === "defaultValue" && "value" in e2 && e2.value == null ? o2 = "value" : o2 === "download" && i2 === true ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !j(e2.type) ? o2 = "oninput" : /^onfocus$/i.test(o2) ? o2 = "onfocusin" : /^onblur$/i.test(o2) ? o2 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o2) ? o2 = o2.toLowerCase() : u2 && P.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i2 === null && (i2 = void 0), /^oninput$/i.test(o2) && (o2 = o2.toLowerCase(), r2[o2] && (o2 = "oninputCapture")), r2[o2] = i2);
    }
    t2 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = x$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.value.indexOf(n3.props.value) != -1;
    })), t2 == "select" && r2.defaultValue != null && (r2.value = x$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.multiple ? r2.defaultValue.indexOf(n3.props.value) != -1 : r2.defaultValue == n3.props.value;
    })), n2.props = r2, e2.class != e2.className && (J.enumerable = "className" in e2, e2.className != null && (r2.class = e2.className), Object.defineProperty(r2, "className", J));
  }
  n2.$$typeof = W, K && K(n2);
};
var Q = l$3.__r;
l$3.__r = function(n2) {
  Q && Q(n2), n2.__c;
};
function un(n2) {
  return !!n2.__k && (P$2(null, n2), true);
}
function ExceedCount({ index, exceedCount, isClicked, onClickExceedCount }) {
  const clickExceedCount = () => onClickExceedCount(index);
  const style = { display: isClicked ? "none" : "" };
  return exceedCount && !isClicked ? /* @__PURE__ */ h$3("span", {
    className: cls("weekday-exceed-in-week"),
    onClick: clickExceedCount,
    style
  }, /* @__PURE__ */ h$3(Template, {
    template: "weekGridFooterExceed",
    param: exceedCount
  })) : null;
}
function CollapseButton({ isClicked, isClickedIndex, onClickCollapseButton }) {
  return isClicked && isClickedIndex ? /* @__PURE__ */ h$3("span", {
    className: cls("weekday-exceed-in-week"),
    onClick: onClickCollapseButton
  }, /* @__PURE__ */ h$3(Template, {
    template: "collapseBtnTitle"
  })) : null;
}
function GridCell$1({
  width,
  left,
  index,
  exceedCount,
  isClicked,
  onClickExceedCount,
  isClickedIndex,
  onClickCollapseButton,
  isLastCell
}) {
  const { borderRight, backgroundColor } = useTheme(T$1((theme) => theme.week.dayGrid, []));
  const style = {
    width,
    left,
    borderRight: isLastCell ? "none" : borderRight,
    backgroundColor
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("panel-grid"),
    style
  }, /* @__PURE__ */ h$3(ExceedCount, {
    index,
    exceedCount,
    isClicked,
    onClickExceedCount
  }), /* @__PURE__ */ h$3(CollapseButton, {
    isClickedIndex,
    isClicked,
    onClickCollapseButton
  }));
}
const GridCells = g$1(function GridCells2({
  uiModels,
  weekDates,
  narrowWeekend,
  height,
  clickedIndex,
  isClickedCount,
  onClickExceedCount,
  onClickCollapseButton
}) {
  const eventTopMargin = 2;
  const { widthList, leftList } = getGridWidthAndLeftPercentValues(weekDates, narrowWeekend, TOTAL_WIDTH);
  const lastCellIndex = weekDates.length - 1;
  return /* @__PURE__ */ h$3(p$3, null, weekDates.map((cell, index) => {
    const width = toPercent(widthList[index]);
    const left = toPercent(leftList[index]);
    const uiModelsInCell = uiModels.filter(isInGrid(cell));
    const exceedCount = getExceedCount(uiModelsInCell, height, EVENT_HEIGHT + eventTopMargin);
    const isClickedIndex = index === clickedIndex;
    const isLastCell = index === lastCellIndex;
    return /* @__PURE__ */ h$3(GridCell$1, {
      key: `panel-grid-${cell.getDate()}`,
      width,
      left,
      index,
      exceedCount,
      isClicked: isClickedCount,
      onClickExceedCount,
      isClickedIndex,
      onClickCollapseButton,
      isLastCell
    });
  }));
});
function HorizontalEventResizeIcon({ onMouseDown }) {
  return /* @__PURE__ */ h$3("span", {
    className: `${cls("weekday-resize-handle")} ${cls("handle-y")}`,
    onMouseDown,
    "data-testid": "horizontal-event-resize-icon"
  }, /* @__PURE__ */ h$3("i", {
    className: `${cls("icon")} ${cls("ic-handle-y")}`
  }));
}
const LayoutContainerContext = B$1(null);
const LayoutContainerProvider = LayoutContainerContext.Provider;
const useLayoutContainer = () => {
  const ref = q$2(LayoutContainerContext);
  if (isUndefined_1(ref)) {
    throw new Error("LayoutContainerProvider is not found");
  }
  return ref;
};
const DRAGGING_TYPE_CONSTANTS = {
  panelResizer: "panelResizer"
};
const DRAGGING_TYPE_CREATORS = {
  resizeEvent: (area, id) => `event/${area}/resize/${id}`,
  moveEvent: (area, id) => `event/${area}/move/${id}`,
  gridSelection: (type) => `gridSelection/${type}`
};
function useCalendarById(calendarId) {
  return useStore(T$1((state) => state.calendar.calendars.find((cal) => cal.id === calendarId), [calendarId]));
}
function useCalendarColor(model) {
  var _a;
  const calendar = useCalendarById((_a = model == null ? void 0 : model.calendarId) != null ? _a : null);
  return F$2(() => ({
    color: calendar == null ? void 0 : calendar.color,
    borderColor: calendar == null ? void 0 : calendar.borderColor,
    backgroundColor: calendar == null ? void 0 : calendar.backgroundColor,
    dragBackgroundColor: calendar == null ? void 0 : calendar.dragBackgroundColor
  }), [calendar]);
}
var KEY = /* @__PURE__ */ ((KEY2) => {
  KEY2["ESCAPE"] = "Escape";
  return KEY2;
})(KEY || {});
const KEYCODE = {
  ["Escape"]: 27
};
const MINIMUM_DRAG_MOUSE_DISTANCE = 3;
function useTransientUpdate(selector, subscriber) {
  const store = useInternalStore();
  const selectorRef = s$2(selector);
  const subscriberRef = s$2(subscriber);
  _$2(() => {
    selectorRef.current = selector;
    subscriberRef.current = subscriber;
  }, [selector, subscriber]);
  _$2(() => store.subscribe((slice) => subscriberRef.current(slice), (state) => selectorRef.current(state)), [selector, store]);
}
function isKeyPressed(e2, key) {
  return e2.key ? e2.key === key : e2.keyCode === KEYCODE[key];
}
function isLeftClick(buttonNum) {
  return buttonNum === 0;
}
function isMouseMoved(initX, initY, x2, y2) {
  return Math.abs(initX - x2) >= MINIMUM_DRAG_MOUSE_DISTANCE || Math.abs(initY - y2) >= MINIMUM_DRAG_MOUSE_DISTANCE;
}
function useDrag(draggingItemType, { onInit, onDragStart, onDrag, onMouseUp, onPressESCKey } = {}) {
  const { initDrag, setDragging, cancelDrag, reset } = useDispatch("dnd");
  const store = useInternalStore();
  const dndSliceRef = s$2(store.getState().dnd);
  useTransientUpdate(dndSelector, (dndState) => {
    dndSliceRef.current = dndState;
  });
  const [isStarted, setStarted] = y$1(false);
  const handleMouseMoveRef = s$2(null);
  const handleMouseUpRef = s$2(null);
  const handleKeyDownRef = s$2(null);
  const handleMouseDown = T$1((e2) => {
    if (!isLeftClick(e2.button)) {
      return;
    }
    if (e2.currentTarget) {
      e2.currentTarget.ondragstart = function() {
        return false;
      };
    }
    e2.preventDefault();
    setStarted(true);
    initDrag({
      draggingItemType,
      initX: e2.clientX,
      initY: e2.clientY
    });
    onInit == null ? void 0 : onInit(e2, dndSliceRef.current);
  }, [onInit, draggingItemType, initDrag]);
  const handleMouseMove = T$1((e2) => {
    const {
      initX,
      initY,
      draggingState,
      draggingItemType: currentDraggingItemType
    } = dndSliceRef.current;
    if (currentDraggingItemType !== draggingItemType) {
      setStarted(false);
      reset();
      return;
    }
    if (isPresent(initX) && isPresent(initY) && !isMouseMoved(initX, initY, e2.clientX, e2.clientY)) {
      return;
    }
    if (draggingState <= DraggingState.INIT) {
      setDragging({ x: e2.clientX, y: e2.clientY });
      onDragStart == null ? void 0 : onDragStart(e2, dndSliceRef.current);
      return;
    }
    setDragging({ x: e2.clientX, y: e2.clientY });
    onDrag == null ? void 0 : onDrag(e2, dndSliceRef.current);
  }, [draggingItemType, onDrag, onDragStart, setDragging, reset]);
  const handleMouseUp = T$1((e2) => {
    e2.stopPropagation();
    if (isStarted) {
      onMouseUp == null ? void 0 : onMouseUp(e2, dndSliceRef.current);
      setStarted(false);
      reset();
    }
  }, [isStarted, onMouseUp, reset]);
  const handleKeyDown = T$1((e2) => {
    if (isKeyPressed(e2, KEY.ESCAPE)) {
      setStarted(false);
      cancelDrag();
      onPressESCKey == null ? void 0 : onPressESCKey(e2, dndSliceRef.current);
    }
  }, [onPressESCKey, cancelDrag]);
  _$2(() => {
    handleMouseMoveRef.current = handleMouseMove;
    handleMouseUpRef.current = handleMouseUp;
    handleKeyDownRef.current = handleKeyDown;
  }, [handleKeyDown, handleMouseMove, handleMouseUp]);
  _$2(() => {
    const wrappedHandleMouseMove = (e2) => {
      var _a;
      return (_a = handleMouseMoveRef.current) == null ? void 0 : _a.call(handleMouseMoveRef, e2);
    };
    const wrappedHandleMouseUp = (e2) => {
      var _a;
      return (_a = handleMouseUpRef.current) == null ? void 0 : _a.call(handleMouseUpRef, e2);
    };
    const wrappedHandleKeyDown = (e2) => {
      var _a;
      return (_a = handleKeyDownRef.current) == null ? void 0 : _a.call(handleKeyDownRef, e2);
    };
    if (isStarted) {
      document.addEventListener("mousemove", wrappedHandleMouseMove);
      document.addEventListener("mouseup", wrappedHandleMouseUp);
      document.addEventListener("keydown", wrappedHandleKeyDown);
      return () => {
        document.removeEventListener("mousemove", wrappedHandleMouseMove);
        document.removeEventListener("mouseup", wrappedHandleMouseUp);
        document.removeEventListener("keydown", wrappedHandleKeyDown);
      };
    }
    return noop;
  }, [isStarted, reset]);
  return handleMouseDown;
}
function passConditionalProp(condition, prop) {
  return condition ? prop : void 0;
}
function getMargins(flat) {
  return {
    vertical: flat ? 5 : 2,
    horizontal: 8
  };
}
function getBorderRadius(exceedLeft, exceedRight) {
  const leftBorderRadius = exceedLeft ? 0 : "2px";
  const rightBorderRadius = exceedRight ? 0 : "2px";
  return `${leftBorderRadius} ${rightBorderRadius} ${rightBorderRadius} ${leftBorderRadius}`;
}
function getEventItemStyle({
  uiModel,
  flat,
  eventHeight,
  isDraggingTarget,
  calendarColor
}) {
  const { exceedLeft, exceedRight } = uiModel;
  const { color, backgroundColor, dragBackgroundColor, borderColor } = getEventColors(uiModel, calendarColor);
  const defaultItemStyle = {
    color,
    backgroundColor: isDraggingTarget ? dragBackgroundColor : backgroundColor,
    borderLeft: exceedLeft ? "none" : `3px solid ${borderColor}`,
    borderRadius: getBorderRadius(exceedLeft, exceedRight),
    overflow: "hidden",
    height: eventHeight,
    lineHeight: toPx(eventHeight),
    opacity: isDraggingTarget ? 0.5 : 1
  };
  const margins = getMargins(flat);
  return flat ? __spreadValues({
    marginTop: margins.vertical
  }, defaultItemStyle) : __spreadValues({
    marginLeft: exceedLeft ? 0 : margins.horizontal,
    marginRight: exceedRight ? 0 : margins.horizontal
  }, defaultItemStyle);
}
function getContainerStyle({
  flat,
  uiModel,
  resizingWidth,
  movingLeft,
  eventHeight,
  headerHeight
}) {
  const { top, left, width, model } = uiModel;
  const margins = getMargins(flat);
  const baseStyle = flat ? {} : {
    width: resizingWidth || toPercent(width),
    left: toPercent(movingLeft != null ? movingLeft : left),
    top: (top - 1) * (eventHeight + margins.vertical) + headerHeight,
    position: "absolute"
  };
  return Object.assign(baseStyle, model.customStyle);
}
function getTestId({ model }) {
  const calendarId = model.calendarId ? `${model.calendarId}-` : "";
  const id = model.id ? `${model.id}-` : "";
  return `${calendarId}${id}${model.title}`;
}
const classNames$k = {
  eventBody: cls("weekday-event"),
  eventTitle: cls("weekday-event-title"),
  eventDot: cls("weekday-event-dot"),
  moveEvent: cls("dragging--move-event"),
  resizeEvent: cls("dragging--resize-horizontal-event")
};
function HorizontalEvent({
  flat = false,
  uiModel,
  eventHeight,
  headerHeight,
  resizingWidth = null,
  movingLeft = null
}) {
  const { currentView } = useStore(viewSelector);
  const { useDetailPopup, isReadOnly: isReadOnlyCalendar } = useStore(optionsSelector);
  const { setDraggingEventUIModel } = useDispatch("dnd");
  const { showDetailPopup } = useDispatch("popup");
  const layoutContainer = useLayoutContainer();
  const eventBus = useEventBus();
  const calendarColor = useCalendarColor(uiModel.model);
  const [isDraggingTarget, setIsDraggingTarget] = y$1(false);
  const eventContainerRef = s$2(null);
  const { isReadOnly, id, calendarId } = uiModel.model;
  const isDraggableEvent2 = !isReadOnlyCalendar && !isReadOnly && isNil(resizingWidth) && isNil(movingLeft);
  const startDragEvent = (className2) => {
    setDraggingEventUIModel(uiModel);
    layoutContainer == null ? void 0 : layoutContainer.classList.add(className2);
  };
  const endDragEvent = (className2) => {
    setIsDraggingTarget(false);
    layoutContainer == null ? void 0 : layoutContainer.classList.remove(className2);
  };
  useTransientUpdate(dndSelector, ({ draggingEventUIModel, draggingState }) => {
    if (draggingState === DraggingState.DRAGGING && (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid()) === uiModel.cid() && isNil(resizingWidth) && isNil(movingLeft)) {
      setIsDraggingTarget(true);
    } else {
      setIsDraggingTarget(false);
    }
  });
  _$2(() => {
    if (isDraggableEvent2) {
      eventBus.fire("afterRenderEvent", uiModel.model.toEventObject());
    }
  }, []);
  const onResizeStart = useDrag(DRAGGING_TYPE_CREATORS.resizeEvent("dayGrid", `${uiModel.cid()}`), {
    onDragStart: () => startDragEvent(classNames$k.resizeEvent),
    onMouseUp: () => endDragEvent(classNames$k.resizeEvent),
    onPressESCKey: () => endDragEvent(classNames$k.resizeEvent)
  });
  const onMoveStart = useDrag(DRAGGING_TYPE_CREATORS.moveEvent("dayGrid", `${uiModel.cid()}`), {
    onDragStart: () => {
      if (isDraggableEvent2) {
        startDragEvent(classNames$k.moveEvent);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      endDragEvent(classNames$k.moveEvent);
      const isClick = draggingState <= DraggingState.INIT;
      if (isClick && useDetailPopup && eventContainerRef.current) {
        showDetailPopup({
          event: uiModel.model,
          eventRect: eventContainerRef.current.getBoundingClientRect()
        }, flat);
      }
      if (isClick) {
        eventBus.fire("clickEvent", { event: uiModel.model.toEventObject(), nativeEvent: e2 });
      }
    },
    onPressESCKey: () => endDragEvent(classNames$k.moveEvent)
  });
  const handleResizeStart = (e2) => {
    e2.stopPropagation();
    if (isDraggableEvent2) {
      onResizeStart(e2);
    }
  };
  const handleMoveStart = (e2) => {
    e2.stopPropagation();
    onMoveStart(e2);
  };
  const isDotEvent = !isDraggingTarget && currentView === "month" && uiModel.model.category === "time" && isSameDate(uiModel.model.start, uiModel.model.end);
  const shouldHideResizeHandler = !isDraggableEvent2 || flat || isDraggingTarget || uiModel.exceedRight;
  const containerStyle = getContainerStyle({
    uiModel,
    eventHeight,
    headerHeight,
    flat,
    movingLeft,
    resizingWidth
  });
  const eventItemStyle = getEventItemStyle({
    uiModel,
    flat,
    eventHeight,
    isDraggingTarget,
    calendarColor
  });
  return /* @__PURE__ */ h$3("div", {
    className: cls("weekday-event-block", {
      "weekday-exceed-left": uiModel.exceedLeft,
      "weekday-exceed-right": uiModel.exceedRight
    }),
    style: containerStyle,
    "data-testid": passConditionalProp(isDraggableEvent2, getTestId(uiModel)),
    "data-calendar-id": calendarId,
    "data-event-id": id,
    ref: eventContainerRef
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$k.eventBody,
    style: __spreadProps(__spreadValues({}, eventItemStyle), {
      backgroundColor: isDotEvent ? null : eventItemStyle.backgroundColor,
      borderLeft: isDotEvent ? null : eventItemStyle.borderLeft
    }),
    onMouseDown: handleMoveStart
  }, isDotEvent ? /* @__PURE__ */ h$3("span", {
    className: classNames$k.eventDot,
    style: { backgroundColor: eventItemStyle.backgroundColor }
  }) : null, /* @__PURE__ */ h$3("span", {
    className: classNames$k.eventTitle
  }, /* @__PURE__ */ h$3(Template, {
    template: uiModel.model.category,
    param: uiModel.model
  })), !shouldHideResizeHandler ? /* @__PURE__ */ h$3(HorizontalEventResizeIcon, {
    onMouseDown: handleResizeStart
  }) : null));
}
function useWhen(callback, condition) {
  const callbackRef = s$2(callback);
  _$2(() => {
    callbackRef.current = callback;
  }, [callback]);
  _$2(() => {
    const invoke = () => callbackRef.current();
    if (condition) {
      invoke();
    }
  }, [condition]);
}
function useCurrentPointerPositionInGrid(gridPositionFinder) {
  const [currentGridPos, setCurrentGridPos] = y$1(null);
  useTransientUpdate(dndSelector, (dndState) => {
    if (isPresent(dndState.x) && isPresent(dndState.y)) {
      const gridPosition = gridPositionFinder({
        clientX: dndState.x,
        clientY: dndState.y
      });
      if (gridPosition) {
        setCurrentGridPos(gridPosition);
      }
    }
  });
  const clearCurrentGridPos = T$1(() => setCurrentGridPos(null), []);
  return [currentGridPos, clearCurrentGridPos];
}
const getTargetEventId = (itemType, area, behavior) => {
  function isEventDraggingType(_itemType) {
    return new RegExp(`^event/${area}/${behavior}/\\d+$`).test(_itemType);
  }
  if (isNil(itemType)) {
    return null;
  }
  return isEventDraggingType(itemType) ? last(itemType.split("/")) : null;
};
function useDraggingEvent(area, behavior) {
  const [isDraggingEnd, setIsDraggingEnd] = y$1(false);
  const [isDraggingCanceled, setIsDraggingCanceled] = y$1(false);
  const [draggingEvent, setDraggingEvent] = y$1(null);
  useTransientUpdate(dndSelector, ({ draggingItemType, draggingEventUIModel, draggingState }) => {
    const targetEventId = getTargetEventId(draggingItemType, area, behavior);
    const hasMatchingTargetEvent = Number(targetEventId) === (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid());
    const isIdle = draggingState === DraggingState.IDLE;
    const isCanceled = draggingState === DraggingState.CANCELED;
    if (isNil(draggingEvent) && hasMatchingTargetEvent) {
      setDraggingEvent(draggingEventUIModel);
    }
    if (isPresent(draggingEvent) && (isIdle || isCanceled)) {
      setIsDraggingEnd(true);
      setIsDraggingCanceled(isCanceled);
    }
  });
  const clearDraggingEvent = () => {
    setDraggingEvent(null);
    setIsDraggingEnd(false);
    setIsDraggingCanceled(false);
  };
  return {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent,
    clearDraggingEvent
  };
}
function useAlldayGridRowEventMove({ rowStyleInfo, gridPositionFinder }) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: movingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "move");
  const startGridXRef = s$2(null);
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const { columnIndex } = currentGridPos != null ? currentGridPos : {};
  const targetEventStartGridX = F$2(() => isNil(movingEvent) ? null : rowStyleInfo.findIndex(({ left }) => left === movingEvent.left), [rowStyleInfo, movingEvent]);
  const currentMovingLeft = F$2(() => {
    if (isNil(columnIndex) || isNil(startGridXRef.current) || isNil(targetEventStartGridX)) {
      return null;
    }
    const newColumnIndex = targetEventStartGridX + columnIndex - startGridXRef.current;
    return newColumnIndex < 0 ? -rowStyleInfo[-newColumnIndex].left : rowStyleInfo[newColumnIndex].left;
  }, [columnIndex, rowStyleInfo, targetEventStartGridX]);
  _$2(() => {
    if (isNil(startGridXRef.current) && isPresent(columnIndex)) {
      startGridXRef.current = columnIndex;
    }
  }, [columnIndex]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(movingEvent) && isPresent(columnIndex) && isPresent(currentMovingLeft) && columnIndex !== startGridXRef.current;
    if (shouldUpdate && isPresent(startGridXRef.current)) {
      const dateOffset = columnIndex - startGridXRef.current;
      const newStartDate = new TZDate(movingEvent.model.getStarts());
      const newEndDate = new TZDate(movingEvent.model.getEnds());
      newStartDate.addDate(dateOffset);
      newEndDate.addDate(dateOffset);
      eventBus.fire("beforeUpdateEvent", {
        event: movingEvent.model.toEventObject(),
        changes: {
          start: newStartDate,
          end: newEndDate
        }
      });
    }
    clearDraggingEvent();
    clearCurrentGridPos();
    startGridXRef.current = null;
  }, isDraggingEnd);
  return F$2(() => ({
    movingEvent,
    movingLeft: currentMovingLeft
  }), [currentMovingLeft, movingEvent]);
}
function MovingEventShadow$2({
  rowStyleInfo,
  gridPositionFinder
}) {
  const { movingEvent, movingLeft } = useAlldayGridRowEventMove({
    rowStyleInfo,
    gridPositionFinder
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(HorizontalEvent, {
    uiModel: movingEvent,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0,
    movingLeft
  });
}
function getEventColIndex(uiModel, row) {
  const start = getGridDateIndex(uiModel.getStarts(), row);
  const end = getGridDateIndex(uiModel.getEnds(), row);
  return { start, end };
}
function useAlldayGridRowEventResize({
  weekDates,
  gridColWidthMap,
  gridPositionFinder
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const { columnIndex } = currentGridPos != null ? currentGridPos : {};
  const targetEventGridIndices = F$2(() => {
    if (resizingEvent) {
      return getEventColIndex(resizingEvent, weekDates);
    }
    return { start: -1, end: -1 };
  }, [weekDates, resizingEvent]);
  const resizingWidth = F$2(() => {
    if (targetEventGridIndices.start > -1 && isPresent(columnIndex)) {
      return gridColWidthMap[targetEventGridIndices.start][columnIndex];
    }
    return null;
  }, [columnIndex, gridColWidthMap, targetEventGridIndices.start]);
  useWhen(() => {
    const shouldUpdateEvent = !isDraggingCanceled && isPresent(resizingEvent) && isPresent(columnIndex) && targetEventGridIndices.start <= columnIndex && targetEventGridIndices.end !== columnIndex;
    if (shouldUpdateEvent) {
      const targetDate = weekDates[columnIndex];
      eventBus.fire("beforeUpdateEvent", {
        event: resizingEvent.model.toEventObject(),
        changes: { end: targetDate }
      });
    }
    clearCurrentGridPos();
    clearDraggingEvent();
  }, isDraggingEnd);
  return F$2(() => ({
    resizingEvent,
    resizingWidth
  }), [resizingWidth, resizingEvent]);
}
function ResizingEventShadow({ weekDates, gridColWidthMap, gridPositionFinder }) {
  const { resizingEvent, resizingWidth } = useAlldayGridRowEventResize({
    weekDates,
    gridColWidthMap,
    gridPositionFinder
  });
  if (isNil(resizingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(HorizontalEvent, {
    uiModel: resizingEvent,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0,
    resizingWidth
  });
}
function useDOMNode() {
  const [node, setNode] = y$1(null);
  const setNodeRef = T$1((ref) => {
    if (ref) {
      setNode(ref);
    }
  }, []);
  return [node, setNodeRef];
}
function useGridRowHeightController(maxTop, category) {
  const [clickedIndex, setClickedIndex] = y$1(0);
  const [isClickedCount, setClickedCount] = y$1(false);
  const { updateDayGridRowHeight } = useDispatch("weekViewLayout");
  const onClickExceedCount = T$1((index) => {
    setClickedCount(true);
    setClickedIndex(index);
    updateDayGridRowHeight({
      rowName: category,
      height: (maxTop + 1) * EVENT_HEIGHT
    });
  }, [category, maxTop, updateDayGridRowHeight]);
  const onClickCollapseButton = T$1(() => {
    setClickedCount(false);
    updateDayGridRowHeight({
      rowName: category,
      height: DEFAULT_PANEL_HEIGHT
    });
  }, [category, updateDayGridRowHeight]);
  return {
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  };
}
function requestTimeout(fn2, delay, registerCancel) {
  let start;
  const loop = (timestamp) => {
    if (!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    if (elapsed >= delay) {
      fn2();
      registerCancel(noop);
      return;
    }
    const raf2 = requestAnimationFrame(loop);
    registerCancel(() => cancelAnimationFrame(raf2));
  };
  const raf = requestAnimationFrame(loop);
  registerCancel(() => cancelAnimationFrame(raf));
}
function useClickPrevention({
  onClick,
  onDblClick,
  delay = 300
}) {
  const cancelCallback = s$2(noop);
  const registerCancel = (fn2) => {
    cancelCallback.current = fn2;
  };
  const cancelScheduledWork = () => {
    cancelCallback.current();
  };
  _$2(() => cancelScheduledWork, []);
  const handleClick = (e2) => {
    cancelScheduledWork();
    requestTimeout(onClick.bind(null, e2), delay, registerCancel);
  };
  const handleDblClick = (e2) => {
    cancelScheduledWork();
    onDblClick(e2);
  };
  return [handleClick, handleDblClick];
}
const GRID_SELECTION_TYPE_MAP = {
  dayGridMonth: "month",
  dayGridWeek: "allday",
  timeGrid: "time"
};
function sortDates(a2, b2) {
  const isIncreased = a2 < b2;
  return isIncreased ? [a2, b2] : [b2, a2];
}
function useGridSelection({
  type,
  selectionSorter,
  dateGetter,
  dateCollection,
  gridPositionFinder
}) {
  const { useFormPopup, gridSelection: gridSelectionOptions } = useStore(optionsSelector);
  const { enableDblClick, enableClick } = gridSelectionOptions;
  const { setGridSelection, addGridSelection, clearAll } = useDispatch("gridSelection");
  const { hideAllPopup, showFormPopup } = useDispatch("popup");
  const eventBus = useEventBus();
  const layoutContainer = useLayoutContainer();
  const [initMousePosition, setInitMousePosition] = y$1(null);
  const [initGridPosition, setInitGridPosition] = y$1(null);
  const isSelectingGridRef = s$2(false);
  const gridSelectionRef = s$2(null);
  useTransientUpdate(T$1((state) => state.gridSelection[type], [type]), (gridSelection) => {
    gridSelectionRef.current = gridSelection;
  });
  useTransientUpdate(dndSelector, ({ draggingState, draggingItemType }) => {
    isSelectingGridRef.current = draggingItemType === currentGridSelectionType && draggingState >= DraggingState.INIT;
  });
  const currentGridSelectionType = DRAGGING_TYPE_CREATORS.gridSelection(type);
  const setGridSelectionByPosition = (e2) => {
    const gridPosition = gridPositionFinder(e2);
    if (isPresent(initGridPosition) && isPresent(gridPosition)) {
      setGridSelection(type, selectionSorter(initGridPosition, gridPosition));
    }
  };
  const [handleClickWithDebounce, handleDblClickPreventingClick] = useClickPrevention({
    onClick: (e2) => {
      if (enableClick) {
        onMouseUp(e2, true);
      }
    },
    onDblClick: (e2) => {
      if (enableDblClick) {
        onMouseUp(e2, true);
      }
    },
    delay: 250
  });
  const onMouseUpWithClick = (e2) => {
    const isClick = e2.detail <= 1;
    if (!enableClick && (!enableDblClick || isClick)) {
      return;
    }
    if (enableClick) {
      if (isClick) {
        handleClickWithDebounce(e2);
      } else {
        handleDblClickPreventingClick(e2);
      }
      return;
    }
    onMouseUp(e2, true);
  };
  const onMouseUp = (e2, isClickEvent) => {
    var _a;
    if (isClickEvent) {
      setGridSelectionByPosition(e2);
    }
    if (isPresent(gridSelectionRef.current)) {
      const [startDate, endDate] = sortDates(...dateGetter(dateCollection, gridSelectionRef.current));
      if (useFormPopup && isPresent(initMousePosition)) {
        const popupArrowPointPosition = {
          top: (e2.clientY + initMousePosition.y) / 2,
          left: (e2.clientX + initMousePosition.x) / 2
        };
        showFormPopup({
          isCreationPopup: true,
          title: "",
          location: "",
          start: startDate,
          end: endDate,
          isAllday: type !== "timeGrid",
          isPrivate: false,
          popupArrowPointPosition,
          close: clearAll
        });
      }
      const gridSelectionSelector = `.${cls(GRID_SELECTION_TYPE_MAP[type])}.${cls("grid-selection")}`;
      const gridSelectionElements = Array.from((_a = layoutContainer == null ? void 0 : layoutContainer.querySelectorAll(gridSelectionSelector)) != null ? _a : []);
      eventBus.fire("selectDateTime", {
        start: startDate.toDate(),
        end: endDate.toDate(),
        isAllday: type !== "timeGrid",
        nativeEvent: e2,
        gridSelectionElements
      });
    }
  };
  const clearGridSelection = T$1(() => {
    setInitMousePosition(null);
    setInitGridPosition(null);
    setGridSelection(type, null);
  }, [setGridSelection, type]);
  const onMouseDown = useDrag(currentGridSelectionType, {
    onInit: (e2) => {
      if (useFormPopup) {
        setInitMousePosition({
          x: e2.clientX,
          y: e2.clientY
        });
        hideAllPopup();
      }
      const gridPosition = gridPositionFinder(e2);
      if (isPresent(gridPosition)) {
        setInitGridPosition(gridPosition);
      }
      if (!useFormPopup) {
        addGridSelection(type, gridSelectionRef.current);
      }
    },
    onDragStart: (e2) => {
      setGridSelectionByPosition(e2);
    },
    onDrag: (e2) => {
      if (isSelectingGridRef.current) {
        setGridSelectionByPosition(e2);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      e2.stopPropagation();
      const isClickEvent = draggingState <= DraggingState.INIT;
      if (isClickEvent) {
        onMouseUpWithClick(e2);
      } else {
        onMouseUp(e2, isClickEvent);
      }
    },
    onPressESCKey: clearGridSelection
  });
  _$2(() => clearGridSelection, [clearGridSelection]);
  return onMouseDown;
}
const rowTitleTemplate = `alldayTitle`;
function AlldayGridRow({
  events,
  weekDates,
  height = DEFAULT_PANEL_HEIGHT,
  options = {},
  rowStyleInfo,
  gridColWidthMap
}) {
  const { isReadOnly } = useStore(optionsSelector);
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const [panelContainer, setPanelContainerRef] = useDOMNode();
  const { narrowWeekend = false, startDayOfWeek = Day$2.SUN } = options;
  const maxTop = F$2(() => Math.max(0, ...events.map(({ top }) => top)), [events]);
  const gridPositionFinder = F$2(() => createGridPositionFinder({
    container: panelContainer,
    rowsCount: 1,
    columnsCount: weekDates.length,
    narrowWeekend,
    startDayOfWeek
  }), [panelContainer, weekDates.length, narrowWeekend, startDayOfWeek]);
  const { clickedIndex, isClickedCount, onClickExceedCount, onClickCollapseButton } = useGridRowHeightController(maxTop, "allday");
  const horizontalEvents = F$2(() => events.filter(isWithinHeight(height, EVENT_HEIGHT + WEEK_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `allday-DayEvent-${uiModel.cid()}`,
    uiModel,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0
  })), [events, height]);
  const startGridSelection = useGridSelection({
    type: "dayGridWeek",
    gridPositionFinder,
    dateCollection: weekDates,
    selectionSorter: alldayGridRowSelectionHelper.sortSelection,
    dateGetter: alldayGridRowSelectionHelper.getDateFromCollection
  });
  const onMouseDown = (e2) => {
    const target = e2.target;
    if (isReadOnly || !target.classList.contains(cls("panel-grid"))) {
      return;
    }
    startGridSelection(e2);
  };
  return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("div", {
    className: cls("panel-title"),
    style: dayGridLeftTheme
  }, /* @__PURE__ */ h$3(Template, {
    template: rowTitleTemplate,
    param: "alldayTitle"
  })), /* @__PURE__ */ h$3("div", {
    className: cls("allday-panel"),
    ref: setPanelContainerRef,
    onMouseDown
  }, /* @__PURE__ */ h$3("div", {
    className: cls("panel-grid-wrapper")
  }, /* @__PURE__ */ h$3(GridCells, {
    uiModels: events,
    weekDates,
    narrowWeekend,
    height,
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  })), /* @__PURE__ */ h$3("div", {
    className: cls(`panel-allday-events`)
  }, horizontalEvents), /* @__PURE__ */ h$3(ResizingEventShadow, {
    weekDates,
    gridPositionFinder,
    gridColWidthMap
  }), /* @__PURE__ */ h$3(MovingEventShadow$2, {
    rowStyleInfo,
    gridPositionFinder
  }), /* @__PURE__ */ h$3(AlldayGridSelection, {
    weekDates,
    narrowWeekend
  })));
}
function OtherGridRow({
  events,
  weekDates,
  category,
  height = DEFAULT_PANEL_HEIGHT,
  options = {}
}) {
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const maxTop = F$2(() => Math.max(0, ...events.map(({ top }) => top)), [events]);
  const { narrowWeekend = false } = options;
  const rowTitleTemplate2 = `${category}Title`;
  const { clickedIndex, isClickedCount, onClickExceedCount, onClickCollapseButton } = useGridRowHeightController(maxTop, category);
  const horizontalEvents = F$2(() => events.filter(isWithinHeight(height, EVENT_HEIGHT + WEEK_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `${category}-DayEvent-${uiModel.cid()}`,
    uiModel,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0
  })), [category, events, height]);
  return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("div", {
    className: cls("panel-title"),
    style: dayGridLeftTheme
  }, /* @__PURE__ */ h$3(Template, {
    template: rowTitleTemplate2,
    param: category
  })), /* @__PURE__ */ h$3("div", {
    className: cls("allday-panel")
  }, /* @__PURE__ */ h$3("div", {
    className: cls("panel-grid-wrapper")
  }, /* @__PURE__ */ h$3(GridCells, {
    uiModels: events,
    weekDates,
    narrowWeekend,
    height,
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  })), /* @__PURE__ */ h$3("div", {
    className: cls(`panel-${category}-events`)
  }, horizontalEvents)));
}
const classNames$j = {
  detailItem: cls("detail-item"),
  detailItemIndent: cls("detail-item", "detail-item-indent"),
  detailItemSeparate: cls("detail-item", "detail-item-separate"),
  sectionDetail: cls("popup-section", "section-detail"),
  content: cls("content"),
  locationIcon: cls("icon", "ic-location-b"),
  repeatIcon: cls("icon", "ic-repeat-b"),
  userIcon: cls("icon", "ic-user-b"),
  stateIcon: cls("icon", "ic-state-b"),
  calendarDotIcon: cls("icon", "calendar-dot")
};
function EventDetailSectionDetail({ event }) {
  var _a, _b;
  const { location: location2, recurrenceRule, attendees, state, calendarId, body } = event;
  const calendar = useCalendarById(calendarId);
  return /* @__PURE__ */ h$3("div", {
    className: classNames$j.sectionDetail
  }, location2 && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.locationIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailLocation",
    param: event,
    as: "span"
  }))), recurrenceRule && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.repeatIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailRecurrenceRule",
    param: event,
    as: "span"
  }))), attendees && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItemIndent
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.userIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailAttendees",
    param: event,
    as: "span"
  }))), state && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.stateIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailState",
    param: event,
    as: "span"
  }))), calendar && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.calendarDotIcon,
    style: {
      backgroundColor: (_a = calendar == null ? void 0 : calendar.backgroundColor) != null ? _a : ""
    }
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, (_b = calendar == null ? void 0 : calendar.name) != null ? _b : "")), body && /* @__PURE__ */ h$3("div", {
    className: classNames$j.detailItemSeparate
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailBody",
    param: event,
    as: "span"
  }))));
}
const classNames$i = {
  sectionHeader: cls("popup-section", "section-header"),
  content: cls("content"),
  eventTitle: cls("event-title")
};
function EventDetailSectionHeader({ event }) {
  return /* @__PURE__ */ h$3("div", {
    className: classNames$i.sectionHeader
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$i.eventTitle
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailTitle",
    param: event,
    as: "span"
  })), /* @__PURE__ */ h$3("div", {
    className: classNames$i.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDetailDate",
    param: event,
    as: "span"
  })));
}
const SEE_MORE_POPUP_SLOT_CLASS_NAME = cls("see-more-popup-slot");
const EVENT_FORM_POPUP_SLOT_CLASS_NAME = cls("event-form-popup-slot");
const EVENT_DETAIL_POPUP_SLOT_CLASS_NAME = cls("event-detail-popup-slot");
const HALF_OF_POPUP_ARROW_HEIGHT = 8;
const BOOLEAN_KEYS_OF_EVENT_MODEL_DATA = [
  "isPrivate",
  "isAllday",
  "isPending",
  "isFocused",
  "isVisible",
  "isReadOnly"
];
var DetailPopupArrowDirection = /* @__PURE__ */ ((DetailPopupArrowDirection2) => {
  DetailPopupArrowDirection2["right"] = "right";
  DetailPopupArrowDirection2["left"] = "left";
  return DetailPopupArrowDirection2;
})(DetailPopupArrowDirection || {});
var FormPopupArrowDirection = /* @__PURE__ */ ((FormPopupArrowDirection2) => {
  FormPopupArrowDirection2["top"] = "top";
  FormPopupArrowDirection2["bottom"] = "bottom";
  return FormPopupArrowDirection2;
})(FormPopupArrowDirection || {});
const FloatingLayerContext = B$1(null);
function FloatingLayerProvider({ children }) {
  const [containerRef, containerRefCallback] = useDOMNode();
  const [seeMorePopupSlotRef, seeMorePopupSlotRefCallback] = useDOMNode();
  const [formPopupSlotRef, formPopupSlotRefCallback] = useDOMNode();
  const [detailPopupSlotRef, detailPopupSlotRefCallback] = useDOMNode();
  const floatingLayer = {
    container: containerRef,
    seeMorePopupSlot: seeMorePopupSlotRef,
    formPopupSlot: formPopupSlotRef,
    detailPopupSlot: detailPopupSlotRef
  };
  return /* @__PURE__ */ h$3(FloatingLayerContext.Provider, {
    value: floatingLayer
  }, children, /* @__PURE__ */ h$3("div", {
    ref: containerRefCallback,
    className: cls("floating-layer")
  }, /* @__PURE__ */ h$3("div", {
    ref: seeMorePopupSlotRefCallback,
    className: SEE_MORE_POPUP_SLOT_CLASS_NAME
  }), /* @__PURE__ */ h$3("div", {
    ref: formPopupSlotRefCallback,
    className: EVENT_FORM_POPUP_SLOT_CLASS_NAME
  }), /* @__PURE__ */ h$3("div", {
    ref: detailPopupSlotRefCallback,
    className: EVENT_DETAIL_POPUP_SLOT_CLASS_NAME
  })));
}
const useFloatingLayer = (floatingLayerType) => {
  var _a;
  const floatingLayers = q$2(FloatingLayerContext);
  if (isUndefined_1(floatingLayers)) {
    throw new Error("FloatingLayerProvider is not found");
  }
  return (_a = floatingLayers == null ? void 0 : floatingLayers[floatingLayerType]) != null ? _a : null;
};
function isTopOutOfLayout(top, layoutRect, popupRect) {
  return top + popupRect.height > layoutRect.top + layoutRect.height;
}
function isLeftOutOfLayout(left, layoutRect, popupRect) {
  return left + popupRect.width > layoutRect.left + layoutRect.width;
}
const eventFormPopupParamSelector = (state) => {
  return state.popup[PopupType.Form];
};
const eventDetailPopupParamSelector = (state) => {
  return state.popup[PopupType.Detail];
};
const seeMorePopupParamSelector = (state) => {
  return state.popup[PopupType.SeeMore];
};
const classNames$h = {
  popupContainer: cls("popup-container"),
  detailContainer: cls("detail-container"),
  topLine: cls("popup-top-line"),
  border: cls("popup-arrow-border"),
  fill: cls("popup-arrow-fill"),
  sectionButton: cls("popup-section", "section-button"),
  content: cls("content"),
  editIcon: cls("icon", "ic-edit"),
  deleteIcon: cls("icon", "ic-delete"),
  editButton: cls("edit-button"),
  deleteButton: cls("delete-button"),
  verticalLine: cls("vertical-line")
};
function calculatePopupPosition$1(eventRect, layoutRect, popupRect) {
  let top = eventRect.top + eventRect.height / 2 - popupRect.height / 2;
  let left = eventRect.left + eventRect.width;
  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }
  if (isLeftOutOfLayout(left, layoutRect, popupRect)) {
    left = eventRect.left - popupRect.width;
  }
  return [
    Math.max(top, layoutRect.top) + window.scrollY,
    Math.max(left, layoutRect.left) + window.scrollX
  ];
}
function calculatePopupArrowPosition(eventRect, layoutRect, popupRect) {
  const top = eventRect.top + eventRect.height / 2 + window.scrollY;
  const popupLeft = eventRect.left + eventRect.width;
  const isOutOfLayout = popupLeft + popupRect.width > layoutRect.left + layoutRect.width;
  const direction = isOutOfLayout ? DetailPopupArrowDirection.right : DetailPopupArrowDirection.left;
  return { top, direction };
}
function EventDetailPopup() {
  const { useFormPopup } = useStore(optionsSelector);
  const popupParams = useStore(eventDetailPopupParamSelector);
  const { event, eventRect } = popupParams != null ? popupParams : {};
  const { showFormPopup, hideDetailPopup } = useDispatch("popup");
  const calendarColor = useCalendarColor(event);
  const layoutContainer = useLayoutContainer();
  const detailPopupSlot = useFloatingLayer("detailPopupSlot");
  const eventBus = useEventBus();
  const popupContainerRef = s$2(null);
  const [style, setStyle] = y$1({});
  const [arrowTop, setArrowTop] = y$1(0);
  const [arrowDirection, setArrowDirection] = y$1(DetailPopupArrowDirection.left);
  const popupArrowClassName = F$2(() => {
    const right = arrowDirection === DetailPopupArrowDirection.right;
    const left = arrowDirection === DetailPopupArrowDirection.left;
    return cls("popup-arrow", { right, left });
  }, [arrowDirection]);
  h$2(() => {
    if (popupContainerRef.current && eventRect && layoutContainer) {
      const layoutRect = layoutContainer.getBoundingClientRect();
      const popupRect = popupContainerRef.current.getBoundingClientRect();
      const [top, left] = calculatePopupPosition$1(eventRect, layoutRect, popupRect);
      const { top: arrowTopPosition, direction } = calculatePopupArrowPosition(eventRect, layoutRect, popupRect);
      setStyle({ top, left });
      setArrowTop(arrowTopPosition - top - HALF_OF_POPUP_ARROW_HEIGHT);
      setArrowDirection(direction);
    }
  }, [eventRect, layoutContainer]);
  if (isNil(event) || isNil(eventRect) || isNil(detailPopupSlot)) {
    return null;
  }
  const {
    title = "",
    isAllday: isAllday2 = false,
    start = new TZDate(),
    end = new TZDate(),
    location: location2,
    state,
    isReadOnly,
    isPrivate
  } = event;
  const popupArrowPointPosition = {
    top: eventRect.top + eventRect.height / 2,
    left: eventRect.left + eventRect.width / 2
  };
  const onClickEditButton = () => {
    if (useFormPopup) {
      showFormPopup({
        isCreationPopup: false,
        event,
        title,
        location: location2,
        start,
        end,
        isAllday: isAllday2,
        isPrivate,
        eventState: state,
        popupArrowPointPosition
      });
    } else {
      eventBus.fire("beforeUpdateEvent", { event: event.toEventObject(), changes: {} });
    }
  };
  const onClickDeleteButton = () => {
    eventBus.fire("beforeDeleteEvent", event.toEventObject());
    hideDetailPopup();
  };
  return V(/* @__PURE__ */ h$3("div", {
    role: "dialog",
    className: classNames$h.popupContainer,
    ref: popupContainerRef,
    style
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$h.detailContainer
  }, /* @__PURE__ */ h$3(EventDetailSectionHeader, {
    event
  }), /* @__PURE__ */ h$3(EventDetailSectionDetail, {
    event
  }), !isReadOnly && /* @__PURE__ */ h$3("div", {
    className: classNames$h.sectionButton
  }, /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$h.editButton,
    onClick: onClickEditButton
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$h.editIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$h.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupEdit",
    as: "span"
  }))), /* @__PURE__ */ h$3("div", {
    className: classNames$h.verticalLine
  }), /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$h.deleteButton,
    onClick: onClickDeleteButton
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$h.deleteIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$h.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupDelete",
    as: "span"
  }))))), /* @__PURE__ */ h$3("div", {
    className: classNames$h.topLine,
    style: { backgroundColor: calendarColor.backgroundColor }
  }), /* @__PURE__ */ h$3("div", {
    className: popupArrowClassName
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$h.border,
    style: { top: arrowTop }
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$h.fill
  })))), detailPopupSlot);
}
const classNames$g = {
  dropdownMenu: cls("dropdown-menu"),
  dropdownMenuItem: cls("dropdown-menu-item"),
  dotIcon: cls("icon", "dot"),
  content: cls("content")
};
function DropdownMenuItem({ index, name, backgroundColor, onClick }) {
  return /* @__PURE__ */ h$3("li", {
    className: classNames$g.dropdownMenuItem,
    onClick: (e2) => onClick(e2, index)
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$g.dotIcon,
    style: { backgroundColor }
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$g.content
  }, name));
}
function CalendarDropdownMenu({ calendars, setOpened, onChangeIndex }) {
  const handleDropdownMenuItemClick = (e2, index) => {
    e2.stopPropagation();
    setOpened(false);
    onChangeIndex(index);
  };
  return /* @__PURE__ */ h$3("ul", {
    className: classNames$g.dropdownMenu
  }, calendars.map(({ name, backgroundColor = "000" }, index) => /* @__PURE__ */ h$3(DropdownMenuItem, {
    key: `dropdown-${name}-${index}`,
    index,
    name,
    backgroundColor,
    onClick: handleDropdownMenuItemClick
  })));
}
function PopupSection({
  children,
  classNames: classNames2 = [],
  onClick = noop
}) {
  return /* @__PURE__ */ h$3("div", {
    className: cls("popup-section", ...classNames2),
    onClick
  }, children);
}
function useDropdownState() {
  const [isOpened, setOpened] = y$1(false);
  const toggleDropdown = () => setOpened((prev) => !prev);
  return { isOpened, setOpened, toggleDropdown };
}
var FormStateActionType = /* @__PURE__ */ ((FormStateActionType2) => {
  FormStateActionType2["init"] = "init";
  FormStateActionType2["setCalendarId"] = "setCalendarId";
  FormStateActionType2["setTitle"] = "setTitle";
  FormStateActionType2["setLocation"] = "setLocation";
  FormStateActionType2["setPrivate"] = "setPrivate";
  FormStateActionType2["setAllday"] = "setAllday";
  FormStateActionType2["setState"] = "setState";
  FormStateActionType2["reset"] = "reset";
  return FormStateActionType2;
})(FormStateActionType || {});
const defaultFormState = {
  title: "",
  location: "",
  isAllday: false,
  isPrivate: false,
  state: "Busy"
};
function formStateReducer(state, action) {
  switch (action.type) {
    case "init":
      return __spreadValues(__spreadValues({}, defaultFormState), action.event);
    case "setCalendarId":
      return __spreadProps(__spreadValues({}, state), { calendarId: action.calendarId });
    case "setTitle":
      return __spreadProps(__spreadValues({}, state), { title: action.title });
    case "setLocation":
      return __spreadProps(__spreadValues({}, state), { location: action.location });
    case "setPrivate":
      return __spreadProps(__spreadValues({}, state), { isPrivate: action.isPrivate });
    case "setAllday":
      return __spreadProps(__spreadValues({}, state), { isAllday: action.isAllday });
    case "setState":
      return __spreadProps(__spreadValues({}, state), { state: action.state });
    case "reset":
      return __spreadValues(__spreadValues({}, state), defaultFormState);
    default:
      return state;
  }
}
function useFormState(initCalendarId) {
  return d$2(formStateReducer, __spreadValues({ calendarId: initCalendarId }, defaultFormState));
}
const classNames$f = {
  popupSection: ["dropdown-section", "calendar-section"],
  popupSectionItem: cls("popup-section-item", "popup-button"),
  dotIcon: cls("icon", "dot"),
  content: cls("content", "event-calendar")
};
function CalendarSelector({ calendars, selectedCalendarId, formStateDispatch }) {
  const { isOpened, setOpened, toggleDropdown } = useDropdownState();
  const selectedCalendar = calendars.find((calendar) => calendar.id === selectedCalendarId);
  const { backgroundColor = "", name = "" } = selectedCalendar != null ? selectedCalendar : {};
  const changeIndex = (index) => formStateDispatch({ type: FormStateActionType.setCalendarId, calendarId: calendars[index].id });
  return /* @__PURE__ */ h$3(PopupSection, {
    onClick: toggleDropdown,
    classNames: classNames$f.popupSection
  }, /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$f.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$f.dotIcon,
    style: { backgroundColor }
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$f.content
  }, name), /* @__PURE__ */ h$3("span", {
    className: cls("icon", "ic-dropdown-arrow", { open: isOpened })
  })), isOpened && /* @__PURE__ */ h$3(CalendarDropdownMenu, {
    calendars,
    setOpened,
    onChangeIndex: changeIndex
  }));
}
const classNames$e = {
  closeButton: cls("popup-button", "popup-close"),
  closeIcon: cls("icon", "ic-close")
};
function ClosePopupButton({ type, close }) {
  const { hideAllPopup } = useDispatch("popup");
  const onClickHandler = () => {
    hideAllPopup();
    if (isFunction$2(close)) {
      close();
    }
  };
  return /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$e.closeButton,
    onClick: onClickHandler
  }, type === "moreEvents" ? /* @__PURE__ */ h$3(Template, {
    template: "monthMoreClose"
  }) : /* @__PURE__ */ h$3("i", {
    className: classNames$e.closeIcon
  }));
}
const classNames$d = {
  confirmButton: cls("popup-button", "popup-confirm")
};
function ConfirmPopupButton({ children }) {
  return /* @__PURE__ */ h$3("button", {
    type: "submit",
    className: classNames$d.confirmButton
  }, /* @__PURE__ */ h$3("span", null, children));
}
function useStringOnlyTemplate({
  template,
  model,
  defaultValue = ""
}) {
  const templates2 = useStore(templateSelector);
  const templateFunc = templates2[template];
  if (isNil(templateFunc)) {
    return defaultValue;
  }
  let result = templateFunc(model);
  if (!isString_1(result)) {
    result = defaultValue;
  }
  return result;
}
const classNames$c = {
  datePickerContainer: cls("datepicker-container"),
  datePicker: cls("popup-section-item", "popup-date-picker"),
  allday: cls("popup-section-item", "popup-section-allday"),
  dateIcon: cls("icon", "ic-date"),
  dateDash: cls("popup-date-dash"),
  content: cls("content")
};
const DateSelector = R(function DateSelector2({ start, end, isAllday: isAllday2 = false, formStateDispatch }, ref) {
  const { usageStatistics } = useStore(optionsSelector);
  const startPickerContainerRef = s$2(null);
  const startPickerInputRef = s$2(null);
  const endPickerContainerRef = s$2(null);
  const endPickerInputRef = s$2(null);
  const startDatePlaceholder = useStringOnlyTemplate({
    template: "startDatePlaceholder",
    defaultValue: "Start Date"
  });
  const endDatePlaceholder = useStringOnlyTemplate({
    template: "endDatePlaceholder",
    defaultValue: "End Date"
  });
  const toggleAllday = () => formStateDispatch({ type: FormStateActionType.setAllday, isAllday: !isAllday2 });
  _$2(() => {
    if (startPickerContainerRef.current && startPickerInputRef.current && endPickerContainerRef.current && endPickerInputRef.current) {
      const startDate = new TZDate(start);
      const endDate = new TZDate(end);
      if (isAllday2) {
        startDate.setHours(12, 0, 0);
        endDate.setHours(13, 0, 0);
      }
      ref.current = tui_date_picker__WEBPACK_IMPORTED_MODULE_0__.createRangePicker({
        startpicker: {
          date: startDate.toDate(),
          input: startPickerInputRef.current,
          container: startPickerContainerRef.current
        },
        endpicker: {
          date: endDate.toDate(),
          input: endPickerInputRef.current,
          container: endPickerContainerRef.current
        },
        format: isAllday2 ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm",
        timePicker: isAllday2 ? false : {
          showMeridiem: false,
          usageStatistics
        },
        usageStatistics
      });
    }
  }, [start, end, isAllday2, usageStatistics, ref]);
  return /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePicker
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$c.dateIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "start",
    className: classNames$c.content,
    placeholder: startDatePlaceholder,
    ref: startPickerInputRef
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePickerContainer,
    ref: startPickerContainerRef
  })), /* @__PURE__ */ h$3("span", {
    className: classNames$c.dateDash
  }, "-"), /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePicker
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$c.dateIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "end",
    className: classNames$c.content,
    placeholder: endDatePlaceholder,
    ref: endPickerInputRef
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$c.datePickerContainer,
    ref: endPickerContainerRef
  })), /* @__PURE__ */ h$3("div", {
    className: classNames$c.allday,
    onClick: toggleAllday
  }, /* @__PURE__ */ h$3("span", {
    className: cls("icon", {
      "ic-checkbox-normal": !isAllday2,
      "ic-checkbox-checked": isAllday2
    })
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$c.content
  }, /* @__PURE__ */ h$3(Template, {
    template: "popupIsAllday"
  })), /* @__PURE__ */ h$3("input", {
    name: "isAllday",
    type: "checkbox",
    className: cls("hidden-input"),
    value: isAllday2 ? "true" : "false",
    checked: isAllday2
  })));
});
const EVENT_STATES = ["Busy", "Free"];
const classNames$b = {
  popupSectionItem: cls("popup-section-item", "dropdown-menu-item"),
  dropdownMenu: cls("dropdown-menu"),
  icon: cls("icon"),
  content: cls("content")
};
function StateDropdownMenu({ setOpened, setEventState }) {
  const onClickDropdown = (e2, state) => {
    e2.stopPropagation();
    setOpened(false);
    setEventState(state);
  };
  return /* @__PURE__ */ h$3("ul", {
    className: classNames$b.dropdownMenu
  }, EVENT_STATES.map((state) => /* @__PURE__ */ h$3("li", {
    key: state,
    className: classNames$b.popupSectionItem,
    onClick: (e2) => onClickDropdown(e2, state)
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$b.icon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$b.content
  }, state === "Busy" ? /* @__PURE__ */ h$3(Template, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ h$3(Template, {
    template: "popupStateFree"
  })))));
}
const classNames$a = {
  popupSection: ["dropdown-section", "state-section"],
  popupSectionItem: cls("popup-section-item", "popup-button"),
  stateIcon: cls("icon", "ic-state"),
  arrowIcon: cls("icon", "ic-dropdown-arrow"),
  content: cls("content", "event-state")
};
function EventStateSelector({ eventState = "Busy", formStateDispatch }) {
  const { isOpened, setOpened, toggleDropdown } = useDropdownState();
  const handleChangeEventState = (state) => formStateDispatch({ type: FormStateActionType.setState, state });
  return /* @__PURE__ */ h$3(PopupSection, {
    onClick: toggleDropdown,
    classNames: classNames$a.popupSection
  }, /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$a.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$a.stateIcon
  }), /* @__PURE__ */ h$3("span", {
    className: classNames$a.content
  }, eventState === "Busy" ? /* @__PURE__ */ h$3(Template, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ h$3(Template, {
    template: "popupStateFree"
  })), /* @__PURE__ */ h$3("span", {
    className: classNames$a.arrowIcon
  })), isOpened && /* @__PURE__ */ h$3(StateDropdownMenu, {
    setOpened,
    setEventState: handleChangeEventState
  }));
}
const classNames$9 = {
  popupSectionItem: cls("popup-section-item", "popup-section-location"),
  locationIcon: cls("icon", "ic-location"),
  content: cls("content")
};
function LocationInputBox({ location: location2, formStateDispatch }) {
  const locationPlaceholder = useStringOnlyTemplate({
    template: "locationPlaceholder",
    defaultValue: "Location"
  });
  const handleLocationChange = (e2) => {
    formStateDispatch({ type: FormStateActionType.setLocation, location: e2.currentTarget.value });
  };
  return /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3("div", {
    className: classNames$9.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$9.locationIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "location",
    className: classNames$9.content,
    placeholder: locationPlaceholder,
    value: location2,
    onChange: handleLocationChange
  })));
}
const classNames$8 = {
  popupSectionItem: cls("popup-section-item", "popup-section-title"),
  privateButton: cls("popup-section-item", "popup-section-private", "popup-button"),
  titleIcon: cls("icon", "ic-title"),
  content: cls("content")
};
function TitleInputBox({ title, isPrivate = false, formStateDispatch }) {
  const titlePlaceholder = useStringOnlyTemplate({
    template: "titlePlaceholder",
    defaultValue: "Subject"
  });
  const togglePrivate = () => formStateDispatch({ type: FormStateActionType.setPrivate, isPrivate: !isPrivate });
  const handleInputChange = (e2) => {
    formStateDispatch({ type: FormStateActionType.setTitle, title: e2.currentTarget.value });
  };
  return /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3("div", {
    className: classNames$8.popupSectionItem
  }, /* @__PURE__ */ h$3("span", {
    className: classNames$8.titleIcon
  }), /* @__PURE__ */ h$3("input", {
    name: "title",
    className: classNames$8.content,
    placeholder: titlePlaceholder,
    value: title,
    onChange: handleInputChange,
    required: true
  })), /* @__PURE__ */ h$3("button", {
    type: "button",
    className: classNames$8.privateButton,
    onClick: togglePrivate
  }, /* @__PURE__ */ h$3("span", {
    className: cls("icon", { "ic-private": isPrivate, "ic-public": !isPrivate })
  }), /* @__PURE__ */ h$3("input", {
    name: "isPrivate",
    type: "checkbox",
    className: cls("hidden-input"),
    value: isPrivate ? "true" : "false",
    checked: isPrivate
  })));
}
const classNames$7 = {
  popupContainer: cls("popup-container"),
  formContainer: cls("form-container"),
  popupArrowBorder: cls("popup-arrow-border"),
  popupArrowFill: cls("popup-arrow-fill")
};
function calculatePopupPosition(popupArrowPointPosition, layoutRect, popupRect) {
  let top = popupArrowPointPosition.top - popupRect.height - HALF_OF_POPUP_ARROW_HEIGHT;
  let left = popupArrowPointPosition.left - popupRect.width / 2;
  let direction = FormPopupArrowDirection.bottom;
  if (top < layoutRect.top) {
    direction = FormPopupArrowDirection.top;
    top = popupArrowPointPosition.top + HALF_OF_POPUP_ARROW_HEIGHT;
  }
  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }
  if (isLeftOutOfLayout(left, layoutRect, popupRect)) {
    left = layoutRect.left + layoutRect.width - popupRect.width;
  }
  return {
    top: top + window.scrollY,
    left: Math.max(left, layoutRect.left) + window.scrollX,
    direction
  };
}
function isBooleanKey(key) {
  return BOOLEAN_KEYS_OF_EVENT_MODEL_DATA.indexOf(key) !== -1;
}
function getChanges(event, eventObject) {
  return Object.entries(eventObject).reduce((changes, [key, value]) => {
    const eventObjectKey = key;
    if (event[eventObjectKey] instanceof TZDate) {
      if (compare(event[eventObjectKey], value) !== 0) {
        changes[eventObjectKey] = value;
      }
    } else if (event[eventObjectKey] !== value) {
      changes[eventObjectKey] = value;
    }
    return changes;
  }, {});
}
function EventFormPopup() {
  var _a;
  const { calendars } = useStore(calendarSelector);
  const { hideAllPopup } = useDispatch("popup");
  const popupParams = useStore(eventFormPopupParamSelector);
  const { start, end, popupArrowPointPosition, close, isCreationPopup, event } = popupParams != null ? popupParams : {};
  const eventBus = useEventBus();
  const formPopupSlot = useFloatingLayer("formPopupSlot");
  const [formState, formStateDispatch] = useFormState((_a = calendars[0]) == null ? void 0 : _a.id);
  const datePickerRef = s$2(null);
  const popupContainerRef = s$2(null);
  const [style, setStyle] = y$1({});
  const [arrowLeft, setArrowLeft] = y$1(0);
  const [arrowDirection, setArrowDirection] = y$1(FormPopupArrowDirection.bottom);
  const layoutContainer = useLayoutContainer();
  const popupArrowClassName = F$2(() => {
    const top = arrowDirection === FormPopupArrowDirection.top;
    const bottom = arrowDirection === FormPopupArrowDirection.bottom;
    return cls("popup-arrow", { top, bottom });
  }, [arrowDirection]);
  h$2(() => {
    if (popupContainerRef.current && popupArrowPointPosition && layoutContainer) {
      const layoutRect = layoutContainer.getBoundingClientRect();
      const popupRect = popupContainerRef.current.getBoundingClientRect();
      const { top, left, direction } = calculatePopupPosition(popupArrowPointPosition, layoutRect, popupRect);
      const arrowLeftPosition = popupArrowPointPosition.left - left;
      setStyle({ left, top });
      setArrowLeft(arrowLeftPosition);
      setArrowDirection(direction);
    }
  }, [layoutContainer, popupArrowPointPosition]);
  _$2(() => {
    if (isPresent(popupParams) && isPresent(event)) {
      formStateDispatch({
        type: FormStateActionType.init,
        event: {
          title: popupParams.title,
          location: popupParams.location,
          isAllday: popupParams.isAllday,
          isPrivate: popupParams.isPrivate,
          calendarId: event.calendarId,
          state: popupParams.eventState
        }
      });
    }
  }, [calendars, event, formStateDispatch, popupParams]);
  _$2(() => {
    if (isNil(popupParams)) {
      formStateDispatch({ type: FormStateActionType.reset });
    }
  }, [formStateDispatch, popupParams]);
  if (isNil(start) || isNil(end) || isNil(formPopupSlot)) {
    return null;
  }
  const onSubmit = (e2) => {
    var _a2, _b;
    e2.preventDefault();
    const formData = new FormData(e2.target);
    const eventData = __spreadValues({}, formState);
    formData.forEach((data, key) => {
      eventData[key] = isBooleanKey(key) ? data === "true" : data;
    });
    eventData.start = new TZDate((_a2 = datePickerRef.current) == null ? void 0 : _a2.getStartDate());
    eventData.end = new TZDate((_b = datePickerRef.current) == null ? void 0 : _b.getEndDate());
    if (isCreationPopup) {
      eventBus.fire("beforeCreateEvent", eventData);
    } else if (event) {
      const changes = getChanges(event, eventData);
      eventBus.fire("beforeUpdateEvent", { event: event.toEventObject(), changes });
    }
    hideAllPopup();
  };
  return V(/* @__PURE__ */ h$3("div", {
    role: "dialog",
    className: classNames$7.popupContainer,
    ref: popupContainerRef,
    style
  }, /* @__PURE__ */ h$3("form", {
    onSubmit
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$7.formContainer
  }, (calendars == null ? void 0 : calendars.length) ? /* @__PURE__ */ h$3(CalendarSelector, {
    selectedCalendarId: formState.calendarId,
    calendars,
    formStateDispatch
  }) : /* @__PURE__ */ h$3(PopupSection, null), /* @__PURE__ */ h$3(TitleInputBox, {
    title: formState.title,
    isPrivate: formState.isPrivate,
    formStateDispatch
  }), /* @__PURE__ */ h$3(LocationInputBox, {
    location: formState.location,
    formStateDispatch
  }), /* @__PURE__ */ h$3(DateSelector, {
    start,
    end,
    isAllday: formState.isAllday,
    formStateDispatch,
    ref: datePickerRef
  }), /* @__PURE__ */ h$3(EventStateSelector, {
    eventState: formState.state,
    formStateDispatch
  }), /* @__PURE__ */ h$3(ClosePopupButton, {
    type: "form",
    close
  }), /* @__PURE__ */ h$3(PopupSection, null, /* @__PURE__ */ h$3(ConfirmPopupButton, null, isCreationPopup ? /* @__PURE__ */ h$3(Template, {
    template: "popupSave"
  }) : /* @__PURE__ */ h$3(Template, {
    template: "popupUpdate"
  })))), /* @__PURE__ */ h$3("div", {
    className: popupArrowClassName
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$7.popupArrowBorder,
    style: { left: arrowLeft }
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$7.popupArrowFill
  }))))), formPopupSlot);
}
function shownPopupParamSelector(state) {
  return Object.values(state.popup).find((popup) => isPresent(popup));
}
function PopupOverlay() {
  const shownPopupParam = useStore(shownPopupParamSelector);
  const { hideAllPopup } = useDispatch("popup");
  const isPopupShown = isPresent(shownPopupParam);
  const onClick = (ev) => {
    var _a;
    ev.stopPropagation();
    (_a = shownPopupParam == null ? void 0 : shownPopupParam.close) == null ? void 0 : _a.call(shownPopupParam);
    hideAllPopup();
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("popup-overlay"),
    style: { display: isPopupShown ? "block" : "none" },
    onClick
  });
}
const classNames$6 = {
  container: cls("see-more-container"),
  seeMore: cls("see-more"),
  header: cls("see-more-header"),
  list: cls("month-more-list")
};
function SeeMoreEventsPopup() {
  const popupParams = useStore(seeMorePopupParamSelector);
  const { date: date2, events = [], popupPosition } = popupParams != null ? popupParams : {};
  const { moreView, moreViewTitle } = useMonthTheme();
  const seeMorePopupSlot = useFloatingLayer("seeMorePopupSlot");
  const eventBus = useEventBus();
  const moreEventsPopupContainerRef = s$2(null);
  const isHidden = isNil(date2) || isNil(popupPosition) || isNil(seeMorePopupSlot);
  _$2(() => {
    if (!isHidden && moreEventsPopupContainerRef.current) {
      eventBus.fire("clickMoreEventsBtn", {
        date: date2.toDate(),
        target: moreEventsPopupContainerRef.current
      });
    }
  }, [date2, eventBus, isHidden]);
  if (isHidden) {
    return null;
  }
  const style = {
    height: MONTH_MORE_VIEW_HEADER_HEIGHT,
    marginBottom: MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM,
    padding: MONTH_MORE_VIEW_HEADER_PADDING,
    backgroundColor: moreViewTitle.backgroundColor
  };
  const moreTitle = {
    ymd: toFormat(date2, "YYYY-MM-DD"),
    day: date2.getDay(),
    date: date2.getDate().toString().padStart(2, "0")
  };
  const moreViewListStyle = {
    height: `calc(100% - ${MONTH_MORE_VIEW_HEADER_HEIGHT + MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM + MONTH_MORE_VIEW_HEADER_PADDING_TOP}px)`
  };
  return V(/* @__PURE__ */ h$3("div", {
    role: "dialog",
    className: classNames$6.container,
    style: popupPosition,
    ref: moreEventsPopupContainerRef
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$6.seeMore,
    style: moreView
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$6.header,
    style
  }, /* @__PURE__ */ h$3(Template, {
    template: "monthMoreTitleDate",
    param: moreTitle
  }), /* @__PURE__ */ h$3(ClosePopupButton, {
    type: "moreEvents"
  })), /* @__PURE__ */ h$3("div", {
    className: classNames$6.list,
    style: moreViewListStyle
  }, events.map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `see-more-event-item-${uiModel.cid()}`,
    uiModel,
    eventHeight: MONTH_EVENT_HEIGHT,
    headerHeight: MONTH_MORE_VIEW_HEADER_HEIGHT,
    flat: true
  }))))), seeMorePopupSlot);
}
function getLayoutStylesFromInfo(width, height) {
  const styles = { height: toPercent(100) };
  if (width) {
    styles.width = width;
  }
  if (height) {
    styles.height = height;
  }
  return styles;
}
function Layout({
  children,
  width,
  height,
  className: className2 = "",
  autoAdjustPanels = false
}) {
  const { backgroundColor } = useTheme(commonThemeSelector);
  const [container, containerRefCallback] = useDOMNode();
  const { setLastPanelType, updateLayoutHeight } = useDispatch("weekViewLayout");
  const layoutClassName = F$2(() => `${cls("layout")} ${className2}`, [className2]);
  h$2(() => {
    if (container) {
      const onResizeWindow = () => updateLayoutHeight(container.offsetHeight);
      onResizeWindow();
      window.addEventListener("resize", onResizeWindow);
      return () => window.removeEventListener("resize", onResizeWindow);
    }
    return noop;
  }, [container, updateLayoutHeight]);
  h$2(() => {
    if (container && autoAdjustPanels) {
      const childArray = x$3(children);
      const lastChild = childArray[childArray.length - 1];
      if (!isString_1(lastChild) && !isNumber_1(lastChild) && !isNil(lastChild)) {
        setLastPanelType(lastChild.props.name);
      }
    }
  }, [children, setLastPanelType, autoAdjustPanels, container]);
  return /* @__PURE__ */ h$3(LayoutContainerProvider, {
    value: container
  }, /* @__PURE__ */ h$3("div", {
    ref: containerRefCallback,
    className: layoutClassName,
    style: __spreadProps(__spreadValues({}, getLayoutStylesFromInfo(width, height)), { backgroundColor })
  }, container ? children : null), /* @__PURE__ */ h$3(EventFormPopup, null), /* @__PURE__ */ h$3(EventDetailPopup, null), /* @__PURE__ */ h$3(SeeMoreEventsPopup, null), /* @__PURE__ */ h$3(PopupOverlay, null));
}
function getDefaultStyle(height, border) {
  return {
    height,
    width: "100%",
    cursor: "row-resize",
    borderTop: border,
    borderBottom: border
  };
}
function PanelResizer({ name, height }) {
  const border = useTheme(T$1((theme) => theme.week.panelResizer.border, []));
  const style = getDefaultStyle(height, border);
  const defaultGuideStyle = __spreadProps(__spreadValues({}, style), {
    display: "none",
    border: "none",
    backgroundColor: "#999"
  });
  const [guideStyle, setGuideStyle] = y$1(defaultGuideStyle);
  const startPos = s$2(null);
  const { updateDayGridRowHeightByDiff } = useDispatch("weekViewLayout");
  const onMouseDown = useDrag(DRAGGING_TYPE_CONSTANTS.panelResizer, {
    onDragStart: (e2) => {
      startPos.current = { left: e2.pageX, top: e2.pageY };
    },
    onDrag: (e2) => {
      if (startPos.current) {
        const top = e2.pageY - startPos.current.top;
        setGuideStyle((prev) => __spreadProps(__spreadValues({}, prev), { top, display: null }));
      }
    },
    onMouseUp: (e2) => {
      if (startPos.current) {
        const diff = e2.pageY - startPos.current.top;
        startPos.current = null;
        setGuideStyle(defaultGuideStyle);
        updateDayGridRowHeightByDiff({ rowName: name, diff });
      }
    }
  });
  return /* @__PURE__ */ h$3("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ h$3("div", {
    className: cls("panel-resizer"),
    style,
    onMouseDown
  }), /* @__PURE__ */ h$3("div", {
    className: cls("panel-resizer-guide"),
    style: guideStyle
  }));
}
function getPanelSide(side, maxExpandableSide) {
  return maxExpandableSide ? Math.min(maxExpandableSide, side) : side;
}
function getPanelStyle({
  initialHeight,
  initialWidth,
  overflowX,
  overflowY,
  maxExpandableWidth,
  maxExpandableHeight,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth
}) {
  const style = {};
  if (initialWidth) {
    style.width = getPanelSide(initialWidth, maxExpandableWidth);
    style.height = "100%";
  }
  if (initialHeight) {
    style.width = "100%";
    style.height = getPanelSide(initialHeight, maxExpandableHeight);
  }
  if (overflowX) {
    style.overflowX = "auto";
  }
  if (overflowY) {
    style.overflowY = "auto";
  }
  return __spreadProps(__spreadValues({}, style), { minHeight, maxHeight, minWidth, maxWidth });
}
const Panel = R(function Panel2({
  name,
  initialWidth = DEFAULT_PANEL_HEIGHT,
  initialHeight = DEFAULT_PANEL_HEIGHT,
  overflowX,
  overflowY,
  maxExpandableWidth,
  maxExpandableHeight,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  resizerWidth = DEFAULT_RESIZER_LENGTH,
  resizerHeight = DEFAULT_RESIZER_LENGTH,
  resizable,
  children
}, ref) {
  const { updateDayGridRowHeight } = useDispatch("weekViewLayout");
  const { height: dayGridRowHeight } = useStore(T$1((state) => {
    var _a;
    return (_a = state.weekViewLayout.dayGridRows[name]) != null ? _a : {};
  }, [name]));
  const height = dayGridRowHeight != null ? dayGridRowHeight : initialHeight;
  h$2(() => {
    updateDayGridRowHeight({ rowName: name, height: initialHeight });
  }, [initialHeight, name, updateDayGridRowHeight]);
  const styles = getPanelStyle({
    initialWidth,
    initialHeight: height,
    overflowX,
    overflowY,
    maxExpandableWidth,
    maxExpandableHeight,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth
  });
  const isResizable = F$2(() => {
    if (isNil(resizable) || isBoolean_1(resizable)) {
      return !!resizable;
    }
    return resizable.includes(name);
  }, [resizable, name]);
  return /* @__PURE__ */ h$3(p$3, null, /* @__PURE__ */ h$3("div", {
    className: cls("panel", name),
    style: styles,
    ref
  }, children), isResizable ? /* @__PURE__ */ h$3(PanelResizer, {
    name,
    width: resizerWidth,
    height: resizerHeight
  }) : null);
});
const className = "timegrid";
const addTimeGridPrefix = (selector) => `${className}-${selector}`;
const timeFormats = {
  second: "HH:mm:ss",
  minute: "HH:mm",
  hour: "HH:mm",
  date: "HH:mm",
  month: "MM.DD",
  year: "YYYY.MM.DD"
};
const classNames$5 = {
  time: cls("event-time"),
  content: cls("event-time-content"),
  travelTime: cls("travel-time"),
  resizeHandleX: cls("resize-handler-x"),
  moveEvent: cls("dragging--move-event"),
  resizeEvent: cls("dragging--resize-vertical-event")
};
function getMarginLeft(left) {
  const { percent, px } = extractPercentPx(`${left}`);
  return left > 0 || percent > 0 || px > 0 ? TIME_EVENT_CONTAINER_MARGIN_LEFT : 0;
}
function getContainerWidth(width, marginLeft) {
  if (isString_1(width)) {
    return width;
  }
  if (width >= 0) {
    return `calc(${toPercent(width)} - ${marginLeft}px)`;
  }
  return "";
}
function getStyles({
  uiModel,
  isDraggingTarget,
  hasNextStartTime,
  calendarColor,
  minHeight
}) {
  const {
    top,
    left,
    height,
    width,
    duplicateLeft,
    duplicateWidth,
    goingDurationHeight,
    modelDurationHeight,
    comingDurationHeight,
    croppedStart,
    croppedEnd
  } = uiModel;
  const travelBorderColor = "white";
  const borderRadius = 2;
  const defaultMarginBottom = 2;
  const marginLeft = getMarginLeft(left);
  const { color, backgroundColor, borderColor, dragBackgroundColor } = getEventColors(uiModel, calendarColor);
  const containerStyle = {
    width: getContainerWidth(duplicateWidth || width, marginLeft),
    height: `calc(${toPercent(Math.max(height, minHeight))} - ${defaultMarginBottom}px)`,
    top: toPercent(top),
    left: duplicateLeft || toPercent(left),
    borderRadius,
    borderLeft: `3px solid ${borderColor}`,
    marginLeft,
    color,
    backgroundColor: isDraggingTarget ? dragBackgroundColor : backgroundColor,
    opacity: isDraggingTarget ? 0.5 : 1,
    zIndex: hasNextStartTime ? 1 : 0
  };
  const goingDurationStyle = {
    height: toPercent(goingDurationHeight),
    borderBottom: `1px dashed ${travelBorderColor}`
  };
  const modelDurationStyle = {
    height: toPercent(modelDurationHeight)
  };
  const comingDurationStyle = {
    height: toPercent(comingDurationHeight),
    borderTop: `1px dashed ${travelBorderColor}`
  };
  if (croppedStart) {
    containerStyle.borderTopLeftRadius = 0;
    containerStyle.borderTopRightRadius = 0;
  }
  if (croppedEnd) {
    containerStyle.borderBottomLeftRadius = 0;
    containerStyle.borderBottomRightRadius = 0;
  }
  return {
    containerStyle,
    goingDurationStyle,
    modelDurationStyle,
    comingDurationStyle
  };
}
function isDraggableEvent({
  uiModel,
  isReadOnlyCalendar,
  isDraggingTarget,
  hasNextStartTime
}) {
  const { model } = uiModel;
  return !isReadOnlyCalendar && !model.isReadOnly && !isDraggingTarget && !hasNextStartTime;
}
function TimeEvent({
  uiModel,
  nextStartTime,
  isResizingGuide = false,
  minHeight = 0
}) {
  const {
    useDetailPopup,
    isReadOnly: isReadOnlyCalendar,
    week: weekOptions
  } = useStore(optionsSelector);
  const calendarColor = useCalendarColor(uiModel.model);
  const { collapseDuplicateEvents } = weekOptions;
  const layoutContainer = useLayoutContainer();
  const { showDetailPopup } = useDispatch("popup");
  const { setDraggingEventUIModel } = useDispatch("dnd");
  const { setSelectedDuplicateEventCid } = useDispatch("weekViewLayout");
  const eventBus = useEventBus();
  const eventContainerRef = s$2(null);
  const [isDraggingTarget, setIsDraggingTarget] = y$1(false);
  const { model, goingDurationHeight, modelDurationHeight, comingDurationHeight, croppedEnd } = uiModel;
  const { id, calendarId, customStyle } = model;
  const hasNextStartTime = isPresent(nextStartTime);
  const { containerStyle, goingDurationStyle, modelDurationStyle, comingDurationStyle } = getStyles({ uiModel, isDraggingTarget, hasNextStartTime, calendarColor, minHeight });
  const isGuide = hasNextStartTime || isResizingGuide;
  useTransientUpdate(dndSelector, ({ draggingEventUIModel, draggingState }) => {
    if (draggingState === DraggingState.DRAGGING && (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid()) === uiModel.cid() && !hasNextStartTime && !isResizingGuide) {
      setIsDraggingTarget(true);
    } else {
      setIsDraggingTarget(false);
    }
  });
  _$2(() => {
    if (!isResizingGuide) {
      eventBus.fire("afterRenderEvent", uiModel.model.toEventObject());
    }
  }, []);
  const startDragEvent = (className2) => {
    setDraggingEventUIModel(uiModel);
    layoutContainer == null ? void 0 : layoutContainer.classList.add(className2);
  };
  const endDragEvent = (className2) => {
    setIsDraggingTarget(false);
    layoutContainer == null ? void 0 : layoutContainer.classList.remove(className2);
  };
  const onMoveStart = useDrag(DRAGGING_TYPE_CREATORS.moveEvent("timeGrid", `${uiModel.cid()}`), {
    onDragStart: () => {
      if (isDraggable) {
        startDragEvent(classNames$5.moveEvent);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      endDragEvent(classNames$5.moveEvent);
      const isClick = draggingState <= DraggingState.INIT;
      if (isClick && collapseDuplicateEvents) {
        const selectedDuplicateEventCid = uiModel.duplicateEvents.length > 0 ? uiModel.cid() : DEFAULT_DUPLICATE_EVENT_CID;
        setSelectedDuplicateEventCid(selectedDuplicateEventCid);
      }
      if (isClick && useDetailPopup && eventContainerRef.current) {
        showDetailPopup({
          event: uiModel.model,
          eventRect: eventContainerRef.current.getBoundingClientRect()
        }, false);
      }
      if (isClick) {
        eventBus.fire("clickEvent", { event: uiModel.model.toEventObject(), nativeEvent: e2 });
      }
    },
    onPressESCKey: () => endDragEvent(classNames$5.moveEvent)
  });
  const handleMoveStart = (e2) => {
    e2.stopPropagation();
    onMoveStart(e2);
  };
  const onResizeStart = useDrag(DRAGGING_TYPE_CREATORS.resizeEvent("timeGrid", `${uiModel.cid()}`), {
    onDragStart: () => startDragEvent(classNames$5.resizeEvent),
    onMouseUp: () => endDragEvent(classNames$5.resizeEvent),
    onPressESCKey: () => endDragEvent(classNames$5.resizeEvent)
  });
  const handleResizeStart = (e2) => {
    e2.stopPropagation();
    onResizeStart(e2);
  };
  const isDraggable = isDraggableEvent({
    uiModel,
    isReadOnlyCalendar,
    isDraggingTarget,
    hasNextStartTime
  });
  const shouldShowResizeHandle = isDraggable && !croppedEnd;
  return /* @__PURE__ */ h$3("div", {
    "data-testid": `${isGuide ? "guide-" : ""}time-event-${model.title}-${uiModel.cid()}`,
    "data-calendar-id": calendarId,
    "data-event-id": id,
    className: classNames$5.time,
    style: __spreadValues(__spreadValues({}, containerStyle), customStyle),
    onMouseDown: handleMoveStart,
    ref: eventContainerRef
  }, goingDurationHeight ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.travelTime,
    style: goingDurationStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: "goingDuration",
    param: model
  })) : null, modelDurationHeight ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.content,
    style: modelDurationStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: "time",
    param: __spreadProps(__spreadValues({}, model.toEventObject()), {
      start: hasNextStartTime ? nextStartTime : model.start
    })
  })) : null, comingDurationHeight ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.travelTime,
    style: comingDurationStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: "comingDuration",
    param: model
  })) : null, shouldShowResizeHandle ? /* @__PURE__ */ h$3("div", {
    className: classNames$5.resizeHandleX,
    onMouseDown: handleResizeStart
  }) : null);
}
function GridSelection({ top, height, text }) {
  const { backgroundColor, border } = useTheme(T$1((theme) => theme.common.gridSelection, []));
  const color = useTheme(T$1((theme) => theme.week.gridSelection.color, []));
  const style = {
    top: toPercent(top),
    height: toPercent(height),
    backgroundColor,
    border
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls("time", "grid-selection"),
    style,
    "data-testid": `time-grid-selection-${top}-${height}`
  }, text.length > 0 ? /* @__PURE__ */ h$3("span", {
    className: cls("grid-selection-label"),
    style: { color }
  }, text) : null);
}
function GridSelectionByColumn({ columnIndex, timeGridRows }) {
  const gridSelectionData = useStore(T$1((state) => timeGridSelectionHelper.calculateSelection(state.gridSelection.timeGrid, columnIndex, timeGridRows.length - 1), [columnIndex, timeGridRows]));
  const gridSelectionProps = F$2(() => {
    if (!gridSelectionData) {
      return null;
    }
    const { startRowIndex, endRowIndex, isStartingColumn, isSelectingMultipleColumns } = gridSelectionData;
    const { top: startRowTop, startTime: startRowStartTime } = timeGridRows[startRowIndex];
    const {
      top: endRowTop,
      height: endRowHeight,
      endTime: endRowEndTime
    } = timeGridRows[endRowIndex];
    const gridSelectionHeight = endRowTop + endRowHeight - startRowTop;
    let text = `${startRowStartTime} - ${endRowEndTime}`;
    if (isSelectingMultipleColumns) {
      text = isStartingColumn ? startRowStartTime : "";
    }
    return {
      top: startRowTop,
      height: gridSelectionHeight,
      text
    };
  }, [gridSelectionData, timeGridRows]);
  if (isNil(gridSelectionProps)) {
    return null;
  }
  return /* @__PURE__ */ h$3(GridSelection, __spreadValues({}, gridSelectionProps));
}
function useTimeGridEventResize({
  gridPositionFinder,
  totalUIModels,
  columnIndex,
  timeGridData
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingStartUIModel,
    clearDraggingEvent
  } = useDraggingEvent("timeGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const [guideUIModel, setGuideUIModel] = y$1(null);
  const clearStates = T$1(() => {
    setGuideUIModel(null);
    clearDraggingEvent();
    clearCurrentGridPos();
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const baseResizingInfo = F$2(() => {
    if (isNil(resizingStartUIModel)) {
      return null;
    }
    const { columns, rows } = timeGridData;
    const resizeTargetUIModelColumns = totalUIModels.map((uiModels) => uiModels.filter((uiModel) => uiModel.cid() === resizingStartUIModel.cid()));
    const findRowIndexOf = (targetDate, targetColumnIndex) => (row) => {
      const rowStartTZDate = setTimeStrToDate(columns[targetColumnIndex].date, row.startTime);
      const rowEndTZDate = setTimeStrToDate(timeGridData.columns[targetColumnIndex].date, row.endTime);
      return rowStartTZDate <= targetDate && targetDate < rowEndTZDate;
    };
    const eventStartDateColumnIndex = resizeTargetUIModelColumns.findIndex((row) => row.length > 0);
    const resizingStartEventUIModel = resizeTargetUIModelColumns[eventStartDateColumnIndex][0];
    const { goingDuration = 0 } = resizingStartEventUIModel.model;
    const renderStart = addMinutes(resizingStartEventUIModel.getStarts(), -goingDuration);
    const eventStartDateRowIndex = Math.max(rows.findIndex(findRowIndexOf(renderStart, eventStartDateColumnIndex)), 0);
    const eventEndDateColumnIndex = findLastIndex(resizeTargetUIModelColumns, (row) => row.length > 0);
    const resizingEndEventUIModel = resizeTargetUIModelColumns[eventEndDateColumnIndex][0];
    const { comingDuration = 0 } = resizingEndEventUIModel.model;
    const renderEnd = addMinutes(resizingEndEventUIModel.getStarts(), comingDuration);
    let eventEndDateRowIndex = rows.findIndex(findRowIndexOf(renderEnd, eventEndDateColumnIndex));
    eventEndDateRowIndex = eventEndDateRowIndex >= 0 ? eventEndDateRowIndex : rows.length - 1;
    return {
      eventStartDateColumnIndex,
      eventStartDateRowIndex,
      eventEndDateColumnIndex,
      eventEndDateRowIndex,
      resizeTargetUIModelColumns
    };
  }, [resizingStartUIModel, timeGridData, totalUIModels]);
  const canCalculateGuideUIModel = isPresent(baseResizingInfo) && isPresent(resizingStartUIModel) && isPresent(currentGridPos);
  const oneRowHeight = F$2(() => baseResizingInfo ? timeGridData.rows[0].height : 0, [baseResizingInfo, timeGridData.rows]);
  _$2(() => {
    if (canCalculateGuideUIModel) {
      const { eventStartDateRowIndex, eventStartDateColumnIndex, eventEndDateColumnIndex } = baseResizingInfo;
      if (columnIndex === eventEndDateColumnIndex && eventStartDateColumnIndex === eventEndDateColumnIndex) {
        const clonedUIModel = resizingStartUIModel.clone();
        const { height, goingDurationHeight, comingDurationHeight } = clonedUIModel;
        const newHeight = Math.max(oneRowHeight + goingDurationHeight * height / 100 + comingDurationHeight * height / 100, timeGridData.rows[currentGridPos.rowIndex].top - timeGridData.rows[eventStartDateRowIndex].top + oneRowHeight);
        const newGoingDurationHeight = goingDurationHeight * height / newHeight;
        const newComingDurationHeight = comingDurationHeight * height / newHeight;
        clonedUIModel.setUIProps({
          height: newHeight,
          goingDurationHeight: newGoingDurationHeight,
          comingDurationHeight: newComingDurationHeight,
          modelDurationHeight: 100 - (newGoingDurationHeight + newComingDurationHeight)
        });
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    oneRowHeight
  ]);
  _$2(() => {
    if (canCalculateGuideUIModel) {
      const { resizeTargetUIModelColumns, eventStartDateColumnIndex, eventEndDateColumnIndex } = baseResizingInfo;
      if ((columnIndex === eventStartDateColumnIndex || columnIndex === eventEndDateColumnIndex) && eventStartDateColumnIndex !== eventEndDateColumnIndex) {
        let clonedUIModel;
        if (columnIndex === eventStartDateColumnIndex) {
          clonedUIModel = resizeTargetUIModelColumns[columnIndex][0].clone();
        } else {
          clonedUIModel = resizingStartUIModel.clone();
          clonedUIModel.setUIProps({
            height: timeGridData.rows[currentGridPos.rowIndex].top + oneRowHeight
          });
        }
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    oneRowHeight
  ]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(baseResizingInfo) && isPresent(currentGridPos) && isPresent(resizingStartUIModel) && baseResizingInfo.eventEndDateColumnIndex === columnIndex;
    if (shouldUpdate) {
      const { comingDuration = 0 } = resizingStartUIModel.model;
      const targetEndDate = addMinutes(setTimeStrToDate(timeGridData.columns[columnIndex].date, timeGridData.rows[currentGridPos.rowIndex].endTime), -comingDuration);
      const minEndDate = addMinutes(resizingStartUIModel.getStarts(), 30);
      eventBus.fire("beforeUpdateEvent", {
        event: resizingStartUIModel.model.toEventObject(),
        changes: {
          end: max(minEndDate, targetEndDate)
        }
      });
    }
    clearStates();
  }, isDraggingEnd);
  return guideUIModel;
}
function ResizingGuideByColumn({
  gridPositionFinder,
  totalUIModels,
  columnIndex,
  timeGridData
}) {
  const guideUIModel = useTimeGridEventResize({
    gridPositionFinder,
    totalUIModels,
    columnIndex,
    timeGridData
  });
  if (isNil(guideUIModel)) {
    return null;
  }
  return /* @__PURE__ */ h$3(TimeEvent, {
    uiModel: guideUIModel,
    isResizingGuide: true
  });
}
const classNames$4 = {
  column: cls("column"),
  backgrounds: cls("background-events"),
  events: cls("events")
};
function VerticalEvents({
  eventUIModels,
  minEventHeight
}) {
  const style = { marginRight: 8 };
  return /* @__PURE__ */ h$3("div", {
    className: classNames$4.events,
    style
  }, eventUIModels.map((eventUIModel) => /* @__PURE__ */ h$3(TimeEvent, {
    key: `${eventUIModel.valueOf()}-${eventUIModel.cid()}`,
    uiModel: eventUIModel,
    minHeight: minEventHeight
  })));
}
function backgroundColorSelector$1(theme) {
  return {
    defaultBackgroundColor: theme.week.dayGrid.backgroundColor,
    todayBackgroundColor: theme.week.today.backgroundColor,
    weekendBackgroundColor: theme.week.weekend.backgroundColor
  };
}
function getBackgroundColor({
  today,
  columnDate,
  defaultBackgroundColor,
  todayBackgroundColor,
  weekendBackgroundColor
}) {
  const isTodayColumn = isSameDate(today, columnDate);
  const isWeekendColumn = isWeekend(columnDate.getDay());
  if (isTodayColumn) {
    return todayBackgroundColor;
  }
  if (isWeekendColumn) {
    return weekendBackgroundColor;
  }
  return defaultBackgroundColor;
}
const Column = g$1(function Column2({
  columnDate,
  columnWidth,
  columnIndex,
  totalUIModels,
  gridPositionFinder,
  timeGridData,
  isLastColumn
}) {
  const { rows: timeGridRows } = timeGridData;
  const borderRight = useTheme(T$1((theme) => theme.week.timeGrid.borderRight, []));
  const backgroundColorTheme = useTheme(backgroundColorSelector$1);
  const [, getNow] = usePrimaryTimezone();
  const today = getNow();
  const backgroundColor = getBackgroundColor(__spreadValues({ today, columnDate }, backgroundColorTheme));
  const style = {
    width: columnWidth,
    backgroundColor,
    borderRight: isLastColumn ? "none" : borderRight
  };
  const uiModelsByColumn = totalUIModels[columnIndex];
  const minEventHeight = timeGridRows[0].height;
  return /* @__PURE__ */ h$3("div", {
    className: classNames$4.column,
    style,
    "data-testid": `timegrid-column-${columnDate.getDay()}`
  }, /* @__PURE__ */ h$3(VerticalEvents, {
    eventUIModels: uiModelsByColumn,
    minEventHeight
  }), /* @__PURE__ */ h$3(ResizingGuideByColumn, {
    gridPositionFinder,
    totalUIModels,
    columnIndex,
    timeGridData
  }), /* @__PURE__ */ h$3(GridSelectionByColumn, {
    columnIndex,
    timeGridRows
  }));
});
function gridLineBorderSelector(theme) {
  return {
    halfHourLineBorder: theme.week.timeGridHalfHourLine.borderBottom,
    hourLineBorder: theme.week.timeGridHourLine.borderBottom
  };
}
const GridLines = g$1(function GridLines2({
  timeGridRows
}) {
  const { halfHourLineBorder, hourLineBorder } = useTheme(gridLineBorderSelector);
  return /* @__PURE__ */ h$3("div", {
    className: cls("gridlines")
  }, timeGridRows.map((time, index) => {
    const isUpperLine = index % 2 === 0;
    return /* @__PURE__ */ h$3("div", {
      key: `gridline-${time.startTime}-${time.endTime}`,
      className: cls("gridline-half"),
      style: {
        top: toPercent(time.top),
        height: toPercent(time.height),
        borderBottom: isUpperLine ? halfHourLineBorder : hourLineBorder
      },
      "data-testid": `gridline-${time.startTime}-${time.endTime}`
    });
  }));
});
const THIRTY_MINUTES = 30;
function getCurrentIndexByTime(time, hourStart) {
  const hour = time.getHours() - hourStart;
  const minutes = time.getMinutes();
  return hour * 2 + Math.floor(minutes / THIRTY_MINUTES);
}
function getMovingEventPosition({
  draggingEvent,
  columnDiff,
  rowDiff,
  timeGridDataRows,
  currentDate
}) {
  const rowHeight = timeGridDataRows[0].height;
  const maxHeight = rowHeight * timeGridDataRows.length;
  const millisecondsDiff = rowDiff * MS_PER_THIRTY_MINUTES + columnDiff * MS_PER_DAY;
  const hourStart = Number(timeGridDataRows[0].startTime.split(":")[0]);
  const { goingDuration = 0, comingDuration = 0 } = draggingEvent.model;
  const goingStart = addMinutes(draggingEvent.getStarts(), -goingDuration);
  const comingEnd = addMinutes(draggingEvent.getEnds(), comingDuration);
  const nextStart = addMilliseconds(goingStart, millisecondsDiff);
  const nextEnd = addMilliseconds(comingEnd, millisecondsDiff);
  const startIndex = Math.max(getCurrentIndexByTime(nextStart, hourStart), 0);
  const endIndex = Math.min(getCurrentIndexByTime(nextEnd, hourStart), timeGridDataRows.length - 1);
  const isStartAtPrevDate = nextStart.getFullYear() < currentDate.getFullYear() || nextStart.getMonth() < currentDate.getMonth() || nextStart.getDate() < currentDate.getDate();
  const isEndAtNextDate = nextEnd.getFullYear() > currentDate.getFullYear() || nextEnd.getMonth() > currentDate.getMonth() || nextEnd.getDate() > currentDate.getDate();
  const indexDiff = endIndex - (isStartAtPrevDate ? 0 : startIndex);
  const top = isStartAtPrevDate ? 0 : timeGridDataRows[startIndex].top;
  const height = isEndAtNextDate ? maxHeight : Math.max(indexDiff, 1) * rowHeight;
  return { top, height };
}
const initXSelector = (state) => state.dnd.initX;
const initYSelector = (state) => state.dnd.initY;
function useTimeGridEventMove({
  gridPositionFinder,
  timeGridData
}) {
  const initX = useStore(initXSelector);
  const initY = useStore(initYSelector);
  const eventBus = useEventBus();
  const { isDraggingEnd, isDraggingCanceled, draggingEvent, clearDraggingEvent } = useDraggingEvent("timeGrid", "move");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const initGridPosRef = s$2(null);
  _$2(() => {
    if (isPresent(initX) && isPresent(initY)) {
      initGridPosRef.current = gridPositionFinder({
        clientX: initX,
        clientY: initY
      });
    }
  }, [gridPositionFinder, initX, initY]);
  const gridDiff = F$2(() => {
    if (isNil(initGridPosRef.current) || isNil(currentGridPos)) {
      return null;
    }
    return {
      columnDiff: currentGridPos.columnIndex - initGridPosRef.current.columnIndex,
      rowDiff: currentGridPos.rowIndex - initGridPosRef.current.rowIndex
    };
  }, [currentGridPos]);
  const startDateTime = F$2(() => {
    if (isNil(draggingEvent)) {
      return null;
    }
    return draggingEvent.getStarts();
  }, [draggingEvent]);
  const clearState = T$1(() => {
    clearCurrentGridPos();
    clearDraggingEvent();
    initGridPosRef.current = null;
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const nextStartTime = F$2(() => {
    if (isNil(gridDiff) || isNil(startDateTime)) {
      return null;
    }
    return addMilliseconds(startDateTime, gridDiff.rowDiff * MS_PER_THIRTY_MINUTES + gridDiff.columnDiff * MS_PER_DAY);
  }, [gridDiff, startDateTime]);
  const movingEvent = F$2(() => {
    if (isNil(draggingEvent) || isNil(currentGridPos) || isNil(gridDiff)) {
      return null;
    }
    const clonedEvent = draggingEvent.clone();
    const { top, height } = getMovingEventPosition({
      draggingEvent: clonedEvent,
      columnDiff: gridDiff.columnDiff,
      rowDiff: gridDiff.rowDiff,
      timeGridDataRows: timeGridData.rows,
      currentDate: timeGridData.columns[currentGridPos.columnIndex].date
    });
    clonedEvent.setUIProps({
      left: timeGridData.columns[currentGridPos.columnIndex].left,
      width: timeGridData.columns[currentGridPos.columnIndex].width,
      top,
      height
    });
    return clonedEvent;
  }, [currentGridPos, draggingEvent, gridDiff, timeGridData.columns, timeGridData.rows]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(draggingEvent) && isPresent(currentGridPos) && isPresent(gridDiff) && isPresent(nextStartTime) && (gridDiff.rowDiff !== 0 || gridDiff.columnDiff !== 0);
    if (shouldUpdate) {
      const duration = draggingEvent.duration();
      const nextEndTime = addMilliseconds(nextStartTime, duration);
      eventBus.fire("beforeUpdateEvent", {
        event: draggingEvent.model.toEventObject(),
        changes: {
          start: nextStartTime,
          end: nextEndTime
        }
      });
    }
    clearState();
  }, isDraggingEnd);
  return {
    movingEvent,
    nextStartTime
  };
}
function MovingEventShadow$1({
  gridPositionFinder,
  timeGridData
}) {
  const { movingEvent, nextStartTime } = useTimeGridEventMove({
    gridPositionFinder,
    timeGridData
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(TimeEvent, {
    uiModel: movingEvent,
    nextStartTime
  });
}
const TEST_IDS = {
  NOW_INDICATOR: "timegrid-now-indicator",
  NOW_INDICATOR_LABEL: "timegrid-now-indicator-label"
};
const classNames$3 = {
  line: cls(addTimeGridPrefix("now-indicator")),
  left: cls(addTimeGridPrefix("now-indicator-left")),
  marker: cls(addTimeGridPrefix("now-indicator-marker")),
  today: cls(addTimeGridPrefix("now-indicator-today")),
  right: cls(addTimeGridPrefix("now-indicator-right"))
};
function nowIndicatorTheme(theme) {
  return {
    pastBorder: theme.week.nowIndicatorPast.border,
    todayBorder: theme.week.nowIndicatorToday.border,
    futureBorder: theme.week.nowIndicatorFuture.border,
    bulletBackgroundColor: theme.week.nowIndicatorBullet.backgroundColor
  };
}
function NowIndicator({ top, columnWidth, columnCount, columnIndex }) {
  const { pastBorder, todayBorder, futureBorder, bulletBackgroundColor } = useTheme(nowIndicatorTheme);
  const layoutContainer = useLayoutContainer();
  const eventBus = useEventBus();
  const indicatorRef = s$2(null);
  const leftLine = {
    left: toPercent(columnWidth * columnIndex),
    width: toPercent(columnWidth * columnIndex)
  };
  const rightLine = {
    left: toPercent(columnWidth * (columnIndex + 1)),
    width: toPercent(columnWidth * (columnCount - columnIndex + 1))
  };
  _$2(() => {
    const scrollToNow = (behavior) => {
      var _a;
      const scrollArea = (_a = layoutContainer == null ? void 0 : layoutContainer.querySelector(`.${cls("panel")}.${cls("time")}`)) != null ? _a : null;
      if (scrollArea && indicatorRef.current) {
        const { offsetHeight: scrollAreaOffsetHeight } = scrollArea;
        const { offsetTop: targetOffsetTop } = indicatorRef.current;
        const newScrollTop = targetOffsetTop - scrollAreaOffsetHeight / 2;
        if (scrollArea.scrollTo) {
          scrollArea.scrollTo({ top: newScrollTop, behavior });
        } else {
          scrollArea.scrollTop = newScrollTop;
        }
      }
    };
    eventBus.on("scrollToNow", scrollToNow);
    return () => eventBus.off("scrollToNow", scrollToNow);
  }, [eventBus, layoutContainer]);
  _$2(() => {
    eventBus.fire("scrollToNow", "smooth");
  }, [eventBus]);
  return /* @__PURE__ */ h$3("div", {
    ref: indicatorRef,
    className: classNames$3.line,
    style: { top: toPercent(top) },
    "data-testid": TEST_IDS.NOW_INDICATOR
  }, /* @__PURE__ */ h$3("div", {
    className: classNames$3.left,
    style: { width: leftLine.width, borderTop: pastBorder }
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$3.marker,
    style: { left: leftLine.left, backgroundColor: bulletBackgroundColor }
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$3.today,
    style: {
      left: leftLine.left,
      width: toPercent(columnWidth),
      borderTop: todayBorder
    }
  }), /* @__PURE__ */ h$3("div", {
    className: classNames$3.right,
    style: {
      left: rightLine.left,
      borderTop: futureBorder
    }
  }));
}
const classNames$2 = {
  now: addTimeGridPrefix("current-time"),
  dayDifference: addTimeGridPrefix("day-difference")
};
function NowIndicatorLabel({ unit, top, now, zonedNow }) {
  const color = useTheme(T$1((theme) => theme.week.nowIndicatorLabel.color, []));
  const dateDifference = F$2(() => {
    return getDateDifference(zonedNow, now);
  }, [zonedNow, now]);
  const model = {
    unit,
    time: zonedNow,
    format: timeFormats[unit]
  };
  return /* @__PURE__ */ h$3("div", {
    className: cls(classNames$2.now),
    style: { top: toPercent(top), color },
    "data-testid": TEST_IDS.NOW_INDICATOR_LABEL
  }, dateDifference !== 0 && /* @__PURE__ */ h$3("span", {
    className: cls(classNames$2.dayDifference)
  }, `[${dateDifference > 0 ? "+" : "-"}${Math.abs(dateDifference)}]`), /* @__PURE__ */ h$3(Template, {
    template: "timegridNowIndicatorLabel",
    param: model,
    as: "span"
  }));
}
const monthVisibleEventCountSelector = (state) => {
  var _a;
  return (_a = state.options.month.visibleEventCount) != null ? _a : 6;
};
const showNowIndicatorOptionSelector = (state) => state.options.week.showNowIndicator;
const showTimezoneCollapseButtonOptionSelector = (state) => {
  var _a;
  return (_a = state.options.week.showTimezoneCollapseButton) != null ? _a : false;
};
const timezonesCollapsedOptionSelector = (state) => {
  var _a;
  return (_a = state.options.week.timezonesCollapsed) != null ? _a : false;
};
const classNames$1 = {
  timeColumn: addTimeGridPrefix("time-column"),
  hourRows: addTimeGridPrefix("hour-rows"),
  time: addTimeGridPrefix("time"),
  timeLabel: addTimeGridPrefix("time-label"),
  first: addTimeGridPrefix("time-first"),
  last: addTimeGridPrefix("time-last"),
  hidden: addTimeGridPrefix("time-hidden")
};
function backgroundColorSelector(theme) {
  return {
    primaryTimezoneBackgroundColor: theme.week.timeGridLeft.backgroundColor,
    subTimezoneBackgroundColor: theme.week.timeGridLeftAdditionalTimezone.backgroundColor
  };
}
function timeColorSelector(theme) {
  return {
    pastTimeColor: theme.week.pastTime.color,
    futureTimeColor: theme.week.futureTime.color
  };
}
function HourRows({ rowsInfo, isPrimary, borderRight, width, nowIndicatorState }) {
  var _a;
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const { primaryTimezoneBackgroundColor, subTimezoneBackgroundColor } = useTheme(backgroundColorSelector);
  const { pastTimeColor, futureTimeColor } = useTheme(timeColorSelector);
  const zonedNow = isPresent(nowIndicatorState) ? addMinutes(nowIndicatorState.now, (_a = rowsInfo[0].diffFromPrimaryTimezone) != null ? _a : 0) : null;
  const backgroundColor = isPrimary ? primaryTimezoneBackgroundColor : subTimezoneBackgroundColor;
  return /* @__PURE__ */ h$3("div", {
    role: "rowgroup",
    className: cls(classNames$1.hourRows),
    style: { width: toPercent(width), borderRight, backgroundColor }
  }, rowsInfo.map(({ date: date2, top, className: className2 }) => {
    const isPast = isPresent(zonedNow) && date2 < zonedNow;
    const color = isPast ? pastTimeColor : futureTimeColor;
    return /* @__PURE__ */ h$3("div", {
      key: date2.getTime(),
      className: className2,
      style: {
        top: toPercent(top),
        color
      },
      role: "row"
    }, /* @__PURE__ */ h$3(Template, {
      template: `timegridDisplay${isPrimary ? "Primary" : ""}Time`,
      param: { time: date2 },
      as: "span"
    }));
  }), showNowIndicator && isPresent(nowIndicatorState) && isPresent(zonedNow) && /* @__PURE__ */ h$3(NowIndicatorLabel, {
    unit: "hour",
    top: nowIndicatorState.top,
    now: nowIndicatorState.now,
    zonedNow
  }));
}
const TimeColumn = g$1(function TimeColumn2({ timeGridRows, nowIndicatorState }) {
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const timezones = useStore(timezonesSelector);
  const timezonesCollapsed = useStore(timezonesCollapsedOptionSelector);
  const tzConverter = useTZConverter();
  const { width, borderRight } = useTheme(weekTimeGridLeftSelector);
  const rowsByHour = F$2(() => timeGridRows.filter((_2, index) => index % 2 === 0 || index === timeGridRows.length - 1), [timeGridRows]);
  const hourRowsPropsMapper = T$1((row, index, diffFromPrimaryTimezone) => {
    const shouldHideRow = ({ top: rowTop, height: rowHeight }) => {
      if (!showNowIndicator || isNil(nowIndicatorState)) {
        return false;
      }
      const indicatorTop = nowIndicatorState.top;
      return rowTop - rowHeight <= indicatorTop && indicatorTop <= rowTop + rowHeight;
    };
    const isFirst = index === 0;
    const isLast = index === rowsByHour.length - 1;
    const className2 = cls(classNames$1.time, {
      [classNames$1.first]: isFirst,
      [classNames$1.last]: isLast,
      [classNames$1.hidden]: shouldHideRow(row)
    });
    let date2 = setTimeStrToDate(new TZDate(), isLast ? row.endTime : row.startTime);
    if (isPresent(diffFromPrimaryTimezone)) {
      date2 = addMinutes(date2, diffFromPrimaryTimezone);
    }
    return {
      date: date2,
      top: row.top,
      className: className2,
      diffFromPrimaryTimezone
    };
  }, [rowsByHour, nowIndicatorState, showNowIndicator]);
  const [primaryTimezone, ...otherTimezones] = timezones;
  const hourRowsWidth = otherTimezones.length > 0 ? 100 / (otherTimezones.length + 1) : 100;
  const primaryTimezoneHourRowsProps = rowsByHour.map((row, index) => hourRowsPropsMapper(row, index));
  const otherTimezoneHourRowsProps = F$2(() => {
    if (otherTimezones.length === 0) {
      return [];
    }
    return otherTimezones.reverse().map((timezone) => {
      const { timezoneName } = timezone;
      const primaryTimezoneOffset = tzConverter(primaryTimezone.timezoneName).getTimezoneOffset();
      const currentTimezoneOffset = tzConverter(timezoneName).getTimezoneOffset();
      const diffFromPrimaryTimezone = currentTimezoneOffset - primaryTimezoneOffset;
      return rowsByHour.map((row, index) => hourRowsPropsMapper(row, index, diffFromPrimaryTimezone));
    });
  }, [hourRowsPropsMapper, otherTimezones, primaryTimezone, rowsByHour, tzConverter]);
  return /* @__PURE__ */ h$3("div", {
    className: cls(classNames$1.timeColumn),
    style: { width },
    "data-testid": "timegrid-time-column"
  }, !timezonesCollapsed && otherTimezoneHourRowsProps.map((rowsInfo) => /* @__PURE__ */ h$3(HourRows, {
    key: rowsInfo[0].diffFromPrimaryTimezone,
    rowsInfo,
    isPrimary: false,
    borderRight,
    width: hourRowsWidth,
    nowIndicatorState
  })), /* @__PURE__ */ h$3(HourRows, {
    rowsInfo: primaryTimezoneHourRowsProps,
    isPrimary: true,
    borderRight,
    width: timezonesCollapsed ? 100 : hourRowsWidth,
    nowIndicatorState
  }));
});
function getTopPercentByTime(date2, start, end) {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const time = limit(date2.getTime(), [startTime], [endTime]) - startTime;
  const max2 = endTime - startTime;
  const topPercent = ratio(max2, 100, time);
  return limit(topPercent, [0], [100]);
}
function getTopHeightByTime(start, end, minTime, maxTime) {
  const top = getTopPercentByTime(start, minTime, maxTime);
  const bottom = getTopPercentByTime(end, minTime, maxTime);
  const height = bottom - top;
  return {
    top,
    height
  };
}
const MIN_HEIGHT_PERCENT = 1;
function isBetween(startColumnTime, endColumnTime) {
  return (uiModel) => {
    const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
    const ownStarts = addMinutes(uiModel.getStarts(), -goingDuration);
    const ownEnds = addMinutes(uiModel.getEnds(), comingDuration);
    return !(ownEnds <= startColumnTime || ownStarts >= endColumnTime);
  };
}
function setInnerHeights(uiModel, options) {
  const { renderStart, renderEnd, modelStart, modelEnd } = options;
  const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
  let modelDurationHeight = 100;
  if (goingDuration > 0) {
    const { height: goingDurationHeight } = getTopHeightByTime(renderStart, modelStart, renderStart, renderEnd);
    uiModel.goingDurationHeight = goingDurationHeight;
    modelDurationHeight -= goingDurationHeight;
  }
  if (comingDuration > 0) {
    const { height: comingDurationHeight } = getTopHeightByTime(modelEnd, renderEnd, renderStart, renderEnd);
    uiModel.comingDurationHeight = comingDurationHeight;
    modelDurationHeight -= comingDurationHeight;
  }
  uiModel.modelDurationHeight = modelDurationHeight;
}
function setCroppedEdges(uiModel, options) {
  const { goingStart, comingEnd, startColumnTime, endColumnTime } = options;
  if (goingStart < startColumnTime) {
    uiModel.croppedStart = true;
  }
  if (comingEnd > endColumnTime) {
    uiModel.croppedEnd = true;
  }
}
function getDuplicateLeft(uiModel, baseLeft) {
  const { duplicateEvents, duplicateEventIndex } = uiModel;
  const prevEvent = duplicateEvents[duplicateEventIndex - 1];
  let left = baseLeft;
  if (prevEvent) {
    const { percent: leftPercent, px: leftPx } = extractPercentPx(`${prevEvent.duplicateLeft}`);
    const { percent: widthPercent, px: widthPx } = extractPercentPx(`${prevEvent.duplicateWidth}`);
    const percent = leftPercent + widthPercent;
    const px = leftPx + widthPx + TIME_EVENT_CONTAINER_MARGIN_LEFT;
    if (percent !== 0) {
      left = `calc(${toPercent(percent)} ${px > 0 ? "+" : "-"} ${toPx(Math.abs(px))})`;
    } else {
      left = toPx(px);
    }
  } else {
    left = toPercent(left);
  }
  return left;
}
function getDuplicateWidth(uiModel, baseWidth) {
  const { collapse } = uiModel;
  return collapse ? `${COLLAPSED_DUPLICATE_EVENT_WIDTH_PX}px` : `calc(${toPercent(baseWidth)} - ${toPx((COLLAPSED_DUPLICATE_EVENT_WIDTH_PX + TIME_EVENT_CONTAINER_MARGIN_LEFT) * (uiModel.duplicateEvents.length - 1) + TIME_EVENT_CONTAINER_MARGIN_LEFT)})`;
}
function setDimension(uiModel, options) {
  const { startColumnTime, endColumnTime, baseWidth, columnIndex, renderStart, renderEnd } = options;
  const { duplicateEvents } = uiModel;
  const { top, height } = getTopHeightByTime(renderStart, renderEnd, startColumnTime, endColumnTime);
  const dimension = {
    top,
    left: baseWidth * columnIndex,
    width: baseWidth,
    height: Math.max(MIN_HEIGHT_PERCENT, height),
    duplicateLeft: "",
    duplicateWidth: ""
  };
  if (duplicateEvents.length > 0) {
    dimension.duplicateLeft = getDuplicateLeft(uiModel, dimension.left);
    dimension.duplicateWidth = getDuplicateWidth(uiModel, dimension.width);
  }
  uiModel.setUIProps(dimension);
}
function getRenderInfoOptions(uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime) {
  const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
  const modelStart = uiModel.getStarts();
  const modelEnd = uiModel.getEnds();
  const goingStart = addMinutes(modelStart, -goingDuration);
  const comingEnd = addMinutes(modelEnd, comingDuration);
  const renderStart = max(goingStart, startColumnTime);
  const renderEnd = min(comingEnd, endColumnTime);
  return {
    baseWidth,
    columnIndex,
    modelStart,
    modelEnd,
    renderStart,
    renderEnd,
    goingStart,
    comingEnd,
    startColumnTime,
    endColumnTime,
    duplicateEvents: uiModel.duplicateEvents
  };
}
function setRenderInfo({
  uiModel,
  columnIndex,
  baseWidth,
  startColumnTime,
  endColumnTime,
  isDuplicateEvent = false
}) {
  if (!isDuplicateEvent && uiModel.duplicateEvents.length > 0) {
    uiModel.duplicateEvents.forEach((event) => {
      setRenderInfo({
        uiModel: event,
        columnIndex,
        baseWidth,
        startColumnTime,
        endColumnTime,
        isDuplicateEvent: true
      });
    });
    return;
  }
  const renderInfoOptions = getRenderInfoOptions(uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime);
  setDimension(uiModel, renderInfoOptions);
  setInnerHeights(uiModel, renderInfoOptions);
  setCroppedEdges(uiModel, renderInfoOptions);
}
function setDuplicateEvents(uiModels, options, selectedDuplicateEventCid) {
  const { getDuplicateEvents, getMainEvent } = options;
  const eventObjects = uiModels.map((uiModel) => uiModel.model.toEventObject());
  uiModels.forEach((targetUIModel) => {
    if (targetUIModel.collapse || targetUIModel.duplicateEvents.length > 0) {
      return;
    }
    const duplicateEvents = getDuplicateEvents(targetUIModel.model.toEventObject(), eventObjects);
    if (duplicateEvents.length <= 1) {
      return;
    }
    const mainEvent = getMainEvent(duplicateEvents);
    const duplicateEventUIModels = duplicateEvents.map((event) => uiModels.find((uiModel) => uiModel.cid() === event.__cid));
    const isSelectedGroup = !!(selectedDuplicateEventCid > DEFAULT_DUPLICATE_EVENT_CID && duplicateEvents.find((event) => event.__cid === selectedDuplicateEventCid));
    const duplicateStarts = duplicateEvents.reduce((acc, { start, goingDuration }) => {
      const renderStart = addMinutes(start, -goingDuration);
      return min(acc, renderStart);
    }, duplicateEvents[0].start);
    const duplicateEnds = duplicateEvents.reduce((acc, { end, comingDuration }) => {
      const renderEnd = addMinutes(end, comingDuration);
      return max(acc, renderEnd);
    }, duplicateEvents[0].end);
    duplicateEventUIModels.forEach((event, index) => {
      const isMain = event.cid() === mainEvent.__cid;
      const collapse = !(isSelectedGroup && event.cid() === selectedDuplicateEventCid || !isSelectedGroup && isMain);
      event.setUIProps({
        duplicateEvents: duplicateEventUIModels,
        duplicateEventIndex: index,
        collapse,
        isMain,
        duplicateStarts,
        duplicateEnds
      });
    });
  });
  return uiModels;
}
function setRenderInfoOfUIModels(events, startColumnTime, endColumnTime, selectedDuplicateEventCid, collapseDuplicateEventsOptions) {
  const uiModels = events.filter(isTimeEvent).filter(isBetween(startColumnTime, endColumnTime)).sort(array.compare.event.asc);
  if (collapseDuplicateEventsOptions) {
    setDuplicateEvents(uiModels, collapseDuplicateEventsOptions, selectedDuplicateEventCid);
  }
  const expandedEvents = uiModels.filter((uiModel) => !uiModel.collapse);
  const uiModelColl = createEventCollection(...expandedEvents);
  const usingTravelTime = true;
  const collisionGroups = getCollisionGroup(expandedEvents, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
  matrices.forEach((matrix) => {
    const maxRowLength = Math.max(...matrix.map((row) => row.length));
    const baseWidth = Math.round(100 / maxRowLength);
    matrix.forEach((row) => {
      row.forEach((uiModel, columnIndex) => {
        setRenderInfo({ uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime });
      });
    });
  });
  return uiModels;
}
function useInterval(callback, delay) {
  const savedCallback = s$2(callback);
  _$2(() => {
    savedCallback.current = callback;
  }, [callback]);
  _$2(() => {
    const tick = () => savedCallback.current();
    const intervalDelay = delay != null ? delay : -1;
    if (intervalDelay > 0) {
      const id = setInterval(tick, intervalDelay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
function useIsMounted() {
  const isMountedRef = s$2(true);
  _$2(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return T$1(() => isMountedRef.current, []);
}
const classNames = {
  timegrid: cls(className),
  scrollArea: cls(addTimeGridPrefix("scroll-area"))
};
function TimeGrid({ timeGridData, events }) {
  const {
    isReadOnly,
    week: { narrowWeekend, startDayOfWeek, collapseDuplicateEvents }
  } = useStore(optionsSelector);
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const selectedDuplicateEventCid = useStore((state) => state.weekViewLayout.selectedDuplicateEventCid);
  const [, getNow] = usePrimaryTimezone();
  const isMounted = useIsMounted();
  const { width: timeGridLeftWidth } = useTheme(weekTimeGridLeftSelector);
  const [nowIndicatorState, setNowIndicatorState] = y$1(null);
  const { columns, rows } = timeGridData;
  const lastColumnIndex = columns.length - 1;
  const totalUIModels = F$2(() => columns.map(({ date: date2 }) => events.filter(isBetween(toStartOfDay(date2), toEndOfDay(date2))).map((uiModel) => uiModel.clone())).map((uiModelsByColumn, columnIndex) => setRenderInfoOfUIModels(uiModelsByColumn, setTimeStrToDate(columns[columnIndex].date, first(rows).startTime), setTimeStrToDate(columns[columnIndex].date, last(rows).endTime), selectedDuplicateEventCid, collapseDuplicateEvents)), [columns, rows, events, selectedDuplicateEventCid, collapseDuplicateEvents]);
  const currentDateData = F$2(() => {
    const now = getNow();
    const currentDateIndexInColumns = columns.findIndex((column) => isSameDate(column.date, now));
    if (currentDateIndexInColumns < 0) {
      return null;
    }
    const startTime = setTimeStrToDate(columns[currentDateIndexInColumns].date, timeGridData.rows[0].startTime);
    const endTime = setTimeStrToDate(columns[currentDateIndexInColumns].date, last(timeGridData.rows).endTime);
    return {
      startTime,
      endTime,
      currentDateIndex: currentDateIndexInColumns
    };
  }, [columns, getNow, timeGridData.rows]);
  const [columnsContainer, setColumnsContainer] = useDOMNode();
  const gridPositionFinder = F$2(() => createGridPositionFinder({
    rowsCount: rows.length,
    columnsCount: columns.length,
    container: columnsContainer,
    narrowWeekend,
    startDayOfWeek
  }), [columns.length, columnsContainer, narrowWeekend, rows.length, startDayOfWeek]);
  const onMouseDown = useGridSelection({
    type: "timeGrid",
    gridPositionFinder,
    selectionSorter: timeGridSelectionHelper.sortSelection,
    dateGetter: timeGridSelectionHelper.getDateFromCollection,
    dateCollection: timeGridData
  });
  const updateTimeGridIndicator = T$1(() => {
    if (isPresent(currentDateData)) {
      const { startTime, endTime } = currentDateData;
      const now = getNow();
      if (startTime <= now && now <= endTime) {
        setNowIndicatorState({
          top: getTopPercentByTime(now, startTime, endTime),
          now
        });
      }
    }
  }, [currentDateData, getNow]);
  h$2(() => {
    var _a;
    if (isMounted()) {
      if (((_a = currentDateData == null ? void 0 : currentDateData.currentDateIndex) != null ? _a : -1) >= 0) {
        updateTimeGridIndicator();
      } else {
        setNowIndicatorState(null);
      }
    }
  }, [currentDateData, isMounted, updateTimeGridIndicator]);
  useInterval(updateTimeGridIndicator, isPresent(currentDateData) ? MS_PER_MINUTES : null);
  return /* @__PURE__ */ h$3("div", {
    className: classNames.timegrid
  }, /* @__PURE__ */ h$3("div", {
    className: classNames.scrollArea
  }, /* @__PURE__ */ h$3(TimeColumn, {
    timeGridRows: rows,
    nowIndicatorState
  }), /* @__PURE__ */ h$3("div", {
    className: cls("columns"),
    style: { left: timeGridLeftWidth },
    ref: setColumnsContainer,
    onMouseDown: passConditionalProp(!isReadOnly, onMouseDown)
  }, /* @__PURE__ */ h$3(GridLines, {
    timeGridRows: rows
  }), /* @__PURE__ */ h$3(MovingEventShadow$1, {
    gridPositionFinder,
    timeGridData
  }), columns.map((column, index) => /* @__PURE__ */ h$3(Column, {
    key: column.date.toString(),
    timeGridData,
    columnDate: column.date,
    columnWidth: toPercent(column.width),
    columnIndex: index,
    totalUIModels,
    gridPositionFinder,
    isLastColumn: index === lastColumnIndex
  })), showNowIndicator && isPresent(currentDateData) && isPresent(nowIndicatorState) ? /* @__PURE__ */ h$3(NowIndicator, {
    top: nowIndicatorState.top,
    columnWidth: columns[0].width,
    columnCount: columns.length,
    columnIndex: currentDateData.currentDateIndex
  }) : null)));
}
function TimezoneCollapseButton({ isCollapsed }) {
  const eventBus = useEventBus();
  const iconClassName = cls("icon", {
    "ic-arrow-right": isCollapsed,
    "ic-arrow-left": !isCollapsed
  });
  return /* @__PURE__ */ h$3("button", {
    className: cls(addTimeGridPrefix("timezone-collapse-button")),
    "aria-expanded": !isCollapsed,
    onClick: () => eventBus.fire("clickTimezonesCollapseBtn", isCollapsed)
  }, /* @__PURE__ */ h$3("span", {
    className: iconClassName,
    role: "img"
  }));
}
function TimezoneLabel({ label, offset, tooltip, width = 100, left }) {
  return /* @__PURE__ */ h$3("div", {
    title: tooltip,
    className: cls(addTimeGridPrefix("timezone-label")),
    style: {
      width: toPercent(width),
      height: toPercent(100),
      left: toPercent(left)
    },
    role: "gridcell"
  }, /* @__PURE__ */ h$3(Template, {
    template: "timezoneDisplayLabel",
    param: { displayLabel: label, timezoneOffset: offset },
    as: "span"
  }));
}
function useTimezoneCollapseOptions() {
  const showTimezoneCollapseButton = useStore(showTimezoneCollapseButtonOptionSelector);
  const timezonesCollapsed = useStore(timezonesCollapsedOptionSelector);
  return F$2(() => {
    return {
      showTimezoneCollapseButton,
      timezonesCollapsed
    };
  }, [showTimezoneCollapseButton, timezonesCollapsed]);
}
function TimezoneLabels({ top }) {
  const timezones = useStore(timezonesSelector);
  const { width } = useTheme(weekTimeGridLeftSelector);
  const tzConverter = useTZConverter();
  const { showTimezoneCollapseButton, timezonesCollapsed } = useTimezoneCollapseOptions();
  if (timezones.length <= 1) {
    return null;
  }
  const timezoneLabelProps = timezones.map(({ displayLabel, timezoneName, tooltip }) => {
    return !isUndefined_1(displayLabel) ? { label: displayLabel, offset: null, tooltip: tooltip != null ? tooltip : timezoneName } : {
      label: null,
      offset: tzConverter(timezoneName).getTimezoneOffset(),
      tooltip: tooltip != null ? tooltip : timezoneName
    };
  });
  const [primaryTimezone, ...restTimezones] = timezoneLabelProps;
  const subTimezones = restTimezones.reverse();
  const timezonesCount = timezonesCollapsed ? 1 : timezones.length;
  const timezoneLabelWidth = 100 / timezonesCount;
  return /* @__PURE__ */ h$3("div", {
    style: {
      top,
      width
    },
    role: "columnheader",
    className: cls("timezone-labels-slot")
  }, !timezonesCollapsed && subTimezones.map((subTimezone, index) => {
    var _a;
    return /* @__PURE__ */ h$3(TimezoneLabel, __spreadValues({
      key: `subTimezone-${(_a = subTimezone.label) != null ? _a : subTimezone.offset}`,
      width: timezoneLabelWidth,
      left: timezoneLabelWidth * index
    }, subTimezone));
  }), showTimezoneCollapseButton && /* @__PURE__ */ h$3(TimezoneCollapseButton, {
    isCollapsed: timezonesCollapsed
  }), /* @__PURE__ */ h$3(TimezoneLabel, __spreadValues({
    width: timezoneLabelWidth,
    left: timezoneLabelWidth * subTimezones.length
  }, primaryTimezone)));
}
const VIEW_TYPE = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day"
};
const DEFAULT_TASK_PANEL = ["milestone", "task"];
const DEFAULT_EVENT_PANEL = ["allday", "time"];
function getActivePanels(taskView, eventView) {
  const activePanels = [];
  if (taskView === true) {
    activePanels.push(...DEFAULT_TASK_PANEL);
  } else if (Array.isArray(taskView)) {
    activePanels.push(...taskView);
  }
  if (eventView === true) {
    activePanels.push(...DEFAULT_EVENT_PANEL);
  } else if (Array.isArray(eventView)) {
    activePanels.push(...eventView);
  }
  return activePanels;
}
function useEventsWithTimezone(events) {
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const tzConverter = useTZConverter();
  return F$2(() => {
    if (primaryTimezoneName === "Local") {
      return events;
    }
    const isSystemUsingDST = isUsingDST(new TZDate());
    const {
      timedEvents = createEventCollection(),
      totalEvents = createEventCollection()
    } = events.groupBy((eventModel) => eventModel.category === "time" ? "timedEvents" : "totalEvents");
    timedEvents.each((eventModel) => {
      const clonedEventModel = clone$1(eventModel);
      let zonedStart = tzConverter(primaryTimezoneName, clonedEventModel.start);
      let zonedEnd = tzConverter(primaryTimezoneName, clonedEventModel.end);
      if (isSystemUsingDST) {
        if (!isUsingDST(zonedStart)) {
          zonedStart = zonedStart.addHours(1);
        }
        if (!isUsingDST(zonedEnd)) {
          zonedEnd = zonedEnd.addHours(1);
        }
      } else {
        if (isUsingDST(zonedStart)) {
          zonedStart = zonedStart.addHours(-1);
        }
        if (isUsingDST(zonedEnd)) {
          zonedEnd = zonedEnd.addHours(-1);
        }
      }
      clonedEventModel.start = zonedStart;
      clonedEventModel.end = zonedEnd;
      totalEvents.add(clonedEventModel);
    });
    return totalEvents;
  }, [events, primaryTimezoneName, tzConverter]);
}
function useCalendarData(calendar, ...filters) {
  const filteredEvents = F$2(() => calendar.events.filter(Collection.and(...filters)), [calendar.events, filters]);
  const filteredEventsWithTimezone = useEventsWithTimezone(filteredEvents);
  return F$2(() => __spreadProps(__spreadValues({}, calendar), {
    events: filteredEventsWithTimezone
  }), [calendar, filteredEventsWithTimezone]);
}
function isTimeGridDraggingType(draggingItemType) {
  return /^(event|gridSelection)\/timeGrid/.test(draggingItemType != null ? draggingItemType : "");
}
function useTimeGridScrollSync(scrollArea, rowCount) {
  useTransientUpdate(dndSelector, ({ y: y2, draggingItemType, draggingState }) => {
    if (isPresent(scrollArea) && isTimeGridDraggingType(draggingItemType) && draggingState === DraggingState.DRAGGING && isPresent(y2)) {
      const { offsetTop, offsetHeight, scrollHeight } = scrollArea;
      const scrollBoundary = Math.floor(scrollHeight / rowCount);
      const layoutHeight = offsetTop + offsetHeight;
      if (y2 < offsetTop + scrollBoundary) {
        const scrollDiff = y2 - (offsetTop + scrollBoundary);
        scrollArea.scrollTop = Math.max(0, scrollArea.scrollTop + scrollDiff);
      } else if (y2 > layoutHeight - scrollBoundary) {
        const scrollDiff = y2 - (layoutHeight - scrollBoundary);
        scrollArea.scrollTop = Math.min(offsetHeight, scrollArea.scrollTop + scrollDiff);
      }
    }
  });
}
function timegridHeightSelector(state) {
  var _a, _b, _c;
  return (_c = (_b = (_a = state.weekViewLayout) == null ? void 0 : _a.dayGridRows) == null ? void 0 : _b.time) == null ? void 0 : _c.height;
}
function useTimezoneLabelsTop(timePanel) {
  const timeGridPanelHeight = useStore(timegridHeightSelector);
  const [stickyTop, setStickyTop] = y$1(null);
  h$2(() => {
    if (isPresent(timeGridPanelHeight) && timePanel) {
      setStickyTop(timePanel.offsetTop);
    }
  }, [timeGridPanelHeight, timePanel]);
  return stickyTop;
}
function useDayViewState() {
  const calendar = useStore(calendarSelector);
  const options = useStore(optionsSelector);
  const { dayGridRows: gridRowLayout, lastPanelType } = useStore(weekViewLayoutSelector);
  const { renderDate } = useStore(viewSelector);
  return F$2(() => ({
    calendar,
    options,
    gridRowLayout,
    lastPanelType,
    renderDate
  }), [calendar, options, gridRowLayout, lastPanelType, renderDate]);
}
function Day$1() {
  var _a, _b;
  const { calendar, options, gridRowLayout, lastPanelType, renderDate } = useDayViewState();
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const gridHeaderMarginLeft = useTheme(T$1((theme) => theme.week.dayGridLeft.width, []));
  const [timePanel, setTimePanelRef] = useDOMNode();
  const weekOptions = options.week;
  const { narrowWeekend, startDayOfWeek, workweek, hourStart, hourEnd, eventView, taskView } = weekOptions;
  const days = F$2(() => [renderDate], [renderDate]);
  const dayNames = getDayNames(days, (_b = (_a = options.week) == null ? void 0 : _a.dayNames) != null ? _b : []);
  const { rowStyleInfo, cellWidthMap } = getRowStyleInfo(days.length, narrowWeekend, startDayOfWeek, workweek);
  const calendarData = useCalendarData(calendar, options.eventFilter);
  const dayGridEvents = F$2(() => {
    const getFilterRange = () => {
      if (primaryTimezoneName === "Local") {
        return [toStartOfDay(days[0]), toEndOfDay(days[0])];
      }
      return [toStartOfDay(addDate(days[0], -1)), toEndOfDay(addDate(days[0], 1))];
    };
    const [weekStartDate, weekEndDate] = getFilterRange();
    return getWeekViewEvents(days, calendarData, {
      narrowWeekend,
      hourStart,
      hourEnd,
      weekStartDate,
      weekEndDate
    });
  }, [calendarData, days, hourEnd, hourStart, narrowWeekend, primaryTimezoneName]);
  const timeGridData = F$2(() => createTimeGridData(days, {
    hourStart,
    hourEnd,
    narrowWeekend
  }), [days, hourEnd, hourStart, narrowWeekend]);
  const activePanels = getActivePanels(taskView, eventView);
  const gridRows = activePanels.map((key) => {
    var _a2, _b2;
    if (key === "time") {
      return null;
    }
    const rowType = key;
    return /* @__PURE__ */ h$3(Panel, {
      key: rowType,
      name: rowType,
      resizable: rowType !== lastPanelType
    }, rowType === "allday" ? /* @__PURE__ */ h$3(AlldayGridRow, {
      events: dayGridEvents[rowType],
      rowStyleInfo,
      gridColWidthMap: cellWidthMap,
      weekDates: days,
      height: (_a2 = gridRowLayout[rowType]) == null ? void 0 : _a2.height,
      options: weekOptions
    }) : /* @__PURE__ */ h$3(OtherGridRow, {
      category: rowType,
      events: dayGridEvents[rowType],
      weekDates: days,
      height: (_b2 = gridRowLayout[rowType]) == null ? void 0 : _b2.height,
      options: weekOptions,
      gridColWidthMap: cellWidthMap
    }));
  });
  useTimeGridScrollSync(timePanel, timeGridData.rows.length);
  const stickyTop = useTimezoneLabelsTop(timePanel);
  return /* @__PURE__ */ h$3(Layout, {
    className: cls("day-view"),
    autoAdjustPanels: true
  }, /* @__PURE__ */ h$3(Panel, {
    name: "day-view-day-names",
    initialHeight: WEEK_DAY_NAME_HEIGHT + WEEK_DAY_NAME_BORDER
  }, /* @__PURE__ */ h$3(GridHeader, {
    type: "week",
    dayNames,
    marginLeft: gridHeaderMarginLeft,
    rowStyleInfo
  })), gridRows, activePanels.includes("time") ? /* @__PURE__ */ h$3(Panel, {
    name: "time",
    autoSize: 1,
    ref: setTimePanelRef
  }, /* @__PURE__ */ h$3(TimeGrid, {
    events: dayGridEvents.time,
    timeGridData
  }), /* @__PURE__ */ h$3(TimezoneLabels, {
    top: stickyTop
  })) : null);
}
function AccumulatedGridSelection({ rowIndex, weekDates, narrowWeekend }) {
  const gridSelectionDataByRow = useStore(T$1((state) => state.gridSelection.accumulated.dayGridMonth.map((gridSelection) => dayGridMonthSelectionHelper.calculateSelection(gridSelection, rowIndex, weekDates.length)), [rowIndex, weekDates]));
  return /* @__PURE__ */ h$3("div", {
    className: cls("accumulated-grid-selection")
  }, gridSelectionDataByRow.map((gridSelectionData) => gridSelectionData ? /* @__PURE__ */ h$3(GridSelection$1, {
    type: "accumulated",
    gridSelectionData,
    weekDates,
    narrowWeekend
  }) : null));
}
function MoreEventsButton({ type, number, onClickButton, className: className2 }) {
  const { reset } = useDispatch("dnd");
  const handleMouseDown = (e2) => {
    e2.stopPropagation();
  };
  const handleClick = () => {
    reset();
    onClickButton();
  };
  const exceedButtonTemplate = `monthGrid${type === CellBarType.header ? "Header" : "Footer"}Exceed`;
  return /* @__PURE__ */ h$3("button", {
    type: "button",
    onMouseDown: handleMouseDown,
    onClick: handleClick,
    className: className2
  }, /* @__PURE__ */ h$3(Template, {
    template: exceedButtonTemplate,
    param: number
  }));
}
function getDateColor({
  date: date2,
  theme,
  renderDate,
  isToday
}) {
  const dayIndex = date2.getDay();
  const thisMonth = renderDate.getMonth();
  const isSameMonth2 = thisMonth === date2.getMonth();
  const {
    common: { holiday, saturday, today, dayName },
    month: { dayExceptThisMonth, holidayExceptThisMonth }
  } = theme;
  if (isToday) {
    return today.color;
  }
  if (isSunday(dayIndex)) {
    return isSameMonth2 ? holiday.color : holidayExceptThisMonth.color;
  }
  if (isSaturday(dayIndex)) {
    return isSameMonth2 ? saturday.color : dayExceptThisMonth.color;
  }
  if (!isSameMonth2) {
    return dayExceptThisMonth.color;
  }
  return dayName.color;
}
function useCellHeaderTheme() {
  const common = useCommonTheme();
  const month = useMonthTheme();
  return F$2(() => ({ common, month }), [common, month]);
}
function CellHeader({
  type = CellBarType.header,
  exceedCount = 0,
  date: date2,
  onClickExceedCount
}) {
  const { renderDate } = useStore(viewSelector);
  const [, getNow] = usePrimaryTimezone();
  const theme = useCellHeaderTheme();
  const height = theme.month.gridCell[`${type}Height`];
  const ymd = toFormat(date2, "YYYYMMDD");
  const todayYmd = toFormat(getNow(), "YYYYMMDD");
  const isToday = ymd === todayYmd;
  const templateParam = {
    date: toFormat(date2, "YYYY-MM-DD"),
    day: date2.getDay(),
    hiddenEventCount: exceedCount,
    isOtherMonth: date2.getMonth() !== renderDate.getMonth(),
    isToday: ymd === todayYmd,
    month: date2.getMonth(),
    ymd
  };
  const gridCellDateStyle = { color: getDateColor({ date: date2, theme, isToday, renderDate }) };
  const monthGridTemplate = `monthGrid${capitalize(type)}`;
  if (isNil(height)) {
    return null;
  }
  return /* @__PURE__ */ h$3("div", {
    className: cls(`grid-cell-${type}`),
    style: { height }
  }, /* @__PURE__ */ h$3("span", {
    className: cls("grid-cell-date"),
    style: gridCellDateStyle
  }, /* @__PURE__ */ h$3(Template, {
    template: monthGridTemplate,
    param: templateParam
  })), exceedCount ? /* @__PURE__ */ h$3(MoreEventsButton, {
    type,
    number: exceedCount,
    onClickButton: onClickExceedCount,
    className: cls("grid-cell-more-events")
  }) : null);
}
function getSeeMorePopupSize({
  grid,
  offsetWidth,
  eventLength,
  layerSize
}) {
  const minHeight = getSize(grid).height + MONTH_MORE_VIEW_PADDING * 2;
  let width = offsetWidth + MONTH_MORE_VIEW_PADDING * 2;
  const { width: moreViewWidth, height: moreViewHeight } = layerSize;
  const MAX_DISPLAY_EVENT_COUNT = 10;
  width = Math.max(width, MONTH_MORE_VIEW_MIN_WIDTH);
  let height = MONTH_MORE_VIEW_HEADER_HEIGHT + MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM + MONTH_MORE_VIEW_PADDING;
  const eventHeight = MONTH_EVENT_HEIGHT + MONTH_EVENT_MARGIN_TOP;
  if (eventLength <= MAX_DISPLAY_EVENT_COUNT) {
    height += eventHeight * eventLength;
  } else {
    height += eventHeight * MAX_DISPLAY_EVENT_COUNT;
  }
  if (moreViewWidth) {
    width = moreViewWidth;
  }
  if (moreViewHeight) {
    height = moreViewHeight;
  }
  if (isNaN(height) || height < minHeight) {
    height = minHeight;
  }
  return { width, height };
}
function getSeeMorePopupPosition(popupSize, appContainerSize, cellRect) {
  const {
    width: containerWidth,
    height: containerHeight,
    left: containerLeft,
    top: containerTop
  } = appContainerSize;
  const { width: popupWidth, height: popupHeight } = popupSize;
  const containerRight = containerLeft + containerWidth;
  const containerBottom = containerTop + containerHeight;
  let left = cellRect.left + cellRect.width / 2 - popupWidth / 2;
  let { top } = cellRect;
  const isLeftOutOfContainer = left < containerLeft;
  const isRightOutOfContainer = left + popupWidth > containerRight;
  const isUpperOutOfContainer = top < containerTop;
  const isLowerOutOfContainer = top + popupHeight > containerBottom;
  if (isLeftOutOfContainer) {
    left = containerLeft;
  }
  if (isRightOutOfContainer) {
    left = containerRight - popupWidth;
  }
  if (isUpperOutOfContainer) {
    top = containerTop;
  }
  if (isLowerOutOfContainer) {
    top = containerBottom - popupHeight;
  }
  return { top: top + window.scrollY, left: left + window.scrollX };
}
function getSeeMorePopupRect({
  layoutContainer,
  cell,
  popupSize
}) {
  const containerRect = layoutContainer.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  const popupPosition = getSeeMorePopupPosition(popupSize, containerRect, cellRect);
  return __spreadValues(__spreadValues({}, popupSize), popupPosition);
}
function usePopupPosition(eventLength, parentContainer, layoutContainer) {
  const { width: moreViewWidth, height: moreViewHeight } = useTheme(monthMoreViewSelector);
  const [container, containerRefCallback] = useDOMNode();
  const [popupPosition, setPopupPosition] = y$1(null);
  _$2(() => {
    if (layoutContainer && parentContainer && container) {
      const popupSize = getSeeMorePopupSize({
        grid: parentContainer,
        offsetWidth: container.offsetWidth,
        eventLength,
        layerSize: {
          width: moreViewWidth,
          height: moreViewHeight
        }
      });
      const rect = getSeeMorePopupRect({
        cell: container,
        layoutContainer,
        popupSize
      });
      setPopupPosition(rect);
    }
  }, [layoutContainer, container, eventLength, parentContainer, moreViewWidth, moreViewHeight]);
  return { popupPosition, containerRefCallback };
}
function weekendBackgroundColorSelector(theme) {
  return theme.month.weekend.backgroundColor;
}
function GridCell({ date: date2, events = [], style, parentContainer, contentAreaHeight }) {
  const layoutContainer = useLayoutContainer();
  const { showSeeMorePopup } = useDispatch("popup");
  const backgroundColor = useTheme(weekendBackgroundColorSelector);
  const { popupPosition, containerRefCallback } = usePopupPosition(events.length, parentContainer, layoutContainer);
  const onOpenSeeMorePopup = T$1(() => {
    if (popupPosition) {
      showSeeMorePopup({
        date: date2,
        popupPosition,
        events
      });
    }
  }, [date2, events, popupPosition, showSeeMorePopup]);
  const exceedCount = getExceedCount(events, contentAreaHeight, MONTH_EVENT_HEIGHT + MONTH_EVENT_MARGIN_TOP);
  return /* @__PURE__ */ h$3("div", {
    className: cls("daygrid-cell"),
    style: __spreadProps(__spreadValues({}, style), { backgroundColor: isWeekend(date2.getDay()) ? backgroundColor : "inherit" }),
    ref: containerRefCallback
  }, /* @__PURE__ */ h$3(CellHeader, {
    type: CellBarType.header,
    exceedCount,
    date: date2,
    onClickExceedCount: onOpenSeeMorePopup
  }), /* @__PURE__ */ h$3(CellHeader, {
    type: CellBarType.footer,
    exceedCount,
    date: date2,
    onClickExceedCount: onOpenSeeMorePopup
  }));
}
const GridRow = g$1(function GridRow2({
  week,
  rowInfo,
  gridDateEventModelMap = {},
  contentAreaHeight
}) {
  const [container, containerRefCallback] = useDOMNode();
  const border = useTheme(T$1((theme) => theme.common.border, []));
  return /* @__PURE__ */ h$3("div", {
    className: cls("weekday-grid"),
    style: { borderTop: border },
    ref: containerRefCallback
  }, week.map((date2, columnIndex) => {
    const dayIndex = date2.getDay();
    const { width, left } = rowInfo[columnIndex];
    const ymd = toFormat(toStartOfDay(date2), "YYYYMMDD");
    return /* @__PURE__ */ h$3(GridCell, {
      key: `daygrid-cell-${dayIndex}`,
      date: date2,
      style: {
        width: toPercent(width),
        left: toPercent(left)
      },
      parentContainer: container,
      events: gridDateEventModelMap[ymd],
      contentAreaHeight
    });
  }));
});
function GridSelectionByRow({ weekDates, narrowWeekend, rowIndex }) {
  const gridSelectionDataByRow = useStore(T$1((state) => dayGridMonthSelectionHelper.calculateSelection(state.gridSelection.dayGridMonth, rowIndex, weekDates.length), [rowIndex, weekDates.length]));
  if (isNil(gridSelectionDataByRow)) {
    return null;
  }
  return /* @__PURE__ */ h$3(GridSelection$1, {
    type: "month",
    gridSelectionData: gridSelectionDataByRow,
    weekDates,
    narrowWeekend
  });
}
const MonthEvents = g$1(function MonthEvents2({
  contentAreaHeight,
  eventHeight = EVENT_HEIGHT,
  events,
  name,
  className: className2
}) {
  const { headerHeight } = useTheme(monthGridCellSelector);
  const dayEvents = events.filter(isWithinHeight(contentAreaHeight, eventHeight + MONTH_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `${name}-DayEvent-${uiModel.cid()}`,
    uiModel,
    eventHeight,
    headerHeight: headerHeight != null ? headerHeight : MONTH_CELL_BAR_HEIGHT
  }));
  return /* @__PURE__ */ h$3("div", {
    className: className2
  }, dayEvents);
});
function useDayGridMonthEventMove({
  dateMatrix,
  rowInfo,
  gridPositionFinder,
  rowIndex
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: movingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "move");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const movingEventUIModel = F$2(() => {
    var _a, _b;
    let shadowEventUIModel = null;
    if (movingEvent && (currentGridPos == null ? void 0 : currentGridPos.rowIndex) === rowIndex) {
      shadowEventUIModel = movingEvent;
      shadowEventUIModel.left = rowInfo[(_a = currentGridPos == null ? void 0 : currentGridPos.columnIndex) != null ? _a : 0].left;
      shadowEventUIModel.width = rowInfo[(_b = currentGridPos == null ? void 0 : currentGridPos.columnIndex) != null ? _b : 0].width;
    }
    return shadowEventUIModel;
  }, [movingEvent, currentGridPos == null ? void 0 : currentGridPos.rowIndex, currentGridPos == null ? void 0 : currentGridPos.columnIndex, rowIndex, rowInfo]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(movingEventUIModel) && isPresent(currentGridPos);
    if (shouldUpdate) {
      const preStartDate = movingEventUIModel.model.getStarts();
      const eventDuration = movingEventUIModel.duration();
      const currentDate = dateMatrix[currentGridPos.rowIndex][currentGridPos.columnIndex];
      const timeOffsetPerDay = getDateDifference(currentDate, preStartDate) * MS_PER_DAY;
      const newStartDate = new TZDate(preStartDate.getTime() + timeOffsetPerDay);
      const newEndDate = new TZDate(newStartDate.getTime() + eventDuration);
      eventBus.fire("beforeUpdateEvent", {
        event: movingEventUIModel.model.toEventObject(),
        changes: {
          start: newStartDate,
          end: newEndDate
        }
      });
    }
    clearDraggingEvent();
    clearCurrentGridPos();
  }, isDraggingEnd);
  return movingEventUIModel;
}
function MovingEventShadow({ dateMatrix, gridPositionFinder, rowInfo, rowIndex }) {
  const movingEvent = useDayGridMonthEventMove({
    dateMatrix,
    rowInfo,
    gridPositionFinder,
    rowIndex
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ h$3(HorizontalEvent, {
    uiModel: movingEvent,
    movingLeft: movingEvent.left,
    eventHeight: EVENT_HEIGHT,
    headerHeight: MONTH_CELL_PADDING_TOP + MONTH_CELL_BAR_HEIGHT
  });
}
function getRowPosOfUIModel(uiModel, dateRow) {
  const startColumnIndex = Math.max(getGridDateIndex(uiModel.getStarts(), dateRow), 0);
  const endColumnIndex = getGridDateIndex(uiModel.getEnds(), dateRow);
  return {
    startColumnIndex,
    endColumnIndex
  };
}
function useDayGridMonthEventResize({
  dateMatrix,
  gridPositionFinder,
  renderedUIModels,
  cellWidthMap,
  rowIndex
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingStartUIModel,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const [guideProps, setGuideProps] = y$1(null);
  const clearStates = T$1(() => {
    setGuideProps(null);
    clearCurrentGridPos();
    clearDraggingEvent();
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const baseResizingInfo = F$2(() => {
    if (isNil(resizingStartUIModel)) {
      return null;
    }
    const resizeTargetUIModelRows = renderedUIModels.map(({ uiModels }) => uiModels.filter((uiModel) => uiModel.cid() === resizingStartUIModel.cid()));
    const eventStartDateRowIndex = resizeTargetUIModelRows.findIndex((row) => row.length > 0);
    const eventEndDateRowIndex = findLastIndex(resizeTargetUIModelRows, (row) => row.length > 0);
    const eventStartUIModelPos = getRowPosOfUIModel(resizeTargetUIModelRows[eventStartDateRowIndex][0], dateMatrix[eventStartDateRowIndex]);
    const eventEndUIModelPos = getRowPosOfUIModel(resizeTargetUIModelRows[eventEndDateRowIndex][0], dateMatrix[eventEndDateRowIndex]);
    return {
      eventStartDateColumnIndex: eventStartUIModelPos.startColumnIndex,
      eventStartDateRowIndex,
      eventEndDateColumnIndex: eventEndUIModelPos.endColumnIndex,
      eventEndDateRowIndex,
      resizeTargetUIModelRows
    };
  }, [dateMatrix, renderedUIModels, resizingStartUIModel]);
  const canCalculateProps = isPresent(baseResizingInfo) && isPresent(resizingStartUIModel) && isPresent(currentGridPos);
  _$2(() => {
    if (canCalculateProps && rowIndex === baseResizingInfo.eventStartDateRowIndex) {
      const { eventStartDateRowIndex, eventStartDateColumnIndex } = baseResizingInfo;
      const clonedUIModel = baseResizingInfo.resizeTargetUIModelRows[eventStartDateRowIndex][0].clone();
      let height;
      if (eventStartDateRowIndex === currentGridPos.rowIndex) {
        height = cellWidthMap[eventStartDateColumnIndex][Math.max(eventStartDateColumnIndex, currentGridPos.columnIndex)];
      } else if (eventStartDateRowIndex > currentGridPos.rowIndex) {
        height = cellWidthMap[eventStartDateColumnIndex][eventStartDateColumnIndex];
      } else {
        height = cellWidthMap[eventStartDateColumnIndex][dateMatrix[rowIndex].length - 1];
        clonedUIModel.setUIProps({ exceedRight: true });
      }
      setGuideProps([clonedUIModel, height]);
    }
  }, [baseResizingInfo, canCalculateProps, cellWidthMap, currentGridPos, dateMatrix, rowIndex]);
  _$2(() => {
    if (canCalculateProps && baseResizingInfo.eventStartDateRowIndex < rowIndex && rowIndex < currentGridPos.rowIndex) {
      const clonedUIModel = resizingStartUIModel.clone();
      clonedUIModel.setUIProps({ left: 0, exceedLeft: true, exceedRight: true });
      setGuideProps([clonedUIModel, "100%"]);
    }
  }, [baseResizingInfo, canCalculateProps, currentGridPos, resizingStartUIModel, rowIndex]);
  _$2(() => {
    if (canCalculateProps && baseResizingInfo.eventStartDateRowIndex < currentGridPos.rowIndex && rowIndex === currentGridPos.rowIndex) {
      const clonedUIModel = resizingStartUIModel.clone();
      clonedUIModel.setUIProps({ left: 0, exceedLeft: true });
      setGuideProps([clonedUIModel, cellWidthMap[0][currentGridPos.columnIndex]]);
    }
  }, [
    baseResizingInfo,
    canCalculateProps,
    cellWidthMap,
    currentGridPos,
    resizingStartUIModel,
    rowIndex
  ]);
  _$2(() => {
    if (canCalculateProps && rowIndex > baseResizingInfo.eventStartDateRowIndex && rowIndex > currentGridPos.rowIndex) {
      setGuideProps(null);
    }
  }, [canCalculateProps, currentGridPos, baseResizingInfo, rowIndex]);
  useWhen(() => {
    if (canCalculateProps) {
      const { eventStartDateColumnIndex, eventStartDateRowIndex } = baseResizingInfo;
      const shouldUpdate = !isDraggingCanceled && (currentGridPos.rowIndex === eventStartDateRowIndex && currentGridPos.columnIndex >= eventStartDateColumnIndex || currentGridPos.rowIndex > eventStartDateRowIndex);
      if (shouldUpdate) {
        const targetEndDate = dateMatrix[currentGridPos.rowIndex][currentGridPos.columnIndex];
        eventBus.fire("beforeUpdateEvent", {
          event: resizingStartUIModel.model.toEventObject(),
          changes: {
            end: targetEndDate
          }
        });
      }
    }
    clearStates();
  }, isDraggingEnd);
  return guideProps;
}
function ResizingGuideByRow({
  dateMatrix,
  cellWidthMap,
  gridPositionFinder,
  renderedUIModels,
  rowIndex
}) {
  const resizingGuideProps = useDayGridMonthEventResize({
    dateMatrix,
    gridPositionFinder,
    cellWidthMap,
    renderedUIModels,
    rowIndex
  });
  if (isNil(resizingGuideProps)) {
    return null;
  }
  const [uiModel, resizingWidth] = resizingGuideProps;
  return /* @__PURE__ */ h$3("div", {
    className: cls("weekday-events")
  }, /* @__PURE__ */ h$3(HorizontalEvent, {
    key: `resizing-event-${uiModel.cid()}`,
    uiModel,
    eventHeight: MONTH_EVENT_HEIGHT,
    headerHeight: MONTH_CELL_PADDING_TOP + MONTH_CELL_BAR_HEIGHT,
    resizingWidth
  }));
}
const TOTAL_PERCENT_HEIGHT = 100;
function useCellContentAreaHeight(eventHeight) {
  const visibleEventCount = useStore(monthVisibleEventCountSelector);
  const { headerHeight: themeHeaderHeight, footerHeight: themeFooterHeight } = useTheme(monthGridCellSelector);
  const ref = s$2(null);
  const [cellContentAreaHeight, setCellContentAreaHeight] = y$1(0);
  _$2(() => {
    if (ref.current) {
      const rowHeight = getSize(ref.current).height;
      const headerHeight = MONTH_CELL_PADDING_TOP + (themeHeaderHeight != null ? themeHeaderHeight : MONTH_CELL_BAR_HEIGHT);
      const footerHeight = themeFooterHeight != null ? themeFooterHeight : 0;
      const baseContentAreaHeight = rowHeight - headerHeight - footerHeight;
      const visibleEventCountHeight = visibleEventCount * (eventHeight + MONTH_EVENT_MARGIN_TOP);
      setCellContentAreaHeight(Math.min(baseContentAreaHeight, visibleEventCountHeight));
    }
  }, [themeFooterHeight, themeHeaderHeight, eventHeight, visibleEventCount]);
  return { ref, cellContentAreaHeight };
}
function DayGridMonth({ dateMatrix = [], rowInfo = [], cellWidthMap = [] }) {
  const [gridContainer, setGridContainerRef] = useDOMNode();
  const calendar = useStore(calendarSelector);
  const { ref, cellContentAreaHeight } = useCellContentAreaHeight(MONTH_EVENT_HEIGHT);
  const { eventFilter, month: monthOptions, isReadOnly } = useStore(optionsSelector);
  const { narrowWeekend, startDayOfWeek } = monthOptions;
  const rowHeight = TOTAL_PERCENT_HEIGHT / dateMatrix.length;
  const gridPositionFinder = F$2(() => createGridPositionFinder({
    container: gridContainer,
    rowsCount: dateMatrix.length,
    columnsCount: dateMatrix[0].length,
    narrowWeekend,
    startDayOfWeek
  }), [dateMatrix, gridContainer, narrowWeekend, startDayOfWeek]);
  const calendarData = useCalendarData(calendar, eventFilter);
  const renderedEventUIModels = F$2(() => dateMatrix.map((week) => getRenderedEventUIModels(week, calendarData, narrowWeekend)), [calendarData, dateMatrix, narrowWeekend]);
  const onMouseDown = useGridSelection({
    type: "dayGridMonth",
    gridPositionFinder,
    dateCollection: dateMatrix,
    dateGetter: dayGridMonthSelectionHelper.getDateFromCollection,
    selectionSorter: dayGridMonthSelectionHelper.sortSelection
  });
  return /* @__PURE__ */ h$3("div", {
    ref: setGridContainerRef,
    onMouseDown: passConditionalProp(!isReadOnly, onMouseDown),
    className: cls("month-daygrid")
  }, dateMatrix.map((week, rowIndex) => {
    const { uiModels, gridDateEventModelMap } = renderedEventUIModels[rowIndex];
    return /* @__PURE__ */ h$3("div", {
      key: `dayGrid-events-${rowIndex}`,
      className: cls("month-week-item"),
      style: { height: toPercent(rowHeight) },
      ref
    }, /* @__PURE__ */ h$3("div", {
      className: cls("weekday")
    }, /* @__PURE__ */ h$3(GridRow, {
      gridDateEventModelMap,
      week,
      rowInfo,
      contentAreaHeight: cellContentAreaHeight
    }), /* @__PURE__ */ h$3(MonthEvents, {
      name: "month",
      events: uiModels,
      contentAreaHeight: cellContentAreaHeight,
      eventHeight: MONTH_EVENT_HEIGHT,
      className: cls("weekday-events")
    }), /* @__PURE__ */ h$3(GridSelectionByRow, {
      weekDates: week,
      narrowWeekend,
      rowIndex
    }), /* @__PURE__ */ h$3(AccumulatedGridSelection, {
      rowIndex,
      weekDates: week,
      narrowWeekend
    })), /* @__PURE__ */ h$3(ResizingGuideByRow, {
      dateMatrix,
      gridPositionFinder,
      rowIndex,
      cellWidthMap,
      renderedUIModels: renderedEventUIModels
    }), /* @__PURE__ */ h$3(MovingEventShadow, {
      dateMatrix,
      gridPositionFinder,
      rowIndex,
      rowInfo
    }));
  }));
}
function getMonthDayNames(options) {
  const { dayNames, startDayOfWeek, workweek } = options.month;
  const dayIndices = [...Array(7)].map((_2, i2) => (startDayOfWeek + i2) % 7);
  const monthDayNames = dayIndices.map((i2) => ({
    day: i2,
    label: capitalize(dayNames[i2])
  }));
  return monthDayNames.filter((dayNameInfo) => workweek ? !isWeekend(dayNameInfo.day) : true);
}
function Month$1() {
  const options = useStore(optionsSelector);
  const { renderDate } = useStore(viewSelector);
  const dayNames = getMonthDayNames(options);
  const monthOptions = options.month;
  const { narrowWeekend, startDayOfWeek, workweek } = monthOptions;
  const dateMatrix = F$2(() => createDateMatrixOfMonth(renderDate, monthOptions), [monthOptions, renderDate]);
  const { rowStyleInfo, cellWidthMap } = F$2(() => getRowStyleInfo(dayNames.length, narrowWeekend, startDayOfWeek, workweek), [dayNames.length, narrowWeekend, startDayOfWeek, workweek]);
  const rowInfo = rowStyleInfo.map((cellStyleInfo, index) => __spreadProps(__spreadValues({}, cellStyleInfo), {
    date: dateMatrix[0][index]
  }));
  return /* @__PURE__ */ h$3(Layout, {
    className: cls("month")
  }, /* @__PURE__ */ h$3(GridHeader, {
    type: "month",
    dayNames,
    options: monthOptions,
    rowStyleInfo
  }), /* @__PURE__ */ h$3(DayGridMonth, {
    dateMatrix,
    rowInfo,
    cellWidthMap
  }));
}
function useWeekViewState() {
  const options = useStore(optionsSelector);
  const calendar = useStore(calendarSelector);
  const { dayGridRows: gridRowLayout, lastPanelType } = useStore(weekViewLayoutSelector);
  const { renderDate } = useStore(viewSelector);
  return F$2(() => ({
    options,
    calendar,
    gridRowLayout,
    lastPanelType,
    renderDate
  }), [calendar, gridRowLayout, lastPanelType, options, renderDate]);
}
function Week$1() {
  var _a, _b;
  const { options, calendar, gridRowLayout, lastPanelType, renderDate } = useWeekViewState();
  const gridHeaderMarginLeft = useTheme(T$1((theme) => theme.week.dayGridLeft.width, []));
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const [timePanel, setTimePanelRef] = useDOMNode();
  const weekOptions = options.week;
  const { narrowWeekend, startDayOfWeek, workweek, hourStart, hourEnd, eventView, taskView } = weekOptions;
  const weekDates = F$2(() => getWeekDates(renderDate, weekOptions), [renderDate, weekOptions]);
  const dayNames = getDayNames(weekDates, (_b = (_a = options.week) == null ? void 0 : _a.dayNames) != null ? _b : []);
  const { rowStyleInfo, cellWidthMap } = getRowStyleInfo(weekDates.length, narrowWeekend, startDayOfWeek, workweek);
  const calendarData = useCalendarData(calendar, options.eventFilter);
  const eventByPanel = F$2(() => {
    const getFilterRange = () => {
      if (primaryTimezoneName === "Local") {
        return [toStartOfDay(first(weekDates)), toEndOfDay(last(weekDates))];
      }
      return [toStartOfDay(addDate(first(weekDates), -1)), toEndOfDay(addDate(last(weekDates), 1))];
    };
    const [weekStartDate, weekEndDate] = getFilterRange();
    return getWeekViewEvents(weekDates, calendarData, {
      narrowWeekend,
      hourStart,
      hourEnd,
      weekStartDate,
      weekEndDate
    });
  }, [calendarData, hourEnd, hourStart, narrowWeekend, primaryTimezoneName, weekDates]);
  const timeGridData = F$2(() => createTimeGridData(weekDates, {
    hourStart,
    hourEnd,
    narrowWeekend
  }), [hourEnd, hourStart, narrowWeekend, weekDates]);
  const activePanels = getActivePanels(taskView, eventView);
  const dayGridRows = activePanels.map((key) => {
    var _a2, _b2;
    if (key === "time") {
      return null;
    }
    const rowType = key;
    return /* @__PURE__ */ h$3(Panel, {
      name: rowType,
      key: rowType,
      resizable: rowType !== lastPanelType
    }, rowType === "allday" ? /* @__PURE__ */ h$3(AlldayGridRow, {
      events: eventByPanel[rowType],
      rowStyleInfo,
      gridColWidthMap: cellWidthMap,
      weekDates,
      height: (_a2 = gridRowLayout[rowType]) == null ? void 0 : _a2.height,
      options: weekOptions
    }) : /* @__PURE__ */ h$3(OtherGridRow, {
      category: rowType,
      events: eventByPanel[rowType],
      weekDates,
      height: (_b2 = gridRowLayout[rowType]) == null ? void 0 : _b2.height,
      options: weekOptions,
      gridColWidthMap: cellWidthMap
    }));
  });
  const hasTimePanel = F$2(() => activePanels.includes("time"), [activePanels]);
  useTimeGridScrollSync(timePanel, timeGridData.rows.length);
  const stickyTop = useTimezoneLabelsTop(timePanel);
  return /* @__PURE__ */ h$3(Layout, {
    className: cls("week-view"),
    autoAdjustPanels: true
  }, /* @__PURE__ */ h$3(Panel, {
    name: "week-view-day-names",
    initialHeight: WEEK_DAY_NAME_HEIGHT + WEEK_DAY_NAME_BORDER * 2
  }, /* @__PURE__ */ h$3(GridHeader, {
    type: "week",
    dayNames,
    marginLeft: gridHeaderMarginLeft,
    options: weekOptions,
    rowStyleInfo
  })), dayGridRows, hasTimePanel ? /* @__PURE__ */ h$3(Panel, {
    name: "time",
    autoSize: 1,
    ref: setTimePanelRef
  }, /* @__PURE__ */ h$3(TimeGrid, {
    events: eventByPanel.time,
    timeGridData
  }), /* @__PURE__ */ h$3(TimezoneLabels, {
    top: stickyTop
  })) : null);
}
const views = {
  month: Month$1,
  week: Week$1,
  day: Day$1
};
function Main() {
  const { currentView } = useStore(viewSelector);
  const CurrentViewComponent = F$2(() => views[currentView] || (() => null), [currentView]);
  return /* @__PURE__ */ h$3(CurrentViewComponent, null);
}
var r = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, n = /[&<>"]/;
function o(e2) {
  var t2 = String(e2);
  return n.test(t2) ? t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t2;
}
var a = function(e2, t2) {
  return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
}, i = function(e2, t2, r2) {
  return String(e2).length > (t2 || 40) || !r2 && String(e2).indexOf("\n") !== -1 || String(e2).indexOf("<") !== -1;
}, l = {};
function s(e2) {
  var t2 = "";
  for (var n2 in e2) {
    var o2 = e2[n2];
    o2 != null && o2 !== "" && (t2 && (t2 += " "), t2 += n2[0] == "-" ? n2 : l[n2] || (l[n2] = n2.replace(/([A-Z])/g, "-$1").toLowerCase()), t2 += ": ", t2 += o2, typeof o2 == "number" && r.test(n2) === false && (t2 += "px"), t2 += ";");
  }
  return t2 || void 0;
}
function f(e2, t2) {
  for (var r2 in t2)
    e2[r2] = t2[r2];
  return e2;
}
function u(e2, t2) {
  return Array.isArray(t2) ? t2.reduce(u, e2) : t2 != null && t2 !== false && e2.push(t2), e2;
}
var c = { shallow: true }, p = [], _ = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, d = /[\s\n\\/='"\0<>]/;
function v() {
  this.__d = true;
}
m.render = m;
var g = function(e2, t2) {
  return m(e2, t2, c);
}, h = [];
function m(t2, r2, n2) {
  r2 = r2 || {}, n2 = n2 || {};
  var o2 = l$3.__s;
  l$3.__s = true;
  var a2 = x(t2, r2, n2);
  return l$3.__c && l$3.__c(t2, h), h.length = 0, l$3.__s = o2, a2;
}
function x(r2, n2, l2, c2, g2, h2) {
  if (r2 == null || typeof r2 == "boolean")
    return "";
  if (typeof r2 != "object")
    return o(r2);
  var m2 = l2.pretty, y2 = m2 && typeof m2 == "string" ? m2 : "	";
  if (Array.isArray(r2)) {
    for (var b2 = "", S2 = 0; S2 < r2.length; S2++)
      m2 && S2 > 0 && (b2 += "\n"), b2 += x(r2[S2], n2, l2, c2, g2, h2);
    return b2;
  }
  var k2, w2 = r2.type, O2 = r2.props, C2 = false;
  if (typeof w2 == "function") {
    if (C2 = true, !l2.shallow || !c2 && l2.renderRootComponent !== false) {
      if (w2 === p$3) {
        var A2 = [];
        return u(A2, r2.props.children), x(A2, n2, l2, l2.shallowHighOrder !== false, g2, h2);
      }
      var H2, j2 = r2.__c = { __v: r2, context: n2, props: r2.props, setState: v, forceUpdate: v, __d: true, __h: [] };
      l$3.__b && l$3.__b(r2);
      var F2 = l$3.__r;
      if (w2.prototype && typeof w2.prototype.render == "function") {
        var M2 = w2.contextType, T2 = M2 && n2[M2.__c], $2 = M2 != null ? T2 ? T2.props.value : M2.__ : n2;
        (j2 = r2.__c = new w2(O2, $2)).__v = r2, j2._dirty = j2.__d = true, j2.props = O2, j2.state == null && (j2.state = {}), j2._nextState == null && j2.__s == null && (j2._nextState = j2.__s = j2.state), j2.context = $2, w2.getDerivedStateFromProps ? j2.state = f(f({}, j2.state), w2.getDerivedStateFromProps(j2.props, j2.state)) : j2.componentWillMount && (j2.componentWillMount(), j2.state = j2._nextState !== j2.state ? j2._nextState : j2.__s !== j2.state ? j2.__s : j2.state), F2 && F2(r2), H2 = j2.render(j2.props, j2.state, j2.context);
      } else
        for (var L2 = w2.contextType, E2 = L2 && n2[L2.__c], D2 = L2 != null ? E2 ? E2.props.value : L2.__ : n2, N2 = 0; j2.__d && N2++ < 25; )
          j2.__d = false, F2 && F2(r2), H2 = w2.call(r2.__c, O2, D2);
      return j2.getChildContext && (n2 = f(f({}, n2), j2.getChildContext())), l$3.diffed && l$3.diffed(r2), x(H2, n2, l2, l2.shallowHighOrder !== false, g2, h2);
    }
    w2 = (k2 = w2).displayName || k2 !== Function && k2.name || function(e2) {
      var t2 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t2) {
        for (var r3 = -1, n3 = p.length; n3--; )
          if (p[n3] === e2) {
            r3 = n3;
            break;
          }
        r3 < 0 && (r3 = p.push(e2) - 1), t2 = "UnnamedComponent" + r3;
      }
      return t2;
    }(k2);
  }
  var P2, R2, U2 = "<" + w2;
  if (O2) {
    var W2 = Object.keys(O2);
    l2 && l2.sortAttributes === true && W2.sort();
    for (var q2 = 0; q2 < W2.length; q2++) {
      var z2 = W2[q2], I2 = O2[z2];
      if (z2 !== "children") {
        if (!d.test(z2) && (l2 && l2.allAttributes || z2 !== "key" && z2 !== "ref" && z2 !== "__self" && z2 !== "__source")) {
          if (z2 === "defaultValue")
            z2 = "value";
          else if (z2 === "defaultChecked")
            z2 = "checked";
          else if (z2 === "defaultSelected")
            z2 = "selected";
          else if (z2 === "className") {
            if (O2.class !== void 0)
              continue;
            z2 = "class";
          } else
            g2 && /^xlink:?./.test(z2) && (z2 = z2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if (z2 === "htmlFor") {
            if (O2.for)
              continue;
            z2 = "for";
          }
          z2 === "style" && I2 && typeof I2 == "object" && (I2 = s(I2)), z2[0] === "a" && z2[1] === "r" && typeof I2 == "boolean" && (I2 = String(I2));
          var V2 = l2.attributeHook && l2.attributeHook(z2, I2, n2, l2, C2);
          if (V2 || V2 === "")
            U2 += V2;
          else if (z2 === "dangerouslySetInnerHTML")
            R2 = I2 && I2.__html;
          else if (w2 === "textarea" && z2 === "value")
            P2 = I2;
          else if ((I2 || I2 === 0 || I2 === "") && typeof I2 != "function") {
            if (!(I2 !== true && I2 !== "" || (I2 = z2, l2 && l2.xml))) {
              U2 = U2 + " " + z2;
              continue;
            }
            if (z2 === "value") {
              if (w2 === "select") {
                h2 = I2;
                continue;
              }
              w2 === "option" && h2 == I2 && O2.selected === void 0 && (U2 += " selected");
            }
            U2 = U2 + " " + z2 + '="' + o(I2) + '"';
          }
        }
      } else
        P2 = I2;
    }
  }
  if (m2) {
    var Z2 = U2.replace(/\n\s*/, " ");
    Z2 === U2 || ~Z2.indexOf("\n") ? m2 && ~U2.indexOf("\n") && (U2 += "\n") : U2 = Z2;
  }
  if (U2 += ">", d.test(w2))
    throw new Error(w2 + " is not a valid HTML tag name in " + U2);
  var B2, G2 = _.test(w2) || l2.voidElements && l2.voidElements.test(w2), J2 = [];
  if (R2)
    m2 && i(R2) && (R2 = "\n" + y2 + a(R2, y2)), U2 += R2;
  else if (P2 != null && u(B2 = [], P2).length) {
    for (var K2 = m2 && ~U2.indexOf("\n"), Q2 = false, X2 = 0; X2 < B2.length; X2++) {
      var Y2 = B2[X2];
      if (Y2 != null && Y2 !== false) {
        var ee = x(Y2, n2, l2, true, w2 === "svg" || w2 !== "foreignObject" && g2, h2);
        if (m2 && !K2 && i(ee) && (K2 = true), ee)
          if (m2) {
            var te = ee.length > 0 && ee[0] != "<";
            Q2 && te ? J2[J2.length - 1] += ee : J2.push(ee), Q2 = te;
          } else
            J2.push(ee);
      }
    }
    if (m2 && K2)
      for (var re = J2.length; re--; )
        J2[re] = "\n" + y2 + a(J2[re], y2);
  }
  if (J2.length || R2)
    U2 += J2.join("");
  else if (l2 && l2.xml)
    return U2.substring(0, U2.length - 1) + " />";
  return !G2 || B2 || R2 ? (m2 && ~U2.indexOf("\n") && (U2 += "\n"), U2 = U2 + "</" + w2 + ">") : U2 = U2.replace(/>$/, " />"), U2;
}
m.shallowRender = g;
function forEachOwnProperties$2(obj, iteratee, context) {
  var key;
  context = context || null;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}
var forEachOwnProperties_1 = forEachOwnProperties$2;
var forEachOwnProperties$1 = forEachOwnProperties_1;
function imagePing$1(url, trackingInfo) {
  var trackingElement = document.createElement("img");
  var queryString = "";
  forEachOwnProperties$1(trackingInfo, function(value, key) {
    queryString += "&" + key + "=" + value;
  });
  queryString = queryString.substring(1);
  trackingElement.src = url + "?" + queryString;
  trackingElement.style.display = "none";
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);
  return trackingElement;
}
var imagePing_1 = imagePing$1;
var isUndefined$1 = isUndefined_1;
var imagePing = imagePing_1;
var ms7days = 7 * 24 * 60 * 60 * 1e3;
function isExpired(date2) {
  var now = new Date().getTime();
  return now - date2 > ms7days;
}
function sendHostname(appName, trackingId) {
  var url = "https://www.google-analytics.com/collect";
  var hostname = location.hostname;
  var hitType = "event";
  var eventCategory = "use";
  var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
  var date2 = window.localStorage.getItem(applicationKeyForStorage);
  if (!isUndefined$1(window.tui) && window.tui.usageStatistics === false) {
    return;
  }
  if (date2 && !isExpired(date2)) {
    return;
  }
  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
  setTimeout(function() {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1e3);
}
var sendHostname_1 = sendHostname;
function CalendarContainer({ theme, store, eventBus, children }) {
  return /* @__PURE__ */ h$3(EventBusProvider, {
    value: eventBus
  }, /* @__PURE__ */ h$3(ThemeProvider, {
    store: theme
  }, /* @__PURE__ */ h$3(StoreProvider, {
    store
  }, /* @__PURE__ */ h$3(FloatingLayerProvider, null, children))));
}
const GA_TRACKING_ID = "UA-129951699-1";
function extend$1(target, objects) {
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i2, len;
  for (i2 = 1, len = arguments.length; i2 < len; i2 += 1) {
    source = arguments[i2];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
var extend_1 = extend$1;
function isNull$1(obj) {
  return obj === null;
}
var isNull_1 = isNull$1;
var isUndefined = isUndefined_1;
var isNull = isNull_1;
function isExisty$1(param) {
  return !isUndefined(param) && !isNull(param);
}
var isExisty_1 = isExisty$1;
function isArray$2(obj) {
  return obj instanceof Array;
}
var isArray_1 = isArray$2;
function isFunction$1(obj) {
  return obj instanceof Function;
}
var isFunction_1 = isFunction$1;
function forEachArray$1(arr, iteratee, context) {
  var index = 0;
  var len = arr.length;
  context = context || null;
  for (; index < len; index += 1) {
    if (iteratee.call(context, arr[index], index, arr) === false) {
      break;
    }
  }
}
var forEachArray_1 = forEachArray$1;
var isArray$1 = isArray_1;
var forEachArray = forEachArray_1;
var forEachOwnProperties = forEachOwnProperties_1;
function forEach$1(obj, iteratee, context) {
  if (isArray$1(obj)) {
    forEachArray(obj, iteratee, context);
  } else {
    forEachOwnProperties(obj, iteratee, context);
  }
}
var forEach_1 = forEach$1;
var extend = extend_1;
var isExisty = isExisty_1;
var isString = isString_1;
var isObject = isObject_1;
var isArray = isArray_1;
var isFunction = isFunction_1;
var forEach = forEach_1;
var R_EVENTNAME_SPLIT = /\s+/g;
function CustomEvents() {
  this.events = null;
  this.contexts = null;
}
CustomEvents.mixin = function(func) {
  extend(func.prototype, CustomEvents.prototype);
};
CustomEvents.prototype._getHandlerItem = function(handler, context) {
  var item = { handler };
  if (context) {
    item.context = context;
  }
  return item;
};
CustomEvents.prototype._safeEvent = function(eventName) {
  var events = this.events;
  var byName;
  if (!events) {
    events = this.events = {};
  }
  if (eventName) {
    byName = events[eventName];
    if (!byName) {
      byName = [];
      events[eventName] = byName;
    }
    events = byName;
  }
  return events;
};
CustomEvents.prototype._safeContext = function() {
  var context = this.contexts;
  if (!context) {
    context = this.contexts = [];
  }
  return context;
};
CustomEvents.prototype._indexOfContext = function(ctx) {
  var context = this._safeContext();
  var index = 0;
  while (context[index]) {
    if (ctx === context[index][0]) {
      return index;
    }
    index += 1;
  }
  return -1;
};
CustomEvents.prototype._memorizeContext = function(ctx) {
  var context, index;
  if (!isExisty(ctx)) {
    return;
  }
  context = this._safeContext();
  index = this._indexOfContext(ctx);
  if (index > -1) {
    context[index][1] += 1;
  } else {
    context.push([ctx, 1]);
  }
};
CustomEvents.prototype._forgetContext = function(ctx) {
  var context, contextIndex;
  if (!isExisty(ctx)) {
    return;
  }
  context = this._safeContext();
  contextIndex = this._indexOfContext(ctx);
  if (contextIndex > -1) {
    context[contextIndex][1] -= 1;
    if (context[contextIndex][1] <= 0) {
      context.splice(contextIndex, 1);
    }
  }
};
CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
  var events = this._safeEvent(eventName);
  this._memorizeContext(context);
  events.push(this._getHandlerItem(handler, context));
};
CustomEvents.prototype.on = function(eventName, handler, context) {
  var self2 = this;
  if (isString(eventName)) {
    eventName = eventName.split(R_EVENTNAME_SPLIT);
    forEach(eventName, function(name) {
      self2._bindEvent(name, handler, context);
    });
  } else if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self2.on(name, func, context);
    });
  }
};
CustomEvents.prototype.once = function(eventName, handler, context) {
  var self2 = this;
  if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self2.once(name, func, context);
    });
    return;
  }
  function onceHandler() {
    handler.apply(context, arguments);
    self2.off(eventName, onceHandler, context);
  }
  this.on(eventName, onceHandler, context);
};
CustomEvents.prototype._spliceMatches = function(arr, predicate) {
  var i2 = 0;
  var len;
  if (!isArray(arr)) {
    return;
  }
  for (len = arr.length; i2 < len; i2 += 1) {
    if (predicate(arr[i2]) === true) {
      arr.splice(i2, 1);
      len -= 1;
      i2 -= 1;
    }
  }
};
CustomEvents.prototype._matchHandler = function(handler) {
  var self2 = this;
  return function(item) {
    var needRemove = handler === item.handler;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._matchContext = function(context) {
  var self2 = this;
  return function(item) {
    var needRemove = context === item.context;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
  var self2 = this;
  return function(item) {
    var matchHandler = handler === item.handler;
    var matchContext = context === item.context;
    var needRemove = matchHandler && matchContext;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._offByEventName = function(eventName, handler) {
  var self2 = this;
  var andByHandler = isFunction(handler);
  var matchHandler = self2._matchHandler(handler);
  eventName = eventName.split(R_EVENTNAME_SPLIT);
  forEach(eventName, function(name) {
    var handlerItems = self2._safeEvent(name);
    if (andByHandler) {
      self2._spliceMatches(handlerItems, matchHandler);
    } else {
      forEach(handlerItems, function(item) {
        self2._forgetContext(item.context);
      });
      self2.events[name] = [];
    }
  });
};
CustomEvents.prototype._offByHandler = function(handler) {
  var self2 = this;
  var matchHandler = this._matchHandler(handler);
  forEach(this._safeEvent(), function(handlerItems) {
    self2._spliceMatches(handlerItems, matchHandler);
  });
};
CustomEvents.prototype._offByObject = function(obj, handler) {
  var self2 = this;
  var matchFunc;
  if (this._indexOfContext(obj) < 0) {
    forEach(obj, function(func, name) {
      self2.off(name, func);
    });
  } else if (isString(handler)) {
    matchFunc = this._matchContext(obj);
    self2._spliceMatches(this._safeEvent(handler), matchFunc);
  } else if (isFunction(handler)) {
    matchFunc = this._matchHandlerAndContext(handler, obj);
    forEach(this._safeEvent(), function(handlerItems) {
      self2._spliceMatches(handlerItems, matchFunc);
    });
  } else {
    matchFunc = this._matchContext(obj);
    forEach(this._safeEvent(), function(handlerItems) {
      self2._spliceMatches(handlerItems, matchFunc);
    });
  }
};
CustomEvents.prototype.off = function(eventName, handler) {
  if (isString(eventName)) {
    this._offByEventName(eventName, handler);
  } else if (!arguments.length) {
    this.events = {};
    this.contexts = [];
  } else if (isFunction(eventName)) {
    this._offByHandler(eventName);
  } else if (isObject(eventName)) {
    this._offByObject(eventName, handler);
  }
};
CustomEvents.prototype.fire = function(eventName) {
  this.invoke.apply(this, arguments);
};
CustomEvents.prototype.invoke = function(eventName) {
  var events, args, index, item;
  if (!this.hasListener(eventName)) {
    return true;
  }
  events = this._safeEvent(eventName);
  args = Array.prototype.slice.call(arguments, 1);
  index = 0;
  while (events[index]) {
    item = events[index];
    if (item.handler.apply(item.context, args) === false) {
      return false;
    }
    index += 1;
  }
  return true;
};
CustomEvents.prototype.hasListener = function(eventName) {
  return this.getListenerLength(eventName) > 0;
};
CustomEvents.prototype.getListenerLength = function(eventName) {
  var events = this._safeEvent(eventName);
  return events.length;
};
var customEvents = CustomEvents;
class EventBusImpl extends customEvents {
  on(eventName, handler) {
    super.on(eventName, handler);
    return this;
  }
  off(eventName, handler) {
    super.off(eventName, handler);
    return this;
  }
  fire(eventName, ...args) {
    super.fire(eventName, ...args);
    return this;
  }
  once(eventName, handler) {
    super.once(eventName, handler);
    return this;
  }
}
class CalendarCore {
  constructor(container, options = {}) {
    var _a;
    this.container = isString_1(container) ? (_a = document == null ? void 0 : document.querySelector(container)) != null ? _a : null : container;
    this.theme = initThemeStore(options.theme);
    this.eventBus = new EventBusImpl();
    this.store = initCalendarStore(options);
    this.renderRange = this.calculateRenderRange(toStartOfDay());
    addAttributeHooks();
    if (this.getStoreState().options.usageStatistics === true) {
      sendHostname_1("calendar", GA_TRACKING_ID);
    }
  }
  getStoreState(group) {
    const state = this.store.getState();
    return group ? state[group] : state;
  }
  getStoreDispatchers(group) {
    const dispatchers = this.store.getState().dispatch;
    return group ? dispatchers[group] : dispatchers;
  }
  destroy() {
    if (this.container) {
      un(this.container);
    }
    this.store.clearListeners();
    this.theme.clearListeners();
    this.eventBus.off();
    removeAttributeHooks();
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        delete this[key];
      }
    }
  }
  calculateMonthRenderDate({
    renderDate,
    offset,
    monthOptions
  }) {
    let newRenderDate = new TZDate(renderDate);
    const { visibleWeeksCount } = monthOptions;
    if (visibleWeeksCount > 0) {
      newRenderDate = addDate(newRenderDate, offset * 7 * visibleWeeksCount);
    } else {
      newRenderDate = addMonths(newRenderDate, offset);
    }
    const dateMatrix = createDateMatrixOfMonth(newRenderDate, monthOptions);
    const [[start]] = dateMatrix;
    const end = last(last(dateMatrix));
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  calculateWeekRenderDate({
    renderDate,
    offset,
    weekOptions
  }) {
    const newRenderDate = new TZDate(renderDate);
    newRenderDate.addDate(offset * 7);
    const weekDates = getWeekDates(newRenderDate, weekOptions);
    const [start] = weekDates;
    const end = last(weekDates);
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  calculateDayRenderDate({ renderDate, offset }) {
    const newRenderDate = new TZDate(renderDate);
    newRenderDate.addDate(offset);
    const start = toStartOfDay(newRenderDate);
    const end = toEndOfDay(newRenderDate);
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  move(offset) {
    if (isNil(offset)) {
      return;
    }
    const { currentView, renderDate } = this.getStoreState().view;
    const { options } = this.getStoreState();
    const { setRenderDate } = this.getStoreDispatchers().view;
    const newRenderDate = new TZDate(renderDate);
    let calculatedRenderDate = {
      renderDate: newRenderDate,
      renderRange: { start: new TZDate(newRenderDate), end: new TZDate(newRenderDate) }
    };
    if (currentView === "month") {
      calculatedRenderDate = this.calculateMonthRenderDate({
        renderDate,
        offset,
        monthOptions: options.month
      });
    } else if (currentView === "week") {
      calculatedRenderDate = this.calculateWeekRenderDate({
        renderDate,
        offset,
        weekOptions: options.week
      });
    } else if (currentView === "day") {
      calculatedRenderDate = this.calculateDayRenderDate({ renderDate, offset });
    }
    setRenderDate(calculatedRenderDate.renderDate);
    this.renderRange = calculatedRenderDate.renderRange;
  }
  createEvents(events) {
    const { createEvents: createEvents2 } = this.getStoreDispatchers("calendar");
    createEvents2(events);
  }
  getEventModel(eventId, calendarId) {
    const { events } = this.getStoreState("calendar");
    return events.find(({ id, calendarId: eventCalendarId }) => id === eventId && eventCalendarId === calendarId);
  }
  getEvent(eventId, calendarId) {
    var _a, _b;
    return (_b = (_a = this.getEventModel(eventId, calendarId)) == null ? void 0 : _a.toEventObject()) != null ? _b : null;
  }
  updateEvent(eventId, calendarId, changes) {
    const { updateEvent: updateEvent2 } = this.getStoreDispatchers("calendar");
    const event = this.getEventModel(eventId, calendarId);
    if (event) {
      updateEvent2({ event, eventData: changes });
    }
  }
  deleteEvent(eventId, calendarId) {
    const { deleteEvent: deleteEvent2 } = this.getStoreDispatchers("calendar");
    const event = this.getEventModel(eventId, calendarId);
    if (event) {
      deleteEvent2(event);
    }
  }
  setCalendarVisibility(calendarId, isVisible) {
    const { setCalendarVisibility } = this.getStoreDispatchers("calendar");
    const calendarIds = Array.isArray(calendarId) ? calendarId : [calendarId];
    setCalendarVisibility(calendarIds, isVisible);
  }
  render() {
    if (isPresent(this.container)) {
      P$2(/* @__PURE__ */ h$3(CalendarContainer, {
        theme: this.theme,
        store: this.store,
        eventBus: this.eventBus
      }, this.getComponent()), this.container);
    }
    return this;
  }
  renderToString() {
    return m(/* @__PURE__ */ h$3(CalendarContainer, {
      theme: this.theme,
      store: this.store,
      eventBus: this.eventBus
    }, this.getComponent()));
  }
  clear() {
    const { clearEvents: clearEvents2 } = this.getStoreDispatchers("calendar");
    clearEvents2();
  }
  scrollToNow(scrollBehavior = "auto") {
    this.eventBus.fire("scrollToNow", scrollBehavior);
  }
  calculateRenderRange(renderDate) {
    const { currentView } = this.getStoreState().view;
    const { options } = this.getStoreState();
    const newRenderDate = new TZDate(renderDate);
    let newRenderRange = { start: new TZDate(newRenderDate), end: new TZDate(newRenderDate) };
    if (currentView === "month") {
      newRenderRange = this.calculateMonthRenderDate({
        renderDate,
        offset: 0,
        monthOptions: options.month
      }).renderRange;
    } else if (currentView === "week") {
      newRenderRange = this.calculateWeekRenderDate({
        renderDate,
        offset: 0,
        weekOptions: options.week
      }).renderRange;
    } else if (currentView === "day") {
      newRenderRange = this.calculateDayRenderDate({ renderDate, offset: 0 }).renderRange;
    }
    return newRenderRange;
  }
  today() {
    const { setRenderDate } = this.getStoreDispatchers().view;
    const today = new TZDate();
    setRenderDate(today);
    this.renderRange = this.calculateRenderRange(today);
  }
  setDate(date2) {
    const { setRenderDate } = this.getStoreDispatchers("view");
    const dateToChange = new TZDate(date2);
    setRenderDate(dateToChange);
    this.renderRange = this.calculateRenderRange(dateToChange);
  }
  next() {
    this.move(1);
  }
  prev() {
    this.move(-1);
  }
  setCalendarColor(calendarId, colorOptions) {
    const { setCalendarColor } = this.getStoreDispatchers().calendar;
    setCalendarColor(calendarId, colorOptions);
  }
  changeView(viewName) {
    const { changeView } = this.getStoreDispatchers("view");
    changeView(viewName);
    this.renderRange = this.calculateRenderRange(this.getDate());
  }
  getElement(eventId, calendarId) {
    const event = this.getEvent(eventId, calendarId);
    if (event && this.container) {
      return this.container.querySelector(`[data-event-id="${eventId}"][data-calendar-id="${calendarId}"]`);
    }
    return null;
  }
  setTheme(theme) {
    const { setTheme } = this.theme.getState().dispatch;
    setTheme(theme);
  }
  getOptions() {
    const { options, template } = this.getStoreState();
    const _a = this.theme.getState(), { dispatch } = _a, theme = __objRest(_a, ["dispatch"]);
    return __spreadProps(__spreadValues({}, options), {
      template,
      theme
    });
  }
  setOptions(options) {
    const _a = options, { theme, template } = _a, restOptions = __objRest(_a, ["theme", "template"]);
    const { setTheme } = this.theme.getState().dispatch;
    const {
      options: { setOptions },
      template: { setTemplate }
    } = this.getStoreDispatchers();
    if (isPresent(theme)) {
      setTheme(theme);
    }
    if (isPresent(template)) {
      setTemplate(template);
    }
    setOptions(restOptions);
  }
  getDate() {
    const { renderDate } = this.getStoreState().view;
    return renderDate;
  }
  getDateRangeStart() {
    return this.renderRange.start;
  }
  getDateRangeEnd() {
    return this.renderRange.end;
  }
  getViewName() {
    const { currentView } = this.getStoreState("view");
    return currentView;
  }
  setCalendars(calendars) {
    const { setCalendars } = this.getStoreDispatchers().calendar;
    setCalendars(calendars);
  }
  openFormPopup(event) {
    const { showFormPopup } = this.getStoreDispatchers().popup;
    const eventModel = new EventModel(event);
    const { title, location: location2, start, end, isAllday: isAllday2, isPrivate, state: eventState } = eventModel;
    showFormPopup({
      isCreationPopup: true,
      event: eventModel,
      title,
      location: location2,
      start,
      end,
      isAllday: isAllday2,
      isPrivate,
      eventState
    });
  }
  clearGridSelections() {
    const { clearAll } = this.getStoreDispatchers().gridSelection;
    clearAll();
  }
  fire(eventName, ...args) {
    this.eventBus.fire(eventName, ...args);
    return this;
  }
  off(eventName, handler) {
    this.eventBus.off(eventName, handler);
    return this;
  }
  on(eventName, handler) {
    this.eventBus.on(eventName, handler);
    return this;
  }
  once(eventName, handler) {
    this.eventBus.once(eventName, handler);
    return this;
  }
}
function isValidViewType(viewType) {
  return !!Object.values(VIEW_TYPE).find((type) => type === viewType);
}
class Calendar extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    const { defaultView = "week" } = options;
    if (!isValidViewType(defaultView)) {
      throw new InvalidViewTypeError(defaultView);
    }
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ h$3(Main, null);
  }
}
class Day extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ h$3(Day$1, null);
  }
}
class Month extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ h$3(Month$1, null);
  }
  hideMoreView() {
    const { hideSeeMorePopup } = this.getStoreDispatchers().popup;
    hideSeeMorePopup();
  }
}
class Week extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ h$3(Week$1, null);
  }
}



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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./public/calendar.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toast_ui_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @toast-ui/calendar */ "./node_modules/@toast-ui/calendar/dist/toastui-calendar.mjs");
/* harmony import */ var _toast_ui_calendar_dist_toastui_calendar_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @toast-ui/calendar/dist/toastui-calendar.min.css */ "./node_modules/@toast-ui/calendar/dist/toastui-calendar.min.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./public/css/style.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * * ES6 module in Node.js environment
 * * These import the JS and CSS for the front-end.
 */



/**
 * * Here, we're creating a function called createCalendar(). This function: 
 * * 1.) calls the data GET data from our /get-data route.
 * * 2.) Creates an array of objects to turn the data we receive from HubSpot into one useable by the Calendar library.
 * * 3.) Loops over the array to create another array of objects to instantiate different colored calendars for each custom object data. 
 * * 4.) Instantiates the calendar.
 */

function createCalendar() {
  return _createCalendar.apply(this, arguments);
} //* Always call your function.


function _createCalendar() {
  _createCalendar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var resp, data, dataMap, calendars, calendar, month;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("http://localhost:3000/get-data");

          case 3:
            resp = _context.sent;

            if (!(resp.status === 200)) {
              _context.next = 19;
              break;
            }

            _context.next = 7;
            return resp.json();

          case 7:
            data = _context.sent;
            dataMap = data.map(function (rental) {
              return {
                id: rental.id,
                calendarId: rental.properties.name,
                title: rental.properties.name,
                category: 'allday',
                dueDateClass: '',
                start: rental.properties.start_date,
                end: rental.properties.end_date
              };
            }); //* Testing to make sure your array of objects looks correct

            console.log(dataMap);
            calendars = [];
            dataMap.forEach(function (rental) {
              var avCalendars = {
                id: rental.calendarId,
                name: rental.title,
                backgroundColor: "#".concat(Math.floor(Math.random() * 16777215).toString(16))
              };
              calendars.push(avCalendars);
            }); //* Testing to make sure your array of objects looks correct

            console.log(calendars); //* Create Calendar instance

            calendar = new _toast_ui_calendar__WEBPACK_IMPORTED_MODULE_2__["default"]('#calendar', {
              defaultView: 'month',
              calendars: calendars
            }); //* Add the individual events to calendar

            calendar.createEvents(dataMap); //* Heading above calendar to show month and year

            month = calendar.getDate();
            document.getElementById('month-heading').innerHTML = "".concat(new Date(month).toLocaleString('en-us', {
              month: 'long',
              year: 'numeric'
            }));
            _context.next = 20;
            break;

          case 19:
            throw new Error("Something went wrong: ".concat(resp.statusText));

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            console.log('hi');

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));
  return _createCalendar.apply(this, arguments);
}

createCalendar();
})();

/******/ })()
;
//# sourceMappingURL=calendar.bundled.js.map