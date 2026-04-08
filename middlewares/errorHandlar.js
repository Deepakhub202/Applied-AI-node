const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    const message = err.message ? err.message : 'Internal Server Error';
    
    res.status(statusCode).json({
        success: false,
        error: message
    });
};

module.exports = errorHandler;