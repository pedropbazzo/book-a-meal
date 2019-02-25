"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _meals = _interopRequireDefault(require("./meals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var p = './api/data/menu.json';

var getMenusFromFile = function getMenusFromFile() {
  return new Promise(function (resolve) {
    _fs.default.readFile(p, function (err, fileContent) {
      if (err) {
        resolve([]);
      } else {
        resolve(JSON.parse(fileContent));
      }
    });
  });
};

var Menu =
/*#__PURE__*/
function () {
  function Menu() {
    var catererId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var date = arguments.length > 1 ? arguments[1] : undefined;
    var meals = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Menu);

    this.caterer = catererId;
    this.date = date;
    this.meals = meals;
  }

  _createClass(Menu, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id, quantity) {
        var _this = this;

        var meal, menus, date, allMenus, menuIndex, newMenu, _newMenu;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _meals.default.fetch(id);

              case 3:
                meal = _context.sent;
                _context.next = 6;
                return getMenusFromFile();

              case 6:
                menus = _context.sent;
                date = new Date();
                this.date = date.toLocaleString('en-us', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                });
                allMenus = _toConsumableArray(menus);
                menuIndex = menus.findIndex(function (menu) {
                  return Number(menu.caterer) === Number(_this.caterer);
                });

                if (menuIndex !== -1) {
                  newMenu = allMenus[menuIndex];
                  meal.quantity = quantity;
                  newMenu.meals.push(meal);
                } else {
                  _newMenu = {};
                  _newMenu.date = this.date;
                  _newMenu.caterer = this.caterer;
                  meal.quantity = quantity;
                  _newMenu.meals = [meal];
                  allMenus.push(_newMenu);
                }

                _fs.default.writeFile(p, JSON.stringify(allMenus), function (err) {
                  if (err) console.log(err);
                });

                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                throw new Error(_context.t0.message);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function add(_x, _x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }], [{
    key: "fetchAll",
    value: function () {
      var _fetchAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var menus;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return getMenusFromFile();

              case 3:
                menus = _context2.sent;
                return _context2.abrupt("return", menus);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw new Error(_context2.t0.message);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function fetchAll() {
        return _fetchAll.apply(this, arguments);
      }

      return fetchAll;
    }()
  }, {
    key: "fetchOneMenu",
    value: function () {
      var _fetchOneMenu = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var catererId,
            menus,
            menuIndex,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                catererId = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 1;
                _context3.prev = 1;
                _context3.next = 4;
                return getMenusFromFile();

              case 4:
                menus = _context3.sent;
                menuIndex = menus.findIndex(function (menu) {
                  return Number(menu.caterer) === Number(catererId);
                });
                return _context3.abrupt("return", menus[menuIndex]);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                throw new Error(_context3.t0.message);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 9]]);
      }));

      function fetchOneMenu() {
        return _fetchOneMenu.apply(this, arguments);
      }

      return fetchOneMenu;
    }()
  }, {
    key: "deleteMealFromMenu",
    value: function () {
      var _deleteMealFromMenu = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(mealId) {
        var catererId,
            menus,
            menuIndex,
            meals,
            mealIndex,
            _args4 = arguments;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                catererId = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 1;
                _context4.prev = 1;
                _context4.next = 4;
                return getMenusFromFile();

              case 4:
                menus = _context4.sent;
                menuIndex = menus.findIndex(function (menu) {
                  return Number(menu.caterer) === Number(catererId);
                });
                meals = menus[menuIndex].meals;
                mealIndex = meals.findIndex(function (meal) {
                  return meal.id === mealId;
                });
                meals.splice(mealIndex, 1);
                menus[menuIndex].meals = meals;

                _fs.default.writeFile(p, JSON.stringify(menus), function (err) {
                  if (err) console.log(err);
                });

                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](1);
                throw new Error(_context4.t0.message);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 13]]);
      }));

      function deleteMealFromMenu(_x3) {
        return _deleteMealFromMenu.apply(this, arguments);
      }

      return deleteMealFromMenu;
    }()
  }]);

  return Menu;
}();

var _default = Menu;
exports.default = _default;
//# sourceMappingURL=menu.js.map