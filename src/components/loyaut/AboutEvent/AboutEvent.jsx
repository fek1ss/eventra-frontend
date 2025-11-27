import styles from './styles.module.css';
import { FaRegClock } from 'react-icons/fa';
import { IoMdPin } from 'react-icons/io';
import { FaDollarSign } from 'react-icons/fa';
// import { useState } from 'react';


const AboutEvent = ({ event, setModal }) => {

  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About This Event</h1>
        <p className={styles.desc}>{event.description}</p>
      </div>

      <div className={styles.tags}>
        <span className={styles.tag}>
          <FaRegClock size={25} color="#a92225" />
          <p className={styles.label}>time</p>
          <p className={styles.text}>{event.time.slice(0,5)}</p>
        </span>
        <span className={styles.tag}>
          <IoMdPin size={25} color="#a92225" />
          <p className={styles.label}>organization</p>
          <p className={styles.text}>{event.organization}</p>
        </span>
        <span className={styles.tag}>
          <FaDollarSign size={25} color="#a92225" />
          <p className={styles.label}>price</p>
          <p className={styles.text}>
            {event.price ? event.price : 'бесплатно'}
          </p>
        </span>
      </div>

      <button className={styles.btn} onClick={()=>setModal(true)}>
        Зарегестрироваться на мероприятие
      </button>

    </div>
  );
};

export default AboutEvent;
