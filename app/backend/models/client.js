const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    clientName: {
        type: String,
        required: true
    },
    clientDomain: {
        type: String,
        required: true,
        unique: true
    },
    contactFirstName: {
        type: String,
        required: true
    },
    contactLastName: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactDateOfBirth: {
        type: Date,
        required: true
    },
    clientAddress: {
        type: String,
        required: true
    },
    clientCity: {
        type: String,
        required: true
    },
    clientState: {
        type: String,
        required: true
    },
    clientZipCode: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    settings: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "MasterSetting"
    },
    dateInitiated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Client", clientSchema);