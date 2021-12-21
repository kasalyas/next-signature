import { useSignatureState } from "../context";
import Button from "../elements/Button";
import styles from "../elements/Button/Button.module.css";

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
