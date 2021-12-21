import SignatureState from "../context";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <SignatureState>
      <div id={styles.app}>
        <Header />
        <main className={styles.grow}>{children}</main>
        <Footer />
      </div>
    </SignatureState>
  );
};

export default Layout;
