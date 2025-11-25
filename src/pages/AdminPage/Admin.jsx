import styles from './styles.module.css';
import CreateEvent from './../../components/CreateEvent/CreateEvent';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

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
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default Admin;
