import { useState } from "react";

export const useMemberField = ( givenFields) => {
        let MY_firstName,MY_nickname,MY_lastName,MY_address1,MY_address2,MY_city,MY_state,MY_zipcode,MY_municipality,MY_emailAddress,MY_primaryPhoneNumber,MY_secondaryPhoneNumber,MY_emergencyNameOne,MY_emergencyPhoneOne,MY_emergencyRelationOne,MY_emergencyNameTwo,MY_emergencyPhoneTwo,MY_emergencyRelationTwo;

        MY_firstName = MY_nickname = MY_lastName = MY_address1 = MY_address2 = MY_city = MY_state = MY_zipcode = MY_municipality = MY_emailAddress = MY_primaryPhoneNumber = MY_secondaryPhoneNumber = MY_emergencyNameOne = MY_emergencyPhoneOne = MY_emergencyRelationOne = MY_emergencyNameTwo = MY_emergencyPhoneTwo = MY_emergencyRelationTwo = [];

        var fields = { MY_firstName,MY_nickname,MY_lastName,MY_address1,MY_address2,MY_city,MY_state,MY_zipcode,MY_municipality,MY_emailAddress,MY_primaryPhoneNumber,MY_secondaryPhoneNumber,MY_emergencyNameOne,MY_emergencyPhoneOne,MY_emergencyRelationOne,MY_emergencyNameTwo,MY_emergencyPhoneTwo,MY_emergencyRelationTwo}

        const keys = Object.keys(givenFields);

        for(var k = 0; k<keys.length; k++){
            var key = keys[k];

            if(key === "_id" || key === "_v"){
                continue;
            }

            var obj = givenFields[key];

            var inclusion = obj['included'];

            if(!inclusion){
                continue;
            }

            var type = obj['type'];
            var name = obj['name'];
            var slug = obj['slug'];
            var options = obj['options'];
            var required = obj['req'];
            var validation = obj['validation'];

            var field = {
                type: type,
                name: name,
                slug: slug,
                options: options,
                required: required,
                validation: validation
            };


            var keySlug = "MY_" + key;

            fields[keySlug] = [];

            fields[keySlug].push("");
            fields[keySlug].push(field);

        }

    console.log(fields);

    const [firstName, setFirstName] = useState(MY_firstName);
    const [nickname, setNickname] = useState(MY_nickname);
    const [lastName, setLastName] = useState(MY_lastName);
    const [address1, setAddress1] = useState(MY_address1);
    const [address2, setAddress2] = useState(MY_address2);
    const [city, setCity] = useState(MY_city);
    const [state, setState] = useState(MY_state);
    const [zipcode, setZipcode] = useState(MY_zipcode);
    const [municipality, setMunicipality] = useState(MY_municipality);
    const [emailAddress, setEmailAddress] = useState(MY_emailAddress);
    const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState(MY_primaryPhoneNumber);
    const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState(MY_secondaryPhoneNumber);
    const [emergencyNameOne, setEmergencyNameOne] = useState(MY_emergencyNameOne);
    const [emergencyPhoneOne, setEmergencyPhoneOne] = useState(MY_emergencyPhoneOne);
    const [emergencyRelationOne, setEmergencyRelationOne] = useState(MY_emergencyRelationOne);
    const [emergencyNameTwo, setEmergencyNameTwo] = useState(MY_emergencyNameTwo);
    const [emergencyPhoneTwo, setEmergencyPhoneTwo] = useState(MY_emergencyPhoneTwo);
    const [emergencyRelationTwo, setEmergencyRelationTwo] = useState(MY_emergencyRelationTwo);

    return MY_firstName;
}