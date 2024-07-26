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

app.get('/available_payments', (req, res) => {
  res.status(200);
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
  res.end();
});

app.post('/login', (req, res) => {
  let body = '';
  if (req.headers['content-type'] === 'application/json') {
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const loginData = JSON.parse(body);
      const userName = loginData.userName;
      res.status(200);
      res.end(`Welcome ${userName}`);
    });
  } else {
    res.status(400);
    res.end()
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = express;
