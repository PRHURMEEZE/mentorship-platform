import React, { useState, useEffect } from 'react';
import API from '../api/axios';

const skillsList = [
  'UI/UX',
  'Marketing',
  'Frontend Development',
  'Backend Development',
  'Product Management',
  'Data Analysis',
  'Cybersecurity',
  'AI/ML',
];

const Profile: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    bio: '',
    skills: [] as string[],
    goals: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/users/me');
        const { name, profile } = res.data;
        setForm({
          name: name || '',
          bio: profile?.bio || '',
          skills: profile?.skills || [],
          goals: profile?.goals || '',
        });
      } catch (err) {
        console.error('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  const handleSkillToggle = (skill: string) => {
    const updated = form.skills.includes(skill)
      ? form.skills.filter((s) => s !== skill)
      : [...form.skills, skill];
    setForm({ ...form, skills: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.put('/users/me/profile', form);
      alert('Profile updated!');
    } catch (err) {
      alert('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6">
        Complete Your Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1 text-sm font-medium">Short Bio</label>
          <textarea
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-1 text-sm font-medium">Skills (select multiple)</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skillsList.map((skill) => (
              <label key={skill} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.skills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                  className="accent-indigo-600"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div>
          <label className="block mb-1 text-sm font-medium">What are your goals?</label>
          <textarea
            value={form.goals}
            onChange={(e) => setForm({ ...form, goals: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Button */}
        <div className="text-right">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
