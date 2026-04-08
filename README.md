# AI Chat Backend

## Overview
This is a backend project that integrates OpenAI with MongoDB to create a chat system.

## Features
- Chat with AI (OpenAI API)
- Store chat history in MongoDB
- Rate limiting
- Input validation using Joi

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- OpenAI API

## How it Works
1. User sends message
2. Message saved in database
3. Previous chat history sent to AI
4. AI response stored and returned

## Setup
1. Clone repo
2. Run `npm install`
3. Create `.env` file and add:

AI_URL=your_key  
DB_URI=your_mongo_url  

4. Run `npm start`

## API
POST /chat  

Request:
{
  "message": "Hello"
}

## Author
Deepak
