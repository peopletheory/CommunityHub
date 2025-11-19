
import communityLogo from "./../assets/images/communityLogo.png";
import Socials from "./Socials";

const LoginRight = () => {
    return (
        <>
            <div className="community_logo">
                <img src={communityLogo} alt="Community Hub"/>
            </div>
            <div className="findOnSocials">
                <span className="socialLabel">Find Us On Our Socials</span>

                <Socials />
            </div>

            <div className="needHelp">
                <span className="needHelpLabel">Need Help?</span>
                <span className="needHelpAddress">support@mycommunityhub.com</span>
            </div>

            <div className="requestDemo">
                <span className="requestDemoLabel">Do you want to request a demo?</span>
                <div className="bidzbutton devart requestDemoButton">Request Demo</div>
            </div>
        </>
    )
}

export default LoginRight;