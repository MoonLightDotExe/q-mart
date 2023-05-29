const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(PORT)
