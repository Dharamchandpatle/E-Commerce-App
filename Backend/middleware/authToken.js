 const jwt = require("jsonwebtoken")


 const authToken = async ( req ,res , next )=>{
    try {
        const token = req.cookies?.token 
        console.log("token ", token);
        if(!token){
            return res.status(200).json({
                message : "user not login ",
                success : false,
                error : true

             })
        }
        jwt.verify(token , process.env.TOKEN_SECRET_KEY , function(err , decode){
            console.log(err);
            console.log("decode" , decode);

            if(err){
                return res.status(401).json({
                    message : "error Auth  ",
                    success : false,
                })
            }
            req.userId = decode._id 

            next()
        })
        console.log("token", token);
        
    } catch (error) {
        res.status(400).json({
            message : error.message || err ,
            data : [],
            status : false,
            error :true
        })
        
    }
 }

module.exports = authToken 