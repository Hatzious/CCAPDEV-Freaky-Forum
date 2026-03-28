const Post = require('../models/Post');
const Comment = require('../models/Comment');

const yeetusDeletus = async (postId) => {
    await Comment.deleteMany({ postId: postId });
    await Post.findByIdAndDelete(postId);
};

module.exports = { yeetusDeletus };