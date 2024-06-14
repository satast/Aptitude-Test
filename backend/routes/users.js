const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if user has already submitted the test
    if (user.testSubmitted) {
      return res.status(403).json({ message: 'User has already submitted the test and cannot login again' });
    }

    // If user exists and password matches
    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id }, 'AzEMT3dsxCFviaTmvl9/D2SBLRizBXSowlebdsGs7lQ=', { expiresIn: '30d' });
      res.json({ token });
    } else {
      // If password doesn't match
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Check if a user has completed their test
router.get('/check-completion/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ testSubmitted: user.testSubmitted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Reset test submission status for a user
router.put('/reset-submission/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.testSubmitted = false;
    await user.save();
    res.json({ message: 'Test submission status reset successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
