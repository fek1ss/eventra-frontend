import styles from './styles.module.css';
import EventCard from './../EventCard/EventCard';
import { useEffect, useState } from 'react';
import { getEvents } from '../../services/eventService';
import Organizations from '../Organizations/Organizations';

const ListCards = () => {
  const [events, setEvents] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(events.length);
  };

  const showLess = () => {
    setVisibleCount(6);
  };

  useEffect(() => {
    getEvents().then(events => {
      const sorted = [...events].sort((a, b) => {
        const [hoursA, minutesA, secondsA] = (a.time || '00:00:00')
          .split(':')
          .map(Number);
        const [hoursB, minutesB, secondsB] = (b.time || '00:00:00')
          .split(':')
          .map(Number);

        const dateA = new Date(a.date);
        dateA.setHours(hoursA, minutesA, secondsA);

        const dateB = new Date(b.date);
        dateB.setHours(hoursB, minutesB, secondsB);

        return dateA - dateB;
      });
      setEvents(sorted);
    });
  }, []);

  return (
    <div className={styles.comming}>
      <section className={styles.container}>
        <div className={styles.popular}>
          <h1 className={styles.title}>Coming Soon</h1>
          <p className={styles.text}>
            Mark your calendar for these upcoming events
          </p>
        </div>
        {visibleCount !== 6 ? (
          <p onClick={showLess} className={styles.view}>
            view less
          </p>
        ) : (
          <p onClick={showMore} className={styles.view}>
            view all
          </p>
        )}
      </section>
      <div className={styles.list}>
        {events.slice(0, visibleCount).map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            img={event.image}
            category={event.category}
            date={event.date}
            location={event.location}
            price={event.price}
          />
        ))}
      </div>
      <Organizations events={events} />
    </div>
  );
};

export default ListCards;
