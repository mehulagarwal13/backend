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
        //compare kaisa karta hoga jaisa login time ma hmara db ma store hua hoga hashpass
        //so usko usse compare karata hai usme version+salt+orginalpass 
        //toh salt phle enterd pass ma add hoga then dono ko compare karega
        const matchit=await bcrypt.compare(password,hashpass);
        console.log(matchit);
    } 
    catch (err) {
        console.error(err);
    }
}

Hashing();
