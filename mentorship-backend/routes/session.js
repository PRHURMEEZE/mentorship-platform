const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware');
const {
  setAvailability,
  getMentorAvailability,
  bookSession,
  getMySessions,
  submitFeedback
} = require('../controller/sessionController');

// Mentor: Set availability
router.post('/availability', protect, restrictTo('MENTOR'), setAvailability);

// Mentee: View mentor availability
router.get('/availability/:mentorId', protect, restrictTo('MENTEE'), getMentorAvailability);

// Mentee: Book session
router.post('/book', protect, restrictTo('MENTEE'), bookSession);

// All: Get upcoming sessions
router.get('/my', protect, getMySessions);

// Submit Feedback
router.put('/:id/feedback', protect, submitFeedback);

module.exports = router;
