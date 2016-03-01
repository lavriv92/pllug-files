const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../db/models/User');


passport.use(new GithubStrategy({
    clientID: 'e491753ccfd23a0c8420',
    clientSecret:'5de1562ada98b3c4a8a489a51c296ac8bc213298',
    callbackURL: "http://localhost:3000/auth/github/callback",
    scope: 'email'
  },
function(accessToken, refreshToken, profile, done) {
  User.findOne({githubId : profile.id}).exec(function(err, user){
            if(err)
              return done(err);
            if(user)
              return done(null, user);
              console.log(profile);
        });
    }
  ));

passport.use(new LocalStrategy({
  usernameField: 'email'
}, function(email, password, done) {
  User.findOne({ email: email }).exec(function (err, user) {
    if (err) {
      return done(err);
      console.log('error with passport!')
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

passport.serializeUser(function (user, done) {
  done(null, user._id)
});

passport.deserializeUser(function (id, done) {
  User.findOne({_id: id}).exec(function (err, user) {
    done(null, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: '503742453144164',
    clientSecret:'efb75cf75298a19efc2b455a28acb78a',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    //profileFields: ['id', 'displayName', 'photos', 'email']
  },
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ providerId: profile.id }, 
      function (err, user) {
      return cb(err, user);
    });
  }
));


