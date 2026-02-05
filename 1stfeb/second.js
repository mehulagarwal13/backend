console.log("Hello from second.js");

function sum(a,b){
    console.log("The sum is:", a+b);
}
function sub(a,b){
    console.log("The subtraction is:", a-b);
}
module.exports = {sum,sub};