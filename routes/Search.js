const express = require('express');
let searchController = require('../controllers/SearchController');
const router = express.Router();

router.get('/search', searchController.searchPosts);

module.exports = router;