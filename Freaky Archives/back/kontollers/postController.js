const Post = require('../models/Post');
const Vote = require('../models/Vote');

// Create a new post
exports.createPost = async(req, res) => {
    try {
        const { title, content, tags } = req.body;

        let post = new Post({
            authorId: req.user.id,
            title,
            content,
            tags: tags || []
        });

        await post.save();

        // Populate author details
        await post.populate('authorId', 'username profile.avatarUrl');

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
}

// Get all posts with pagination
exports.getPosts = async(req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;

        let posts = await Post.find()
            .populate('authorId', 'username profile.avatarUrl')
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);
        
        let total = await Post.countDocuments();

        // If the user is logged in, show the user's votes for posts
        let userVotes = [];
        if (req.user) {
            let postIds = posts.map(p => p._id);
            userVotes = await Vote.find({
                userId: req.user.id,
                postId: { $in: postIds }
            });
        }

        // Add user's vote to each post
        let postsWithVotes = posts.map(post => {
            const postObj = post.toObject();
            const userVote = userVotes.find(v => v.postId.toString() === post._id.toString());
            postObj.userVote = userVote ? userVote.voteValue : 0
            return postObj;
        })

        res.json({
            posts: postsWithVotes,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
}

// Get a single post
exports.getPost = async(req, res) => {
    try {
        let post = await Post.findById(req.params.postId).populate('authorId', 'username profile.avatarUrl');

        if (!post) {
            return res.status(404).json({ msg:"Post not found!" });
        }

        // If user is logged in, get the vote
        if (req.user) {
            let vote = await Vote.findOne({
                userId: req.user.id,
                postId: post._id
            });

            post._doc.userVote = vote ? vote.voteValue : 0;
        }

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
}