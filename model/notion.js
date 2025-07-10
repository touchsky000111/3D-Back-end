const mongoose = require("mongoose");

const notion = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    fileId: {
        type: String,
        required: false,
    },
    notionLink: {
        type: String,
        required: false,
    },
    notionName: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model("notion", notion)