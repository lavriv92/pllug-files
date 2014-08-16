//var User = require('./models').User;

exports.users = function (req, res) {
  res.json({
    users: []
  });
};

exports.createUser = function (req, res) {
  res.send(200);
};


exports.updateUser = function (req, res) {
  res.send(200);
};
