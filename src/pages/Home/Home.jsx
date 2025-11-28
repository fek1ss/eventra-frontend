import styles from './styles.module.css';
import Header from './../../components/loyaut/Header/Header';
import Hero from './../../components/loyaut/Hero/Hero';
import ListCards from './../../components/ListCards/ListCards';
import Footer from '../../components/loyaut/Footer/Footer';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <ListCards />
      <Footer />
    </div>
  );
};

export default Home;
