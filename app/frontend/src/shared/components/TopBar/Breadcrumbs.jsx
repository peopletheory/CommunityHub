import "./Breadcrumbs.css";

import { FiSidebar } from "react-icons/fi";

const BreadCrumbs = () => {
    return(
        <>
            <div className="breadcrumbContainer">
                <FiSidebar />
                <div className="breadcrumbs">
                    <span className="breadCrumbStart">MyCommunityHub</span>
                    <span className="breadCrumbSeperator">/</span>
                    <span className="breadCrumbContent">Dashboard</span>
                </div>
            </div>
        </>
    )
}

export default BreadCrumbs;