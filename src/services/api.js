export const BASE_URL = "import.meta.env.VITE_API_URL";  // или URL твоего бекенда на Railway
// http://localhost:5000
// import.meta.env.VITE_API_URL
export const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // хранение JWT после логина
  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : ''
  };
};
