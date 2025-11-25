import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css';
import { useState } from 'react';
import { useMessage } from '../../hooks/useMessage';
import { registerUser } from '../../services/authService';
import Input from '../../components/Input/Input';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const { message, showMessage } = useMessage();

  const handleRegister = async e => {
    e.preventDefault();

    if (
      !userData.email ||
      !userData.password ||
      !userData.first_name ||
      !userData.last_name
    ) {
      showMessage('fill in all the fields', true);
      return;
    }

    try {
      const data = await registerUser(
        userData.first_name,
        userData.last_name,
        userData.email,
        userData.password,
      );

      if (data.message === 'Пользователь успешно зарегистрирован') {
        navigate('/');
      }
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };
  return (
    <div className={styles.authPage}>
      <h1 className={styles.title}>Registration</h1>
      <form onSubmit={handleRegister} className={styles.form}>
        <Input
          name="firstName"
          value={userData.first_name}
          label="first name"
          type="text"
          onChange={val =>
            setUserData(prev => ({ ...prev, first_name: val }))
          }
        />
        <Input
          name="lastName"
          value={userData.last_name}
          label="last name"
          type="text"
          onChange={val =>
            setUserData(prev => ({ ...prev, last_name: val }))
          }
        />
        <Input
          name="email"
          value={userData.email}
          label="email"
          type="email"
          onChange={val =>
            setUserData(prev => ({ ...prev, email: val }))
          }
        />
        <Input
          name="password"
          value={userData.password}
          label="password"
          type="password"
          onChange={val =>
            setUserData(prev => ({ ...prev, password: val }))
          }
        />
        <button type="submit" className={styles.btn}>
          Create account
        </button>
        {message && (
          <p className={message.error ? 'error' : 'success'}>
            {message?.text}
          </p>
        )}

        <div className={styles.container}>
          <div className={styles.auth__line}></div>
          <p className={styles.auth__loginHead}>
            Already have an acoount?
          </p>
          <a
            className={styles.otherAuth}
            onClick={() => navigate('/login')}
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
