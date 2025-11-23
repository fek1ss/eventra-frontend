import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { getLatestEvent } from './../../services/eventService';

const Hero = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const lastEvent = await getLatestEvent();
        setEvent(lastEvent);
      } catch (err) {
        console.error(
          'Ошибка при получении последнего события:',
          err,
        );
        setError('Не удалось загрузить данные события.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) {
    return (
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <h1>Загрузка...</h1>
        </div>
      </div>
    );
  }

  if (error || !event) {
    // Если ошибка или нет событий в базе
    return (
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <h1 className={styles.error}>
            {error || 'События не найдены.'}
          </h1>
        </div>
      </div>
    );
  }

  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <div className={styles.black}></div>
        <img src={event.image} alt="banner" />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title__event}>{event.title}</h1>
        <div className={styles.info}>
          <span className={styles.info__item}>
            <FaCalendarAlt size={20} color="#fff" />
            <p>{formatDate(event.date)}</p>
          </span>
          <span className={styles.info__item}>
            <FaMapMarkerAlt size={20} color="#fff" />
            <p>{event.location}</p>
          </span>
        </div>
        <button className={styles.btn__buy}>But Ticket</button>
      </div>
    </div>
  );
};

export default Hero;
