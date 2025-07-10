const mongoose = require("mongoose");

const PhoneNumberModelSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    phoneNumberId: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("PhoneNumberModelSchema", PhoneNumberModelSchema) 