import express from 'express';
import Resume from '../models/resume.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create a new resume
router.post('/', auth, async (req, res) => {
    try {
        const resume = new Resume({
            ...req.body,
            user: req.user._id
        });

        await resume.save();
        res.status(201).json(resume);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all resumes for the logged-in user
router.get('/', auth, async (req, res) => {
    try {
        const resumes = await Resume.find({ user: req.user._id });
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific resume by ID
router.get('/:id', auth, async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a resume
router.patch('/:id', auth, async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        Object.assign(resume, req.body);
        resume.updatedAt = new Date();
        await resume.save();
        res.json(resume);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a resume
router.delete('/:id', auth, async (req, res) => {
    try {
        const resume = await Resume.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.json({ message: 'Resume deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;