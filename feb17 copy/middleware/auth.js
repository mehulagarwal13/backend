const jwt = require('jsonwebtoken');
const user=require("../user")
const clientredis=require("./../config/redis")

const auth=async(req,res,next)=>{
     try {
            const token = req.cookies.token;
    
            if (!token) {
                throw new Error("Token not found");
            }
    
    
            const playload = jwt.verify(token, process.env.SECRET_KEY);
    
            const {id}=playload
            if(!id){
                throw new Error("id is missing")
            }
            const result = await user.findById(id);
            if (!result) {
            throw new Error("User not found");
             }
            const isblocked=await clientredis.get("token:${token}")
                if(isblocked){
                    throw new Error("you are blocked")
                }
        req.user = result;   // ⭐ MOST IMPORTANT LINE
             next();
     }
     catch(err){
        res.send(err.message);
     }
}

module.exports=auth;