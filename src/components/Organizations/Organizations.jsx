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

  const uniqueOrganizations = events.reduce((acc, event) => {
    const normalized = event.organization
      ?.toLowerCase()
      .replace(/\s/g, '');

    if (
      !acc.some(
        e =>
          e.organization?.toLowerCase().replace(/\s/g, '') ===
          normalized,
      )
    ) {
      acc.push(event);
    }

    return acc;
  }, []);

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
        {uniqueOrganizations.slice(0, visibleCount).map(event => (
          <div className={styles.org} key={event.id}>
            {event.organization}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizations;
