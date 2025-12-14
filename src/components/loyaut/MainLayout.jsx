import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from './layout.module.css';

const MainLayout = ({ children }) => (
  <div className={styles.main_layout}>
    <Header />
    <div className={styles.main_content}>
      {children}
    </div>
    <Footer />
  </div>
);

export default MainLayout;
