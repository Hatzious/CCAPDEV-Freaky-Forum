const Post = require('../models/Post');
const User = require('../models/User');
const Vote = require('../models/Vote');
const { yeetusDeletus } = require('../services/purger');

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
            let tagList = tags.includes(',') ? tags.split(',') : tags;
            quarry.tags = { $all: tagList };
        }

        let posts = await Post.find(quarry)
        .populate("author", "username profile")
        .sort(sorted)
        .lean();

        if (req.session.user) {
            const userId = req.session.user._id;
        
            const userVotes = await Vote.find({ 
                userId, 
                postId: { $in: posts.map(p => p._id) } 
            });

            posts = posts.map(post => {
                const voteEntry = userVotes.find(v => v.postId.toString() === post._id.toString());
                return {
                    ...post,
                    currentUserVote: voteEntry ? voteEntry.voteValue : 0
                };
            });
        }

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

        const { title, summary, content, tags } = req.body;

        
        const newPost = await Post.create({
            author: req.session.user._id, 
            title,
            summary,
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

        await yeetusDeletus(postId);
        res.json({ message: "Statement deleted successfully." });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('author','username profile');

        if (!post) {
            return res.status(404).json({ message: "Statement not found." });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.setCommentLock = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: "You must be logged in to update lock state." });
        }

        const { postId } = req.params;
        const { locked } = req.body;

        if (typeof locked !== 'boolean') {
            return res.status(400).json({ message: "Locked flag must be boolean." });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Statement not found." });
        }

        if (post.author.toString() !== req.session.user._id.toString()) {
            return res.status(403).json({ message: "You can only lock/unlock your own statement comments." });
        }

        post.commentsLocked = locked;
        await post.save();

        res.status(200).json({ message: locked ? "Comments locked." : "Comments unlocked.", post });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.votePost = async (req, res) => {
    try {
        
        if (!req.session.user) {
            return res.status(401).json({ message: "You must be logged in to vote." });
        }

        const userId = req.session.user._id;
        let { postId, voteValue } = req.body;
        voteValue = Number(voteValue);
        const vote = await Vote.findOne({userId, postId});
        let change = 0;

        if (!vote) {
            await Vote.create({userId, postId, voteValue});
            change = voteValue;
        } else if (vote.voteValue === voteValue) {
            await Vote.deleteOne({userId, postId});
            change = -voteValue; 
        } else {
            change = 2 * voteValue
            vote.voteValue = voteValue;
            await vote.save();
        }
        
        const updatedPost = await Post.findByIdAndUpdate(postId, {$inc:{score: change}}, {new: true});

        if (!updatedPost) {
            return res.status(404).json({ message: "Statement no longer exists in archives." });
        }

        res.status(200).json({ message: "Voting is done", changes: {
            score: updatedPost.score,
            userVote: vote && vote.voteValue === voteValue ? 0 : voteValue
        }});

    } catch (error) {
        res.status(500).json({ message: "Problem at votePost API: " + error.message });
    }
};