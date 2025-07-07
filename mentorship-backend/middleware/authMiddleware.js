require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET;
console.log('🔑 Secret used for verify:', JWT_SECRET);


// Middleware: Check if user is logged in
exports.protect = async (req, res, next) => {
  console.log('🔒 Middleware triggered');  // 👈 Add this at the top

  const authHeader = req.headers.authorization;
  console.log('🔒 Auth Header:', authHeader);  // 👈 Add this too

  if (!authHeader?.startsWith('Bearer '))
    return res.status(401).json({ message: 'Unauthorized: No token provided' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // ✅ Use the constant
    req.user = {
      userId: decoded.userId,  // ✅ this matches your token payload now
      role: decoded.role
    };
    next();
  } catch (err) {
    console.log('🔒 Token Error:', err.message);  // 👈 Log JWT error
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};


// restrictTo: only allow certain roles to access the route
exports.restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: Insufficient permission' });
    }
    next();
  };
};
