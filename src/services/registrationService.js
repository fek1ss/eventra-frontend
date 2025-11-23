import { getAuthHeaders, BASE_URL } from './api';

// Зарегистрироваться на мероприятие
export const registerForEvent = async (registrationData) => {
  const res = await fetch(`${BASE_URL}/registration`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(registrationData)
  });
  return res.json();
};

// Получить историю мероприятий пользователя
export const getUserEvents = async (userId) => {
  const res = await fetch(`${BASE_URL}/registration/${userId}`, {
    headers: getAuthHeaders()
  });
  return res.json();
};
