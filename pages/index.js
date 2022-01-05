import Form from "../components/signature/form";
import Preview from "../components/signature/preview";
import styles from "./index.module.css";

const Signature = () => {
  return (
      <div className={styles.container}>
        <Form />
        <Preview />
      </div>
  );
};

export default Signature;
