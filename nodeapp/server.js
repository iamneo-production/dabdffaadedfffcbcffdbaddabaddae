const mongoose = require('mongoose');
const mongoConfig = require('./DBConfig/Database.config');
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

const mongoURL = `mongodb://${mongoConfig.USER}:${mongoConfig.PASSWORD}@${mongoConfig.HOST}:${mongoConfig.PORT}/${mongoConfig.DB}`;

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

app.use('/', require('./routes/routeController'));

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
