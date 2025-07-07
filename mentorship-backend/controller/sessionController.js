const Availability = require('../models/availabilityModel');
const Session = require('../models/sessionModel');

// Submit feedback (mentee or mentor)
exports.submitFeedback = async (req, res) => {
  const sessionId = req.params.id;
  const { menteeRating, menteeComment, mentorComment } = req.body;
  const userId = req.user.userId;

  try {
    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    const isMentee = session.mentee.toString() === userId;
    const isMentor = session.mentor.toString() === userId;

    if (!isMentee && !isMentor) {
      return res.status(403).json({ message: 'You are not part of this session' });
    }

    if (isMentee) {
      session.feedback.menteeRating = menteeRating;
      session.feedback.menteeComment = menteeComment;
    }

    if (isMentor) {
      session.feedback.mentorComment = mentorComment;
    }

    // Optionally mark session as completed
    session.status = 'COMPLETED';

    await session.save();

    res.json({ message: 'Feedback submitted', session });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit feedback', error: err.message });
  }
};

// MENTOR: Set availability
exports.setAvailability = async (req, res) => {
  const { dayOfWeek, startTime, endTime } = req.body;

  try {
    const availability = await Availability.create({
      mentor: req.user.userId,
      dayOfWeek,
      startTime,
      endTime
    });

    res.status(201).json({ message: 'Availability set', availability });
  } catch (err) {
    res.status(500).json({ message: 'Error setting availability', error: err.message });
  }
};

// MENTEE: View mentor availability
exports.getMentorAvailability = async (req, res) => {
  try {
    const availability = await Availability.find({ mentor: req.params.mentorId });
    res.json(availability);
  } catch (err) {
    res.status(500).json({ message: 'Error getting availability', error: err.message });
  }
};

// MENTEE: Book a session
exports.bookSession = async (req, res) => {
  const { mentorId, date, startTime, endTime } = req.body;

  try {
    const session = await Session.create({
      mentor: mentorId,
      mentee: req.user.userId,
      date,
      startTime,
      endTime
    });

    res.status(201).json({ message: 'Session booked', session });
  } catch (err) {
    res.status(500).json({ message: 'Error booking session', error: err.message });
  }
};

// BOTH: View upcoming sessions
exports.getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({
      $or: [
        { mentor: req.user.userId },
        { mentee: req.user.userId }
      ],
      date: { $gte: new Date() }
    }).sort({ date: 1 });

    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch sessions', error: err.message });
  }
};
