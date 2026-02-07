const express=require("express");
const app=express();
app.use(express.json());

app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.originalUrl}`);//yeh ek middleware ka example hai 
    //authorisation bhi asani sa kar sakta hai
    //30 line ka code agar har jagah likhna hai toh yha chala do bas 
    next();
})

app.post("/user",(req,res)=>{
    res.send("data saved");
})

app.get("/user",(req,res)=>{
    res.send("data get");
})

app.delete("/user",(req,res)=>{
    res.send("data delete");
})

app.listen(3000,()=>{
    console.log("listen at 3000")
})