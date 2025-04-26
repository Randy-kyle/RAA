const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

// Get current user's profile
router.get('/profile', verifyToken, userController.getUserProfile);

// Update current user's profile
router.put('/profile', verifyToken, userController.updateUserProfile);

// (Optional) Admin-only - Get all users
router.get('/', verifyToken, userController.getAllUsers);

// (Optional) Admin-only - Delete a user by ID
router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
