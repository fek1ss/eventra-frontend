import styles from './styles.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.black}></div>
        <img
          className={styles.img__banner}
          src="/assets/image.png"
          alt="banner"
        />
      <div className={styles.wrapper}>
        <h1 className={styles.title__event}>
          Eventra - будь в центре события
        </h1>
        <p className={styles.text}>
          Открывай новые возможности кампуса, находи события, собирай
          друзей и живи университетской жизнью ярче вместе с Eventra
        </p>
        <button className={styles.btn__buy}>Start Now</button>
      </div>
    </div>
  );
};

export default Hero;
