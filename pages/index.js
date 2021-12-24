import { useSignatureState } from "../components/context";
import Layout from "../components/Layout";
import FormInput from "../components/elements/FormInput";
import FormSelect from "../components/elements/FormSelect";
import FormCheckbox from "../components/elements/FormCheckbox";
import FormRadio from "../components/elements/FormRadio";
import TelephoneFields from "../components/Telephone/TelephoneField";
import TelephoneAddNumberButton from "../components/Telephone/TelephoneAddNumber";
import Head from "next/head";
import LOCATIONS from "../data/locations";
import Preview from "../components/Preview";
import styles from "./Index.module.css";
import radioStyles from "../components/elements/FormRadio/FormRadio.module.css";

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

const Form = () => {
  const { state } = useSignatureState();
  return (
    <form>
      <p>Fields marked with an * are required</p>
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
    </form>
  );
};

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

const Signature = () => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Josefin+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <Form />
        <Preview />
      </div>
    </Layout>
  );
};

export default Signature;
