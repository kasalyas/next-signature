import InlineRow from "../../../styles/InlineRow";
import FormRadio from "../../elements/formRadio";
import radioStyles from "../../elements/formRadio/formRadio.module.css";

const Marketing = () => (
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
);

export default Marketing;
