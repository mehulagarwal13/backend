const jwt = require('jsonwebtoken');
const user=require("../user")
const clientredis=require("./../config/redis")

const ratelimiter=async (req,res,next)=>{
    try{
       const key=req.ip;
       const current_time=Date.now()/1000; // Convert to seconds
       const request_time=current_time-3600; //isse phle ki request ko delete karna hoga

       await clientredis.zremrangebyscore(key,0,request_time) //isse phle ki request ko delete karna hoga
       const request_count=await clientredis.zcard(key) //isse current request count milega

       if(request_count>=5){
        throw new Error("Too many requests. Please try again later.");
       }
       await clientredis.zAdd(key, [{score: current_time,value: `${current_time}:${Math.random()}`}]) //isse current request ko add karna hoga
       await clientredis.expire(key,3600) //isse key ko expire karna hoga 1 hour ke baad
       next();

    }
    catch(err){
        
        res.send("ERROR " + err.message)
    }
}


module.exports=ratelimiter;