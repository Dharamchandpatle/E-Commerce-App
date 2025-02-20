const userModel = require("../models/userModel")
const bcryptjs = require('bcryptjs');


const  userSignUpController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!email) {
            throw new Error("Please provide email")
        }

        if (!password) {
            throw new Error("Please provide password")
        }

        if (!name) {
            throw new Error("Please provide name")
        }

        const salt = bcryptjs.genSaltSync(10)
        const hashPassword = bcryptjs.hashSync(password, salt)


        if (!hashPassword) {
            throw new Error(" Something is wrong ")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()
        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully"
        })
    } catch (err) {
        // console.log("Erro while find ", err.message);
        res.status(500).json({
            message: err.message || err  ,
            error: true,
            success: false,
        })


    }
}

module.exports = {userSignUpController }