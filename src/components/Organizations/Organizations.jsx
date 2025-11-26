import styles from './styles.module.css';

const Organizations = ({ events }) => {
  return (
    <section className={styles.orgs} id='organizations'>
      {events.map(event => (
        <div className={styles.org}>{event.organization}</div>
      ))}
    </section>
  );
};

export default Organizations;
