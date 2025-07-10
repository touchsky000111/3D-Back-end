const mongoose = require("mongoose");

const Active_Calls_Model = new mongoose.Schema({
    phoneNumberId: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    callId: {
        type: String,
        required: true,
        unique: true
    },
    customerNumber: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Active_Calls_Model", Active_Calls_Model); 