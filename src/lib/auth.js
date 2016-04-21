const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../db/models/User');


passport.use(new GithubStrategy({
    clientID: '3b6af85581b39846aaf0',
    clientSecret:'cfd2bac212919677811eb98df620b3a2ee94f362',
    callbackURL: "http://localhost:3000/auth/github/callback",
    //scope: 'email'
  },
function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      console.log(profile);
      return done(err, user);
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
    profileFields: ['id', 'displayName', 'picture']
  },
function(accessToken, refreshToken, profile, cb) {
  console.log('profile: %s', JSON.stringify(profile));
    User.findOrCreate({ providerId: profile.id, fisrtName: profile.displayName, picture: profile.photos[0].value }, 
      function (err, user) {
      return cb(err, user);
    });
  }
));


