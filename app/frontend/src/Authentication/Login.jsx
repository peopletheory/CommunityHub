
import React, { useContext, useState } from "react";
import {validateEmail} from "./../shared/util/validation";

import "./Login.css";

import { AuthContext } from "../shared/context/auth-context";
import { ClientContext } from "./../shared/context/client-context";
import { useHttpClient } from "../shared/hooks/http-hook";

import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { isLoading, error, sendRequest, clearError} = useHttpClient();
    
    const client = useContext(ClientContext);
    const auth = useContext(AuthContext);

    const clientName = client.clientName;
    const clientId = client.clientID;

    const submitLogin = async () => {
        if(email === "" || !email){
            alert("Please provide email");
            return;
        }

        if(password === "" || !password){
            alert("Please provide password");
            return;
        }

        if(!validateEmail(email)){
            alert("Please provide a valid email");
            return;
        }

        try {
            const responseData = await sendRequest("http://localhost:3051/api/user/login", "POST",
                JSON.stringify({
                    email: email,
                    password: password,
                    clientId: clientId
                }),
                {
                    "Content-Type": "application/json"
                }
            );

            auth.login(responseData.userId, responseData.token);
        } catch (error) {
            // do nothing
            console.log(error);
        }
    }

    return (
        <>
            <div className="loginContainer shadow1">
                <div className="left loginArea">
                    <LoginLeft email={email} setEmail={setEmail} password={password} setPassword={setPassword}
                    login={submitLogin}/>
                </div>
                <div className="right hubInformation">
                    <LoginRight />
                </div>
            </div>
        </>
    )
}

export default Login;