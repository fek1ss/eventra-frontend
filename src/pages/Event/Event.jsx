import styles from './styles.module.css';
import Header from './../../components/loyaut/Header/Header';
import HeroEvent from './../../components/loyaut/HeroEvent/HeroEvent';
import { useLocation } from 'react-router-dom';
import AboutEvent from './../../components/loyaut/AboutEvent/AboutEvent';
import Footer from './../../components/loyaut/Footer/Footer';

const Event = () => {
  const { state } = useLocation();

  if (!state) return <p>No data</p>; 

  return (
    <div className={styles.eventPage}>
      <Header />
      <HeroEvent event={state} />
      <AboutEvent event={state} />
      <Footer />
    </div>
  );
};

export default Event;
