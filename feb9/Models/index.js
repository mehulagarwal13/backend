const express = require("express");
const app = express();
const {main} = require("../database");

app.use(express.json());

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
