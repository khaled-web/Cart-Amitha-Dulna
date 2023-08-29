//............
//importing
//............
const express = require('express')
const router = express.Router()
const {
 createProduct,
 getAllProducts,
 deleteProduct
} = require('../Controllers/CartController.js')

//............
//App
//............
router.route('/').post(createProduct)
router.route('/').get(getAllProducts)
router.route('/:id').delete(deleteProduct)

//............
//exporting
//............
module.exports = router