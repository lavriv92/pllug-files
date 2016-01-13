const mongoose = require('mongoose');

const uri = require('../config').db;

module.exports = mongoose.createConnection(uri, (err, connection) => {
  if (err) {
    console.log(err);
  }
});