const User = require("../models/User");
const Follow = require("../models/Follow");

// Get the user profile
exports.getUserProfile = async(req, res) => {
    try {
        let user = await User.findById(req.params.userId).select('-password');

        if (!user) {
            return res.status(404).json({ msg:"User not found!" });
        }

        // Count followers and following count
        // const followers = await Follow.countDocuments({ following: req.params.userId });
        // const following = await Follow.countDocuments({ follower: req.params.userId });

        // user.stats.followerCount = followers;
        // user.stats.followingCount = following;

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    };
}

// Follow the user
exports.followUser = async(req, res) => {
    try {
        const { userId } = req.params;

        // Check if user is trying to follow self
        if (userId === req.user.id) {
            return res.status(400).json({ msg:"Bad request: Cannot follow yourself!" });
        }

        // Check if user exists
        let userToFollow = await User.findById(userId);

        if (!userToFollow) {
            return res.status(404).json({ msg:"User not found!" });
        }

        // Create follow link
        let follow = new Follow({
            follower: req.user.id,
            following: userId
        });

        await follow.save();

        res.json({ msg:"User followed successfully!"});
    } catch (err) {
        // Check if the request will be duplicated
        if (err.code === 11000) {
            return res.status(400).json({ msg:"Already following this user!" });
        }

        console.error(err.message);
        res.status(500).send("Server error!");
    };
}

// Unfollow the user
exports.unfollowUser = async(req, res) => {
    try {
        const { userId } = req.params;

        await Follow.findOneAndDelete({
            follower: req.user.id,
            following: userId
        });

        res.json({ msg:"User unfollowed successfully!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
}

// Get followers
exports.getFollowers = async(req, res) => {
    try {
        let followers = await Follow.find({ following: req.params.userId }).populate('follower', 'username profile.avatarUrl');

        res.json(followers.map(f => f.follower));
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
}

// Get following
exports.getFollowing = async(req, res) => {
    try {
        let following = await Follow.find({ follower: req.params.userId }).populate('following', 'username profile.avatarUrl');

        res.json(following.map(f => f.following));
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
}
