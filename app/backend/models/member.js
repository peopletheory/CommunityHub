const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    nickname: {
        type: String,
    },
    address1: {
        type: String,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipcode: {
        type: String,
    },
    municipality: {
        type: String,
    },
    emailAddress: {
        type: String,
    },
    primaryPhoneNumber: {
        type: String,
    },
    secondaryPhoneNumber: {
        type: String,
    },
    emergencyNameOne: {
        type: String,
    },
    emergencyPhoneOne: {
        type: String,
    },
    emergencyRelationOne: {
        type: String,
    },
    emergencyNameTwo: {
        type: String,
    },
    emergencyPhoneTwo: {
        type: String,
    },
    emergencyRelationTwo: {
        type: String,
    },
    newsletterMethod: {
        type: String,
    },
    dateJoined: {
        type: Date,
        default: Date.now(),
    },
    lastVisit: {
        type: Date,
        default: Date.now(),
    },
    client: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Client",
    },
});

module.exports = mongoose.model("Member", memberSchema);
