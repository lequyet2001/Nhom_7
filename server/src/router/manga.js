const express = require('express');
const router = express.Router();
const manga=require('../controller/mangaController');

// Define your routes
router.get('/', manga.getAllManga);
router.post('/',manga.createManga);
router.get('/:id',manga.getAllMangabyID)
// Export the router
module.exports = router;
