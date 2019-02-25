"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orders = _interopRequireDefault(require("../models/orders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderController =
/*#__PURE__*/
function () {
  function OrderController() {
    _classCallCheck(this, OrderController);
  }

  _createClass(OrderController, null, [{
    key: "orderMeal",
    value: function () {
      var _orderMeal = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, mealId, quantity, customerId, order;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, mealId = _req$body.mealId, quantity = _req$body.quantity, customerId = _req$body.customerId;
                order = new _orders.default(null, customerId);
                _context.next = 4;
                return order.addOrder(mealId, quantity);

              case 4:
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'Order Made'
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function orderMeal(_x, _x2) {
        return _orderMeal.apply(this, arguments);
      }

      return orderMeal;
    }()
  }, {
    key: "getOrders",
    value: function () {
      var _getOrders = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var response, orders;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _orders.default.fetchAll();

              case 3:
                orders = _context2.sent;
                response = {
                  code: 200,
                  body: {
                    status: 'success',
                    message: 'Orders Retrieved',
                    data: orders
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
                    message: 'Failed to Retrive Orders',
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

      function getOrders(_x3, _x4) {
        return _getOrders.apply(this, arguments);
      }

      return getOrders;
    }()
  }, {
    key: "modifyOrder",
    value: function () {
      var _modifyOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var orderId, _req$body2, mealId, action;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                orderId = req.params.orderId;
                _req$body2 = req.body, mealId = _req$body2.mealId, action = _req$body2.action;
                _context3.next = 4;
                return _orders.default.modifyOrderMeals(orderId, mealId, action);

              case 4:
                return _context3.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Order Updated'
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function modifyOrder(_x5, _x6) {
        return _modifyOrder.apply(this, arguments);
      }

      return modifyOrder;
    }()
  }]);

  return OrderController;
}();

var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=orders.js.map