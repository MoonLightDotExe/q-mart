const express = require('express')
const router = express.Router()

const protect = require('../middleware/authMiddleware')

const {
  registerController,
  loginController,
} = require('../controllers/userController')

router.post('/register', registerController)

router.post('/login', protect, loginController)

module.exports = router
