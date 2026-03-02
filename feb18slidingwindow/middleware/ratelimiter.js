const jwt = require('jsonwebtoken');
const user=require("../user")
const clientredis=require("./../config/redis")

const ratelimiter=async (req,res,next)=>{
    try{
       const key=req.ip;
       const current_time=Date.now()/1000; // Convert to seconds
       const request_time=current_time-3600; //isse phle ki request ko delete karna hoga
    

    }
    catch(err){
        
        res.send("ERROR " + err.message)
    }
}


module.exports=ratelimiter;