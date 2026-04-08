const Joi = require('joi');

const chatValidation = (req, res, next) => {
    const schema = Joi.object({
        message: Joi.string()
            .min(1)
            .max(1000)
            .required()
            .messages({
                'string.empty': 'Message cannot be empty',
                'string.min': 'Message must be at least 1 character',
                'string.max': 'Message cannot exceed 1000 characters',
                'any.required': 'Message field is required'
            })
    });

    const { error } = schema.validate(req.body);
    
    if (error) {
        return res.status(400).json({
            success: false,
            error: error.details[0].message
        });
    }
    
    next();
};

module.exports = chatValidation;