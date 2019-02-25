"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../models/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuController =
/*#__PURE__*/
function () {
  function MenuController() {
    _classCallCheck(this, MenuController);
  }

  _createClass(MenuController, null, [{
    key: "addMealToMenu",
    value: function () {
      var _addMealToMenu = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var response, _req$body, mealId, quantity, menu;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, mealId = _req$body.mealId, quantity = _req$body.quantity;
                menu = new _menu.default();
                _context.prev = 2;
                _context.next = 5;
                return menu.add(mealId, quantity);

              case 5:
                response = {
                  code: 200,
                  body: {
                    status: 'success',
                    message: 'Meal Added to Menu'
                  }
                };
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                response = {
                  code: 500,
                  body: {
                    status: 'error',
                    message: 'Failed to Add Meal to Menu'
                  }
                };

              case 11:
                return _context.abrupt("return", res.status(response.code).json(response.body));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function addMealToMenu(_x, _x2) {
        return _addMealToMenu.apply(this, arguments);
      }

      return addMealToMenu;
    }()
  }, {
    key: "getMenus",
    value: function () {
      var _getMenus = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var response, menus;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _menu.default.fetchAll();

              case 3:
                menus = _context2.sent;
                response = {
                  code: 200,
                  body: {
                    status: 'success',
                    message: 'Menus Retrieved',
                    data: menus
                  }
                };
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                response = {
                  code: 500,
                  body: {
                    status: 'error',
                    message: 'Failed to Retrieve Menu',
                    error: _context2.t0.message
                  }
                };

              case 10:
                return _context2.abrupt("return", res.status(response.code).json(response.body));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getMenus(_x3, _x4) {
        return _getMenus.apply(this, arguments);
      }

      return getMenus;
    }()
  }]);

  return MenuController;
}();

var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.js.map