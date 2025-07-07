import React from 'react';
import { NavLink } from 'react-router-dom';

const MentorSidebar = () => {
  const links = [
    { path: '/mentor', label: 'Dashboard' },
    { path: '/mentor/mentees', label: 'Mentees' },
    { path: '/mentor/sessions', label: 'Sessions' },
    { path: '/mentor/messages', label: 'Messages' },
  ];

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 shadow md:h-screen">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Mentor Panel
      </h2>
      <nav className="space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block w-full text-left text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md ${
                isActive ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white' : 'hover:text-indigo-600 dark:hover:text-indigo-400'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default MentorSidebar;
