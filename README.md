# AI Chat Application

An end-to-end AI-powered chat application built with **Node.js**, **Express**, **React**, and **MongoDB**. This project demonstrates how to integrate **OpenAI’s ChatGPT** or **Hugging Face** models to provide intelligent text responses to user queries.

---

## Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Prerequisites](#prerequisites)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Project Structure](#project-structure)  
7. [Environment Variables](#environment-variables)  
8. [Tech Stack](#tech-stack)  
9. [License](#license)  
10. [Contributing](#contributing)

---

## Overview
This repository contains two main parts:

- **Backend**: A Node.js/Express server that:
  - Handles user requests
  - Connects to MongoDB
  - Integrates with the AI model (ChatGPT or Hugging Face)
  
- **Frontend**: A React application where users can type in queries and receive AI-generated responses.

**Key Goals**:
- Demonstrate basic **MERN** stack usage (MongoDB, Express, React, Node.js)
- Show how to call an AI API (OpenAI or Hugging Face) securely
- Keep environment variables and sensitive keys out of the public repo

---

## Features
- **AI Text Generation**: Users can ask questions, and the AI responds contextually.
- **Simple Chat Interface**: Displays user queries and AI replies in a clean UI.
- **MongoDB Integration**: Easily store chat history or user data (optional).
- **Environment Variables**: `.env` file for storing API keys securely.

---

## Prerequisites
- **Node.js** (>= 14.x recommended)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (if you plan to clone via Git)

---

## Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/ai-chat-application.git
   cd ai-chat-application
   ```
2. **Install Backend Dependencies**  
   ```bash
   cd backend
   npm install
   ```
3. **Install Frontend Dependencies**  
   ```bash
   cd ../frontend
   npm install
   ```
4. **Configure Environment Variables** (see [Environment Variables](#environment-variables))

---

## Usage

1. **Run the Backend**  
   - Open a terminal in the `backend` folder:  
     ```bash
     npm run dev
     ```  
   - By default, the server listens on **http://localhost:5000**.  

2. **Run the Frontend**  
   - Open another terminal in the `frontend` folder:  
     ```bash
     npm start
     ```
   - The React app will start on **http://localhost:3000**.

3. **Test the Chat**  
   - In your browser, go to **http://localhost:3000**.
   - Enter a question in the text field and click **Send**.
   - The AI-generated reply should appear in the chat window.

---

## Project Structure

```
ai-chat-application/
  ├─ backend/
  │   ├─ models/        # (Mongoose schemas if storing chat data)
  │   ├─ routes/        # (API endpoints, e.g. /api/chat)
  │   ├─ server.js      # (Main server file)
  │   └─ .env           # (Environment variables - NOT committed)
  ├─ frontend/
  │   ├─ src/
  │   │   ├─ components/  # (React components, e.g. Chat.js)
  │   │   └─ App.js
  │   └─ package.json
  └─ README.md           # (This file)
```

---

## Environment Variables

Create a file called `.env` in the `backend` folder with the following entries (example):

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
OPENAI_API_KEY=sk-xxxxxxx
HUGGINGFACE_API_KEY=hf_yyyyyyy
```

> **Never** commit your `.env` file. Make sure you add `.env` to your `.gitignore`.

---

## Tech Stack
- **Backend**:  
  - Node.js  
  - Express.js  
  - Mongoose (for MongoDB)

- **AI Integrations**:  
  - [OpenAI](https://www.openai.com/) (ChatGPT)  
  - [Hugging Face Models](https://huggingface.co/)

- **Frontend**:  
  - React.js  
  - Axios (for HTTP requests)

- **Database**:  
  - MongoDB (local or via MongoDB Atlas)

---

## License

This project is licensed under the [MIT License](LICENSE).  
You are free to modify and distribute it, but please give credit.

---

## Contributing

1. **Fork** the repository  
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)  
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)  
4. **Push** to the branch (`git push origin feature/AmazingFeature`)  
5. **Open a Pull Request** on GitHub  

If you have any questions or feature requests, feel free to open an issue!

---

**Enjoy building and exploring AI-driven applications!** If you find this project useful, consider giving it a ⭐ on GitHub.
