const mongoose = require("mongoose");

const publicUrlSchema = new mongoose.Schema({
    userId: String,
    publicUrl: String,
    publicUrlName: String,
    date: Date,
    fileId: String
})

const PublicUrl = mongoose.model("PublicUrl", publicUrlSchema);

module.exports = PublicUrl;