import { useState, useEffect, useContext } from "react";
import { ClientContext } from "../shared/context/client-context";

import { useHttpClient } from "../shared/hooks/http-hook";

import InputText from "../shared/components/UIElements/InputText";
import InputSelect from "../shared/components/UIElements/InputSelect";
import Modal from "../shared/modals/Modal";
import ModalButtons from "./../shared/modals/ModalButtons";

import "./MemberContent.css";
import { getIcon } from "../shared/util/icon";
import { useMemberField } from "../shared/hooks/field-hook";
import { useAuth } from "../shared/hooks/auth-hook";

import AddMemberItem from "./AddMemberItem";

const AddMemberModal = ({ closeAddMemberModal }) => {
    const { token, login, logout, userId } = useAuth();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const { clientID } = useContext(ClientContext);

    const [memberFields, setMemberFields] = useState({});
    const [fieldInformation, setFieldInformation] = useState([]);
    const [invalid, setInvalid] = useState([]);

    useEffect(() => {
        const fetchMemberFields = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3051/api/settings/getMemberFields/${clientID}`);

                setMemberFields(responseData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMemberFields();
    }, [clientID, sendRequest]);

    const [fields, states, setStates] = useMemberField(memberFields);

    var allFieldInformation = [];

    var keys = Object.keys(fields);

    for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        var data = fields[key];
        var slug = data["slug"];

        var the_states = states[slug];
        var the_setStates = setStates[slug];

        var item = [data, the_states, the_setStates];

        allFieldInformation.push(item);
    }

    const onSubmission = async () => {
        let invalid_fields = [];

        for (var a = 0; a < allFieldInformation.length; a++) {
            var field = allFieldInformation[a][0];

            var required = field["required"];
            var slug = field["slug"];

            var mystate = states[slug];

            if (required) {
                if (mystate === "") {
                    invalid_fields.push(slug);
                }
            }
        }

        if (invalid_fields.length > 0) {
            setInvalid(invalid_fields);
            return;
        }

        alert("ready to go");

        try {
            const response = await sendRequest(
                `http://localhost:3051/api/members/createMember/${clientID}`,
                "POST",
                JSON.stringify({
                    states: states,
                    fields: fields,
                }),
                {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            );
            closeAddMemberModal();
            console.log(response);
        } catch (err) {
            console.log("hordan");
            console.log(err);
        }
    };

    return (
        <>
            <Modal width="smallModal" height="mediumHeight" type="addMemberModal">
                <div className="modalContent ">
                    <span className="modal_heading">
                        <span className="modal_icon">{getIcon("BsFillPersonPlusFill")}</span>
                        <h1>Add Member</h1>
                    </span>

                    <div className="bluebar"></div>

                    <p className="requiredDisclaimer">
                        <span className="required">*</span> indicates required field
                    </p>

                    <div className="modalFormContainer">
                        {allFieldInformation.map((field) => (
                            <AddMemberItem key={field["slug"]} field={field} invalid={invalid} />
                        ))}
                    </div>

                    <ModalButtons>
                        <div className="btn btn-yellow" onClick={closeAddMemberModal}>
                            Cancel
                        </div>
                        <div className="btn btn-green" onClick={onSubmission}>
                            Create Member
                        </div>
                    </ModalButtons>
                </div>
            </Modal>
        </>
    );
};

export default AddMemberModal;
