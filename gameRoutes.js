const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const verifyToken = require('../middleware/verifyToken');

// Get all games (Public)
router.get('/', gameController.getAllGames);

// Get single game by ID (Public)
router.get('/:id', gameController.getGameById);

// Create new game (Admin only)
router.post('/', verifyToken, gameController.createGame);

// Update game by ID (Admin only)
router.put('/:id', verifyToken, gameController.updateGame);

// Delete game by ID (Admin only)
router.delete('/:id', verifyToken, gameController.deleteGame);

module.exports = router;
