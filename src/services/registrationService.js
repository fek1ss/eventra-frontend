import { getAuthHeaders, BASE_URL } from './api';

/**
 * Register the current user for an event
 * Sends POST request with registration data
 * Uses authentication headers to identify the user
 */
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

/**
 * Get all events a specific user is registered for
 * Sends GET request to /registration/:userId
 * Uses authentication headers to access user-specific data
 */
export const getUserEvents = async userId => {
  const res = await fetch(`${BASE_URL}/registration/${userId}`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};
