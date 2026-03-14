const express = require('express');
const router = express.Router();
const postController = require('../controllers/postcontrol');

router.get('/filter', postController.postFilter);

module.exports = router;