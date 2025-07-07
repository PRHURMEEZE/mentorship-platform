import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-6 shadow-md md:h-screen">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Mentorship</h2>
        <nav className="space-y-4" aria-label="Sidebar navigation">
          <button className="block w-full text-left px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 transition">
            Home
          </button>
          <button className="block w-full text-left px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 transition">
            Profile
          </button>
          <button className="block w-full text-left px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 transition">
            Requests
          </button>
          <button className="block w-full text-left px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 transition">
            Messages
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Welcome, Stephen 👋</h1>
        </header>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold">New Mentees</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">You have 8 new mentee requests</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold">Session Requests</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">3 pending session approvals</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold">Messages</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">5 unread messages</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
