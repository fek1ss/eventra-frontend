import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { formatDate } from './../../utils/formatDate';
import { IoIosArrowBack } from 'react-icons/io';

const HeroEvent = ({event}) => {
  const navigate = useNavigate('/')

  return (
    <div className={styles.hero}>
      <div className={styles.black}></div>
      <img
        className={styles.img__banner}
        src={event.image}
        alt="banner"
      />
      <div className={styles.container}>
        
        <span className="back" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={24} color="#a92225" />
          Back to Events
        </span>

        <div className={styles.heading}>
          <span className={styles.tag}>{event.category}</span>
          <h1 className={styles.title}>{event.title}</h1>
          <div className={styles.info}>
            <div className={styles.info__item}>
              <FaCalendarAlt size={15} color="#fff" />
              <p className={styles.date}>{formatDate(event.date)}</p>
            </div>
            <div className={styles.info__item}>
              <FaMapMarkerAlt size={15} color="#fff" />
              <p className={styles.date}>{event.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEvent;
