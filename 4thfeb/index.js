const express=require('express');
const app=express();
app.get("/user",(req,res)=>{
    res.send({name:"MEHUL",age:21,number:8979011405});
});
app.use(/^\/c+t$/,(req,res)=>{
    res.end("Hey daksh i am plus");  //    /^\/c?t  
});
app.use("/cont/:id",(req,res)=>{
    console.log(req.params);
    res.end("Hey daksh ");  //    /^\/c?t  
});
app.use("/",(req,res)=>{
    if(req.url=='/contact'){
        res.send("I am your contact page");
    }
    else if(req.url==='/ct'){
        res.send("hey daksh is there ");
    }
    else{
         res.send("Hey Mehul Agarawal this side How are you");       //server banana express ki help sa
    }
});

app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
