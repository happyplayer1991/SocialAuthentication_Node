var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// *** Add findOrCreate module *** //
var findOrCreate = require('mongoose-findorcreate')

// *** create User Schema *** //
var User = new Schema({
  name: String,
  someId: String,
});
User.plugin(findOrCreate);

module.exports = mongoose.model('users', User);