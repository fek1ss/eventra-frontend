import styles from './styles.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { formatDate } from '../utils/formatDate';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.id}`, { state: event });
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.image__container}>
        {event.price !== null && (
          <span className={styles.price}>{event.price}</span>
        )}
        <img
          className={styles.img__card}
          src={`${event.image !== null ? event.image : '/assets/Container.png'}`}
          alt=""
        />
      </div>
      <section className={styles.info}>
        <span className={styles.tag}>{event.category}</span>
        <p className={styles.title}>{event.title}</p>
        <div className={styles.info__date}>
          <FaCalendarAlt size={10} color="#4A5565" />
          <p className={styles.date}>{formatDate(event.date)}</p>
        </div>
        <div className={styles.info__date}>
          <FaMapMarkerAlt size={10} color="#4A5565" />
          <p className={styles.date}>{event.location}</p>
        </div>
        <button
          className={styles.btn}
        >
          Registration
        </button>
      </section>
    </div>
  );
};

export default EventCard;
