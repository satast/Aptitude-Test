const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  score: {
    type: Number,
    required: true
  },
  answers: {
    type: Object,
    required: true
  }
}, {
  timestamps: true
});

const TestResult = mongoose.model('TestResult', testResultSchema);

module.exports = TestResult;
