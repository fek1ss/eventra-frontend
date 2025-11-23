export const BASE_URL = 'http://localhost:5000'; // или URL твоего бекенда на Railway

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // хранение JWT после логина
  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : ''
  };
};
