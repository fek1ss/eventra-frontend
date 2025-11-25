import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/Register';
import Admin from './pages/AdminPage/Admin';
import Event from './pages/Event/Event';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user?.role === 'admin' && (
            <Route path="/admin" element={<Admin />} />
          )}
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
