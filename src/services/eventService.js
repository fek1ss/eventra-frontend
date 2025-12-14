import { getAuthHeaders, BASE_URL } from './api';

/**
 * Fetch all events from the backend
 * Supports optional filtering by category and organization
 * Returns an empty array if an error occurs
 */
export const getEvents = async (category = '', organization = '') => {
  try {
    let url = `${BASE_URL}`;
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (organization) params.append('organization', organization);

    const response = await fetch(`${url}/events?${params.toString()}`);
    if (!response.ok) throw new Error('Ошибка при загрузке событий');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


/**
 * Fetch a single event by its ID
 * Uses authentication headers to access protected resources if needed
 */
export const getEventById = async (id) => {
  const res = await fetch(`${BASE_URL}/events/${id}`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};


/**
 * Create a new event
 * Sends FormData to backend (supports files, images)
 * Handles token expiration and notifies user
 */
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


/**
 * Update an existing event by ID
 * Sends FormData to backend and includes auth token
 */
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


/**
 * Delete an event by ID
 * Requires authentication
 */
export const deleteEvent = async id => {
  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.json();
};
