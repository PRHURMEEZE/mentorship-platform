const User = require('../models/userModel');

// GET current user's profile
exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

// UPDATE current user's profile
exports.updateMyProfile = async (req, res) => {
  try {
    const { name, bio, skills, goals } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      {
        name,
        profile: {
          bio,
          skills,
          goals
        }
      },
      { new: true }
    ).select('-passwordHash');

    res.json({ message: 'Profile updated', user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Profile update failed', error: err.message });
  }
};
