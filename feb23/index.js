const express = require('express');
const user = require("./user");
const app=express();


const validatoruser = require("./validator");

app.use(express.json())

app.post("/register", async (req, res) => {