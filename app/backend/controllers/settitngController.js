const HttpError = require("../models/http-error");

const NavigationSetting = require("./../models/settings/navigation_settings");
const MasterSetting = require("./../models/settings/masterSetting");
const MemberFieldSetting = require("./../models/settings/memberFieldSetting");

const Client = require("./../models/client");

const { create } = require("../models/user");

const memberFields = async(req, res, next) => {

    var memberField = {
        firstName: {
            included: true,
            type: "text",
            name: "First Name",
            slug: "firstName",
            options: null,
            req: true,
            validation: null
        },
        nickname: {
            included: true,
            type: "text",
            name: "Nickname",
            slug: "nickname",
            options: null,
            req: false,
            validation: null
        },
        lastName: {
            included: true,
            type: "text",
            name: "Last Name",
            slug: "lastName",
            options: null,
            req: true,
            validation: null
        },
        address1: {
            included: true,
            type: "text",
            name: "Address 1",
            slug: "address1",
            options: null,
            req: true,
            validation: null
        },
        address2: {
            included: true,
            type: "text",
            name: "Address 2",
            slug: "address2",
            options: null,
            req: false,
            validation: null
        },
        city: {
            included: true,
            type: "text",
            name: "City",
            slug: "city",
            options: null,
            req: true,
            validation: null
        },
        state: {
            included: true,
            type: "select",
            name: "State",
            slug: "state",
            options: {
                "AL": "Alabama",
                "AK": "Alaska",
                "AZ": "Arizona",
                "AR": "Arkansas",
                "CA": "California",
                "CO": "Colorado",
                "CT": "Connecticut",
                "DE": "Delaware",
                "FL": "Florida",
                "GA": "Georgia",
                "HI": "Hawaii",
                "ID": "Idaho",
                "IL": "Illinois",
                "IN": "Indiana",
                "IA": "Iowa",
                "KS": "Kansas",
                "KY": "Kentucky",
                "LA": "Louisiana",
                "ME": "Maine",
                "MD": "Maryland",
                "MA": "Massachusetts",
                "MI": "Michigan",
                "MN": "Minnesota",
                "MS": "Mississippi",
                "MO": "Missouri",
                "MT": "Montana",
                "NE": "Nebraska",
                "NV": "Nevada",
                "NH": "New Hampshire",
                "NJ": "New Jersey",
                "NM": "New Mexico",
                "NY": "New York",
                "NC": "North Carolina",
                "ND": "North Dakota",
                "OH": "Ohio",
                "OK": "Oklahoma",
                "OR": "Oregon",
                "PA": "Pennsylvania",
                "RI": "Rhode Island",
                "SC": "South Carolina",
                "SD": "South Dakota",
                "TN": "Tennessee",
                "TX": "Texas",
                "UT": "Utah",
                "VT": "Vermont",
                "VA": "Virginia",
                "WA": "Washington",
                "WV": "West Virginia",
                "WI": "Wisconsin",
                "WY": "Wyoming"
                },
            req: true,
            validation: null
        },
        zipcode: {
            included: true,
            type: "text",
            name: "Zip Code",
            slug: "zipcode",
            options: null,
            req: true,
            validation: ["5digit"]
        },
        municipality: {
            included: true,
            type: "select",
            name: "Municipality",
            slug: "municipality",
            options: {
                "csl": "City of South Lyon",
                "lyon": "Lyon Township",
                "got": "Green Oak Township",
                "other": "Other"
            },
            req: true,
            validation: null
        },
        emailAddress: {
            included: true,
            type: "text",
            name: "Email Address",
            slug: "emailAddress",
            options: null,
            req: true,
            validation: null
        },
        primaryPhoneNumber:{
            included: true,
            type: "text",
            name: "Primary Phone Number",
            slug: "primaryPhoneNumber",
            options: null,
            req: true,
            validation: null
        },
        secondaryPhoneNumber: {
            included: true,
            type: "text",
            name: "Secondary Phone Number",
            slug: "secondaryPhoneNumber",
            options: null,
            req: false,
            validation: null
        },
        emergencyNameOne: {
            included: true,
            type: "text",
            name: "Emergency Contact Name 1",
            slug: "emergencyNameOne",
            options: null,
            req: false,
            validation: null
        },
        emergencyPhoneOne: {
            included: true,
            type: "text",
            name: "Emergency Contact Phone 1",
            slug: "emergencyPhoneOne",
            options: null,
            req: false,
            validation: null
        },
        emergencyRelationOne: {
            included: true,
            type: "text",
            name: "Emergency Contact Relation 1",
            slug: "emergencyRelationOne",
            options: null,
            req: false,
            validation: null
        },
        emergencyNameTwo: {
            included: true,
            type: "text",
            name: "Emergency Contact Name 2",
            slug: "emergencyNameTwo",
            options: null,
            req: false,
            validation: null
        },
        emergencyPhoneTwo: {
            included: true,
            type: "text",
            name: "Emergency Contact Phone 2",
            slug: "emergencyPhoneTwo",
            options: null,
            req: false,
            validation: null
        },
        emergencyRelationTwo: {
            included: true,
            type: "text",
            name: "Emergency Contact Relation 2",
            slug: "emergencyRelationTwo",
            options: null,
            req: false,
            validation: null
        }
    }

    const mySetting = await new MemberFieldSetting(memberField);

    await mySetting.save();


    res.json(mySetting);
}

const saveMyStuff = async (req, res, next) => {
    const settingid = "691f837e3d0f176f68d139f8";
    const masterID = "6917a4af4d3bac9e06687496";
    const master = await MasterSetting.findById(masterID);
    const setting = await MemberFieldSetting.findById(settingid);

    master.memberFields = setting;

    await master.save();

    res.json(master);
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
exports.memberFields = memberFields;