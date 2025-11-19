import "./BottomHomeContent.css";

import EventTable from "./EventTable";

const BottomHomeContent = () => {
    return (
        <>
            <div className="bottomHomeContent">
                <div className="leftTable tableItem">
                    <h3 className="eventHeading">Upcoming Events</h3>

                    <EventTable />
                </div>
                <div className="rightTable tableItem">
                    <h3 className="eventHeading">Other T.B.D.</h3> 
                </div>
            </div>
        </>
    )
}

export default BottomHomeContent;