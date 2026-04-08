const express = require('express');
const router = express.Router();
const chat = require('../controllers/AI_req');
const chatValidation = require('../middlewares/chatValidater');
const chatRateLimiter = require('../middlewares/rateLimiter');

router.post('/chat', chatRateLimiter, chatValidation, chat);

module.exports = router;