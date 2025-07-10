const mongoose = require("mongoose");

const calendlyApiKey = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    access_token: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("calendlyApiKey", calendlyApiKey)