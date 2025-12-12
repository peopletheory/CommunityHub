import { useState } from "react";

import InputText from "../shared/components/UIElements/InputText";
import FancyHeading from "../shared/components/UIElements/FancyHeading";

import "./MemberContent.css";

const MemberContent = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <div className="leftMemberContainer memberSection">
                <FancyHeading text="Search for Members" />

                <InputText color="dark_white" state={searchValue} setState={setSearchValue} placeholder={"Serach"} label="dark_white" required={false} />
            </div>
            <div className="rightMemberContainer memberSection">
                <FancyHeading text="Member Information" />
                <FancyHeading text="Member Actions" />
            </div>
        </>
    );
};

export default MemberContent;
