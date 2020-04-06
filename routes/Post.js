const express = require('express');
let postController = require('../controllers/PostController');
const router = express.Router();

router.get('/post/:id', postController.getPost);

router.get('/post/:id/send-reply', postController.sendReply);

router.get('/edit-post/:id', postController.editPost);

router.get('/delete-post/:id', postController.deletePost);

router.post('/add-post', postController.addPost);

module.exports = router;