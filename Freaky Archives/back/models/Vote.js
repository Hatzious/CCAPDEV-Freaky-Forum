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
}, { timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }});

voteSchema.index({ userId: 1, postId: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);