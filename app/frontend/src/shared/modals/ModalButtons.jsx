import "./ModalButtons.css";

const ModalButtons = ({children}) => {
    return (
        <>
            <div className="modalButtonContainer">
                {children}
            </div>
        </>
    )
}

export default ModalButtons;