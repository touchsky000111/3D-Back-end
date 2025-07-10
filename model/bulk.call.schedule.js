const mongoose = require("mongoose");

const Bulk_Call_Schedule_Model = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    timezone: {
        type: String,
        required: false
    },
    afterHour: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Bulk_Call_Schedule_Model", Bulk_Call_Schedule_Model) 