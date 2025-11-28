import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { IoMdArrowBack } from 'react-icons/io';
import Input from './../../components/Input/Input';
import { useState } from 'react';

const EditEvent = () => {
  const navigate = useNavigate();
  // const {state} = useLocation();
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    organization: '',
    category: '',
    location: '',
    image: null,
    price: '',
  });


  return (
    <div className={styles.adminPage}>
      <div className={styles.wrapper}>
        <IoMdArrowBack
          className={styles.back}
          size={24}
          color="#E53935"
          onClick={() => navigate('/')}
        />
        <h1 className={styles.title}>Обновление мероприятия</h1>
        <form className={styles.adminSection}>
          <Input 
            label="title"
            type="text"
            name="title"
            value={event.title}
            onChange={(val)=> setEvent(prev => ({...prev, title: val}))}
          />
          <Input 
            label="description"
            type="text"
            name="description"
            value={event.description}
            onChange={(val)=> setEvent(prev => ({...prev, description: val}))}
          />
          <Input 
            label="title"
            type="text"
            name="title"
            value={event.title}
            onChange={(val)=> setEvent(prev => ({...prev, title: val}))}
          />
          <Input 
            label="title"
            type="text"
            name="title"
            value={event.title}
            onChange={(val)=> setEvent(prev => ({...prev, title: val}))}
          />
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
