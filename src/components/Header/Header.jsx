import styles from './styles.module.css';
import logo from '/assets/IconEventra.png';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.header__logo}>
          <div className={styles.logo__container}>
            <img
              src={logo}
              alt="logo"
              className={styles.logo__icon}
            />
          </div>
          <h1>Eventra</h1>
        </div>
        <nav className={styles.header__nav}>
          <a href="/" className={styles.nav__link}>
            Home
          </a>
          <a href="/events" className={styles.nav__link}>
            Events
          </a>
          <a href="/categories" className={styles.nav__link}>
            Categories
          </a>
          <a href="/contacts" className={styles.nav__link}>
            Contacts
          </a>
        </nav>
        <div className={styles.header__actions}>
          <a className={styles.search__link}>🔍</a>
          <FaUser size={20} color="#E53935" />;
          <button className={styles.login__btn}>Login</button>
          <button className={styles.register__btn}>Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
