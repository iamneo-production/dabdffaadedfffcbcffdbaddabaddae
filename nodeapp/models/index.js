const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const cartSchema = new mongoose.Schema({
  cartId: {
    type: String,
    default: uuidv4,
    required: true,
    unique: true
  },
  // Define other properties for your cart schema
});

const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
    unique: true
  },
  // Define other properties for your order schema
});

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    default: uuidv4,
    required: true,
    unique: true
  },
  // Define other properties for your product schema
});

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4,
    required: true,
    unique: true
  },
  // Define other properties for your user schema
});

const Cart = mongoose.model('Cart', cartSchema);
const Order = mongoose.model('Order', orderSchema);
const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

const database = {
  Cart: Cart,
  Order: Order,
  Product: Product,
  User: User
};

module.exports = database;
