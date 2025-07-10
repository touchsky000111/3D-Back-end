const mongoose = require("mongoose")

const vapiCallHistorySchema = new mongoose.Schema({
    phoneNumberId: {
        type: String,
        required: true,
    },
    assistantId: {
        type: String,
        required: true,
    },
    
})  

module.exports = mongoose.model("VapiCallHistory", vapiCallHistorySchema)