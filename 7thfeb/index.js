const express=require("express");
const app=express();
app.use(express.json());



//route handler hai yeh   inko ma alag alag bhi likh sakta hu
app.use("/send",(req,res,next)=>{ //middleware 
    console.log("I am First");
    next();
    console.log("sixth");
},
(req,res,next)=>{
    console.log("I am Second"); //middleware kuki response last wala call back se mil rha hai
    next();
    console.log("fifth");
},
(req,res)=>{
    console.log("i am Third"); 
    res.send("hey I can implement multipeple call back by help of next")//request sender
    console.log("fourth");
}) //yeh nicha jo code hai same work karega upar jaisa 

// app.use("/send",(req,res,next)=>{    
//     console.log("I am First");
//     next();
//     console.log("sixth");
// })
// app.use("/send",(req,res,next)=>{
//     console.log("I am Second");
//     next();
//     console.log("fifth");
// })

// app.use("/send",(req,res)=>{
//     console.log("i am Third");
//     res.send("hey I can implement multipeple call back by help of next")
//     console.log("fourth");
// })

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})