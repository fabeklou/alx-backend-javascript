const http = require('http');

const PORT = 1245;
const MESSAGE = 'Hello Holberton School!';

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(MESSAGE);
});

app.listen(PORT, () => {
});

module.exports = app;
