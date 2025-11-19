import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);

export const useUserContext = () => {

    const name = useContext(DashboardContext);

    if(name === undefined){
        throw new Error("useUserContext must be used with a dashboard context");
    }

    return name;
}