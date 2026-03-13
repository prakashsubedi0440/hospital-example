import express from "express";
import Notice from "../models/Notice.js";
import verifyAdmin from "../middleware/auth.js";

const router = express.Router();
// Get all notices
// Get all notices
router.get('/notices', async (req, res) => {
  try {
    const notices = await Notice.find().sort({ date: -1 }); // newest first
    res.json(notices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error when GET Request' });
  }
});

// Add a notice (admin only)
router.post('/notices', verifyAdmin, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNotice = new Notice({ title, content });
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error when POST Request' });
  }
});

// Delete a notice (admin only)
router.delete('/notices/:id', verifyAdmin, async (req, res) => {
  try {
    const deleted = await Notice.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Notice not found.' });
    }
    res.json({ message: 'Notice deleted.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error when DELETE Request' });
  }
});

export default router;