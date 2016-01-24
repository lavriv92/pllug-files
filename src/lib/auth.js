const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


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

passport.use(new FacebookStrategy({
    clientID: 941018495979482,
    clientSecret: b772afb699e70744c2ab0c68794e7d4e,
    callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));*/