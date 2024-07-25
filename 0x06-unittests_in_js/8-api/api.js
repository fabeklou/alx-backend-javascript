const express = require('express');

const PORT = 7865;
const app = express();

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = express;
