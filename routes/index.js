const auth_route = require('./auth');
const user_route = require('./user.js');
const product_route = require('./product');
const cart_route = require('./cart');
const order_route = require('./order');
const payment_route = require('./payment.js')

module.exports = {
    auth_route,
    user_route,
    product_route,
    cart_route,
    order_route,
    payment_route
};