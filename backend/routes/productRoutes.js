const express = require('express')
const router = express.Router()

const {
  getProducts,
  postProducts,
} = require('../controllers/productController')

router.get('/', getProducts)
router.post('/', postProducts)

module.exports = router
