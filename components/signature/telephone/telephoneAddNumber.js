import { useSignatureState } from "../../context";
import Button from "../../elements/button";
import styles from "../../elements/button/button.module.css";

const TelephoneAddNumberButton = () => {
  const { dispatch } = useSignatureState();
  return (
    <div>
      <Button
        type="button"
        className={styles.success}
        onClick={() =>
          dispatch({
            type: "ADD_TELEPHONE_NUMBER",
          })
        }
      >
        Add a new number
      </Button>
    </div>
  );
};

export default TelephoneAddNumberButton;
