const express = require('express');
const router = express.Router();
const cate=require('../controller/contenController');

// Define your routes
router.get('/:id', cate.getContenByIDManga);
router.get('/chapter/:id', cate.getChapterbyIDManga);

// Export the router
module.exports = router;
