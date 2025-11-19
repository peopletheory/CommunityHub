const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: ['admin', 'worker', 'basic'],
        default: 'worker'
    },
    title: {
        type: String,
    },
    client: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Client"
    },
    settings: {
        type: [String],
        default: []
    }
    
})

module.exports = mongoose.model("User", userSchema);