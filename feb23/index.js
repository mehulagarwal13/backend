const express = require('express');
const user = require("./user");
const app=express();


const validatoruser = require("./validator");

app.use(express.json())

app.post("/register", async (req, res) => {
    try {
        validatoruser(req.body);
        const data = await user.create(req.body);
        res.send({ message: "send the data", data: data })
    }   
    catch (err) {               