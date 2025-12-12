import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import BackDrop from "./BackDrop";

import "./Modal.css";

const ModalOverlay = ({ content, width, height, type }) => {
    const modalHook = <div className={`modal modalContent ${width} ${height} ${type}`}>{content}</div>;

    return ReactDOM.createPortal(modalHook, document.getElementById("modal-hook"));
};

const Modal = ({ children, width, height, type }) => {
    return (
        <>
            <BackDrop />
            <ModalOverlay content={children} width={width} height={height} type={type} />
        </>
    );
};

export default Modal;
