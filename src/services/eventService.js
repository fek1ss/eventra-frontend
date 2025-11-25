import { getAuthHeaders, BASE_URL } from './api';

// Получить все мероприятия (с фильтром по категории)
export const getEvents = async (category = '') => {
  let url = `${BASE_URL}/events`;
  if (category) url += `?category=${encodeURIComponent(category)}`;
  const res = await fetch(url, { headers: getAuthHeaders() });
  return res.json();
};

// Получить одно мероприятие
export const getLatestEvent = async () => {
  const res = await fetch(`${BASE_URL}/events/latest`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

// Создать мероприятие (только админ)
export const createEvent = async eventData => {
  try {
    const formData = new FormData();
    for (const key in eventData) {
      formData.append(key, eventData[key]);
    }

    const res = await fetch(`${BASE_URL}/events`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      const errorMessage =
        data.message || 'Произошла ошибка при создании мероприятия';

      // 3. ✨ Специальная проверка на просроченный токен (401 и текст сообщения)
      if (res.status === 401 && errorMessage === 'Invalid token') {
        localStorage.removeItem('token');
        alert(
          'Срок действия сессии истек. Пожалуйста, войдите в аккаунт снова.',
        );
        window.location.href = '/login';
      }
      throw new Error(errorMessage);
    }

    return data;
  } catch (err) {
    throw new Error(err.message || 'Что-то пошло не так');
  }
};

// Обновить мероприятие
export const updateEvent = async (id, eventData) => {
  const formData = new FormData();
  for (const key in eventData) {
    formData.append(key, eventData[key]);
  }

  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: formData,
  });

  return res.json();
};

// Удалить мероприятие
export const deleteEvent = async id => {
  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.json();
};
