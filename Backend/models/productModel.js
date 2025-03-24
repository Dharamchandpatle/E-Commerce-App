
const mongoose = require('mongoose');   

const productSchema = new mongoose.Schema({
    productName : String ,
    brandName : String,
    category : String,
    productImage : [],
    description : String,
    price : Number,
    sellingPrice : Number
},{
    timestamps : true
})

const ProductModel = mongoose.model('Product',productSchema)

module.exports = ProductModel