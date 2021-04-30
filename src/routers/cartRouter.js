const Router = require('express').Router();
const cartHandler = require('../handlers/cartHandler');

Router.post('/:userId/:productId', cartHandler.createCart);
Router.delete('/:userId/:productId', cartHandler.deletecart);

module.exports = Router;