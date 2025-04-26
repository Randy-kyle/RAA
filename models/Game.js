// backend/models/Game.js

const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    gameUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Action', 'Adventure', 'Puzzle', 'Adult', 'RPG', 'Strategy'],
    },
    price: {
      type: Number,
      default: 0,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Game', GameSchema);
