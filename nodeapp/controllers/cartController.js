const database = require("../models");
const Product = database.Product;
const Cart = database.Cart;


// Get All Cart Items
exports.getAllProductsFromCart = async (req, res) => {
  const userId = req.params.id;
  try {
    const cartItems = await Cart.find({ userId: userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Insert into Cart
exports.insertCart = async (req, res) => {
  const body = req.body;

  try {
    const product = await Product.findOne({ productId: body.cartId });

    if (product.quantity > 0) {
      product.quantity -= 1;
      await product.save();

      const cart = await Cart.findOne({ cartId: body.cartId });

      if (cart) {
        cart.quantity += 1;
        await cart.save();
      } else {
        await Cart.create(body);
      }

      res.status(200).send("success");
    } else {
      res.status(500).send("insufficient stock");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove Item from Cart
exports.removeFromCart = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findOne({ productId: id });
    const cart = await Cart.findOne({ cartId: id });

    if (product && cart) {
      product.quantity += cart.quantity;
      await product.save();
      await Cart.deleteOne({ cartId: id });
    }

    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove All Items from Cart
exports.deleteAllItemsFromCart = async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
