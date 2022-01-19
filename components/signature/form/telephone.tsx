import { useSignatureState } from "../../context";
import TelephoneAddNumberButton from "../telephone/telephoneAddNumber";
import TelephoneFields from "../telephone/telephoneField";

const TelephoneFieldsArray = () => {
  const {
    state: { telephoneNumbers },
  } = useSignatureState();
  return (
    <>
      {telephoneNumbers?.map((field, index) => (
        <TelephoneFields key={index} field={field} index={index} />
      ))}
    </>
  );
};

const Telephone: React.FC = () => (
  <fieldset>
    <legend>Telephone numbers</legend>
    <TelephoneAddNumberButton />
    <TelephoneFieldsArray />
  </fieldset>
);

export default Telephone;
