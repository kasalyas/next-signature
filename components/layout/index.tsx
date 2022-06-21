import { arrayOf, node, oneOfType } from "prop-types";
import Footer from "../footer";
import Header from "../header";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id={styles.app}>
      <Header />
      <main className={styles.grow}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propType = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Layout;
