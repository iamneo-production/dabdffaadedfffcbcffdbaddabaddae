const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    default: uuidv4,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  quantity: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
