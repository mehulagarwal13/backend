const express = require("express");
const app = express();
const user=require('./user')
const {main} = require("../database");

app.use(express.json());

app.get("/info",async(req,res)=>{
  const information=await user.find({});
  res.send(information)
})

app.post("/info", async (req, res) => {
  const data = await user.create(req.body);
  res.status(201).json(data);
});

// app.delete("/info",async(req,res)=>{
//   const data=await user.deleteMany(req.body);
//   res.send(data);
// })
main()
  .then(() => {
    console.log("db is connected");

    app.listen(3000, () => {
      console.log("Listening at port 3000");
    });
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });
