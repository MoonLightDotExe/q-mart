const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const registerController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(401).json({ message: 'User already exists' })
  } else {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({ name, email, password: hashedPassword })
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    })
  }
})

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists && (await bcrypt.compare(password, userExists.password))) {
    res.status(201).json({
      id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      password: userExists.password,
    })
  } else {
    res.status(404).json({
      message: 'Invalid Credentials',
    })
  }
})

module.exports = { registerController, loginController }
