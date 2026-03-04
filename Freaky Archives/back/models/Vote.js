const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    voteValue: {
        type: Number,
        enum: [1, -1], // 1: upvote, -1: downvote
        required: true
    }
}, { timestamps: true });

// Unique to prevent multiple votes by the same user on the same post
voteSchema.index({ userId: 1, postId: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);