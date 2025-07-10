const mongoose = require("mongoose");

const googleMeetingScheduleModel = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    meetingDate: {
        type: Date,
        required: false
    },
    meetingLink: {
        type: String,
        required: false
    },
    customerEmail: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model("Google_Meeting_Schedule_Model", googleMeetingScheduleModel) 