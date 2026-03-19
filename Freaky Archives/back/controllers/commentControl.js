const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {      
        if (!req.session.user) {
            return res.status(401).json({ message: "Nah dawg, we don't allow anonymussy replies" });
        }

        const { content, quote, post, state } = req.body;

        let stuff = {};

        if (quote) {
            stuff.quote = quote
        }
        
        
        const newComment = await Comment.create({
            content: content,
            post: post,
            stuff});

        res.status(201).json({ message: "Comment sent", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};