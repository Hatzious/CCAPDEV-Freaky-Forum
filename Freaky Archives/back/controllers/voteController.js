const Vote = require('../models/Vote');
const Post = require('../models/Post');

// Vote on a post
exports.vote = async(req, res) => {
    try {
        const { postId, voteValue } = req.body;

        // Check if post exists
        let post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ msg:"Post not found!" });
        }

        // Check if user has already voted on this post
        let vote = await Vote.findOne({
            userId: req.user.id,
            postId
        });

        // Update vote according to state
        if (vote) {
            if (vote.voteValue === voteValue) {
                await vote.deteleOne();
                post.score -= voteValue;
            } else {
                post.score += 2 * voteValue; // Switch from upvote to downvote or vice versa
                vote.voteValue = voteValue;
                await vote.save();
            }
        } else {
            // New vote
            vote = new Vote({
                userId: req.user.id,
                postId,
                voteValue
            });

            await vote.save();
            post.score += voteValue;
        }

        await post.save();

        res.json({
            msg:"Vote recorded!", 
            newScore: post.score,
            userVote: vote ? vote.voteValue : 0
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
};

// Get user's votes for a post
exports.getUserVotes = async(req, res) => {
    try {
        let votes = await Vote.find({ userId: req.params.userId }).populate('postId', 'title');

        res.json(votes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
};