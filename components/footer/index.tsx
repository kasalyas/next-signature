import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      &copy; 2021 KIN AND CARTA PLC. ALL RIGHTS RESERVED
    </footer>
  );
};

export default Footer;
