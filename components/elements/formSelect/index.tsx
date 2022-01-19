import { useSignatureState } from "../../context";

interface FormSelectProps {
  name: string;
  label: string;
  options: JSX.Element[];
  required?: true;
  helpText?: string;
}

const FormSelect = ({
  name,
  label,
  required,
  helpText,
  options,
  ...rest
}: FormSelectProps) => {
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

export default FormSelect;
