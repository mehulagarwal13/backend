const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb+srv://mehulagarwal333:luhem%401313@coding.dzqigr6.mongodb.net/Instagram")
}
module.exports={main};