import "./EventTable.css";

const EventRow = ({status}) => {
    const statusUp = String(status).charAt(0).toUpperCase() + String(status).slice(1);

    const statusClass = "event" + statusUp;

    return (
        <>
            <tr>
                <td>Yoga</td>
                <td>10:30:am - 11:30am</td>
                <td>$5</td>
                <td>12</td>
                <td>
                    <span className={`eventStatus ${statusClass}`}>{statusUp}</span>
                </td>
                <td>
                    <div className="actionContainer">
                        <div className="btn btn-yellow">Details</div>
                        <div className="btn btn-darkblue">Roster</div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default EventRow;