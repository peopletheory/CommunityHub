
import { FaSun, FaUser } from "react-icons/fa";
import { FiSidebar } from "react-icons/fi";

import { FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { TbReport } from "react-icons/tb";
import { FaBullhorn } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import { IoHome } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { FaUserAltSlash } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";



export const getIcon = (iconName) => {

    const icons = {
        "IoHome": <IoHome />,
        "FaHome": <FaHome />,
        "FaUsers": <FaUsers />,
        "MdEvent": <MdEvent />,
        "TbReportMoney": <TbReportMoney/>,
        "TbReport": <TbReport />,
        "FaBullhorn": <FaBullhorn />,
        "FaBuildingColumns": <FaBuildingColumns />,
        "IoSettingsOutline": <IoSettingsOutline />,
        "FaSearch": <FaSearch />,
        "FaPlus": <FaPlus />,
        "LuUsers": <LuUsers />,
        "FaUserAltSlash": <FaUserAltSlash />,
        "BsFillPersonPlusFill": <BsFillPersonPlusFill />,
        "FaCaretDown": <FaCaretDown />
    };

    const icon = icons[iconName];

    return icon;
}