import Footer from "../footer";
import Header from "../header";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id={styles.app}>
      <Header />
      <main className={styles.grow}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
