import Tippy from "@tippyjs/react";
import copy from "copy-to-clipboard";
import { forwardRef, useState } from "react";
import "tippy.js/dist/tippy.css";
import LOCATIONS from "../../../data/locations";
import { useSignatureState } from "../../context";
import Button from "../../elements/button";
import buttonStyles from "../../elements/button/button.module.css";
import FormCheckbox from "../../elements/formCheckbox";
import FormInput from "../../elements/formInput";
import FormRadio from "../../elements/formRadio";
import radioStyles from "../../elements/formRadio/formRadio.module.css";
import FormSelect from "../../elements/formSelect";
import TelephoneAddNumberButton from "../telephone/telephoneAddNumber";
import TelephoneFields from "../telephone/telephoneField";

const InlineRow = ({ children }) => (
  <div style={{ display: "flex", gap: "20px", padding: "20px 0" }}>
    {children}
  </div>
);

const options = LOCATIONS.map((location, index) => (
  <option key={index} value={location.name}>
    {location.name}
  </option>
));

const TelephoneFieldsArray = () => {
  const {
    state: { telephoneNumbers },
  } = useSignatureState();
  return (
    <>
      {telephoneNumbers?.map((field, index) => {
        return <TelephoneFields key={index} field={field} index={index} />;
      })}
    </>
  );
};

const CopyButton = forwardRef(
  ({ label, style, format, state, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);
    return (
      <Tippy content="Copied" visible={visible}>
        <Button
          type="button"
          className={style}
          ref={ref}
          onClick={() => {
            copy(state.signatureRef.current.outerHTML, {
              format,
            });
            setVisible(true);
            setTimeout(() => {
              setVisible(false);
            }, 1500);
          }}
          {...rest}
        >
          {label}
        </Button>
      </Tippy>
    );
  }
);

const CopyButtons = ({ state, name, title }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "50px",
        display: "flex",
        gap: "30px",
      }}
    >
      <CopyButton
        label="Copy signature for Gmail"
        style={buttonStyles.outline}
        format="text/html"
        disabled={name && title ? false : true}
        state={state}
      />
      <CopyButton
        label="Copy HTML"
        style={buttonStyles.dark}
        format="text/plain"
        disabled={name && title ? false : true}
        state={state}
      />
    </div>
  );
};

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
        <fieldset>
          <legend>Region</legend>
          <InlineRow>
            <FormRadio
              name="region"
              label="Europe"
              id="regionEU"
              value="EU"
              asButton={true}
              variant={radioStyles.outlineDark}
            />
            <FormRadio
              name="region"
              label="Americas"
              id="regionUS"
              value="US"
              asButton={true}
              variant={radioStyles.outlineDark}
            />
          </InlineRow>
        </fieldset>
        <FormSelect name="office" label="Location" options={options} />
        <fieldset>
          <legend>Telephone numbers</legend>
          <TelephoneAddNumberButton />
          <TelephoneFieldsArray />
        </fieldset>
        {state.office && (
          <FormCheckbox
            name="includeOffice"
            id="includeOffice"
            label="Include office number"
          />
        )}
        <fieldset>
          <legend>Marketing link</legend>
          <InlineRow>
            <FormRadio
              name="marketingLink"
              id="none"
              value="none"
              label="None"
              asButton={true}
              variant={radioStyles.outlineDark}
            />
            <FormRadio
              name="marketingLink"
              id="awards"
              value="awards"
              label="Awards"
              asButton={true}
              variant={radioStyles.outlineDark}
            />
          </InlineRow>
        </fieldset>
        <CopyButtons state={state} name={state.name} title={state.jobTitle} />
      </form>
    </div>
  );
};

export default Form;
