import styles from './styles.module.css';
import EventCard from './../EventCard/EventCard';
import { useEffect, useState } from 'react';
import { getEvents } from '../../services/eventService';

const ListCards = () => {
  const [events, setEvents] = useState([]);

  const parseDate = dateStr => {
    if (!dateStr) return null;

    // если формат 'DD.MM.YYYY'
    if (dateStr.includes('.')) {
      const [day, month, year] = dateStr.split('.');
      return `${year}-${month}-${day}`;
    }

    return dateStr; // предполагаем, что уже 'YYYY-MM-DD'
  };
  useEffect(() => {
    getEvents().then(events => {
      const sorted = [...events].sort((a, b) => {
        const timeA = a.time || '00:00:00';
        const timeB = b.time || '00:00:00';

        const dateA = new Date(`${parseDate(a.date)}T${timeA}`);
        const dateB = new Date(`${parseDate(b.date)}T${timeB}`);

        return dateA - dateB; // ближайшие события первыми
      });
      setEvents(sorted);
    });
  }, []);

  return (
    <div className={styles.list}>
      {events.map(event => (
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
  );
};

export default ListCards;
