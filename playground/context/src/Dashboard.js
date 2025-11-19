import { useContext } from "react";
import { DashboardContext, useUserContext } from "./context";

const Dashboard = () => {
    const name = useUserContext();
    return (
        <>
            <h1>Hello {name}</h1>
        </>
    )
}

export default Dashboard;