// backend/controllers/authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Helper to create JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });
};

// Register User
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password: hash });

    const token = createToken(user._id);

    res.status(201).json({ user: user._id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) throw Error('Email not registered');

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw Error('Incorrect password');

    const token = createToken(user._id);

    res.status(200).json({ user: user._id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
