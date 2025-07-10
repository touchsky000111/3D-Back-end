const mongoose = require("mongoose");

const twilioSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    accountSid:{
        type: String,
        required: true
    },
    accountAuthToken: {
        type: String,
        required: true
    }
})

const twilioModel = mongoose.model("twilioSchema", twilioSchema);

module.exports = twilioModel;