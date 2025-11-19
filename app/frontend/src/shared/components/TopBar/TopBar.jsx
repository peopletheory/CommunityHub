import "./TopBar.css";

import ClientInformation from "./ClientInformation";
import BreadCrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";

import { FaSun } from "react-icons/fa";
import Avatar from "./Avatar";

const TopBar = () => {

    return(
        <>
            <div className="topBar shadow2">
                <ClientInformation />
                <div className="remainingBar">
                    <div className="barLeft">
                        <BreadCrumbs />
                    </div>
                    <div className="barRight">
                        <SearchBar />
                        <div className="lightModeButton btn btn-light"><FaSun /> Light Mode</div>
                        <Avatar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar;