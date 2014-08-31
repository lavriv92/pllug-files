var User = require('../account/models').User;


exports.signIn = function(req, res) {
  if(req.method == 'GET') {
    res.render('auth/login');
  } else {
    User.findOne({username: req.body.username}, function(err, user) {
      if(err || user == null) {
        res.render('auth/login', {
          errors: {
            username: 'username is incorect'
          } 
        });
      } else {
        if(!user.authenticate(req.body.password)) {
          res.render('auth/login', {
            errors: { 
              password: "Password is incorrect"
            }
          });
        } else {
          req.session.regenerate(function() {
            req.session.user = user;
            res.redirect('/');
          });
        }
      }
    });
  }
};


exports.signOut = function() {
  req.session.delete(function() {
    res.redirect('/auth/sign-in/');
  });
};
