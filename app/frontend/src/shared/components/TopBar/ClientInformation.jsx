import "./ClientInformation.css";

import clientLogo from "./../../../assets/images/logo.png";

const ClientInformation = () => {
    return (
        <>
            <div className="clientInformation">
                <div className="centerLogo">
                    <img src={clientLogo} alt="Center for Active Adults" />
                </div>
                <div className="displayName">Center for Active Adults</div>
            </div>
        </>
    )
}

export default ClientInformation;