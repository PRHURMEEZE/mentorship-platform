const User = require('../models/userModel');
const MatchRequest = require('../models/matchRequest');
const Session = require('../models/sessionModel');

// View all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get users', error: err.message });
  }
};

// View all mentorship matches
exports.getAllMatches = async (req, res) => {
  try {
    const matches = await MatchRequest.find()
      .populate('mentee', 'name email profile')
      .populate('mentor', 'name email profile');

    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get matches', error: err.message });
  }
};

// Get total number of sessions
exports.getSessionStats = async (req, res) => {
  try {
    const totalSessions = await Session.countDocuments();
    const completedSessions = await Session.countDocuments({ status: 'COMPLETED' });

    res.json({
      totalSessions,
      completedSessions
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to get session stats', error: err.message });
  }
};

// Admin manually assigns mentor to mentee
exports.manualAssignMentor = async (req, res) => {
  const { mentorId, menteeId } = req.body;

  try {
    // Check if already matched
    const existing = await MatchRequest.findOne({ mentor: mentorId, mentee: menteeId });
    if (existing) {
      return res.status(400).json({ message: 'Match already exists' });
    }

    const match = await MatchRequest.create({
      mentor: mentorId,
      mentee: menteeId,
      status: 'ACCEPTED'
    });

    res.status(201).json({ message: 'Mentor assigned', match });
  } catch (err) {
    res.status(500).json({ message: 'Assignment failed', error: err.message });
  }
};



