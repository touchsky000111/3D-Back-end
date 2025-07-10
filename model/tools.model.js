const mongoose = require("mongoose");

const ToolsModel = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    toolId: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model("ToolsModel", ToolsModel)