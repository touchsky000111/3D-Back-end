const mongoose = require("mongoose");
const { Schema } = mongoose;

const buildSchema = new Schema({
    build: {
        type: String, // allows any type of object
        required: false,
    },
});

module.exports = mongoose.model("Build", buildSchema);
