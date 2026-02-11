const bcrypt = require("bcrypt");

const password = "Rohit@123";

async function Hashing() {
    try {
        console.time("hash");

        // hash(password, saltRounds)
        const salt=await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password,salt);

        console.timeEnd("hash");
        console.log(salt)
        console.log(hashpass);
    } 
    catch (err) {
        console.error(err);
    }
}

Hashing();
