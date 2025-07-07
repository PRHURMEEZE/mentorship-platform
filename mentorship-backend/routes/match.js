const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware');
const {
  getMentors,
  sendRequest,
  getIncomingRequests,
  updateRequestStatus
} = require('../controller/matchController');

// Mentees: Get mentors (with filter)
router.get('/mentors', protect, restrictTo('MENTEE'), getMentors);

// Mentees: Send request
router.post('/request', protect, restrictTo('MENTEE'), sendRequest);

// Mentor: View requests
router.get('/requests', protect, restrictTo('MENTOR'), getIncomingRequests);

// Mentor: Accept / Reject
router.put('/requests/:id', protect, restrictTo('MENTOR'), updateRequestStatus);

module.exports = router;
