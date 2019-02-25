"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _meals = _interopRequireDefault(require("./meals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var p = './api/data/orders.json';

var getOrdersFromFile = function getOrdersFromFile() {
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

var Order =
/*#__PURE__*/
function () {
  function Order(id, customerId) {
    _classCallCheck(this, Order);

    this.id = id;
    this.customerId = customerId;
    this.order = [];
    this.total = 0;
    this.delivery_status = false;
  }

  _createClass(Order, [{
    key: "addOrder",
    value: function () {
      var _addOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(mealId, quantity) {
        var _this = this;

        var mealOrderExists, orders, orderIndex, userOrder, params, _params;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                mealOrderExists = false;
                _context2.next = 4;
                return getOrdersFromFile();

              case 4:
                orders = _context2.sent;
                orderIndex = orders.findIndex(function (order) {
                  return Number(order.customerId) === Number(_this.customerId);
                });
                userOrder = orders[orderIndex];

                if (!(orders.length > 0)) {
                  _context2.next = 14;
                  break;
                }

                if (!(userOrder.order.length > 0)) {
                  _context2.next = 14;
                  break;
                }

                userOrder.order.forEach(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(mealOrder, mealIndex) {
                    var updatedMealOrder, params;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            updatedMealOrder = _objectSpread({}, mealOrder);

                            if (!(updatedMealOrder.id === mealId)) {
                              _context.next = 6;
                              break;
                            }

                            mealOrderExists = true;
                            params = {
                              orders: orders,
                              updatedMealOrder: updatedMealOrder,
                              mealOrder: mealOrder,
                              mealIndex: mealIndex,
                              orderIndex: orderIndex,
                              quantity: quantity,
                              userOrder: userOrder
                            };
                            _context.next = 6;
                            return Order.updateExistingMeal(params);

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }());

                if (mealOrderExists) {
                  _context2.next = 14;
                  break;
                }

                params = {
                  orders: orders,
                  orderIndex: orderIndex,
                  quantity: quantity,
                  userOrder: userOrder,
                  mealId: mealId
                };
                _context2.next = 14;
                return Order.addToExistingOrder(params);

              case 14:
                if (userOrder) {
                  _context2.next = 18;
                  break;
                }

                _params = {
                  orders: orders,
                  userOrder: userOrder,
                  newOrder: this,
                  mealId: mealId,
                  quantity: quantity
                };
                _context2.next = 18;
                return Order.addNewOrder(_params);

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](0);
                throw new Error(_context2.t0.message);

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 20]]);
      }));

      function addOrder(_x, _x2) {
        return _addOrder.apply(this, arguments);
      }

      return addOrder;
    }()
  }], [{
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id) {
        var orders, index;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return getOrdersFromFile();

              case 3:
                orders = _context3.sent;
                index = orders.findIndex(function (order) {
                  return Number(order.id) === Number(id);
                });
                return _context3.abrupt("return", orders[index]);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                throw new Error(_context3.t0.message);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function fetch(_x5) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  }, {
    key: "fetchAll",
    value: function () {
      var _fetchAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var orders;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return getOrdersFromFile();

              case 3:
                orders = _context4.sent;
                return _context4.abrupt("return", orders);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw new Error(_context4.t0.message);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function fetchAll() {
        return _fetchAll.apply(this, arguments);
      }

      return fetchAll;
    }()
  }, {
    key: "fetchUserOrders",
    value: function () {
      var _fetchUserOrders = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(customerId) {
        var orders, index;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return getOrdersFromFile();

              case 3:
                orders = _context5.sent;
                index = orders.findIndex(function (order) {
                  return Number(order.customerId) === Number(customerId);
                });
                return _context5.abrupt("return", orders[index]);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                throw new Error(_context5.t0.message);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function fetchUserOrders(_x6) {
        return _fetchUserOrders.apply(this, arguments);
      }

      return fetchUserOrders;
    }()
  }, {
    key: "modifyOrderMeals",
    value: function () {
      var _modifyOrderMeals = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(orderId, mealId, action) {
        var orders, index, updatedOrder, mealOrders, mealIndex, meal, params;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return getOrdersFromFile();

              case 3:
                orders = _context6.sent;
                index = orders.findIndex(function (order) {
                  return Number(order.id) === Number(orderId);
                });
                updatedOrder = _objectSpread({}, orders[index]);
                mealOrders = updatedOrder.order;
                mealIndex = mealOrders.findIndex(function (mealOrder) {
                  return mealOrder.id === mealId;
                });
                meal = mealOrders[mealIndex];
                params = {
                  orders: orders,
                  index: index,
                  updatedOrder: updatedOrder,
                  mealOrders: mealOrders
                };

                if (!(action === 'increase')) {
                  _context6.next = 17;
                  break;
                }

                meal.quantity += 1;
                meal.total += meal.price;
                _context6.next = 15;
                return Order.modifyMealQuantity(params);

              case 15:
                _context6.next = 36;
                break;

              case 17:
                if (!(action === 'decrease')) {
                  _context6.next = 31;
                  break;
                }

                if (!(meal.quantity === 1)) {
                  _context6.next = 25;
                  break;
                }

                params.orderId = orderId;
                params.mealIndex = mealIndex;
                _context6.next = 23;
                return Order.deleteMealFromOrder(params);

              case 23:
                _context6.next = 29;
                break;

              case 25:
                meal.quantity -= 1;
                meal.total -= meal.price;
                _context6.next = 29;
                return Order.modifyMealQuantity(params);

              case 29:
                _context6.next = 36;
                break;

              case 31:
                if (!(action === 'delete')) {
                  _context6.next = 36;
                  break;
                }

                params.orderId = orderId;
                params.mealIndex = mealIndex;
                _context6.next = 36;
                return Order.deleteMealFromOrder(params);

              case 36:
                _context6.next = 41;
                break;

              case 38:
                _context6.prev = 38;
                _context6.t0 = _context6["catch"](0);
                throw new Error(_context6.t0.message);

              case 41:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 38]]);
      }));

      function modifyOrderMeals(_x7, _x8, _x9) {
        return _modifyOrderMeals.apply(this, arguments);
      }

      return modifyOrderMeals;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(id) {
        var orders, existingOrderIndex;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return getOrdersFromFile();

              case 3:
                orders = _context7.sent;
                existingOrderIndex = orders.findIndex(function (order) {
                  return Number(order.id) === Number(id);
                });
                orders.splice(existingOrderIndex, 1);

                _fs.default.writeFile(p, JSON.stringify(orders), function (err) {
                  if (err) console.log(err);
                });

                return _context7.abrupt("return", true);

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](0);
                throw new Error(_context7.t0.message);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 10]]);
      }));

      function deleteById(_x10) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "addNewOrder",
    value: function () {
      var _addNewOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(params) {
        var orders, mealId, quantity, newOrder, meal;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                orders = params.orders, mealId = params.mealId, quantity = params.quantity, newOrder = params.newOrder;
                newOrder.id = Number(orders.length + 1);
                _context8.next = 5;
                return _meals.default.fetch(mealId);

              case 5:
                meal = _context8.sent;
                meal.quantity = quantity;
                meal.total = quantity * Number(meal.price);
                newOrder.total = meal.total;
                newOrder.order.push(meal);
                orders.push(newOrder);

                _fs.default.writeFile(p, JSON.stringify(orders), function (err) {
                  if (err) console.log(err);
                });

                return _context8.abrupt("return", true);

              case 15:
                _context8.prev = 15;
                _context8.t0 = _context8["catch"](0);
                throw new Error(_context8.t0.message);

              case 18:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 15]]);
      }));

      function addNewOrder(_x11) {
        return _addNewOrder.apply(this, arguments);
      }

      return addNewOrder;
    }()
  }, {
    key: "addToExistingOrder",
    value: function () {
      var _addToExistingOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(params) {
        var orders, orderIndex, quantity, userOrder, mealId, meal;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                orders = params.orders, orderIndex = params.orderIndex, quantity = params.quantity, userOrder = params.userOrder, mealId = params.mealId;
                _context9.next = 4;
                return _meals.default.fetch(mealId);

              case 4:
                meal = _context9.sent;
                meal.quantity = quantity;
                meal.total = quantity * Number(meal.price);
                userOrder.total += meal.total;
                userOrder.order.push(meal);
                orders[orderIndex] = userOrder;

                _fs.default.writeFile(p, JSON.stringify(orders), function (err) {
                  if (err) console.log(err);
                });

                return _context9.abrupt("return", true);

              case 14:
                _context9.prev = 14;
                _context9.t0 = _context9["catch"](0);
                throw new Error(_context9.t0.message);

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 14]]);
      }));

      function addToExistingOrder(_x12) {
        return _addToExistingOrder.apply(this, arguments);
      }

      return addToExistingOrder;
    }()
  }, {
    key: "updateExistingMeal",
    value: function () {
      var _updateExistingMeal = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(params) {
        var orders, updatedMealOrder, mealOrder, orderIndex, userOrder, quantity, mealIndex;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                orders = params.orders, updatedMealOrder = params.updatedMealOrder, mealOrder = params.mealOrder, orderIndex = params.orderIndex, userOrder = params.userOrder, quantity = params.quantity, mealIndex = params.mealIndex;
                updatedMealOrder.quantity += quantity;
                updatedMealOrder.total = updatedMealOrder.quantity * updatedMealOrder.price;
                userOrder.order[mealIndex] = updatedMealOrder;
                userOrder.total -= mealOrder.total;
                userOrder.total += updatedMealOrder.total;
                orders[orderIndex] = userOrder;

                _fs.default.writeFile(p, JSON.stringify(orders), function (err) {
                  if (err) console.log(err);
                });

                return _context10.abrupt("return", true);

              case 12:
                _context10.prev = 12;
                _context10.t0 = _context10["catch"](0);
                throw new Error(_context10.t0.message);

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 12]]);
      }));

      function updateExistingMeal(_x13) {
        return _updateExistingMeal.apply(this, arguments);
      }

      return updateExistingMeal;
    }()
  }, {
    key: "deleteMealFromOrder",
    value: function () {
      var _deleteMealFromOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(params) {
        var orderId, orders, index, updatedOrder, mealOrders, mealIndex, newUpdatedOrder;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                orderId = params.orderId, orders = params.orders, index = params.index, updatedOrder = params.updatedOrder, mealOrders = params.mealOrders, mealIndex = params.mealIndex;
                newUpdatedOrder = _objectSpread({}, updatedOrder);
                newUpdatedOrder.total -= mealOrders[mealIndex].total;
                mealOrders.splice(mealIndex, 1);
                newUpdatedOrder.order = mealOrders;

                if (!(mealOrders.length !== 0)) {
                  _context11.next = 11;
                  break;
                }

                orders[index] = newUpdatedOrder;

                _fs.default.writeFile(p, JSON.stringify(orders), function (err) {
                  if (err) console.log(err);
                });

                _context11.next = 13;
                break;

              case 11:
                _context11.next = 13;
                return Order.deleteById(orderId);

              case 13:
                return _context11.abrupt("return", true);

              case 16:
                _context11.prev = 16;
                _context11.t0 = _context11["catch"](0);
                throw new Error(_context11.t0.message);

              case 19:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 16]]);
      }));

      function deleteMealFromOrder(_x14) {
        return _deleteMealFromOrder.apply(this, arguments);
      }

      return deleteMealFromOrder;
    }()
  }, {
    key: "modifyMealQuantity",
    value: function () {
      var _modifyMealQuantity = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(params) {
        var orders, index, updatedOrder, mealOrders;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                orders = params.orders, index = params.index, updatedOrder = params.updatedOrder, mealOrders = params.mealOrders;
                updatedOrder.total = 0;
                mealOrders.forEach(function (mealOrder) {
                  updatedOrder.total += mealOrder.total;
                });
                orders[index] = updatedOrder;

                _fs.default.writeFile(p, JSON.stringify(orders), function (err) {
                  if (err) console.log(err);
                });

                _context12.next = 11;
                break;

              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](0);
                throw new Error(_context12.t0.message);

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 8]]);
      }));

      function modifyMealQuantity(_x15) {
        return _modifyMealQuantity.apply(this, arguments);
      }

      return modifyMealQuantity;
    }()
  }]);

  return Order;
}();

var _default = Order;
exports.default = _default;
//# sourceMappingURL=orders.js.map