import { arrayOf, element, string } from "prop-types";
import { useSignatureState } from "../../context";

const FormSelect = ({ name, label, required, helpText, options, ...rest }) => {
  const { dispatch } = useSignatureState();
  const labelText = required ? `${label} *` : label;
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <select
        name={name}
        id={name}
        onChange={(evt) => {
          dispatch({
            type: "UPDATE_DETAILS",
            field: name,
            value: evt.target.value,
          });
        }}
        {...rest}
      >
        <option value="">Please select a location</option>
        {options}
      </select>
      {helpText && <div>{helpText}</div>}
    </div>
  );
};

FormSelect.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  options: arrayOf(element).isRequired,
};

export default FormSelect;
