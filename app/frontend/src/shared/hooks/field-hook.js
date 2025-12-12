import { useState } from "react";

export const useMemberField = (givenFields) => {
    let MY_firstName, MY_nickname, MY_lastName, MY_address1, MY_address2, MY_city, MY_state, MY_zipcode, MY_municipality, MY_emailAddress, MY_primaryPhoneNumber, MY_secondaryPhoneNumber, MY_emergencyNameOne, MY_emergencyPhoneOne, MY_emergencyRelationOne, MY_emergencyNameTwo, MY_emergencyPhoneTwo, MY_emergencyRelationTwo, MY_newsletterMethod;

    MY_firstName = MY_nickname = MY_lastName = MY_address1 = MY_address2 = MY_city = MY_state = MY_zipcode = MY_municipality = MY_emailAddress = MY_primaryPhoneNumber = MY_secondaryPhoneNumber = MY_emergencyNameOne = MY_emergencyPhoneOne = MY_emergencyRelationOne = MY_emergencyNameTwo = MY_emergencyPhoneTwo = MY_emergencyRelationTwo = MY_newsletterMethod = [];

    var fields = { MY_firstName, MY_nickname, MY_lastName, MY_address1, MY_address2, MY_city, MY_state, MY_zipcode, MY_municipality, MY_emailAddress, MY_primaryPhoneNumber, MY_secondaryPhoneNumber, MY_emergencyNameOne, MY_emergencyPhoneOne, MY_emergencyRelationOne, MY_emergencyNameTwo, MY_emergencyPhoneTwo, MY_emergencyRelationTwo, MY_newsletterMethod };

    const keys = Object.keys(givenFields);

    for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        if (key === "_id" || key === "_v") {
            continue;
        }

        var obj = givenFields[key];

        var inclusion = obj["included"];

        if (!inclusion) {
            continue;
        }

        var type = obj["type"];
        var name = obj["name"];
        var slug = obj["slug"];
        var options = obj["options"];
        var required = obj["req"];
        var validation = obj["validation"];
        var unique = obj["unique"];

        var field = {
            type: type,
            name: name,
            slug: slug,
            options: options,
            required: required,
            validation: validation,
            inclusion: inclusion,
            unique: unique,
        };

        var keySlug = "MY_" + key;

        fields[keySlug] = field;
    }

    const [firstName, setFirstName] = useState("");
    const [nickname, setNickname] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState("");
    const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");
    const [emergencyNameOne, setEmergencyNameOne] = useState("");
    const [emergencyPhoneOne, setEmergencyPhoneOne] = useState("");
    const [emergencyRelationOne, setEmergencyRelationOne] = useState("");
    const [emergencyNameTwo, setEmergencyNameTwo] = useState("");
    const [emergencyPhoneTwo, setEmergencyPhoneTwo] = useState("");
    const [emergencyRelationTwo, setEmergencyRelationTwo] = useState("");
    const [newsletterMethod, setNewsletterMethod] = useState("");

    const states = {
        firstName: firstName,
        nickname: nickname,
        lastName: lastName,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
        municipality: municipality,
        emailAddress: emailAddress,
        primaryPhoneNumber: primaryPhoneNumber,
        secondaryPhoneNumber: secondaryPhoneNumber,
        emergencyNameOne: emergencyNameOne,
        emergencyPhoneOne: emergencyPhoneOne,
        emergencyRelationOne: emergencyRelationOne,
        emergencyNameTwo: emergencyNameTwo,
        emergencyPhoneTwo: emergencyPhoneTwo,
        emergencyRelationTwo: emergencyRelationTwo,
        newsletterMethod: newsletterMethod,
    };

    const setStates = {
        firstName: setFirstName,
        nickname: setNickname,
        lastName: setLastName,
        address1: setAddress1,
        address2: setAddress2,
        city: setCity,
        state: setState,
        zipcode: setZipcode,
        municipality: setMunicipality,
        emailAddress: setEmailAddress,
        primaryPhoneNumber: setPrimaryPhoneNumber,
        secondaryPhoneNumber: setSecondaryPhoneNumber,
        emergencyNameOne: setEmergencyNameOne,
        emergencyPhoneOne: setEmergencyPhoneOne,
        emergencyRelationOne: setEmergencyRelationOne,
        emergencyNameTwo: setEmergencyNameTwo,
        emergencyPhoneTwo: setEmergencyPhoneTwo,
        emergencyRelationTwo: setEmergencyRelationTwo,
        newsletterMethod: setNewsletterMethod,
    };

    return [fields, states, setStates];
};
