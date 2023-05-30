const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter a name'],
    },
    email: {
      type: String,
      require: [true, 'Please Enter an email address'],
    },
    password: {
      type: String,
      required: [true, 'Please Enter a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
