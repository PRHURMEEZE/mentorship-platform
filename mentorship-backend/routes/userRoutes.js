const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getMyProfile,
  updateMyProfile
} = require('../controller/profileController');


router.get('/me', protect, getMyProfile);
router.put('/me/profile', protect, updateMyProfile);

module.exports = router;
