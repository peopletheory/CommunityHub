import ModuleName from "../Home/ModuleName";
import TopButtons from "./TopButtons";
import MemberContent from "./MemberContent";

import "./Members.css";

import { getIcon } from "../shared/util/icon";
import AddMemberModal from "./AddMemberModal";

const Members = () => {
    return (
        <>
            <AddMemberModal />
            <div className="memberHeading">
                <ModuleName name="Members" icon="FaUsers"/>
                <div className="memberButtons">
                    <TopButtons />
                </div>            
            </div>
            <span className="blackbar"></span>

            <div className="memberContainer">
                <MemberContent />
            </div>
        </>
    )
}

export default Members;