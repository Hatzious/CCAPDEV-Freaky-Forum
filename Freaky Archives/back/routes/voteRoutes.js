const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    vote,
    getUserVotes
} = require('../controllers/voteController');

router.post('/', auth, vote);
router.get('/user/:userId', getUserVotes);

module.exports = router;