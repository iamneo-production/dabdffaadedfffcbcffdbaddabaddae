
const mongoose = require('mongoose');
const mongoConfig = require('./DBConfig/Database');
const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


const cors = require('cors');

app.use(cors({
  origin: ['https://8081-aacdabafdfcfbafaecaacbefbcc.examlyiopb.examly.io']
}));

app.disable("x-powered-by");




 // Path to your MongoDB configuration file

// Construct the MongoDB connection URL
// const mongoURL = `mongodb://${mongoConfig.HOST}:${mongoConfig.PORT}/${mongoConfig.DB}`;

// Optional: If you have authentication enabled, you can include the username and password in the URL
const mongoURL = `mongodb://${mongoConfig.USER}:${mongoConfig.PASSWORD}@${mongoConfig.HOST}:${mongoConfig.PORT}/${mongoConfig.DB}`;

// Connect to MongoDB
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  Sequelize
const database = require("./models");
database.sequelize.sync()
  .then(() => {
    console.log("Database Synced successfully");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

//Routes
app.use('/', require('./routes/routeController'));

app.listen(PORT,console.log("server running URL => http://localhost:" + PORT));