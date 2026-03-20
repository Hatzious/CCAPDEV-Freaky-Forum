const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
    type: [{ 
        type: String, 
        lowercase: true 
    }],
    default: ["empty"]},
    createdAt: {
        type: Date,
        default: Date.now
    },
    score: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    commentsLocked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }});

module.exports = mongoose.model('Post', PostSchema);