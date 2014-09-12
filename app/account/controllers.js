var User = require('./models').User,
    config = require('../config/config'),
    Storage = require('../storage');

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
      res.status(500).json(err);
    } else {
      res.status(200).json(user);
    };
  });
};


exports.createUser = function (req, res) {
  var user = new User(req.body),
      storage = new Storage(config.storagePath);

  storage.newDir(user.username, function(absPath) {
    user.save(function(err, user) {
      if(err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(user)
      }
    });
  }, 
  function(err) {
    res.status(500).json(err);
  });
};


exports.updateUser = function (req, res) {
  User.update({_id: req.params.id}, req.body, function(err, user) {
    if(err) {
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
