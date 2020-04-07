let postModel = require('../models/PostModel');

exports.getAllPosts = (req, res) => {
    let Posts = postModel.getall();
    Posts.then( ([rows, fieldData]) => {
        res.render('PostView', { posts: rows, style: "postView.css" });
    });

};

exports.getPost = (req, res) => {
    let Posts = postModel.getpost(req.params['id']);
    Posts.then( ([rows, fieldData]) => {
        res.render('posts', { post: rows, style: "postView.css" });
    });

};

exports.editPost = (req, res) => {

};

exports.deletePost = (req, res) => {

};

exports.addPost = (req, res) => {
    let p_name = req.body.subject;
    let p_about = req.body.details;
    let p_created = new Date();
    p_created = p_created.toISOString().split('T')[0]+' ' + p_created.toTimeString().split(' ')[0];

    let pOject = {
        subject: p_name,
        body: p_about,
        post_date: p_created,
        user_id: req.session.user.id
    }

    postModel.add(pOject);
    res.redirect(301, '/');
};

exports.sendReply = (req, res) => {

};
