import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/matches', label: 'Matches' },
    { path: '/admin/sessions', label: 'Sessions' },
    { path: '/admin/assign', label: 'Assign Mentor' },
    { path: '/logout', label: 'Logout' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-indigo-700 text-white p-5 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-indigo-600 ${
              isActive ? 'bg-white text-indigo-700' : ''
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
