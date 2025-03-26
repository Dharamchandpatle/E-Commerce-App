const productModel = require('../../models/productModel');

const getProductDetails = async (req , res )=>{
    try {
        const {productId} = req.body ;
        const product = await productModel.findById(productId); // productModel is the model of product
        if(product){
            res.json({
                message : "Product details",
                success : true,
                data : product,
                error : false
            })
        }
        else{
            res.json({
                message : "Product not found",
                success : false,
                data : null,
                error : true
            })
        }

    } catch (err) {
        res.json({
            message : err?.message || "Something went wrong",
            success : false,
            data : null,
            error : true
        })
        
    }
}

module.exports = getProductDetails

