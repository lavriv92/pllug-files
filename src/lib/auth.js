const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../db/models/User');

passport.serializeUser(function (user, done) {
  done(null, user._id)
});

passport.deserializeUser(function (id, done) {
  User.findOne({_id: id}).exec(function (err, user) {
    done(null, user);
  });
});

passport.use(new LocalStrategy({
  usernameField: 'email'
}, function(email, password, done) {
  User.findOne({ email: email }).exec(function (err, user) {
    if (err) {
      return done(err);
    } else {
      if (!user) {
        return done(null, false, {message: 'Incorrect username'});
      }

      if(!user.authenticate(password)) {
        return done(null, false, {message: 'Incorrect password'});
      }
      return done(null, user);
    }
  });
}));