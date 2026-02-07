const express=require("express");
const app=express();
app.use(express.json());



//route handler hai yeh
app.use("/send",(req,res,next)=>{
    console.log("I am First");
    next();
    console.log("sixth");
},
(req,res,next)=>{
    console.log("I am Second");
    next();
    console.log("fifth");
},
(req,res)=>{
    console.log("i am Third");
    res.send("hey I can implement multipeple call back by help of next")
    console.log("fourth");
})

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})