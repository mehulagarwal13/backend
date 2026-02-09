const mongoose=require("mongoose");
const {Schema}=mongoose;
async function main(){
await mongoose.connect("mongodb+srv://mehulagarwal333:luhem%401313@coding.dzqigr6.mongodb.net/bookstore"); //book store ek database ho jaeaga

  //yeh field set kar rha hai 
  // const userschema=new mongoose.Schema({ 
  //   name:String,
  //   age:Number,
  //   city:String,
  //   gender:String
  // })

  // const user=mongoose.model("user",userschema,"user");//yeh collection bana rha hai 

  //document ko create kara hai ya object banaya hai 
  // const user1=new user({name:"mehul",age:21,city:"Meerut",gender:"MALE"});
  // await user1.save();

  //or yeh bhi documernt create kar rha hai
  // await user.create({name:"Daksh",age:15,city:"Hapur",gender:"MALE"})

  // await user.insertMany([{name: "Aarav",age: 24,city: "Pune",},{name:"garv",gender: "MALE"}])

  // const ans=await user.find({});
  // console.log(ans);
  //yeh find kar rha hai database ma

  // const ans2=await user.find({name:"mehul"});
  // console.log(ans2);
}
module.exports={main};

