const crypto = require('crypto');
const mongoose = require('mongoose');
const connection = require('../connection');

function cryptPassword(password) {
  return crypto.createHash('sha256').update(password).digest('base64');
}

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, set: cryptPassword },
  fisrtName: { type: String },
  lastName: { type: String },
  created: { type: Date, default: new Date() }
});

userSchema.methods.authenticate = function (password) {
  return this.password = cryptPassword(password);
};

module.exports = connection.model('User', userSchema);