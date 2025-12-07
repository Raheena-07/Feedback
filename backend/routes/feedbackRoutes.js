const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const { courseId, courseName, courseDuration, comments, rating } = req.body;
    if (!courseId || !courseName || rating === undefined) {
      return res.status(400).json({ message: 'courseId, courseName and rating are required' });
    }
    const fb = new Feedback({ courseId, courseName, courseDuration, comments, rating });
    const saved = await fb.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const { courseName, courseDuration, comments, rating } = req.body;
    const updated = await Feedback.findByIdAndUpdate(req.params.id, { courseName, courseDuration, comments, rating }, { new: true });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const removed = await Feedback.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
