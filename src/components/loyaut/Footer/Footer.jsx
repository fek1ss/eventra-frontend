import styles from './styles.module.css';
import logo from '/assets/eventra_logo.png';
import header from '../Header/styles.module.css';
import { FaRegHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.info}>
        <div className={styles.info__column}>
          <div className={header.header__logo}>
            <div className={header.logo__container}>
              <img
                src={logo}
                alt="logo"
                className={header.logo__icon}
              />
            </div>
            <h1 className={header.title}>Eventra</h1>
          </div>
          <p className={styles.text}>
            Your gateway to unforgettable experiences.
          </p>
          <a href="https://www.instagram.com/kairzhanouuu/" target="_blank">
            Made by fek1ss
          </a>
        </div>
        <div className={styles.info__column}>
          <h3 className={styles.title}>Quick Links</h3>
          <p className={styles.text}>About us</p>
          <p className={styles.text}>How it works?</p>
          <p className={styles.text}>FAQ</p>
          <p className={styles.text}>Blog</p>
        </div>
        <div className={styles.info__column}>
          <h3>Categories</h3>
          <p className={styles.text}>Concerts</p>
          <p className={styles.text}>Festivals</p>
          <p className={styles.text}>Theater</p>
          <p className={styles.text}>Exhibitions</p>
        </div>
        <div className={styles.info__column}>
          <h3>Contact</h3>
          <p className={styles.text}>support@eventra.com</p>
          <p className={styles.text}>+1 (555) 123-4567</p>
          <div className={styles.socials}>
            <a href="#" className={styles.text}>
              Facebook
            </a>
            <a href="#" className={styles.text}>
              Twitter
            </a>
            <a href="#" className={styles.text}>
              Twitter
            </a>
          </div>
          <a href="/Flores_NilverTI/FLORES.html" target="_blank" className={styles.secret_link}>
            fek1ss <FaRegHeart size={20} color="#141b28ff" />
          </a>
        </div>
      </section>
      <div className={styles.policy}>
        <p className={styles.text}>
          © 2025 Eventra. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
