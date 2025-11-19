import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group';

import BackDrop from "./BackDrop";

import "./Modal.css";

const ModalOverlay = ({content, width, height}) => {
    const modalHook = (
        <div className={`modal modalContent ${width} ${height}`}>
            {content}
        </div>
    );

    return ReactDOM.createPortal(modalHook, document.getElementById('modal-hook'));
}

const Modal = ({children, width, height}) => {
    return (
        <> 
            <BackDrop />
                <ModalOverlay content={children} width={width} height={height}/>
        </>
    )
}

export default Modal;