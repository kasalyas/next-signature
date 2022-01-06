import LOCATIONS from "../../../data/locations";
import { useSignatureState } from "../../context";
import FormCheckbox from "../../elements/formCheckbox";
import FormInput from "../../elements/formInput";
import FormSelect from "../../elements/formSelect";
import Copy from "./copy";
import Marketing from "./marketing";
import Region from "./region";
import Telephone from "./telephone";

const options = LOCATIONS.map((location, index) => (
  <option key={index} value={location.name}>
    {location.name}
  </option>
));

const Form = () => {
  const { state } = useSignatureState();

  return (
    <div>
      <h1>Signature generator</h1>
      <p>
        Fill in the form and review the generated signature in the preview as
        you type. You can then copy the generated signature for Gmail or the raw
        HTML.
      </p>
      <p>Fields marked with an * are required</p>
      <form>
        <FormInput name="name" label="Name" required={true} />
        <FormInput name="jobTitle" label="Job title" required={true} />
        <FormInput
          name="pronouns"
          label="Pronouns"
          helpText='e.g. "he / him / his", "she / her / hers", "they / them / theirs"'
        />
        <Region />
        <FormSelect name="office" label="Location" options={options} />
        {state.office && (
          <FormCheckbox
            name="includeOffice"
            id="includeOffice"
            label="Include office number"
          />
        )}
        <Telephone />
        <Marketing />
        <Copy />
      </form>
    </div>
  );
};

export default Form;
