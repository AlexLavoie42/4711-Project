const express = require('express');
let messageController = require('../controllers/MessageController');
const router = express.Router();

router.get('/messages/:id', messageController.getMessage);

router.get('/messages', messageController.getAllMessages);

router.post('/send-message', messageController.sendMessage);

module.exports = router;