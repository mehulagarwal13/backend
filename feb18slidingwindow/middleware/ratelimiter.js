const jwt = require('jsonwebtoken');
const user=require("../user")
const clientredis=require("./../config/redis")

const ratelimiter=async (req,res,next)=>{
    try{
        const ip=req.ip;
        const cnt=await clientredis.incr(ip);
        if(cnt==1){
            await clientredis.expire(3600) //1 min
        }
        if(cnt>10){
            throw new Error("Too many request")
        }
        next();
    }
    catch(err){
        
        res.send("ERROR " + err.message)
    }
}


module.exports=ratelimiter;