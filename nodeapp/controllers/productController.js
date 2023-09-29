const database = require("../models");
const Product = database.Product;
const Cart = database.Cart;

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    // console.log("hello");
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create New Product
exports.addProduct = async (req, res) => {
  const product = req.body;

  try {
    await Product.create(product);
    res.status(200).send(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  const proId = req.params.id;
  const updatedProduct = req.body;

  try {
    await Product.findByIdAndUpdate(proId, updatedProduct);
    res.status(200).json(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove Product
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    await Cart.deleteMany({ cartId: productId });
    await Product.findByIdAndDelete(productId);
    res.status(200).json(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
