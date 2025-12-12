import "./FancyHeading.css";

const FancyHeading = ({ text }) => {
    return (
        <h3 className="sectionHeading">
            <span>{text}</span>
        </h3>
    );
};

export default FancyHeading;
