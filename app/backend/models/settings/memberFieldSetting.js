const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberField = new Schema({
    included: Boolean,
    type: String,
    name: String,
    slug: String,
    options: {},
    req: Boolean,
    validation: [],
});

const memberFieldSettingSchema = new Schema({
    firstName: {
        type: memberField
    },
    nickname: {
        type: memberField
    },
    lastName:{
        type: memberField
    },
    address1:{
        type: memberField
    },
    address2:{
        type: memberField
    },
    city: {
        type: memberField
    },
    state: {
        type: memberField
    },
    zicode: {
        type: memberField
    },
    municipality: {
        type: memberField
    },
    emailAddress: {
        type: memberField
    },
    primaryPhoneNumber: {
        type: memberField
    },
    secondaryPhoneNumber: {
        type: memberField
    },
    emergencyNameOne: {
        type: memberField
    },
    emergencyPhoneOne: {
        type: memberField
    },
    emergencyRelationOne: {
        type: memberField
    },
    emergencyNameTwo: {
        type: memberField
    },
    emergencyPhoneTwo: {
        type: memberField
    },
    emergencyRelationTwo: {
        type: memberField
    }
});

module.exports = mongoose.model("MemberFieldSetting", memberFieldSettingSchema);