const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  whatsapp: String,
  address: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model('User', userSchema);
