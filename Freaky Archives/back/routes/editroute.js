const express = require('express');
const router = express.Router();
const editController = require('../controllers/editcontrol');

router.put('/pic', editController.editPic);

module.exports = router;