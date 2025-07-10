const mongoose = require("mongoose");

const FileMetaSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    fileName: {
        type: String,
        required: false,
    },
    fileId: {
        type: String,
        required: false,
    },
    fileType: {
        type: String,
        required: false,
    },
    fileSize: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model("File_Meta_model", FileMetaSchema)