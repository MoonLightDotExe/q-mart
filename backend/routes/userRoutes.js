const express = require('express')
const router = express.Router()

const {
  registerController,
  loginController,
} = require('../controllers/userController')

router.post('/register', registerController)

router.post('/login', loginController)

module.exports = router
