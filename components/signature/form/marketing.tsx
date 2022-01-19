import FormRadio from "../../elements/formRadio";
import radioStyles from "../../elements/formRadio/formRadio.module.css";

const InlineRow: React.FC = ({ children }) => (
  <div style={{ display: "flex", gap: "20px", padding: "20px 0" }}>
    {children}
  </div>
);

const Marketing: React.FC = () => (
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
