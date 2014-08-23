var User = require('./models').User;

exports.users = function (req, res) {
  User.find({}, function(err, users) {
    if(err) {
      res.json(err);
    } else {
      res.json(users);
    }
  });
};

exports.userDetails = function(req, res) {
  User.findOne({_id: req.params.id}, function(err, user) {
    if(err) {
      res.json(err);
    } else {
      res.json(user);
    };
  });
};

exports.createUser = function (req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if(err) {
      res.json(err);
    } else {
      res.send(201);
    }
  });
};


exports.updateUser = function (req, res) {
  User.update({_id: req.params.id}, req.body, function(req, res) {
    if(err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};

exports.updatePassword = function(req, res) {
  var password1 = req.body.password1;
  var password2 = req.body.password2;

  User.findOne({_id: req.params.id}, function(err, user) {
    if(err) {
      res.json(err);
    }

    if(password1 === password2 && user._id = req.session.user_id) {
      user.password = req.body.new_password;

      user.save(function(err) {
        if(err) {
          res.json(err);
        } else {
          res.send(200);
        }
      });
    } else {
      res.json(400, {
        'message': 'Password is invalid'
      });
    }
  });
};


exports.currentUser = function(req, res) {
  User.findOne({_id: req.session.user_id}, function(err, user) {
    if(err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};


exports.userLogin = function(req, res) {
  User.findOne({username: req.body.username}, function(err, user) {
    if(err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};

exports.userLogout = function(req, res) {
  if(req.session.user_id !== undefined) {
    delete req.session.user_id;
  } else {
    res.json(200);
  }
};
