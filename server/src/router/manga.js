const express = require('express');
const router = express.Router();
const manga=require('../controller/mangaController');

// Define your routes
router.get('/getbycate',manga.getAllMangaByIDCate)
router.get('/', manga.getAllManga);
router.post('/',manga.createManga);
router.get('/:id',manga.getAllMangabyID);
router.delete('/:id',manga.deleteMangaByID);
router.put(`/:id`,manga.updateManga)
// Export the router
module.exports = router;
