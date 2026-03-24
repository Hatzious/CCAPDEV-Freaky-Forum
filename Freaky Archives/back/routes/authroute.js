const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontrol');

router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/me', authController.meUser);
router.post('/register', authController.registerUser);
router.put('/updateProfile', authController.updateProfile);

module.exports = router;