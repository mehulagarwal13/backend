
console.log("Hello from first.js");

const obj=require("./second.js");
obj.sum(7,10); //commmon js module system mujhe second wali file ki need first ma thi
obj.sub(10,5);
// (function(){
//     console.log("Hello from second.js");

// function sum(a,b){
//     console.log("The sum is:", a+b);
// }

// sum(5,10);
// })(); yeh require ea kam karta hai 
//i need my code second file in first