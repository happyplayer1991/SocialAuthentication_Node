var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


// serialize user into the session
init();


module.exports = passport;