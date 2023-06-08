const express = require('express');
const router = express.Router();
const user=require('../controller/userController');

// Define your routes
router.get('/', user.getAllUsers);
router.get('/:id', user.getUser);
router.put('/:id',user.updateUser);
// Export the router
module.exports = router;
