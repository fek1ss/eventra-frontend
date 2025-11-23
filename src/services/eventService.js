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
  const res = await fetch(`${BASE_URL}/events/latest`, { headers: getAuthHeaders() });
  return res.json();
};

// Создать мероприятие (только админ)
export const createEvent = async (eventData) => {
  const formData = new FormData();
  for (const key in eventData) {
    formData.append(key, eventData[key]);
  }

  const res = await fetch(`${BASE_URL}/events`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  });

  return res.json();
};

// Обновить мероприятие
export const updateEvent = async (id, eventData) => {
  const formData = new FormData();
  for (const key in eventData) {
    formData.append(key, eventData[key]);
  }

  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    body: formData
  });

  return res.json();
};

// Удалить мероприятие
export const deleteEvent = async (id) => {
  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return res.json();
};
