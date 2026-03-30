const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontrol');

router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/me', authController.meUser);
router.get('/user/:username', authController.queryUser);
router.get('/search', authController.searchUsers);
router.post('/register', authController.registerUser);
router.put('/updateProfile', authController.updateProfile);
router.post('/resetPassword', authController.resetPassword);
router.delete('/delete', authController.deleteUser);

module.exports = router;