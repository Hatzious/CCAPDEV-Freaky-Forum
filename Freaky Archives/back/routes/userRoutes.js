const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    getUserProfile,
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing
} = require('../controllers/userController');

router.get('/:userId', getUserProfile);
router.post('/:userId/follow', auth, followUser);
router.delete('/:userId/unfollow', auth, unfollowUser);
router.get('/:userId/followers', getFollowers);
router.get('/:userId/following', getFollowing);

module.exports = router;