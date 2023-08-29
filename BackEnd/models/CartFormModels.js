//.........
//importing
//.........
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//....
//app
//....
const CartSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, 'Please provide product name'],
  maxLength: [100, 'Name can not be more than 100 characters'],
 },
 inventory: {
  type: Number,
  required: true,
  default: 5

 }
})

//hashingPassword(register)
// ContactSchema.pre('save', async function () {

//  if (!this.isModified('password')) return
//  const salt = await bcrypt.genSalt(10)
//  this.password = await bcrypt.hash(this.password, salt)
// })

//CreatingJWT(register, login)
CartSchema.methods.createJWT = function () {
 return jwt.sign({
  userId: this._id,
  name: this.name,
 }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME
 })
}

//comparePassword(login)
// ContactSchema.methods.comparePassword = async function (pass) {
//  const isMatch = await bcrypt.compare(pass, this.password);
//  return isMatch;
// }


//.........
//exporting
//.........
module.exports = mongoose.model('Cart', CartSchema)