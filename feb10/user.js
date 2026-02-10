const mongoose=require("mongoose");
const {Schema}=mongoose

const userschema=new Schema({
    firstname:{
        type:String
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
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const user=mongoose.model("customers",userschema);

module.exports=user;