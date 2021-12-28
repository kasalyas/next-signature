import { string } from "prop-types";
import { useSignatureState } from "../../context";
import styles from "./formInput.module.css";

const FormInput = ({ name, label, required, helpText, ...rest }) => {
  const { dispatch } = useSignatureState();
  const labelText = required ? (
    <span className={styles.required}>{label}</span>
  ) : (
    label
  );
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
        type="text"
        name={name}
        id={name}
        aria-describedby={helpText && `name-${name}`}
        onChange={(evt) => {
          dispatch({
            type: "UPDATE_DETAILS",
            field: name,
            value: evt.target.value,
          });
        }}
        {...rest}
      />
      {helpText && (
        <div className={styles.help} id={`name-${name}`}>
          {helpText}
        </div>
      )}
    </div>
  );
};

FormInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
};

export default FormInput;
