const express = require("express")

const router = express.Router()

const {userSignUpController} = require("../controller/userSignup")
const { userSignInController } = require("../controller/userSignin")
const userDetailsController = require("../controller/userDetails")
const authToken = require("../middleware/authToken")
const userLogout = require("../controller/userLogout")
const allUsers = require("../controller/allUsers")
const updateUser = require("../controller/updateUser")
// product upload
const UploadProductController = require("../controller/uploadProduct")
const getProductController = require("../controller/getProduct")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/userdetails",authToken ,userDetailsController)
router.get("/userLogout", userLogout)



// Admin pannel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken , updateUser)


// upload product

router.post("/upload-product",authToken,UploadProductController)  // authToken is a middleware to check if user is logged in or not
router.get("/get-product",getProductController)  // get all product
router.post("/update-product",authToken,UploadProductController)  // update product


module.exports = router 