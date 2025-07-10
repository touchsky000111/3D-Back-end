const mongoose = require("mongoose");

const CallMinutesModelSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    paymentMethod: {
        type: String,
        required: true
    },
    subscriptionType: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("CallMinutesModel", CallMinutesModelSchema) 