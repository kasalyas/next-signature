import { useSignatureState } from "../../context";

interface FormCheckboxProps {
  name: string;
  label: string;
  id: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  id,
  ...rest
}) => {
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

export default FormCheckbox;
