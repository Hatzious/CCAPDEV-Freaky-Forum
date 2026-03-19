const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {      
        if (!req.session.user) {
            return res.status(401).json({ message: "Nah dawg, we don't allow anonymussy replies" });
        }

        const { author, post, content } = req.body;

        if (content.length > 0) {

        }
        
        
        const newComment = await Comment.create({
            author: author,
            postId: post,
            stuff});

        res.status(201).json({ message: "Comment sent", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};