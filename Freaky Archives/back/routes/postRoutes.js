const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    createPost,
    getPosts,
    getPost
} = require('../kontollers/authController');

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:postId', getPost);

module.exports = router;