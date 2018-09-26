var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');


passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
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