import React from 'react';
import MenteeSidebar from '../components/MenteeSidebar'; // Update path if different
import LogoutButton from '../components/LogoutButton';

const MenteeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:block">
        <MenteeSidebar />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 p-4 shadow-md sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
            Mentee Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <LogoutButton />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default MenteeLayout;