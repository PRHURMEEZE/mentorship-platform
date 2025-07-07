// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'mentor', 'mentee'], default: 'mentee' },
  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    industry: String,
    goals: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
