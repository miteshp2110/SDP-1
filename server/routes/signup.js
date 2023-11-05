const express = require('express');
const router = express.Router();
const User =require('../model/user.js')
// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    // Create a new user document and save it to the database
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful', user: newUser });
  } catch (error) {
    console.error('Signup error', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
