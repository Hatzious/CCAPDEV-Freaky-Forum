const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    votePost,
    getUserVotes
} = require('../kontollers/postController');

router.post('/', auth, votePost);
router.get('/user/:userId', getUserVotes);

module.exports = router;