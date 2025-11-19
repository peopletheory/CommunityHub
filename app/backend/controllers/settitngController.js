const HttpError = require("../models/http-error");

const NavigationSetting = require("./../models/settings/navigation_settings");
const MasterSetting = require("./../models/settings/masterSetting");
const Client = require("./../models/client");

const { create } = require("../models/user");

const saveMyStuff = async (req, res, next) => {
    const id = "6917a307c45e4d0678e2c469";

    const setting = await NavigationSetting.findById(id);

    setting.home.link = "home";
    setting.members.link = "members";
    setting.events.link = "events";
    setting.payments.link = "payments";
    setting.statistics.link = "statistics";
    setting.communication.link = "communication";
    setting.facility.link = "facility";
    setting.settings.link = "settings";

    await setting.save();

    res.json(setting);
}

const getNavigation = async (req, res, next) => {
    const clientID = req.params.cid;

    const myClient = await Client.findById(clientID);
    const settingID = myClient.settings;

    const masterSetting = await MasterSetting.findById(settingID);
    const navigationID = masterSetting.navigation;

    const NavigationList = await NavigationSetting.findById(navigationID);

    res.json(NavigationList);
}

const masterSetting = async (req, res, next) => {
    var navigation = "6917a307c45e4d0678e2c469";

    const master = {
        navigation: navigation
    }

    const createdSetting = new MasterSetting(master);

    try{
        await createdSetting.save();
    } catch(err){
        const error = new HttpError("Something went wrong", 500);
        return next(error);
    }

    res.json(createdSetting);
}

const navigationSetting = async (req, res, next) => {
    
    const navigation = {
        home: {
            included: true,
            name: "Home",
            icon: "FaHome"
        },
        members: {
            included: true,
            name: "Members",
            icon: "FaUsers"
        },
        events: {
            included: true,
            name: "Events",
            icon: "MdEvent"
        },
        payments: {
            included: true,
            name: "Payments",
            icon: "TbReportMoney"
        },
        statistics: {
            included: true,
            name: "Statistics / Reporting",
            icon: "TbReport"
        },
        communication: {
            included: true,
            name: "Communication",
            icon: "FaBullhorn"
        },
        facility: {
            included: true,
            name: "Facility and Faculty",
            icon: "FaBuildingColumns"
        },
        settings: {
            included: true,
            name: "Settings",
            icon: "IoSettingsOutline"
        }
    };

    const createdSetting = new NavigationSetting(navigation);

    try{
        await createdSetting.save();
    } catch(err){
        const error = new HttpError("Something went wrong", 500);
        return next(error);
    }
    res.json(navigation);
}

exports.navigationSetting = navigationSetting;
exports.masterSetting = masterSetting;
exports.getNavigation = getNavigation;
exports.saveMyStuff = saveMyStuff;