const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logincontrol');

router.post('/', loginController.loginUser);

module.exports = router;