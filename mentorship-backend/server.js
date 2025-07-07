// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/admin')
const mentorRoutes = require('./routes/mentor');
const menteeRoutes = require('./routes/mentee');
const userRoutes = require('./routes/userRoutes');
const matchRoutes = require('./routes/match');
const sessionRoutes = require('./routes/session');


console.log('🔄 Loading .env...');
dotenv.config();
console.log('✅ Loaded JWT_SECRET:', process.env.JWT_SECRET);
console.log('✅ Loaded PORT:', process.env.PORT);
console.log('✅ Loaded MONGO_URI:', process.env.MONGO_URI);

const app = express();
console.log('✅ Express app created');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
console.log('✅ Middleware registered');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/mentor', mentorRoutes);
app.use('/api/mentee', menteeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/session', sessionRoutes);
console.log('✅ Routes registered');

app.get('/', (req, res) => res.send('API is running...'));

// DB + Server Init
console.log('🔌 Connecting to MongoDB...');
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => console.error(err));
