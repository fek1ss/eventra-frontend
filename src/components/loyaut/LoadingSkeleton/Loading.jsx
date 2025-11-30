import styles from './styles.module.css';

const Loading = ({ count = 3 }) => {
  const cards = Array.from({ length: count });
  return (
    <div className={styles.loading}>
      {cards.map((_, index) => (
        <div key={index} className={styles.loadCard}>
          <div className={styles.image} />
          <div className={styles.textLine} />
          <div className={styles.textLineShort} />
        </div>
      ))}
    </div>
  );
};

export default Loading;
