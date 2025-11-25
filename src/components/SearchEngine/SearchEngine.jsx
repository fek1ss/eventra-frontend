import styles from './styles.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchEngine = () => {
  return (
    <section className={styles.search} id='search'>
      <div className={styles.container}>
        <FaSearch size={20} color="#99A1AF" />
        <input className={styles.inp} type="text" />
      </div>
      <button className={styles.btn}>
        <FaSearch size={20} color="#fff" />
        Search
      </button>
    </section>
  );
};

export default SearchEngine;
