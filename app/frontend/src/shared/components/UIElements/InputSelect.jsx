import "./InputSelect.css";

import { getIcon } from "../../util/icon";

const InputSelect = () => {

    return (
        <>
            <div className="inputContainer selectContainer select_box">
                <select className="custom-select ">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                
            </div>
        </>
    )
}

export default InputSelect;