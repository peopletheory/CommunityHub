import "./TopBar.css";

import ClientInformation from "./ClientInformation";
import BreadCrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";

import { getIcon } from "../../util/icon";

const TopBar = () => {
    return (
        <>
            <div className="topBar shadow2">
                <ClientInformation />
                <div className="remainingBar">
                    <div className="barLeft">
                        <BreadCrumbs />
                    </div>
                    <div className="barRight">
                        <SearchBar />
                        <div className="lightModeButton floatingCalendarButton btn btn-green">Calendar</div>
                        <div className="lightModeButton btn btn-light">{getIcon("FaSun")} Light Mode</div>
                        <Avatar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;
