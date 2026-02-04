const express=require('express');
const app=express();
app.use((req,res)=>{
    res.send("Hey Mehul Agarawal");       //server banana express ki help sa
});
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});
