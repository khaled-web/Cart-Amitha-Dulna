//.........
//importing
//.........
const Cart = require('../models/CartFormModels')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors/index.js')
//....
//app
//....

//createProduct
const createProduct = async (req, res) => {
 const cart = await Cart.create(req.body)
 const token = cart.createJWT()
 res.status(StatusCodes.CREATED).json({
  product: cart,
  token
 })
}

//getAllProducts
const getAllProducts = async (req, res) => {
 const cart = await Cart.find({})
 res.status(StatusCodes.OK).json({
  count: cart.length,
  products: cart
 })
}

//delete product
const deleteProduct = async (req, res) => {
 const {
  id: cartId
 } = req.params
 const cart = await Cart.findByIdAndRemove({
  _id: cartId
 })
 if (!cart) {
  throw new CustomError.NotFoundError(`No Product with id : ${cartId}`)
 }
 res.status(StatusCodes.OK).json({
  msg: 'Success! Product Removed'
 })
}

//.........
//exporting
//.........
module.exports = {
 createProduct,
 getAllProducts,
 deleteProduct
}