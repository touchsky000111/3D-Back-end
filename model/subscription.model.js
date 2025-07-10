const mongoose = require("mongoose");

const SubscriptionModelSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    subscriptionType: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model("SubscriptionModel", SubscriptionModelSchema) 