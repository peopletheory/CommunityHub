import { useState } from "react";

import ModuleName from "../Home/ModuleName";
import TopButtons from "./TopButtons";
import MemberContent from "./MemberContent";

import "./Members.css";

import { getIcon } from "../shared/util/icon";
import AddMemberModal from "./AddMemberModal";

const Members = () => {
    const [addMemberModalVisible, setAddMemberModalVisible] = useState(false);

    const getAddMemberModal = () => {
        setAddMemberModalVisible(true);
    };

    const closeAddMemberModal = () => {
        setAddMemberModalVisible(false);
    };
    return (
        <>
            {addMemberModalVisible && <AddMemberModal closeAddMemberModal={closeAddMemberModal} />}
            <div className="memberHeading">
                <ModuleName name="Members" icon="FaUsers" />
                <div className="memberButtons">
                    <TopButtons closeAddMemberModal={closeAddMemberModal} viewAddMemberModal={getAddMemberModal} />
                </div>
            </div>
            <span className="blackbar"></span>

            <div className="memberContainer">
                <MemberContent />
            </div>
        </>
    );
};

export default Members;
