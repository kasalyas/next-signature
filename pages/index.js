import Layout from "../components/Layout";
import Form from "../components/signature/form";
import Preview from "../components/signature/preview";
import styles from "./index.module.css";

const Signature = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Form />
        <Preview />
      </div>
    </Layout>
  );
};

export default Signature;
