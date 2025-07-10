const mongoose = require("mongoose");

const emailVerifyModel = new mongoose.Schema({
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
    companyName: {
        type: String,
        required: false
    },
    code: {
        type: String,
        required: false,
    },
    isResetPassword: {
        type: Boolean,
        required: false,
        default: false
    },
    date: {
        type: Date,
        required: false
    },
})

module.exports = mongoose.model("EmailVerify", emailVerifyModel)