const express = require('express');
const router = express.Router();
const postController = require('../controllers/postcontrol');

router.get('/filter', postController.postFilter);
router.post('/create', postController.createPost);
router.delete('/:postId', postController.deletePost);
router.get('/:postId', postController.getPost);
router.patch('/:postId/lock', postController.setCommentLock);

module.exports = router;