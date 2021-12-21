import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <div className={styles.logo}>
        KIN <span aria-label="and">+</span> CARTA
      </div>
      <div>Email signature generator</div>
    </h1>
  </header>
);

export default Header;
