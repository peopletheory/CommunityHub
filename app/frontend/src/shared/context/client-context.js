import { createContext } from "react";

export const ClientContext = createContext({
    subdomain: null,
    clientID: null,
    clientName: null
});