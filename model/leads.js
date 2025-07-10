const mongoose = require("mongoose");

const leads = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    source: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    business_type: {
        type: String,
        required: false
    },
    company_name: {
        type: String,
        required: false
    },
    preferred_contact_time: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model("Leads", leads)