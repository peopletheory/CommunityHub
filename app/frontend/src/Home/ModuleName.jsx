import "./ModuleName.css";

import { getIcon } from "../shared/util/icon";

const ModuleName = ({ name, icon }) => {
    return (
        <>
            <div className="moduleNameContainer">
                <div className="icon">
                    {getIcon(icon)}
                </div>
                <div className="moduleInformation">
                    <span className="moduleTitle">{name}</span>
                    <span className="moduleDescription"></span>
                </div>
            </div>
        </>
    )
}

export default ModuleName;