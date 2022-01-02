const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  username: {
    type: String,
    required: [true, 'must provide username'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'must provide email'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
})

module.exports = mongoose.model('User', UserSchema)