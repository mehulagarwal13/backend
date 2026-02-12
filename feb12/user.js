const mongoose=require("mongoose");
const {Schema}=mongoose;

const userschema=new Schema({
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    },
    password:{
         type:string,
        required:true
    },
    age
})


const customer=mongoose.model("customers",userschema);
module.exports=customer;