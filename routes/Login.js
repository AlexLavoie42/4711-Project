const express = require('express');
let loginController = require('../controllers/LoginController');
const router = express.Router();

router.post('/login', loginController.login);

router.post('/register', loginController.register);

router.get('/logout', loginController.logout);

module.exports = router;