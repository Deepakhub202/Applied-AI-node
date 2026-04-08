const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.AI_URL,
});

const askAI = async (message) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
            role: "system",
            content: `You are a helpful assistant,
            reply to the user's message in a clear and concise manner
            in the same language as the user's message. in max 100 words`
        },
        { 
            role: "user", 
            content: message 
        },
      ],
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = askAI;