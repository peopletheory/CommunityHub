import { useState, useEffect } from "react";

import InputSelect from "../shared/components/UIElements/InputSelect";
import InputText from "../shared/components/UIElements/InputText";

const AddMemberItem = ({ field, invalid }) => {
    const [pinkField, setPinkField] = useState(false);

    const [requiredField, setRequiredField] = useState([]);

    var fieldInformation = field[0];
    var fieldState = field[1];
    var fieldSetState = field[2];

    var name = fieldInformation["name"];
    var slug = fieldInformation["slug"];
    var options = fieldInformation["options"];
    var required = fieldInformation["required"];
    var validation = fieldInformation["validation"];
    var type = fieldInformation["type"];

    const [inputColor, setInputColor] = useState("");

    useEffect(() => {
        if (invalid.includes(slug)) {
            setInputColor("pink");
        } else {
            setInputColor("white");
        }
    }, [invalid, slug]);

    var input;

    if (type === "text") {
        input = <InputText state={fieldState} setState={fieldSetState} color="inputWhite" placeholder={name} required={required} slug={slug} inputColor={inputColor} />;
    } else {
        input = <InputSelect name={name} state={fieldState} setState={fieldSetState} color="inputWhite" placeholder={name} required={required} options={options} inputColor={inputColor} />;
    }

    return <>{input}</>;
};

export default AddMemberItem;
