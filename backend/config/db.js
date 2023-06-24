const mongoose = require('mongoose')

const { MONGO_URI } = process.env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI)
    console.log(`Connecting to ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
