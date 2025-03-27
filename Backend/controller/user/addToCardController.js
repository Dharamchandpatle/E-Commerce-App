const addToCartModel = require('../../models/cartProduct');

const addToCartController = async(req , res )=>{
    try {
        const {productId} = req?.body ;
        const currentUser = req?.userId 

        const isProductAvailable = await addToCartModel.find({productId})
        if( isProductAvailable){
            return res.json({
                message : "Product is already in cart",
                success : true,
                error : false
            })
        }

        const payload ={
            productId : productIs ,
            
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "err.message" || "Internal Server Error",
            success: false,
            data: null
        });
        
    }
}