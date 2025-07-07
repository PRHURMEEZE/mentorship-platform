const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dayOfWeek: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
  startTime: { type: String, required: true }, // "14:00"
  endTime: { type: String, required: true }    // "16:00"
});

module.exports = mongoose.model('Availability', availabilitySchema);
