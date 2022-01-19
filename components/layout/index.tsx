import Footer from "../footer";
import Header from "../header";
import styles from "./layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div id={styles.app}>
      <Header />
      <main className={styles.grow}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
