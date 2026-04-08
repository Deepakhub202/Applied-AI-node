const askAIService = require("../services/openAI_services");

const chat = async (req,res,next) => {
    try {
        const response = await askAIService(req.body.message);
        res.status(200).json({ message: response });
    } catch (error) {
        next(error);
    }
};

module.exports = chat;