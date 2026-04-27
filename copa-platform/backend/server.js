const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'COPA platform backend running' });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
