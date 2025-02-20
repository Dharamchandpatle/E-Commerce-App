const userModel = require("../models/userModel");

const allUsers = async (req, res) => {
    try {
        console.log("Userid all users ", req.userId);

        const allUsers = await userModel.find();
        res.status(200).json({
            message: " All users ",
            data : allUsers ,
            success : true ,
            error : false 

        }
        );


    } catch (error) {
        res.status(400).json({
            message: error.message || err,
            error: true,
            success: false,

        })

    }

}

module.exports = allUsers 