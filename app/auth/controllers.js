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


exports.signOut = function(req, res) {
  console.log(req.session);
  req.session.delete(function() {
    res.redirect('/auth/sign-in/');
  });
};

//TODO: must be removed

exports.fakeRegister = function(req, res) {
  var template = 'auth/register'

  if(req.method == 'GET') {
    res.render(template);
  } else {
    var user = new User(req.body);
    user.save(function(err) {
      if(err) {
        var context = {'err': err}
        res.render(template, context);
      } else {
        res.redirect('/auth/register');
      }
    });
  }
};
