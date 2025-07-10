const mongoose = require("mongoose");

const users = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    googleId: {
        type: String,
        required: false,
        unique: true,
        sparse: true // Allows null/undefined values while maintaining uniqueness
    },
    authProvider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
})

module.exports = mongoose.model("Users", users)