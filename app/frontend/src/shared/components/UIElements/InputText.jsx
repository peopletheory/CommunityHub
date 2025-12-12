import { useState, useEffect } from "react";

import "./InputText.css";

const InputText = ({ group, type, placeholder, inputGrab, labelGrab, state, setState, color, required, requiredField, slug, inputColor, label }) => {
    const [backgroundColor, setBackgroundColor] = useState("bg_input_valid");

    const handleChange = (event) => {
        setBackgroundColor("bg_input_valid");
        setState(event.target.value);
    };

    useEffect(() => {
        if (inputColor === "pink") {
            setBackgroundColor("bg_input_invalid");
        }
    }, [inputColor]);

    var placeholderInput;

    if (required) {
        placeholderInput = placeholder + " *";
    } else {
        placeholderInput = placeholder;
    }

    const unPink = () => {};

    return (
        <>
            <div className="inputContainer">
                <input required="true" type="text" className={`input_field ${color} ${backgroundColor}`} placeholder={`${placeholderInput}`} value={state} onChange={handleChange} onClick={unPink} />

                <label alt={placeholder} className={`input_label ${color} ${backgroundColor} ${label}`}>
                    {placeholder} {required && <span className="required">*</span>}
                </label>
            </div>
        </>
    );
};

export default InputText;
