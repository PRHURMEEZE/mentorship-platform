const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware');

// Mentor: Add availability
router.post('/availability', protect, restrictTo('MENTOR'), async (req, res) => {
  const { day, startTime, endTime } = req.body;
  // Replace with your logic later
  res.json({ message: 'Availability saved', data: { day, startTime, endTime } });
});

module.exports = router;
