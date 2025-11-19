import { useContext } from "react";

import { ClientContext } from "../shared/context/client-context";
import InputText from "../shared/components/UIElements/InputText";

import logo from "./../assets/images/logo_trans.png";

const LoginLeft = ({email, setEmail, password, setPassword, login}) => {
    const client = useContext(ClientContext);

    const clientName = client.clientName;
    
    return (
        <>
            <div className="loginLogoContainer">
                <img src={logo} alt="My Logo" />
            </div>

            <div className="client_name_display">
                <p className="client_name">{clientName}</p>
            </div>

            <div className="orange_bar_horizontal"></div>

            <div className="login_label">Please Log Into The Dashboard</div>

            <div className="login_form_group">
                <form action="">
                    <InputText group="login" type="email" placeholder="Email" inputGrab="input_field" labelGrab="input_label"
                    value={email}
                    setState={setEmail}/>

                    <InputText group="login" type="password" placeholder="Password" value={password} setState={setPassword}/>
                </form>
            </div>

            <div className="forgotPassword">
                <span className="forgotPasswordLink">
                    Forgot Password?
                </span>
            </div>

            <div className="loginFooter">
                <div onClick={login} className="fancy-submit fancy-button bg-gradient1 cursor_pointer" id="loginform"><span>Log In</span></div>
                {/* <button onClick={login} className="bidzbutton dark_grey">Login</button> */}
            </div>
        </>
    )
}

export default LoginLeft;