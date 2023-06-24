const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter name of product'],
  },
  type: {
    type: String,
    required: [true, 'Please enter type of product'],
  },
  category: {
    type: String,
    required: [true, 'Please enter name of Category'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter price of product'],
  },
  offer: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Product', productSchema)
