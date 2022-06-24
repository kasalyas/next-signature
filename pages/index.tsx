import React, { useEffect } from "react";
import { useSignatureState } from "../components/context";
import Form from "../components/signature/form";
import Preview from "../components/signature/preview";
import styles from "./index.module.css";

const Signature = () => {
  const { state } = useSignatureState();
  useEffect(() => {
    window.localStorage.setItem("store", JSON.stringify(state));
  }, []);

  return (
    <div className={styles.container}>
      <Form />
      <Preview />
    </div>
  );
};

export default Signature;
