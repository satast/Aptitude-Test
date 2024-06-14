const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const cors = require('cors');
const TestResult = require('./models/TestResult');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'AzEMT3dsxCFviaTmvl9/D2SBLRizBXSowlebdsGs7lQ=');
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

app.post('/api/submit-test', protect, async (req, res) => {
  const { answers, score } = req.body;

  try {
    const testResult = new TestResult({
      user: req.user._id,
      score,
      answers
    });
    await testResult.save();
    
    req.user.testSubmitted = true; // Mark test as submitted
    await req.user.save();

    res.status(201).json({ message: 'Test result submitted successfully' });
  } catch (error) {
    console.error('Error submitting test result', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
