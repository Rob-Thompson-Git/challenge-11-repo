const express = require('express');
const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});