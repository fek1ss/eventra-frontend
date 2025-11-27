import styles from './styles.module.css';

const Filter = ({ setCategory }) => {
  return (
    <div className={styles.section__filter}>
      <select
        name=""
        onChange={e => {
          setCategory(e.target.value);
        }}
        className={styles.filter}
      >
        <option value="" className={styles.option}>
          Категории
        </option>
        <option value="ярмарка" className={styles.option}>
          Ярмарка
        </option>
        <option value="Концерт" className={styles.option}>
          Концерт
        </option>
        <option value="Музыка" className={styles.option}>
          мастеркласс
        </option>
        <option value="Мероприятие" className={styles.option}>
          Мероприятие
        </option>
      </select>
    </div>
  );
};

export default Filter;
