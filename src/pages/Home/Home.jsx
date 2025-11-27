import styles from './styles.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../../components/loyaut/Header/Header';
import Hero from './../../components/loyaut/Hero/Hero';
import ListCards from './../../components/ListCards/ListCards';
import Footer from '../../components/loyaut/Footer/Footer';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  // const { state } = useLocation();
  // const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

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
