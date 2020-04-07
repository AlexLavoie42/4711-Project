const express = require('express');
let profileController = require('../controllers/ProfileController');
const router = express.Router();

router.get('/profile/:id', profileController.getProfile);

router.get('/edit-profile', (req, res) => res.render("EditProfileView"));

router.post('/edit-profile', profileController.editProfile);

module.exports = router;