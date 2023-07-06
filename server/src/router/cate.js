const express = require('express');
const router = express.Router();
const cate=require('../controller/cateController');

// Define your routes
router.get('/', cate.getAllcate);
router.get('/:id',cate.getCateByIDManga)

// Export the router
module.exports = router;
