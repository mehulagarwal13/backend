const jwt = require('jsonwebtoken');
const user=require("../user")
const clientredis=require("./../config/redis")

const ratelimiter=async (req,res,next)=>{
    try{
       const key=req.ip;
       
    }
    catch(err){
        
        res.send("ERROR " + err.message)
    }
}


module.exports=ratelimiter;