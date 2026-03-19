const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentcontrol');

router.post('/create', commentController.createComment);
router.get('/show', commentController.showComment);


module.exports = router;