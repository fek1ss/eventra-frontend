import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/Register';
import Admin from './pages/AdminPages/Admin';
import Event from './pages/Event/Event';
import User from './pages/UserPage/User';

// Main application component
// Handles global routing and role-based access to pages
function App() {
  // Retrieve user data from localStorage
  // Used to control access to protected routes on the client side
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user?.role === 'admin' && (
            <>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/:id" element={<Admin />} />
            </>
          )}
          <Route path="/event/:id" element={<Event />} />
          <Route path="/profile" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
