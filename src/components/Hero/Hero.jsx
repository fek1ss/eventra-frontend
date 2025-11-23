import styles from './styles.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <div className={styles.black}></div>
        <img src="/assets/testBanner.png" alt="banner" />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title__event}>
          Summer Music Festival 2025
        </h1>
        <div className={styles.info}>
          <span className={styles.info__item}>
            <FaCalendarAlt size={20} color="#fff" />
            <p>Jul 15, 2025</p>
          </span>
          <span className={styles.info__item}>
            <FaMapMarkerAlt size={20} color="#fff" />
            <p>Jul 15, 2025</p>
          </span>
        </div>
        <button className={styles.btn__buy}>But Ticket</button>
      </div>
    </div>
  );
};

export default Hero;
