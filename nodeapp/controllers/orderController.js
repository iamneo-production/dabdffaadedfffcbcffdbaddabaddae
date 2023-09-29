const database = require("../models");
const Order = database.Order;

// Get All Orders
exports.getAllOrders = async (req, res) => {
  const userId = req.params.id;
  try {
    const orders = await Order.find({ userId: userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Orders
exports.addOrder = async (req, res) => {
  const body = req.body;

  try {
    await Order.insertMany(body);
    res.status(200).send(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove One Order
exports.deleteOneOrder = async (req, res) => {
  const id = req.params.id;

  try {
    await Order.deleteOne({ _id: id });
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove All Orders
exports.deleteAllOrders = async (req, res) => {
  try {
    await Order.deleteMany({});
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
