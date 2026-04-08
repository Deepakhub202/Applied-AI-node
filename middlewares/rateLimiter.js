const rateLimit = require('express-rate-limit');

const chatRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 5, 
    message: {
        success: false,
        error: 'Too many requests from this IP, please try again after a minute'
    },
    standardHeaders: true, 
    legacyHeaders: false 
});

module.exports = chatRateLimiter;
