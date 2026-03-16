const Post = require('../models/Post');
const User = require('../models/User');

exports.postFilter = async (req, res) => {
    try {
        const { sorter, name, title, scorer, viewer, tags } = req.query;
        let quarry = {};
        let sorted = { createdAt: -1 };

        if (sorter && sorter === "old") {
            sorted = { createdAt: 1 };
        }

        if (name) {
            const authorUser = await User.findOne({ username: name });
            if (authorUser) {
                quarry.author = authorUser._id;
            } else {
                return res.json([]); 
            }
        }

        if (title) {
            quarry.title = { $regex: title, $options: 'i' };
        }

        if (scorer === "most") {
            sorted = { score: -1 };
        } else if (scorer === "least"){
            sorted = { score: 1 };
        }

        if (viewer === "most") {
            sorted = { views: -1 };
        } else if (viewer === "least") {
            sorted = { views: 1 };
        }

        if (tags) {
            let tagList;
            if (Array.isArray(tags)) {
                tagList = tags.map(t => t.toLowerCase());
            } else if (tags.includes(',')) {
                tagList = tags.split(',').map(t => t.toLowerCase());
            } else {
                tagList = [tags.toLowerCase()];
            }
            quarry.tags = { $all: tagList };
        }

        const posts = await Post.find(quarry)
        .populate("author", "username profile")
        .sort(sorted);
        res.json(posts);

    } catch (err) {
        console.error("FILTER ERROR:", err); 
        res.status(500).json({ message: err.message });
    }
};

exports.createPost = async (req, res) => {
    try {
        
        if (!req.session.user) {
            return res.status(401).json({ message: "You must be logged in to make a statement." });
        }

        const { title, content, tags } = req.body;

        
        const newPost = await Post.create({
            author: req.session.user._id, 
            title,
            content,
            tags: tags || ["empty"] 
        });

        res.status(201).json({ message: "Statement Archived", post: newPost });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: "You must be logged in to delete a statement." });
        }

        const { postId } = req.params;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Statement not found." });
        }

        if (post.author.toString() !== req.session.user._id.toString()) {
            return res.status(403).json({ message: "You can only delete your own statements." });
        }

        await Post.findByIdAndDelete(postId);
        res.json({ message: "Statement deleted successfully." });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};