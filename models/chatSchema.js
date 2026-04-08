const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true
    },
    content: {
        type: String,
        required: true
    }
},{id: false});

const chatSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    messages: [messageSchema],

}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;