import { BASE_URL } from './api';

/**
 * Fetch user statistics by user ID
 * Sends a GET request to /users/:user_id/stats
 * Returns user statistics data or throws an error if request fails
 */
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
