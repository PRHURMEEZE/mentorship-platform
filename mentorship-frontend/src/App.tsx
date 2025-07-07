import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Unauthorized from './pages/Unauthorized';

import ProtectedRoute from './components/ProtectedRoute';

import AdminDashboard from './pages/AdminDashboard';
import MentorDashboard from './pages/MentorDashboard';
import MenteeDashboard from './pages/MenteeDashboard';

import UsersPage from './pages/admin/UsersPage';
import AssignPage from './pages/admin/AssignPage';
import MatchesPage from './pages/admin/MatchesPage';
import SessionsPage from './pages/admin/SessionsPage';


import MenteesPage from './pages/mentor/MenteesPage';
import MentorSessionsPage from './pages/mentor/SessionsPage';
import MentorMessagesPage from './pages/mentor/MessagesPage';
import DashboardLayout from './components/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout>
                  <AdminDashboard />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout>
                  <UsersPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/assign"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout>
                  <AssignPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/matches"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout>
                  <MatchesPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/sessions"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout>
                  <SessionsPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            {/* Mentor Routes */}
            <Route
              path="/mentor"
              element={
                <ProtectedRoute role="mentor">
                  <DashboardLayout>
                    <MentorDashboard />
                    </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/mentor/mentees"
              element={
                <ProtectedRoute role="mentor">
                  <DashboardLayout>
                    <MenteesPage />
                    </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/mentor/sessions"
              element={
                <ProtectedRoute role="mentor">
                  <DashboardLayout>
                    <MentorSessionsPage />
                    </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/mentor/messages"
              element={
                <ProtectedRoute role="mentor">
                  <DashboardLayout>
                    <MentorMessagesPage />
                    </DashboardLayout>
                </ProtectedRoute>
              }
            />

            {/* Mentee Dashboard */}
            <Route
              path="/mentee"
              element={
                <ProtectedRoute role="mentee">
                  <DashboardLayout>
                    <MenteeDashboard />
                    </DashboardLayout>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
