import React, { useEffect, useState } from 'react';
import API from '../../api/axios';

const AssignPage = () => {
  const [users, setUsers] = useState<{ _id: string; name: string; role: string }[]>([]);
  const [mentorId, setMentorId] = useState('');
  const [menteeId, setMenteeId] = useState('');

  useEffect(() => {
    API.get('/admin/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('Error loading users:', err));
  }, []);

  const handleAssign = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.put('/admin/assign', { mentorId, menteeId });
      alert('Mentor assigned successfully!');
    } catch (err) {
      alert('Assignment failed');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Assign Mentor to Mentee</h2>
      <form onSubmit={handleAssign} className="space-y-4">
        <div>
          <label className="block mb-1">Select Mentee:</label>
          <select
            value={menteeId}
            onChange={(e) => setMenteeId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            {users
              .filter((u: any) => u.role === 'mentee')
              .map((mentee) => (
                <option key={mentee._id} value={mentee._id}>
                  {mentee.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Select Mentor:</label>
          <select
            value={mentorId}
            onChange={(e) => setMentorId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            {users
              .filter((u: any) => u.role === 'mentor')
              .map((mentor) => (
                <option key={mentor._id} value={mentor._id}>
                  {mentor.name}
                </option>
              ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Assign Mentor
        </button>
      </form>
    </div>
  );
};

export default AssignPage;