import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/assign', label: 'Assign Mentor' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/matches', label: 'Matches' },
    { path: '/admin/sessions', label: 'Sessions' },
    { path: '/logout', label: 'Logout' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-indigo-700 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-white text-indigo-700' : 'hover:bg-indigo-600'
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

export default Sidebar;
