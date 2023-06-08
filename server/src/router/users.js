const express = require('express');
const router = express.Router();
const user=require('../controller/userController');

// Define your routes
router.get('/', user.getAllUsers);
router.get('/:id', user.getUser);
router.put('/:id',user.updateUser);
router.post('/',user.createUser);
router.post('/:id',user.updateBan);
router.delete('/:id',user.deleteUser)
// Export the router
module.exports = router;
