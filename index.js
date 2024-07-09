const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
