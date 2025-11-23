import Header from './../../components/Header/Header';
import styles from './styles.module.css';
import Hero from './../../components/Hero/Hero';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/SearchEngine/SearchEngine';

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
    </div>
  )
}

export default Home;