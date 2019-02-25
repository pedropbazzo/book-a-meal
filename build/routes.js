"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _meals = _interopRequireDefault(require("./controllers/meals"));

var _menu = _interopRequireDefault(require("./controllers/menu"));

var _orders = _interopRequireDefault(require("./controllers/orders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/meals/', _meals.default.getMealOptions);
router.post('/meals/', _meals.default.addMealOption);
router.put('/meals/:id', _meals.default.updateMealOption);
router.delete('/meals/:id', _meals.default.deleteMealOption);
router.post('/menu/', _menu.default.addMealToMenu);
router.get('/menu/', _menu.default.getMenus);
router.get('/orders', _orders.default.getOrders);
router.post('/orders', _orders.default.orderMeal);
router.put('/orders/:orderId', _orders.default.modifyOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map