// import { useState } from 'react';
import styles from './styles.module.css';

const Modal = () => {
  // const [registerData, setRegisterData] = useState({
  //   first_name: '',
  //   last_name: '',
  //   phone: '',
  //   isPaid: ''
  // });
  // event_id, user_id, first_name, last_name, phone, isPaid
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  )
}

export default Modal;