import { useState } from 'react';
import styles from './auth.module.css';
import { loginUser } from '../../services/authService';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useMessage } from '../../hooks/useMessage';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { message, showMessage } = useMessage();

  const handleLogin = async e => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      showMessage('fill in all the fields', true);
      return;
    }

    try {
      await loginUser(userData.email, userData.password);
      navigate('/');
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };

  return (
    <div className={styles.authPage}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <Input
          name="email"
          value={userData.email}
          label="email"
          type="email"
          onChange={val =>
            setUserData(prev => ({ ...prev, email: val }))
          }
        />
        <div className={styles.con}>
          <Input
            name="password"
            value={userData.password}
            label="password"
            type={showPassword ? 'text' : 'password'}
            onChange={val =>
              setUserData(prev => ({ ...prev, password: val }))
            }
          />
          <button
            type="button"
            className={styles.showPasswordBtn}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" className={styles.btn}>
          Login
        </button>
        {message && (
          <p className={message.error ? 'error' : 'success'}>
            {message?.text}
          </p>
        )}
        <div className={styles.container}>
          <div className={styles.auth__line}></div>
          <p className={styles.auth__loginHead}>
            If you don't have an account
          </p>
          <a
            className={styles.otherAuth}
            onClick={() => navigate('/register')}
          >
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
