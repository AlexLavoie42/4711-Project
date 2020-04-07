let postModel = require('../models/PostModel');

exports.getAllPosts = (req, res) => {
    let Posts = postModel.getAll();
    Posts.then( ([rows, fieldData]) => {
        res.render('posts', { post: rows, postsCSS: true });
    });

};

exports.getPost = (req, res) => {
    let Posts = postModel.getPost(req.params['id']);
    Posts.then( ([rows, fieldData]) => {
        res.render('posts', { post: rows, postsCSS: true });
    });

};

exports.editPost = (req, res) => {

};

exports.deletePost = (req, res) => {

};

exports.addPost = (req, res) => {
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.imageURL;

    let pOject = {
        name: p_name,
        about: p_about,
        imageURL: p_imageURL
    }

    peopleModel.add(pOject);
    res.redirect(301, '/peoples');
};

exports.sendReply = (req, res) => {

};
