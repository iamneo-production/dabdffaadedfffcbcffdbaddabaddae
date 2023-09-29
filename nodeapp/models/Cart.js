const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const cartSchema = new mongoose.Schema({
  cartId: {
    type: String,
    required: true,
    default: uuidv4,
    unique: true
  },
  productName: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: String
  },
  userId: {
    type: String
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
