const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: String,
  first_name: String,
  last_name: String,
});

module.exports = User;
