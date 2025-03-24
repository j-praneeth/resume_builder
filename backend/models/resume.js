import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true,
        trim: true
    },
    degree: {
        type: String,
        required: true,
        trim: true
    },
    field: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    grade: {
        type: String,
        trim: true
    }
});

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    achievements: [{
        type: String,
        trim: true
    }]
});

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        required: true
    }
});

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        trim: true
    },
    education: [educationSchema],
    experience: [experienceSchema],
    skills: [skillSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;