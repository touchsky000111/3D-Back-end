const mongoose = require("mongoose");

const users = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: false
    },
    userName:{
        type: String,
        required: false
    },
    phoneNumber:{
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: false
    }

}, {
    timestamps: true // Adds createdAt and updatedAt fields
})

module.exports = mongoose.model("Users", users)