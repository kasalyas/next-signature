import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div id={styles.app}>
      <Header />
      <main className={styles.grow}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
