// import all dependencies
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

// import all sample data
import users from './data/users.js'
import products from './data/products.js'
// import all our Models
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

// import db config
import connectDB from './config/db.js'

// env config
dotenv.config()

// DB connect
connectDB()

// create importData function
const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// create destroyData function
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// check for the argument given when seeding
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
