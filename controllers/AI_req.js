const askAIService = require("../services/openAI_services");
const Chat = require("../models/chatSchema");

const chat = async (req, res, next) => {
    try {
        const { message } = req.body;
        const userId = req.user.id;

        let chatdata = await Chat.findOne({ userId });

        if (!chatdata) {
            chatdata = new Chat({
                userId,
                messages: []
            });
        }

        chatdata.messages.push({
            role: "user",
            content: message
        });

        const recentMessages = chatdata.messages.slice(-8);
        const response = await askAIService(recentMessages);
        if (!response) {
            return res.status(500).json({
                message: "Failed to get response from AI service"
            });
        }

        chatdata.messages.push({
            role: "assistant",
            content: response
        });

        await chatdata.save();

        res.json({
            message: response
        });

    } catch (error) {
        next(error);
    }
};

module.exports = chat;