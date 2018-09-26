var passport = require('passport');
// *** import Passport Google Package *** //
//var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; 

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');
var chalk = require('chalk');

passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {

    console.log(chalk.green('Google Strategy'));
    console.log(chalk.red('accessToken'));
    console.log(accessToken);
    console.log(chalk.red('profile'));
    console.log(profile);

    User.findOrCreate({ someId: profile.id }, function (err, user) {
      console.log(chalk.red('User'));
      console.log(user);
      auth_user = {
        id: user.id,
        someId: user.someId,
        accessToken: accessToken
      }; 
      console.log(auth_user);
      return cb(err, auth_user);
    });
  }
));


// serialize user into the session
init();


module.exports = passport;