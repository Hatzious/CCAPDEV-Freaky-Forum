const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentcontrol');

router.post('/create', commentController.createComment);

module.exports = router;