const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontrol');

router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/me', authController.meUser);
router.get('/user/:username', authController.queryUser);
router.post('/register', authController.registerUser);
router.put('/updateProfile', authController.updateProfile);
router.delete('/delete', authController.deleteUser);

module.exports = router;