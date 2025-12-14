/**
 * Format a date string into a human-readable format
 * Example output: "December 14, 2025"
 *
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string
 */
export const formatDate = dateString => {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Convert date to locale string with the specified options
  return date.toLocaleDateString('en-US', options);
};
