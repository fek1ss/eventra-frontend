import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '/assets/eventra_logo.png';
import { IoMdSearch, IoMdPerson } from 'react-icons/io';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

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
          <a href="#organizations" className={styles.nav__link}>
            Organizations
          </a>
          <a href="/categories" className={styles.nav__link}>
            Categories
          </a>
          <a href="/about" className={styles.nav__link}>
            About us
          </a>
          {user?.role === 'admin' && (
            <a className={styles.nav__link} href="/admin">
              Admin
            </a>
          )}
        </nav>
        <div className={styles.header__actions}>
          <a className={styles.iconLink} href="#search">
            <IoMdSearch className={styles.icon} />
          </a>
          <a className={styles.iconLink} href="#search">
            <IoMdPerson
              className={styles.icon}
              onClick={() => navigate('/profile')}
              size={20}
              color="#242424"
            />
          </a>
          ;
          {
            user?.token ? (
              <div className={styles.auth}>
            <button
              className={styles.login__btn}
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className={styles.register__btn}
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
            ) : (
              <button>
                logout
              </button>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
