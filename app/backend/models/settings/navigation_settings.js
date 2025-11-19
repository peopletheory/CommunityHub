const { link } = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const linkSchema = new Schema({
    included: Boolean,
    name: String,
    icon: String,
    link: String
});

const navigationSettingSchema = new Schema({
    home:{
        type: linkSchema
    },
    members: {
        type: linkSchema
    },
    events: {
        type: linkSchema
    },
    payments: {
        type: linkSchema
    },
    statistics: {
        type: linkSchema
    },
    communication: {
        type: linkSchema
    },
    facility: {
        type: linkSchema
    },
    settings: {
        linkSchema
    }
});
module.exports = mongoose.model("NavigationSetting", navigationSettingSchema);

