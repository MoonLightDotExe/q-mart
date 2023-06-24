const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const productModel = require('../models/productModel')

const getProducts = asyncHandler(async (req, res) => {
  const { page, limit } = req.body
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(limit)
  res.json(products)
})

const postProducts = asyncHandler(async (req, res) => {
  const { name, type, category, price, offer } = req.body
  if (!name || !type || !category || !price || !offer) {
    throw new Error(`Please enter all parameters`)
  } else {
    const product = await Product.create({
      name,
      type,
      category,
      price,
      offer,
    })

    res.status(201).json({
      id: product._id,
      name: product.name,
      type: product.type,
      category: product.category,
      price: product.price,
      offer: product.offer,
    })
  }
})

module.exports = {
  getProducts,
  postProducts,
}
