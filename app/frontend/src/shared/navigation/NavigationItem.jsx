import { NavLink} from "react-router-dom";

import { getIcon } from "../util/icon";

const NavigationItem = ({item}) => {
    return (
        <>

            <NavLink to={`/${item.link}`} exact>
                <li className="navigation_item " key={item.id}>
                    <span className="navigationIcon">{getIcon(item.icon)}</span>
                    <span className="navigationLabel">{item.name}</span>
                </li>
            </NavLink>
        </>
    )
}

export default NavigationItem;