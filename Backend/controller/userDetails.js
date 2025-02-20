const userModel = require("../models/userModel");


const userDetailsController = async (req, res) => {
    try {
        console.log("user details", req.userId);
        const user = await userModel.findById(req.userId);

        res.status(200).json({
            data : user ,
            error : false ,
            success : true ,
            message : "User details fetched successfully"
        })

        console.log("user ", user)

    } 
    catch (error) {
        res.status(400).json({
            message : error.message || err ,
            error : true ,
            success : false ,
            
        })

    }
}

module.exports = userDetailsController;