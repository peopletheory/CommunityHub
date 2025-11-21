import { useEffect, useContext, useState } from "react";
import { ClientContext } from "../context/client-context";

import NavigationItem from "./NavigationItem";

import { useHttpClient } from "../hooks/http-hook";
import { getIcon } from "../util/icon";

import { NavLink, useLocation } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {

    const activeLocations = {
        "/": "",
        "/members": "members"
    }

    let location = useLocation().pathname;
    let active = activeLocations[location];

    const { isLoading, error, sendRequest, clearError} = useHttpClient();
    const { clientID } = useContext(ClientContext);
    const [navigationLinks, setNavigationLinks] = useState([]);

    useEffect(() => {
        const fetchNavigationSetting = async () => {
            try{
                const responseData = await sendRequest(`http://localhost:3051/api/settings/getNavigation/${clientID}`);
                
                const keys = Object.keys(responseData);

                const nav = [];

                for(var k = 0; k<keys.length; k++){
                    var key = keys[k];
                    var data = responseData[key];

                    var inclusion = data['included'];

                    if(inclusion){
                        var name = data['name'];
                        var icon = data['icon'];
                        var id = data["_id"];
                        var link = data['link'];

                        const line = {
                            name: name,
                            icon: icon,
                            id: id,
                            link: link
                        }

                        nav.push(line);
                    }
                }

                console.log(nav);
                setNavigationLinks(nav);
            }
            catch(err) {
                console.log(err);
            }
        }

        fetchNavigationSetting();
    }, [clientID, sendRequest]);

    console.log(navigationLinks);

    return (
        <>
            <div className="navigationContainer shadow2">
                <div className="navigationList navigationBar">
                    {navigationLinks.map((i) => (
                        <NavigationItem active={active} item={i}/>
                    ))}

                </div>
            </div>
        </>
    )
}

export default NavigationBar;