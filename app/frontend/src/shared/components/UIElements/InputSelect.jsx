import { useState, useEffect } from "react";

import "./InputSelect.css";

import { getIcon } from "../../util/icon";

const InputSelect = ({ name, required, placeholder, state, setState, options, inputColor }) => {
    const [cleanOptions, setCleanOptions] = useState([]);

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

    useEffect(() => {
        if (options) {
            let obj = [];

            const keys = Object.keys(options);

            for (var k = 0; k < keys.length; k++) {
                const key = keys[k];

                const option = options[key];

                const line = { value: key, label: option };

                obj.push(line);
            }

            setCleanOptions(obj);
        }
    }, [options]);

    return (
        <>
            <div className="inputContainer selectContainer select_box">
                <select className={`custom-select ${backgroundColor}`} onChange={handleChange}>
                    <option value="" onChange={handleChange}>
                        Choose {placeholder} {required ? "*" : ""}
                    </option>
                    {cleanOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default InputSelect;
