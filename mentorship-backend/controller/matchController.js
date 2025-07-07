const User = require('../models/userModel');
const MatchRequest = require('../models/matchRequest');

// Mentees: Get list of mentors (with filters)
exports.getMentors = async (req, res) => {
  try {
    const { skill, industry } = req.query;

    const query = { role: 'MENTOR' };

    if (skill) query['profile.skills'] = skill;
    if (industry) query['profile.industry'] = industry;

    const mentors = await User.find(query).select('-password');

    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching mentors', error: err.message });
  }
};

// Mentee: Send mentorship request
exports.sendRequest = async (req, res) => {
  const { mentorId } = req.body;
  const menteeId = req.user.userId;

  try {
    const existing = await MatchRequest.findOne({ mentee: menteeId, mentor: mentorId });

    if (existing) {
      return res.status(400).json({ message: 'Request already exists' });
    }

    const request = await MatchRequest.create({
      mentee: menteeId,
      mentor: mentorId
    });

    res.status(201).json({ message: 'Request sent', request });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send request', error: err.message });
  }
};

// Mentor: View incoming requests
exports.getIncomingRequests = async (req, res) => {
  try {
    const requests = await MatchRequest.find({ mentor: req.user.userId })
      .populate('mentee', 'name email profile');

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch requests', error: err.message });
  }
};

// Mentor: Accept or Reject a request
exports.updateRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // ACCEPTED or REJECTED

  if (!['ACCEPTED', 'REJECTED'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const request = await MatchRequest.findById(id);

    if (!request || request.mentor.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized or not found' });
    }

    request.status = status;
    await request.save();

    res.json({ message: `Request ${status.toLowerCase()}`, request });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update request', error: err.message });
  }
};
