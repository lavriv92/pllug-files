const crypto = require('crypto');
const mongoose = require('mongoose');
const connection = require('../connection');
const findOrCreate = require('mongoose-findorcreate');


function cryptPassword(password) {
  return crypto.createHash('sha256').update(password).digest('base64');
}

const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String, set: cryptPassword },
  fisrtName: { type: String },
  lastName: { type: String },
  created: { type: Date, default: new Date() },
  providerId:{ type: String },
  accessToken:{ type: String },
  githubId:{ type: String }
});

userSchema.methods.authenticate = function (password) {
  return this.password === cryptPassword(password);
};

userSchema.plugin(findOrCreate);

module.exports = connection.model('User', userSchema);