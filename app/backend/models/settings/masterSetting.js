
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const masterSettingSchema = new Schema({
    navigation: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "NavigationSetting"
    },
    memberFields: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "MemberFieldSetting"
    }
})

module.exports = mongoose.model("MasterSetting", masterSettingSchema);