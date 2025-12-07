const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    trim: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseDuration: {
    type: String,
    required: false,
    default: ''
  },
  comments: {
    type: String,
    required: false,
    default: ''
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);
