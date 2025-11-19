
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

import "./socials.css";

const Socials = () => {
    return (
        <>
            <div className="social_container">
                <ul>
                    <li><FaFacebookF className="social facebook_social" /></li>
                    <li><FaLinkedinIn className="social linkedin_social"/></li>
                    <li><FaPinterest className="social pinterest_social" /></li>
                    <li><FaInstagram className="social instagram_social" /></li>
                    <li><FaTiktok className="social tiktok_social"/></li>
                </ul>
            </div>
        </>
    )
}

export default Socials;