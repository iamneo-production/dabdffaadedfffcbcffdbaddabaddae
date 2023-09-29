// const express = require('express');
// const user = require('../controllers/userController');
// const cart = require('../controllers/cartController');
// const product = require('../controllers/productController');
// const order = require('../controllers/orderController');
// const router = express.Router();

// // Login and Signup Routes
// router.post('/login', function(req,res){
//     user.userLogin(req,res);
// });

// router.post('/signup', function(req,res){
//     user.createUser(req,res);
// });

// // Product Routes
// router.get('/products', function(req,res){
//     product.getAllProducts(req,res);
// });

// router.post('/admin/addProduct', function(req,res){
//     product.addProduct(req,res);
// });

// router.put('/admin/editProduct/:id', function(req,res){
//     console.log(req.body);
//     product.updateProduct(req,res);
// });

// router.delete('/admin/deleteProduct/:id', function(req,res){
//     product.deleteProduct(req,res);
// });

// // Cart Routes
// router.get('/user/:id/cartitems', function(req,res){
//     cart.getAllProductsFromCart(req,res);
// });

// router.post('/user/addcart', function(req,res){
//     cart.insertCart(req,res);
// });

// router.delete('/user/deleteCart/:id', function(req,res){
//     cart.removeFromCart(req,res);
// });

// router.delete('/user/deleteallcartitems', function(req,res){
//     cart.deleteAllItemsFromCart(req,res);
// });

// // Order Routes
// router.get('/user/:id/orders', function(req,res){
//     order.getAllOrders(req,res);
// });

// router.post('/user/addorder', function(req,res){
//     order.addOrder(req,res);
// });

// router.delete('/user/deleteorder/:id', function(req,res){
//     order.deleteOneOrder(req,res);
// });

// router.delete('/user/deleteall', function(req,res){
//     order.deleteAllOrders(req,res);
// });

// module.exports = router;




const express = require('express');
const userController = require('../controllers/userController');
const cartController = require('../controllers/cartController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const router = express.Router();

// Login and Signup Routes
router.post('/login', userController.userLogin);
router.post('/signup', userController.createUser);

// Product Routes
router.get('/products', productController.getAllProducts);
router.post('/admin/addProduct', productController.addProduct);
router.put('/admin/editProduct/:id', productController.updateProduct);
router.delete('/admin/deleteProduct/:id', productController.deleteProduct);

// Cart Routes
router.get('/user/:id/cartitems', cartController.getAllProductsFromCart);
router.post('/user/addcart', cartController.insertCart);
router.delete('/user/deleteCart/:id', cartController.removeFromCart);
router.delete('/user/deleteallcartitems', cartController.deleteAllItemsFromCart);

// Order Routes
router.get('/user/:id/orders', orderController.getAllOrders);
router.post('/user/addorder', orderController.addOrder);
router.delete('/user/deleteorder/:id', orderController.deleteOneOrder);
router.delete('/user/deleteall', orderController.deleteAllOrders);

module.exports = router;
