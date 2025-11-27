import styles from './styles.module.css';
import Header from './../../components/loyaut/Header/Header';
import HeroEvent from './../../components/loyaut/HeroEvent/HeroEvent';
import { useLocation } from 'react-router-dom';
import AboutEvent from './../../components/loyaut/AboutEvent/AboutEvent';
import Footer from './../../components/loyaut/Footer/Footer';
import Modal from './../../components/Modal/Modal';

const Event = () => {
  const { state } = useLocation();

  if (!state) return <p>No data</p>;

  return (
    <div className={styles.eventPage}>
      <Header />
      <div className={styles.mainContent}>
        <HeroEvent event={state} />
        <AboutEvent event={state} />
        <Modal />
      </div>
      <Footer />
    </div>
  );
};

export default Event;
