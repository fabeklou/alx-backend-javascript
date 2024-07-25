const express = require('express');

const PORT = 7865;
const app = express();

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(Number(userId))) {
    res.status(404);
    res.end()
  } else {
    res.status(200);
    res.end(`Payment methods for cart ${userId}`);
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = express;
