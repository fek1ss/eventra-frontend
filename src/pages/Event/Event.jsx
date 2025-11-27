import styles from './styles.module.css';
import Header from './../../components/loyaut/Header/Header';
import HeroEvent from './../../components/loyaut/HeroEvent/HeroEvent';
import { useLocation } from 'react-router-dom';
import AboutEvent from './../../components/loyaut/AboutEvent/AboutEvent';
import Footer from './../../components/loyaut/Footer/Footer';
import Modal from './../../components/Modal/Modal';
import { useState } from 'react';

const Event = () => {
  const { state } = useLocation();
  const [modal, setModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  if (!state) return <p>No data</p>;

  return (
    <div className={styles.eventPage}>
      <Header />
      <div className={styles.mainContent}>
        <HeroEvent event={state} />
        <AboutEvent event={state} setModal={setModal} />
        {modal && (
          <Modal
            setModal={setModal}
            user_id={user.id}
            event={state}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Event;
