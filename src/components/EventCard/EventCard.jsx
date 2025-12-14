import styles from './styles.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteEvent } from '../../services/eventService';
import { formatDate } from '../../utils/formatDate';

const EventCard = ({ event, loadEvents, userEvent = false }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const handleClick = () => {
    navigate(`/event/${event.id}`, { state: event });
  };

  const handleDelete = async id => {
    try {
      const del = await deleteEvent(id);
      if (del.message) loadEvents();
    } catch (err) {
      alert('Ошибка при удалении, попробуйте в следующий раз!', err);
    }
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
    >
      <div className={styles.image__container}>
        <div className={styles.actions}>
          {event?.price && (
            <span className={styles.tag}>
              {event.price !== null && event.price}
            </span>
          )}
          {user?.role === 'admin' && (
            <button
              className={styles.delete}
              onClick={e => {
                e.stopPropagation();
                handleDelete(event.id);
              }}
            >
              delete
            </button>
          )}
        </div>
        <img
          className={styles.img__card}
          src={`${event.image && event.image.startsWith('http') ? event.image : '/assets/eventralogo.PNG'}`}
          alt="banner image"
        />
      </div>
      <section className={styles.info}>
        <p className={styles.title}>{event.title}</p>
        <div className={styles.info__date}>
          <FaCalendarAlt size={10} color="#4A5565" />
          <p className={styles.date}>{formatDate(event.date)}</p>
        </div>
        <div className={styles.info__date}>
          <FaMapMarkerAlt size={10} color="#4A5565" />
          <p className={styles.date}>{event.location}</p>
        </div>
        {!userEvent && (
          <button className={styles.btn}>Registration</button>
        )}
      </section>
    </div>
  );
};

export default EventCard;
