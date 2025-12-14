import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  if (!user || !token) {
    alert('Перезайдите в аккаунт <3');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
