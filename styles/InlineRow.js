import styles from "./InlineRow.module.css";

const InlineRow = ({ children }) => (
  <div className={styles.flex}>{children}</div>
);

export default InlineRow;
