import React from "react";

const MenteeDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 shadow md:h-screen">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Mentee Panel</h2>
        <nav className="space-y-3">
          <button className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
            Dashboard
          </button>
          <button className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
            Mentor Info
          </button>
          <button className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
            Sessions
          </button>
          <button className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
            Messages
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Welcome, Mentee 🎓</h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold">Assigned Mentor</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">John Smith</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold">Next Session</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Thursday at 4:00 PM</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold">Messages</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">2 unread messages</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenteeDashboard;
