var User = require('./models').User;

exports.users = function (req, res) {
  User.find({}, function(err, users) {
    if(err) {
      res.json(err);
    }
    res.json(users);
  });
};

exports.createUser = function (req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if(err) {
      res.json(err);
    }
  });
};


exports.updateUser = function (req, res) {
  res.send(200);
};
