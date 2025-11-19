import ReactDOM from "react-dom";

import "./BackDrop.css";

const BackDrop = ({ onClick }) => {
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={onClick}></div>,
        document.getElementById('backdrop-hook')
    );
}

export default BackDrop;