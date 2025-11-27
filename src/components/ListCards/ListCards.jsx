import styles from './styles.module.css';
import EventCard from './../EventCard/EventCard';
import { useEffect, useState } from 'react';
import { getEvents } from '../../services/eventService';
import Organizations from '../Organizations/Organizations';
import SearchEngine from './../SearchEngine/SearchEngine';
import Filter from './../Filter/Filter';

const ListCards = () => {
  const [events, setEvents] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState("");

  const filteredEvents = events.filter(event =>
    (event.title || '').toLowerCase().includes((query || '').toLowerCase())
  );

  const showMore = () => {
    setVisibleCount(events.length);
  };

  const showLess = () => {
    setVisibleCount(6);
  };

  useEffect(() => {
    getEvents(category).then(data => setEvents(data));
  }, [category]);

  return (
    <div className={styles.comming}>
      <SearchEngine query={query} setQuery={setQuery} />
      <Filter setCategory={setCategory} />
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
        {filteredEvents.slice(0, visibleCount).map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <Organizations events={events} />
    </div>
  );
};

export default ListCards;
