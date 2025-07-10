const mongoose = require("mongoose");

const gooleMeetingRegisterModel = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    refresh_token: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Google_Meeting_Register_Model", gooleMeetingRegisterModel) 