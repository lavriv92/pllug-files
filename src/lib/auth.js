const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google').Strategy;
//const User = require('../db/models/User');

passport.serializeUser(function (user, done) {
  done(null, user._id)
});

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/auth/google/return',
    realm: 'http://localhost:3000/'
  },
  function(identifier, profile, done) {
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user._id);
    });
  }
));


passport.use(new FacebookStrategy({
   clientID: '503742453144164',
    clientSecret:'efb75cf75298a19efc2b455a28acb78a',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //Based on profile return from Github, find existing user
    var user = profile;
    //Return user model
    return done(null,user._id);
  })
);

passport.use(new GithubStrategy({
   clientID: 'e491753ccfd23a0c8420',
    clientSecret:'5de1562ada98b3c4a8a489a51c296ac8bc213298',
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //Based on profile return from Github, find existing user
    var user = profile;

    //Return user model
    return done(null,user._id);
  })
);

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








