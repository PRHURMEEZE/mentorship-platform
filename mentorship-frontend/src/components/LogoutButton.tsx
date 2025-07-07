import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      title="Logout"
      className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-800 transition"
    >
      <ArrowRightOnRectangleIcon className="h-6 w-6 text-red-500 hover:text-red-600" />
    </button>
  );
};

export default LogoutButton;
