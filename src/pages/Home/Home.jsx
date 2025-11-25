import styles from './styles.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/SearchEngine/SearchEngine';
import Header from './../../components/loyaut/Header/Header';
import Hero from './../../components/loyaut/Hero/Hero';
import ListCards from './../../components/ListCards/ListCards';

const Home = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);


  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <Search />
      <ListCards />
    </div>
  )
}

export default Home;