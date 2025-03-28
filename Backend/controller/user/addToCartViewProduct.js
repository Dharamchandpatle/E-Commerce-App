const addToCartModel = require('../../models/cartProduct')
const addToCartViewProduct = async (req, res) => {  
    try {
        const currentUser = req.userId 

        const allProduct = await addToCartModel.find(
            {userId : currentUser}
        ).populate("productId")
        
        res.statuS(200).json({
            message: "All Product",
            success: true,
            data: allProduct ,
            error: false 
        })
    } catch (err) {
        res.status(500).json({
             message: err.message ,
             success: false,
                data: null
            });

        
    }
}


module.exports = addToCartViewProduct