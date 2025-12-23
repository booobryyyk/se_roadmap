const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
