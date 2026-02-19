const redis=require("redis");
const clientredis=redis.createClient({username: 'default',
    password: 'pZSnzZkkus0mQdxQEoEksaXbEXXmYmVf',
    socket: {
        host: 'redis-16734.crce276.ap-south-1-3.ec2.cloud.redislabs.com',
        port: 16734
    }});
const connectredis=async()=>{
    await clientredis.connect();
    console.log("connected to redis");
}
connectredis();

module.exports=clientredis;