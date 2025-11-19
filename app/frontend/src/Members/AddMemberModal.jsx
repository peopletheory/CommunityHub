import { useState } from "react";

import InputText from "../shared/components/UIElements/InputText";
import InputSelect from "../shared/components/UIElements/InputSelect";
import Modal from "../shared/modals/Modal";

import "./MemberContent.css";
import { getIcon } from "../shared/util/icon";

const AddMemberModal = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

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
                            <InputText state={firstName} setState={setFirstName} color="input_dark" placeholder={"First Name"}
                            required={true}/>
                            
                            <InputText state={lastName} setState={setLastName} color="input_dark" placeholder={"Last Name"}
                            required={true} />

                            <InputSelect />
                        </div>

                </div>
            </Modal>
        </>
    )
}

export default AddMemberModal;