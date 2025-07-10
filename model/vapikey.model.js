const mongoose = require("mongoose");

const VapiKeyModel = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: false
    },
    userId: {
        type: String,
        required: false,
    },
    vapiKey: {
        type: String,
        required: false,
    },

})

module.exports = mongoose.model("VapiKeyModel", VapiKeyModel)