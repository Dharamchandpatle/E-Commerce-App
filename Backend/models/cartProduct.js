const mongoose = require('mongoose');


const addToCart = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
},{
    timestamps : true
})

const addToCartModel = mongoose.model('addToCart', productSchema);  //collection name is addToCart


module.exports = addToCartModel;



























