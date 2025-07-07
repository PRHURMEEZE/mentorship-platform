const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const {
  getAllUsers,
  getAllMatches,
  getSessionStats,
  manualAssignMentor
} = require('../controller/adminController');

router.get('/users', getAllUsers);
router.get('/matches', getAllMatches);
router.get('/stats', getSessionStats);
router.post('/assign', manualAssignMentor);

// Admin: Get all users
router.get('/users', protect, restrictTo('ADMIN'), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
});

// Admin: Update user role
router.put('/users/:id/role', protect, restrictTo('ADMIN'), async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update role', error: err.message });
  }
});

module.exports = router;
