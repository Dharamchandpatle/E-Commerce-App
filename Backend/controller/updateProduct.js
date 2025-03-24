const uploadProductPermission = require("../helpers/permission")
const ProductModel = require("../models/productModel")

async function  updateProductController(req,res){
    try {
        if(!uploadProductPermission(req.userId)){
            throw new Error("Permission denied")
        }
        const { _id, ...resBody} = req.body
        const updateProduct = await ProductModel.findByIdAndUpdate(_id , resBody)

        res.json({
            message : "Product updated successfully",
            error : false,
            success : true,
            data : updateProduct
        })  

    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
        
    }
}

module.exports = updateProductController