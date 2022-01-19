import { useSignatureState } from "../../context";
import { CheckboxTypes } from "../../types";
import radioStyles from "./formRadio.module.css";

interface FormRadioProps {
  name: string;
  label: string;
  id?: string;
  asButton?: boolean;
  variant?: any;
  value?: CheckboxTypes;
}

const FormRadio = ({
  name,
  label,
  id,
  asButton,
  variant,
  value,
  ...rest
}: FormRadioProps) => {
  const { state, dispatch } = useSignatureState();

  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        onChange={() =>
          dispatch({
            type: "UPDATE_DETAILS",
            field: name,
            value,
          })
        }
        className={asButton && radioStyles.inputState}
        checked={state[name] === value}
        {...rest}
      />
      <label htmlFor={id}>
        <span className={asButton && variant}>{label}</span>
      </label>
    </div>
  );
};

export default FormRadio;
