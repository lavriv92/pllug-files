var mongoose = require('mongoose');
var schema = mongoose.Schema;

var utils = require('./utils');


var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, set: utils.cryptPassword},
  first_name: {type: String},
  last_name: {type: String},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now}
});

userSchema.virtual('full_name').get(function() {
  return this.first_name +' '+this.last_name;
});


userSchema.methods = {
  authenticate: function(password) {
    return utils.cryptPassword(password) == this.password;
  };
};


exports.User = mongoose.model('User', userSchema);
