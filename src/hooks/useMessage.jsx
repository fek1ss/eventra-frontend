import { useState } from "react";

/**
 * Custom hook for displaying temporary messages (notifications)
 * Provides `message` state and `showMessage` function to trigger messages
 * 
 * @param text - message text
 * @param error - boolean flag for error messages (default: false)
 * @param timeout - duration in ms before message disappears (default: 5000)
 */
export const useMessage = () => {
  const [message, setMessage] = useState(null);

  /**
   * Display a temporary message
   * Automatically clears the message after the specified timeout
   */
  const showMessage = (text, error = false, timeout = 5000) => {
    setMessage({ text, error });
    setTimeout(() => setMessage(null), timeout);
  };

  return { message, showMessage };
};
