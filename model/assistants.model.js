const mongoose = require("mongoose");

const AssistantModelSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    assistantId: {
        type: String,
        required: false
    },
    assistantName: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("AssistantModelSchema", AssistantModelSchema) 