import { string } from "prop-types";
import { useSignatureState } from "../../context";
import radioStyles from "./FormRadio.module.css";

const FormRadio = ({ name, label, id, asButton, variant, ...rest }) => {
  const { state, dispatch } = useSignatureState();

  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        onChange={(evt) => {
          dispatch({
            type: "UPDATE_DETAILS",
            field: name,
            value: evt.target.value,
          });
        }}
        className={asButton && radioStyles.inputState}
        checked={state[name] === rest.value}
        {...rest}
      />
      <label htmlFor={id}>
        <span className={asButton && variant}>{label}</span>
      </label>
    </div>
  );
};

FormRadio.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
};

export default FormRadio;
