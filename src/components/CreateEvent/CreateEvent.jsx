import styles from './styles.module.css';
import { useMessage } from '../../hooks/useMessage';
import { useState } from 'react';
import { createEvent } from '../../services/eventService';

const CreateEvent = () => {
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

  const { message, showMessage } = useMessage();

  const handleCreateEvent = async e => {
    e.preventDefault();

    if (
      !event.title ||
      !event.description ||
      !event.date ||
      !event.time ||
      !event.organization ||
      !event.category ||
      !event.location
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
          price: ''
        });
      }
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleCreateEvent}>
      <h2 className={styles.title}>Создание мероприятия</h2>

      <div className={styles.row}>
        <label htmlFor="title" className={styles.label}>
          Название мероприятия:
          <input
            className={styles.inp}
            name="title"
            type="text"
            value={event.title}
            onChange={val =>
              setEvent(prev => ({ ...prev, title: val.target.value }))
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
            value={event.date}
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
      <label htmlFor="location" className={styles.label__price}>
        Цена: (Не обязательно)
        <input
          className={styles.inp}
          name="price"
          type="text"
          value={event.price}
          onChange={val =>
            setEvent(prev => ({
              ...prev,
              price: val.target.value,
            }))
          }
        />
      </label>

      <button type="submit" className={styles.btn}>
        Опубликовать мероприятия
      </button>

      {message && (
        <p className={message.error ? 'error' : 'success'}>
          {message?.text}
        </p>
      )}
    </form>
  );
};

export default CreateEvent;
