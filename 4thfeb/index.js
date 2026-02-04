const express=require('express');
const app=express();
app.use((req,res)=>{
    if(req.url=='/contact'){
        res.send("I am your contact page");
    }
    else{
         res.send("Hey Mehul Agarawal this side How are you");       //server banana express ki help sa
    }
});
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
