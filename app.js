const express = require('express');

const mongoose = require("mongoose");

const bodyparser = require("body-parser");

const app = express()

const PORT = 5000;

const bcrypt = require('bcrypt');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017/signupDB")
.then(()=>{
console.log("conncet");
})
.catch(()=>{
console.log("nto conncet");
    
})


const userRoute = require("./src/route/user.route");
app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`Server started on  http://localhost:${PORT}`);
  });
