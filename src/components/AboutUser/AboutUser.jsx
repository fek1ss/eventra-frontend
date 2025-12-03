import styles from './styles.module.css';

const AboutUser = ({name, surname, email}) => {
  return (  
    <section className={styles.about}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <h1 className={styles.shortName}>{name.slice(0,1)}{surname.slice(0,1)}</h1>
        </div>
        <div className={styles.container}>
          <h1 className={styles.name}>{name}{' '}{surname}</h1>
          <p className={styles.email}>{email}</p>
        </div>
      </div>
      <div className={styles.settings}>
        <button className={styles.btn}>edit</button>
      </div>
    </section>
  )
}

export default AboutUser;