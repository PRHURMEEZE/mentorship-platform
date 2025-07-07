import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md hidden md:block">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Dashboard</h3>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="block px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700">
                My Profile
              </Link>
            </li>
            {/* Add more links if needed */}
          </ul>
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
            Mentorship Platform
          </h1>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
