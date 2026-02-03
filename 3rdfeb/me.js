console.log("this is me.js file in 3rdfeb folder");
const fs=require('fs');
function sum(a,b){
    return a+b;
}
fs.readFile("./data.json","utf-8",(err,data)=>{
    console.log(data);
})

fs.readFile("./data.json","utf-8",(err,data)=>{
    if(err) return console.log("error",err);
    const obj=JSON.parse(data);
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.entries(obj));
})

setTimeout(()=>{
    console.log("hello after 5 second");
},5000)

console.log(sum(5,10));
console.log("end of me.js file");