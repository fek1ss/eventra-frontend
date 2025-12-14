import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/Register';
import Admin from './pages/AdminPages/Admin';
import Event from './pages/Event/Event';
import User from './pages/UserPage/User';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/loyaut/MainLayout';
import AdminLayout from './components/loyaut/AdminLayout';

function App() {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin pages */}
        {user?.role === 'admin' && (
          <>
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <Admin />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/:id"
              element={
                <AdminLayout>
                  <Admin />
                </AdminLayout>
              }
            />
          </>
        )}

        {/* Event page */}
        <Route
          path="/event/:id"
          element={
            <MainLayout>
              <Event />
            </MainLayout>
          }
        />

        {/* Protected user profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <User />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Fallback for unknown routes */}
        <Route
          path="*"
          element={
            <MainLayout>
              <p>404 | Page Not Found</p>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
