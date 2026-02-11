const mongoose=require("mongoose");
const {Schema}=mongoose

const userschema=new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    city:{
        type:String
    },
    gender:{
        type:String
    },
    age:{
        min:10,
        max:70,
        type:Number
    },
    email:{
        unique:true,
        required:true,
        type:String
    },
    password:{
        type:String
    }
})

const user=mongoose.model("customers",userschema);

module.exports=user;