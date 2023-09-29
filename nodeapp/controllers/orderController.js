const database = require("../models")
const Order = database.order;

//get All Orders
exports.getAllOrders = async (req, res) => {
  const userId = req.params.id;
  await Order.findAll({where: { userId: userId }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  })
}

//Add all Orders
exports.addOrder = async (req, res) => {
    const body = req.body;

    body.forEach( async element =>{
        delete element.orderId;
        await Order.create(element);
    })

    res.status(200).send(true);
}

//Remove One order
exports.deleteOneOrder = async (req, res) => {

  const id = req.params.id;

  await Order.destroy({
    where : {
        orderId : id
    }
  }).then(data =>{
    res.status(200).send();
  })
}

//Remove all items from order
exports.deleteAllOrders = async (req, res) => {

  // const order = await Order.findAll();

  // order.forEach(async element =>{
    await Order.destroy({
      where: {},
      truncate: true
  });
  // })
  res.status(200).json();
}