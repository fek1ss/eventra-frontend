import { useState } from 'react';
import styles from './styles.module.css';

const Organizations = ({ events }) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => {
    setVisibleCount(events.length);
  };

  const showLess = () => {
    setVisibleCount(5);
  };
  return (
    <section className={styles.section_orgs} id="organizations">
      <div className={styles.heading}>
        <h1 className={styles.title}>Organizations</h1>
        {visibleCount !== 5 ? (
          <p onClick={showLess} className={styles.view}>
            view less
          </p>
        ) : (
          <p onClick={showMore} className={styles.view}>
            view all
          </p>
        )}
      </div>
      <div className={styles.orgs}>
        {events.slice(0,visibleCount).map(event => (
          <div className={styles.org} key={event.id}>{event.organization}</div>
        ))}
      </div>
    </section>
  );
};

export default Organizations;
