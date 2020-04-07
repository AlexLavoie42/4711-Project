let conversationModel = require('../models/ConversationModel');
let messageModel = require('../models/MessageModel');
let userModel = require('../models/UserModel');

exports.getMessage = (req, res) => {
    let id = req.params['id'];
    let message = messageModel.getmessage(id);
    message.then((rows, err) => {
        let convos = conversationModel.getconversation(id);
        let messages = rows[0];
        convos.then((rows, err) => {
            convos = rows[0];
            let user = userModel.getuser(convos[0]['id']);
            user.then((rows, err) => {
                user = rows[0];
                for(c in convos){
                    res.render("MessageView", {id: id, user: user, message: messages, style: "messageView.css"})
                }
            });
        });
    })
};

exports.getAllMessages = (req, res) => {
    let conv = conversationModel.getuser(req.session.user.id);
    conv.then((rows, err) => {
        let convs = rows[0];
        let data = userModel.getall();
        data.then((rows, err) => {
            let users = rows[0];
            let messages = [];
            for (c of convs) {
                messages.push({...users[c['user1_id']], ...c})
            }
            res.render("MessageView", {messages: messages, style: "messageView.css"})
        });
    })
};

exports.startConversation = (req, res) => {
    let user = req.session.user.id;
    let messaged = req.body.id;
    let m_created = new Date();
    conversationModel.add({subject: "", user1: user, user2: messaged});
    res.redirect('/messages')
};

exports.sendMessage = (req, res) => {
    let id = req.params['id'];
    let message = req.body.message;
    let m_created = new Date();
    m_created = m_created.toISOString().split('T')[0]+' ' + m_created.toTimeString().split(' ')[0];
    messageModel.add({id: id, message: message, timestamp: m_created});
    res.redirect('/messages/'+id)
};