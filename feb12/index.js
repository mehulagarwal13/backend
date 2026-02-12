const main=require("./database");
const express=require("express");
const app=express();
app.use(express.json());
const customer=require("./user")





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