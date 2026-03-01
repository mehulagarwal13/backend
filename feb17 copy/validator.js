const validator=require("validator");
function validatoruser(data){
    const mandatoryfield=["email","name","password"];
    const isallowed=mandatoryfield.every((k)=>Object.keys(data).includes(k));
    if(!isallowed)
        throw new Error(`field missing`);

    if(!validator.isStrongPassword(data.password))
        throw new Error("password is weak");

    if(!validator.isEmail(data.email))
        throw new Error("wrong email");
}

module.exports=validatoruser;