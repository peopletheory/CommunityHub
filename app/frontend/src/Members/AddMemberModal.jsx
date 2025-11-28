import { useState, useEffect, useContext } from "react";
import { ClientContext } from "../shared/context/client-context";

import { useHttpClient } from "../shared/hooks/http-hook";

import InputText from "../shared/components/UIElements/InputText";
import InputSelect from "../shared/components/UIElements/InputSelect";
import Modal from "../shared/modals/Modal";

import "./MemberContent.css";
import { getIcon } from "../shared/util/icon";
import { useMemberField } from "../shared/hooks/field-hook";

const AddMemberModal = () => {

    const { isLoading, error, sendRequest, clearError} = useHttpClient();
    const { clientID } = useContext(ClientContext);
    const [memberFields, setMemberFields] = useState({});

    useEffect(() => {
        const fetchMemberFields = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3051/api/settings/getMemberFields/${clientID}`);

                setMemberFields(responseData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMemberFields();
        
    }, [clientID, sendRequest]);

    const fields = useMemberField(memberFields);

    // console.log('jordan', fields);

    return (
        <>
            <Modal width="smallModal" height="mediumHeight">
                <div className="modalContent">
                    <span className="modal_heading">
                        <span className="modal_icon">{getIcon("BsFillPersonPlusFill")}</span>
                        <h1>Add Member</h1>
                    </span>

                    <div className="bluebar"></div>

                    <p className="requiredDisclaimer"><span className="required">*</span> indicates required field</p>

                        <div className="modalFormContainer">
                            <InputText state={'nothing'} setState={'nothing'} color="input_dark" placeholder={"First Name"}
                            required={true}/>
                            
                            <InputText state={'nothing'} setState={'nothing'} color="input_dark" placeholder={"Last Name"}
                            required={true} />

                            <InputSelect />
                        </div>

                </div>
            </Modal>
        </>
    )
}

export default AddMemberModal;