const mongoose=require("mongoose");
const {Schema}=mongoose

const userschema=new Schema({
    firstname:{
        minlength:3,
        maxlength:20,
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
        enum:["male","female","others"],
        type:String,
        lowercase:true
    },
    age:{
        min:10,
        max:70,
        type:Number
    },
    email:{
        unique:true,
        required:true,
        type:String,
        trim:true
    },
    password:{
        type:String
    }
},{timestamps:true})

const user=mongoose.model("customers",userschema);

module.exports=user;