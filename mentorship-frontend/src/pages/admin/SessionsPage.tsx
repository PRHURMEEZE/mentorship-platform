import React, { useEffect, useState } from 'react';
import API from '../../api/axios';

const SessionsPage = () => {
  const [sessions, setSessions] = useState<{ _id: string; date: string; mentor?: { name: string }; mentee?: { name: string } }[]>([]);

  useEffect(() => {
    API.get('/session')
      .then((res) => setSessions(res.data))
      .catch((err) => console.error('Failed to load sessions', err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Sessions</h2>
      <ul className="space-y-2">
        {sessions.map((s: any) => (
          <li key={s._id} className="border p-3 rounded bg-white shadow">
            {s.date} | Mentor: {s.mentor?.name} | Mentee: {s.mentee?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionsPage;

