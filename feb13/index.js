const main=require("./database");
const express=require("express");
const app=express()
const user = require("./user");
const validatoruser=require("./validator")
const bcrypt=require("bcrypt")
const cookieparse=require("cookie-parser")
const jwt = require('jsonwebtoken');
app.use(cookieparse());
app.use(express.json())
app.post("/register",async(req,res)=>{
    //api check karunga db alling sa phle    
    try{
        validatoruser(req.body);
        req.body.password=await bcrypt.hash(req.body.password,10); 
        const data=await user.create(req.body);
        res.send({message:"send the data",
             data: data})
    }
    catch(err){
        res.send("ERROR " + err.message)
    }
})
app.post("/login", async (req, res) => {
    try {
        const a = await user.findOne({email:req.body.email});

        if (!a) {
            return res.send("User not found");
        }

        // if (req.body.email !== a.email) {
        //     return res.send("Invalid credentials");
        // }

        const p = await bcrypt.compare(req.body.password, a.password);

        if (!p) {
            return res.send("Invalid credentials");
        }
        //jwt token bhejo cokkies ki help sa

        const token = jwt.sign(
               { id: a._id, email: a.email },   // payload object
                 "mysecretkey",                   // secret key
                { expiresIn: "1d" }              // optional
        );

        res.cookie("token",token);
        res.send("login success");
    }
    catch (err) {
        res.send(err.message);
    }
});
app.get("/info",async(req,res)=>{
    try {
        //mujhe verify karna hoga ki yeh user wahi hai jisne login kia
         const playload=jwt.verify(req.cookies.token,"mysecretkey") //jo token hai apka cokkie ma aur secretkey
         //agar yeh verify nhi ho pata toh yeh error fek kar marega
         console.log(playload);
         const result=await user.findById(playload.id);
         console.log(req.cookies);
         res.send(result);
    }
    catch (err) {
        res.send(err.message);
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

 