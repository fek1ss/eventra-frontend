import Header from './../../components/Header/Header';
import styles from './styles.module.css';
import Hero from './../../components/Hero/Hero';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
    </div>
  )
}

export default Home;