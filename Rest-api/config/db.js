const config = require('./config');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

module.exports = () => {
  return mongoose.connect(config.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
};
