import { useState } from "react";

import InputText from "../shared/components/UIElements/InputText";

import "./MemberContent.css";

const MemberContent = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <div className="leftMemberContainer memberSection">
                <h3 className="sectionHeading">Search for Members</h3>

                <div className="member_bar"></div>

                <InputText color="darkInput" state={searchValue} setState={setSearchValue} placeholder={"Serach"} />
            </div>
            <div className="rightMemberContainer memberSection">
                <h3 className="sectionHeading">Member Actions</h3>

                <div className="member_bar"></div>
            </div>
        </>
    )
}

export default MemberContent;