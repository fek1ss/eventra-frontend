import styles from './styles.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from './../../components/loyaut/Header/Header';
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.eventPage}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.black}></div>
        <img
          className={styles.img__banner}
          src="/assets/Container.png"
          alt="banner"
        />
        <div className={styles.container}>
          <p className={styles.back} onClick={() => navigate("/")}>Back to Events</p>

          <div className={styles.heading}>
            <span className={styles.tag}>concert</span>
            <h1 className={styles.title}>Rock Revolution Tour</h1>
            <div className={styles.info}>
              <div className={styles.info__item}>
                <FaCalendarAlt size={15} color="#fff" />
                <p className={styles.date}>Friday, June 20, 2025</p>
              </div>
              <div className={styles.info__item}>
                <FaMapMarkerAlt size={15} color="#fff" />
                <p className={styles.date}>107 аудитория</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
