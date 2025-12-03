import styles from './styles.module.css';


const MetricCard = ({ label, value, icon, colorClass, v_color }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.iconWrapper} ${styles[colorClass]}`}>
        <img src={icon} alt="icon" />
      </div>
      
      {/* Метка (Upcoming Events, Total Spent и т.д.) */}
      <p className={styles.label}>{label}</p>
      
      {/* Значение (3, 12, $1,847) */}
      <p className={`${styles.value} ${styles[v_color]}`}>{value}</p>
    </div>
  );
};

export default MetricCard;