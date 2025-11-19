import "./EventTable.css";

import EventRow from "./EventRow";

const EventTable = () => {
    return (
        <>
            <table className="homeEventTable">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Time</th><th>Cost</th>
                        <th># Enrolled</th>
                        <th>Status</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <EventRow status="current"/>
                    <EventRow status="past"/>
                    <EventRow status="future"/>
                </tbody>
            </table>
        </>
    )
}

export default EventTable;