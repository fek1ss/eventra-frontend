import { getAuthHeaders, BASE_URL } from './api';

// Зарегистрироваться на мероприятие
export const registerForEvent = async registrationData => {
  try {
    const res = await fetch(`${BASE_URL}/registration`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(registrationData),
    });
    const data = await res.json();
    

    if (!res.ok)
      throw new Error(data.message || 'Registration failed, please try later');

    return data;
  } catch (err) {
    throw new Error(err.message || 'Something went wrong');
  }
};

// Получить историю мероприятий пользователя
export const getUserEvents = async userId => {
  const res = await fetch(`${BASE_URL}/registration/${userId}`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};
