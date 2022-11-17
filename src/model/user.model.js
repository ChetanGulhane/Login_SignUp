const mongoose = require("mongoose");

let User = mongoose.Schema({
    name: {
        type: String,
        require: true 
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        unique: true
    },
    confirmpassword: {
        type: String,
    },
    // date: {
    //     type: String,
    // }
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", User);
