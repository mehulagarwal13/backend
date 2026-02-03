const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Welcome to Home Page");
    } else if(req.url==="/about"){
        res.end("Welcome to About Page");
    } else if(req.url==="/contact"){
        res.end("Welcome to Contact Page");
    } else{
        res.end("Page Not Found");
    }
    //res.end("Hello from 3rdfeb folder");
    // console.log("Request URL:", req.url);
});
server.listen(4000,()=>{
    console.log("server is listening on port 4000");
});