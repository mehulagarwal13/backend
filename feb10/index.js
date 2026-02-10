const express=require("express");
const app=express();
const {main}=require("./database");
const user=require("./user");

app.use(express.json());
app.post("/store",async(req,res)=>{
    try{
    const data =await user.create(req.body)
    res.status(200).send({
        message:"data send in the database",
        Data:data
    })
    }
    catch(err){

        console.log(err);
        res.send("Error");
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