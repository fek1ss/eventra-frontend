import { useState } from 'react';
import styles from './styles.module.css';
import { useMessage } from '../../hooks/useMessage';
import { registerForEvent } from '../../services/registrationService';
import Input from './../Input/Input';

const Modal = ({ setModal, user_id, event }) => {
  const { message, showMessage } = useMessage();
  const [whatsappLink, setWhatsappLink] = useState(null);

  const [registerData, setRegisterData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
  });

  const handleRegEvent = async e => {
    e.preventDefault();

    if (!registerData.first_name || !registerData.last_name || !registerData.phone) {
      showMessage('fill in all fields', true);
      return;
    }

    try {
      const payload = {
        event_id: event.id,
        user_id: Number(user_id),
        first_name: registerData.first_name,
        last_name: registerData.last_name,
        phone: registerData.phone,
        isPaid: event.isPaid,
      };

      const regData = await registerForEvent(payload);

      if (regData.whatsappLink) {
        showMessage(regData.message, false);
        setWhatsappLink(regData.whatsappLink);   // <--- сохраняем ссылку
      }

      setRegisterData({
        first_name: '',
        last_name: '',
        phone: '',
      });

    } catch (err) {
      showMessage(`${err}, срок сессии истек, перезайдите в аккаунт`, true);
    }
  };

  return (
    <div className={styles.background} onClick={() => setModal(false)}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <form onSubmit={handleRegEvent} className={styles.form}>
          <div className={styles.heading}>
            <h1 className={styles.title}>Регистрация на мероприятие</h1>
            <p className={styles.text}>
              Напишите в WhatsApp о регистрации, поддержите нас своим сообщением
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

          <button type="submit" className={styles.btn}>
            Отправить сообщение
          </button>
        </form>

        {/* Сообщение */}
        {message && (
          <p className={message.error ? 'error' : 'success'}>
            {message?.text}
          </p>
        )}

        {/* Кнопка WhatsApp — появляется только после регистрации */}
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waButton}
          >
            Открыть WhatsApp
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
