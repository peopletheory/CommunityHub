import "./Tile.css";
import { getIcon } from "../shared/util/icon";

const Tile = ({ type }) => {
    const menu = {
        "members": {
            "name": "Member",
            "number": "123",
            "stat": "+23 from Yesterday",
            "icon": "FaUsers"
        },
        "events": {
            "name": "Events",
            "number": "4",
            "stat": "+2 from Yesterday",
            "icon": "MdEvent"
        },
        "payment": {
            "name": "Payment",
            "number": "321",
            "stat": "Cash: 42 | Check: 12 | Wallet: 34",
            "icon": "TbReportMoney"
        }
    }

    const data = menu[type];
    const name = data['name'];
    const number = data['number'];
    const stat = data['stat'];
    const icon = data['icon'];
    return (
        <>
            <div className="myTile">
                <div className="leftTile">
                    <span className="tile_name">{name}</span>
                    <span className="tile_number">{number}</span>
                    <span className="tile_statistic">{stat}</span>
                </div>
                <div className="rightTile">
                    <span className="tileIcon">{getIcon(icon)}</span>
                </div>
            </div>
        </>
    )
}

export default Tile;