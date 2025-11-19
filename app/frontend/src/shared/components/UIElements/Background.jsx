
import "./Background.css";

const Background = () => {
    console.log(process.env.PUBLIC_URL);
    return (
        <>
            <div className="background_image"></div>
            <div className="backgroundWhite"></div>
        </>
    )
}

export default Background;