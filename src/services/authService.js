import { BASE_URL } from './api';


/**
 * Registers a new user
 * Sends POST request to /auth/register endpoint with user data
 * Stores JWT token in localStorage on success
 */
export const registerUser = async (
  first_name,
  last_name,
  email,
  password,
) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok)
      throw new Error(data.message || 'Registration failed');

    localStorage.setItem('token', data.token);
    return data;
  } catch (err) {
    throw new Error(err.message || 'Something went wrong');
  }
};

/**
 * Logs in an existing user
 * Sends POST request to /auth/login with email and password
 * Stores JWT token and user data in localStorage
 */
export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  } catch (err) {
    throw new Error(err.message || 'Something went wrong');
  }
};

/**
 * Logs out the current user
 * Removes JWT token and user info from localStorage
 */
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
