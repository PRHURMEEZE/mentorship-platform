import React from 'react';
import Sidebar from '../pages/Sidebar';
import LogoutButton from '../components/LogoutButton';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow p-4 sticky top-0 z-10 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-indigo-600">
            Mentorship Platform Admin
          </h1>
          <LogoutButton />
        </header>

        {/* Main content */}
        <main className="flex-grow overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
