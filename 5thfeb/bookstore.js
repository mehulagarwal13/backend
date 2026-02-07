const express=require("express");
const app=express();
const bookstore=[
    {id:1,name:"the rebel",author:"Mehul"},
    {id:2,name:"the conflict",author:"Daksh"},
    {id:3,name:"major",author:"prakash"},
    {id:4,name:"nomeansno",author:"garv"}
]
app.use(express.json());
app.get("/book",(req,res)=>{
    res.send(bookstore);
})
app.get("/book/:id",(req,res)=>{
    
    const id=parseInt(req.params.id);
    const b=bookstore.find(info=>info.id===id);
    res.send(b);
})
app.post("/book",(req,res)=>{
    bookstore.push(req.body);
    res.send("backend recieve the data");
});

app.patch("/book",(req,res)=>{
    const book=bookstore.find(info=>info.id==req.body.id);
    book.author=req.body.author
    console.log(req.body);
    res.send(  "patch the data upgrade");
})

app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=bookstore.findIndex(info=>info.id===id);
    bookstore.splice(index,1);//jitna element delete karna hai 
    res.send("delete complete ");
})

app.listen(3000,()=>{
    console.log("the server is running at port 3000");
});