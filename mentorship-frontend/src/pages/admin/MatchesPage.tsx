import React, { useEffect, useState } from 'react';
import API from '../../api/axios';

const MatchesPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    API.get('/match')
      .then((res) => setMatches(res.data))
      .catch((err) => console.error('Failed to load matches', err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mentor-Mentee Matches</h2>
      <ul className="space-y-2">
        {matches.map((match: any) => (
          <li key={match._id} className="border p-3 rounded bg-white shadow">
            Mentor: {match.mentor?.name} — Mentee: {match.mentee?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesPage;