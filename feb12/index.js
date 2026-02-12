const main=require("./database");
const express=require("express");
const app=express();
app.use(express.json());
const user = require("./user");

app.post("/register",async(req,res)=>{
    //api check karunga db alling sa phle
    const mandatoryfield=["email","name","password"];
    const isallowed=mandatoryfield.every((k)=>Object.keys(req.body).includes(k));
    if(!isallowed)
         throw new Error(`field missing`);
    
    try{
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