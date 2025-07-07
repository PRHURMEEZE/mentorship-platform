const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// Mentee: Browse mentors
router.get('/mentors', protect, restrictTo('MENTEE'), async (req, res) => {
  try {
    const mentors = await User.find({ role: 'MENTOR' }).select('name email profile');
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch mentors', error: err.message });
  }
});

module.exports = router;
