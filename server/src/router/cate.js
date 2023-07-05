const express = require('express');
const router = express.Router();
const manga=require('../controller/cateController');

// Define your routes
router.get('/', manga.getAllcate);
// router.post('/',manga.createManga);

// Export the router
module.exports = router;
