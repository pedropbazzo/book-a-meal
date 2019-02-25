"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meals = _interopRequireDefault(require("../models/meals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealController =
/*#__PURE__*/
function () {
  function MealController() {
    _classCallCheck(this, MealController);
  }

  _createClass(MealController, null, [{
    key: "addMealOption",
    value: function () {
      var _addMealOption = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, name, price, imageUrl, meal;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, name = _req$body.name, price = _req$body.price, imageUrl = _req$body.imageUrl;
                meal = new _meals.default(null, name, price, imageUrl);
                _context.next = 4;
                return meal.add();

              case 4:
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'Meal Option Added'
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addMealOption(_x, _x2) {
        return _addMealOption.apply(this, arguments);
      }

      return addMealOption;
    }()
  }, {
    key: "getMealOptions",
    value: function () {
      var _getMealOptions = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var meals;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _meals.default.fetchAll();

              case 2:
                meals = _context2.sent;
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Meals Retrieved',
                  data: meals
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMealOptions(_x3, _x4) {
        return _getMealOptions.apply(this, arguments);
      }

      return getMealOptions;
    }()
  }, {
    key: "updateMealOption",
    value: function () {
      var _updateMealOption = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var response, id, _req$body2, name, price, imageUrl, meal;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = req.params.id;
                _req$body2 = req.body, name = _req$body2.name, price = _req$body2.price, imageUrl = _req$body2.imageUrl;
                meal = new _meals.default(id, name, price, imageUrl);
                _context3.next = 6;
                return meal.update();

              case 6:
                response = {
                  code: 200,
                  body: {
                    status: 'success',
                    message: 'Meal Option Updated'
                  }
                };
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                response = {
                  code: 500,
                  body: {
                    status: 'error',
                    message: 'Falied to Updated Meal'
                  }
                };

              case 12:
                return _context3.abrupt("return", res.status(response.code).json(response.body));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function updateMealOption(_x5, _x6) {
        return _updateMealOption.apply(this, arguments);
      }

      return updateMealOption;
    }()
  }, {
    key: "deleteMealOption",
    value: function () {
      var _deleteMealOption = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.next = 3;
                return _meals.default.deleteById(id);

              case 3:
                return _context4.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Meal Option Deleted'
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteMealOption(_x7, _x8) {
        return _deleteMealOption.apply(this, arguments);
      }

      return deleteMealOption;
    }()
  }]);

  return MealController;
}();

var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meals.js.map