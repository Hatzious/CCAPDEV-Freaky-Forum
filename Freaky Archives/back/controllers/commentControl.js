const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {      
        if (!req.session.user) {
            return res.status(401).json({ message: "Nah dawg, we don't allow anonymussy replies" });
        }

        const { postId, content } = req.body;

        if (!postId) return res.status(400).json({ message: "Post ID missing." });

        if (!content || content.length === 0) {
            return res.status(400).json({ message: "Archive requires actual text." });
        }

        const newComment = await Comment.create({
            author: req.session.user._id, 
            postId: postId,
            content: content 
        });

        const populatedComment = await Comment.findById(newComment._id)
            .populate('author', 'username profile');

        res.status(201).json({ message: "Comment sent", comment: populatedComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.showComment = async (req, res) => {
    try {
        const { postId } = req.query;

        if (!postId) {
            return res.status(400).json({ message: "Post ID missing." });
        }

        const comments = await Comment.find({ postId: postId })
            .populate('author', 'username profile') 
            .sort({ createdAt: 1 });

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};