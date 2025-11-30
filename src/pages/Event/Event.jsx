import styles from './styles.module.css';
import Header from './../../components/loyaut/Header/Header';
import HeroEvent from './../../components/loyaut/HeroEvent/HeroEvent';
import { useLocation, useNavigate } from 'react-router-dom';
import AboutEvent from './../../components/loyaut/AboutEvent/AboutEvent';
import Footer from './../../components/loyaut/Footer/Footer';
import Modal from './../../components/Modal/Modal';
import { useEffect, useState } from 'react';

const Event = () => {
  const { state } = useLocation();
  const [modal, setModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

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
            user_id={user?.id}
            event={state}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Event;
