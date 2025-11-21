import { NavLink} from "react-router-dom";

import { getIcon } from "../util/icon";

const NavigationItem = ({item, active}) => {
    const link = item.link;

    let activeClass = "";

    if(active == link){
        activeClass = " activeLink";
    }
    
    return (
        <>

            <NavLink to={`/${item.link}`} exact>
                <li className={`navigation_item ${activeClass}`} key={item.id}>
                    <span className="navigationIcon">{getIcon(item.icon)}</span>
                    <span className="navigationLabel">{item.name}</span>
                </li>
            </NavLink>
        </>
    )
}

export default NavigationItem;