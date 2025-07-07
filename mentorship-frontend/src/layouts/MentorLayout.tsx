import React from 'react';
import MentorSidebar from '../components/MentorSidebar';
import LogoutButton from '../components/LogoutButton';

const MentorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:block">
        <MentorSidebar />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Mentor Dashboard</h1>
          <div className="flex items-center space-x-4">
            <LogoutButton />
          </div>
        </header>

        {/* Content */}
        <main className="flex-grow p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MentorLayout;