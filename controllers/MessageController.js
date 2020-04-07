let conversationModel = require('../models/ConversationModel');
let messageModel = require('../models/MessageModel');

exports.getMessage = (req, res) => {
    let id = req.params['id'];
    let message = messageModel.getmessage(id);
    message.then((rows, err) => {
        res.render("MessageView", {message: rows[0], style: "messageView.css"})
    })
};

exports.getAllMessages = (req, res) => {
    let conv = conversationModel.getuser(req.session.user.id);
    conv.then((rows, err) => {
        res.render("MessageView", {messages: rows[0], style: "messageView.css"})
    })
};

exports.sendMessage = (req, res) => {
    let id = req.params['id'];
    let message = req.body.message;
    messageModel.add({id: id, message: message, style: "messageView.css"})
};