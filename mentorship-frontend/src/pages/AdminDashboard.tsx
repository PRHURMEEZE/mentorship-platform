import React, { useEffect, useState } from 'react';
import API from '../api/axios';
import DashboardLayout from '../components/DashboardLayout';

const AdminDashboard = () => {
  const [users, setUsers] = useState<{ _id: string; name: string; email: string; role: string }[]>([]);
  const [matches, setMatches] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [mentorId, setMentorId] = useState('');
  const [menteeId, setMenteeId] = useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [usersRes, matchesRes, sessionsRes] = await Promise.all([
          API.get('/admin/users'),
          API.get('/match'),
          API.get('/session'),
        ]);

        setUsers(usersRes.data);
        setMatches(matchesRes.data);
        setSessions(sessionsRes.data);
      } catch (err) {
        console.error('Error loading admin data:', err);
      }
    };

    fetchAdminData();
  }, []);

  const assignMentor = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.put('/admin/assign', { mentorId, menteeId });
      alert('Mentor assigned!');
    } catch (err) {
      alert('Assignment failed');
    }
  };

  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Admin Dashboard</h2>

      {/* Users Table */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">All Users</h3>
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2 capitalize">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Matches */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">All Matches</h3>
        <ul className="space-y-2">
          {matches.map((match: any) => (
            <li key={match._id} className="bg-white p-3 shadow rounded-md">
              <span className="font-medium text-gray-700">Mentor:</span> {match.mentor?.name} &nbsp;|&nbsp;
              <span className="font-medium text-gray-700">Mentee:</span> {match.mentee?.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Assign Mentor */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Assign Mentor to Mentee</h3>
        <form onSubmit={assignMentor} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={menteeId}
              onChange={(e) => setMenteeId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Mentee</option>
              {users
                .filter((u) => u.role === 'mentee')
                .map((mentee) => (
                  <option key={mentee._id} value={mentee._id}>
                    {mentee.name}
                  </option>
                ))}
            </select>

            <select
              value={mentorId}
              onChange={(e) => setMentorId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Mentor</option>
              {users
                .filter((u) => u.role === 'mentor')
                .map((mentor) => (
                  <option key={mentor._id} value={mentor._id}>
                    {mentor.name}
                  </option>
                ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Assign Mentor
          </button>
        </form>
      </section>

      {/* Sessions */}
      <section>
        <h3 className="text-xl font-semibold mb-4">All Sessions</h3>
        <ul className="space-y-2">
          {sessions.map((session: any) => (
            <li key={session._id} className="bg-white p-3 shadow rounded-md">
              <span className="font-medium text-gray-700">Date:</span> {session.date} &nbsp;|&nbsp;
              <span className="font-medium text-gray-700">Mentor:</span> {session.mentor?.name} &nbsp;|&nbsp;
              <span className="font-medium text-gray-700">Mentee:</span> {session.mentee?.name}
            </li>
          ))}
        </ul>
      </section>
    </DashboardLayout>
  );
};

export default AdminDashboard;
