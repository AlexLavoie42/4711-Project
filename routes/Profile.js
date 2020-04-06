const express = require('express');
let profileController = require('../controllers/ProfileController');
const router = express.Router();

router.get('/profile/:id', profileController.getProfile);

router.get('/edit-profile/:id', profileController.editProfile);

router.get('/create-profile', profileController.editProfile);

module.exports = router;