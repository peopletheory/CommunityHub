import { getIcon } from "../shared/util/icon";

const TopButtons = ({ viewAddMemberModal }) => {
    return (
        <>
            <div className="btn btn-green buttonGap">{getIcon("LuUsers")} View Database</div>
            <div onClick={viewAddMemberModal} className="btn btn-darkblue buttonGap">
                {getIcon("FaPlus")} Add Member
            </div>
            <div className="btn btn-yellow buttonGap">{getIcon("FaUserAltSlash")} Add Guest</div>
        </>
    );
};

export default TopButtons;
