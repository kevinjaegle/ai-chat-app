// routes/chat.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    const result = await axios.post(
      'https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
      {
        inputs: message
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`
        }
      }
    );
    // Hugging Face liefert meist "generated_text"
    const answer = result.data[0].generated_text;
    res.json({ reply: answer });
  } catch (err) {
    console.error('Fehler bei Hugging Face Anfrage:', err.message);
    res.status(500).json({ error: 'Problem mit dem KI-Dienst' });
  }
});

module.exports = router;
