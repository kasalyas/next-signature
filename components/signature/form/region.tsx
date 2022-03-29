import InlineRow from "../../../styles/InlineRow";
import FormRadio from "../../elements/formRadio";
import radioStyles from "../../elements/formRadio/formRadio.module.css";

const Region: React.FC = () => (
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
);

export default Region;
