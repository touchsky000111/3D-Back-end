const mongoose = require("mongoose");

const DocumentsModelSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("DocumentsModel", DocumentsModelSchema) 