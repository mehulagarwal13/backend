const express=require("express");
const app=express();
app.use(express.json());  //data backend ma lena ka liya parsing karani padhti hai
app.get("/user",(req,res)=>{
    res.send({name:"MEHUL",age:21,college:"JIIT"});
});
app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("DATA saved success");
});


app.listen(1000,()=>{
    console.log("server is running at port number 1000")
});