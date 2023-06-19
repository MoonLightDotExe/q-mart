const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const getProducts = asyncHandler(async (req, res) => {
  const { page, limit } = req.body
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(limit)
  res.json(products)
})

const postProducts = asyncHandler(async (req, res) => {
  const { name, type } = req.body
  if (!name || !type) {
    throw new Error(`Please enter all parameters`)
  } else {
    const product = await Product.create({
      name,
      type,
    })

    res.status(201).json({
      id: product._id,
      name: product.name,
      type: product.type,
    })
  }
})

module.exports = {
  getProducts,
  postProducts,
}
