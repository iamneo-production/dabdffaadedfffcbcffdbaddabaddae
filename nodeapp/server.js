const mongoose = require('mongoose');
const mongoConfig = require('./DBConfig/Database');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: ['https://8081-aacdabafdfcfbafaecaacbefbcc.examlyiopb.examly.io']
}));

app.disable("x-powered-by");


// Construct the MongoDB connection URL
const mongoURL = `mongodb://${mongoConfig.HOST}:${mongoConfig.PORT}/${mongoConfig.DB}`;

// Optional: If you have authentication enabled, you can include the username and password in the URL
// const mongoURL = `mongodb://${mongoConfig.USER}:${mongoConfig.PASSWORD}@${mongoConfig.HOST}:${mongoConfig.PORT}/${mongoConfig.DB}`;

// Connect to MongoDB
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10 
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/', require('./routes/routeController'));

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
