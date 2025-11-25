import styles from './styles.module.css';

const Organizations = ({ events }) => {
  return (
    <section className={styles.orgs}>
      {events.map(event => (
        <span className={styles.org}>{event.organization}</span>
      ))}
    </section>
  );
};

export default Organizations;
