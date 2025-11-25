import styles from './styles.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { formatDate } from '../utils/formatDate';

const EventCard = ({
  title,
  img,
  category,
  date,
  location,
  price,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__container}>
        {price !== null && <span className={styles.price}>{price}</span>}
        <img
          className={styles.img__card}
          src={`${img !== null ? img : '/assets/Container.png'}`}
          alt=""
        />
      </div>
      <section className={styles.info}>
        <span className={styles.tag}>{category}</span>
        <p className={styles.title}>{title}</p>
        <div className={styles.info__date}>
          <FaCalendarAlt size={10} color="#4A5565" />
          <p className={styles.date}>{formatDate(date)}</p>
        </div>
        <div className={styles.info__date}>
          <FaMapMarkerAlt size={10} color="#4A5565" />
          <p className={styles.date}>{location}</p>
        </div>
        <button className={styles.btn}>Registration</button>
      </section>
    </div>
  );
};

export default EventCard;
