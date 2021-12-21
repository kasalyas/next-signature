import { useSignatureState } from "../context";
import styles from "../elements/Button/Button.module.css";
import stylez from "./Telephone.module.css";

/**
 * @todo Need to use the FormInput here but it should exclude the
 * the dispatch. That should not be a concern for the UI - should be
 * for the consumer 😬
 */

const TelephoneFields = ({ field, index }) => {
  const { dispatch } = useSignatureState();
  return (
    <fieldset>
      <legend>{`Telephone field ${index + 1}`}</legend>
      <div>
        <label htmlFor={`office${index}`}>Name:</label>
        <input
          name={`office${index}`}
          id={`office${index}`}
          type="text"
          value={field?.name}
          onChange={(evt) =>
            dispatch({
              type: "UPDATE_TELEPHONE_NAME",
              index,
              name: evt.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor={`office${index}`}>Number:</label>
        <input
          name={`number${index}`}
          id={`number${index}`}
          value={field?.number}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(evt) =>
            dispatch({
              type: "UPDATE_TELEPHONE_NUMBER",
              index,
              number: evt.target.value,
            })
          }
        />
      </div>
      <div className={stylez.alignRight}>
        <button
          type="button"
          className={styles.danger}
          onClick={() => {
            dispatch({
              type: "DELETE_TELEPHONE_ROW",
              index,
            });
          }}
        >
          Delete this number
        </button>
      </div>
    </fieldset>
  );
};

export default TelephoneFields;
