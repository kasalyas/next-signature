import styles from "./header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      KIN <span aria-hidden>+</span> CARTA
    </div>
  </header>
);

export default Header;
