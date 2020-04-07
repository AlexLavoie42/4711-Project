const express = require('express');
let messageController = require('../controllers/MessageController');
const router = express.Router();

router.get('/messages/:id', messageController.getMessage);

router.get('/messages', messageController.getAllMessages);

router.post('/start-message', messageController.startConversation);

router.post('/send-message/:id', messageController.sendMessage);

module.exports = router;