require('dotenv').config(); // Lädt .env-Datei
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Express-App erzeugen
const app = express();

// Middleware einbinden
app.use(cors());
app.use(bodyParser.json());

// Port wählen (entweder .env oder Standard 5000)
const PORT = process.env.PORT || 5000;

// Mit MongoDB verbinden
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB verbunden!'))
  .catch((err) => console.error('Fehler bei MongoDB-Verbindung:', err));

// Test-Route, um zu prüfen, ob Server läuft
app.get('/', (req, res) => {
  res.send('Server läuft!');
});

// Routes für Chats einbinden
const chatRoute = require('./routes/chat');
app.use('/api/chat', chatRoute);

// Server starten
app.listen(PORT, () => {
  console.log(`Server hört auf Port ${PORT}`);
});
