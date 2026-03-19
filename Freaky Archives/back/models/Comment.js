const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: [{
        sourceId: { 
            type: mongoose.Schema.Types.ObjectId, 
            required: false, 
            refPath: 'content.source' 
        },
        text: { type: String, required: true },
        source: {
            type: String,
            default: 'none',
            enum: ['none', 'User', 'Post'] 
        },
        label: { 
            type: String, 
            default: null 
        }
    }]
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model('Comment', CommentSchema);