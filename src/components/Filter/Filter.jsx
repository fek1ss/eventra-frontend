import styles from './styles.module.css';

const Filter = ({ setCategory, events }) => {
  var nonRepCategory = [];
  events.filter(event => {
    var i = nonRepCategory.findIndex(
      x =>
        x.category.toLowerCase().replace(/\s/g, '') ==
        event.category.toLowerCase().replace(/\s/g, ''),
    );
    if (i <= -1) {
      nonRepCategory.push(event);
    }
    return null;
  });

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
        {nonRepCategory.map(event => (
          <option
            key={event.id}
            value={event.category}
            className={styles.option}
          >
            {event.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
