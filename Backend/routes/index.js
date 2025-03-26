const express = require("express")

const router = express.Router()

const {userSignUpController} = require("../controller/user/userSignup")
const { userSignInController } = require("../controller/user/userSignin")
const userDetailsController = require("../controller/user/userDetails")
const authToken = require("../middleware/authToken")
const userLogout = require("../controller/user/userLogout")
const allUsers = require("../controller/user/allUsers")
const updateUser = require("../controller/user/updateUser")
// product upload
const UploadProductController = require("../controller/product/uploadProduct")
const getProductController = require("../controller/product/getProduct")
const getCategoryProductOne = require("../controller/product/getCategoryProductOne")
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct")
const getProductDetails = require("../controller/product/getProductDetails")

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
router.get("/get-categoryProduct" , getCategoryProductOne)
router.post("/category-product" , getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
module.exports = router 