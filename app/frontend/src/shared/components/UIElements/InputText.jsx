import "./InputText.css";

const InputText = ({ group , type, placeholder, inputGrab, labelGrab, state, setState, color, required}) => {
    
  const handleChange = (event) => {
    setState(event.target.value);
  };

  var placeholderInput;

  if(required){
    placeholderInput = placeholder + " *";
  }
  else{
    placeholderInput = placeholder;
  }
    return (
        <>
            <div className="inputContainer">
                <input required='true' type='text' className={`input_field ${color}`} placeholder={`${placeholderInput}`} value={state} onChange={handleChange}/>

                <label alt={placeholder} className={`input_label ${color}`}>{placeholder} <span className="required">*</span></label>
            </div>
        </>
    )
}

export default InputText;