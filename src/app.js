const express = require('express');
const path = require('path');

const app = express();

// Ustawienie folderu publicznego dla plików statycznych
app.use(express.static(path.join(__dirname)));

// Obsługa ścieżki do pliku index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Uruchomienie serwera na porcie 3000 (możesz zmienić numer portu)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
