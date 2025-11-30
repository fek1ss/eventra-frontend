import styles from './styles.module.css';
import { useMessage } from '../../../hooks/useMessage';
import { useEffect, useState } from 'react';
import {
  createEvent,
  getEventById,
  updateEvent,
} from '../../../services/eventService';
import { useLocation } from 'react-router-dom';

const AdminEvent = () => {
  const { message, showMessage } = useMessage();
  const { state } = useLocation();
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
    responsible_phone: '',
  });
  useEffect(() => {
    if (state) {
      getEventById(state.id).then(data => {
        setEvent({
          title: data.title,
          description: data.description,
          date: data.date,
          time: data.time,
          organization: data.organization,
          category: data.category,
          location: data.location,
          price: data.price,
          responsible_phone: data.responsible_phone,
        });
      });
    }
  }, [state]);

  const handleUpdate = async () => {
    try {
      const payload = {
        ...event,
        date: event.date ? event.date.slice(0, 10) : null,
      };
      const update = await updateEvent(state.id, payload);
      if (update) {
        showMessage(update.message, false);
      }
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };

  const handleCreateEvent = async () => {
    if (
      !event.title ||
      !event.description ||
      !event.date ||
      !event.time ||
      !event.organization ||
      !event.category ||
      !event.location ||
      !event.responsible_phone
    ) {
      showMessage('fill in all fields', true);
      return;
    }

    try {
      const data = await createEvent(event);
      if (data.message.includes('Мероприятие создано')) {
        showMessage(data.message, false);
        setEvent({
          title: '',
          description: '',
          date: '',
          time: '',
          organization: '',
          category: '',
          location: '',
          image: null,
          price: '',
          responsible_phone: '',
        });
      }
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };

  return (
    <form className={styles.form}>
      {state ? (
        <h2 className={styles.title}>Обновление мероприятие:</h2>
      ) : (
        <h2 className={styles.title}>Создание мероприятия:</h2>
      )}

      <div className={styles.row}>
        <label htmlFor="title" className={styles.label}>
          Название мероприятия:
          <input
            className={styles.inp}
            name="title"
            type="text"
            value={event.title}
            onChange={e =>
              setEvent(prev => ({ ...prev, title: e.target.value }))
            }
          />
        </label>
        <label htmlFor="description" className={styles.label}>
          Описание:
          <textarea
            className={styles.inpDesc}
            name="description"
            value={event.description}
            onChange={val =>
              setEvent(prev => ({
                ...prev,
                description: val.target.value,
              }))
            }
          ></textarea>
        </label>
      </div>

      <div className={styles.row}>
        <label htmlFor="date" className={styles.label}>
          Дата:
          <input
            className={styles.inp}
            name="date"
            type="date"
            value={event.date ? event.date.slice(0, 10) : ''}
            onChange={val =>
              setEvent(prev => ({ ...prev, date: val.target.value }))
            }
          />
        </label>
        <label htmlFor="time" className={styles.label}>
          Время начала:
          <input
            className={styles.inp}
            name="time"
            type="text"
            value={event.time}
            onChange={val =>
              setEvent(prev => ({ ...prev, time: val.target.value }))
            }
          />
        </label>
      </div>

      <div className={styles.row}>
        <label htmlFor="organization" className={styles.label}>
          Организаторы:
          <input
            className={styles.inp}
            name="organization"
            type="text"
            value={event.organization}
            onChange={val =>
              setEvent(prev => ({
                ...prev,
                organization: val.target.value,
              }))
            }
          />
        </label>
        <label htmlFor="category" className={styles.label}>
          Категория:
          <input
            className={styles.inp}
            name="category"
            type="text"
            value={event.category}
            onChange={val =>
              setEvent(prev => ({
                ...prev,
                category: val.target.value,
              }))
            }
          />
        </label>
      </div>

      <div className={styles.row}>
        <label htmlFor="location" className={styles.label}>
          Локация: (Например: 107 аудитория)
          <input
            className={styles.inp}
            name="location"
            type="text"
            value={event.location}
            onChange={val =>
              setEvent(prev => ({
                ...prev,
                location: val.target.value,
              }))
            }
          />
        </label>
        <label htmlFor="location" className={styles.label}>
          Баннер мероприятия (не обязательно):
          <input
            className={styles.inp}
            type="file"
            accept="image/*"
            onChange={e =>
              setEvent({ ...event, image: e.target.files[0] })
            }
          />
        </label>
      </div>

      <div className={styles.row}>
        <label htmlFor="location" className={styles.label}>
          Цена: (Не обязательно)
          <input
            className={styles.inp}
            name="price"
            type="text"
            value={event.price || ''}
            onChange={val =>
              setEvent(prev => ({
                ...prev,
                price: val.target.value,
              }))
            }
          />
        </label>
        <label htmlFor="responsible_phone" className={styles.label}>
          Номер ответственного:
          <input
            className={styles.inp}
            name="responsible_phone"
            type="text"
            value={event.responsible_phone}
            onChange={val =>
              setEvent(prev => ({
                ...prev,
                responsible_phone: val.target.value,
              }))
            }
          />
        </label>
      </div>

      {state ? (
        <button
          onClick={handleUpdate}
          className={styles.btn}
          type="button"
        >
          Update
        </button>
      ) : (
        <button
          onClick={handleCreateEvent}
          className={styles.btn}
          type="button"
        >
          Опубликовать мероприятия
        </button>
      )}

      {message && (
        <p className={message.error ? 'error' : 'success'}>
          {message?.text}
        </p>
      )}
    </form>
  );
};

export default AdminEvent;
