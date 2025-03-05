// src/components/Chat.js
import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;
    
    // Eigene Nachricht zum Chat hinzufügen
    setChat([...chat, { user: 'Ich', text: message }]);

    // Eingabefeld leeren
    setMessage('');

    try {
      // Anfrage ans Backend
      const response = await axios.post('http://localhost:5000/api/chat', { 
        message: message 
      });

      // KI-Antwort in den Chat hängen
      setChat(prev => [...prev, { user: 'AI', text: response.data.reply }]);
    } catch (err) {
      console.error('Fehler im Frontend:', err);
    }
  };

  return (
    <div>
      <h2>Mein KI-Chat</h2>
      <div>
        {chat.map((c, i) => (
          <p key={i}><b>{c.user}:</b> {c.text}</p>
        ))}
      </div>
      <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Schreib deine Frage..."
      />
      <button onClick={sendMessage}>Senden</button>
    </div>
  );
}

export default Chat;
