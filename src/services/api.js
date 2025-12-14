// Base URL for backend API requests
export const BASE_URL = import.meta.env.VITE_API_URL;

// Returns headers for authenticated API requests
// Automatically includes JWT token from localStorage if available
export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : ''
  };
};