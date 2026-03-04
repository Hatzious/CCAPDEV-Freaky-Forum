const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    authorId: {
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
    tags: [{
        type: String,
        lowercase: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    score: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);