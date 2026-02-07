const express=require("express");
const app=express();
app.use(express.json());

app.use("/send",(req,res,next)=>{
    console.log("I am First");
    next();
},
(req,res,next)=>{
    console.log("I am Second");
    next();
},
(req,res)=>{
    console.log("i am Third");
    res.send("hey I can implement multipeple call back by help of next")
})

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})