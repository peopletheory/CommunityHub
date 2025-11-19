import { useState } from "react";

import "./HomeOne.css";

import InputText from "../shared/components/UIElements/InputText";

import communityLogo from "./../assets/images/communityLogo.png";
import logo from "./../assets/images/logo.png";

import { FaSun } from "react-icons/fa";
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



const HomeOne = () => {
    const [search, setSearch] = useState("");

    const links = [
        { id: 1, name: "Home", icon: <FaHome />, activeClass: "activeLink"},
        { id: 2, name: "Members", icon: <FaUsers /> },
        { id: 3, name: "Events", icon: <MdEvent /> },
        { id: 4, name: "Payments", icon: <TbReportMoney />},
        { id: 5, name: "Statistics / Reporting", icon: <TbReport />},
        { id: 6, name: "Communication", icon: <FaBullhorn />},
        { id: 7, name: "Facility and Faculty", icon: <FaBuildingColumns />},
        { id: 8, name: "Settings", icon: <IoSettingsOutline />}
    ];

    return (
        <div className="template">
            <div className="mainSide">
                <div className="topBar shadow2 ">
                    <div className="topInformation">

                        <div className="center_name">
                            <span className="centerLogo">
                                <img src={logo} alt="Center for Active Adults" />
                            </span>
                            <span className="displayName">Center for Active Adults</span>
                        </div>
                        <div className="left_topBar">
                            <span className="left_icon">
                                <FiSidebar />
                            </span>
                            <span className="breadcrumbs">
                                <span className="startBread">MyCommunityHub</span>
                                <span className="breadSeperator">/</span>
                                <span className="currentBread">Dashboard</span>
                            </span>
                        </div>
                    </div>
                    <div className="right_topBar">
                        <div className="searchBar">
                            <input type="text" name="search" id="search" className="searchBarInput" placeholder="Search for members, events, ..." />
                            <span className="searchIcon"><FaSearch /></span>
                        </div>

                        <div className="lightButton">
                            <span className="lightText"><FaSun /> Light Mode</span>
                        </div>

                        <div className="avatar">
                            <IoPersonCircleOutline />
                        </div>
                    </div>
                </div>
                <div className="bottomArea">
                    <div className="navigationBar shadow2">
                        <ul>
                            {links.map((link) => (
                                <li key={link.id} className={`navigation_item ${link.activeClass ? link.activeClass : ""}`}>
                                    <span className="navigationIcon">{link.icon}</span>
                                    <span className="navigationLabel">{link.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="workspace">
                        <div className="currentModule">
                            <div className="currentModuleIcon"><IoHome /></div>
                            <div className="currentModuleDescription">
                                <div className="currentModuleName">Dashboard</div>
                                <p className="currentModuleTagline">Your community center at a glance</p>
                            </div>
                        </div>

                        <div className="black_bar"></div>

                        <div className="quickTiles">
                            <div className="tileItem">
                                <div className="leftTile">
                                    <span className="tileName">Members Today</span>
                                    
                                    <div className="tileUpdate">
                                        <span className="tileNumber">123</span>
                                        <span className="tileStatistic">+32 from Yesterday</span></div>
                                </div>
                                <span className="rightTile">
                                    <FaUsers />
                                </span>
                            </div>
                            <div className="tileItem">
                                <div className="leftTile">
                                    <span className="tileName">Daily Events</span>
                                    
                                    <div className="tileUpdate">
                                        <span className="tileNumber">6</span>
                                        <span className="tileStatistic">4 Remaining Today</span></div>
                                </div>
                                <span className="rightTile">
                                    <MdEvent />
                                </span>
                            </div>
                            <div className="tileItem">
                                <div className="leftTile">
                                    <span className="tileName">Payments Today</span>
                                    
                                    <div className="paymentTileContainer tileUpdate">
                                        <span className="paymentTile cashTile">Cash - $12</span>
                                        <span className="bar">|</span>
                                        <span className="paymentTile checkTile">Check - $100</span>
                                        <span className="bar">|</span>
                                        <span className="paymentTile walletTile">Wallet - $40</span>
                                    </div>
                                </div>
                                <span className="rightTile">
                                    <TbReportMoney />
                                </span>
                            </div>
                        </div>

                        <div className="black_bar"></div>

                        <div className="dashboardContent">
                            <div className="dashboardItem dashboardEvents">
                                <h3 className="eventHeading">Upcoming Events</h3>

                                <div className="eventContainer">
                                    <table className="eventTable">
                                        <thead>
                                            <tr>
                                                <th>Event Name</th>
                                                <th>Time</th>
                                                <th>Cost</th>
                                                <th># Enrolled</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Yoga</td>
                                                <td>10:30:am - 11:30am</td>
                                                <td>$5</td>
                                                <td>12</td>
                                                <td><span className="eventStatus eventCurrent">Current</span></td>
                                                <td>
                                                    <div className="actionContainer">
                                                        <div className="btn btn-yellow">Details</div>
                                                        <div className="btn btn-darkblue">Roster</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Line Dancing</td>
                                                <td>10:30:am - 11:30am</td>
                                                <td>$5</td>
                                                <td>12</td>
                                                <td><span className="eventStatus eventPast">Past</span></td>
                                                <td>
                                                    <div className="actionContainer">
                                                        <div className="btn btn-yellow">Details</div>
                                                        <div className="btn btn-darkblue">Roster</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Line Dancing</td>
                                                <td>10:30:am - 11:30am</td>
                                                <td>$5</td>
                                                <td>12</td>
                                                <td><span className="eventStatus eventFuture">Future</span></td>
                                                <td>
                                                    <div className="actionContainer">
                                                        <div className="btn btn-yellow">Details</div>
                                                        <div className="btn btn-darkblue">Roster</div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="dashboardItem dashboardOther">
                                <h3 className="eventHeadign">Other T.B.D</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOne;