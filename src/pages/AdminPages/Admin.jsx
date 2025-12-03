import styles from './styles.module.css';
import CreateEvent from './AdminEvent/AdminEvent';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import AdminEvent from './AdminEvent/AdminEvent';
import { useEffect } from 'react';

const Admin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(()=> {
    if(user?.role !== 'admin') 
      navigate('/')
    
  },[navigate, user])

  return (
    <div className={styles.adminPage}>
      <div className={styles.wrapper}>
        <IoMdArrowBack
          className={styles.back}
          size={24}
          color="#E53935"
          onClick={() => navigate('/')}
        />
        <h1 className={styles.title}>Админ панель</h1>

        <div className={styles.adminSection}>
          <AdminEvent />
        </div>
      </div>
    </div>
  );
};

export default Admin;
