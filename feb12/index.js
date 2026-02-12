const main=require("./database");
const express=require("express");
const app=express();
app.use(express.json());
const user = require("./user");
const validatoruser=require("./validator")
const bcrypt=require("bcrypt")
app.post("/register",async(req,res)=>{
    //api check karunga db alling sa phle
    
    try{
        validatoruser(req.body);
        req.body.password=await bcrypt.hash(req.body.password,10); 
        const data=await user.create(req.body);
        res.send({message:"send the data",
             data: data}
        )
    }
    catch(err){
        res.send("ERROR " + err.message)
    }
})
main()
.then(async()=>{
    console.log("DB IS CONNECTED")
    app.listen(3000,()=>{
        console.log("listen at 3000")
    })
 })
 .catch((err)=>{
    console.log(err)
 })