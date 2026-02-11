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
        res.send("ERROR " + err.message)
    }
})
app.get("/store",async(req,res)=>{
    try{
        const info=await user.find({})
        res.send({message:"data shown",data:info}).status(200)
    }
    catch(err){
        console.log(err)
    }
})
app.get("/store/:id",async(req,res)=>{
    try{
    const id=req.params.id;
    const info=await user.findById(id);
    res.send(info);
    }
    catch(err){
        console.log(err)
    }
})
app.delete("/store/:id",async(req,res)=>{
    try{
    const deletedelement=await user.findByIdAndDelete(req.params.id);
    res.send("deleted successfully")
    }
    catch(err){
        res.send(err)
    }
})

app.patch("/update",async(req,res)=>{
     try{
    const {id,...up}=req.body;
    await user.findByIdAndUpdate(id,up,{"runValidators":true})
    res.send("update it");
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