import { BASE_URL } from './api';

export const userStatus = async user_id => {
  try {
    const res = await fetch(
      `${BASE_URL}/users/${user_id}/stats`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Status request failed');
    }
    return await res.json();
  } catch (err) {
    throw new Error(err.message || 'Something went wrong');
  }
};
