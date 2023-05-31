const mongoose = require('mongoose')

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected : ${conn.connection.host}`)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = connectDB
