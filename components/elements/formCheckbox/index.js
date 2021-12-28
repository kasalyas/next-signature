import { string } from "prop-types";
import { useSignatureState } from "../../context";

const FormCheckbox = ({ name, label, id, ...rest }) => {
  const { state, dispatch } = useSignatureState();
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={(evt) => {
          dispatch({
            type: "UPDATE_DETAILS",
            field: name,
            value: evt.target.checked,
          });
        }}
        checked={state[name]}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

FormCheckbox.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
};

export default FormCheckbox;
