export const BASE_URL = 'https://eventra-backend-production.up.railway.app'; // или URL твоего бекенда на Railway
// https://eventra-backend-production.up.railway.app
// http://localhost:5000
export const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // хранение JWT после логина
  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : ''
  };
};
