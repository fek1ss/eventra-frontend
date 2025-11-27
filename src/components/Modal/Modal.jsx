import { useState } from 'react';
import styles from './styles.module.css';
import { useMessage } from '../../hooks/useMessage';
import { registerForEvent } from '../../services/registrationService';
import Input from './../Input/Input';

const Modal = ({ setModal, user_id, event  }) => {
  const { message, showMessage } = useMessage();
  const [registerData, setRegisterData] = useState({
    event_id: '',
    user_id: '',
    first_name: '',
    last_name: '',
    phone: '',
    isPaid: '',
  });

  const handleRegEvent = async e => {
    e.preventDefault();
    if (
      !registerData.first_name ||
      !registerData.last_name ||
      !registerData.phone
    ) {
      showMessage('fill in all fields', true);
      return;
    }
    console.log(event)

    try {
      const payload = {
        event_id: Number(event.event_id),
        user_id: Number(user_id),
        first_name: registerData.first_name,
        last_name: registerData.last_name,
        phone: registerData.phone,
        isPaid: event.isPaid,
      };
      const regData = await registerForEvent(payload);
      showMessage(regData.message, false);
      console.log(regData.whatsappLink);

      if (regData.whatsappLink) {
        console.log(regData.whatsappLink);
        window.open(regData.whatsappLink, '_blank');
      }

      setRegisterData({
        event_id: '',
        user_id: '',
        first_name: '',
        last_name: '',
        phone: '',
        isPaid: '',
      });
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };

  // event_id, user_id, first_name, last_name, phone, isPaid
  return (
    <div
      className={styles.background}
      onClick={() => setModal(false)}
    >
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        <form onSubmit={handleRegEvent} className={styles.form}>
          <div className={styles.heading}>
            <h1 className={styles.title}>
              Регистрация на мероприятие
            </h1>
            <p className={styles.text}>
              Напишите в ватцап о регистрации, поддержите нас свои
              сообщением
            </p>
          </div>
          <Input
            label="First name:"
            type="text"
            value={registerData.first_name}
            onChange={val =>
              setRegisterData(prev => ({ ...prev, first_name: val }))
            }
          />
          <Input
            label="Last name:"
            type="text"
            value={registerData.last_name}
            onChange={val =>
              setRegisterData(prev => ({ ...prev, last_name: val }))
            }
          />
          <Input
            label="Phone:"
            type="text"
            value={registerData.phone}
            onChange={val =>
              setRegisterData(prev => ({ ...prev, phone: val }))
            }
          />

          <button type="submit" className={styles.btn}>Отправить сообщение</button>
        </form>
        {message && (
          <p className={message.error ? 'error' : 'success'}>
            {message?.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;
