const ProductModel = require("../../models/productModel");

const getCategoryWiseProduct = async (req, res) => {
    try {
        const { category } = req?.body || req?.query;
        const product = await ProductModel.find({ category});

        res.status(200).json({ message: "Category wise product fetched successfully",
            success: true,
            data: product,
            error: null
        });

    } catch (err) {
        res.status(500).json({ message: err.message ,
            success: false,
            data: null,
            error: "Not able to get category wise product"
        });
        
    }
}
module.exports = getCategoryWiseProduct ;